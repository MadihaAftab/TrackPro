import React from "react";
import {Box, IconButton} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
    return(
        <Box display="flex" justifyContent="space-between" p={2}>
            <Box display="flex" backgroundColor="gray" borderRadius="2px">
            <InputBase sx={{ml:2, flex:1}} placeholder="Search"/>
            <IconButton type="button" sx={{p:1}}>
                <SearchIcon/>
            </IconButton>
            </Box>
            <Box display="flex">
                <IconButton>
                    <NotificationsOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon/>
                </IconButton>
            </Box>
        </Box>
    )
}
export default Navbar