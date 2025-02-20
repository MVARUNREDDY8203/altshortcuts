import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header></Header>
            <div className="body">
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
                                Alt Shortcuts
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
                            key1={"Alt"}
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
                            key1={"Alt"}
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
                            key1={"Alt"}
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
                            key1={"Alt"}
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
                            Shortcut={"Alt + S"}
                            desc={"Jump to search"}
                        ></Shortcuts>
                        <Shortcuts
                            Shortcut={"Alt + W"}
                            desc={"Jump to Input/Textarea"}
                        ></Shortcuts>
                        <Shortcuts
                            Shortcut={"Alt + Q"}
                            desc={"Go back in History"}
                        ></Shortcuts>
                        <Shortcuts
                            Shortcut={"Alt + E"}
                            desc={"Go Forward in History"}
                        ></Shortcuts>
                        <Shortcuts
                            Shortcut={"Alt + R"}
                            desc={"Open new tab to the right"}
                        ></Shortcuts>
                        <Shortcuts
                            Shortcut={"Alt + R"}
                            desc={"Open new tab to the right"}
                        ></Shortcuts>
                        <Shortcuts
                            Shortcut={"Alt + R"}
                            desc={"Open new tab to the right"}
                        ></Shortcuts>
                        <Shortcuts
                            Shortcut={"Alt + R"}
                            desc={"Open new tab to the right"}
                        ></Shortcuts>
                        <Shortcuts
                            Shortcut={"Alt + R"}
                            desc={"alt "}
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
            </div>
            <Footer></Footer>
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
function Header() {
    return (
        <div className="header">
            <span className="logo">Alt shortcuts</span>
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
