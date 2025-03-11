import { useEffect, useState } from "react";
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";

function App() {
    const [initState, setInitState] = useState(-1);

    useEffect(() => {
        // framer motion things for starting UX
        const urlParams = new URLSearchParams(window.location.search);
        const source = urlParams.get("source");

        let waitTime = 0;
        if (source === "install") {
            setInitState(0);
            waitTime = 10500;
        } else {
            setInitState(10);
            waitTime = 10500;
        }
        const timer = setTimeout(() => setInitState(33), waitTime);
        return () => clearTimeout(timer);
    }, []);

    return (
        <motion.div
            className="h-screen w-screen flex items-center justify-center bg-black"
            transition={{ duration: 0.3 }}
        >
            <AnimatePresence mode="wait">
                {initState === 0 && <ThanksForInstall key="ThanksForInstall" />}
                {initState == 10 && <Welcome1 key="welcome1"></Welcome1>}
                {initState === 33 && (
                    <motion.div
                        key="maincontent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full"
                    >
                        <MainContent />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
// general vistor welcome
function Welcome1() {
    const [welcomeOneState, setWelcomeOneState] = useState(0);
    useEffect(() => {
        const timers = [
            setTimeout(() => setWelcomeOneState(1), 2500),
            setTimeout(() => setWelcomeOneState(2), 5000),
            setTimeout(() => setWelcomeOneState(3), 7500),
        ];

        return () => timers.forEach(clearTimeout);
    }, []);
    return (
        <>
            <motion.div
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-white text-6xl"
            >
                <AnimatePresence mode="wait">
                    {welcomeOneState == 0 && (
                        <motion.div
                            key={"hellovis"}
                            initial={{ y: 300, opacity: 0, scale: 0.5 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-8xl"
                        >
                            Hello Visitor 👋
                        </motion.div>
                    )}
                    {welcomeOneState == 1 && (
                        <motion.div
                            key={"lookingforfast"}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            looking for a way to navigate Chrome faster?
                        </motion.div>
                    )}
                    {welcomeOneState == 2 && (
                        <motion.div
                            key={"rightplace"}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            you've come to the right place.
                        </motion.div>
                    )}
                    {welcomeOneState == 3 && (
                        <motion.div
                            key={"altshortcuts"}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <span
                                className="text-9xl text-transparent bg-clip-text font-bold px-5
						   bg-[linear-gradient(to_right,#A78BFA_0%,#E1AB00_100%)]"
                            >
                                Alt Shortcuts
                            </span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </>
    );
}
// new install welcome
function ThanksForInstall() {
    const [thankState, setThankState] = useState(0);
    useEffect(() => {
        const timers = [
            setTimeout(() => setThankState(1), 2500),
            setTimeout(() => setThankState(2), 5500),
        ];

        return () => timers.forEach(clearTimeout);
    }, []);
    return (
        <>
            <motion.div
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-white text-5xl"
            >
                <AnimatePresence mode="wait">
                    {thankState == 0 && (
                        <motion.div
                            className="flex text-8xl items-center justify-center text-white h-screen"
                            initial={{ opacity: 0, y: 200, scale: 0.75 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <span>Thanks for Installing </span>
                            <span
                                className="text-transparent bg-clip-text font-bold px-5
						   bg-[linear-gradient(to_right,#A78BFA_0%,#E1AB00_100%)]"
                            >
                                Alt Shortcuts
                            </span>
                            <motion.span
                                initial={{ scale: 0.2 }}
                                animate={{ scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                🙏
                            </motion.span>
                        </motion.div>
                    )}
                    {thankState == 1 && (
                        <motion.div
                            key={"lilsetup"}
                            className="flex text-5xl text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            To use all the features of this extension, you gotta
                            do a little setup
                        </motion.div>
                    )}
                    {thankState == 2 && (
                        <motion.div
                            className="flex text-5xl text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            Go to the "SETUP" section of the page and watch the
                            setup video.
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </>
    );
}
// this is main frontend landing page
function MainContent() {
    return (
        <>
            <div className="bg-white text-black h-screen">
                <Header></Header>
                <Section1></Section1>
                <Section2></Section2>
                <Section3></Section3>
                <Section4></Section4>
                <Section5></Section5>
                <Footer></Footer>
            </div>
        </>
    );
}
const shortcuts = [
    {
        key: "ALT + S",
        desc: "Jump to Search",
        iframe: (
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/FCumqqW_6hI?si=wM7ogMJbDHEkrDVh"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            ></iframe>
        ),
    },
    {
        key: "ALT + W",
        desc: "Jump to Write/Compose",
        iframe: (
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/AnNVB7s8Abs?si=BkzslDEbSbZ-Miej"
                title="ALT+W: FOCUS ON WRITE"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;fullscreen;  gyroscope;  web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            ></iframe>
        ),
    },
    {
        key: "ALT + R",
        desc: "Open new tab to Right ",
        iframe: (
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/sP3qQyAKE6o?si=SsiudxJ4c-Xa4CHn"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            ></iframe>
        ),
    },
    {
        key: "ALT + U",
        desc: "Scroll to the top of the page",
        iframe: (
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/c74yL160Gm0?si=qreZfyVop0E4mCd_"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen;  web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            ></iframe>
        ),
    },
    {
        key: "ALT + V",
        desc: "Scroll to the bottom of the page",
        iframe: (
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/c74yL160Gm0?si=qreZfyVop0E4mCd_"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen;  web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            ></iframe>
        ),
    },
    {
        key: "ALT + T",
        desc: "Switch to last used tab",
        iframe: (
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/QjihRppoI68?si=RpqK7qypEPs-Qcqu"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;  web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            ></iframe>
        ),
    },
    {
        key: "ALT + G",
        desc: "Open Google Homepage and close all other tabs",
        iframe: (
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/ONTgE2Hm2fA?si=DQAfynvBXYkteIQa"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen;  web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            ></iframe>
        ),
    },
    {
        key: "ALT + D",
        desc: "Duplicate tab",
        iframe: (
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/KSHmN4xOLtg?si=forwkOj5d_6kSD8o"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen;  web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            ></iframe>
        ),
    },
    {
        key: "ALT + M",
        desc: "Mute / Unmute tab",
        iframe: (
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/RImwbRvh0c0?si=Pgk8zPkDwwlqqnfS"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen;  web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            ></iframe>
        ),
    },
    {
        key: "ALT + P",
        desc: "Pin / Unpin tab",
        iframe: (
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/N1yHXeZl74Q?si=xursX78RlZ0AB001"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen;  web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            ></iframe>
        ),
    },
];
// the page divided into sections
function Header() {
    function scrollToSection(id) {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <div className="flex justify-between items-center w-7xl mx-auto h-15 bg-white">
            <div className="text-4xl">ALT Shortcuts</div>
            <div className="flex text-3xl">
                <div
                    onClick={() => scrollToSection("setup")}
                    className="px-2 cursor-pointer transition-all duration-150 hover:tracking-widest"
                >
                    Setup
                </div>

                <div
                    onClick={() => scrollToSection("shortcuts")}
                    className="px-2 cursor-pointer transition-all duration-150 hover:tracking-widest"
                >
                    Shortcuts
                </div>
                <div
                    onClick={() => scrollToSection("about")}
                    className="px-2 cursor-pointer transition-all duration-150 hover:tracking-widest"
                >
                    About
                </div>
                <div
                    onClick={() =>
                        window.open(
                            "https://chromewebstore.google.com/detail/alt-shortcuts/pahfhkipajanpngdindidihnplfkldjp",
                            "_blank"
                        )
                    }
                    className="px-2 cursor-pointer transition-all duration-150 hover:tracking-widest"
                >
                    Download
                </div>
                <div
                    onClick={() =>
                        window.open(
                            "https://github.com/MVARUNREDDY8203/altshortcuts",
                            "_blank"
                        )
                    }
                    className="px-2 cursor-pointer transition-all duration-150 hover:tracking-widest"
                >
                    Github
                </div>
            </div>
        </div>
    );
}
function Section1() {
    const texts1 = [
        "Navigate Chrome faster than ever",
        "Become more productive",
        "with powerful shortcuts",
        "Try It Now!",
    ];
    function scrollToShortcut(idx) {
        const targetElement = document.getElementById(`shortcut-${idx}`);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });

            // Simulate clicking to open the accordion
            setTimeout(() => {
                targetElement.click();
            }, 300);
        }
    }
    return (
        <div className="bg-white w-7xl mx-auto">
            <div className="flex justify-between items-center mx-auto rounded-3xl px-30 py-15 text-white bg-gradient-to-r from-[#121416] via-[#282828] to-[#121416]">
                <div>
                    <span className="text-3xl text-neutral-200 font-bold block tracking-wider color-white">
                        Don't lift your hands off the keyboard, use
                    </span>
                    <span
                        className="mb-4 text-7xl font-extrabold block text-transparent bg-clip-text 
                            bg-[linear-gradient(to_right,#A78BFA_0%,#E1AB00_100%)]"
                    >
                        ALT Shortcuts
                    </span>
                    {texts1.map((t1, idx) => (
                        <span className="text-gray-400 block -mt-4" key={idx}>
                            {t1}
                        </span>
                    ))}
                    <div className="flex mt-4 text-2xl">
                        <a
                            href="https://chromewebstore.google.com/detail/alt-shortcuts/pahfhkipajanpngdindidihnplfkldjp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center bg-green-500 text-black rounded-xl px-6 py-0.4 font-medium transition-all duration-150 hover:tracking-wider"
                        >
                            Download Extension
                        </a>
                    </div>
                </div>

                {/* Shortcuts */}
                <div className="bg-white text-black rounded-3xl py-10 px-10">
                    {shortcuts.map((s, idx) => {
                        return (
                            <div
                                key={idx}
                                className="mt-[0.80rem] max-h-[2rem] cursor-pointer transition-transform duration-150 hover:scale-105 active:scale-95"
                                onClick={() => scrollToShortcut(idx)}
                            >
                                <span className="text-2xl font-medium bg-neutral-300 px-3 rounded-md border border-gray shadow-[0.20rem_0.20rem_0_#808080]">
                                    {s.key}
                                </span>
                                <span className="text-2xl ml-5">{s.desc}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
function Section2() {
    const texts1 = [
        "Add the chrome extension",
        "Go to keyboard shortcuts",
        "Add unconfigured shortcuts",
        "DONE!! ✅🚀🚀",
    ];
    return (
        <div
            id="setup"
            className="w-7xl px-30 flex justify-between mx-auto mt-60 mb-40 items-center"
        >
            <div>
                <div>
                    <iframe
                        width="445"
                        height="250"
                        src="https://www.youtube.com/embed/HUYW3dcq0tg?si=orzd4EGXF3gJOT1Q"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen;  web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <div>
                <span className="text-8xl">SetUp and Usage</span>
                {texts1.map((t, idx) => {
                    return (
                        <span className="block -mt-2 text-center" key={idx}>
                            {t}
                        </span>
                    );
                })}
            </div>
        </div>
    );
}
function Section3() {
    const [openIdx, setOpenIdx] = useState(null);
    function handleTileClick(idx) {
        setOpenIdx((prev) => (prev === idx ? null : idx));
    }
    const [isWideScreen, setIsWideScreen] = useState(
        typeof window !== "undefined" && window.innerWidth >= 1280
    );

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth >= 1280);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div
            id="shortcuts"
            className={`flex-col items-center justify-center relative ${
                window.screen.width >= 1280 ? "w-full" : "w-7xl"
            }`}
        >
            <div
                style={{
                    background: "linear-gradient(0deg, #828282, #FFFFFF)",
                }}
                className="hidden md:block relative text-[23rem]  font-extrabold -mb-67 z-0 text-center"
            >
                SHORTCUTS
            </div>

            <div className="relative z-10 bg-zinc-200 ">
                {shortcuts.map((item, idx) => {
                    const isOpen = openIdx === idx;
                    return (
                        <div
                            key={idx}
                            id={`shortcut-${idx}`} // Add unique IDs to scroll to
                            className={`border transition-all duration-200 border-black cursor-pointer flex-col text-3xl hover:bg-black hover:text-white ${
                                isOpen
                                    ? "bg-black text-white min-h-[20rem] text-8xl"
                                    : ""
                            }`}
                            onClick={() => handleTileClick(idx)}
                        >
                            <div className="max-w-7xl px-20 mx-auto">
                                {item.desc}
                            </div>
                            {isOpen && (
                                <div className="w-7xl px-20 mx-auto mb-8">
                                    {item.iframe}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
function Section4() {
    return (
        <>
            <div
                id="about"
                className="flex w-7xl items-center justify-center mx-auto pt-40"
                style={
                    {
                        // width: "90%",
                        // display: "flex",
                        // margin: "100px auto",
                        // boxSizing: "border-box",
                        // padding: "0px 120px",
                        // justifyContent: "space-between",
                    }
                }
            >
                <div
                    style={{
                        backgroundColor: "#bbf99e",
                        borderRadius: "20px",
                        boxSizing: "border-box",
                        padding: "40px",
                        maxWidth: "500px",
                    }}
                >
                    <span
                        style={{
                            fontSize: "36px",
                            display: "block",
                            fontWeight: "600",
                            letterSpacing: "5px",
                        }}
                    >
                        Motivation?
                    </span>
                    <span
                        style={{
                            display: "block",
                            lineHeight: "20px",
                            textAlign: "justify",
                            fontWeight: "400",
                        }}
                    >
                        <br></br>
                        Many websites are poor in accessiblity, I don't want to
                        go click the mouse everytime I want to reach the search
                        bar...
                        <br></br>
                        <br></br>I love shortcuts.<br></br>
                        <br></br> And the few websites that have a shortcut key
                        to reach the search bar or input field, the shortcut is
                        inconsistent across different websites... <br></br>
                        <br></br>Also why isn't there a shortcut to open a new
                        tab to the right?
                    </span>
                </div>
                <div className="flex w-[40rem] justify-center items-center">
                    <span className="text-[15rem]">About.</span>
                </div>
            </div>
            <div className="w-7xl mx-auto px-20 flex justify-between text-neutral-800 ">
                <div className="mt-10 bg-[#edd088] rounded-[20px] box-border p-10 w-full">
                    <span className="text-6xl block font-semibold tracking-widest">
                        Problems, Solutions & Why Open Source?
                    </span>
                    <span className="block leading-[25px] text-justify font-normal mt-4">
                        <span className="text-3xl font-semibold tracking-wide">
                            CHALLENGES
                        </span>
                        <br />
                        <span>
                            -- Keeping the extension updated is tough since
                            website UIs constantly change.
                            <br />
                            -- Chrome allows only 4 default shortcuts ,
                            requiring manual user configuration.
                        </span>
                        <br />
                        <br />
                        <span className="text-3xl font-semibold tracking-wide">
                            THE SOLUTION:
                        </span>
                        <br />{" "}
                        <span className="">
                            -- OPEN SOURCE – If people love it, the community
                            will help maintain it.
                            <br></br> -- DECOUPLED LOGIC – Core logic stays in
                            the extension, while UI elements & JS paths are in a
                            publicly hosted `handlers.json` (updated via GitHub
                            PRs).
                            <br></br> -- AUTOMATIC UPDATES – The extension
                            fetches & caches `handlers.json`, ensuring seamless
                            updates without constant manual pushes.
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                            - Want More? ➕
                            <br />- Found a bug? 🐞
                            <br />- Have a feature idea? 💡
                            <br />- Open an Issue or submit a Pull Request 💻
                            <br />- Let’s build it together! 🚀
                        </span>
                        <br></br>
                    </span>
                </div>
            </div>
        </>
    );
}
function Section5() {
    return (
        <>
            <div className="bg-white w-7xl mx-auto mt-30">
                <div className="flex justify-between items-center mx-auto rounded-3xl px-20 py-15 text-white bg-gradient-to-r from-[#121416] via-[#282828] to-[#121416]">
                    <div>
                        <span
                            style={{
                                fontSize: "14rem",
                            }}
                        >
                            Try it now!
                        </span>
                    </div>
                    <div
                        onClick={() =>
                            window.open(
                                "https://chromewebstore.google.com/detail/alt-shortcuts/pahfhkipajanpngdindidihnplfkldjp",
                                "_blank"
                            )
                        }
                        className="bg-white text-black cursor-pointer"
                    >
                        <img
                            className="w-[18rem] transition-all duration-100 hover:w-[18.5rem]"
                            // width="300px"
                            src=".\avlb_in_chrome_web_store.png"
                        ></img>
                    </div>
                </div>
            </div>
        </>
    );
}
function Footer() {
    return (
        <div className="bg-white text-right px-20 mt-5">
            made with love by ~ M. VARUN REDDY 💝
        </div>
    );
}

export default App;
