import React, { useState } from 'react';

const UserRegistration = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [position, setPosition] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('User');
    const [profilePicture, setProfilePicture] = useState('');

    const Register = async (e) => {
        e.preventDefault()
        let formData = new FormData();
        formData.append("firstname", firstname);
        formData.append("lastname", lastname);
        formData.append("position", position);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("role", role);

        if (profilePicture) {
            formData.append("profilePicture", profilePicture);
        }

        try {
            let response = await fetch('https://aqib-a9ae691e09a3.herokuapp.com/api/v1/auth/registration', {
                method: "POST",
                body: formData
            });

            const data = await response.json(); // you need to await the resolution of the promise here

            if (response.ok) {
                alert(data.message); // assuming your server responds with a JSON that includes a message field
            } else {
                // Handle errors when the response is not ok (e.g., status code 400 or 500)
                alert(data.message || "An error occurred during registration.");
            }
        } catch (error) {
            // Handle network errors or issues with the fetch call
            console.error("Registration Error:", error);
            alert("Failed to send registration data.");
        }
    };




    return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-700">USER REGISTRATION</h2>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
                    FIRSTNAME
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="text" placeholder="First Name"
                    onChange={(e) => setFirstname(e.target.value)} value={firstname} />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
                    LAST NAME
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="text" placeholder="Last Name"
                    onChange={(e) => setLastname(e.target.value)} value={lastname} />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="position">
                    POSITION
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="position" type="text" placeholder="Position"
                    onChange={(e) => setPosition(e.target.value)} value={position} />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    EMAIL
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)} value={email} />
            </div>

            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    PASSWORD
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"
                    onChange={(e) => setPassword(e.target.value)} value={password} />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Picture
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="file" 
                    onChange={(e) => setProfilePicture(e.target.files[0])} />
            </div>

            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
                    ROLE
                </label>
                <select className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="role"
                    onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value='admin'>Sys Admin</option>
                    <option value='hr'>HR</option>
                    <option value='user'>User</option>
                </select>
            </div>

            <div className="flex items-center justify-between mb-6">
                <button onClick={Register} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    SAVE
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    DELETE
                </button>
                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    CLOSE
                </button>
            </div>


        </div>
    );
}

export default UserRegistration;
