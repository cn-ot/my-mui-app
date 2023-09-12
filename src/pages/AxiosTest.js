import React, {Component} from 'react'
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { fetchDummyProducts  } from "./../data/axiosData"

class AxiosTest extends Component {
  //constructor(props) {
  //  super(props);
  //  this.state = { rows: fetchDummyProducts(), pageSize: 25 };
  //}

  render() {
    const columns = [
        { field: "title", headerName: "Title", width: 150 },
        { field: "brand", headerName: "Brand", width: 150 },
        { field: "category", headerName: "Categorey", width: 150 },
        { field: "description", headerName: "Description", width: 380 },
        { field: "price", headerName: "price", width: 150, editable: true },
        { field: "rating", headerName: "Rating", width: 150 },
        { field: "stock", headerName: "Stock", width: 150 },
    ];

    return (
        <div className="Container">
            <div className="Grid">
                <DataGrid
                rows={fetchDummyProducts()}
                columns={columns}
                components={{ Toolbar: GridToolbar }} 
                checkboxSelection={true}
                pageSize={25}
                rowsPerPageOptions={[5, 10, 20, 30]}
                pagination
                />
            </div>
        </div>
    );
  }
}

export default AxiosTest;