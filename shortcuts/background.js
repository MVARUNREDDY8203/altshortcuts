// Fetch the handlers JSON from the external source
async function loadHandlers() {
    try {
        const response = await fetch(
            "https://altshortcuts.pages.dev/handlers.json"
        );
        const handlers = await response.json();
        return handlers;
    } catch (error) {
        console.error("Failed to load handlers.json:", error);
        return null;
    }
}

// Fetch and cache handlers
async function fetchAndCacheHandlers() {
    const handlers = await loadHandlers();
    if (handlers) {
        await chrome.storage.local.set({
            handlers: handlers,
            lastFetched: Date.now(),
        });
        console.log("Handlers fetched and cached successfully");
    }
    return handlers;
}

// Get handlers from cache, fetching if necessary
async function getHandlers() {
    const cached = await chrome.storage.local.get(["handlers", "lastFetched"]);
    if (cached.handlers) {
        return cached.handlers; // Use cached version regardless of age, as alarm handles updates
    }
    // If no cache exists, fetch immediately
    const handlers = await fetchAndCacheHandlers();
    return handlers || null; // Return null if fetch fails and no cache exists
}

// Set up periodic fetching on extension startup
chrome.runtime.onStartup.addListener(() => {
    // Create an alarm to fetch handlers every 5 minutes
    chrome.alarms.create("refreshHandlers", { periodInMinutes: 5 });

    // Perform an initial fetch if no cache exists
    chrome.storage.local.get(["handlers"], (result) => {
        if (!result.handlers) {
            fetchAndCacheHandlers();
        }
    });
});

// Handle alarm triggers
chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "refreshHandlers") {
        fetchAndCacheHandlers();
    }
});

// Listen for commands and use cached handlers
chrome.commands.onCommand.addListener(async (command) => {
    const handlers = await getHandlers();
    if (!handlers) {
        console.error("No handlers available");
        return;
    }

    chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
        if (!tabs.length) return;
        const tab = tabs[0];
        const hostname = new URL(tab.url).hostname;

        const siteHandlers = handlers[hostname];
        if (!siteHandlers) return;

        const key = command === "focus_search" ? "search" : "write";
        const paths = siteHandlers[key] || [];

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            world: "MAIN",
            func: (paths) => {
                function findElement(paths) {
                    for (const path of paths) {
                        console.log(path);
                        if (typeof path === "string") {
                            const element = document.querySelector(path);
                            if (element) return element;
                        } else if (Array.isArray(path)) {
                            // shadow dom traversal
                            let currentNode = document;
                            for (const step of path) {
                                console.log(step);
                                if (!currentNode) break;
                                if (step.selector) {
                                    currentNode = currentNode.querySelector(
                                        step.selector
                                    );
                                }
                                if (step.shadowRoot && currentNode) {
                                    currentNode = currentNode.shadowRoot;
                                }
                            }
                            if (currentNode) return currentNode;
                        } else if (path.type === "findByText") {
                            const elements = Array.from(
                                document.querySelectorAll(path.selector)
                            );
                            const target = elements.find(
                                (el) => el.textContent.trim() === path.text
                            );
                            if (target) {
                                return path.closest
                                    ? target.closest(path.closest)
                                    : target;
                            }
                        }
                    }
                    return null;
                }

                const element = findElement(paths);
                if (element) {
                    element.focus();
                    element.click();
                    console.log("Activated element:", element);
                } else {
                    console.log("No element found for the given paths");
                }
            },
            args: [paths],
        });
    });
});
