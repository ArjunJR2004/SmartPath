import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import Courses from "../pages/Courses/Courses";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import Wishlist from "../pages/WishList/WishList";
import Profile from "../pages/Profile/Profile";
import Settings from "../pages/Settings/Settings";
import NotFound from "../pages/NotFound/NotFound";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:id" element={<CourseDetails />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AppRoutes;