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
    }
    return handlers;
}

// Get handlers from cache, fetching if necessary
async function getHandlers() {
    const cached = await chrome.storage.local.get(["handlers", "lastFetched"]);
    if (cached.handlers) {
        return cached.handlers;
    }
    const handlers = await fetchAndCacheHandlers();
    return handlers || null;
}

// Track the last active tab
let lastTabId = null;
let currentTabId = null;

chrome.tabs.onActivated.addListener((activeInfo) => {
    if (currentTabId !== activeInfo.tabId) {
        lastTabId = currentTabId; // Set lastTabId to the previous current tab
        currentTabId = activeInfo.tabId; // Update currentTabId to the new active tab
    }
});

// Clear lastTabId if it’s closed
chrome.tabs.onRemoved.addListener((tabId) => {
    if (tabId === lastTabId) {
        lastTabId = null;
    }
});
// Set up periodic fetching on extension startup
chrome.runtime.onStartup.addListener(() => {
    chrome.alarms.create("refreshHandlers", { periodInMinutes: 60 });
    chrome.storage.local.get(["handlers"], (result) => {
        if (!result.handlers) {
            fetchAndCacheHandlers();
        }
    });
});

// Handle commands
chrome.commands.onCommand.addListener(async (command) => {
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
                const siteHandlers = handlers[hostname];
                if (!siteHandlers) {
                    return;
                }
                const key = command === "focus_search" ? "search" : "write";
                const paths = siteHandlers[key] || [];
                chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    world: "MAIN",
                    func: (paths) => {
                        function findElement(paths) {
                            for (const path of paths) {
                                if (typeof path === "string") {
                                    const element =
                                        document.querySelector(path);
                                    if (element) return element;
                                } else if (Array.isArray(path)) {
                                    let currentNode = document;
                                    for (const step of path) {
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
                        }
                    },
                    args: [paths],
                });
            }
        );
    } else if (command === "adjacent_tab_right") {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (!tabs.length) return;
            const currentTab = tabs[0];
            chrome.tabs.create({
                url: "chrome://newtab",
                index: currentTab.index + 1,
                active: true,
            });
        });
    } else if (command === "scroll_top") {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (!tabs.length) return;
            const tab = tabs[0];
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                func: () => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                },
            });
        });
    } else if (command === "duplicate_tab") {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (!tabs.length) return;
            const tab = tabs[0];
            chrome.tabs.duplicate(tab.id);
        });
    } else if (command === "mute_site") {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (!tabs.length) return;
            const tab = tabs[0];
            chrome.tabs.get(tab.id, (tabInfo) => {
                const muted = !tabInfo.mutedInfo.muted;
                chrome.tabs.update(tab.id, { muted: muted });
            });
        });
    } else if (command === "new_tab_and_close_other_tabs") {
        chrome.tabs.create(
            { url: "https://www.google.com", active: true },
            (newTab) => {
                chrome.tabs.query({ currentWindow: true }, (tabs) => {
                    const tabsToRemove = tabs
                        .filter((tab) => tab.id !== newTab.id)
                        .map((tab) => tab.id);
                    chrome.tabs.remove(tabsToRemove);
                });
            }
        );
    } else if (command === "delete_tab") {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (!tabs.length) return;
            const tab = tabs[0];
            chrome.tabs.remove(tab.id);
        });
    } else if (command === "scroll_bottom") {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (!tabs.length) return;
            const tab = tabs[0];
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                func: () => {
                    window.scrollTo({
                        top: document.body.scrollHeight,
                        behavior: "smooth",
                    });
                },
            });
        });
    } else if (command === "toggle_pin_tab") {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (!tabs.length) return;
            const tab = tabs[0];
            chrome.tabs.update(tab.id, { pinned: !tab.pinned });
        });
    } else if (command === "switch_last_tab") {
        if (lastTabId && lastTabId !== currentTabId) {
            chrome.tabs.update(lastTabId, { active: true }, (tab) => {
                if (chrome.runtime.lastError) {
                    console.error(
                        "Error switching to last tab:",
                        chrome.runtime.lastError
                    );
                    lastTabId = null;
                } else {
                    // Swap current and last tab IDs for toggling
                    const temp = currentTabId;
                    currentTabId = lastTabId;
                    lastTabId = temp;
                }
            });
        }
    }
});

// Set up alarm for periodic handler refresh
function setupAlarm() {
    chrome.alarms.create("refreshHandlers", { periodInMinutes: 60 });
}

setupAlarm();

// Handle alarm triggers
chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "refreshHandlers") {
        fetchAndCacheHandlers();
    }
});
