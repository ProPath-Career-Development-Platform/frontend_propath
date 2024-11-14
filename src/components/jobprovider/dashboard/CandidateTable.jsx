// import * as React from 'react';
// import { useEffect, useState } from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import { Experimental_CssVarsProvider as CssVarsProvider, experimental_extendTheme as extendTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import { useColorScheme } from '@mui/joy/styles';
// import Avatar from '@mui/material/Avatar';
// import DownloadIcon from '@mui/icons-material/Download';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import axios from 'axios';
// import {getUserIdFromToken} from '../../../utils/tokenUtils';


// const token = localStorage.getItem('token');

// const getLightTheme = () => extendTheme({
//   palette: {
//     mode: 'light',
//     primary: {
//       main: '#5F35AE',
//       light: '#A374F9',
//     },
//     text: {
//       primary: '#000000',
//       secondary: '#555555',
//     },
//   },
// });

// const getDarkTheme = () => extendTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#5F35AE',
//       light: '#e1bee7',
//     },
//     text: {
//       primary: '#ffffff',
//       secondary: '#bbbbbb',
//     },
//     border: {
//       main: '#424242',  // Define your border color here
//     },
//   },
//   components: {
//     MuiDataGrid: {
//       styleOverrides: {
//         root: {
//           borderColor: '#424242',  // Set the border color here
//           '& .MuiDataGrid-cell': {
//             borderColor: '#424242',  // Set the cell border color here
//           },
//           '& .MuiDataGrid-columnHeader': {
//             borderColor: '#424242',  // Set the column header border color here
//             borderBottom: `1px solid #424242`,
//           },
//           '& .MuiDataGrid-columnHeaders': {
//             borderBottom: `1px solid #424242`,  // Ensure the column header bottom line color
//           },
//           '& .MuiDataGrid-row': {
//             borderBottomColor: '#424242',  // Set the bottom border color for each row
//           },
//           '& .MuiDataGrid-row:first-of-type': {
//             borderTop: `1px solid #424242`,  // Ensure the first row top border color
//           },
//           '& .MuiDataGrid-row:last-child': {
//             borderBottom: `1px solid #424242`,  // Ensure the final row bottom border color
//           },
//           '& .MuiDataGrid-columnSeparator': {
//             color: '#424242',  // Set the color of the column separators
//           },
//           '& .MuiDataGrid-footerContainer': {
//             borderTop: `1px solid #424242`,  // Set the top border color of the footer container
//           },
//         },
//       },
//     },
//   },
// });

// export default function CandidateTable({jobId,filteredRows , setFilteredRows, criteria, rowSelectionModel, setRowSelectionModel}) {

