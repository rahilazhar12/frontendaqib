import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminView = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        const fetcusers = async () => {
            try {
                let resposne = await fetch('https://aqib-a9ae691e09a3.herokuapp.com/api/v1/auth/getdata')
                const datanew = await resposne.json()
                setData(datanew)
            } catch (error) {
                console.log(error)
            }
        }
        fetcusers()
    }, [data])



    const Deleteuser = async (id) => {
        try {
            let response = await fetch(`https://aqib-a9ae691e09a3.herokuapp.com/api/v1/auth/deleteuser/${id}`, {
                method: "DELETE",
                headers: {
                    // Assuming you are using a Bearer token; adjust if using another scheme
                    "Content-Type": `application/json`
                },
            })

            const data = await response.json()

            if (response.ok) {
                alert(data.Message)
            } else {
                alert('Un-Authorized Role')
            }

        } catch (error) {
            console.log(error)
        }
    }




    return (
        <div>
            <div className="flex justify-between items-center mb-4 p-10">
                <h1 className="text-xl font-bold">USERS</h1>
                <div>
                    <Link to='/userregister'>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            + NEW
                        </button>
                    </Link>
                    <button className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                        Refresh
                    </button>
                </div>
            </div>

            <table className="min-w-full table-auto">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Position</th>
                        <th className="px-4 py-2">Role</th>
                        <th className="px-4 py-2">Edit</th>
                        <th className="px-4 py-2">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user, index) => (
                        <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}>
                            <td className="border px-4 py-2">{`${user.firstname} ${user.lastname}`}</td>
                            <td className="border px-4 py-2">{user.email}</td>
                            <td className="border px-4 py-2">{user.position}</td>
                            <td className="border px-4 py-2">{user.role}</td>
                            <td className="border px-4 py-2">
                                <Link to={`/editpage/${user._id}`}>
                                    Edit
                                </Link>
                            </td>
                            <td className="border px-4 py-2">
                                <button onClick={() => Deleteuser(user._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminView;
