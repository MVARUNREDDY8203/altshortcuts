import { useState } from "react";
import "./App.css";

function App() {
    return (
        <>
            <Header></Header>
            <MainContent></MainContent>
            <div></div>
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
            <div>made with love</div>
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
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
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
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;  web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            ></iframe>
        ),
    },
    { key: "ALT + R", desc: "Open new tab to Right ", src: "/alt_r.webm" },
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
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;  web-share"
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
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;  web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            ></iframe>
        ),
    },
    { key: "ALT + T", desc: "Switch to last used tab", src: "/alt_t.webm" },
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
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;  web-share"
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
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;  web-share"
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
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;  web-share"
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
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;  web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            ></iframe>
        ),
    },
];
function Section1() {
    const texts1 = [
        "Works on your favorite websites",
        "Increase your productivity",
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
                    <span className="text-3xl font-bold block tracking-wider color-white">
                        don't lift your hands off the keyboard, use
                    </span>
                    <span className="mb-4 text-7xl font-extrabold block text-violet-400">
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
                    <div className="mt-4 text-2xl">
                        <button className="bg-green-500 text-black rounded-xl px-4">
                            Github
                        </button>
                        <button className="ml-3 bg-green-500 text-black rounded-xl px-4">
                            Chrome
                        </button>
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
        <div className="flex justify-between mx-50 my-60 items-center">
            <div>
                <video
                    src={"/config-cut.webm"}
                    width="500"
                    height="300"
                    controls="controls"
                />
                {/* <div>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/HUYW3dcq0tg?si=orzd4EGXF3gJOT1Q"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;  web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    ></iframe>
                </div> */}
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
        <div className="bg-zinc-300 flex-col items-center">
            {/* accordion tiles */}
            <div>
                {shortcuts.map((item, idx) => {
                    const isOpen = openIdx == idx;
                    const isFirst = idx == 0;
                    const isLast = idx == shortcuts.length - 1;
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
                                border-gray-800
                                px-50
                                cursor-pointer flex-col w-full text-3xl hover:bg-black hover:text-white 
                            `}
                            onClick={() => handleTileClick(idx)}
                        >
                            <div>{item.desc}</div>
                            {false && isOpen && (
                                <div className="mb-8">{item.iframe}</div>
                            )}
                            {isOpen && (
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
                style={{
                    width: "90%",
                    display: "flex",
                    margin: "100px auto",
                    boxSizing: "border-box",
                    padding: "0px 120px",
                    justifyContent: "space-between",
                }}
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
                <div
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
                </div>
            </div>
            <div
                style={{
                    width: "90%",
                    display: "flex",
                    marginLeft: "auto",
                    marginRight: "auto",
                    boxSizing: "border-box",
                    padding: "0px 120px",
                    justifyContent: "space-between",
                }}
            >
                <div
                    style={{
                        marginTop: "40px",
                        backgroundColor: "#edd088",
                        borderRadius: "20px",
                        boxSizing: "border-box",
                        padding: "40px",
                        width: "100%",
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
                        Problems Faced, Solutions and Why Open Source?
                    </span>
                    <span
                        style={{
                            display: "block",
                            lineHeight: "25px",
                            textAlign: "justify",
                            fontWeight: "400",
                        }}
                    >
                        <br></br>
                        <span
                            style={{ fontWeight: "600", letterSpacing: "2px" }}
                        >
                            The biggest problem
                        </span>{" "}
                        for this extension to work is maintainance. The
                        Extension's main feature - the focus on Search/Write
                        depends on the UI elements of the websites, which is
                        constantly changing. It would be very hard for me to
                        maintain the extension's core functionality such way...
                        And even if I managed to keep the extension updated, I'd
                        have to push updates everytime some website's UI
                        changes, which would be very tedious<br></br>
                        -- Another problem was that Chrome allows maximum 4
                        shortcuts by default, the rest, the user has to
                        configure.
                        <br></br>
                        <br></br>
                        <span
                            style={{ fontWeight: "600", letterSpacing: "2px" }}
                        >
                            The Solution:
                        </span>
                        <br></br>
                        -- make the extension{" "}
                        <span
                            style={{ fontWeight: "600", letterSpacing: "2px" }}
                        >
                            Open Source,
                        </span>{" "}
                        if the people love it, it'll take care of itself... Even
                        then it would be hard to push updates via my developer
                        account every now and then...<br></br>
                        -- So I've decided to decouple the application's logic
                        into the extension and a sepearate handlers.json file
                        with all the UI elements, JS paths of different websites
                        hosted at a public URL connected to Github. That way
                        everytime someone creates a new PR, it could be simply
                        merged and the hosted handers.json file will be updated.
                        <br></br>
                        -- I've also added fetch and cache the handlers.json and
                        and refresh cache after a timeperiods logic so that it
                        works reliably with updates
                        <br></br>
                        <br></br>
                        Doesn't work on a website?<br></br>
                        Want a new feature?<br></br>
                        You've got a better Solution?<br></br>
                        Create an Issue, or a PR, help it grow, its Open Source!
                    </span>
                </div>
            </div>
        </>
    );
}
function Header() {
    return (
        <div className="header">
            <span className="logo">ALT shortcuts</span>
        </div>
    );
}

export default App;
