import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {createTheme, ThemeProvider, CssBaseline } from '@mui/material'
//import {makeStyles} from '@mui/material/styles'
import {Typography, Card, CardContent, CardMedia} from '@mui/material'
import {styled} from '@mui/system'
import seashellImg from './../assets/images/seashell.jpg'

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

const StyledCard = styled(Card, {})({
  maxWidth: 600,
  margin: 'auto',
  marginTop: theme.spacing.unit * 5
});
const StyledTitle = styled(Typography, {})({
  padding:`${theme.spacing.unit * 3}px ${theme.spacing.unit * 2.5}px ${theme.spacing.unit * 2}px`,
  color: theme.palette.text.secondary
});
const StyledMedia = styled(CardMedia, {})({
  minHeight: 660
});
class Dashboard extends Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline /* MUI Styles */ />
        <StyledCard>
          <StyledTitle type="headline" component="h2">
            Home Page
          </StyledTitle>
          <StyledMedia image={seashellImg} title="Unicorn Shells"/>
          <CardContent>
            <Typography type="body1" component="p">
              This will be the Dashboard Component
            </Typography>
          </CardContent>
        </StyledCard>
      </ThemeProvider>
    )
  }
}

export default Dashboard
