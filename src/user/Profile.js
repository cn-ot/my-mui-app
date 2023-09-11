import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {styled} from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import {List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText} from '@mui/material'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Edit from '@mui/icons-material/Edit'
import Person from '@mui/icons-material/Person'
import Divider from '@mui/material/Divider'
import DeleteUser from './DeleteUser'
import auth from './../auth/auth-helper'
import {read} from './api-user.js'
import {Navigate, Link} from 'react-router-dom'

const styles = theme => ({
  root: theme.mixins.gutters({
    maxWidth: 600,
    margin: 'auto',
    padding: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 5
  }),
  title: {
    margin: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 2}px`,
    color: theme.palette.protectedTitle
  }
})

class Profile extends Component {
  constructor({match}) {
    super()
    this.state = {
      user: '',
      redirectToSignin: false
    }
    this.match = match
  }
  init = (userId) => {
    const jwt = auth.isAuthenticated()
    read({
      userId: userId
    }, {t: jwt.token}).then((data) => {
      if (data.error) {
        this.setState({redirectToSignin: true})
      } else {
        this.setState({user: data})
      }
    })
  }
  componentWillReceiveProps = (props) => {
    this.init(props.match.params.userId)
  }
  componentDidMount = () => {
    this.init(this.match.params.userId)
  }
  render() {
    const {classes} = this.props
    const redirectToSignin = this.state.redirectToSignin
    if (redirectToSignin) {
      return <Navigate to='/signin'/>
    }
    return (
      <Paper className={classes.root} elevation={4}>
        <Typography type="title" className={classes.title}>
          Profile
        </Typography>
        <List dense>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Person/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={this.state.user.name} secondary={this.state.user.email}/> {
             auth.isAuthenticated().user && auth.isAuthenticated().user._id == this.state.user._id && 
              (<ListItemSecondaryAction>
                <Link to={"/user/edit/" + this.state.user._id}>
                  <IconButton aria-label="Edit" color="primary" size="large">
                    <Edit/>
                  </IconButton>
                </Link>
                <DeleteUser userId={this.state.user._id}/>
              </ListItemSecondaryAction>)
            }
          </ListItem>
          <Divider/>
          <ListItem>
            <ListItemText primary={"Joined: " + (
              new Date(this.state.user.created)).toDateString()}/>
          </ListItem>
        </List>
      </Paper>
    );
  }
}
Profile.propTypes = {
  classes: PropTypes.object.isRequired
}

export default styled(styles)(Profile)
