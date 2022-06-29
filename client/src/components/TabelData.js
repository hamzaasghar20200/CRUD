import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './Header'
import { useNavigate } from 'react-router-dom'

export default function BasicExampleDataGrid() {
  const navigate = useNavigate()
  const [pageState, setPageState] = useState(
    {
      isLoading: false,
      data: [],
      page: 1,
      pageSize: 5,
      total: 0
    }
  )
  useEffect(() => {
    (async () => {
      setPageState(prev => ({ ...prev, isLoading: true }))
      /* */
      const data = await axios.get(`http://localhost:5000/api/v1/user?offset=${pageState.page}&limit=${pageState.pageSize}`)
console.log(data)
      setPageState(prev => ({ ...prev, isLoading: false, data: data.data.users, total: data.data.count }))
    })()
  }, [pageState.pageSize, pageState.page])


  const columns = [
    { field: 'sheetNo', headerName: 'Sheet No', width: 150 },
    { field: 'catg', headerName: 'Catg', width: 150 },
    { field: 'type', headerName: 'Type', width: 150 },
    { field: 'size', headerName: 'Size', width: 150 },
    { field: 'ownersName', headerName: 'Owners Name', width: 250 },
    { field: 'mobileNo', headerName: 'Mobile No', width: 150 },
    { field: 'secondMobileNo', headerName: '2nd Mobile No', width: 150 },
    { field: 'thirdMobileNo', headerName: '3rd Mobile No', width: 150 },
    { field: 'plotNo', headerName: 'Plot No', width: 150 },
    { field: 'secNo', headerName: 'Sec No', width: 150 },
    { field: 'communityCenter', headerName: 'Community Center', width: 150 },
    { field: 'refNo', headerName: 'Ref No', width: 150 },
    { field: 'emailId', headerName: 'Email Id', width: 150 },
    { field: 'cnicNo', headerName: 'Cnic #', width: 250 },
    { field: 'mem', headerName: 'MEM #', width: 150 },
    {
      field: "Edit",
      renderCell: (cellValues) => {
        return (
          <button

            className='btn btn-primary'
            onClick={(event) => {
              // handleClick(event, cellValues);
            }}
          >
            Edit
          </button>
        );
      }
    },
    {
      field: "Delete",
      renderCell: (cellValues) => {
        return (
          <button

            className='btn btn-danger'
            onClick={(event) => {
              // handleClick(event, cellValues);
            }}
          >
            Delete
          </button>
        );
      }
    }
  ];
  const currentlySelected = async (e) => {
    if (e.field === "Edit") {
      navigate(`/Add/${e.id}`)

    }
    else if (e.field === "Delete") {
      await axios.delete(`http://localhost:5000/api/v1/user/${e.id}`).then(async (res) => {
        const data = await axios.get(`http://localhost:5000/api/v1/user?offset=${pageState.page}&limit=${pageState.pageSize}`)


        setPageState(prev => ({ ...prev, isLoading: false, data: data.data.users, total: data.data.count }))


      }).catch(err => {
        alert(err)
      }
      )

    }
    else {

      console.log(e)
    }
  }
  return (
    <>
      <Header />

      <div style={{}}>
        <DataGrid
          rowCount={pageState.total}
          rows={pageState.data}
          loading={pageState.isLoading}
          page={pageState.page - 1}
          pageSize={pageState.pageSize}
          rowsPerPageOptions={[10, 30, 50, 70, 100]}
          autoHeight
          paginationMode="server"
          onPageChange={(newPage) => setPageState(old => ({ ...old, page: newPage + 1 }))}
          onPageSizeChange={(newPageSize => setPageState(old => ({ ...old, pageSize: newPageSize })))}
          onCellClick={currentlySelected}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          getRowId={(row) => row._id} />
      </div>
    </>
  );
}