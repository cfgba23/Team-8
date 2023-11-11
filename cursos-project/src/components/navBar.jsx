import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const pages = ['Inicio', 'Quienes somos', 'Programas', 'Novedades','Contacto', 'Cursos'];

function NavBar() {

    return (
        <AppBar position="static">
            <Container style ={{backgroundColor: 'white'}} maxWidth="xl">
                <Toolbar disableGutters>
                    <img style ={{marginLeft: '20px'}} src='../images/image-2.png'/>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box style={{marginLeft: '150px'}} sx={{flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button style={{fontSize:'10px'}}
                                key={page}
                                sx={{ my: 2, color: 'black', display: 'block'}}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Button style={{marginLeft: '5px', marginRight: '5px', backgroundColor: 'orange', borderRadius: '10px', height: '30px', fontSize: '8px', color: 'white'}}> Quiero donar </Button>
                    <Button style={{marginRight:'10px',backgroundColor: 'blue', borderRadius: '10px', height: '30px', fontSize: '8px', color:'white'}}> Ser voluntario </Button>

                    <Box >
                        <div style ={{backgroundColor: 'orange', height: '90px', width: '90px'}}>
                        <Tooltip title="Open settings">
                            <AccountCircleIcon style = {{width: '90px', height: '50px'}}/>
                       Iniciar sesion
                        </Tooltip>
                        </div>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;