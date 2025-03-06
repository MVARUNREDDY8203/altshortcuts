import { useState } from "react";
import "./App.css";

function App() {
    return (
        <>
            <Header></Header>
            <MainContent></MainContent>
        </>
    );
}

function MainContent() {
    return (
        <>
            <Section1></Section1>
            <Section2></Section2>
            <Section3></Section3>
            <Section4></Section4>
            <Section5></Section5>
            <div className="text-right px-20 mt-5">
                made with love by ~ M. VARUN REDDY 💝
            </div>
        </>
    );
}

const shortcuts = [
    {
        key: "ALT + S",
        desc: "Jump to Search",
        src: "./alt_s.webm",
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
        src: "./alt_w.webm",
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
        src: "/alt_r.webm",
    },
    {
        key: "ALT + U",
        desc: "Scroll to the top of the page",
        src: "/alt_v_u.webm",
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
        src: "/alt_v_u.webm",
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
        src: "/alt_t.webm",
    },
    {
        key: "ALT + G",
        desc: "Open Google Homepage and close all other tabs",
        src: "/alt_g.webm",
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
        src: "/alt_d.webm",
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
        src: "/alt_m.webm",
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
        src: "/alt_p.webm",
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
function Section1() {
    const texts1 = [
        "Works on your favorite websites",
        "Increases your productivity",
        "It's Open Source",
        "Quick Setup",
        "Try It Now!",
    ];

    return (
        <div className="bg-white mx-20">
            {/* black bg */}
            <div className="flex justify-between items-center mx-auto rounded-3xl px-30 py-15 text-white blackbgsection1">
                {/* Left side CTA and intro */}
                <div>
                    <span className="text-3xl text-neutral-200 font-bold block tracking-wider color-white">
                        don't lift your hands off the keyboard, use
                    </span>
                    <span
                        style={{}}
                        className="mb-4 text-7xl font-extrabold block text-transparent bg-clip-text 
               bg-[linear-gradient(to_right,#A78BFA_0%,#E1AB00_100%)]"
                    >
                        ALT Shortcuts
                    </span>
                    {texts1.map((t1, idx) => {
                        return (
                            <span
                                className="text-gray-400 block -mt-4"
                                key={idx}
                            >
                                {t1}
                            </span>
                        );
                    })}
                    <div className="flex mt-4 text-2xl">
                        <a
                            href="https://github.com/MVARUNREDDY8203/altshortcuts"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center bg-green-500 text-black rounded-xl px-6 font-medium transition-all duration-150 hover:tracking-wider"
                        >
                            Github
                        </a>

                        <a
                            href="https://chromewebstore.google.com/detail/alt-shortcuts/pahfhkipajanpngdindidihnplfkldjp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-3 flex flex-col items-center bg-green-500 text-black rounded-xl px-6 py-0.4 font-medium transition-all duration-150 hover:tracking-wider"
                        >
                            Chrome
                        </a>
                    </div>
                </div>
                {/* Shortcuts */}
                <div className="bg-white text-black rounded-3xl py-10 px-10">
                    {shortcuts.map((s, idx) => {
                        return (
                            <div
                                key={idx}
                                className="mt-[0.80rem] max-h-[2rem]"
                            >
                                <span className="text-2xl font-medium rem bg-neutral-300 px-3 rounded-md cursor-pointer border border-gray shadow-[0.20rem_0.20rem_0_#808080]">
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
            className="flex justify-between mx-50 mt-60 mb-40 items-center"
        >
            <div>
                {/* <video
                    src={"/config-cut.webm"}
                    width="500"
                    height="300"
                    controls="controls"
                /> */}
                <div>
                    <iframe
                        width="560"
                        height="315"
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
                <span className="text-[6rem]">SetUp and Usage</span>
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
        if (openIdx == idx) {
            setOpenIdx(null);
        } else {
            setOpenIdx(idx);
        }
    }
    return (
        <div id="shortcuts" className="flex-col items-center relative">
            <div
                style={{
                    background: "linear-gradient(0deg, #828282, #FFFFFF)",
                }}
                className="hidden md:block relative text-[23rem] font-extrabold -mb-67 z-0 text-center w-full"
            >
                SHORCUTS
            </div>

            {/* Your existing accordion code - unchanged */}
            <div className="relative z-10 bg-zinc-200 ">
                {shortcuts.map((item, idx) => {
                    const isOpen = openIdx == idx;
                    return (
                        <div
                            key={idx}
                            className={`
                                ${
                                    isOpen
                                        ? "bg-black text-white min-h-[20rem] text-8xl"
                                        : ""
                                }
                                border
                                transiton-all
                                duration-200
                                border-black
                                px-50
                                cursor-pointer flex-col w-full text-3xl hover:bg-black hover:text-white 
                            `}
                            onClick={() => handleTileClick(idx)}
                        >
                            <div>{item.desc}</div>
                            {true && isOpen && (
                                <div className="mb-8">{item.iframe}</div>
                            )}
                            {false && isOpen && (
                                <video
                                    className="mb-8"
                                    width={"500"}
                                    src={item.src}
                                ></video>
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
                className=" flex px-50 pt-40"
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
                {/* <div
                    style={{
                        backgroundColor: "#A799FF",
                        borderRadius: "20px",
                        boxSizing: "border-box",
                        padding: "40px",
                        marginLeft: "40px",
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
                        How does it work?
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
                        1. The Search / Write Focus: Popular websites like
                        ChatGPT, Reddit, X, Instagram which have the Search/
                        Input fields, we visit them, inspect their input/search
                        fields manually :: right click :: copy the 'JS path' and
                        extract the selectors.
                        <br></br>
                        <br></br>
                        2. New tab to the right/left, Close tab: pretty simple
                        implementation, just query the index of the current tab
                        and then create a new tab at index-1 / index + 1 or
                        delete tab at index
                        <br></br>
                        <br></br>
                        3. Switch to the next / prev tab: actually provided by
                        default by Chrome, most people don't know about it.
                    </span>
                </div> */}
            </div>
            <div className="px-50 flex justify-between text-neutral-800 ">
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
            <div className="bg-white mx-20 mt-30">
                <div className="flex justify-between items-center mx-auto rounded-3xl px-30 py-15 text-white blackbgsection1">
                    <div>
                        <span
                            //                 className="text-transparent bg-clip-text
                            //    bg-[linear-gradient(to_right,#A78BFA_0%,#E1C74A_100%)]"
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
                            width="300px"
                            src=".\avlb_in_chrome_web_store.png"
                        ></img>
                    </div>
                </div>
            </div>
        </>
    );
}
function Header() {
    function scrollToSection(id) {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <div className="flex justify-between items-center px-20  h-15">
            <div className="text-4xl">ALT shortcuts</div>
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
                            "https://github.com/MVARUNREDDY8203/altshortcuts",
                            "_blank"
                        )
                    }
                    className="px-2 cursor-pointer transition-all duration-150 hover:tracking-widest"
                >
                    Github
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
                    Chrome
                </div>
            </div>
        </div>
    );
}

export default App;
