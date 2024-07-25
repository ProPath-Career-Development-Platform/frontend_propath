import React, { useState, useRef} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {Typography} from '@mui/material';
import 'boxicons';
import Card from '@mui/joy/Card';

import TextField from '@mui/material/TextField';
import '../../../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLandmark,faSquarePhone,faEarthAmericas, faLaptop,faCircleArrowRight,faImage,faLink,faCircleArrowLeft,faCircleXmark} from '@fortawesome/free-solid-svg-icons'

import InputAdornment from '@mui/material/InputAdornment';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Input from '@mui/joy/Input';
import LocationOn from '@mui/icons-material/LocationOn';
import Button from '@mui/joy/Button';
import Avatar from '@mui/joy/Avatar';
import MailIcon from '@mui/icons-material/Mail';


import Textarea from '@mui/joy/Textarea';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import FormatBold from '@mui/icons-material/FormatBold';
import FormatItalic from '@mui/icons-material/FormatItalic';
import FormatUnderlined from '@mui/icons-material/FormatUnderlined';
import FormatListBulleted from '@mui/icons-material/FormatListBulleted';
import Link from '@mui/icons-material/Link';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Check from '@mui/icons-material/Check';




export default function NavigationPanel() {

  const [formData, setFormData] = useState({
    companyName: '',
    aboutUs: '',
    logoImg: null,
    bannerImg: null,
    organizationType: '',
    industryType: '',
    establishedDate: '',
    companyWebsite: '',
    companyVision: '',
    location:'',
    contactNumber:'',
    Email:'',
  });

  const [error, setError] = useState({});
  const [highlightLogo, setHighlightLogo] = useState(false);
  const [highlightBanner, setHighlightBanner] = useState(false);

  const inputFileRef = useRef(null);
  const inputBannerRef = useRef(null);

  

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   if (error[name]) {
  //     setError((prevState) => {
  //       const newErrors = { ...prevState };
  //       delete newErrors[name];
  //       return newErrors;
  //     });
  //   }
  //   setFormData({ ...formData, [name]: value });
  // };

  const handleInputChange = (event) => {
    if (event && event.target) {
      const { name, value } = event.target;
      console.log(`Name: ${name}, Value: ${value}`); // Debug log
  
      if (error[name]) {
        setError((prevState) => {
          const newErrors = { ...prevState };
          delete newErrors[name];
          return newErrors;
        });
      }
      setFormData({ ...formData, [name]: value });
    } else {
      console.error('handleInputChange received an invalid event:', event);
    }
  };
  
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setError((prevState) => ({
          ...prevState,
          logoImg: 'Image size must be less than 2MB',
        }));
      } else {
        setFormData({ ...formData, logoImg: URL.createObjectURL(file) });
        setHighlightLogo(false);
      }
    }
  };

  const handleBannerUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError((prevState) => ({
          ...prevState,
          bannerImg: 'Image size must be less than 5MB',
        }));
      } else {
        setFormData({ ...formData, bannerImg: URL.createObjectURL(file) });
        setHighlightBanner(false);
      }
    }
  };

  const handleSubmit1 = () => {
    let hasError = false;
    const newErrors = {};

    if (!formData.companyName) {
      newErrors.companyName = 'Company Name is required';
      hasError = true;
    }
    if (!formData.aboutUs) {
      newErrors.aboutUs = 'About Us is required';
      hasError = true;
    }
    if (!formData.logoImg) {
      setHighlightLogo(true);
      hasError = true;
    }
    if (!formData.bannerImg) {
      setHighlightBanner(true);
      hasError = true;
    }

    if (hasError) {
      setError(newErrors);
    } else {
      
      setActiveTab("2");
    }
  };

  const handleSubmit2 = () => {
    let hasError = false;
    const newErrors = {};

    if (!formData.organizationType) {
      newErrors.organizationType = 'Organization Type is required';
      hasError = true;
    }
    if (!formData.industryType) {
      newErrors.industryType = 'Industry Type is required';
      hasError = true;

    }
    if (!formData.establishedDate) {
      newErrors.establishedDate = 'Established Date is required';
      hasError = true;
    }
    if (!formData.companyWebsite) {
      newErrors.companyWebsite = 'Company Website is required';
      hasError = true;
    }
    if (!formData.companyVision) {
      newErrors.companyVision = 'Company Vision is required';
      hasError = true;
    }


    if (hasError) {
      setError(newErrors);
    } else {
      
      setActiveTab("3");
    }
  };

  const haddlesubmit3 =()=>{
    setActiveTab("4");
  };

  const handleSubmit4 = () => {
    let hasError = false;
    const newErrors = {};

    if (!formData.location) {
      newErrors.location = 'Organization Location is Required';
      hasError = true;
    }
    if (!formData.contactNumber) {
      newErrors.contactNumber = 'contactNumber is Required';
      hasError = true;

    }
    if (!formData.Email) {
      newErrors.Email = 'Email is required';
      hasError = true;
    }
    if (hasError) {
      setError(newErrors);
    } else {
      
      setActiveTab("4"); 
    }
  };



  
    
  const [activeTab, setActiveTab] = useState("1");

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  


  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState('');
  // const inputFileRef = useRef(null);

  

  const [bannerImage, setBannerImage] = useState(null);
  const [bannerImageName, setBannerImageName] = useState('');
  const inputFileRef2 = useRef(null);

  

  const today = new Date().toISOString().split('T')[0]; 


