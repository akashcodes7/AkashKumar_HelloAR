import React, { useState, useEffect } from 'react';
import add_user from '../../static/add-user.png'

const LocalStorageData = () => {
    const data = localStorage.getItem('userDetails');
    if (data) {
        return JSON.parse(data)
    } else { return [] };
}

const Model = ({ visible, onClose, id }) => {
    const [user, setUser] = useState('');
    const [role, setRole] = useState('');
    const [lastSignIn, setLastSignIn] = useState('');

    const [userDetails, setUserDetails] = useState(LocalStorageData());


    const handleAddUserDetails = (e) => {
        e.preventDefault();
        let userDetail = {
            username: user,
            lastsignIn: lastSignIn,
            role: role,
        }
        setUserDetails([...userDetails, userDetail]);
        setRole('');
        setUser('');
        setLastSignIn('');
    }


    useEffect(() => {
        localStorage.setItem('userDetails', JSON.stringify(userDetails));
    }, [userDetails])




    if (!visible) return null;

    return (

        <>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10">
                <div className="grid grid-cols-4 gap-0">
                    <div></div>
                    <div className="flex flex-col items-center p-5 space-y-20 text-white bg-rose-400 showcase">
                        <img src={add_user} alt="icon" className="w-32 h-32" />
                        <p>Lorem Ipsum is simply dummy text of t, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className="flex flex-col p-10 space-y-4 bg-white rounded">
                        <form action="" className="space-y-4" onSubmit={handleAddUserDetails}>
                            <p className="text-2xl font-semibold">User Information</p>
                            <p className="font-semibold">Email Id of User</p>
                            <input type="text" onChange={(e) => setUser(e.target.value)} value={user} className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
                            <p className="font-semibold">Last Signed In</p>
                            <input type="text" onChange={(e) => setLastSignIn(e.target.value)} value={lastSignIn} className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
                            <div className="space-y-2 dropdown">
                                <p htmlFor="role" className="font-semibold">Role</p>
                                <select value={role} name="cars" id="cars" onChange={(e) => setRole(e.target.value)} className="px-3 py-2 border-2 border-solid rounded-md w-36 border-slate-300">
                                    <option defaultValue>Select Role</option>
                                    <option value="Admin">Admin</option>
                                    <option value="Owner">Owner</option>
                                    <option value="Sales">Sales</option>
                                </select>
                            </div>
                            <div className="pt-10 space-x-5">
                                <button className="p-2 px-5 text-white bg-yellow-500 rounded-md hover:bg-yellow-700" onClick={onClose}>Cancel</button>
                                <button type="submit" className="p-2 px-8 text-white bg-green-500 rounded-md hover:bg-green-700">Add</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Model;
