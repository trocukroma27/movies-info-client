import React, {useState, useEffect} from 'react';
import {AppBar, Avatar, Toolbar, Typography, IconButton, Container, Drawer, List, ListItem, Divider, Menu, MenuItem, Button} from "@material-ui/core";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import { ChevronRight } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './styles';

const getIsSmall = () => window.innerWidth <= 900;

export default function Navbar() {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [isSmall, setIsSmall] = useState(getIsSmall());
    const [open, setOpen] = useState(false);
    const [anchorMovieMenu, setAnchorMovieMenu] =useState(null);
    const [anchorTVMenu, setAnchorTVMenu] = useState(null);
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        const onResize = () => {
            setIsSmall(getIsSmall());
        }

        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, []);

    const logout = () => {
        setOpen(false);

        dispatch({type: 'LOGOUT'});

        history.push('/');

        setUser(null);
    };

    const login = () => {
        setOpen(false); 
        history.push('/auth');
    }

    useEffect(() => {
        const token = user?.token;

        if(token) {
            const decodedToken = decode(token);

            if(decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location]);


    return (
        <AppBar position="sticky" className={classes.navBar}>
            <Container className={classes.navBarContainer}  maxWidth="lg">
                <Link style={{textDecoration: "none", marginRight: "40px",}} to="/">
                    <Typography className={classes.logo} component="h2" variant="h2">Movie Info</Typography>
                </Link>
                <Toolbar className={classes.navBarToolbar}>
                    {!isSmall ? (
                        <div className={classes.toolbarInner}>
                        <div>
                            <Button className={classes.openMenuButton} aria-controls="movieMenu" aria-haspopup="true" onClick={(e) => setAnchorMovieMenu(e.currentTarget)}>Фільми</Button>
                            <Menu id="movieMenu" anchorEl={anchorMovieMenu} keepMounted open={Boolean(anchorMovieMenu)} classes={{list: classes.menu}} onClose={() => setAnchorMovieMenu(null)}>
                                <MenuItem className={classes.menuItem} onClick={() => setAnchorMovieMenu(null)} component={Link} to="/movie/all">Усі фільми</MenuItem>
                                <Divider/>
                                <MenuItem className={classes.menuItem} onClick={() => setAnchorMovieMenu(null)} component={Link} to="/movie/genres">За жанром</MenuItem>
                            </Menu>
                            <Button className={classes.openMenuButton} aria-controls="TVMenu" aria-haspopup="true" onClick={(e) => setAnchorTVMenu(e.currentTarget)}>Серіали</Button>
                            <Menu id="movieMenu" anchorEl={anchorTVMenu} keepMounted open={Boolean(anchorTVMenu)} classes={{list: classes.menu}} onClose={() => setAnchorTVMenu(null)}>
                                <MenuItem className={classes.menuItem} onClick={() => setAnchorTVMenu(null)} component={Link} to="/tv/all">Усі серіали</MenuItem>
                                <Divider/>
                                <MenuItem className={classes.menuItem} onClick={() => setAnchorTVMenu(null)} component={Link} to="/tv/genres">За жанром</MenuItem>
                            </Menu>
                            {user?.result?.roles.some(role => role.role === "Модератор") ? <Button className={classes.openMenuButton} component={Link} to="/create">Створити</Button> : ""}
                            {user?.result?.roles.some(role => role.role === "Адміністратор") ? <Button className={classes.openMenuButton} component={Link} to="/users">Користувачі</Button> : ""}
                        </div>
                        {user ? (
                            <div className={classes.profile}>
                                <Avatar className={classes.avatar} alt={user.result.username}>{user.result.username.charAt(0)}</Avatar>
                                <Typography className={classes.userName} variant="h6">{user.result.username}</Typography>
                                <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Вийти</Button>
                            </div>
                        ) : (
                            <Button className={classes.signin} onClick={login} variant="contained" color="primary">Увійти</Button>
                        )}
                        </div>
                    ) : (
                        <div>
                        <IconButton onClick={() => setOpen(true)} className={classes.navBarButton}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor="right"  open={open} classes={{paper: classes.drawer}}>
                            <div className={classes.drawerHeader}>
                                <IconButton className={classes.drawerButton} onClick={() => setOpen(false)}>
                                    <ChevronRight />
                                </IconButton>
                            </div>
                            <Divider />
                            {user ? (
                                <div className={classes.profile}>
                                    <Avatar className={classes.avatar} alt={user.result.username}>{user.result.username.charAt(0)}</Avatar>
                                    <Typography className={classes.userName} variant="h6">{user.result.username}</Typography>
                                    <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Вийти</Button>
                                </div>
                            ) : (
                                <Button onClick={login} className={classes.signin} variant="contained" color="primary">Увійти</Button>
                            )}
                            <Divider />
                            <h3 className={classes.mobileMenuItem}>Фільми</h3>
                            <Divider variant="middle" />
                            <List className={classes.mobileMenuInner}>
                                <ListItem onClick={() => setOpen(false)} className={classes.mobileMenuInnerItem} component={Link} to="/movie/all">Усі фільми</ListItem>
                                <ListItem onClick={() => setOpen(false)} className={classes.mobileMenuInnerItem} component={Link} to="/movie/genres">За жанром</ListItem>
                            </List>
                            <Divider />
                            <h3 className={classes.mobileMenuItem}>Серіали</h3>
                            <Divider variant="middle" />
                            <List className={classes.mobileMenuInner}>
                                <ListItem onClick={() => setOpen(false)} className={classes.mobileMenuInnerItem} component={Link} to="/tv/all">Усі серіали</ListItem>
                                <ListItem onClick={() => setOpen(false)} className={classes.mobileMenuInnerItem} component={Link} to="/tv/genres">За жанром</ListItem>
                            </List>
                            <Divider />
                            {user?.result?.roles.some(role => role.role === "Модератор") 
                                ? <Button className={classes.mobileMenuBtn} onClick={() => setOpen(false)} component={Link} to="/create">Створити</Button> 
                                : ""
                            }
                            <Divider />
                            {user?.result?.roles.some(role => role.role === "Адміністратор") 
                                ? <Button className={classes.mobileMenuBtn} onClick={() => setOpen(false)} component={Link} to="/users">Користувачі</Button> 
                                : ""
                            }
                            <Divider />
                        </Drawer>
                        </div>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    )
}