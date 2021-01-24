import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import executiveLogo from '../images/executive-logo.png';
import IconButton from '@material-ui/core/IconButton';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles(theme => ({
    appBar:{
        backgroundColor:theme.palette.common.white,
        padding:"0 2.5em",
        [theme.breakpoints.down("sm")]:{
            padding:"0 .1em"
        }
    },
    executiveLogoButton:{
        "&:hover":{
            backgroundColor:'transparent'
        }
    },
    tabItem:{
        color:theme.palette.common.black,
        minWidth:"1em",
        marginLeft:"3em",
        fontSize:"1.0625rem",
        textTransform:'capitalize',
        [theme.breakpoints.down("lg")]:{
            fontSize:"1em"
        }
    },
    tabsContainer:{
        marginLeft:'auto'
    },
    applyButton:{
        marginRight:"auto",
        marginLeft:'3.5em',
        border:`1px solid ${theme.palette.primary.main}`,
        padding:'.5em 1.8em',
        textTransform:'capitalize',
        fontWeight:'500',
        borderRadius:".4em",
        fontSize:"1.0625rem",
    },
    drawerItemButton:{
        color:theme.palette.common.black,
        marginLeft:'auto',
        "&:hover":{
            backgroundColor:'transparent',
        }
    },
    applyButtonDrawer:{
        border:`1px solid ${theme.palette.primary.main}`,
        padding:'.3em 1.9em',
        textTransform:'capitalize',
        fontWeight:'500',
        borderRadius:".4em",
        fontSize:"1.0625rem", 
    }
}))



const Header = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = useState(0);
    const [navbar, setNavbar] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matchesMD= useMediaQuery(theme.breakpoints.down("md"));


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    
    window.addEventListener('scroll', () => {
        const appBar = document.getElementById("appbar").clientHeight;
        if(window.scrollY >= appBar) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }

    })

    
    const tabs = (
        <React.Fragment>
            <Tabs value={value} onChange={handleChange} aria-label="Tabs Header" indicatorColor="primary" className={classes.tabsContainer}>
                <Tab label="Home" className={classes.tabItem} disableRipple/>
                <Tab label="About Us" className={classes.tabItem} disableRipple/>
                <Tab label="Our Services" className={classes.tabItem} disableRipple/>
                <Tab label="Responsibilities" className={classes.tabItem} disableRipple/>
                <Tab label="Country" className={classes.tabItem} disableRipple/>
            </Tabs>
            <Button className={classes.applyButton} disableRipple>Apply</Button>
        </React.Fragment>
    )

    const drawer = (
        <React.Fragment>
        <IconButton onClick={() => setOpenDrawer(true)} className={classes.drawerItemButton}><i className="fas fa-bars"></i></IconButton>
        <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)}>
            <List>
                <ListItem divider button style={{padding:".9em"}}>
                    <ListItemText primary="Home"/>
                </ListItem>
                <ListItem divider button style={{padding:".9em"}}>
                    <ListItemText primary="About Us" />
                </ListItem>
                <ListItem divider button style={{padding:".9em"}}>
                    <ListItemText primary="Our Services" />
                </ListItem>
                <ListItem divider button style={{padding:".9em"}}>
                    <ListItemText primary="Responsibilities" />
                </ListItem>
                <ListItem divider button style={{padding:".9em"}}>
                    <ListItemText primary="Country" />
                </ListItem>
                <ListItem style={{padding:".9em"}}>
                    <Button disableRipple className={classes.applyButtonDrawer} >Apply</Button>
                </ListItem>
            </List>
        </SwipeableDrawer>
        </React.Fragment>
    )
    return(
        <React.Fragment>
            <AppBar id="appbar" position="fixed" className={classes.appBar} style={{boxShadow:navbar ? theme.shadows[5] : theme.shadows[0]}}>
                <Toolbar>
                    <IconButton className={classes.executiveLogoButton} disableRipple>
                        <img  src={executiveLogo} alt="ex"/> 
                    </IconButton>
                    {matchesMD ? drawer : tabs}
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Header;