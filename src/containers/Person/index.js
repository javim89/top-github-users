import React, {useEffect} from "react"
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import {Divider, List, ListItem,ListItemText, ListItemAvatar, Avatar} from "@material-ui/core"
import {getUserData, currentLocation} from "../../features/githubUsers/usersSlice"
import {useHistory} from "react-router-dom"
import Skeleton from '@material-ui/lab/Skeleton';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));
const Person = () => {
    const classes = useStyles()
    const githubUsers = useSelector((state) => state.githubUsers);
    const dispatch = useDispatch();
    const history = useHistory()

    useEffect(() => {
      dispatch(getUserData(githubUsers.selectedUsername))
      dispatch(currentLocation(history.location.pathname))
    },[])


    return githubUsers.isLoading ? (
      <List className={classes.root}>
        <ListItem>
          <ListItemAvatar>
            <Skeleton variant="circle" width={40} height={40} />
          </ListItemAvatar>
          
          <Skeleton variant="text" />
          <ListItemText
              primary={<Skeleton variant="text" width={150} />}
              secondary={<Skeleton variant="text" width={120} />}
            />
        </ListItem>
        <Divider />
      </List>
    ) : (
      <React.Fragment>
        <List className={classes.root}>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src={githubUsers.selectUser.avatar_url}
              />
            </ListItemAvatar>
            <ListItemText
              primary={githubUsers.selectUser.name}
              secondary={githubUsers.selectUser.location}
            />
          </ListItem>
        </List>
        <Divider />
      </React.Fragment>
    );
}

export default Person