import React ,{useState}from 'react'

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

function SettingsFoundingInfo() {
  
  const [formData, setFormData] = useState({
    organizationType: '',
    industryType: '',
    yearOfEstablishment: '',
    companyWebsite: '',
    companyVision: ''
  })

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
     
    }else{
      alert(JSON.stringify(formData));
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
                        <Select 
                        name='organizationType' 
                        placeholder="Select a Type" 

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
                          <Option value="dog">Dog</Option>
                          <Option value="cat">Cat</Option>
                          <Option value="fish">Fish</Option>
                          <Option value="bird">Bird</Option>
                      </Select>


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
                        <Select 
                        name='industryType' 
                        placeholder="Select a Type" 

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
                          <Option value="dog">Dog</Option>
                          <Option value="cat">Cat</Option>
                          <Option value="fish">Fish</Option>
                          <Option value="bird">Bird</Option>
                      </Select>

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

                        <Input
                         type='date'
                         name='yearOfEstablishment'
                         onChange={handleChange}
                         slotProps={{
                            input: {
                             
                              max: new Date().toISOString().split('T')[0],
                            },
                          }}
                          />

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

                        <Input
                          name='companyWebsite'
                          onChange={handleChange}
                          placeholder='https://www.example.com'
                          startDecorator={<Button disabled><LanguageIcon/></Button>}
                          />
                        
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
  
                          <Textarea
                            name='companyVision'
                            minRows={5}
                            maxRows={4}
                            onChange={handleChange}
                            placeholder='Write a brief description about your company'
                            />

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
              <Button onClick={resetForm} size="sm" variant="outlined" color="neutral">
                Cancel
              </Button>
              <Button type="submit" size="sm" variant="solid">
                Save
              </Button>
            </CardActions>
       
          </CardOverflow>

        </Card>
    </form>   

    </Stack>
    
    
    </>
  )
}

export default SettingsFoundingInfo