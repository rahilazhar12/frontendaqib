import React from "react";
import { Route, Routes } from "react-router-dom";
import Loginpage from "../Screens/Login";
import Home from "../Screens/Home";
import Adminview from "../Screens/Adminview";
import UserRegistration from "../Screens/Userregisterpage";
import Edit from "../Screens/Edit";
import ProtectedRoute from "./Protectedroutes";
import ErrorPage from "../Screens/Error";
const Webrouting = () => {
    return (
        <>
            <>

                <Routes>

                    <Route path="/" element={<Loginpage />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/userregister" element={<UserRegistration />} />
                    <Route path="/editpage/:id" element={<Edit />} />
                    <Route path="/*" element={<ErrorPage />} />
                    <Route path='/adminview' element={<ProtectedRoute component={Adminview} allowedRoles={["admin"]} />} />

                </Routes>
            </>
        </>
    );
};

export default Webrouting;