//   const rows = [
//     { id: 1, col0:'1', col1: { url: 'https://wallpapers.com/images/hd/professional-profile-pictures-1080-x-1080-460wjhrkbwdcp1ig.jpg', name: 'Nimal Siriwardene' }, col2: 'nimal@example.com', col3: '86%', col4: '2024-07-25', col5: 'Senior', col6: '' },
//     { id: 2,col0:'2', col1: { url: 'https://th.bing.com/th/id/OIP.cSkquXu3JhiiQ_HoUjrsnwHaHa?w=2000&h=2000&rs=1&pid=ImgDetMain', name: 'Saman Kumara' }, col2: 'saman@example.com', col3: '75%', col4: '2024-07-24', col5: 'Mid', col6: '' },
//     { id: 3, col0:'3',col1: { url: 'https://th.bing.com/th/id/OIP.jSABp5nC5XxTMlTNb2F48QHaHa?w=512&h=512&rs=1&pid=ImgDetMain', name: 'Nihal Jayasinghe' }, col2: 'nihal@example.com', col3: '80%', col4: '2024-07-23', col5: 'Junior', col6: '' },
//     { id: 4,col0:'4', col1: { url: 'https://media-exp1.licdn.com/dms/image/C4D03AQGQzG04iPoGmw/profile-displayphoto-shrink_800_800/0/1659000660769?e=2147483647&v=beta&t=14svvpUmQgxhn6iMSqNYwjmntF2sDpgL_EumzcgbmsQ', name: 'Maheesh Pranandu' }, col2: 'maheesh@example.com', col3: '90%', col4: '2024-07-22', col5: 'Senior', col6: '' },
//     { id: 5,col0:'5', col1: { url: 'https://images.squarespace-cdn.com/content/v1/600ef9a4c8a01716d6b350ac/1615598648962-ZSR8JWMP0LDW0U54946O/2018-07-02_0004.jpg', name: 'Chandrika Bandara' }, col2: 'chandrika@example.com', col3: '78%', col4: '2024-07-21', col5: 'Mid', col6: '' },
//     { id: 6,col0:'6', col1: { url: 'https://th.bing.com/th/id/R.d25ee4e73a9151543962af5e4e95b62e?rik=dfTMzLmKvW2IzA&pid=ImgRaw&r=0', name: 'Iraj Rathnasena' }, col2: 'iraj@example.com', col3: '85%', col4: '2024-07-20', col5: 'Senior', col6: '' },
//     { id: 7,col0:'7', col1: { url: 'https://cdn2.f-cdn.com/files/download/38545966/4bce6b.jpg', name: 'Kumudu Kumari' }, col2: 'kumudu@example.com', col3: '73%', col4: '2024-07-19', col5: 'Junior', col6: '' },
//     { id: 8,col0:'8', col1: { url: 'https://i.pinimg.com/originals/1e/ea/13/1eea135a4738f2a0c06813788620e055.jpg', name: 'Manjushika Hendricks' }, col2: 'manjusha@example.com', col3: '88%', col4: '2024-07-18', col5: 'Mid', col6: '' },
//     { id: 9,col0:'9', col1: { url: '', name: 'Nihal Tilak' }, col2: 'nihal.tilak@example.com', col3: '92%', col4: '2024-07-17', col5: 'Senior', col6: '' },
//     { id: 10,col0:'10', col1: { url: 'https://huntingtonbaydental.com/wp-content/uploads/2023/01/commisure-smile-02-scaled-e1675194911713-1200x927.jpg', name: 'Yashodhari Chandrika' }, col2: 'yashodari@example.com', col3: '65%', col4: '2024-07-16', col5: 'Junior', col6: '' },
//     { id: 11,col0:'11', col1: { url: '', name: 'Rushan Wickramasinghe' }, col2: 'rushan@example.com', col3: '79%', col4: '2024-07-15', col5: 'Mid', col6: '' },
//     { id: 12,col0:'12', col1: { url: '', name: 'Chithra Malika' }, col2: 'chithra.malika@example.com', col3: '95%', col4: '2024-07-14', col5: 'Senior', col6: '' },
//     { id: 13,col0:'13', col1: { url: '', name: 'Sushil Amarasinghe' }, col2: 'sushil@example.com', col3: '71%', col4: '2024-07-13', col5: 'Junior', col6: '' },
//     { id: 14,col0:'14', col1: { url: 'https://th.bing.com/th/id/OIP.4m-IO700eLo7_q4xUV39xQHaEK?rs=1&pid=ImgDetMain', name: 'Ushani Silva' }, col2: 'ushani@example.com', col3: '87%', col4: '2024-07-12', col5: 'Mid', col6: '' },
//     { id: 15,col0:'15', col1: { url: '', name: 'Nimal Ranil' }, col2: 'nimal@example.com', col3: '64%', col4: '2024-07-11', col5: 'Senior', col6: '' },
//     { id: 16,col0:'16', col1: { url: '', name: 'Chitra Malika' }, col2: 'chitra.malika@example.com', col3: '82%', col4: '2024-07-10', col5: 'Junior', col6: '' },
//     { id: 17,col0:'17', col1: { url: '', name: 'Sithara Hasitha' }, col2: 'sithara@example.com', col3: '72%', col4: '2024-07-09', col5: 'Mid', col6: '' },
//     { id: 18,col0:'18', col1: { url: '', name: 'Neelin Wadugodage' }, col2: 'neelin@example.com', col3: '89%', col4: '2024-07-08', col5: 'Senior', col6: '' },
//     { id: 19,col0:'19', col1: { url: '', name: 'Amil Rukman' }, col2: 'amil@example.com', col3: '81%', col4: '2024-07-07', col5: 'Junior', col6: '' },
//     { id: 20,col0:'20', col1: { url: '', name: 'Susil Piyumi' }, col2: 'susil@example.com', col3: '94%', col4: '2024-07-06', col5: 'Mid', col6: '' },
//   ];
  
  
//   const columns = [
  
