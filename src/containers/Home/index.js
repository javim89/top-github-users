import React, { useEffect } from "react"
import { makeStyles, Button, Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import {currentLocation, selectedUsername} from "../../features/githubUsers/usersSlice"
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    marginTop: "1%"
  },
}));


const Home = () => {
  const classes = useStyles();
  const githubUsers = useSelector((state) => state.githubUsers);
  const history = useHistory()
  const dispatch = useDispatch();
  
  const handleOnclik = (user) => {
    dispatch(selectedUsername(user))
    history.push(`/${user}`)
  }

  useEffect(() => {
    dispatch(currentLocation(history.location.pathname))
  },[])
    return (
      <React.Fragment>
        <h1>Top 5 GitHub Users</h1>
        <Typography >Tap de username to see more information</Typography>
        <div className={classes.root}>
          {githubUsers.users.map((user, index) => (
          <Button variant="contained" color="secondary" key={index} onClick={() => handleOnclik(user)}>
            {user}
          </Button>
          ))}
        </div>
      </React.Fragment>
    );
}

export default Home