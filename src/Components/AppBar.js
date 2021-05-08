import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CreateIcon from '@material-ui/icons/Create';
import List from '@material-ui/core/List';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import SchoolIcon from '@material-ui/icons/School';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles,useTheme } from '@material-ui/core/styles';


const NavBar = (props) => {
    const [open, setOpen] = useState(false);
   
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

//////// Style Elements ////////
    const drawerWidth = 240;
    const theme = useTheme();
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            marginBottom: '45px'
        },
        appBar: {
            transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: -drawerWidth,
        },
        contentShift: {
            transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        },
        navLink: {
            textDecoration: 'none',
            color: '#252525'
        }
    }));

    const classes = useStyles();


/////// JSX ///////
    return (
        <div className={classes.root}>
           <AppBar 
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                  })}
            >
                <Toolbar variant="dense">
                {
                    props.isLoggedIn 
                        && 
                    <IconButton 
                        edge="start" 
                        color="inherit" 
                        aria-label="menu" 
                        onClick={handleDrawerOpen} 
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                }
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <Avatar>
                    <AccountCircleOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Yashvardhan Mathur
                </Typography>
                <List>
                    <NavLink to="/dashboard" className={classes.navLink}>
                        <ListItem button key="dashboard">
                            <ListItemIcon> <DashboardIcon /> </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                            <Divider key="dashboard" />
                        </ListItem>
                    </NavLink>
                    <ListItem button key="academics">
                        <ListItemIcon> <SchoolIcon /> </ListItemIcon>
                        <ListItemText primary="Academics" />
                        <Divider key="academics" />
                    </ListItem>
                    <ListItem button key="exam">
                        <ListItemIcon> <CreateIcon/> </ListItemIcon>
                        <ListItemText primary="Exam" />
                        <Divider key="exam" />
                    </ListItem>
                </List>
            </Drawer> 
        </div>
      );
}
 
export default NavBar;
