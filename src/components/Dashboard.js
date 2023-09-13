import React, {Component} from 'react'
import {createTheme, ThemeProvider, CssBaseline } from '@mui/material'
//import {makeStyles} from '@mui/material/styles'
import {Typography, Box} from '@mui/material'
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataContacts } from "./../data/mockData";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

class Dashboard extends Component {
  render() {
    const columns = [
      { field: "id", headerName: "ID", flex: 0.5 },
      { field: "registrarId", headerName: "Registrar ID" },
      {
        field: "name",
        headerName: "Name",
        flex: 1,
        cellClassName: "name-column--cell",
      },
      {
        field: "age",
        headerName: "Age",
        type: "number",
        headerAlign: "left",
        align: "left",
      },
      {
        field: "phone",
        headerName: "Phone Number",
        flex: 1,
      },
      {
        field: "email",
        headerName: "Email",
        flex: 1,
      },
      {
        field: "address",
        headerName: "Address",
        flex: 1,
      },
      {
        field: "city",
        headerName: "City",
        flex: 1,
      },
      {
        field: "zipCode",
        headerName: "Zip Code",
        flex: 1,
      },
    ];

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline /* MUI Styles */ />
        <Box m="20px" >
          <Box mb="30px">
            <Typography
                variant="h3"
                color="#1976d2"
                fontWeight="bold"
                sx={{ m: "0 0 5px 0" }}
            >
                MY CONTACTS
            </Typography>
          </Box>
          <Box
              m="40px 0 0 0"
              height="75vh"
          >
            <DataGrid
                rows={mockDataContacts}
                columns={columns}
                components={{ Toolbar: GridToolbar }}
            />
          </Box>
        </Box>
      </ThemeProvider>
    )
  }
}

export default Dashboard
