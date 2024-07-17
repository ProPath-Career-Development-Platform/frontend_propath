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
import logo from '/logo.png'
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
import BasicCard from '../../components/JobSeeker/course/cardSlider';
import banner from '/banner.png';
import Pagination from '../../components/JobSeeker/pagination';
import ListNew from '../../components/list';
import Footer from '../../components/landingPage/footer/Footer';
import Banner from '../../components/JobSeeker/banner';

const cardData = [
  { title: 'UI/UX Designer', content: 'Responsible for designing user interfaces and improving user experience.', location: 'Colombo', company: 'ABC Design' , img : '/jobs/sysco.png'},
  { title: 'Senior UI/UX Designer', content: 'Leads design projects and mentors junior designers.', location: 'Galle', company: 'Creative Solutions' , img : '/jobs/ifs.png'},
  { title: 'Technical Support Specialist', content: 'Provides technical assistance and support to clients.', location: 'Kandy', company: 'Tech Support Co.' ,  img : '/jobs/99x.png' },
  { title: 'Junior Graphic Designer', content: 'Creates visual content under the guidance of senior designers.', location: 'Jaffna', company: 'Graphic World' , img : '/jobs/virtusa.jpg' },
  { title: 'Front End Developer', content: 'Develops and implements front-end web applications.', location: 'Negombo', company: 'Web Solutions' ,img : '/jobs/codegen.png' },
  { title: 'Backend Developer', content: 'Handles server-side logic and database management.', location: 'Matara', company: 'Data Masters' ,img : '/jobs/microsoft.png' },
  { title: 'Project Manager', content: 'Oversees project planning, execution, and completion.', location: 'Trincomalee', company: 'Project Pros' },
  { title: 'QA Engineer', content: 'Ensures the quality and functionality of software products.', location: 'Anuradhapura', company: 'Quality Assurance Inc.' },
  { title: 'Data Scientist', content: 'Analyzes and interprets complex data to provide insights.', location: 'Batticaloa', company: 'Data Insights' },
  { title: 'System Administrator', content: 'Manages and maintains IT infrastructure.', location: 'Colombo', company: 'Tech Admins' },
  { title: 'DevOps Engineer', content: 'Develops and maintains CI/CD pipelines.', location: 'Galle', company: 'DevOps Solutions' },
  { title: 'Mobile App Developer', content: 'Creates and maintains mobile applications.', location: 'Kandy', company: 'App Creators' },
  { title: 'Network Engineer', content: 'Designs and implements network solutions.', location: 'Jaffna', company: 'Net Solutions' },
  { title: 'Database Administrator', content: 'Manages database environments.', location: 'Negombo', company: 'Data Admins' },
  { title: 'Security Analyst', content: 'Monitors and secures IT systems.', location: 'Matara', company: 'SecureTech' },
  { title: 'Business Analyst', content: 'Analyzes business needs and processes.', location: 'Trincomalee', company: 'Business Insights' },
  { title: 'Content Writer', content: 'Creates written content for various platforms.', location: 'Anuradhapura', company: 'Content Creators' },
  { title: 'SEO Specialist', content: 'Optimizes website content for search engines.', location: 'Batticaloa', company: 'SEO Pros' },
  { title: 'Marketing Manager', content: 'Develops and executes marketing strategies.', location: 'Colombo', company: 'Market Masters' },
  { title: 'HR Manager', content: 'Manages human resources and recruitment.', location: 'Galle', company: 'HR Solutions' },
  { title: 'Financial Analyst', content: 'Analyzes financial data and trends.', location: 'Kandy', company: 'Finance Pros' },
  { title: 'Product Manager', content: 'Oversees product development and lifecycle.', location: 'Jaffna', company: 'Product Leaders' },
  { title: 'Sales Manager', content: 'Leads sales teams and strategies.', location: 'Negombo', company: 'Sales Experts' },
  { title: 'Operations Manager', content: 'Manages daily business operations.', location: 'Matara', company: 'Ops Masters' },
  { title: 'Graphic Designer', content: 'Creates visual content for various media.', location: 'Trincomalee', company: 'Design Hub' },
  { title: 'Content Strategist', content: 'Plans and manages content strategies.', location: 'Anuradhapura', company: 'Content Planners' },
  { title: 'Customer Support Representative', content: 'Provides customer service and support.', location: 'Batticaloa', company: 'Customer First' },
  { title: 'Software Architect', content: 'Designs and oversees software architecture.', location: 'Colombo', company: 'Software Builders' },
  { title: 'Cloud Engineer', content: 'Develops and manages cloud solutions.', location: 'Galle', company: 'Cloud Masters' },
  { title: 'Data Analyst', content: 'Analyzes and interprets data.', location: 'Kandy', company: 'Data Insights' },
  { title: 'Web Developer', content: 'Builds and maintains websites.', location: 'Jaffna', company: 'Web Solutions' },
  { title: 'Digital Marketing Specialist', content: 'Executes digital marketing campaigns.', location: 'Negombo', company: 'Digital Experts' },
  { title: 'Project Coordinator', content: 'Supports project management activities.', location: 'Matara', company: 'Project Support' },
  { title: 'Technical Writer', content: 'Creates technical documentation.', location: 'Trincomalee', company: 'Tech Docs' },
  { title: 'System Analyst', content: 'Analyzes and improves IT systems.', location: 'Anuradhapura', company: 'System Solutions' },
  { title: 'IT Consultant', content: 'Provides IT consulting services.', location: 'Batticaloa', company: 'IT Advisory' },
  { title: 'Network Administrator', content: 'Manages network infrastructure.', location: 'Colombo', company: 'Net Admins' },
  { title: 'Software Tester', content: 'Tests software for bugs and issues.', location: 'Galle', company: 'QA Solutions' },
  { title: 'UI Developer', content: 'Develops user interfaces.', location: 'Kandy', company: 'UI Experts' },
  { title: 'Backend Engineer', content: 'Builds and maintains backend systems.', location: 'Jaffna', company: 'Backend Solutions' },
  { title: 'Full Stack Developer', content: 'Develops both frontend and backend solutions.', location: 'Negombo', company: 'Full Stack Pros' },
  { title: 'Machine Learning Engineer', content: 'Develops machine learning models.', location: 'Matara', company: 'ML Solutions' },
  { title: 'Technical Project Manager', content: 'Manages technical projects.', location: 'Trincomalee', company: 'Tech Projects' },
  { title: 'Product Designer', content: 'Designs product features and interfaces.', location: 'Anuradhapura', company: 'Product Design Co.' },
  { title: 'Marketing Coordinator', content: 'Supports marketing activities.', location: 'Batticaloa', company: 'Marketing Support' },
  { title: 'Research Scientist', content: 'Conducts scientific research.', location: 'Colombo', company: 'Research Labs' },
  { title: 'Logistics Manager', content: 'Manages logistics and supply chain.', location: 'Galle', company: 'Logistics Solutions' },
  { title: 'IT Support Engineer', content: 'Provides IT support to users.', location: 'Kandy', company: 'IT Support Co.' },
  { title: 'Cybersecurity Specialist', content: 'Secures IT systems and data.', location: 'Jaffna', company: 'Security Experts' },
  { title: 'UX Researcher', content: 'Conducts user experience research.', location: 'Negombo', company: 'UX Insights' },
];







