import { useState, useEffect } from 'react'

export default function WorkoutSettings({ workoutData }) {
    const [selected, setSelected] = useState(0);
    const [copied, setCopied] = useState(false);

    //whenever the selected value changes, reset the copied state
    useEffect(() => {
        setCopied(false);
    }, [selected])

    const stopPropogation = (e) => {
        e.stopPropagation();
    }

    const changeTab = (number) => {
        setSelected(number);
    }

    const handleCopyButton = () => {
        navigator.clipboard.writeText(`http://localhost:5173/Workout/${workoutData.workout_id}`);
        setCopied(true);
    }

    return (
        <div onClick={stopPropogation} className="bg-slate-100  rounded-md w-[350px] h-[250px] md:w-[500px]">
            {/* header */}
            <div className="flex items-center h-[50px] bg-slate-100 rounded-t-md ">
                <button className={`w-[110px] h-[100%] flex justify-center hover:rounded-tl-md rounded-tl-md items-center hover:bg-slate-200 transition duration-75 border-b-2 
                                  ${selected === 0 ? "border-b-2 border-cyan-500" : null}
                `} 
                        onClick={() => changeTab(0)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" d="M5.5 9.75v10.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V9.75a.25.25 0 0 0-.25-.25h-2.5a.75.75 0 0 1 0-1.5h2.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 18.25 22H5.75A1.75 1.75 0 0 1 4 20.25V9.75C4 8.784 4.784 8 5.75 8h2.5a.75.75 0 0 1 0 1.5h-2.5a.25.25 0 0 0-.25.25m7.03-8.53l3.25 3.25a.749.749 0 0 1-.326 1.275a.749.749 0 0 1-.734-.215l-1.97-1.97v10.69a.75.75 0 0 1-1.5 0V3.56L9.28 5.53a.751.751 0 0 1-1.042-.018a.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0"></path></svg>
                    Share
                </button>
                <button className={`w-[130px] h-[100%] flex justify-center items-center hover:bg-slate-200 transition duration-75 border-b-2 border-r-2 
                                  ${selected === 1 ? "border-b-2 border-b-cyan-500" : null}
                `} 
                        onClick={() => changeTab(1)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none">
                        <path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path><path fill="black" d="M16 15c1.306 0 2.418.835 2.83 2H20a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 1 1 0-2h9.17A3.001 3.001 0 0 1 16 15M8 9a3 3 0 0 1 2.762 1.828l.067.172H20a1 1 0 0 1 .117 1.993L20 13h-9.17a3.001 3.001 0 0 1-5.592.172L5.17 13H4a1 1 0 0 1-.117-1.993L4 11h1.17A3.001 3.001 0 0 1 8 9m8-6c1.306 0 2.418.835 2.83 2H20a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 0 1 0-2h9.17A3.001 3.001 0 0 1 16 3"></path></g>
                    </svg>                    
                    Settings
                </button>
            </div>
            {/* body content */}
            {/* share */}
            { selected === 0 ? 
            <div className=" h-[200px] flex flex-col text-xl items-center justify-evenly">
                <div></div>
                <div className="flex w-[90%] items-center justify-between">
                    <p>Shareable Link</p>
                    <div className="h-[100%] flex items-center relative">
                        <input className="w-[130px] rounded-tr-none rounded-br-none md:w-[250px] pl-[5px] z-[2]" 
                            value={`http://localhost:5173/Workout/${workoutData.workout_id}`} 
                        readOnly />
                        <button className="h-[100%] bg-gray-400 px-1" onClick={handleCopyButton}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 448 512"><path fill="white" d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24m120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97"></path></svg>
                        </button>
                        <div className={`${ copied ? "top-[30px]" : "top-[0px]"} absolute z-[1]`} id="copy-link">
                            <p className="">Link Copied!</p>
                        </div>
                    </div>
                </div>
            </div>
            : null}
        </div>
    )
}