const [italic, setItalic] = React.useState(false);
  const [fontWeight, setFontWeight] = React.useState('normal');
  const [anchorEl, setAnchorEl] = React.useState(null);const [underline, setUnderline] = React.useState(false);
  const [bulletPoints, setBulletPoints] = React.useState(false);
  const [link, setLink] = React.useState(false);

 
  


  const [links, setLinks] = useState([
    { platform: 'Facebook', url: '' },
    { platform: 'Instagram', url: '' },
    { platform: 'Linkedin', url: '' },
  ]);

  const handleSocialChange = (index, event) => {
    const newLinks = [...links];
    newLinks[index].platform = event.target.value;
    setLinks(newLinks);
  };

  const handleUrlChange = (index, event) => {
    const newLinks = [...links];
    newLinks[index].url = event.target.value;
    setLinks(newLinks);
  };

  const handleAddLink = () => {
    setLinks([...links, { platform: 'Facebook', url: '' }]);
  };

  const handleCancel = (index) => {
    const newLinks = [...links];
    newLinks.splice(index, 1);
    setLinks(newLinks);
  };


  


 

  
 
  
    
  
  return (
    <Box sx={{ width: '100%', typography: 'body1',mt:6}}>
      <form></form>
      <TabContext value={activeTab} centered>
        <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
          <TabList  onChange={handleChange} aria-label="lab API tabs example" centered>
            <Tab label={<span><FontAwesomeIcon icon={faLandmark} size="lg" /> Company Info</span>} value="1" />
            <Tab label={<span><FontAwesomeIcon icon={faEarthAmericas} size="lg"/> Founding Info</span>} value="2" />
            <Tab label={<span><FontAwesomeIcon icon={faLaptop} size="lg"/> Social Media Profile</span>} value="3" />
            <Tab label={<span><FontAwesomeIcon icon={faSquarePhone} size="lg" /> Contact</span>}value="4" />
          </TabList>
        </Box>

        <TabPanel value="1">
        <Card>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '40% 60%',
          gap: 3,
          pb: 2,
        }}
      >
        <Box
          sx={{
            pl: 2,
            pr: 2,
            pt: 2,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <div>
              <img src="../../public/logo.png" alt="" style={{ height: '40px' }} />
            </div>
            <div>
              <p>Where Talents meets Opportunity</p>
            </div>
          </Box>
          <Box
            sx={{
              display: 'flex',
              mt: 2,
              flexGrow: 1,
            }}
          >
            <img src="../../public/founding_info.jpg" alt="" style={{ borderRadius: '20px', height: '100%', objectFit: 'cover' }} />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          <Box sx={{ pb: 4, pt: 10 }}>
            <FormControl sx={{ width: '95%', paddingLeft: '30px' }} error={Boolean(error.companyName)}>
              <FormLabel>Company Name</FormLabel>
              <Input
                name="companyName"
                placeholder="Enter Company Name"
                value={formData.companyName}
                onChange={handleInputChange}
                startAdornment={
                  <InputAdornment position="start">
                    <FontAwesomeIcon icon={faLink} style={{ color: "#74C0FC" }} />
                  </InputAdornment>
                }
              />
              {error.companyName && (
                <FormHelperText>
                  <InfoOutlined /> {error.companyName}
                </FormHelperText>
              )}
            </FormControl>
          </Box>

          <Box sx={{ pb: 4 }}>
            <FormControl sx={{ width: '95%', paddingLeft: '30px' }} error={Boolean(error.aboutUs)}>
              <FormLabel>About Us</FormLabel>
              <Textarea
                name="aboutUs"
                placeholder="Type something here…"
                value={formData.aboutUs}
                onChange={handleInputChange}
                minRows={3}
                endDecorator={
                  <Box
                    sx={{
                      display: 'flex',
                      gap: 'var(--Textarea-paddingBlock)',
                      pt: 'var(--Textarea-paddingBlock)',
                      borderTop: '1px solid',
                      borderColor: 'divider',
                      flex: 'auto',
                    }}
                  >
                    <IconButton variant="plain" color="neutral">
                      <FormatBold />
                      <KeyboardArrowDown fontSize="md" />
                    </IconButton>
                    <IconButton>
                      <FormatItalic />
                    </IconButton>
                    <IconButton>
                      <FormatUnderlined />
                    </IconButton>
                    <IconButton>
                      <FormatListBulleted />
                    </IconButton>
                    <IconButton>
                      <Link />
                    </IconButton>
                  </Box>
                }
                sx={{
                  minWidth: 300,
                }}
              />
              {error.aboutUs && (
                <FormHelperText>
                  <InfoOutlined /> {error.aboutUs}
                </FormHelperText>
              )}
            </FormControl>
          </Box>

          <Box sx={{ display: 'flex',ml:4}}>
            <p>Upload Logo and Banner Images</p>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around',width:'95%' }}>
            <Box
              sx={{
                maxWidth: '400px',
                width:'40%',
                background: '#fff',
                padding: '30px',
                borderRadius: '30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: highlightLogo ? '2px solid red' : '2px solid #d3d3d3',
              }}
            >
              <input
                type="file"
                id="file"
                accept="image/*"
                hidden
                ref={inputFileRef}
                onChange={handleImageUpload}
              />
              <Box
                className={`img-area ${formData.logoImg ? 'active' : ''}`}
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '240px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {formData.logoImg ? (
                  <>
                    <img src={formData.logoImg} alt="logo" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />
                    <IconButton
                      aria-label="edit"
                      component="span"
                      sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        color: '#1976d2',
                      }}
                      onClick={() => inputFileRef.current.click()}
                    >
                      <FontAwesomeIcon icon={faImage} />
                    </IconButton>
                  </>
                ) : (
                  <Box
                    onClick={() => inputFileRef.current.click()}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      color: highlightLogo ? 'red' : '#d3d3d3',
                    }}
                  >
                    <FontAwesomeIcon icon={faImage} size="3x" />
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      Upload Logo
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>

            <Box
              sx={{
                maxWidth: '400px',
                width: '60%',
                background: '#fff',
                padding: '30px',
                borderRadius: '30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: highlightBanner ? '2px solid red' : '2px solid #d3d3d3',
              }}
            >
              <input
                type="file"
                id="banner"
                accept="image/*"
                hidden
                ref={inputBannerRef}
                onChange={handleBannerUpload}
              />
              <Box
                className={`img-area ${formData.bannerImg ? 'active' : ''}`}
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '240px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {formData.bannerImg ? (
                  <>
                    <img src={formData.bannerImg} alt="banner" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />
                    <IconButton
                      aria-label="edit"
                      component="span"
                      sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        color: '#1976d2',
                      }}
                      onClick={() => inputBannerRef.current.click()}
                    >
                      <FontAwesomeIcon icon={faImage} />
                    </IconButton>
                  </>
                ) : (
                  <Box
                    onClick={() => inputBannerRef.current.click()}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      color: highlightBanner ? 'red' : '#d3d3d3',
                    }}
                  >
                    <FontAwesomeIcon icon={faImage} size="3x" />
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      Upload Banner
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', mt: 4,justifyContent:'flex-end',pr:9}}> 
            <Button onClick={handleSubmit1}  endDecorator={<ArrowCircleRightIcon />} sx={{color:''}}>
              Save and Next
            </Button>
          </Box>
        </Box>
      </Box>
    </Card>
     
    </TabPanel>
        

        
        <TabPanel value="2">
          <Box

            sx={{
            display:'grid',
            gridTemplateColumns:'40% 60%',
            gap:'3',
            border:2,
            borderRadius:3,
            boxShadow:3,
            pb:6,
            overflow: 'auto',
            maxHeight: 'calc(100vh-10px)',
            
            }}
          >
          <Box
             sx={{
              pl:2,
              pr:2,
              pt:2,
              display:'flex',
              flexDirection:'column'
             }
            }
            >
            <Box
             sx={{
               display:'flex',
               alignItems:'center',
               flexDirection:'column',
             }}
            >
              <div>
              <img src="../../public/logo.png" alt="" style={{height:'40px'}}/>
              </div>
              <div>
              <p>Where Talents meets Opportunity</p>
              </div>
            </Box>
            <Box
              sx={{
                display:'flex',
                mt:2,
                flexGrow: 1,
                
                }}
            >
            <img src="../../public/company_info.jpg" alt="" style={{ borderRadius: '20px',height:'100%',objectFit: 'cover'}} />
            </Box>
            </Box>
          <Box
            sx={{
              display:'flex',
              flexDirection:'column',
              gap:'40px',
              // justifyContent:'center'
              pt:12,
              alignItems:'center',
              
              
            }}
          >
            <Box
            sx={{
              display:'flex',
              flexDirection:'row',
              gap:'30px',
             
            }}
            >
            <Box>
            <FormControl sx={{ width: 270 }} error={Boolean(error.organizationType)}>
  <FormLabel id="select-field-demo-label" htmlFor="select-field-demo-button">
    Organization Type
  </FormLabel>
  <Select
    value={formData.organizationType}
    onChange={(event) => {
      // Ensure event is valid and log it for debugging
      if (event && event.target) {
        handleInputChange(event);
      } else {
        console.error('Invalid event:', event);
      }
    }}
    slotProps={{
      button: {
        id: 'select-field-demo-button',
        'aria-labelledby': 'select-field-demo-label select-field-demo-button',
      },
    }}
  >
    <Option value="PLC">Public Limited Company (PLC)</Option>
    <Option value="PVT">Private Limited Company (PVT)</Option>
    <Option value="GovAgency">Government Agency</Option>
    <Option value="Partnership">Partnership</Option>
  </Select>
  {error.organizationType && (
    <FormHelperText>
      <InfoOutlined /> {error.organizationType}
    </FormHelperText>
  )}
