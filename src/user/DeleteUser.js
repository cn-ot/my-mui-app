import React, {Component} from 'react'
import PropTypes from 'prop-types'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material'
import auth from './../auth/auth-helper'
import {remove} from './api-user.js'
import {Navigate} from 'react-router-dom'

class DeleteUser extends Component {
  state = {
    redirect: false,
    open: false
  }
  clickButton = () => {
    this.setState({open: true})
  }
  deleteAccount = () => {
    const jwt = auth.isAuthenticated()
    remove({
      userId: this.props.userId
    }, {t: jwt.token}).then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        auth.signout(() => console.log('deleted'))
        this.setState({redirect: true})
      }
    })
  }
  handleRequestClose = () => {
    this.setState({open: false})
  }
  render() {
    const redirect = this.state.redirect
    if (redirect) {
      return <Navigate to='/'/>
    }
    return (
      <span>
        <IconButton
          aria-label="Delete"
          onClick={this.clickButton}
          color="secondary"
          size="large">
          <DeleteIcon/>
        </IconButton>

        <Dialog open={this.state.open} onClose={this.handleRequestClose}>
          <DialogTitle>{"Delete Account"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Confirm to delete your account.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.deleteAccount} color="secondary" autoFocus="autoFocus">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </span>
    );
  }
}
DeleteUser.propTypes = {
  userId: PropTypes.string.isRequired
}
export default DeleteUser
