import React, { useState } from 'react';
import Button from '../components/Events/Button'
import Model from '../components/Pop-up/Model';
import delete_icon from '../static/delete-icon.png'




const Settings = () => {
    const handleOnClose = () => setshowMyModal(false)
    const [showMyModal, setshowMyModal] = useState(false)
    // const [userDetails, setUserDetails] = useState(LocalStorageData());


    const data = JSON.parse(localStorage.getItem('userDetails'));
    // console.log(data)




    const deleteRecord = (username) => {
        console.log(username)
        let elements = JSON.parse(localStorage.getItem('userDetails'));
        elements = elements.filter(element => element.username !== username);
        localStorage.setItem('userDetails', JSON.stringify(elements));
        window.location.reload(false);
    };

    // useEffect(() => {
    //     localStorage.setItem('userDetails', JSON.stringify(userDetails));

    // }, [userDetails])



    return (
        <div className="mt-10 ml-16">
            <div>
                <Button text="ADD USER" op={setshowMyModal} />
                <Model onClose={handleOnClose} visible={showMyModal} />
            </div>
            <div className="mt-10 mr-20">
                <div className="overflow-x-auto shadow-md ">
                    <table className="w-full text-sm text-left text-gray-500 border border-collapse border-slate-400">
                        {data.length > 0 && <>
                            <thead className="text-base text-gray-700 bg-gray-200 ">
                                <tr>
                                    <th scope="col" className="px-6 py-3 border border-slate-300">
                                        #
                                    </th>
                                    <th scope="col" className="px-6 py-3 border border-slate-300">
                                        User
                                    </th>
                                    <th scope="col" className="px-6 py-3 border border-slate-300">
                                        Last Signed In
                                    </th>
                                    <th scope="col" className="px-6 py-3 border border-slate-300">
                                        Role
                                    </th>
                                    <th scope="col" className="px-6 py-3 border border-slate-300">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                        </>}

                        <tbody>
                            {
                                data.map((value, key) => {
                                    return (
                                        <tr key={key} className="bg-white border-b border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 border whitespace-nowrap border-slate-300">{key}</th>
                                            <td className="px-6 py-4 border border-slate-300">{value.username}</td>
                                            <td className="px-6 py-4 border border-slate-300">{value.lastsignIn}</td>
                                            <td className="px-6 py-4 border border-slate-300">{value.role}</td>
                                            <td className="px-6 py-4 border border-slate-300" onClick={() => deleteRecord(value.username)}>
                                                <img src={delete_icon} alt="" className="w-8 h-8 p-1.5 text-white rounded-full hover:bg-green-600 bg-green-400" />
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    {data.length < 1 && <div className="content-center p-2 font-bold text-center text-red-500 bg-gray-100 center">No User Data Found! Please Add some data to be displayed.</div>}
                </div>
            </div>
        </div>
    );
}

export default Settings;