//     { field: 'col0', headerName: '#', width: 10 },
//     { 
//       field: 'col1', 
//       headerName: 'Name', 
//       width: '200',
//       renderCell: (params) => (
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           {params.value.url  ? (
//             <>
//             <Avatar src={params.value.url} sx={{ marginRight: 1 }}/> 
//             {params.value.name}
//             </>
//           ):
  
//           (
//             <>
//             <Avatar  sx={{ marginRight: 1 }}> 
//             {params.value.name.charAt(0)}
//             </Avatar>
//             {params.value.name}
//             </>
//           )
          
//           }
//         </Box>
//       ),
//     },
//     { field: 'col2', headerName: 'Email', width: 250 },
//     { field: 'col3', headerName: 'ATS Score', width: 150 },
//     { field: 'col4', headerName: 'Applied Date', width: 150 },
//     { field: 'col5', headerName: 'Expirenced Level', width: 150 },
  
//     { field: 'col6',
//       headerName: 'Actions',
//       headerAlign: 'center',
//       width: 150,
//       renderCell: (params) => (
//         <Box sx={{ display: 'flex', justifyContent: 'center', alignItems:'center' , gap:1 ,p:1}}>
//         <Button variant="contained" size="small"><VisibilityIcon/></Button>
//         <Button variant="contained"  size='small'><DownloadIcon/></Button>
//         </Box>
//       )
     
//     },
  
//   ];

//   const { mode } = useColorScheme();
//   const [theme, setTheme] = useState(getLightTheme);
 
  

//   useEffect(() => {
//     setTheme(mode === 'light' ? getLightTheme() : getDarkTheme());
//   }, [mode]);

//   useEffect(() => {
   
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/jobprovider/myjobs/${jobId}/applications`);
//         setFilteredRows(response.data);
//         console.log(setFilteredRows);
//       } catch (error) {
//         console.error('Error fetching candidates:', error);
//       }
//     };

//     fetchData();
//   }, [jobId, setFilteredRows]);

//   useEffect(() => {

//     const filterRows = (criteria) => {
//       let newRows;
//       switch (criteria) {
//         case 'Above 85%':
//           newRows = rows.filter(row => parseInt(row.col3) > 85);
//           break;
//         case 'Between 50% - 85%':
//           newRows = rows.filter(row => parseInt(row.col3) >= 50 && parseInt(row.col3) <= 85);
//           break;
//         case 'Below 50%':
//           newRows = rows.filter(row => parseInt(row.col3) < 50);
//           break;
//         default:
//           newRows = rows;
//           break;
//       }
//       setFilteredRows(newRows);
//     };

//     filterRows(criteria);
//   }, [criteria]);

//   const handleSelectionModelChange = (newSelection) => {
//     setSelectedRows(newSelection);
//     console.log(newSelection);
//   };


  

//   return (
//     <CssVarsProvider theme={theme}>
//       <Box sx={{ height: 500, width: '100%' }}>
 
//         <DataGrid
//           /*rows={rows}*/
//           columns={columns}
//           checkboxSelection
//           rows={filteredRows ? filteredRows : rows}
//           disableRowSelectionOnClick
          
//           onRowSelectionModelChange={(newRowSelectionModel) => {
            
//             setRowSelectionModel(newRowSelectionModel);
//             console.log(newRowSelectionModel);
            
//           }}
//           rowSelectionModel={rowSelectionModel}
//           // getRowId={(row) => row.applicantId}
          
          
//         />


//       </Box>
//     </CssVarsProvider>
//   );
// }



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
import Tooltip from '@mui/material/Tooltip';



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

export default function CandidateTable({ filteredRows , setFilteredRows, criteria, rowSelectionModel, setRowSelectionModel,jobId }) {

  const token = localStorage.getItem('token');

  const columns = [
  
         { field: 'col0', headerName: '#', width: 10, type: 'number', },
         { 
           field: 'col1', 
           headerName: 'Name', 
           width: '200',
           renderCell: (params) => (
             <Box sx={{ display: 'flex', alignItems: 'center' }}>
               {params.value.url  ? (
                 <>
                 <Avatar src={params.value.url} sx={{ marginRight: 1 }}/> 
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
        { field: 'col2', headerName: 'Email', width: 250 },
        { field: 'col3', headerName: 'ATS Score (%)', width: 150, type: 'number', },
        { field: 'col4', headerName: 'Applied Date', width: 150 },
        { field: 'col5', headerName: 'Expirenced Level', width: 150 },
      
       { field: 'col6', headerName: 'Actions', width: 150,type: 'actions',

          getActions: (params) => [
              <Tooltip title="View Applications">
              <GridActionsCellItem
                icon={<VisibilityIcon />}
                label="Delete"
               onClick={()=> navigate(`/jobprovider/my-jobs/${params.id}/applications`)}
              />
              </Tooltip>
              ,
              <GridActionsCellItem
            
                icon={<DownloadIcon />}
                label="Preview Job"
               // onClick={toggleAdmin(params.id)}
               
              />,

              
          
            ],
          },
      
       ];

  const { mode } = useColorScheme();
  const [theme, setTheme] = useState(getLightTheme);
  const [rows, setRows] = useState([]);
  const [prevRowSelectionModel, setPrevRowSelectionModel] = useState([]);

  useEffect(() => {
    setTheme(mode === 'light' ? getLightTheme() : getDarkTheme());
  }, [mode]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/jobprovider/myjobs/${jobId}/applications`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
          
        const rows = response.data.map(applicant => ({
          id: applicant.seekerId,
          status:applicant.status,
          col0: applicant.seekerId,
          col1: {
            url: 'https://wallpapers.com/images/hd/professional-profile-pictures-1080-x-1080-460wjhrkbwdcp1ig.jpg', // Placeholder URL
            name: `${applicant.name}`
          },
          col2: applicant.email,
          col3: applicant.atsScore, // Format as percentage
          col4: applicant.appliedDate,
          col5: applicant.exp,
          col6: '' // Placeholder for empty column
        }));
  
        setRows(rows);
  
        // Check if any applicant has the status "preSelected"
        const preSelectedIds = response.data
          .filter(applicant => applicant.status === 'preSelected')
          .map(applicant => applicant.seekerId);
  
        // Set row selection model if there are preSelected applicants
        if (preSelectedIds.length > 0) {
          setRowSelectionModel(preSelectedIds);
        } else {
          setRowSelectionModel([]); // or set to any default selection if needed
        }
  
        // Set the mapped rows to the state
        setFilteredRows(rows);
      } catch (error) {
        console.error('Error fetching candidates:', error);
      }
    };
  
    fetchData();
  }, [jobId]); // Added token as a dependency if it changes


  // Effect to refetch data when rowSelectionModel changes
