import React from "react";
import { AppBar, Box, Toolbar, IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function NavBar() {
    return(
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon/>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                楓之谷裝備交易試做平台
            </Typography>
            <Button color= "inherit" variant="outlined" startIcon={<ShoppingCartIcon />}>購物車</Button>
            <div style={{ width: 24 }} />
            <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
        </Box>
    );
}