import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const navigate= useNavigate();

    const updateUsername = (e) => {
        setUsername(e.target.value);
    }
    const updatePassword = (e) => {
        if (!e.target.value) {
            setShowPassword(false);
        }
        setPassword(e.target.value);
    }

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    }

    const login = () => {
        navigate("/Dashboard");
    }

    return (
        <div className="w-[100%] h-[100vh] bg-background  flex flex-col flex-wrap items-center justify-evenly">
            <div className="flex flex-col items-center sm:m-0">
                <svg className="w-[200px] h-[200px]"
                xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="500" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="500" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><filter x="0%" y="0%" width="100%" height="100%" id="3ce37830a1"><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" colorInterpolationFilters="sRGB"/></filter><mask id="289bbdfe85"><g filter="url(#3ce37830a1)"><rect x="-37.5" width="450" fill="#000000" y="-37.499999" height="449.999989" fillOpacity="0.66"/></g></mask><clipPath id="0091c6ad2c"><path d="M 0.910156 0.949219 L 95.410156 0.949219 L 95.410156 95.449219 L 0.910156 95.449219 Z M 0.910156 0.949219 " clipRule="nonzero"/></clipPath><clipPath id="5da1bcefd6"><rect x="0" width="96" y="0" height="96"/></clipPath><mask id="284dda9303"><g filter="url(#3ce37830a1)"><rect x="-37.5" width="450" fill="#000000" y="-37.499999" height="449.999989" fillOpacity="0.8"/></g></mask><clipPath id="7330c796f0"><path d="M 0.765625 0.488281 L 95.265625 0.488281 L 95.265625 94.988281 L 0.765625 94.988281 Z M 0.765625 0.488281 " clipRule="nonzero"/></clipPath><clipPath id="2ba10e8d01"><rect x="0" width="96" y="0" height="96"/></clipPath><clipPath id="7fd04a9cd0"><path d="M 101.097656 153.023438 L 290.847656 153.023438 L 290.847656 342.773438 L 101.097656 342.773438 Z M 101.097656 153.023438 " clipRule="nonzero"/></clipPath><clipPath id="a14f7234cc"><path d="M 86 34.535156 L 275.476562 34.535156 L 275.476562 224 L 86 224 Z M 86 34.535156 " clipRule="nonzero"/></clipPath><mask id="e6b6d66da8"><g filter="url(#3ce37830a1)"><rect x="-37.5" width="450" fill="#000000" y="-37.499999" height="449.999989" fillOpacity="0.66"/></g></mask><clipPath id="84c81ee0f3"><path d="M 0.414062 0.828125 L 94.914062 0.828125 L 94.914062 95.328125 L 0.414062 95.328125 Z M 0.414062 0.828125 " clipRule="nonzero"/></clipPath><clipPath id="2b3cdadd0c"><rect x="0" width="96" y="0" height="96"/></clipPath><mask id="f3e1da6709"><g filter="url(#3ce37830a1)"><rect x="-37.5" width="450" fill="#000000" y="-37.499999" height="449.999989" fillOpacity="0.8"/></g></mask><clipPath id="fd62d4392e"><path d="M 0.558594 0.664062 L 95.058594 0.664062 L 95.058594 95.164062 L 0.558594 95.164062 Z M 0.558594 0.664062 " clipRule="nonzero"/></clipPath><clipPath id="d361b2571d"><rect x="0" width="96" y="0" height="96"/></clipPath><clipPath id="dafa46d0cc"><path d="M 71.6875 19.011719 L 181.9375 19.011719 L 181.9375 129.257812 L 71.6875 129.257812 Z M 71.6875 19.011719 " clipRule="nonzero"/></clipPath><clipPath id="ae8c510223"><path d="M 195.71875 248.050781 L 305.96875 248.050781 L 305.96875 358.296875 L 195.71875 358.296875 Z M 195.71875 248.050781 " clipRule="nonzero"/></clipPath><clipPath id="87738ac958"><path d="M 195.941406 0 L 306.183594 0 L 306.183594 110.25 L 195.941406 110.25 Z M 195.941406 0 " clipRule="nonzero"/></clipPath><clipPath id="e6657391d1"><path d="M 68.8125 264.746094 L 179.054688 264.746094 L 179.054688 374.996094 L 68.8125 374.996094 Z M 68.8125 264.746094 " clipRule="nonzero"/></clipPath></defs><g mask="url(#289bbdfe85)"><g transform="matrix(1, 0, 0, 1, 71, 141)"><g clipPath="url(#5da1bcefd6)"><g clipPath="url(#0091c6ad2c)"><path fill="#07a0c3" d="M 95.410156 95.449219 L 95.410156 0.726562 L 0.6875 0.726562 C 0.6875 53.042969 43.097656 95.449219 95.410156 95.449219 Z M 95.410156 95.449219 " fillOpacity="1" fillRule="nonzero"/></g></g></g></g><g mask="url(#284dda9303)"><g transform="matrix(1, 0, 0, 1, 211, 136)"><g clipPath="url(#2ba10e8d01)"><g clipPath="url(#7330c796f0)"><path fill="#dd1c1a" d="M 0.765625 0.488281 L 0.765625 95.210938 L 95.488281 95.210938 C 95.488281 42.898438 53.078125 0.488281 0.765625 0.488281 Z M 0.765625 0.488281 " fillOpacity="1" fillRule="nonzero"/></g></g></g></g><g clipPath="url(#7fd04a9cd0)"><path fill="#07a0c3" d="M 195.824219 248.042969 L 101.097656 248.042969 C 101.097656 300.363281 143.507812 342.773438 195.828125 342.773438 C 248.140625 342.773438 290.554688 300.363281 290.554688 248.042969 C 290.554688 195.730469 248.140625 153.316406 195.828125 153.316406 L 195.828125 248.042969 Z M 195.824219 248.042969 " fillOpacity="1" fillRule="nonzero"/></g><g clipPath="url(#a14f7234cc)"><path fill="#dd1c1a" d="M 180.75 129.265625 L 275.476562 129.265625 C 275.476562 76.945312 233.066406 34.535156 180.746094 34.535156 C 128.429688 34.535156 86.019531 76.945312 86.019531 129.265625 C 86.019531 181.582031 128.429688 223.992188 180.746094 223.992188 L 180.746094 129.265625 Z M 180.75 129.265625 " fillOpacity="1" fillRule="nonzero"/></g><g mask="url(#e6b6d66da8)"><g transform="matrix(1, 0, 0, 1, 195, 15)"><g clipPath="url(#2b3cdadd0c)"><g clipPath="url(#84c81ee0f3)"><path fill="#07a0c3" d="M 0.414062 0.828125 L 0.414062 95.550781 L 95.136719 95.550781 C 95.136719 43.238281 52.730469 0.828125 0.414062 0.828125 Z M 0.414062 0.828125 " fillOpacity="1" fillRule="nonzero"/></g></g></g></g><g mask="url(#f3e1da6709)"><g transform="matrix(1, 0, 0, 1, 84, 264)"><g clipPath="url(#d361b2571d)"><g clipPath="url(#fd62d4392e)"><path fill="#dd1c1a" d="M 95.058594 95.164062 L 95.058594 0.441406 L 0.335938 0.441406 C 0.335938 52.753906 42.746094 95.164062 95.058594 95.164062 Z M 95.058594 95.164062 " fillOpacity="1" fillRule="nonzero"/></g></g></g></g><g clipPath="url(#dafa46d0cc)"><path fill="#f0c808" d="M 71.6875 129.257812 C 71.6875 190.269531 121.222656 239.804688 182.238281 239.804688 C 243.253906 239.804688 292.789062 190.269531 292.789062 129.257812 C 292.789062 68.242188 243.253906 18.707031 182.238281 18.707031 C 121.222656 18.707031 71.6875 68.242188 71.6875 129.257812 Z M 76.429688 129.257812 C 76.429688 70.859375 123.84375 23.449219 182.238281 23.449219 C 240.636719 23.449219 288.046875 70.859375 288.046875 129.257812 C 288.046875 187.652344 240.636719 235.0625 182.238281 235.0625 C 123.84375 235.0625 76.429688 187.652344 76.429688 129.257812 Z M 76.429688 129.257812 " fillOpacity="1" fillRule="evenodd"/></g><g clipPath="url(#ae8c510223)"><path fill="#f0c808" d="M 305.96875 248.050781 C 305.96875 187.035156 256.433594 137.5 195.417969 137.5 C 134.402344 137.5 84.867188 187.035156 84.867188 248.050781 C 84.867188 309.066406 134.402344 358.601562 195.417969 358.601562 C 256.433594 358.601562 305.96875 309.066406 305.96875 248.050781 Z M 301.226562 248.050781 C 301.226562 306.449219 253.8125 353.859375 195.417969 353.859375 C 137.019531 353.859375 89.609375 306.449219 89.609375 248.050781 C 89.609375 189.652344 137.019531 142.242188 195.417969 142.242188 C 253.8125 142.242188 301.226562 189.652344 301.226562 248.050781 Z M 301.226562 248.050781 " fillOpacity="1" fillRule="evenodd"/></g><g clipPath="url(#87738ac958)"><path fill="#f0c808" d="M 195.941406 0 C 134.925781 0 85.390625 49.539062 85.390625 110.550781 C 85.390625 171.566406 134.925781 221.101562 195.941406 221.101562 C 256.953125 221.101562 306.492188 171.566406 306.492188 110.550781 C 306.492188 49.539062 256.953125 0 195.941406 0 Z M 195.941406 4.746094 C 254.335938 4.746094 301.746094 52.15625 301.746094 110.550781 C 301.746094 168.949219 254.335938 216.359375 195.941406 216.359375 C 137.542969 216.359375 90.132812 168.949219 90.132812 110.550781 C 90.132812 52.15625 137.542969 4.746094 195.941406 4.746094 Z M 195.941406 4.746094 " fillOpacity="1" fillRule="evenodd"/></g><g clipPath="url(#e6657391d1)"><path fill="#f0c808" d="M 179.054688 374.996094 C 240.070312 374.996094 289.605469 325.457031 289.605469 264.445312 C 289.605469 203.429688 240.070312 153.894531 179.054688 153.894531 C 118.042969 153.894531 68.507812 203.429688 68.507812 264.445312 C 68.507812 325.457031 118.042969 374.996094 179.054688 374.996094 Z M 179.054688 370.253906 C 120.660156 370.253906 73.25 322.839844 73.25 264.445312 C 73.25 206.046875 120.660156 158.636719 179.054688 158.636719 C 237.453125 158.636719 284.863281 206.046875 284.863281 264.445312 C 284.863281 322.839844 237.453125 370.253906 179.054688 370.253906 Z M 179.054688 370.253906 " fillOpacity="1" fillRule="evenodd"/></g></svg>           
                <p className="text-text m mb-0 text-4xl sm:text-6xl ">Splitness</p>
                <p className="text-text text-xl m-[10px]">Find the workout split for you</p>
            </div>
            <div>
                <div className="flex flex-col items-center m-[20px] ">
                    <div className="relative w-[250px]">
                        <svg className="absolute text-6xl left-[5px] bottom-[10px]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor"><path strokeLinejoin="round" d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></path><circle cx={12} cy={7} r={3}></circle></g></svg>
                        <input
                            className="text-2xl m-[10px] text-text custom-input username"
                            placeholder="Username"
                            onChange={updateUsername}
                            value={username}></input>
                    </div>
                    <div className="relative w-[250px]">
                    <svg className="absolute text-5xl left-[10px] bottom-[10px]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m6 3V10H6v10zm0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3"></path></svg>
                        <input
                            className="text-2xl m-[10px] mt-[20px] custom-input"
                            placeholder="Password"
                            onChange={updatePassword}
                            type={showPassword ? "text" : "password"}
                            value={password}></input>
                        {!password ? null : 
                            <button
                            className="absolute right-0 text-3xl bottom-[15px]"
                            onClick={togglePasswordVisibility}
                            >
                                
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M229.21 165a6 6 0 0 1-10.42 6l-20-35.08a122 122 0 0 1-39 18.09l6.17 37a6 6 0 0 1-4.93 6.91a6.85 6.85 0 0 1-1 .08a6 6 0 0 1-5.91-5L148 156.44a128.86 128.86 0 0 1-40 0L101.92 193a6 6 0 0 1-5.92 5a6.85 6.85 0 0 1-1-.08a6 6 0 0 1-4.92-6.92l6.17-37a122 122 0 0 1-39-18.09L37.21 171a6 6 0 1 1-10.42-6l20.85-36.48a152 152 0 0 1-20.31-20.77a6 6 0 0 1 9.34-7.54C53.54 121.11 83.07 146 128 146s74.46-24.89 91.33-45.77a6 6 0 0 1 9.34 7.54a152 152 0 0 1-20.31 20.77Z"></path></svg>
                            </button>
                        }
                    </div>
                </div>
                <div className="flex flex-col items-center mb-[50px]">
                    <button className="bg-lightBlue text-3xl text-white w-[150px] p-[5px] ps-[10px] pe-[10px] mb-[10px] rounded" onClick={login}>
                        Login
                    </button>
                    <p>Dont have an account? Create one <Link to="/SignUp" className="link">here</Link></p>
                </div>
            </div>
        </div>
    )
}