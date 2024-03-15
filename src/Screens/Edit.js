import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EditUser = () => {
    // Initialize state for each input field
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [position, setPosition] = useState('');
    const [role, setRole] = useState('');

    const { id } = useParams()

    const navigate = useNavigate()


    useEffect(() => {
        const fetcusers = async () => {
            try {
                let resposne = await fetch(`http://localhost:8000/api/v1/auth/getoneuser/${id}`)
                const datanew = await resposne.json()
                setFirstName(datanew.firstname)
                setLastName(datanew.lastname)
                setEmail(datanew.email)
                setPosition(datanew.position)
                setRole(datanew.role)
            } catch (error) {
                console.log(error)
            }
        }
        fetcusers()
    }, [])


    const Update = async (e) => {
        e.preventDefault()

        let updateddata = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            position: position,
            role: role
        }

        try {
            let response = await fetch(`https://aqib-a9ae691e09a3.herokuapp.com/api/v1/auth/edituser/${id}`, {
                method: "PUT",
                body: JSON.stringify(updateddata),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const newdata = await response.json()
            alert(newdata.message)
            navigate('/adminview')

        } catch (error) {

        }
    }


    return (
        <div className="max-w-2xl mx-auto p-8">
            <h2 className="text-xl font-semibold mb-6">Edit User</h2>

            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                    type="text"
                    id="name"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter name"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                    type="text"
                    id="name"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter name"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter email"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="position" className="block text-sm font-medium text-gray-700">Position</label>
                <input
                    type="text"
                    id="position"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter position"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
                <select
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                    <option value="">Select a role</option>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                    <option value="hr">HR</option>
                </select>
            </div>

            <div className="flex justify-start space-x-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={Update}>Save</button>
                <button className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">Cancel</button>
            </div>
        </div>
    );
};

export default EditUser;
