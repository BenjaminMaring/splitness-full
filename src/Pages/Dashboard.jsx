import { useState, useEffect } from "react";
import { workoutData } from '../tempData';
import { useOutletContext } from "react-router-dom";
import { getRecentWorkouts } from "../ApiServices/ApiCalls";
import '../CSS/conic-loading.css'
import '../CSS/background-gradients.css'
import '../CSS/sidebar.css'
import BmrChart from "../Components/BmrChart";



export default function Dashboard() {
    const [index, setIndex] = useState(7);
    const [recentWorkouts, setRecentWorkouts] = useState([]);

    
    
    //use effect to call hellper function that retrieves info for recent workouts
    useEffect(() => {
        handleGetRecentWorkouts();
    }, [])

    // timing function for button slider
    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex(prev => (prev + 1) % 8);
        }, 2500)

        return () => clearTimeout(timer);
    }, [index]);

    const handleGetRecentWorkouts = async () => {
        const data = await getRecentWorkouts();
        setRecentWorkouts(data);
    }

    //this changes the state of the button slider to go to a specific button on the track
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
         <>
            <div className="flex flex-wrap justify-evenly mt-[10px] dashboard-wrapper">
                {/* btn carousel */}
                <div className="flex justify-evenly items-center relative w-[370px] mb-[10px] dashboard-component-bg rounded min-h-[350px]">
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
                <div className="w-[370px] dashboard-component-bg rounded mb-[10px]">
                    <div className="flex justify-between items-end m-[20px]">
                        <p className="text-4xl font-medium text-text">Your Workouts</p>
                        <p className="text-xl">See All</p>
                    </div>
                    {workoutElems}
                </div>
                {/* BMR Calculator section */}
                <div className="w-[370px] dashboard-component-bg rounded mb-[10px]">
                    <div className="flex justify-between items-end m-[20px]">
                        <p className="text-4xl font-medium">Your BMR</p>
                        <button className="p-[10px]">Add</button>
                    </div>
                    <BmrChart />
                </div>
                {/* Your Progess section */}
                <div className="w-[370px] dashboard-component-bg rounded mb-[10px]">
                    <div className="flex justify-between items-end m-[20px]">
                        <p className="text-4xl font-medium">Your Progress</p>
                        <p className="text-xl">See All</p>
                    </div>
                    {}
                </div>
            </div>
        </>
    )
}