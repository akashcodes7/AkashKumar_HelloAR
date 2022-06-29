import React from 'react';
import logo from '../../static/logo.webp'
import profile_pic from '../../static/profile_pirc.jpeg'
const NavBar = () => {
    return (
        <div className="w-full static top-0 z-10  bg-white  border-b border-spacing-2">
            <div className="flex items-center justify-between w-full px-0 relative border-b-0 py-3">
                <div className="logo flex items-center justify-between">
                    <div className=" flex items-center justify-between space-x-2 ml-5">
                        <img src={logo} alt="" className="w-10 h-10" />
                        <span className="font-Roboto text-lg font-bold">MY APPLICATION</span>
                    </div>
                </div>
                <div className="user-icon flex items-center justify-between space-x-2 mr-5">
                    <img src={profile_pic} alt="" className="w-10 h-10 rounded-full" />
                    <div className="user-name">
                        <span>Barde Ridel</span>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default NavBar;
