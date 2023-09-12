import React from 'react'
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import axios from "axios";

function AxiosTest() {
  const [rows, setRows] = useState([]);

  const fetchDummyProducts = async () => {
    const options2 = {
      headers: {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*',
      },
    };
    await axios
      .get("https://dummyjson.com/products", options2)
      .then((res) => setRows(res.data.products));
  };

  const columns = [
      { field: "title", headerName: "Title", width: 150 },
      { field: "brand", headerName: "Brand", width: 150 },
      { field: "category", headerName: "Categorey", width: 150 },
      { field: "description", headerName: "Description", width: 380 },
      { field: "price", headerName: "price", width: 150, editable: true },
      { field: "rating", headerName: "Rating", width: 150 },
      { field: "stock", headerName: "Stock", width: 150 },
  ];

  useEffect(() => {
    fetchDummyProducts();
  }, []);

  console.log('products: ', rows);

  return (
      <div className="Container">
          <div className="Grid">
              <DataGrid
              rows={rows}
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

export default AxiosTest