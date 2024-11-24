import * as React from 'react';
import { useEffect, useState } from 'react';
import { DataGrid,GridActionsCellItem } from '@mui/x-data-grid';
import { Experimental_CssVarsProvider as CssVarsProvider, experimental_extendTheme as extendTheme } from '@mui/material/styles';
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

export default function EventParticipantTable({eventId,userData,loading}) {

    const navigate = useNavigate();
   const token = localStorage.getItem('token');

  const columns = [
  
         { field: 'col0', headerName: 'Reg. No.', width: 100, type: 'number', align: 'center',},
         { 
            field: 'col1', 
            headerName: 'Name', 
            width: '200',
            renderCell: (params) => (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {params.value.url  ? (
                  <>
                  <Avatar src={params.value.url} sx={{ marginRight: 3 }}/> 
                  {params.value.name}
                  </>
              ):
       
                (
                  <>
                  <Avatar  sx={{ marginRight: 1 }}> 
                {params.value.name.charAt(0)}
                 </Avatar>
                 {params.value.name}
                 </>
               )
               
                }
              </Box>
           ),
           sortComparator: (a, b) => {
             return a.name.localeCompare(b.name);
           }
          },
         { field: 'col2', headerName: 'Email', width: '250',},
         { field: 'col3', headerName: 'Applied Date', width: '200',},
         
        
       ];

  const { mode } = useColorScheme();
  const [theme, setTheme] = useState(getLightTheme);
  const [rows, setRows] = useState([]);
  
 


  useEffect(() => {
    setTheme(mode === 'light' ? getLightTheme() : getDarkTheme());
  }, [mode]);

  

    useEffect(() => {
        // Map user data into rows
        const rows = userData.map((user) => {
          return {
            id: user.regID,  // This is the unique ID for the row
            col0: user.regID,
            col1: {name: user.userName, url: user.profilePicture},
            col2: user.userEmail,
            col3: user.appliedDate,
          };
        });
      
        setRows(rows);
      }, [userData]);
      












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
          getRowId={(row) => row.id}
        />
      </Box>
    </CssVarsProvider>
  );
}

