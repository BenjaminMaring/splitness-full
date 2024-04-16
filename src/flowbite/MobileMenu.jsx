import { Dropdown, DropdownItem } from 'flowbite-react';
import { Link } from 'react-router-dom';
import '../CSS/MobileMenu.css'
                        
export default function MobileMenu({logout, username}) {

    const img = <img 
                    className="rounded-full w-[60px] h-[60px] border me-[10px]"  
                    src="https://source.unsplash.com/random"
                    alt="profile picture"
                ></img>

    return (
    <Dropdown label="" renderTrigger={() => img} 
        className="z-10 bg-white mt-[10px] text-xl min-w-[150px] w-[200px] max-w-[300px]"
    >
        <Dropdown.Header className="m-[10px]">
            <p>Hello, {username}</p>
            <p className="ms-[10px]"></p>
            <Link to="/Profile">Profile</Link>
        </Dropdown.Header>
        <DropdownItem className="w-[100%] mb-[20px]">
            <div className="w-[100%] border-b"></div>
        </DropdownItem>
        <Dropdown.Divider />
        <Dropdown.Item className="mb-[10px] ps-[10px]">
            <Link to="/dashboard/" className="text-xl">Home</Link>
        </Dropdown.Item>
        <Dropdown.Item className="mb-[10px] ps-[10px]">
            <Link to="/dashboard/workouts" className="text-xl">Workouts</Link>
        </Dropdown.Item>
        <Dropdown.Item className="mb-[10px] ps-[10px]">
            <Link to="/dashboard/workouts" className="text-xl">Trending</Link>
        </Dropdown.Item>
        <Dropdown.Item className="mb-[10px] ps-[10px]">
            <Link to="/dashboard/workouts" className="text-xl">BMR Calculator</Link>
        </Dropdown.Item>
        <Dropdown.Item className="mb-[20px] ps-[10px]">
            <Link to="/dashboard/workouts" className="text-xl">Excersize Tracker</Link>
        </Dropdown.Item>
        <DropdownItem className="w-[100%]">
            <div className="w-[100%] border-b"></div>
        </DropdownItem>
        <Dropdown.Item className="m-[10px]">
            <div onClick={logout} className="w-[100%]">
                <p className="text-xl text-left">Logout</p>
            </div>
        </Dropdown.Item>
    </Dropdown>
    );
}
                        