const JobSeekerHome = () => {
  const [type, setType] = useState(1);
  const people = ["Bob", "Lisa", "Anika", "Obi", "Sara"];
  const pageLimit = 8;
  const [pagePeople, setPagePeople] = useState([]);
  const [page, setPage] = useState(12);

  const handlePageChange = (event, newValue) => {
    const newPage = 12// Extract the number from the selected value
    setPage(newPage);
    console.log(page)
  };
  
  

   
  const [selectedSize, setSelectedSize] = useState(12); // Initial value
  const total = Math.floor(cardData.length / Number(selectedSize))
  const [PageNumber , setPageNumber] = useState(0)
  const handleSizeChange = (event, newValue) => {
    const x = newValue.split(" ")
    setSelectedSize(x[0]);
    console.log(selectedSize)
  };

  const getValuefromChild = (value)=> {
        setPageNumber(value)
        console.log('page Num' , PageNumber)
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
            }}
          >
           
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
                        <Box sx={{width : 130}}>
                        <img src={logo} />
                        </Box>

                          
                        
                      
                        <Box sx={{ display: 'flex' }}>
                            <JSSearch/>
                            <Alert />
                            <ProfileDropdown />
                           


                        </Box>
                      
                      
                      </Box>


                      <Box sx={{flexGrow : 1}}>
                        <Banner/>
                      </Box>

                      <Box sx={{marginTop : '40px' , marginBottom: '20px'}}>
                        <Typography sx={{fontSize : '25px' , fontWeight : 500}}>
                          Related Jobs
                        </Typography>
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
                           <AdvancedFilter/> 
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
                            marginLeft: {
                                lg: '55px' ,
                            },
                            gap: 2, 
                            
                          }}
                        >
                          {cardData.slice(PageNumber * Number(selectedSize), PageNumber * Number(selectedSize) + Number(selectedSize)).map((card, index) => (
                            <JSCard key={index} title={card.title} content={card.content} location={card.location} company={card.company} type = {type} img = {card.img} />
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
                         {cardData.slice(PageNumber * Number(selectedSize), PageNumber * Number(selectedSize) + Number(selectedSize)).map((card, index) => (
                           <JSCard key={index} title={card.title} content={card.content} location={card.location} company={card.company} type = {type} />
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

export default JobSeekerHome