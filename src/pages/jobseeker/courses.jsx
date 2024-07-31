import React , {useState} from 'react'
import Button from '@mui/joy/Button';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import IconButton from '@mui/joy/IconButton';
import Box from '@mui/joy/Box';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { typographyClasses } from '@mui/joy/Typography';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import MoreVert from '@mui/icons-material/MoreVert';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Divider from '@mui/joy/Divider';


import Navbar1 from '../../components/navbar/Navbar1';
import JSCard from '../../components/JobSeeker/card';
import ProfileDropdown from '../../components/JobSeeker/ProfileDropDown';
import Alert from '../../components/JobSeeker/alert';
import { AlertTitle } from '@mui/material';
import JSSearch from '../../components/JobSeeker/search';
import JSDropDown from '../../components/JobSeeker/JSDropDown';
import Checkbox from '@mui/joy/Checkbox';

import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import ListIcon from '@mui/icons-material/List';
import GridViewIcon from '@mui/icons-material/GridView';
import { Grid } from '@mui/joy';
import JSSort from '../../components/JobSeeker/sort';
import jobcard from '../../components/JobSeeker/jobcard';
import AdvancedFilter from '../../components/JobSeeker/advancedfilter/advancedfilter';
import CourseCard from '../../components/JobSeeker/coursecard';
import { useLocation } from 'react-router-dom';
import Pagination from '../../components/JobSeeker/pagination';

const cardData = [
  { title: 'UI/UX Design Fundamentals', content: ['User Interface Design', 'User Experience Design'], location: 'Online', company: 'ABC Design' },
  { title: 'Advanced UI/UX Design', content: ['Project Leadership', 'Mentorship'], location: 'Online', company: 'Creative Solutions' },
  { title: 'Technical Support Essentials', content: ['Client Support', 'Technical Assistance'], location: 'Online', company: 'Tech Support Co.' },
  { title: 'Graphic Design Basics', content: ['Visual Content Creation', 'Design Principles'], location: 'Online', company: 'Graphic World' },
  { title: 'Front End Development', content: ['HTML', 'CSS', 'JavaScript','HTML', 'CSS', 'JavaScript'], location: 'Negombo', company: 'Web Solutions' },
  { title: 'Backend Development', content: ['Server-side Logic', 'Database Management'], location: 'Matara', company: 'Data Masters' },
  { title: 'Project Management', content: ['Project Planning', 'Execution'], location: 'Trincomalee', company: 'Project Pros' },
  { title: 'Quality Assurance Engineering', content: ['Software Testing', 'Quality Assurance'], location: 'Anuradhapura', company: 'Quality Assurance Inc.' },
  { title: 'Data Science', content: ['Data Analysis', 'Data Interpretation'], location: 'Online', company: 'Data Insights' },
  { title: 'System Administration', content: ['IT Infrastructure Management', 'System Maintenance'], location: 'Colombo', company: 'Tech Admins' },
  { title: 'DevOps Engineering', content: ['CI/CD Pipelines', 'Automation'], location: 'Galle', company: 'DevOps Solutions' },
  { title: 'Mobile App Development', content: ['iOS Development', 'Android Development'], location: 'Kandy', company: 'App Creators' },
  { title: 'Network Engineering', content: ['Network Design', 'Network Implementation'], location: 'Jaffna', company: 'Net Solutions' },
  { title: 'Database Administration', content: ['Database Management', 'SQL'], location: 'Negombo', company: 'Data Admins' },
  { title: 'Cybersecurity Fundamentals', content: ['IT Security', 'Data Protection'], location: 'Matara', company: 'SecureTech' },
  { title: 'Business Analysis', content: ['Business Needs Analysis', 'Process Improvement'], location: 'Trincomalee', company: 'Business Insights' },
  { title: 'Content Writing', content: ['Writing Skills', 'Content Creation'], location: 'Anuradhapura', company: 'Content Creators' },
  { title: 'SEO Optimization', content: ['Search Engine Optimization', 'Website Content'], location: 'Batticaloa', company: 'SEO Pros' },
  { title: 'Marketing Management', content: ['Marketing Strategies', 'Campaign Execution'], location: 'Colombo', company: 'Market Masters' },
  { title: 'Human Resources Management', content: ['Recruitment', 'Employee Management'], location: 'Galle', company: 'HR Solutions' },
];








