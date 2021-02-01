import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ImportAddrIcon from "@material-ui/icons/ImportContacts";
import NotificationsIcon from "@material-ui/icons/Notifications";
import {
  ListItem as MuiListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import SettingsInputCompositeIcon from "@material-ui/icons/SettingsInputComposite";
import Router from "@material-ui/icons/RouterRounded";
import LogOut from "@material-ui/icons/MeetingRoom";
import Syst from "@material-ui/icons/Dvr";
import Logs from "@material-ui/icons/Receipt";
import Account from "@material-ui/icons/AccountCircle";
import bgImage from "../assets/img/sidebar0.jpg";
import TableIntef from "../Components/TableInterf/TableInterf.js";
import TableAddr from "../Components/TableAddr/TableAddr.js";
import TableRouting from "../Components/TableRouting/TableRouting.js";
import TableLog from "../Components/TableLog/TableLog.js";
import System from "../Components/System/System.js";
import Desktop from "@material-ui/icons/DesktopMacRounded";

const drawerWidth = 260;

const ListItem = withStyles({
  root: {
    "&$selected": {
      backgroundColor: "rgba(255,255,255,0.2)",
      borderRadius: "25px",
    },
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.2)",
      borderRadius: "25px",
    },
  },
  selected: {},
})(MuiListItem);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    backgroundColor: "#EEEEEE",
    color: "black",
    border: "none",
    boxShadow: "none",
  },

  toolbarIcon: {
    zIndex: 3,
    color: "white",
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
    fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
    fontSize: "16px",
    justifyContent: "center",
    ...theme.mixins.toolbar,
  },
  appBar: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
    padding: 6,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
    marginLeft: 14,
    fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
    fontSize: "33px",
    fontWeight: "1000 ",
    lineHeight: "58px",
    //fontStyle: "Bol"
  },
  items: {
    zIndex: 3,
    color: "white",
  },

  background: {
    position: "absolute",
    zIndex: "1",
    height: "100%",
    width: "100%",
    display: "block",
    top: "0",
    left: "0",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    "&:after": {
      position: "absolute",
      zIndex: "2",
      width: "100%",
      height: "100%",
      content: '""',
      display: "block",
      backgroundColor: "#000",
      opacity: ".6",
    },
  },

  drawerPaper: {
    color: "transparent",
    border: "none",
    position: "fixed",
    top: "0",
    bottom: "0",

    left: "0",
    zIndex: "1",
    width: drawerWidth,
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      position: "fixed",
      height: "100%",
    },
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    backgroundColor: "#EEEEEE",
  },

  container: {
    paddingTop: theme.spacing(5),
    paddingLeft: theme.spacing(35),
    //paddingBottom: theme.spacing(24),
  },

  paper: {
    padding: theme.spacing(2),
    display: "block",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

const renderSwitch = (section) => {
  switch (section) {
    case "System":
      return <System />;
    case "Interfaces":
      return <TableIntef />;
    case "Addressing":
      return <TableAddr />;
    case "Routing Table":
      return <TableRouting />;
    case "Alarm Logs":
      return <TableLog />;
    default:
      break;
  }
};

const Dashboard = (props) => {
  const classes = useStyles();
  const [select, setSelect] = useState(0);
  const [title, setTitle] = useState("System");

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, true && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <Typography noWrap className={classes.title}>
            {title}
          </Typography>
          <Account
            style={{ width: "33px", height: "33px", marginRight: "10px" }}
          />
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon style={{ width: "33px", height: "33px" }} />
            </Badge>
          </IconButton>
        </Toolbar>
        <Divider
          style={{
            backgroundColor: "black",
            zIndex: 5,
            width: "100%",
            alignItems: "center",
            height: "2px",
          }}
        />
      </AppBar>

      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper),
        }}
      >
        {bgImage !== undefined ? (
          <div
            className={classes.background}
            style={{ backgroundImage: "url(" + bgImage + ")" }}
          />
        ) : null}

        <div className={classes.toolbarIcon}>
          <Desktop
            style={{
              borderRadius: "25%",
              color: "black",
              width: "32px",
              height: "32px",
              backgroundColor: "white",
              marginRight: "10px",
            }}
          />
          SNMP MONITORING
        </div>
        <Divider
          light
          style={{
            backgroundColor: "gray",
            zIndex: 1,
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <List style={{ marginLeft: "13%", marginTop: "4%" }}>
          <ListItem
            button
            selected={select === 0}
            className={classes.items}
            onClick={() => {
              setTitle("System");
              setSelect(0);
            }}
          >
            <ListItemIcon>
              <Syst style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="System" />
          </ListItem>

          <ListItem
            button
            selected={select === 1}
            style={{ marginTop: "8%" }}
            className={classes.items}
            onClick={() => {
              setTitle("Interfaces");
              setSelect(1);
              //onClick = {function} onClick={function()}
            }}
          >
            <ListItemIcon>
              <SettingsInputCompositeIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Interfaces" />
          </ListItem>

          <ListItem
            button
            selected={select === 2}
            style={{ marginTop: "8%" }}
            className={classes.items}
            onClick={() => {
              setTitle("Addressing");
              setSelect(2);
              //onClick = {function} onClick={function()}
            }}
          >
            <ListItemIcon>
              <ImportAddrIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Addressing" />
          </ListItem>

          <ListItem
            button
            selected={select === 3}
            backgr
            style={{ marginTop: "8%" }}
            className={classes.items}
            onClick={() => {
              setTitle("Routing Table");
              setSelect(3);
              //onClick = {function} onClick={function()}
            }}
          >
            <ListItemIcon>
              <Router style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Routing" />
          </ListItem>

          <ListItem
            button
            selected={select === 4}
            style={{ marginTop: "8%" }}
            className={classes.items}
            onClick={() => {
              setTitle("Alarm Logs");
              setSelect(4);
              //onClick = {function} onClick={function()}
            }}
          >
            <ListItemIcon>
              <Logs style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Logs" />
          </ListItem>

          <ListItem
            button
            style={{ marginTop: "8%" }}
            className={classes.items}
            onClick={() => {
              props.history.push("/");
              //onClick = {function} onClick={function()}
            }}
          >
            <ListItemIcon>
              <LogOut style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </ListItem>
        </List>
        <Divider />
        <List>{}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {renderSwitch(title)}
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default Dashboard;
