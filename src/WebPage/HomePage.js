import React from "react";
import GoodList from "../Component/GoodsList";
import NavBar from "../Component/NavBar";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";
import '../index.css';
import CopyRight from "../Component/CopyRight";

function HomePage () {
    return(
        <Paper className="fixed-bg">
            <Box>
                <NavBar/>
                <GoodList/>
                <CopyRight/>
            </Box>
        </Paper>
        
        
    );
}


export default HomePage;