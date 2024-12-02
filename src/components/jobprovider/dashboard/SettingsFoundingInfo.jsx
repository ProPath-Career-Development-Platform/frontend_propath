import React ,{useState,useEffect}from 'react'

import Stack from '@mui/joy/Stack';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import CardContent from '@mui/joy/CardContent'
import Box from '@mui/joy/Box';
import Input from '@mui/joy/Input';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import LanguageIcon from '@mui/icons-material/Language';
import Button from '@mui/joy/Button';
import Textarea from '@mui/joy/Textarea';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import axios from 'axios';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import Skeleton from '@mui/joy/Skeleton';
import Snackbar from '@mui/joy/Snackbar';
import Typography from '@mui/joy/Typography';

function SettingsFoundingInfo() {

  const jwtToken = localStorage.getItem('token');
  
  const [formData, setFormData] = useState({
    organizationType: '',
    industryType: '',
    yearOfEstablishment: '',
    companyWebsite: '',
    companyVision: ''
  })

  const [dataLoad, setDataLoad] = useState(true);
  const [formLoad,setFormLoad] = useState(false);
  const [resStat,setResStat] = useState(false);
  const [errorPut, setErrorPut] = useState(false);

  useEffect(()=> {

    //setDataLoad(true);

    axios.get('http://localhost:8080/jobprovider/company', {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }).then((response) => {

      
      setFormData(
        (prev) => ({
          ...prev,
          organizationType: response.data.organizationType,
          industryType:response.data.industryType,
          yearOfEstablishment: response.data.establishedDate,
          companyWebsite: response.data.companyWebsite,
          companyVision: response.data.companyVision,

        }));
        setDataLoad(false);
    }
    ).catch((error) => {
      console.error(error);
    });

  },[])


  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (errors[name]) {
      setErrors((prevState) => {
        const newErrors = { ...prevState };
        delete newErrors[name];
        return newErrors;
      });
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.organizationType) {
      newErrors.organizationType = 'Organization Type is required';
    }

    if (!formData.industryType) {
      newErrors.industryType = 'Industry Type is required';
    }

    if (!formData.yearOfEstablishment) {
      newErrors.yearOfEstablishment = 'Year of Establishment is required';
    }

    if (!formData.companyWebsite) {
      newErrors.companyWebsite = 'Company Website is required';
    }else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(formData.companyWebsite)) {
      newErrors.companyWebsite = 'Company Website is invalid';
    }

    if(!formData.companyVision){
      newErrors.companyVision = 'Company Vision is required';
    }

  return newErrors;


  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
     
    }else{
     // alert(JSON.stringify(formData));

      setFormLoad(true);

      const postData = {
        organizationType: formData.organizationType,
        industryType: formData.industryType,
        establishedDate: formData.yearOfEstablishment,
        companyWebsite: formData.companyWebsite,
        companyVision: formData.companyVision
      }

      try {
        const response = await axios.put('http://localhost:8080/jobprovider/settings/companyFoundingInfo', postData, {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            'Content-Type': 'application/json',
          },
        });
        console.log(response);
        setResStat(true);
      } catch (error) {
        console.error(error);
        setErrorPut(true);
      } finally {
        setFormLoad(false);
      }

    }


  }


  const resetForm = () => {
    setFormData(initialValues);
    setErrors({});
  }
  return (
    <>
    
    <Stack
        spacing={4}
        sx={{
          display: 'flex',
          maxWidth: '1000px',
          mx: 'auto',
          px: { xs: 2, md: 6 },
          py: { xs: 2, md: 3 },
        }}
      >
    <form
     onSubmit={handleSubmit}
    >
        <Card>
            
            <CardContent>

                <Box
                    sx={{
                        display: { xs: 'block', sm: 'grid',},
                        gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
                        gap: '1rem',
                        marginBottom: '1rem',  
                    }}
                >

                    <FormControl
                      sx={{
                        mb:{xs: 2, sm: 0}
                      }}

                      error={Boolean(errors.organizationType)}
                    >

                        <FormLabel>Organization Type</FormLabel>
                        <Skeleton loading={dataLoad}>
                        <Select 
                        name='organizationType' 
                        placeholder="Select a Type" 
                        value={formData.organizationType}

                        onChange={(event, newValue) => { 

                                  if (errors.organizationType) {
                                    setErrors((prevState) => {
                                      const newErrors = { ...prevState };
                                      delete newErrors.organizationType;
                                      return newErrors;
                                    });
                                  }

                                  setFormData({ ...formData, organizationType: newValue }); 

                                  }}

                        
                        >
                          <Option value="Public Limited Company (PLC)">Public Limited Company (PLC)</Option>
                          <Option value="Private Limited Company (PVT)">Private Limited Company (PVT)</Option>
                          <Option value="Government Agency">Government Agency</Option>
                          <Option value="Partnership">Partnership</Option>
                      </Select>
                      </Skeleton>


                      {errors.organizationType && (

                        <FormHelperText>
                          <InfoOutlined/> {errors.organizationType}
                        </FormHelperText>
                      )}

                    </FormControl>

                    <FormControl
                      sx={{
                        mb:{xs: 2, sm: 0}
                      }}

                      error={Boolean(errors.industryType)}
                    >

                        <FormLabel>Industry Type</FormLabel>
                        <Skeleton loading={dataLoad}>
                        <Select 
                        name='industryType' 
                        placeholder="Select a Type" 
                        value={formData.industryType}
                        onChange={(event, newValue) => { 

                                  if (errors.industryType) {
                                    setErrors((prevState) => {
                                      const newErrors = { ...prevState };
                                      delete newErrors.industryType;
                                      return newErrors;
                                    });
                                  }

                                  setFormData({ ...formData, industryType: newValue }); 

                                  }}

                        
                        >
                           <Option value="Manufacturing">Manufacturing</Option>
                          <Option value="Software and Technology">Software and Technology</Option>
                          <Option value="Healthcare">Healthcare</Option>
                          <Option value="Education">Education</Option>
                          <Option value = "Transportation">Transportation</Option>
                      </Select>
                      </Skeleton>

                      {errors.industryType && (
                          
                          <FormHelperText>
                            <InfoOutlined/> {errors.industryType}
                          </FormHelperText>
                        
                      )}


                    </FormControl>



                    <FormControl
                      sx={{
                        mb:{xs: 2, sm: 0}
                      }}
                      error={Boolean(errors.yearOfEstablishment)}
                    >

                        <FormLabel>Year of Establishment</FormLabel>
                        <Skeleton loading={dataLoad}>
                        <Input
                         type='date'
                         name='yearOfEstablishment'
                         onChange={handleChange}
                         value={formData.yearOfEstablishment}
                         slotProps={{
                            input: {
                             
                              max: new Date().toISOString().split('T')[0],
                            },
                          }}
                          />
                        </Skeleton>

                      {errors.yearOfEstablishment && (

                        <FormHelperText>
                          <InfoOutlined/> {errors.yearOfEstablishment}
                        </FormHelperText>
                      )}                       


                    </FormControl>

                    <FormControl

                      error={Boolean(errors.companyWebsite)}
                    >

                        <FormLabel>Company Website</FormLabel>
                        <Skeleton loading={dataLoad}>
                        <Input
                          name='companyWebsite'
                          onChange={handleChange}
                          placeholder='https://www.example.com'
                          value={formData.companyWebsite}
                          startDecorator={<Button disabled><LanguageIcon/></Button>}
                          />
                        </Skeleton>
                        
                        {errors.companyWebsite && (

                          <FormHelperText>
                            <InfoOutlined/> {errors.companyWebsite}
                          </FormHelperText>

                        )}


                    </FormControl>

                </Box>

                <Box
                  sx={{

                  }}
                >

                    <FormControl

                      error={Boolean(errors.companyVision)}
                    >
                        
                          <FormLabel>Company Vision</FormLabel>
                          <Skeleton loading={dataLoad}>
                          <Textarea
                            name='companyVision'
                            minRows={5}
                            maxRows={4}
                            onChange={handleChange}
                            placeholder='Write a brief description about your company'
                            value={formData.companyVision}
                            />
                          </Skeleton>

                            {errors.companyVision && (
                                
                                <FormHelperText>
                                  <InfoOutlined/> {errors.companyVision}
                                </FormHelperText>
  
                              
                            )}
                    </FormControl>

                </Box>




            </CardContent>

                <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
            <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
              <Button disabled={dataLoad || formLoad} onClick={resetForm} size="sm" variant="outlined" color="neutral">
                Cancel
              </Button>
              <Button disabled={dataLoad} loading={formLoad} type="submit" size="sm" variant="solid">
                Save
              </Button>
            </CardActions>
       
          </CardOverflow>

        </Card>
    </form>   

    </Stack>

    <React.Fragment>

                 

                  <Snackbar
                    variant="soft"
                    color="success"
                    open={resStat}
                    onClose={() => setResStat(false)}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    startDecorator={<CheckCircleOutlineIcon />}
                    endDecorator={
                      <Button
                        onClick={() =>  setResStat(false)}
                        size="sm"
                        variant="soft"
                        color="success"
                      >
                        Dismiss
                      </Button>
                    }
                  > 
                    <Box sx={{display: 'flex' , flexDirection:'column'}}>

                    Company Founding Info Updated
                    </Box>
                  </Snackbar>

                  <Snackbar
                    variant="soft"
                    color="warning"
                    open={errorPut}
                    onClose={() => setErrorPut(false)}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    startDecorator={<WarningAmberIcon />}
                    endDecorator={
                      <Button
                        onClick={() =>setErrorPut(false)}
                        size="sm"
                        variant="soft"
                        color="warning"
                      >
                        Dismiss
                      </Button>
                    }
                  > 
                    <Box sx={{display: 'flex' , flexDirection:'column'}}>

                    <Typography level='title-md' textAlign={'left'}>Error</Typography>
                    <Typography level='body-sm'>Please Try again later.</Typography>

                    
                    </Box>
                  </Snackbar>
                </React.Fragment>
    
    
    </>
  )
}

export default SettingsFoundingInfo