import React, { useState } from 'react'
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import { AppBar, Stack, Button, IconButton, Toolbar, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import SearchedData from '../SearchedData/SearchedData';
function NavBar({ setglobalVar }) {
    const navigate = useNavigate();
    const [data, setData] = useState('');
    function handleChange(e) {
        setData(e.target.value)
    }
    function getData() {
        setglobalVar(data)
        navigate("/data")
    }
    return (
        <AppBar>
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit">
                    <DesktopMacIcon />
                </IconButton>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    Hacker News Search
                </Typography>
                <Stack direction='row' spacing={3}>
                    <TextField
                        hiddenLabel
                        sx={{ m: 1, width: '15ch' }}
                        onChange={handleChange}
                        id="filled-hidden-label-small"
                        variant="filled"
                        size="small"
                    />
                    <Button onClick={getData} variant="contained" size="small">Get news</Button>

                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar