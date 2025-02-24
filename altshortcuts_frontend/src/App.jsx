import "./App.css";

function App() {
    return (
        <>
            <Header></Header>
            <MainContent></MainContent>
            {/* <div className="body">
                <div className="inner_body i_b_1">
                    <div>
                        <div className="thumbnail">thumbnail</div>
                        <div
                            style={{
                                marginTop: "2vh",
                            }}
                        >
                            <span
                                style={{
                                    fontSize: "20px",
                                }}
                            >
                                Don't lift your hand off of the keyboard, use
                            </span>

                            <br></br>
                            <span
                                style={{
                                    fontSize: "48px",
                                    fontWeight: "500",
                                    color: "#4F9355",
                                }}
                            >
                                ALT Shortcuts
                            </span>
                        </div>
                    </div>
                    <div
                        style={{
                            marginTop: "14vh",
                        }}
                    >
                        <Card
                            svg={
                                <svg
                                    class="w-6 h-6 text-gray-800 dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-width="2"
                                        d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            }
                            key1={"ALT"}
                            key2={"S"}
                            title={"Search"}
                            desc={"jump to searchbar"}
                        ></Card>
                        <Card
                            svg={
                                <svg
                                    class="w-6 h-6 text-gray-800 dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28"
                                    />
                                </svg>
                            }
                            key1={"ALT"}
                            key2={"W"}
                            title={"Quick Write"}
                            desc={"jump to the inputs"}
                        ></Card>
                        <Card
                            svg={
                                <svg
                                    class="w-6 h-6 text-gray-800 dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M19 12H5m14 0-4 4m4-4-4-4"
                                    />
                                </svg>
                            }
                            key1={"ALT"}
                            key2={"E"}
                            title={"Forward"}
                            desc={"go forward in history"}
                        ></Card>
                        <Card
                            svg={
                                <svg
                                    class="w-6 h-6 text-gray-800 dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M5 12h14M5 12l4-4m-4 4 4 4"
                                    />
                                </svg>
                            }
                            key1={"ALT"}
                            key2={"Q"}
                            title={"Backward"}
                            desc={"go backward in history"}
                        ></Card>
                    </div>
                </div>
                <div className="inner_body">
                    <div
                        style={{
                            backgroundColor: "white",
                            borderRadius: "20px",
                            marginTop: "14vh",
                            minWidth: "280px",
                            padding: "20px",
                            marginBottom: "auto",
                        }}
                    >
                        <Shortcuts
                            Shortcut={"ALT + S"}
                            desc={"Jump to search"}
                        ></Shortcuts>
                        <Shortcuts
                            Shortcut={"ALT + W"}
                            desc={"Jump to Input/Textarea"}
                        ></Shortcuts>
                        <Shortcuts
                            Shortcut={"ALT + Q"}
                            desc={"Go back in History"}
                        ></Shortcuts>
                        <Shortcuts
                            Shortcut={"ALT + E"}
                            desc={"Go Forward in History"}
                        ></Shortcuts>
                        <Shortcuts
                            Shortcut={"ALT + R"}
                            desc={"Open new tab to the right"}
                        ></Shortcuts>
                        <Shortcuts
                            Shortcut={"ALT + R"}
                            desc={"Open new tab to the right"}
                        ></Shortcuts>
                        <Shortcuts
                            Shortcut={"ALT + R"}
                            desc={"Open new tab to the right"}
                        ></Shortcuts>
                        <Shortcuts
                            Shortcut={"ALT + R"}
                            desc={"Open new tab to the right"}
                        ></Shortcuts>
                        <Shortcuts
                            Shortcut={"ALT + R"}
                            desc={"ALT "}
                        ></Shortcuts>
                    </div>
                    <div
                        style={{
                            margin: "25vh 0px 0px 100px",
                        }}
                    >
                        <span>
                            Works on Your Favorite Websites. Designed
                            specifically for the most used websites to solve the
                            problem of
                        </span>
                        <br></br>
                        <span
                            style={{
                                fontSize: "48px",
                                fontWeight: "500",
                                color: "#4F9355",
                            }}
                        >
                            easily accessing the search bar.
                        </span>
                        <br></br>
                        <br></br>
                        <br></br>
                        <span
                            style={{
                                color: "gray",
                            }}
                        >
                            Doesn't work on your website?<br></br>
                            Want a feature?<br></br>
                            Create an issue, start contributing,<br></br>
                            Its Open Source!!!
                        </span>
                    </div>
                </div>
            </div> */}
            {/* <Footer></Footer> */}
            <div></div>
        </>
    );
}
function Card({ svg, key1, key2, title, desc }) {
    return (
        <div
            style={{
                backgroundColor: "#FFFFFF",
                minHeight: "75px",
                boxSizing: "border-box",
                minWidth: "280px",
                borderRadius: "12px",
                padding: "15px 25px",
                margin: "10px 0px",
                border: "2px solid #E1E1E",
                boxShadow: "0px 4px 50px rgba(0, 0, 0, 0.25)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <div>{svg}</div>
                <div
                    style={{
                        paddingLeft: "10px",
                    }}
                >
                    <div
                        style={{
                            fontSize: "20px",
                        }}
                    >
                        {title}
                    </div>
                    <div
                        style={{
                            fontSize: "13px",
                            color: "gray",
                        }}
                    >
                        {desc}
                    </div>
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <div className="key">{key1}</div>
                <div className="plus">{"+"}</div>
                <div className="key">{key2}</div>
            </div>
        </div>
    );
}
function MainContent() {
    return (
        <>
            <Section1></Section1>
            <Section2></Section2>
            <Section3></Section3>
            <Section4></Section4>
            <div>test</div>
        </>
    );
}
function Section3() {
    return (
        <div
            style={{
                width: "90%",
                display: "flex",
                marginLeft: "auto",
                marginRight: "auto",
                boxSizing: "border-box",
                padding: "0px 120px",
                justifyContent: "space-between",
                height: "100vh",
            }}
        >
            <div>video</div>
            <div></div>
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
                    marginLeft: "auto",
                    marginRight: "auto",
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
function Section2() {
    const texts1 = [
        "Add the chrome extension",
        "Go to keyboard shortcuts",
        "Add unconfigured shortcuts",
    ];
    return (
        <div
            style={{
                // minHeight: "100vh",
                display: "flex",
                justifyContent: "space-between",
                margin: "200px 200px 200px 200px",
            }}
        >
            <div>
                <video
                    src={"assets/test.mp4"}
                    width="500"
                    height="300"
                    controls="controls"
                />
            </div>
            <div>
                <span
                    style={{
                        fontSize: "100px",
                    }}
                >
                    SetUp and Usage
                </span>
                {texts1.map((t, idx) => {
                    return (
                        <span
                            style={{
                                display: "block",
                                marginTop: "-10px",
                            }}
                            key={idx}
                        >
                            {idx}
                            {". "}
                            {t}
                        </span>
                    );
                })}
            </div>
        </div>
    );
}
function Section1() {
    const texts1 = [
        "Works on your favorite websites",
        "Increase your productivity",
        "It's Open Source",
        "Quick Setup",
        "Try It Now!",
    ];
    const shortcuts = [
        { key: "ALT + S", desc: "Jump to Search" },
        { key: "ALT + W", desc: "Jump to Write/Compose" },
        { key: "ALT + R", desc: "Open new tab to Right " },
        { key: "ALT + U", desc: "Scroll to the top of the page" },
        { key: "ALT + V", desc: "Scroll to the bottom of the page" },
        { key: "ALT + T", desc: "Switch to last used tab" },
        {
            key: "ALT + G",
            desc: "Open Google Homepage and close all other tabs",
        },
        { key: "ALT + D", desc: "Duplicate tab" },
        { key: "ALT + M", desc: "Mute / Unmute tab" },
        { key: "ALT + P", desc: "Pin / Unpin tab" },
    ];
    return (
        <div
            style={{
                backgroundColor: "white",
                marginTop: "10px",
                marginBottom: "40px",
            }}
        >
            {/* black bg */}
            <div
                className="blackbgsection1"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "90%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    borderRadius: "20px",
                    padding: "60px 120px 60px 120px",
                    boxSizing: "border-box",
                    color: "white",
                }}
            >
                {/* Left side CTA and intro */}
                <div>
                    <span
                        style={{
                            color: "light-gray",
                            fontWeight: "700",
                            fontSize: "36px",
                            display: "block", // Ensures it behaves like a separate line
                            lineHeight: "35px", // Adjust to reduce spacing
                            letterSpacing: "2px",
                        }}
                    >
                        don't lift your hands off the keyboard, use
                    </span>
                    <span
                        style={{
                            color: "#A799FF",
                            fontWeight: "700",
                            fontSize: "60px",
                            display: "block", // Keeps consistent control
                            marginTop: "-10px", // Pulls text closer
                        }}
                    >
                        ALT Shortcuts
                    </span>
                    {texts1.map((t1, idx) => {
                        return (
                            <span
                                style={{
                                    color: "gray",
                                    // fontWeight: "700",
                                    // fontSize: "px",
                                    display: "block", // Keeps consistent control
                                    marginTop: "-10px", // Pulls text closer
                                    // key: idx,
                                }}
                            >
                                {t1}
                            </span>
                        );
                    })}
                    <button
                        style={{
                            marginTop: "15px",
                        }}
                    >
                        <a href="#">Github</a>
                    </button>
                    <button>Chrome</button>
                </div>
                {/* Shortcuts */}
                <div
                    style={{
                        backgroundColor: "white",
                        minHeight: "30vh",
                        minWidth: "400px",
                        borderRadius: "40px",
                        color: "black",
                        boxSizing: "border-box",
                        padding: "40px",
                    }}
                >
                    {shortcuts.map((s, idx) => {
                        return (
                            <div
                                key={idx}
                                style={{
                                    display: "flex",
                                    marginTop: "5px",
                                }}
                            >
                                <span
                                    style={{
                                        background: "lightgray",
                                        padding: "0px 8px",
                                        borderRadius: "5px",
                                        maxHeight: "28px",
                                        border: "1px solid gray",
                                        boxShadow: "4px 4px gray",
                                        cursor: "pointer",
                                    }}
                                >
                                    {s.key}
                                </span>
                                <span
                                    style={{
                                        fontSize: "24px",
                                        marginLeft: "20px",
                                    }}
                                >
                                    {s.desc}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
function Header() {
    return (
        <div className="header">
            <span className="logo">ALT shortcuts</span>
        </div>
    );
}
function Footer() {
    return <div className="footer">Made with love by varun</div>;
}
function Shortcuts({ Shortcut, desc }) {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                margin: "10px 0px",
            }}
        >
            <div
                style={{
                    backgroundColor: "#dedede",
                    padding: "5px",
                    borderRadius: "5px",
                    minWidth: "60px",
                    textAlign: "center",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.14)",
                }}
            >
                {Shortcut}
            </div>
            <div
                style={{
                    paddingLeft: "10px",
                }}
            >
                {desc}
            </div>
        </div>
    );
}
export default App;
