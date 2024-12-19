import React from "react";
import sidebarLogo from '../../assets/sidebarLogo.png';
import user from '../../assets/user.png';
import {NavLink} from 'react-router-dom';
import Avatar from 'react-avatar';
import {FaCalendar, FaCog, FaDollarSign, FaHammer, FaHome, FaTachometerAlt, FaUser, FaUserFriends} from 'react-icons/fa'

const AdminSidebar = () => {
    return(
        //<div className="bg-gradient-to-t from-yellow-500 via-orange-700 to-red-700 text-white h-screen fixed left-0 top-0 bottom-0 sapce-y-2 w-64">
        <div className="bg-gradient-to-t from-red-700 via-orange-700 to-yellow-300 text-white h-screen fixed left-0 top-0 bottom-0 sapce-y-2 w-64">
            <div className="bg-white">
                <img src={sidebarLogo} alt="Image 1" className="w-25" />
            </div>
            <div className="burgerContainer">
                <div className="burgerTrigger"></div>
                <div className="burgerMenu"></div>
            </div>
            <div className="flex justify-center items-center mt-4">
                <Avatar name="Madiha Aftab" size="40" round={true} />
                <div className="profileContent">
                    <p className="name">Madiha Aftab</p>
                    <p>madiha@gmail.com</p>
                </div>
            </div>
            <NavLink to="/admin-dashboard" className="flex items-center space-x-4 bock py-2.5 px-4 hover:bg-yellow-600 rounded-lg">
                <FaHome className="mr-2"/>
                <span>Dashboard</span>
            </NavLink>
            <NavLink to="/employee-dashboard" className="flex items-center space-x-4 bock py-2.5 px-4 hover:bg-yellow-600 rounded-lg">
                <FaUserFriends/>
                <span>Employees</span>
            </NavLink>
            <NavLink to="/attendance" className="flex items-center space-x-4 bock py-2.5 px-4 hover:bg-yellow-600 rounded-lg">
                <FaCalendar/>
                <span>Attendance Management</span>
            </NavLink>
            <NavLink to="/payroll" className="flex items-center space-x-4 bock py-2.5 px-4 hover:bg-yellow-600 rounded-lg">
                <FaDollarSign/>
                <span>Payroll</span>
            </NavLink>
            <NavLink to="/performance" className="flex items-center space-x-4 bock py-2.5 px-4 hover:bg-yellow-600 rounded-lg">
                <FaTachometerAlt/>
                <span>Performance Monitoring</span>
            </NavLink>
            <NavLink to="/setting" className="flex items-center space-x-4 bock py-2.5 px-4 hover:bg-yellow-600 rounded-lg">
                <FaCog/>
                <span>Settings</span>
            </NavLink>
        </div>
    )
}
export default AdminSidebar