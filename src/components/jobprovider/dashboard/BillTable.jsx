import * as React from 'react';
import { useEffect, useState } from 'react';
import { DataGrid,GridActionsCellItem } from '@mui/x-data-grid';
import { Experimental_CssVarsProvider as CssVarsProvider, experimental_extendTheme as extendTheme } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { useColorScheme } from '@mui/joy/styles';
import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from 'axios';
import { rowsStateInitializer } from '@mui/x-data-grid/internals';
import { render } from 'react-dom';
import Typography from '@mui/material/Typography';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import SecurityIcon from '@mui/icons-material/Security';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import DescriptionIcon from '@mui/icons-material/Description';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import {getUserId} from '../../../utils/auth';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';







const getLightTheme = () => extendTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#5F35AE',
      light: '#A374F9',
    },
    text: {
      primary: '#000000',
      secondary: '#555555',
    },
  },
});

const getDarkTheme = () => extendTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#5F35AE',
      light: '#e1bee7',
    },
    text: {
      primary: '#ffffff',
      secondary: '#bbbbbb',
    },
    border: {
      main: '#424242',
    },
  },
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          borderColor: '#424242',
          '& .MuiDataGrid-cell': {
            borderColor: '#424242',
          },
          '& .MuiDataGrid-columnHeader': {
            borderColor: '#424242',
            borderBottom: `1px solid #424242`,
          },
          '& .MuiDataGrid-columnHeaders': {
            borderBottom: `1px solid #424242`,
          },
          '& .MuiDataGrid-row': {
            borderBottomColor: '#424242',
          },
          '& .MuiDataGrid-row:first-of-type': {
            borderTop: `1px solid #424242`,
          },
          '& .MuiDataGrid-row:last-child': {
            borderBottom: `1px solid #424242`,
          },
          '& .MuiDataGrid-columnSeparator': {
            color: '#424242',
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: `1px solid #424242`,
          },
        },
      },
    },
  },
});

export default function BillTable({}) {

   
   const token = localStorage.getItem('token');
   const [loading, setLoading] = useState(true);

  const columns = [
  
         { field: 'col0', headerName: '#ID', width: '100', type: 'number', headerAlign: 'center', align: 'center',},
        
         
         {
            field: 'col1',
            headerName: 'Plan Name',
            width: '250', 
            headerAlign: 'center',
            align: 'center',
            renderCell: (params) => (
              params.value.name === 'BASIC' ? (
                <Chip label="Basic" color="primary" />
              ) : params.value.name === 'STANDARD' ? (
                <Chip label="STANDARD" color="warning" />
              ) : (
                <Chip label="PREMIUM" color="success" />
              )
            ),
          },
          { field: 'col2', headerName: 'Payment Date', width: '250', headerAlign: 'right', align: 'right',},

         { field: 'col3', headerName: 'Amount (LKR)', width: '250', type: 'number',},
         { field: 'col4', headerName: 'Payment Status', width: '250', headerAlign: 'center', align: 'center',
            renderCell: (params) => (
              params.value.status === 'success' ? (
               <><CheckCircleIcon color="success" /> Complete</>  
              ) : (
                <><ErrorOutlineIcon color="error" /> Failed</>  
                )
            ),
            
         },
         
       ];

  const { mode } = useColorScheme();
  const [theme, setTheme] = useState(getLightTheme);
  const [rows, setRows] = useState([]);
  
 


  useEffect(() => {
    setTheme(mode === 'light' ? getLightTheme() : getDarkTheme());
  }, [mode]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/jobprovider/bill-info`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
          
        const rows = response.data.map(bill => ({
          id: bill.billId,
          col0: bill.billId,
          col1: {name:bill.planName},
          col2: bill.paymentDate,
          col3: bill.planPrice,
          col4: {status:bill.paymentStatus}, 
          
        }));
  
        setRows(rows);

        setLoading(false);
        
        count(rows.length);
  
        
      } catch (error) {
        console.error('Error fetching candidates:', error);
      }
    };
  
    fetchData();
  }, []);





  








  return (
    <CssVarsProvider theme={theme}>


          {/* Add styles based on mode */}
      {mode === 'dark' ? (
        <style>
          {`
            .highlight-selected {
              background-color: #0f081c;
              color: #fff;
            }
            .highlight-selected:hover {
              background-color: #0f081c !important;
              color: #fff;
            }
          `}
        </style>
      ):

      (

        <style>
          {`
            .highlight-selected {
              background-color: #f2eff9;
              color: #222;
            }
            
          `}
        </style>


      )
      
      
      }


        

      <Box sx={{ height: 500, width: '100%' }}>
        <DataGrid
          loading={loading}
          rows={rows}
          columns={columns}
          disableRowSelectionOnClick 
        />
      </Box>
    </CssVarsProvider>
  );
}

