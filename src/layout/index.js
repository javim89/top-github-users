import React from "react"
import { makeStyles, AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(4),
    },
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
  body: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
  },
}));

const Layout = ({children}) => {
    const classes = useStyles();
    const history = useHistory();
    const githubUsers = useSelector((state) => state.githubUsers);
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {githubUsers.currentLocation !== "/" && (
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={() => history.goBack()}
              >
                <ArrowBackIos />
                <Typography>Back</Typography>
              </IconButton>
            )}
            <Typography variant="h6" className={classes.title}>
              Home
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.body}>{children}</div>
      </div>
    );
}
export default Layout