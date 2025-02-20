// chrome.commands.onCommand.addListener((command) => {
//     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//         if (!tabs.length) return;
//         let tab = tabs[0];

//         chrome.scripting.executeScript({
//             target: { tabId: tab.id },
//             func: (cmd) => {
//                 const hostname = window.location.hostname;

//                 // Define functions inside executeScript
//                 const handlers = {
//                     "www.youtube.com": {
//                         search: () =>
//                             document.querySelector(
//                                 "input[name=search_query]"
//                             ) ||
//                             document.querySelector(
//                                 "#button > yt-icon > span > div"
//                             ),
//                         write: () =>
//                             document.querySelector("a[href='/upload']") ||
//                             document.querySelector(
//                                 "button[aria-label='Create']"
//                             ),
//                     },
//                     "x.com": {
//                         search: () =>
//                             document.querySelector(
//                                 "input[aria-label = 'Search query']"
//                             ) ||
//                             document.querySelector(
//                                 "a[aria-label = 'Search and explore']"
//                             ),
//                         write: () =>
//                             document.querySelector("a[aria-label = 'Post']"),
//                     },
//                     "www.reddit.com": {
//                         search: () =>
//                             document
//                                 .querySelector(
//                                     "body > shreddit-app > reddit-header-large > reddit-header-action-items > header > nav > div.flex-1.py-xs.flex.justify-stretch > div > div > search-dynamic-id-cache-controller > reddit-search-large"
//                                 )
//                                 .shadowRoot?.querySelector("#search-input")
//                                 .shadowRoot?.querySelector("input[type=text]"),
//                         write: () => document.querySelector("#create-post"),
//                     },
//                     "www.perplexity.ai": {
//                         search: () =>
//                             document.querySelector(
//                                 "#__next > main > div > div > div.erp-tab\\:p-0.erp-new_tab\\:p-0.md\\:gap-xs.lg\\:pb-sm.lg\\:pr-sm.lg\\:pt-sm.isolate.flex.h-auto.max-h-screen.w-full.min-w-0.grow.flex-col > div.erp-tab\\:rounded-none.erp-new_tab\\:rounded-none.erp-tab\\:shadow-none.erp-new_tab\\:shadow-none.erp-tab\\:shadow-left-sm.erp-new_tab\\:shadow-left-sm.flex-1.overflow-clip.bg-clip-border.shadow-sm.lg\\:rounded-lg.md\\:dark\\:border.border-borderMain\\/50.ring-borderMain\\/50.divide-borderMain\\/50.dark\\:divide-borderMainDark\\/50.dark\\:ring-borderMainDark\\/50.dark\\:border-borderMainDark\\/50.bg-background.dark\\:bg-backgroundDark > div > div.border-b.border-borderMain\\/50.ring-borderMain\\/50.divide-borderMain\\/50.dark\\:divide-borderMainDark\\/50.dark\\:ring-borderMainDark\\/50.dark\\:border-borderMainDark\\/50.bg-transparent > div > div.sticky.top-0.z-\\[5\\].rounded-t-xl.border-borderMain\\/50.ring-borderMain\\/50.divide-borderMain\\/50.dark\\:divide-borderMainDark\\/50.dark\\:ring-borderMainDark\\/50.dark\\:border-borderMainDark\\/50.bg-background.dark\\:bg-backgroundDark > div > div > div.gap-sm.hidden.grow.items-center.justify-between.md\\:flex > div.gap-sm.flex.grow.items-center.justify-end > div.max-w-md.grow > div > div > div > div.right-sm.gap-sm.bg-background.dark\\:bg-offsetDark.absolute.flex.items-center.rounded-full"
//                             ) ||
//                             document.querySelector("input[type='search']") ||
//                             document.querySelector("a[href='/library']"), // something isnt working here
//                         write: () => document.querySelector("textarea"),
//                     },
//                     "mail.google.com": {
//                         search: () =>
//                             document.querySelector(
//                                 "input[aria-label='Search mail']"
//                             ),
//                         write: () =>
//                             document.querySelector(
//                                 "body > div:nth-child(29) > div.nH > div > div.nH.aqk.aql.bkL > div.aqn.aIH.nH.oy8Mbf.apV > div.aBO > div.aic > div > div"
//                             ),
//                     },
//                     "chatgpt.com": {
//                         search: () =>
//                             document.querySelector(
//                                 "button[aria-label = 'Ctrl K"
//                             ), // No search bar
//                         write: () => document.querySelector("#prompt-textarea"),
//                     },
//                     "www.linkedin.com": {
//                         search: () =>
//                             document.querySelector(
//                                 "input[aria-label='Search']"
//                             ),
//                         write: () => document.querySelector("#ember34"),
//                     },
//                     "www.facebook.com": {
//                         search: () =>
//                             document.querySelector(
//                                 "input[aria-label='Search on Facebook']"
//                             ),
//                         write: () =>
//                             document.querySelector(
//                                 "#mount_0_0_zG > div > div:nth-child(1) > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div.x78zum5.xdt5ytf.x1t2pt76.x1n2onr6.x1ja2u2z.x10cihs4 > div.x9f619.x1ja2u2z.x78zum5.x2lah0s.x1n2onr6.xl56j7k.x1qjc9v5.xozqiw3.x1q0g3np.x1t2pt76.x17upfok > div > div.x9f619.x1ja2u2z.x78zum5.x1n2onr6.x1iyjqo2.xs83m0k.xeuugli.xl56j7k.x1qjc9v5.xozqiw3.x1q0g3np.x1iplk16.x1xfsgkm.xqmdsaz.x1mtsufr.x1w9j1nh > div > div > div > div.x78zum5.x1q0g3np.xl56j7k > div > div.x1yztbdb > div > div > div > div.x1cy8zhl.x78zum5.x1iyjqo2.xs83m0k.xh8yej3 > div > div.xi81zsa.x1lkfr7t.xkjl1po.x1mzt3pk.xh8yej3.x13faqbe"
//                             ),
//                     },
//                     "www.instagram.com": {
//                         search: () =>
//                             Array.from(document.querySelectorAll("svg title"))
//                                 .find(
//                                     (title) =>
//                                         title.textContent.trim() === "Search"
//                                 )
//                                 .closest("a"),
//                         write: () =>
//                             Array.from(document.querySelectorAll("svg title"))
//                                 .find(
//                                     (title) =>
//                                         title.textContent.trim() === "New post"
//                                 )
//                                 .closest("a"),
//                     },
//                     "web.whatsapp.com": {
//                         search: () =>
//                             document.querySelector(
//                                 "div[aria-label = 'Search']"
//                             ),
//                         write: () =>
//                             document.querySelector(
//                                 "div[aria-label = 'Type a message']"
//                             ),
//                     },
//                     "web.snapchat.com": {
//                         search: () =>
//                             document.querySelector("input[role='searchbox']"),
//                         write: () =>
//                             document.querySelector("div[role='textbox']"),
//                     },
//                     "github.com": {
//                         search: () =>
//                             document.querySelector(
//                                 "button[aria-label='Search or jump to…']"
//                             ),
//                         write: () =>
//                             document.querySelector(
//                                 "button[aria-label='Create something new']"
//                             ),
//                     },
//                     "stackoverflow.com": {
//                         search: () =>
//                             document.querySelector(
//                                 "input[aria-label='Search']"
//                             ),
//                         write: () =>
//                             document.querySelector("a[href='/questions/ask']"),
//                     },
//                     "peerlist.io": {
//                         search: () =>
//                             document.querySelector(
//                                 "input#react-select-peerlist-search-input"
//                             ),
//                         write: () =>
//                             document.querySelector(
//                                 "#modal-background-overlay > div > div > div > div.max-h-\\[300px\\].overflow-y-auto.p-1 > ul > li:nth-child(1) > button"
//                             ) ||
//                             document.querySelector(
//                                 "#__next > div.bg-gray-00.w-full.__className_6ac6f9.__variable_793c88 > div.lg\\:pl-6.xl\\:pl-0 > div > div.w-\\[212px\\].border-r.border-primaryBorder.flex-col.flex-shrink-0.fixed.h-screen.pb-2.lg\\:flex.justify-between.hidden > div.pr-6.flex.flex-col.justify-between.h-full.overflow-y-auto.hide-scrollbar > div.mt-6 > div > div.w-full.mt-4 > button"
//                             ),
//                     },
//                     "www.amazon.in": {
//                         search: () =>
//                             document.querySelector("input[role='searchbox']"),
//                     },
//                     "www.flipkart.com": {
//                         search: () => document.querySelector("input"),
//                     },
//                     "www.myntra.com": {
//                         search: () => document.querySelector("input"),
//                     },
//                     "www.meesho.com": {
//                         search: () => document.querySelector("input"),
//                     },
//                     "www.zomato.com": {
//                         search: () => document.querySelectorAll("input")[1],
//                     },
//                     "www.bigbasket.com": {
//                         search: () =>
//                             document.querySelector(
//                                 "#siteLayout > header.sm\\:hidden.z-30.flex.flex-col.col-span-12 > div.grid.grid-flow-col.gap-x-6.h-9.mt-3\\.5.mb-2\\.5 > div.grid.place-content-start.grid-flow-col.gap-x-6 > div > div > div > div > input"
//                             ),
//                     },
//                     "www.swiggy.com": {
//                         search: () => document.querySelector("input"),
//                     },
//                     "in.bookmyshow.com": {
//                         search: () => document.querySelector("#\\34 "),
//                     },
//                     "chat.deepseek.com": {
//                         write: () => document.querySelector("textarea"),
//                     },
//                     "claude.ai": {
//                         write: () =>
//                             document.querySelector(
//                                 "body > div.flex.min-h-screen.w-full > div > main > div.top-5.z-10.mx-auto.w-full.max-w-2xl.md\\:sticky > div > fieldset > div.flex.flex-col.bg-bg-000.gap-1\\.5.border-0\\.5.border-border-300.pl-4.pt-2\\.5.pr-2\\.5.pb-2\\.5.sm\\:mx-0.items-stretch.transition-all.duration-200.relative.shadow-\\[0_0\\.25rem_1\\.25rem_hsl\\(var\\(--always-black\\)\\/3\\.5\\%\\)\\].focus-within\\:shadow-\\[0_0\\.25rem_1\\.25rem_hsl\\(var\\(--always-black\\)\\/7\\.5\\%\\)\\].hover\\:border-border-200.focus-within\\:border-border-200.cursor-text.z-10.rounded-2xl > div.flex.gap-2 > div > div"
//                             ),
//                     },
//                     "v0.dev": {
//                         write: () => document.querySelector("textarea"),
//                     },
//                     "gemini.google.com": {
//                         write: () =>
//                             document.querySelector(
//                                 "div[aria-label='Enter a prompt here']"
//                             ),
//                     },
//                     "www.imdb.com": {
//                         search: () =>
//                             document.querySelector(
//                                 "input[aria-label='Search IMDb']"
//                             ),
//                     },
//                     "www.primevideo.com": {
//                         search: () =>
//                             document.querySelector(
//                                 "button[aria-label='Search Prime Video']"
//                             ),
//                     },
//                     "www.coursera.org": {
//                         search: () => document.querySelector("input"),
//                     },
//                     "www.hotstar.com": {
//                         search: () =>
//                             document.querySelector("#searchBar") ||
//                             document.querySelector("a[href='/in/explore']"),
//                     },
//                     "www.udemy.com": {
//                         search: () => document.querySelector("input[name='q']"),
//                     },
//                     "dribbble.com": {
//                         search: () =>
//                             document.querySelector(
//                                 "#wrap > div.shots-search-hero > div.shots-search-hero__input-container > form > div > drb-clearable-input > input"
//                             ) || document.querySelector("input[name='q']"),
//                     },
//                     "www.crunchyroll.com": {
//                         search: () =>
//                             document.querySelector("a[href='/search']"),
//                     },
//                     "www.twitch.tv": {
//                         search: () =>
//                             document.querySelector("input[type = 'search']"),
//                     },
//                     "en.wikipedia.org": {
//                         search: () =>
//                             document.querySelector(
//                                 "a[href = '/wiki/Special:Search']"
//                             ) ||
//                             document.querySelector("input[name = 'search']"),
//                     },
//                     "www.wikipedia.org": {
//                         search: () =>
//                             document.querySelector("input[name = 'search']"),
//                     },
//                     "www.kaggle.com": {
//                         search: () =>
//                             document.querySelector(
//                                 "input[placeholder = 'Search']"
//                             ),
//                     },
//                     "finance.yahoo.com": {
//                         search: () => document.querySelector("input"),
//                     },
//                     "www.geeksforgeeks.org": {
//                         search: () =>
//                             document.querySelector(
//                                 "button[aria-label = 'search']"
//                             ) ||
//                             document.querySelector("input") ||
//                             document.querySelector(
//                                 "button[aria-label = 'search']"
//                             ),
//                     },
//                     "scholar.google.com": {
//                         search: () =>
//                             document.querySelector(
//                                 "input[aria-label = 'Search']"
//                             ),
//                     },
//                     "www.google.com": {
//                         search: () =>
//                             document.querySelector(
//                                 "textarea[aria-label='Search']"
//                             ) ||
//                             document.querySelector(
//                                 "#yDmH0d > c-wiz.zQTmif.SSPGKf.ccEnac > div > div.KdK6Xc > div.e1AOyf > div > div > div > div.d1dlne > input.Ax4B8.ZAGvjd"
//                             ) ||
//                             document.querySelector(
//                                 "input[aria-label='Search for topics, locations & sources']"
//                             ),
//                     },
//                     "news.google.com": {
//                         search: () =>
//                             document.querySelector(
//                                 "textarea[aria-label='Search']"
//                             ) ||
//                             document.querySelector(
//                                 "input[aria-label='Search for topics, locations & sources']"
//                             ),
//                     },
//                     "in.indeed.com": {
//                         search: () =>
//                             document.querySelector(
//                                 "input[aria-label='search: Job title, keywords, or company']"
//                             ),
//                     },
//                     "www.glassdoor.co.in": {
//                         search: () =>
//                             document.querySelector(
//                                 "input[aria-labelledby='searchBar-jobTitle_label']"
//                             ),
//                     },
//                     "www.coingecko.com": {
//                         search: () =>
//                             document.querySelector("div#search-bar") ||
//                             document.querySelector("input#search-input-field"),
//                     },
//                 };

