import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {styled} from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import {List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText} from '@mui/material'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import ArrowForward from '@mui/icons-material/ArrowForward'
import Person from '@mui/icons-material/Person'
import {Link} from 'react-router-dom'
import {list} from './api-user.js'

const styles = theme => ({
  root: theme.mixins.gutters({
    padding: theme.spacing.unit,
    margin: theme.spacing.unit * 5
  }),
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
    color: theme.palette.openTitle
  }
})

class Users extends Component {
  state = {
      users: []
  }

  componentDidMount() {
    list().then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        this.setState({users: data})
      }
    })
  }

  render() {
    const {classes} = this.props
    return (
      <Paper className={classes.root} elevation={4}>
        <Typography type="title" className={classes.title}>
          All Users
        </Typography>
        <List dense>
         {this.state.users.map((item, i) => {
          return (
            <Link to={"/user/" + item._id} key={i}>
                      <ListItem button>
                        <ListItemAvatar>
                          <Avatar>
                            <Person/>
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={item.name}/>
                        <ListItemSecondaryAction>
                        <IconButton size="large">
                            <ArrowForward/>
                        </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                   </Link>
          );
               })
             }
        </List>
      </Paper>
    );
  }
}

Users.propTypes = {
  classes: PropTypes.object.isRequired
}

export default styled(styles)(Users)
