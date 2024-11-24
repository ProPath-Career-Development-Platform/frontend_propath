import React, { useEffect, useState } from 'react';
import { SurveyModel } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { useParams } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const ResponseView = ({ jobSeekerId, open, setOpen }) => {
    const { jobId } = useParams();
    const [surveyJson, setSurveyJson] = useState(null);
    const [response, setResponse] = useState(null);
    const [survey, setSurvey] = useState(null);
    const [text, setText] = useState(null);
    const [load, setLoad] = useState(true); // Loading state
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchJobAndApplicantData = async () => {
            try {
                // Fetch job data
                const jobResponse = await axios.get(`http://localhost:8080/jobprovider/job/${jobId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                const parsedSurveyData = JSON.parse(jobResponse.data.customizedForm);
                setSurveyJson(parsedSurveyData);

                // Fetch applicant data
                const applicantResponse = await axios.get(
                    `http://localhost:8080/jobprovider/job/${jobId}/applicant/${jobSeekerId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                const applicantResponseData = applicantResponse.data.response;
                setText(applicantResponseData);

                if (applicantResponseData !== 'form-not-found' && applicantResponseData !== 'no-response') {
                    const parsedResponse = JSON.parse(applicantResponseData);
                    setResponse(parsedResponse);
                    createSurveyModel(parsedSurveyData, parsedResponse);
                }
            } catch (err) {
                console.error('Error fetching data:', err);
                setText('error'); // Handle generic errors
            } finally {
                setLoad(false);
            }
        };

        fetchJobAndApplicantData();
    }, [jobId, jobSeekerId, token]);

    const createSurveyModel = (surveyJson, response) => {
        const surveyInstance = new SurveyModel(surveyJson);
        surveyInstance.mode = 'display';
        surveyInstance.data = response;
        setSurvey(surveyInstance);
    };

    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: { xs: '55%', sm: '50%' },
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        width: { xs: '90%', sm: 600, md: 800 },
        borderRadius: 2,
        boxShadow: 24,
        p: 4,
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                {load ? (
                    
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="h5" sx={{ mb: 2}}>
                            Please Wait...
                        </Typography>
                    <CircularProgress color="primary" />
                    </Box>
                ) : text === 'form-not-found' ? (
                    <>
                    <Typography variant="h5" sx={{ mb: 2 }}>
                        Form Not Found
                    </Typography>

                    <Typography variant="body1" sx={{ mb: 2 }}>
                        This job does not have a form attached to it.
                    </Typography>
                    
                    </>
                    
                ) : text === 'no-response' ? (
                   <>
                   
                    <Typography variant="h5" sx={{ mb: 2 }}>
                        No Response
                    </Typography>

                    <Typography variant="body1" sx={{ mb: 2 }}>
                        The applicant has not responded to this form.
                    </Typography>
                   </>
                ) 
                 : survey ? (
                  
                    <>
                        <Typography variant="h5" sx={{ mb: 2 }}>
                            Form Response
                        </Typography>
                        <Survey model={survey} />
                    </>
                ) : (

                    <>

                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="h5" sx={{ mb: 2}}>
                            Please Wait...
                        </Typography>
                    <CircularProgress color="primary" />
                    </Box>
                    </>
                    
                )}
            </Box>
        </Modal>
    );
};

export default ResponseView;