//                 // Choose function dynamically
//                 if (!handlers[hostname]) return;
//                 let key = cmd === "focus_search" ? "search" : "write";

//                 let element = handlers[hostname][key]?.();

//                 if (element) {
//                     element.focus();
//                     element.click();
//                     console.log(`Clicked ${key}:`, element);
//                 } else {
//                     console.log(handlers[hostname][key]);
//                     console.log(handlers[hostname][key]());
//                 }
//             },
//             args: [command], // Pass the command as an argument
//         });
//     });
// });
chrome.commands.onCommand.addListener(async (command) => {
    chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
        if (!tabs.length) return;
        let tab = tabs[0];

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            world: "MAIN", // Ensures it runs in the page context
            func: async (cmd) => {
                // Dynamically import the external script
                const handlers = {
                    "www.youtube.com": {
                        search: () =>
                            document.querySelector("input[name=search_query]"),
                        write: () =>
                            document.querySelector("a[href='/upload']"),
                    },
                    "x.com": {
                        search: () =>
                            document.querySelector(
                                "input[aria-label='Search query']"
                            ),
                        write: () =>
                            document.querySelector("a[aria-label='Post']"),
                    },
                };
                const hostname = window.location.hostname;
                if (!handlers[hostname]) return;

                let key = cmd === "focus_search" ? "search" : "write";
                let element = handlers[hostname][key]?.();

                if (element) {
                    element.focus();
                    element.click();
                    console.log(`Clicked ${key}:`, element);
                } else {
                    console.log(`No element found for ${key} on ${hostname}`);
                }
            },
            args: [command], // Pass the command argument
        });
    });
});
