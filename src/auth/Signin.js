import React, {Component} from 'react'
import {Typography, Card, CardActions, CardContent} from '@mui/material'
import {createTheme, ThemeProvider, CssBaseline } from '@mui/material'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Icon from '@mui/material/Icon'
import {styled} from '@mui/system'
import auth from './../auth/auth-helper'
import {Navigate} from 'react-router-dom'

/* const useStyles = theme => makeStyles({
  card: {
    maxWidth: 600,
    margin: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 2
  },
  error: {
    verticalAlign: 'middle'
  },
  title: {
    marginTop: theme.spacing.unit * 2,
    color: theme.palette.openTitle
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300
  },
  submit: {
    margin: 'auto',
    marginBottom: theme.spacing.unit * 2
  }
}) */

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

const StyledCard = styled(Card, {})({
  maxWidth: 600,
  margin: 'auto',
  textAlign: 'center',
  marginTop: theme.spacing.unit * 5,
  paddingBottom: theme.spacing.unit * 2
});
const StyledError = styled(Typography, {})({
  verticalAlign: 'middle'
});
const StyledTitle = styled(Typography, {})({
  marginTop: theme.spacing.unit * 2,
  color: theme.palette.openTitle
});
const StyledTextField = styled(TextField, {})({
  marginLeft: theme.spacing.unit,
  marginRight: theme.spacing.unit,
  width: 300
});
const StyledSubmit = styled(Button, {})({
  margin: 'auto',
  marginBottom: theme.spacing.unit * 2,
  backgroundColor: '#1976d2',
  color: 'white'
});

class Signin extends Component {
  state = {
      email: '',
      password: '',
      error: '',
      redirectToReferrer: false
  }

  clickSubmit = () => {
    const user = {
      email: this.state.email || undefined,
      password: this.state.password || undefined,
      _id: 99
    }

    auth.authenticate(user, () => {
      this.setState({redirectToReferrer: true})
    })
  }

  handleChange = name => event => {
    this.setState({[name]: event.target.value})
  }

  render() {

  const from = {
    pathname: '/'
  }

  const {redirectToReferrer} = this.state
  if(redirectToReferrer) {
    return(<Navigate to={from}/>)
  }

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline /* MUI Styles */ />
        <StyledCard>
          <CardContent>
            <StyledTitle type="headline" component="h2">
              Sign In
            </StyledTitle>
            <StyledTextField id="email" type="email" label="Email" value={this.state.email} onChange={this.handleChange('email')} margin="normal"/><br/>
            <StyledTextField id="password" type="password" label="Password" value={this.state.password} onChange={this.handleChange('password')} margin="normal"/>
            <br/> {
              this.state.error && (<StyledError component="p" color="error">
                <Icon color="error">error</Icon>
                {this.state.error}
              </StyledError>)
            }
          </CardContent>
          <CardActions>
            <StyledSubmit color="primary" variant="raised" onClick={this.clickSubmit}>Submit</StyledSubmit>
          </CardActions>
        </StyledCard>
      </ThemeProvider>
    )
  }
}

export default Signin
//export default Signin
