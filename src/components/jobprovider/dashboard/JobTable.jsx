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

export default function JobTable({markAsExpire,change,setChange,loading,setLoading,count}) {

    const navigate = useNavigate();
   const token = localStorage.getItem('token');

  const columns = [
  
         { field: 'col0', headerName: '#', width: 10, type: 'number', },
         { field: 'col1', headerName: 'Job Title', width: '250',},
         { field: 'col2', headerName: 'Job Type', width: '150',},
         { field: 'col3', headerName: 'Created At', width: '150',},
         { field: 'col4', headerName: 'Expire At', width: '150',},
         { 
            field: 'col5', 
            headerName: 'Status', 
            width: 150,
            renderCell: (params) => (
              params.value.status === 'expire' ? (
                <Box display="flex" alignItems="center" sx={{gap:1}}>
                  <WarningAmberIcon color="error" /> Expire
                </Box>
              ) : (
                <Box display="flex" alignItems="center" sx={{gap:1}}>
                  <CheckCircleOutlineIcon color="success" /> Active
                </Box>
              )
            ),
          },
          
        { field: 'col6', headerName: 'Applicant', width: 100,},
        { field: 'col7', headerName: 'Actions', width: 150,type: 'actions',

            getActions: (params) => [
                <Tooltip title="View Applications">
                <GridActionsCellItem
                  icon={<DescriptionIcon />}
                  label="Delete"
                 onClick={()=> navigate(`/jobprovider/my-jobs/${params.id}/applications`)}
                />
                </Tooltip>
                ,
                <GridActionsCellItem
              
                  icon={<RemoveRedEyeIcon />}
                  label="Preview Job"
                 // onClick={toggleAdmin(params.id)}
                  showInMenu
                />,

                <GridActionsCellItem
                disabled={params.row.col5.status === 'expire'}
                icon={<EditIcon />}
                label="Edit"
                onClick={()=> navigate(`/jobprovider/my-jobs/update-job/${params.id}`)}
                showInMenu
              />,

                <GridActionsCellItem
                  disabled={params.row.col5.status === 'expire'} 
                  icon={<WarningAmberIcon />}
                  label="Mark As Expire"
                  onClick={()=> markAsExpire(params.id)}
                  showInMenu
                />,
            
              ],
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
        const response = await axios.get(`http://localhost:8080/jobprovider/job`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
          
        const rows = response.data.map(job => ({
          id: job.id,
          col0: job.id,
          col1: job.jobTitle,
          col2: job.jobType,
          col3: job.postedIn,
          col4: job.expiryDate, // Format as percentage
          col5:  {status: job.status},
          col6: `${job.applicantCount}/${job.vacancies}`,
          col7: {
            id: job.id,
            status: job.status,
            delete: job.delete

          } // Placeholder for empty column
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





  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/jobprovider/job`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
          
        const rows = response.data.map(job => ({
          id: job.id,
          col0: job.id,
          col1: job.jobTitle,
          col2: job.jobType,
          col3: job.postedIn,
          col4: job.expiryDate, // Format as percentage
          col5:  {status: job.status},
          col6: `${job.applicantCount}/${job.vacancies}`,
          col7: {
            id: job.id,
            status: job.status

          }
        }));
  
        setRows(rows);

        setLoading(false);
        count(rows.length);
  
  
        
      } catch (error) {
        console.error('Error fetching candidates:', error);
      }
    };
  
    fetchData();
  }, [change]);









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

