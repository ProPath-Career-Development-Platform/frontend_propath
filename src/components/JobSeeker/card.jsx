import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessIcon from "@mui/icons-material/Business";
import { Box } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useNavigate } from "react-router-dom";
import wso2img from "../../assets/wso2.png";
import sysco from "../../assets/sysco.png";

export default function JSCard({
  jobId,
  title,
  content,
  location,
  company,
  customQuestion,
  education,
  experience,
  expiryDate,
  jobType,
  jobLevel,
  jobRole,
  minSalary,
  maxSalary,
  salaryType,
  vacancies,
  tags,
  postedIn,
  type,
  img,

}) {
  const navigate = useNavigate();

  const handleApplyNowClick = () => {
    console.log("Job ID: ", jobId);
    navigate(`/JobSeeker/JobDetails/${jobId}`, { state: { title } });
  };

  if (type === 1) {
    return (
      <Card
        data-resizable
        sx={{
          textAlign: 'center',
          alignItems: 'center',
          width: 300,
          overflow: 'auto',
          resize: 'horizontal',
          '--icon-size': '60px',
          marginBottom : '15px'
        }}
      >
          <CardOverflow >
            <AspectRatio sx={{ minWidth: 200 , height : 90 , marginBottom : '10px' }} >
              <img
                src= {img}
              
                loading="lazy"
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover' , border : '1px solid #ccc'}}
              />
            </AspectRatio>
          </CardOverflow>

        <Typography level="title-lg" sx={{ mt: 'calc(var(--icon-size) / 0.8)' }}>
          {title}
        </Typography>
        <Typography>
          <BusinessIcon /> {company}
          <LocationOnIcon /> {location}
        </Typography>
        <CardContent sx={{ fontSize : '17px'}}>{content}</CardContent>
        <CardActions
          orientation="vertical"
          buttonFlex={1}
          sx={{
            '--Button-radius': '40px',
            width: 'clamp(min(100%, 120px), 50%, min(100%, 160px))',
          }}
        >
          <Button variant="solid" sx={{ backgroundColor: '#3f067a' }} onClick={handleApplyNowClick}>
            Apply Now <ArrowRightAltIcon sx={{ marginLeft: '3px' }} />
          </Button>
        </CardActions>
      </Card>
    );
  } else {
    return (
      <Card
        data-resizable
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          overflow: 'auto',
          resize: 'horizontal',
          '--icon-size': '60px',
          padding: 2,
          gap: 2,
          margin: '20px',
          border: '1px solid #ccc',
          position: 'relative',
          maxHeight: '25%',
        }}
      >
        <CardOverflow sx={{ top: '8px' }}>
          <AspectRatio
            variant="outlined"
            color="warning"
            ratio="1"
            sx={{
              m: 'auto',
              borderRadius: '50%',
              width: 'var(--icon-size)',
              boxShadow: 'sm',
              position: 'relative',
            }}
          >
            <div>
              <BakeryDiningIcon color="warning" sx={{ fontSize: '2.5rem' }} />
            </div>
          </AspectRatio>
        </CardOverflow>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            marginLeft: '20px',
            position: 'relative',
            top: '10px',
          }}
        >
          <Typography level="title-lg">
            {title}
            <BusinessIcon sx={{ marginLeft: '20px' }} /> {company}
            <LocationOnIcon sx={{ marginLeft: '20px' }} /> {location}
          </Typography>
          <CardContent sx={{ maxWidth: '100%' }}>{content}</CardContent>
          <CardActions
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
            }}
          >
            <Button
              variant="solid"
              color="warning"
              sx={{
                maxWidth: '20%',
                position: 'absolute',
                right: '10px',
                top: '14px',
              }}
              onClick={handleApplyNowClick}
            >
              Apply Now <ArrowRightAltIcon sx={{ marginLeft: '3px' }} />
            </Button>
          </CardActions>
        </Box>
      </Card>
    );
  }
}