useEffect(() => {
  if (rowSelectionModel.length > 0) {
    // Fetch data again based on the new selection model
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/jobprovider/myjobs/${jobId}/applications`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        // Process the fetched data again (same as the previous useEffect)
        const rows = response.data.map(applicant => ({
          id: applicant.seekerId,
          status: applicant.status,
          col0: applicant.seekerId,
          col1: {
            url: 'https://wallpapers.com/images/hd/professional-profile-pictures-1080-x-1080-460wjhrkbwdcp1ig.jpg',
            name: `${applicant.name}`
          },
          col2: applicant.email,
          col3: applicant.atsScore,
          col4: applicant.appliedDate,
          col5: applicant.exp,
          col6: ''
        }));

        setRows(rows);
        setFilteredRows(rows);
      } catch (error) {
        console.error('Error fetching candidates:', error);
      }
    };

    fetchData();
  }
}, [rowSelectionModel]); // Dependency array for row selection changes
  

  useEffect(() => {
    const filterRows = (criteria) => {
      let newRows;
      switch (criteria) {
        case 'Above 85%':
          newRows = rows.filter(row => row.ats_Score > 85);
          break;
        case 'Between 50% - 85%':
          newRows = rows.filter(row => row.ats_Score >= 50 && row.ats_Score <= 85);
          break;
        case 'Below 50%':
          newRows = rows.filter(row => row.ats_Score < 50);
          break;
        default:
          newRows = rows;
          break;
      }
      setFilteredRows(newRows);
    };

    filterRows(criteria);
  }, [criteria,rows]);

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
          rows={filteredRows ? filteredRows : rows}
          columns={columns}
          checkboxSelection
          disableRowSelectionOnClick
          isRowSelectable={(params) => params.row.status === "pending"}
          onRowSelectionModelChange={(newRowSelectionModel) => {
            setRowSelectionModel(newRowSelectionModel);
          }}
          rowSelectionModel={rowSelectionModel}
          
          getRowId={(row) => row.id} // Ensure unique id for each row
          components={{
            // Override the default Checkbox component to disable "Select All" behavior
            Checkbox: () => null // This disables the checkbox rendering for "Select All"
          }}

          getRowClassName={(params) => {
            if (params.row.status === "preSelected") {
              return 'highlight-selected'; // CSS class for selected status
            }
            return ''; // Default class
          }}
        />
      </Box>
    </CssVarsProvider>
  );
}

