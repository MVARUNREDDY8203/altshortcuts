# ALT Shortcuts

A Chrome extension for faster browser navigation and tab management using keyboard shortcuts.

## Overview

ALT Shortcuts enhances your browsing experience by providing keyboard shortcuts for common actions:

-   Focus search fields on popular websites (Alt+S)
-   Focus text input/compose areas (Alt+W)
-   Tab management (new tabs, duplicate, pin, etc.)
-   Page navigation (scroll to top/bottom)
-   Site-specific controls (mute)

## Features

### Website Navigation

-   **Alt+S**: Focus search input on supported sites
-   **Alt+W**: Focus compose/write/post input on supported sites

### Tab Management

-   **Alt+R**: Open a new tab to the right of current tab
-   **Alt+T** (not set by default): Switch to last used tab
-   **Alt+D** (not set by default): Duplicate current tab
-   **Alt+P** (not set by default): Pin/unpin current tab
-   (Not set by default): Open Google Homepage and close all other tabs

### Page Controls

-   **Alt+U**: Scroll to top of page
-   **Alt+V** (not set by default): Scroll to bottom of page
-   **Alt+M** (not set by default): Mute/unmute site

## How It Works

### Component Structure

The extension consists of these main files:

-   `manifest.json`: Defines extension metadata, permissions, and keyboard shortcuts
-   `background.js`: Service worker that handles all background logic
-   `popup.html`/`popup.js`: UI when clicking the extension icon
-   `handlers.json`: Remote configuration file with website-specific selectors for - `focus_search` and `focus_write`.
    > `handlers.json` is hosted on a separate [Cloudflare endpoint](https://altshortcuts.pages.dev/handlers.js). This is done so that we don't have to depend on frequent Chrome Web Store updates for features - `focus_search` and `focus_write`.
    > so if any website's UI has changed the update would be quick from backend and since we refresh the handlers every 60 mins and cache em, it would work most of the time.
    > {Loosely Coupled Architecture :) }

### Background Service Worker (`background.js`)

The background script is the core of the extension with several key functions:

1. **Handler Management:**

    - Fetches and caches website-specific element selectors from a remote JSON file
    - Updates the cache hourly via Chrome's alarm API
    - Provides handlers to other components when needed

2. **Command Handling:**

    - Listens for keyboard shortcuts and executes appropriate actions.
    - For site-specific actions `focus_search` and `focus_write`, it:
        - Identifies the current website
        - Retrieves the appropriate selectors from handlers
        - Executes scripts to find and focus the target elements

3. **Tab Tracking:**
    - Keeps track of the current and previous tabs for `switch_last_tab` functionality
    - Updates this information when tabs are activated or closed

### Popup Interface (`popup.html`/`popup.js`)

The popup provides:

-   Visual list of all available shortcuts and their current key bindings
-   Link to Chrome's shortcut configuration page
-   First-time user onboarding experience
-   Links to the project website and GitHub repository

### Website Handlers (`handlers.json`)

This external configuration file defines selectors for each supported website:

-   Maps domain names to selector objects
-   For each domain, provides "search" and "write" selectors
-   Supports multiple selector formats:
    -   Simple CSS selectors as strings
    -   Array path traversal for complex DOM structures
    -   Shadow DOM penetration
    -   Text-based element finding

## Advanced: `Background.js` commands functionality

#### `focus_search` (Default: Alt+S)

-   Focuses on the search input field of supported websites.
-   Uses the handlers.json file to find the correct search element for the current site.
-   Searches through multiple potential selectors until it finds a valid search input.
-   Works with standard DOM elements as well as shadow DOM components.

#### `focus_write` (Default: Alt+W)

-   Focuses on the compose/write/post button or field on supported websites.
-   Similar to focus_search, it uses the handlers.json file to identify writing elements.
-   Enables quick access to create content on social media, email clients, and other platforms.
-   Handles both simple selectors and complex nested elements.

#### `adjacent_tab_right` (Default: Alt+R)

-   Opens a new tab immediately to the right of your current tab.
-   Maintains your workflow by keeping related tabs grouped together.
-   The new tab becomes active immediately.

#### `duplicate_tab` (Recommended: Alt+D)

-   Creates an exact duplicate of your current tab.
-   Preserves all page state and history.
-   Useful for comparing information or working with multiple instances of the same page.

#### `mute_site` (Recommended: Alt+M)

-   Toggles audio muting for the current tab.
-   Checks the current mute state and reverses it.
-   Provides a quick way to silence unexpected audio without closing tabs.

#### `new_tab_and_close_other_tabs` (Recommended: Alt+G)

-   Opens Google Homepage in a new tab.
-   Closes all other tabs in the current window.
-   Useful for quickly clearing your workspace and starting fresh.

#### `delete_tab` (No default key)

-   Closes the current tab.
-   Provides a keyboard alternative to clicking the X button.

#### `toggle_pin_tab` (Recommended: Alt+P)

-   Toggles the pinned state of the current tab.
-   Pinned tabs stay at the left side of the tab bar and remain open when new windows are created.
-   Useful for keeping important tabs accessible.

#### `switch_last_tab` (Recommended: Alt+T)

-   Switches to the previously active tab.
-   Maintains a history of tab usage to enable toggling between two tabs.
-   Particularly useful when working between two related tabs.

#### `scroll_top` (Default: Alt+U)

-   Smoothly scrolls to the top of the current page.
-   Uses smooth scrolling behavior for a better user experience.
-   Eliminates the need to manually scroll back to the top of long pages.

#### `scroll_bottom` (Recommended: Alt+V)

-   Smoothly scrolls to the bottom of the current page.
-   Particularly useful for quickly reaching comments, footers, or other bottom-page content.
-   Uses the same smooth scrolling behavior as scroll_top.

## Advanced: Element Selection Methods

The extension supports several methods to find elements on websites:

1. **Simple CSS Selectors**:

    ```json
    "search": ["input[name='search_query']"]
    ```

2. **Shadow DOM Traversal**:

    ```json
    "search": [
      [
        { "selector": "#outer-element", "shadowRoot": true },
        { "selector": "#inner-element" }
      ]
    ]
    ```

3. **Text-Based Selection**:
    ```json
    "write": [
      { "type": "findByText", "selector": "button", "text": "Compose", "closest": "div.button-wrapper" }
    ]
    ```

## Contributing

Contributions are welcome! Visit the GitHub repository at: [ALT SHORTCUTS](https://github.com/mvarunreddy8203/altshortcuts)

## Credits

Created by [M Varun Reddy](https://github.com/mvarunreddy8203)
