// Fetch the handlers JSON from the external source
async function loadHandlers() {
    try {
        const response = await fetch(
            "https://altshortcuts.pages.dev/handlers.json"
        );
        const handlers = await response.json();
        // console.log("Successfully fetched handlers from server:", handlers); // Commented out for production
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
        // console.log("Handlers cached at:", new Date().toLocaleTimeString()); // Commented out for production
    } else {
        // console.log("No handlers to cache - fetch failed"); // Commented out for production
    }
    return handlers;
}

// Get handlers from cache, fetching if necessary
async function getHandlers() {
    const cached = await chrome.storage.local.get(["handlers", "lastFetched"]);
    if (cached.handlers) {
        // console.log(
        //     "Returning cached handlers, last fetched at:",
        //     new Date(cached.lastFetched).toLocaleTimeString()
        // ); // Commented out for production
        return cached.handlers; // Use cached version regardless of age, as alarm handles updates
    }
    // console.log("No cache found, fetching handlers..."); // Commented out for production
    // If no cache exists, fetch immediately
    const handlers = await fetchAndCacheHandlers();
    return handlers || null; // Return null if fetch fails and no cache exists
}

// Set up periodic fetching on extension startup
chrome.runtime.onStartup.addListener(() => {
    // console.log("Extension started, setting up refresh alarm"); // Commented out for production
    // Create an alarm to fetch handlers every 60 minutes
    chrome.alarms.create("refreshHandlers", { periodInMinutes: 60 });

    // Perform an initial fetch if no cache exists
    chrome.storage.local.get(["handlers"], (result) => {
        if (!result.handlers) {
            // console.log("No cached handlers on startup, initiating fetch"); // Commented out for production
            fetchAndCacheHandlers();
        } else {
            // console.log(
            //     "Cached handlers found on startup, last fetched:",
            //     new Date(result.lastFetched).toLocaleTimeString()
            // ); // Commented out for production
        }
    });
});

chrome.commands.onCommand.addListener(async (command) => {
    // console.log("Command received:", command); // Commented out for production

    // Handle existing focus commands
    if (command === "focus_search" || command === "focus_write") {
        const handlers = await getHandlers();
        if (!handlers) {
            console.error("No handlers available");
            return;
        }

        chrome.tabs.query(
            { active: true, currentWindow: true },
            async (tabs) => {
                if (!tabs.length) return;
                const tab = tabs[0];
                const hostname = new URL(tab.url).hostname;
                // console.log("Active tab hostname:", hostname); // Commented out for production

                const siteHandlers = handlers[hostname];
                if (!siteHandlers) {
                    // console.log("No handlers for this hostname:", hostname); // Commented out for production
                    return;
                }

                const key = command === "focus_search" ? "search" : "write";
                const paths = siteHandlers[key] || [];
                // console.log(`Executing ${key} command with paths:`, paths); // Commented out for production

                chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    world: "MAIN",
                    func: (paths) => {
                        function findElement(paths) {
                            for (const path of paths) {
                                // console.log("Checking path:", path); // Commented out for production
                                if (typeof path === "string") {
                                    const element =
                                        document.querySelector(path);
                                    if (element) return element;
                                } else if (Array.isArray(path)) {
                                    let currentNode = document;
                                    for (const step of path) {
                                        // console.log("Step:", step); // Commented out for production
                                        if (!currentNode) break;
                                        if (step.selector) {
                                            currentNode =
                                                currentNode.querySelector(
                                                    step.selector
                                                );
                                        }
                                        if (step.shadowRoot && currentNode) {
                                            currentNode =
                                                currentNode.shadowRoot;
                                        }
                                    }
                                    if (currentNode) return currentNode;
                                } else if (path.type === "findByText") {
                                    const elements = Array.from(
                                        document.querySelectorAll(path.selector)
                                    );
                                    const target = elements.find(
                                        (el) =>
                                            el.textContent.trim() === path.text
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
                            // console.log("Activated element:", element); // Commented out for production
                        } else {
                            // console.log("No element found for the given paths"); // Commented out for production
                        }
                    },
                    args: [paths],
                });
            }
        );
    }

    // Handle new tab commands
    else if (
        command === "adjacent_tab_right" ||
        command === "adjacent_tab_left"
    ) {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (!tabs.length) return;
            const currentTab = tabs[0];
            const currentIndex = currentTab.index;

            // Determine the new tab's position
            const newIndex =
                command === "adjacent_tab_right"
                    ? currentIndex + 1
                    : currentIndex;

            // Create the new tab
            chrome.tabs.create(
                {
                    url: "chrome://newtab", // Default new tab page, replace with desired URL if needed
                    index: newIndex,
                    active: true, // Optional: Set to true if you want the new tab to be active
                },
                (newTab) => {
                    // console.log(
                    //     `New tab created at index ${newTab.index} with ID ${newTab.id}`
                    // ); // Commented out for production
                }
            );
        });
    } else if (
        command === "move_tab_right" ||
        command === "move_tab_left" ||
        command === "delete_tab"
    ) {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (!tabs.length) return;
            const currentTab = tabs[0];
            const currentIndex = currentTab.index;

            if (command === "move_tab_right" || command === "move_tab_left") {
                // Get all tabs in the current window to determine bounds
                chrome.tabs.query({ currentWindow: true }, (allTabs) => {
                    if (!allTabs.length) return;
                    const totalTabs = allTabs.length;
                    let newIndex;

                    if (command === "move_tab_right") {
                        newIndex = (currentIndex + 1) % totalTabs; // Wrap around to first tab if at end
                    } else {
                        // move_tab_left
                        newIndex = (currentIndex - 1 + totalTabs) % totalTabs; // Wrap around to last tab if at start
                    }

                    const targetTab = allTabs[newIndex];
                    chrome.tabs.update(
                        targetTab.id,
                        { active: true },
                        (updatedTab) => {
                            // console.log(
                            //     `Moved to tab at index ${newIndex} with ID ${updatedTab.id}`
                            // ); // Commented out for production
                        }
                    );
                });
            } else if (command === "delete_tab") {
                chrome.tabs.remove(currentTab.id, () => {
                    if (chrome.runtime.lastError) {
                        console.error(
                            "Error deleting tab:",
                            chrome.runtime.lastError
                        );
                    } else {
                        // console.log(
                        //     `Tab with ID ${currentTab.id} at index ${currentIndex} deleted`
                        // ); // Commented out for production
                    }
                });
            }
        });
    }
});

function setupAlarm() {
    chrome.alarms.create("refreshHandlers", { periodInMinutes: 720 });
    // console.log("Alarm created successfully"); // Commented out for production
}

setupAlarm();

// Handle the alarm when it triggers
chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "refreshHandlers") {
        // console.log("Alarm triggered, refreshing handlers"); // Commented out for production
        fetchAndCacheHandlers();
    }
});