</FormControl>
            </Box>
            <Box>
            <FormControl sx={{ width: 270 }} error={Boolean(error.industryType)}>
      <FormLabel id="select-field-demo-label" htmlFor="select-field-demo-button">
        Industry Type
      </FormLabel>
      <Select
        value={formData.industryType}
        onChange={(event) => {
          // Ensure event is valid and log it for debugging
          if (event && event.target) {
            handleInputChange(event);
          } else {
            console.error('Invalid event:', event);
          }
        }}
        slotProps={{
          button: {
            id: 'select-field-demo-button',
            'aria-labelledby': 'select-field-demo-label select-field-demo-button',
          },
        }}
      >
        <Option value="Industry1">Industry 1</Option>
        <Option value="Industry2">Industry 2</Option>
        <Option value="Industry3">Industry 3</Option>
        <Option value="Industry4">Industry 4</Option>
      </Select>
      {error.industryType && (
        <FormHelperText>
          <InfoOutlined /> {error.industryType}
        </FormHelperText>
      )}
    </FormControl>
            </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '30px' }}>
      <Box>
        <FormControl sx={{ width: 270 }} error={Boolean(error.establishedDate)}>
          <FormLabel>Established Date</FormLabel>
          <Input
            type="date"
            name="establishedDate"
            value={formData.establishedDate}
            onChange={handleInputChange}
          />
          {error.establishedDate && (
            <FormHelperText>
              <InfoOutlined /> {error.establishedDate}
            </FormHelperText>
          )}
        </FormControl>
      </Box>
      <Box>
        <FormControl sx={{ width: 270 }} error={Boolean(error.companyWebsite)}>
          <FormLabel>Company Website</FormLabel>
          <Input
            type="url"
            name="companyWebsite"
            value={formData.companyWebsite}
            onChange={handleInputChange}
            placeholder="Enter a URL"
            startAdornment={
              <InputAdornment position="start">
                <FontAwesomeIcon icon={faLink} style={{ color: "#74C0FC" }} />
              </InputAdornment>
            }
          />
          {error.companyWebsite && (
            <FormHelperText>
              <InfoOutlined /> {error.companyWebsite}
            </FormHelperText>
          )}
        </FormControl>
      </Box>
    </Box>
     <Box sx={{ width: '68%' }}>
   <FormControl error={Boolean(error.companyVision)}>
    <FormLabel>Company Vision</FormLabel>
    <Textarea
      name="companyVision"
      value={formData.companyVision}
      onChange={handleInputChange}
      placeholder="Type something here…"
      minRows={3}
      endDecorator={
        <Box
          sx={{
            display: 'flex',
            gap: 'var(--Textarea-paddingBlock)',
            pt: 'var(--Textarea-paddingBlock)',
            borderTop: '1px solid',
            borderColor: 'divider',
            flex: 'auto',
          }}
        >
          <IconButton
            variant="plain"
            color="neutral"
            onClick={(event) => setAnchorEl(event.currentTarget)}
          >
            <FormatBold />
            <KeyboardArrowDown fontSize="md" />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
            size="sm"
            placement="bottom-start"
            sx={{ '--ListItemDecorator-size': '24px' }}
          >
            {['200', 'normal', 'bold'].map((weight) => (
              <MenuItem
                key={weight}
                selected={fontWeight === weight}
                onClick={() => {
                  setFontWeight(weight);
                  setAnchorEl(null);
                }}
                sx={{ fontWeight: weight }}
              >
                <ListItemDecorator>
                  {fontWeight === weight && <Check fontSize="sm" />}
                </ListItemDecorator>
                {weight === '200' ? 'lighter' : weight}
              </MenuItem>
            ))}
          </Menu>
          <IconButton
            variant={italic ? 'soft' : 'plain'}
            color={italic ? 'primary' : 'neutral'}
            aria-pressed={italic}
            onClick={() => setItalic((bool) => !bool)}
          >
            <FormatItalic />
          </IconButton>
          <IconButton
            variant={underline ? 'soft' : 'plain'}
            color={underline ? 'primary' : 'neutral'}
            aria-pressed={underline}
            onClick={() => setUnderline((bool) => !bool)}
          >
            <FormatUnderlined />
          </IconButton>
          <IconButton
            variant={bulletPoints ? 'soft' : 'plain'}
            color={bulletPoints ? 'primary' : 'neutral'}
            aria-pressed={bulletPoints}
            onClick={() => setBulletPoints((bool) => !bool)}
          >
            <FormatListBulleted />
          </IconButton>
          <IconButton
            variant={link ? 'soft' : 'plain'}
            color={link ? 'primary' : 'neutral'}
            aria-pressed={link}
            onClick={() => setLink((bool) => !bool)}
          >
            <Link />
          </IconButton>
          </Box>
          }
          sx={{
            minWidth: 300,
            fontWeight,
            fontStyle: italic ? 'italic' : 'initial',
            textDecoration: underline ? 'underline' : 'initial',
            listStyleType: bulletPoints ? 'disc' : 'none',
          }}
        />
        {error.companyVision && (
          <FormHelperText>
            <InfoOutlined /> {error.companyVision}
          </FormHelperText>
        )}
      </FormControl>
    </Box>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
        justifyItems: 'flex-start',
      }}
    >
      <Box>
        <Button
          variant="solid"
          sx={{
            display: 'block',
            width: '200px',
            padding: '10px 0',
            borderRadius: '15px',
            backgroundColor: '#FFFFFF',
            color: '#0071FF',
            border: '1px solid #A9A9A9',
            fontWeight: 500,
            fontSize: '15px',
            cursor: 'pointer',
            transition: 'all .3s ease',
            '&:hover': {
              backgroundColor: '#f0f0f0',
            },
          }}
        >
          <FontAwesomeIcon icon={faCircleArrowLeft} size="lg" /> Previous
        </Button>
      </Box>
      <Box>
        <Button
          variant="solid"
          sx={{
            display: 'block',
            width: '200px',
            padding: '10px 0',
            borderRadius: '15px',
            backgroundColor: '#0071FF',
            color: '#fff',
            fontWeight: 500,
            fontSize: '15px',
            cursor: 'pointer',
            transition: 'all .3s ease',
            '&:hover': {
              backgroundColor: '#005DD1',
            },
          }}
          onClick={handleSubmit2}
        >
          Save and Next <FontAwesomeIcon icon={faCircleArrowRight} size="lg" />
        </Button>
        </Box>
    </Box>
    </Box>
  </Box>
  
          </TabPanel>

          
        <TabPanel value="3">
          <Box
          sx={{
            display:'grid',
            gridTemplateColumns:'40% 60%',
            gap:'3',
            border:2,
            borderRadius:3,
            boxShadow:3,
            pb:6,
            overflow: 'auto',
            maxHeight: 'calc(100vh-10px)',
          }}
          >
            <Box
            sx={{
              pl:2,
              pr:2,
              pt:2,
              display:'flex',
              flexDirection:'column'
             }}
            >
               <Box
             sx={{
               display:'flex',
               alignItems:'center',
               flexDirection:'column',
             }}
            >
              <div>
              <img src="../../public/logo.png" alt="" style={{height:'40px'}}/>
              </div>
              <div>
              <p>Where Talents meets Opportunity</p>
              </div>
            </Box>
            <Box
              sx={{
                display:'flex',
                mt:2,
                flexGrow: 1,
                
                }}
            >
            <img src="../../public/Social_media.jpg" alt="" style={{ borderRadius: '20px',height:'100%',objectFit: 'cover'}} />
            </Box> 
            </Box>
           
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '40px', pt: 12, alignItems: 'center' }}>
          {links.map((link, index) => (
            <Box
            key={index} sx={{ width: '100%',paddingLeft:10 }}
            >
               <p>Social Link {index + 1}</p>
          <Box
          key={index}
          sx={{
            display: 'flex',
            alignItems: 'center',
            border: '1px solid #ccc',
            borderRadius: '4px',
            padding: '5px',
            width: '90%',
          }}
          >
            
          <Select
            value={link.platform}
            onChange={(event) => handleSocialChange(index, event)}
            style={{ 
              marginRight: '5px', 
              width: '150px', 
              padding: '5px', 
              borderRadius: '4px', 
              backgroundColor: 'white', // Set background color
              // color: 'black', // Set text color
              border: '1px solid #ccc' // Set border color
            }}
          >
            <Option value="Facebook"><box-icon name='facebook-circle' type='logo' color='#1877f2'></box-icon> Facebook</Option>
            <Option value="Instagram"><box-icon name='instagram' type='logo' color='#E1306C'></box-icon> Instagram</Option>
            <Option value="YouTube"><box-icon name='youtube' type='logo' color='#FF0000'></box-icon> YouTube</Option>
            <Option value="Linkedin"><box-icon name='linkedin-square' type='logo' color='#0077B5'></box-icon> Linkedin</Option>
          </Select>

        
          <TextField
            type="text"
            placeholder="Profile link/url..."
            value={link.url}
            onChange={(event) => handleUrlChange(index, event)}
            variant="outlined"
            sx={{ flexGrow: 1, marginRight: '5px' }}
            InputProps={{
              sx: { paddingRight: '10px', borderRadius: '10px' },
            }}
          />
          <IconButton onClick={() => handleCancel(index)}>
            <FontAwesomeIcon icon={faCircleXmark} size="xl" style={{ color: "#ff4747" }} />
          </IconButton>
        </Box>
         </Box>
      ))}
      <Button variant="solid" onClick={handleAddLink}>Add Another Link</Button>
        
      <Box
              sx={{
                display:'flex',
                flexDirection:'row',
                gap:'10px',
                justifyItems:'flex-start'
              }}
            >
              <Box>
              <Button
        variant="contained"
        sx={{
        
          display: 'block',
          width: '200px',
          padding: '10px 0',
          borderRadius: '15px',
          backgroundColor: '#FFFFFF',
          color:'#0071FF',
          border:'1px solid #A9A9A9',
          // color: '#fff',
          fontWeight: 500,
          fontSize: '15px',
          cursor: 'pointer',
          transition: 'all .3s ease',
          '&:hover': {
            backgroundColor: '#f0f0f0',
          },
        }}
        
      >
       <FontAwesomeIcon icon={faCircleArrowLeft} size="lg" /> Previous  
      </Button>
              </Box>
              <Box>
              <Button
        variant="contained"
        sx={{
        
          display: 'block',
          width: '200px',
          padding: '10px 0',
          borderRadius: '15px',
          backgroundColor: '#0071FF',
          color: '#fff',
          fontWeight: 500,
          fontSize: '15px',
          cursor: 'pointer',
          transition: 'all .3s ease',
          '&:hover': {
            backgroundColor: '#005DD1',
          },
        }}
        onClick={haddlesubmit3}
      >
       Save and Next   <FontAwesomeIcon icon={faCircleArrowRight} size="lg" />
      </Button>
              </Box>
           
            </Box>

          </Box>
          </Box>
          
        </TabPanel>


      <TabPanel value="4">
      <Box
          sx={{
            display:'grid',
            gridTemplateColumns:'40% 60%',
            gap:'3',
            border:2,
            borderRadius:3,
            boxShadow:3,
            pb:7,
            overflow: 'auto',
            maxHeight: 'calc(100vh-10px)',
           
          }}
          >
            <Box
            sx={{
              pl:2,
              pr:2,
              pt:2,
              display:'flex',
              flexDirection:'column'
             }}
            >
               <Box
             sx={{
               display:'flex',
               alignItems:'center',
               flexDirection:'column',
             }}
            >
              <div>
              <img src="../../public/logo.png" alt="" style={{height:'40px'}}/>
              </div>
              <div>
              <p>Where Talents meets Opportunity</p>
              </div>
            </Box>
            <Box
              sx={{
                display:'flex',
                mt:2,
                flexGrow: 1,
                
                }}
            >
            <img src="../../public/contactus.jpg" alt="" style={{ borderRadius: '20px',height:'100%',objectFit: 'cover'}} />
            </Box> 
            
            </Box>
            
            <Box
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '40px', 
              pt: 12, 
              pb:6,
              alignItems: 'center',}}
            >
              <Box
              sx={{
                width:'80%',
              }}              
              >
              <FormControl error={Boolean(error.location)}>
              <FormLabel
               style={{
                marginBottom:5
              }}
              >
              Location
              </FormLabel>
              <Input
              placeholder="Company Location"
              value={formData.location}
              onChange={handleInputChange}

              startDecorator={
              <Button variant="soft" color="neutral" startDecorator={<LocationOn />}>
              Locate
              </Button>
                }
              sx={{ width:'100%' }}
              />
              {error.location && (
                <FormHelperText>
                  <InfoOutlined /> {error.location}
                </FormHelperText>
              )}

              </FormControl>
              </Box>
              
              <Box
               sx={{
                width:'80%',
              }} 
              >
                 <FormControl error={Boolean(error.contactNumber)}>
              <FormLabel
                style={{
                  marginBottom:5
                }}
              >
              Contact Number
              </FormLabel>
              <Input
              placeholder="Company Contact Number"
              value={formData.contactNumber}
              onChange={handleInputChange}
              startDecorator={
              <Button variant="soft" color="neutral"
                startDecorator={
                <Avatar 
                src="../../public/sri-lanka.png" 
                size="lg"
                sx={{ width: 24, height: 24 }} 
              />}>
              +94
              </Button>
                }
              sx={{ width:'100%'}}
              />
               {error.contactNumber && (
                <FormHelperText>
                  <InfoOutlined /> {error.contactNumber}
                </FormHelperText>
              )}
              </FormControl>
              </Box>
              
              <Box
              sx={{
                width:'80%',
              }}
              >
                <FormControl error={Boolean(error.Email)}>
              <FormLabel
               style={{
                marginBottom:5
              }}
              >
                Email
              </FormLabel>
              <Input
              placeholder="Company Email"
              value={formData.Email}
              onChange={handleInputChange}
              startDecorator={
              <Button variant="soft" color="neutral"
                startDecorator={<MailIcon />}>
              
              </Button>
                }
              sx={{ width:'100%' }}
              />
               {error.Email && (
                <FormHelperText>
                  <InfoOutlined /> {error.Email}
                </FormHelperText>
              )}
              </FormControl>
              </Box>
              <Box
                sx={{
                  pt:3
                }}
              >
              <Box
              sx={{
                display:'flex',
                flexDirection:'row',
                gap:'10px',
                justifyItems:'flex-start'
              }}
            >
              <Box>
              <Button
        variant="contained"
        sx={{
        
          display: 'block',
          width: '200px',
          padding: '10px 0',
          borderRadius: '15px',
          backgroundColor: '#fff',
          color:'#0071FF',
          border:'1px solid #A9A9A9',
          // color: '#fff',
          fontWeight: 500,
          fontSize: '15px',
          cursor: 'pointer',
          transition: 'all .3s ease',
          '&:hover': {
            backgroundColor: '#f0f0f0',
          },
        }}
        
      >
       <FontAwesomeIcon icon={faCircleArrowLeft} size="lg" /> Previous  
      </Button>
              </Box>
              <Box>
              <Button
        variant="contained"
        sx={{
        
          display: 'block',
          width: '200px',
          padding: '10px 0',
          borderRadius: '15px',
          backgroundColor: '#0071FF',
          color: '#fff',
          fontWeight: 500,
          fontSize: '15px',
          cursor: 'pointer',
          transition: 'all .3s ease',
          '&:hover': {
            backgroundColor: '#005DD1',
          },
        }}
        onClick={handleSubmit4}
      >
       Save and Next   <FontAwesomeIcon icon={faCircleArrowRight} size="lg" />
      </Button>
              </Box>
           
            </Box>
              </Box>
            </Box>
            
            </Box>
        
        </TabPanel>
      </TabContext>
    </Box>
    
  );
}
