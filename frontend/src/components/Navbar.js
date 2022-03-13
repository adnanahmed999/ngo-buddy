import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CastForEducationIcon from "@material-ui/icons/CastForEducation";
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import PermPhoneMsgIcon from "@material-ui/icons/PermPhoneMsg";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import BookIcon from '@material-ui/icons/Book';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import ExploreIcon from '@material-ui/icons/Explore';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import { InputLabel } from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import CodeIcon from "@mui/icons-material/Code";
// import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    appBar: {
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: "none",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "flex-end",
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = () => {
    const classes = useStyles();
    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const open = Boolean(anchorEl);
    const [openslider, setOpenslider] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpenslider(true);
    };

    const handleDrawerClose = () => {
        setOpenslider(false);
    };

    // const handleMenu = (event) => {
    //   setAnchorEl(event.currentTarget);
    // };

    // const handleClose = () => {
    //   setAnchorEl(null);
    // };
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const dispatch = useDispatch();

    // let history = useHistory();
    const navigate = useNavigate();
    const handleLogout = () => {
        if (userInfo) {
            navigate("/");
            dispatch(logout());
        }
        console.log("logout");
    };
    const handleChange = (event) => {
        // setAge(event.target.value);
        console.log("change language")
    };

    return (
        <div>
            <AppBar
                style={{ background: "#F3FAFF" }}
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: openslider,
                })}
            >
                <Toolbar>
                    <IconButton
                        style={{ color: "black" }}
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, openslider && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title} noWrap>
                        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
                            App Name
                        </Link>
                    </Typography>
                    {/* <InputLabel id="demo-simple-select-label">Language Default(English)</InputLabel> */}
                    <Select
                        style={{ marginRight: "20px" }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                        defaultValue="English"
                        onChange={handleChange}
                    >

                        <MenuItem value={10} onClick={() => { navigate("/") }}>English</MenuItem>
                        <MenuItem value={20} onClick={() => { navigate("/hin") }}>हिंदी</MenuItem>
                    </Select>
                    {userInfo ? (
                        <>
                            {/* <p style={{ color: "black" }}>Welcome,</p> */}
                            {/* <h1 style={{ color: "black", marginRight: "10px", marginLeft: "3px" }}> {userInfo.data.name}</h1> */}
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                onClick={handleLogout}
                            >
                                Logout
                            </Button>
                        </>
                    ) : (
                        <div>
                            {/* <Link
                to={"/signup"}
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button variant="outlined" color="primary">
                  Sign Up
                </Button>
              </Link> */}
                            &nbsp;
                            <Link
                                to={"/signin"}
                                style={{ textDecoration: "none", color: "white" }}
                            >
                                <Button variant="contained" color="primary">
                                    Log In
                                </Button>
                            </Link>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={openslider}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <ListItem button key="App Name">
                        <ListItemText primary="App Name" />
                    </ListItem>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />

                <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
                    <List>
                        <ListItem button key="Home">
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                    </List>
                </Link>
                <Link
                    to={`/blogs`}
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <List>
                        <ListItem button key="Blogs">
                            <ListItemIcon>
                                <BookIcon />
                            </ListItemIcon>
                            <ListItemText primary="Blogs" />
                        </ListItem>
                    </List>
                </Link>
                <Link
                    to={`/eventsAttended`}
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <List>
                        <ListItem button key="Events Attended">
                            <ListItemIcon>
                                <VerifiedUserIcon />
                            </ListItemIcon>
                            <ListItemText primary="Events Attended" />
                        </ListItem>
                    </List>
                </Link>
                <Link
                    to={`/giftcard`}
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <List>
                        <ListItem button key="Gift Card">
                            <ListItemIcon>
                                <CardGiftcardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Gift Card" />
                        </ListItem>
                    </List>
                </Link>
                <Link
                    to={`/map`}
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <List>
                        <ListItem button key="Maps">
                            <ListItemIcon>
                                <ExploreIcon />
                            </ListItemIcon>
                            <ListItemText primary="Maps" />
                        </ListItem>
                    </List>
                </Link>
                <Link
                    to={`/influencersLeaderboard`}
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <List>
                        <ListItem button key="Influencers LeaderBoard">
                            <ListItemIcon>
                                <EqualizerIcon />
                            </ListItemIcon>
                            <ListItemText primary="Influencers LeaderBoard" />
                        </ListItem>
                    </List>
                </Link>
                <Link
                    to={`/leaderboard`}
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <List>
                        <ListItem button key="LeaderBoard">
                            <ListItemIcon>
                                <EqualizerIcon />
                            </ListItemIcon>
                            <ListItemText primary="LeaderBoard" />
                        </ListItem>
                    </List>
                </Link>

                {/* {userInfo ? (
                    userInfo.data.isInstructor === true ? (
                        <Link
                            to={`/instructorcourses/${userInfo.data._id}`}
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            <List>
                                <ListItem button disabled={userInfo === null} key="My Courses">
                                    <ListItemIcon>
                                        <CastForEducationIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="My Courses" />
                                </ListItem>
                            </List>
                        </Link>
                    ) : (
                        <Link
                            to={`/mycourses/${userInfo.data._id}`}
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            <List>
                                <ListItem button disabled={userInfo === null} key="My Courses">
                                    <ListItemIcon>
                                        <CastForEducationIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="My Courses" />
                                </ListItem>
                            </List>
                        </Link>
                    )
                ) : (
                    <List>
                        <ListItem button disabled={userInfo === null} key="My Courses">
                            <ListItemIcon>
                                <CastForEducationIcon />
                            </ListItemIcon>
                            <ListItemText primary="My Courses" />
                        </ListItem>
                    </List>
                )} */}
                {/* {userInfo ? (
                    userInfo.data.isInstructor === true ? (
                        <Link
                            to={`/instructorAssignments/${userInfo.data._id}`}
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            <List>
                                <ListItem
                                    button
                                    disabled={userInfo === null}
                                    key="My Assignments"
                                >
                                    <ListItemIcon>
                                        <CastForEducationIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="My Assignments" />
                                </ListItem>
                            </List>
                        </Link>
                    ) : (
                        <Link
                            to={`/assignments/${userInfo.data._id}`}
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            <List>
                                <ListItem
                                    button
                                    disabled={userInfo === null}
                                    key="My Assignments"
                                >
                                    <ListItemIcon>
                                        <CastForEducationIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="My Assignments" />
                                </ListItem>
                            </List>
                        </Link>
                    )
                ) : (
                    <List>
                        <ListItem button disabled={userInfo === null} key="My Assignments">
                            <ListItemIcon>
                                <CastForEducationIcon />
                            </ListItemIcon>
                            <ListItemText primary="My Assignments" />
                        </ListItem>
                    </List>
                )} */}
                {userInfo ? (
                    <Link
                        to={`/myProfile`}
                        style={{ textDecoration: "none", color: "black" }}
                    >
                        <List>
                            <ListItem button disabled={userInfo === null} key="My Profile">
                                <ListItemIcon>
                                    <AccountCircleIcon />
                                </ListItemIcon>
                                <ListItemText primary="My Profile" />
                            </ListItem>
                        </List>
                    </Link>
                ) : (
                    <Link to={`/`} style={{ textDecoration: "none", color: "black" }}>
                        <List>
                            <ListItem button disabled key="My Profile">
                                <ListItemIcon>
                                    <AccountCircleIcon />
                                </ListItemIcon>
                                <ListItemText primary="My Profile" />
                            </ListItem>
                        </List>
                    </Link>
                )}

                {/* {userInfo ? (
                    userInfo.data.isInstructor === true ? (
                        <Link
                            to={`/myProfile`}
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            <List>
                                <ListItem button disabled={userInfo === null} key="My Profile">
                                    <ListItemIcon>
                                        <AccountCircleIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="My Profile" />
                                </ListItem>
                            </List>
                        </Link>
                    ) : (
                        <Link
                            to={`/myProfile`}
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            <List>
                                <ListItem button disabled={userInfo === null} key="My Profile">
                                    <ListItemIcon>
                                        <CastForEducationIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="My Profile" />
                                </ListItem>
                            </List>
                        </Link>
                    )
                ) : (
                    <List>
                        <ListItem button disabled={userInfo === null} key="My Profile">
                            <ListItemIcon>
                                <AccountCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary="My Profile" />
                        </ListItem>
                    </List>
                )} */}

                {/* <Link
                    to={"/codeEditor"}
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <List>
                        <ListItem button key="Code Editor">
                            <ListItemIcon>
                                <DeveloperModeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dev Playground" />
                        </ListItem>
                    </List>
                </Link> */}
                {/* <Link to={"/map"} style={{ textDecoration: "none", color: "black" }}>
          <List>
            <ListItem button key="Nearest Organisations">
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Nearest Organisations" />
            </ListItem>
          </List>
        </Link> */}
                {/* <Link
          to={"/contactForm"}
          style={{ textDecoration: "none", color: "black" }}
        >
          <List>
            <ListItem button key="Contact Us">
              <ListItemIcon>
                <PermPhoneMsgIcon />
              </ListItemIcon>
              <ListItemText primary="Contact Us" />
            </ListItem>
          </List>
        </Link> */}
                {/*    <Link
          to={"/careerForm"}
          style={{ textDecoration: "none", color: "black" }}
        >
          <List>
            <ListItem button key="Career Opportunities">
              <ListItemIcon>
                <BusinessCenterIcon />
              </ListItemIcon>
              <ListItemText primary="Career Opportunities" />
            </ListItem>
          </List>
        </Link> */}
                {/* <Link
          to={"/leaderboard"}
          style={{ textDecoration: "none", color: "black" }}
        > 
          <List>
            <ListItem button key="Leaderboard">
              <ListItemIcon>
                <BusinessCenterIcon />
              </ListItemIcon>
              <ListItemText primary="Leaderboard" />
            </ListItem>
          </List>
        </Link> */}
                <Divider />
            </Drawer>
        </div>
    );
};

export default Header;
// import React, { useState, useEffect } from "react";
// import AppBar from "@material-ui/core/AppBar";
// import Button from "@material-ui/core/Button";
// import clsx from "clsx";
// import Drawer from "@material-ui/core/Drawer";
// import Divider from "@material-ui/core/Divider";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import CastForEducationIcon from "@material-ui/icons/CastForEducation";
// import AccountCircleIcon from "@material-ui/icons/AccountCircle";
// import HomeIcon from "@material-ui/icons/Home";
// import AccountCircle from "@material-ui/icons/AccountCircle";
// import IconButton from "@material-ui/core/IconButton";
// // import Card from "@material-ui/core/Card";
// // import CardActions from "@material-ui/core/CardActions";
// // import CardContent from "@material-ui/core/CardContent";
// // import CardMedia from "@material-ui/core/CardMedia";
// // import CssBaseline from "@material-ui/core/CssBaseline";
// // import Grid from "@material-ui/core/Grid";
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";
// import MenuIcon from "@material-ui/icons/Menu";
// import Toolbar from "@material-ui/core/Toolbar";
// import Menu from "@material-ui/core/Menu";
// // import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
// import MenuItem from "@material-ui/core/MenuItem";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles, useTheme } from "@material-ui/core/styles";
// // import Container from "@material-ui/core/Container";
// // import Link from "@material-ui/core/Link";
// // import cover from "../assets/Cover.jpg";

// import { Link } from "react-router-dom";

// // import { useDispatch, useSelector } from "react-redux";
// // import { logout } from "../actions/userActions";

// // import { useHistory } from "react-router-dom";

// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//     appBar: {
//         transition: theme.transitions.create(["margin", "width"], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//     },
//     appBarShift: {
//         width: `calc(100% - ${drawerWidth}px)`,
//         marginLeft: drawerWidth,
//         transition: theme.transitions.create(["margin", "width"], {
//             easing: theme.transitions.easing.easeOut,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//     },
//     hide: {
//         display: "none",
//     },
//     drawer: {
//         width: drawerWidth,
//         flexShrink: 0,
//     },
//     drawerPaper: {
//         width: drawerWidth,
//     },
//     drawerHeader: {
//         display: "flex",
//         alignItems: "center",
//         padding: theme.spacing(0, 1),
//         // necessary for content to be below app bar
//         ...theme.mixins.toolbar,
//         justifyContent: "flex-end",
//     },
//     content: {
//         flexGrow: 1,
//         padding: theme.spacing(3),
//         transition: theme.transitions.create("margin", {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//         marginLeft: -drawerWidth,
//     },
//     contentShift: {
//         transition: theme.transitions.create("margin", {
//             easing: theme.transitions.easing.easeOut,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//         marginLeft: 0,
//     },
//     title: {
//         flexGrow: 1,
//     },
//     heroContent: {
//         backgroundColor: "#FEFFFF",
//         padding: theme.spacing(4, 0, 4),
//     },
//     // header: {
//     //     height: "60vh",
//     //     backgroundSize: "cover",
//     //     backgroundPosition: "65% 50%",
//     //     backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${cover})`,
//     // },
//     heroText: {
//         margin: "0 10% 0 10%",
//         color: "white",
//     },
//     cardGrid: {
//         backgroundColor: "#FEFFFF",
//         paddingBottom: theme.spacing(8),
//     },
//     heading: {
//         width: "100%",
//         fontSize: 25,
//         fontWeight: "1000",
//         textDecoration: "underline",
//     },
//     card: {
//         backgroundColor: "#E6E6E6",
//         height: "100%",
//         display: "flex",
//         flexDirection: "column",
//     },
//     cardMedia: {
//         margin: "2%",
//         paddingTop: "56.25%",
//     },
//     cardContent: {
//         flexGrow: 1,
//     },
//     footer: {
//         backgroundColor: theme.palette.secondary.main,
//         padding: theme.spacing(6),
//     },
// }));

// const Navbar = () => {
//     const classes = useStyles();
//     const theme = useTheme();
//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const open = Boolean(anchorEl);
//     const logined = false;
//     const [openslider, setOpenslider] = React.useState(false);

//     const handleDrawerOpen = () => {
//         setOpenslider(true);
//     };

//     const handleDrawerClose = () => {
//         setOpenslider(false);
//     };

//     const handleMenu = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleClose = () => {
//         setAnchorEl(null);
//     };

//     // const userLogin = useSelector((state) => state.userLogin);
//     // const { loading, error, userInfo } = userLogin;

//     // const dispatch = useDispatch();

//     // let history = useHistory();

//     //   useEffect(() => {
//     // if (userInfo) {
//     //   history.push("/");
//     // }
//     //   }, [userInfo]);

//     const handleLogout = () => {
//         // if (userInfo) {
//         //     // history.push("/");
//         //     dispatch(logout());
//         // }
//         console.log("logout");
//     };

//     return (
//         <div>
//             <AppBar
//                 color="secondary"
//                 position="fixed"
//                 style={{ backgroundColor: "#e3edfc" }}
//                 className={clsx(classes.appBar, {
//                     [classes.appBarShift]: openslider,
//                 })}
//             >
//                 <Toolbar>
//                     <IconButton
//                         color="inherit"
//                         aria-label="open drawer"
//                         onClick={handleDrawerOpen}
//                         edge="start"
//                         className={clsx(classes.menuButton, openslider && classes.hide)}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography variant="h6" className={classes.title} noWrap>
//                         <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
//                             App Name
//                         </Link>
//                     </Typography>
//                     {/* {userInfo ? (
//                         <div>
//                             <IconButton
//                                 aria-label="account of current user"
//                                 aria-controls="menu-appbar"
//                                 aria-haspopup="true"
//                                 onClick={handleMenu}
//                                 color="inherit"
//                             >
//                                 <AccountCircle />
//                             </IconButton>
//                             <Menu
//                                 id="menu-appbar"
//                                 anchorEl={anchorEl}
//                                 anchorOrigin={{
//                                     vertical: "top",
//                                     horizontal: "right",
//                                 }}
//                                 keepMounted
//                                 transformOrigin={{
//                                     vertical: "top",
//                                     horizontal: "right",
//                                 }}
//                                 open={open}
//                                 onClose={handleClose}
//                             >
//                                 <MenuItem onClick={handleClose}>Profile</MenuItem>
//                                 <Divider />
//                                 <MenuItem onClick={handleClose}>My account</MenuItem>
//                                 <Divider />
//                                 <Link
//                                     to={`/assignments/${userInfo.data._id}`}
//                                     style={{ textDecoration: "none", color: "black" }}
//                                 >
//                                     <MenuItem>My Assignments</MenuItem>
//                                 </Link>
//                                 <Divider />
//                                 <Divider />
//                                 {userInfo.data.isInstructor === true ? (
//                                     <Link
//                                         to={`/instructorcourses/${userInfo.data._id}`}
//                                         style={{ textDecoration: "none", color: "black" }}
//                                     >
//                                         <MenuItem>My Courses</MenuItem>
//                                     </Link>
//                                 ) : (
//                                     <Link
//                                         to={`/mycourses/${userInfo.data._id}`}
//                                         style={{ textDecoration: "none", color: "black" }}
//                                     >
//                                         <MenuItem>My Courses</MenuItem>
//                                     </Link>
//                                 )}
//                                 <Divider />
//                                 <Link
//                                     to={`/contactForm`}
//                                     style={{ textDecoration: "none", color: "black" }}
//                                 >
//                                     <MenuItem>Contact us</MenuItem>
//                                 </Link>

//                                 <Divider />
//                                 <MenuItem onClick={handleLogout}>Logout</MenuItem>
//                             </Menu>
//                         </div>
//                     ) : (
//                         <div>
//                             <Link
//                                 to={"/signup"}
//                                 style={{ textDecoration: "none", color: "white" }}
//                             >
//                                 <Button variant="outlined" color="primary">
//                                     Sign Up
//                                 </Button>
//                             </Link>
//                             &nbsp;
//                             <Link
//                                 to={"/signin"}
//                                 style={{ textDecoration: "none", color: "white" }}
//                             >
//                                 <Button variant="contained" color="primary">
//                                     Log In
//                                 </Button>
//                             </Link>
//                         </div>
//                     )} */}
//                 </Toolbar>
//             </AppBar>

//             <Drawer
//                 className={classes.drawer}
//                 variant="persistent"
//                 anchor="left"
//                 open={openslider}
//                 classes={{
//                     paper: classes.drawerPaper,
//                 }}
//             >
//                 <div className={classes.drawerHeader}>
//                     <IconButton onClick={handleDrawerClose}>
//                         {theme.direction === "ltr" ? (
//                             <ChevronLeftIcon />
//                         ) : (
//                             <ChevronRightIcon />
//                         )}
//                     </IconButton>
//                 </div>
//                 <Divider />
//                 <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
//                     {/* <Button variant="contained" color="primary">
//                   Sign Up
//                 </Button> */}
//                     <List>
//                         <ListItem button key="Home">
//                             <ListItemIcon>
//                                 <HomeIcon />
//                             </ListItemIcon>
//                             <ListItemText primary="Home" />
//                         </ListItem>
//                     </List>
//                 </Link>
//                 {/* {userInfo ? (
//                     <Link
//                         to={`/mycourses/${userInfo.data._id}`}
//                         style={{ textDecoration: "none", color: "black" }}
//                     >
//                         <List>
//                             <ListItem button disabled={userInfo === null} key="My Courses">
//                                 <ListItemIcon>
//                                     <CastForEducationIcon />
//                                 </ListItemIcon>
//                                 <ListItemText primary="My Courses" />
//                             </ListItem>
//                         </List>
//                     </Link>
//                 ) : (
//                     <List>
//                         <ListItem button disabled={userInfo === null} key="My Courses">
//                             <ListItemIcon>
//                                 <CastForEducationIcon />
//                             </ListItemIcon>
//                             <ListItemText primary="My Courses" />
//                         </ListItem>
//                     </List>
//                 )}
//                 {userInfo ? (
//                     <Link
//                         to={`/assignments/${userInfo.data._id}`}
//                         style={{ textDecoration: "none", color: "black" }}
//                     >
//                         <List>
//                             <ListItem
//                                 button
//                                 disabled={userInfo === null}
//                                 key="My Assignments"
//                             >
//                                 <ListItemIcon>
//                                     <CastForEducationIcon />
//                                 </ListItemIcon>
//                                 <ListItemText primary="My Assignments" />
//                             </ListItem>
//                         </List>
//                     </Link>
//                 ) : (
//                     // <Link
//                     //   to={`/assignments`}
//                     //   style={{ textDecoration: "none", color: "black" }}
//                     // >
//                     <List>
//                         <ListItem button disabled={userInfo === null} key="My Assignments">
//                             <ListItemIcon>
//                                 <CastForEducationIcon />
//                             </ListItemIcon>
//                             <ListItemText primary="My Assignments" />
//                         </ListItem>
//                     </List>
//                     // </Link>
//                 )} */}

//                 {/* <Link
//                     to={"/myProfile"}
//                     style={{ textDecoration: "none", color: "black" }}
//                 >
//                     <List>
//                         <ListItem button disabled={userInfo === null} key="Profile">
//                             <ListItemIcon>
//                                 <AccountCircleIcon />
//                             </ListItemIcon>
//                             <ListItemText primary="Profile" />
//                         </ListItem>
//                     </List>
//                 </Link> */}
//                 <Link
//                     to={"/contactForm"}
//                     style={{ textDecoration: "none", color: "black" }}
//                 >
//                     <List>
//                         <ListItem button key="Contact Us">
//                             <ListItemIcon>
//                                 <HomeIcon />
//                             </ListItemIcon>
//                             <ListItemText primary="Contact Us" />
//                         </ListItem>
//                     </List>
//                 </Link>
//                 <Link
//                     to={"/careerForm"}
//                     style={{ textDecoration: "none", color: "black" }}
//                 >
//                     <List>
//                         <ListItem button key="Career Oppotunities">
//                             <ListItemIcon>
//                                 <HomeIcon />
//                             </ListItemIcon>
//                             <ListItemText primary="Career Oppotunities" />
//                         </ListItem>
//                     </List>
//                 </Link>
//                 <Divider />
//                 <Divider />
//             </Drawer>
//             {/* <div>
//         <Button variant="outlined" color="primary">
//           Sign Up
//         </Button>
//         &nbsp;
//         <Button variant="contained" color="primary">
//           Log In
//         </Button>
//       </div> */}
//         </div>
//     );
// };

// export default Navbar;
