import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import {routes} from './routes';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
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
            marginBottom: '60px'
        },
        toolbar: {
            paddingRight: 24, 
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
            justifyContent: 'flex-end'
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
let toolBar = '';
    if(props.isLoggedIn === true){
        toolBar = (
            <div>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Dashboard
                    </Typography>   
                </Toolbar>
            </div>
        );
    } else {
        toolBar = (
            <Toolbar>

            </Toolbar>
        );
    }

    return (
    <div className={classes.root}>
      
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
            })}
        >
            {toolBar}
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
            <div>
                <Avatar>
                    <AccountCircleOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h6">
                    Yashvardhan Mathur
                </Typography>
            </div>
            <List>
                {
                    routes.map((item) => {
                        return(
                            <NavLink to={'/' + item.path.toLowerCase()} className={classes.navLink}>
                                <ListItem button key={item.path.toLowerCase()}>
                                    <ListItemIcon> {item.icon} </ListItemIcon>
                                    <ListItemText primary={item.path}/>
                                    <Divider key={item.path.toLowerCase()} />
                                </ListItem>
                            </NavLink>
                        );
                    })
                }
            </List>
        </Drawer>
    </div>
      );
}
 
export default NavBar;
