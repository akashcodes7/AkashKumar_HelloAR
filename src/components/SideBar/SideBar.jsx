import React from 'react';
import { NavLink } from 'react-router-dom'
const SideBar = () => {
    return (
        <div className="fixed min-h-screen text-lg bg-white border-r-2 border-gray-300 font-Roboto sidebar w-52">
            <div className="flex flex-col">
                <NavLink className={({ isActive }) => (isActive ? ' font-bold bg-green-500' : 'inactive')} to="/products">Products</NavLink>
                <NavLink className={({ isActive }) => (isActive ? ' font-bold bg-green-500' : 'inactive')} to="/demo-script">Demo Script</NavLink>
                <NavLink className={({ isActive }) => (isActive ? ' font-bold bg-green-500' : 'inactive')} to="/customers">Customers</NavLink>
                <NavLink className={({ isActive }) => (isActive ? ' font-bold bg-green-500' : 'inactive')} to="/sales-team">Sales Team</NavLink>
                <NavLink className={({ isActive }) => (isActive ? ' font-bold bg-green-500' : 'inactive')} to="/demo">Demos</NavLink>
                <NavLink className={({ isActive }) => (isActive ? ' font-bold bg-green-500' : 'inactive')} to="/settings">Settings</NavLink>
            </div>
        </div>
    );
}

export default SideBar;
