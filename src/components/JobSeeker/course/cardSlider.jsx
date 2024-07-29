import React , {useState, useEffect} from 'react'
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import { Box } from '@mui/joy';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Chip from '@mui/joy/Chip';

export default function BasicCard({url , callback}) {

  const [scrollTop, setScrollTop] = useState(15); // Initial top position in percentage

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log(scrollPosition); // Log the scroll position
      const newTop = Math.max(0, 15 - scrollPosition / 10); // Adjust divisor for speed
      setScrollTop(newTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Card sx={{ width: 320 }}>
      <div>
     
      
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
        >
          <BookmarkAdd />
        </IconButton>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src={url}

          loading="lazy"
          alt=""
          style={{objectFit: 'cover'}}
        />
      </AspectRatio>
      <CardContent 
      orientation="horizontal" 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}
    >
      <Button
        variant="solid"
        size="md"
        color="primary"
        aria-label="Explore Bahamas Islands"
        sx={{ fontWeight: 600 , width: 200 }}
        onClick={()=> {
          callback(true)
        }}
      >
        Enroll
      </Button>
    </CardContent>

    <Box >
      <Typography sx={{fontSize : '14px' , marginTop : '8px'}}>
      This Course Includes
      </Typography>
      <Box sx = {{display: 'flex' , flexDirection : 'column'}}>

      <Box sx={{marginTop : '8px' , display : 'flex'}}>
        <Typography>
          <AccessTimeIcon/>
        </Typography>
        <Box sx={{marginLeft : '20px'}}>
          <Typography sx = {{fontWeight: 500}}>
            2 Hours
          </Typography>
          <Typography sx = {{}}>
             Of self-paced video lessons
          </Typography>

        </Box>
        
      </Box>
      <Box sx={{marginTop : '8px' , display : 'flex'}}>
        <Typography>
          <CardMembershipIcon/>
        </Typography>
        <Box sx={{marginLeft : '20px'}}>
          <Typography sx = {{fontWeight: 500}}>
          Completion Certificate
          </Typography>
          <Typography sx = {{}}>
          awarded on course completion
          </Typography>

        </Box>
        
      </Box>

      <Box sx={{marginTop : '8px' , display : 'flex'}}>
        <Typography>
          <CalendarTodayIcon/>
        </Typography>
        <Box sx={{marginLeft : '20px'}}>
          <Typography sx = {{fontWeight: 500}}>
          90 Days of Access
          </Typography>
          <Typography sx = {{}}>
          To your Free Course
          </Typography>

        </Box>
        
      </Box>



      </Box>
     
     
    </Box>
    </Card>
  );
}
