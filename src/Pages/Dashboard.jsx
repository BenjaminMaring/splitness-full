import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { workoutData, progressData } from '../tempData';
import '../CSS/conic-loading.css'
import '../CSS/background-gradients.css'
import '../CSS/sidebar.css'
import BmrChart from "../Components/BmrChart";


export default function Dashboard() {
    const [index, setIndex] = useState(7);
    const navigate = useNavigate();


    // timing function for button slider
    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex(prev => (prev + 1) % 8);
        }, 2500)

        return () => clearTimeout(timer);
    }, [index]);

    const logout = () => {
        navigate("/")
    }


    const goToIndex = (num) => {
        setIndex(num);
    }

    const workoutElems = workoutData.map(item => {
        return (
            <div key={item.id} className="flex justify-between items-center m-[20px] p-[10px] shadow-lg blue-gradient rounded">
                <p className="text-3xl sm:text-xl text-white">{item.name}</p>
                <p className="text-mg text-white">{item.excersizeCount} Excersizes</p>
            </div>
        )
    })

    return (
        <div className="background flex">
            {/* wrapper for header and rest of app */}
            <div className="w-[100vw] ">
                <nav className="text-4xl h-[70px] flex justify-between items-center header-shadow z-10 bg-background">
                    <div className="flex items-center ms-[10px]">
                        <svg className="w-[40px] h-[40px]" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="500" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="500" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><filter x="0%" y="0%" width="100%" height="100%" id="3ce37830a1"><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" colorInterpolationFilters="sRGB"/></filter><mask id="289bbdfe85"><g filter="url(#3ce37830a1)"><rect x="-37.5" width="450" fill="#000000" y="-37.499999" height="449.999989" fillOpacity="0.66"/></g></mask><clipPath id="0091c6ad2c"><path d="M 0.910156 0.949219 L 95.410156 0.949219 L 95.410156 95.449219 L 0.910156 95.449219 Z M 0.910156 0.949219 " clipRule="nonzero"/></clipPath><clipPath id="5da1bcefd6"><rect x="0" width="96" y="0" height="96"/></clipPath><mask id="284dda9303"><g filter="url(#3ce37830a1)"><rect x="-37.5" width="450" fill="#000000" y="-37.499999" height="449.999989" fillOpacity="0.8"/></g></mask><clipPath id="7330c796f0"><path d="M 0.765625 0.488281 L 95.265625 0.488281 L 95.265625 94.988281 L 0.765625 94.988281 Z M 0.765625 0.488281 " clipRule="nonzero"/></clipPath><clipPath id="2ba10e8d01"><rect x="0" width="96" y="0" height="96"/></clipPath><clipPath id="7fd04a9cd0"><path d="M 101.097656 153.023438 L 290.847656 153.023438 L 290.847656 342.773438 L 101.097656 342.773438 Z M 101.097656 153.023438 " clipRule="nonzero"/></clipPath><clipPath id="a14f7234cc"><path d="M 86 34.535156 L 275.476562 34.535156 L 275.476562 224 L 86 224 Z M 86 34.535156 " clipRule="nonzero"/></clipPath><mask id="e6b6d66da8"><g filter="url(#3ce37830a1)"><rect x="-37.5" width="450" fill="#000000" y="-37.499999" height="449.999989" fillOpacity="0.66"/></g></mask><clipPath id="84c81ee0f3"><path d="M 0.414062 0.828125 L 94.914062 0.828125 L 94.914062 95.328125 L 0.414062 95.328125 Z M 0.414062 0.828125 " clipRule="nonzero"/></clipPath><clipPath id="2b3cdadd0c"><rect x="0" width="96" y="0" height="96"/></clipPath><mask id="f3e1da6709"><g filter="url(#3ce37830a1)"><rect x="-37.5" width="450" fill="#000000" y="-37.499999" height="449.999989" fillOpacity="0.8"/></g></mask><clipPath id="fd62d4392e"><path d="M 0.558594 0.664062 L 95.058594 0.664062 L 95.058594 95.164062 L 0.558594 95.164062 Z M 0.558594 0.664062 " clipRule="nonzero"/></clipPath><clipPath id="d361b2571d"><rect x="0" width="96" y="0" height="96"/></clipPath><clipPath id="dafa46d0cc"><path d="M 71.6875 19.011719 L 181.9375 19.011719 L 181.9375 129.257812 L 71.6875 129.257812 Z M 71.6875 19.011719 " clipRule="nonzero"/></clipPath><clipPath id="ae8c510223"><path d="M 195.71875 248.050781 L 305.96875 248.050781 L 305.96875 358.296875 L 195.71875 358.296875 Z M 195.71875 248.050781 " clipRule="nonzero"/></clipPath><clipPath id="87738ac958"><path d="M 195.941406 0 L 306.183594 0 L 306.183594 110.25 L 195.941406 110.25 Z M 195.941406 0 " clipRule="nonzero"/></clipPath><clipPath id="e6657391d1"><path d="M 68.8125 264.746094 L 179.054688 264.746094 L 179.054688 374.996094 L 68.8125 374.996094 Z M 68.8125 264.746094 " clipRule="nonzero"/></clipPath></defs><g mask="url(#289bbdfe85)"><g transform="matrix(1, 0, 0, 1, 71, 141)"><g clipPath="url(#5da1bcefd6)"><g clipPath="url(#0091c6ad2c)"><path fill="#07a0c3" d="M 95.410156 95.449219 L 95.410156 0.726562 L 0.6875 0.726562 C 0.6875 53.042969 43.097656 95.449219 95.410156 95.449219 Z M 95.410156 95.449219 " fillOpacity="1" fillRule="nonzero"/></g></g></g></g><g mask="url(#284dda9303)"><g transform="matrix(1, 0, 0, 1, 211, 136)"><g clipPath="url(#2ba10e8d01)"><g clipPath="url(#7330c796f0)"><path fill="#dd1c1a" d="M 0.765625 0.488281 L 0.765625 95.210938 L 95.488281 95.210938 C 95.488281 42.898438 53.078125 0.488281 0.765625 0.488281 Z M 0.765625 0.488281 " fillOpacity="1" fillRule="nonzero"/></g></g></g></g><g clipPath="url(#7fd04a9cd0)"><path fill="#07a0c3" d="M 195.824219 248.042969 L 101.097656 248.042969 C 101.097656 300.363281 143.507812 342.773438 195.828125 342.773438 C 248.140625 342.773438 290.554688 300.363281 290.554688 248.042969 C 290.554688 195.730469 248.140625 153.316406 195.828125 153.316406 L 195.828125 248.042969 Z M 195.824219 248.042969 " fillOpacity="1" fillRule="nonzero"/></g><g clipPath="url(#a14f7234cc)"><path fill="#dd1c1a" d="M 180.75 129.265625 L 275.476562 129.265625 C 275.476562 76.945312 233.066406 34.535156 180.746094 34.535156 C 128.429688 34.535156 86.019531 76.945312 86.019531 129.265625 C 86.019531 181.582031 128.429688 223.992188 180.746094 223.992188 L 180.746094 129.265625 Z M 180.75 129.265625 " fillOpacity="1" fillRule="nonzero"/></g><g mask="url(#e6b6d66da8)"><g transform="matrix(1, 0, 0, 1, 195, 15)"><g clipPath="url(#2b3cdadd0c)"><g clipPath="url(#84c81ee0f3)"><path fill="#07a0c3" d="M 0.414062 0.828125 L 0.414062 95.550781 L 95.136719 95.550781 C 95.136719 43.238281 52.730469 0.828125 0.414062 0.828125 Z M 0.414062 0.828125 " fillOpacity="1" fillRule="nonzero"/></g></g></g></g><g mask="url(#f3e1da6709)"><g transform="matrix(1, 0, 0, 1, 84, 264)"><g clipPath="url(#d361b2571d)"><g clipPath="url(#fd62d4392e)"><path fill="#dd1c1a" d="M 95.058594 95.164062 L 95.058594 0.441406 L 0.335938 0.441406 C 0.335938 52.753906 42.746094 95.164062 95.058594 95.164062 Z M 95.058594 95.164062 " fillOpacity="1" fillRule="nonzero"/></g></g></g></g><g clipPath="url(#dafa46d0cc)"><path fill="#f0c808" d="M 71.6875 129.257812 C 71.6875 190.269531 121.222656 239.804688 182.238281 239.804688 C 243.253906 239.804688 292.789062 190.269531 292.789062 129.257812 C 292.789062 68.242188 243.253906 18.707031 182.238281 18.707031 C 121.222656 18.707031 71.6875 68.242188 71.6875 129.257812 Z M 76.429688 129.257812 C 76.429688 70.859375 123.84375 23.449219 182.238281 23.449219 C 240.636719 23.449219 288.046875 70.859375 288.046875 129.257812 C 288.046875 187.652344 240.636719 235.0625 182.238281 235.0625 C 123.84375 235.0625 76.429688 187.652344 76.429688 129.257812 Z M 76.429688 129.257812 " fillOpacity="1" fillRule="evenodd"/></g><g clipPath="url(#ae8c510223)"><path fill="#f0c808" d="M 305.96875 248.050781 C 305.96875 187.035156 256.433594 137.5 195.417969 137.5 C 134.402344 137.5 84.867188 187.035156 84.867188 248.050781 C 84.867188 309.066406 134.402344 358.601562 195.417969 358.601562 C 256.433594 358.601562 305.96875 309.066406 305.96875 248.050781 Z M 301.226562 248.050781 C 301.226562 306.449219 253.8125 353.859375 195.417969 353.859375 C 137.019531 353.859375 89.609375 306.449219 89.609375 248.050781 C 89.609375 189.652344 137.019531 142.242188 195.417969 142.242188 C 253.8125 142.242188 301.226562 189.652344 301.226562 248.050781 Z M 301.226562 248.050781 " fillOpacity="1" fillRule="evenodd"/></g><g clipPath="url(#87738ac958)"><path fill="#f0c808" d="M 195.941406 0 C 134.925781 0 85.390625 49.539062 85.390625 110.550781 C 85.390625 171.566406 134.925781 221.101562 195.941406 221.101562 C 256.953125 221.101562 306.492188 171.566406 306.492188 110.550781 C 306.492188 49.539062 256.953125 0 195.941406 0 Z M 195.941406 4.746094 C 254.335938 4.746094 301.746094 52.15625 301.746094 110.550781 C 301.746094 168.949219 254.335938 216.359375 195.941406 216.359375 C 137.542969 216.359375 90.132812 168.949219 90.132812 110.550781 C 90.132812 52.15625 137.542969 4.746094 195.941406 4.746094 Z M 195.941406 4.746094 " fillOpacity="1" fillRule="evenodd"/></g><g clipPath="url(#e6657391d1)"><path fill="#f0c808" d="M 179.054688 374.996094 C 240.070312 374.996094 289.605469 325.457031 289.605469 264.445312 C 289.605469 203.429688 240.070312 153.894531 179.054688 153.894531 C 118.042969 153.894531 68.507812 203.429688 68.507812 264.445312 C 68.507812 325.457031 118.042969 374.996094 179.054688 374.996094 Z M 179.054688 370.253906 C 120.660156 370.253906 73.25 322.839844 73.25 264.445312 C 73.25 206.046875 120.660156 158.636719 179.054688 158.636719 C 237.453125 158.636719 284.863281 206.046875 284.863281 264.445312 C 284.863281 322.839844 237.453125 370.253906 179.054688 370.253906 Z M 179.054688 370.253906 " fillOpacity="1" fillRule="evenodd"/></g></svg>
                        <p className="font-bold">Splitness</p>
                    </div>
                    <img 
                        className="rounded-full w-[60px] h-[60px] border me-[10px]"  
                        src="https://source.unsplash.com/random"
                        alt="profile picture"
                        onClick={logout}
                        ></img>
                </nav>
                {/* sidbar  WRAPS SIDEBAT AND DASHBOARD ITEMS*/}
                <div className="flex flex-wrap items-start justify-between">

                    <div className="sidebar dashboard-component-bg">
                    
                    </div>
                    {/* wraps btn carousel and workouts section */}
                    <div className="flex flex-wrap justify-evenly mt-[10px] dashboard-wrapper">
                        {/* btn carousel */}
                        
                        <div className="flex justify-evenly items-center relative w-[370px] mb-[3px] dashboard-component-bg rounded min-h-[350px]">
                            <div className="absolute top-0 flex left-0 p-[20px]">
                                <p className="text-4xl font-medium">Features</p>
                            </div>
                            <div className="btn-carousel h-[270px] ms-[5px]">
                                <div className={ index <= 0 ? "btn-track btn-pos-0" 
                                            : index <= 2 ? "btn-track btn-pos-1"
                                            : index <= 4 ? "btn-track btn-pos-2"
                                            : index <= 6 ? "btn-track btn-pos-3"
                                            : index <= 7 ? "btn-track btn-pos-4"
                                            : "btn-track btn-pos-0"
                                        }>
                                    <button className="w-[160px] h-[200px] blue-gradient m-[10px] ps-[5px] rounded btn-shadow">
                                        <div className="icon-bg">
                                            <svg className="text-6xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="white" d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3.6a5.465 5.465 0 0 1-.393-1H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3.207c.349.099.683.23 1 .393V6a3 3 0 0 0-3-3zm3.5 7h1.837c.895-.63 1.986-1 3.163-1h-5a.5.5 0 0 0 0 1m-4-5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm1 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0-1a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0 5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0-2a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1M19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15z"></path></svg>
                                        </div>
                                        <div className="h-[110px] flex flex-col justify-evenly">
                                            <p className="text-white text-xl text-left ms-[10px] font-semibold">Create a New Workout</p>
                                            <p className="text-soft text-left ms-[10px]">For yourself or your friends</p>
                                        </div>
                                    </button>

                                    <button className="w-[160px] h-[200px] red-gradient m-[10px] ps-[5px] rounded btn-shadow">
                                        <div className="icon-bg">
                                            <svg className="text-5xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" d="M6.15.555a.389.389 0 0 0-.399 0a.26.26 0 0 0-.06.34c1.227 2.123 1.486 5.016-.19 6.611a5.505 5.505 0 0 1-1.495-1.994a3.88 3.88 0 0 0-1.995 3.49a4.688 4.688 0 0 0 4.987 4.488c3.211 0 4.877-1.994 4.986-4.488C12.114 6.01 9.99 2.33 6.15.555"></path></svg>                        
                                        </div>
                                        <div className="h-[110px] flex flex-col justify-evenly">
                                            <p className="text-white text-xl text-left font-semibold">Explore Popular Workouts</p>
                                            <p className="text-soft text-left ">Discover new excersizes</p>
                                        </div>
                                    </button>

                                    <button className="w-[160px] h-[200px] yellow-gradient m-[10px] ps-[5px] rounded btn-shadow flex flex-col justify-evenly">
                                        <div className="icon-bg">
                                            <svg className="text-4xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="white" strokeWidth={1.5}><path d="M1 21V3a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2Z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M15 7h4m-4 8.5h4m-4 3h4M5 7h2m2 0H7m0 0V5m0 2v2m-1.414 9.414L7 17m1.415-1.414L7 17m0 0l-1.414-1.414M7 17l1.415 1.414"></path></g></svg>                            
                                        </div>
                                        <div className="h-[110px] flex flex-col justify-evenly">
                                            <p className="text-white text-xl text-left ms-[10px] font-semibold">BMR Calculator</p>
                                            <p className="text-soft text-left ms-[10px]">Find the calories for your goal</p>
                                        </div>
                                    </button>
                                    <button className="w-[160px] h-[200px] green-gradient m-[10px] ps-[5px] rounded btn-shadow flex flex-col justify-evenly">
                                        <div className="icon-bg">
                                            <svg className="text-4xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="white" strokeWidth={1.5}><path d="M1 21V3a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2Z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M15 7h4m-4 8.5h4m-4 3h4M5 7h2m2 0H7m0 0V5m0 2v2m-1.414 9.414L7 17m1.415-1.414L7 17m0 0l-1.414-1.414M7 17l1.415 1.414"></path></g></svg>                            
                                        </div>
                                        <div className="h-[110px] flex flex-col justify-evenly">
                                            <p className="text-white text-xl text-left ms-[10px] font-semibold">Track your workout</p>
                                            <p className="text-soft text-left ms-[10px]">Compare your Progress</p>
                                        </div>
                                    </button>
                                    {/* ending blue button DONT TOUCH */}
                                    <button className="w-[160px] h-[200px] blue-gradient m-[10px] ps-[5px] rounded btn-shadow">
                                        <div className="icon-bg">
                                            <svg className="text-6xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="white" d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3.6a5.465 5.465 0 0 1-.393-1H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3.207c.349.099.683.23 1 .393V6a3 3 0 0 0-3-3zm3.5 7h1.837c.895-.63 1.986-1 3.163-1h-5a.5.5 0 0 0 0 1m-4-5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm1 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0-1a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0 5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0-2a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1M19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15z"></path></svg>
                                        </div>
                                        <div className="h-[110px] flex flex-col justify-evenly">
                                            <p className="text-white text-xl text-left ms-[10px] font-semibold">Create a New Workout</p>
                                            <p className="text-soft text-left ms-[10px]">For yourself or your friends</p>
                                        </div>
                                    </button>
                                    {/* ending red element DONT TOUCH*/}
                                    <button className="w-[160px] h-[200px] red-gradient m-[10px] ps-[5px] rounded btn-shadow">
                                        <div className="icon-bg">
                                            <svg className="text-5xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" d="M6.15.555a.389.389 0 0 0-.399 0a.26.26 0 0 0-.06.34c1.227 2.123 1.486 5.016-.19 6.611a5.505 5.505 0 0 1-1.495-1.994a3.88 3.88 0 0 0-1.995 3.49a4.688 4.688 0 0 0 4.987 4.488c3.211 0 4.877-1.994 4.986-4.488C12.114 6.01 9.99 2.33 6.15.555"></path></svg>                        
                                        </div>
                                        <div className="h-[110px] flex flex-col justify-evenly">
                                            <p className="text-white text-xl text-left font-semibold">Explore Popular Workouts</p>
                                            <p className="text-soft text-left ">Discover new excersizes</p>
                                        </div>
                                    </button>
                                    {/* dont add more buttons here, add them above the ending blue button */}
                                </div>
                                </div>
                                <div className="dots">
                                    <button 
                                        className={index == 0 || index == 7  ? "dot conic-loading blue-dot" : "dot"}
                                        onClick={() => goToIndex(7)}
                                        ></button>
                                    <button 
                                        className={index == 1 || index == 2 ? "dot conic-loading red-dot" : "dot"}
                                        onClick={() => goToIndex(1)}
                                        ></button>
                                    <button 
                                        className={index == 3 || index == 4 ? "dot conic-loading yellow-dot" : "dot"}
                                        onClick={() => goToIndex(3)}
                                        ></button>
                                    <button 
                                        className={index == 5 || index == 6 ? "dot conic-loading green-dot" : "dot"}
                                        onClick={() => goToIndex(5)}
                                        ></button>
                            </div>
                        </div> 
                        {/* Your workouts section */}
                        <div className="w-[370px] dashboard-component-bg rounded mb-[3px]">
                            <div className="flex justify-between items-end m-[20px]">
                                <p className="text-4xl font-medium text-text">Your Workouts</p>
                                <p className="text-xl">See All</p>
                            </div>
                            {workoutElems}
                        </div>
                        {/* BMR Calculator section */}
                        <div className="w-[370px] dashboard-component-bg rounded mb-[3px]">
                            <div className="flex justify-between items-end m-[20px]">
                                <p className="text-4xl font-medium">Your BMR</p>
                                <button className="p-[10px]">Add</button>
                            </div>
                            <BmrChart />
                        </div>
                        {/* Your Progess section */}
                        <div className="w-[370px] dashboard-component-bg rounded mb-[3px]">
                            <div className="flex justify-between items-end m-[20px]">
                                <p className="text-4xl font-medium">Your Progress</p>
                                <p className="text-xl">See All</p>
                            </div>
                            {}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}