const Courses = () => {
  const [type, setType] = useState(1);
  const people = ["Bob", "Lisa", "Anika", "Obi", "Sara"];
  const pageLimit = 8;
  const [pagePeople, setPagePeople] = useState([]);
  const [page, setPage] = useState(12);
  

  const handlePageChange = (event, newValue) => {
    const newPage = 12// Extract the number from the selected value
    setPage(newPage);
    console.log(page)
    console.log(title)
  };
  
  const [selectedSize, setSelectedSize] = useState(12); // Initial value
  
  const handleSizeChange = (event, newValue) => {
    const x = newValue.split(" ")
    setSelectedSize(x[0]);
    console.log(selectedSize)
  };
  
  const [PageNumber , setPageNumber] = useState(0)
  const total = Math.floor(cardData.length/ Number(selectedSize))

  const getValuefromChild = (value)=> {

    setPageNumber( value)

  }
  return (

    
    <Box
            component="main"
            className="MainContent"
            sx={{
              px: { xs: 2, md: 6 },
              pt: {
                xs: 'calc(12px + var(--Header-height))',
                sm: 'calc(12px + var(--Header-height))',
                md: 3,
              },
              pb: { xs: 2, sm: 2, md: 3 },
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              minWidth: 0,
              height: '100dvh',
              gap: 1,
              maxHeight: 'calc(100vh - 10px)',
              overflow: 'auto ',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
            }}
          >
           
            <Box sx={{ display: 'flex', alignItems: 'center'}}>
              {/* <JobSeekerTopbar /> */}
            
             
            </Box>
            
            <Box
            sx={{
                      display: 'flex',
                      mb: 1,
                      gap: 1,
                      flexDirection: { xs: 'column', sm: 'row' },
                      alignItems: { xs: 'start', sm: 'center' },
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                    }}
                      >
                        <Typography level="h2" component="h1">
                          Home
                        </Typography> 
                      
                        <Box sx={{ display: 'flex' }}>
                            <JSSearch/>
                            <Alert />
                            <ProfileDropdown />
                            {/* <AdvancedFilter/> */}


                        </Box>
                      
                      
                      </Box>

                      <Box
            sx={{
                      display: 'flex',
                      mb: 1,
                      gap: 1,
                      flexDirection: { xs: 'column', sm: 'row' },
                      alignItems: { xs: 'start', sm: 'center' },
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                    }}
                      >
                        
                        <Box sx={{ display: 'flex', gap : 2  }}>
                           <JSDropDown name = {"Job Type "} sizes = {['Fulltime', 'Contract' , 'Internship' , 'PartTime' , 'Casual'    ]} proptype = '1' />
                           <JSDropDown name = {"Modality "} sizes = {['Inoffice', 'Remote'  ]} proptype = '1'/>
                           <JSDropDown name = {"Job Type "} sizes = {['Srilanka', 'Bangladesh' , 'Internship' , 'PartTime' , 'Casual'    ]} proptype = '1'/>
                           <JSDropDown name = {"Salary "} sizes = {['Fulltime', 'Contract' , 'Internship' , 'PartTime' , 'Casual'    ]} proptype = '0'/> 
                         
                        </Box>
                        <Box
                              sx={{
                                        display: 'flex',
                                        
                                        gap: 1,
                                        flexDirection: { xs: 'column', sm: 'row' },
                                        alignItems: { xs: 'start', sm: 'center' },
                                        flexWrap: 'wrap',
                                        justifyContent: 'space-between',
                                      }}
                                        >
                                       
                                       <JSSort
                                        sizes={['6 per Page', '12 per Page', '15 per Page', '18 per Page']}
                                        initial="12 per Page"
                                        onChange={handleSizeChange}
                                      />
                                        <JSSort sizes = {['Latest', 'Oldest' , 'Trending' , 'Most Viewed'   ]} initial="Latest"/>
                                      
                                        <Box sx={{ display: 'flex', borderRadius: '2px', border: '1px solid #ccc' }}>
                                         
                                        {(type==1) && (
                                              <IconButton aria-label="list view" onClick={ () => {
                                                                                            
                                                setType(0)
                                              }}>
                                                <ListIcon />
                                              </IconButton>

                                        )}

                                          {(type==0) && (
                                               <IconButton aria-label="list view" onClick={ () => {
                                           
                                                setType(1)
                                              }}>
                                                <GridViewIcon />
                                              </IconButton>

                                        )}
                                      
                                           
                                           
                                          </Box>
                                         <Box>
                                        
    
                                          </Box>
                      
                      
                      </Box>
                         
                      
                      
                      </Box>

                      {/*breadcrumbs over*/}
                      <Divider />
                      {(type == 1) && (
                        <Box 
                          sx={{ 
                            display: 'grid', 
                            gridTemplateColumns: {
                              xs: 'repeat(1, 1fr)', // 1 column for extra-small screens (mobile)
                              sm: 'repeat(2, 1fr)', // 2 columns for small screens (tablet)
                              md: 'repeat(3, 1fr)', // 3 columns for medium and larger screens (desktop)
                            }, 
                            gap: 2, 
                            
                          }}
                        >
                          {cardData.slice(PageNumber* selectedSize,PageNumber * selectedSize + selectedSize).map((card, index) => (
                            <CourseCard key={index} title={card.title} content={card.content} location={card.location} company={card.company} type = {type} />
                          ))}
                          
                        
                      </Box>
                      
                     
            


                      )
                      }
                      {(type == 0 ) && (
                         <Box 
                         sx={{ 
                           display: 'column', 
                           marginTop: '20px' ,
                           
                         }}
                       >
                         {cardData.slice(0,selectedSize).map((card, index) => (
                           <CourseCard key={index} title={card.title} content={card.content} location={card.location} company={card.company} type = {type} />
                         ))}
                         
                        
                     </Box>
                  
                    
                     
                      )}
                      
                      <Box>
                       
                       <Pagination currentPage={PageNumber} total = {total} callback = {getValuefromChild} />

                     </Box>
                           

          
            
      
          </Box>
          
          
          


  )
}

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  {
    title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { title: 'The Great Dictator', year: 1940 },
  { title: 'Cinema Paradiso', year: 1988 },
  { title: 'The Lives of Others', year: 2006 },
  { title: 'Grave of the Fireflies', year: 1988 },
  { title: 'Paths of Glory', year: 1957 },
  { title: 'Django Unchained', year: 2012 },
  { title: 'The Shining', year: 1980 },
  { title: 'WALL·E', year: 2008 },
  { title: 'American Beauty', year: 1999 },
  { title: 'The Dark Knight Rises', year: 2012 },
  { title: 'Princess Mononoke', year: 1997 },
  { title: 'Aliens', year: 1986 },
  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  {
    title: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  {
    title: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];

export default Courses