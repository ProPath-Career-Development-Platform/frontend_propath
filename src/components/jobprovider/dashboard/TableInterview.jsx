import * as React from 'react';
import { useState,useEffect } from 'react';
import Table from '@mui/joy/Table';
import Button from '@mui/joy/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { getUserIdFromToken } from '../../../utils/tokenUtils';
import Swal from 'sweetalert2';
import axios from 'axios';

const token = localStorage.getItem('token');

export default function TableFooter() {
  
  const userId = getUserIdFromToken();
  const [interviews ,setInterviews] = useState([]);

  const fetchInterviews = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/jobprovider/getInterviews/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setInterviews(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch interviews on component mount
  useEffect(() => {
    fetchInterviews();
  }, []);

  // When Hire or Reject is clicked, send interviewId, userId, and jobId as query parameters
  const handleViewClick = (interviews) => {
    const { user, id, job } = interviews;
  
    Swal.fire({
      title: `Interview with ${user ? user.name : 'Not yet booked'}`,
      html: `<p>Email: ${user ? user.email : 'Not available'}</p>`,
      showCancelButton: true,
      confirmButtonText: 'Hire',
      cancelButtonText: 'Reject',
      confirmButtonColor: '#3085d6', 
    cancelButtonColor: '#d33', 
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        // Hire action
        axios
          .put(
            `http://localhost:8080/jobprovider/interviews/updateStatusToHired?interviewId=${id}&userId=${user ? user.id : null}&jobId=${job ? job.id : null}`,
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
              },
            }
          )
          .then(() => {
            Swal.fire('Hired!', 'The candidate has been hired.', 'success');
            fetchInterviews();
          })
          .catch(() => {
            Swal.fire('Error!', 'There was an issue updating the interview status.', 'error');
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Reject action
        axios
          .put(
            `http://localhost:8080/jobprovider/interviews/updateStatusToReject?interviewId=${id}&userId=${user ? user.id : null}&jobId=${job ? job.id : null}`,
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
              },
            }
          )
          .then(() => {
            Swal.fire('Rejected!', 'The candidate has been rejected.', 'success');
            fetchInterviews();
          })
          .catch(() => {
            Swal.fire('Error!', 'There was an issue rejecting the candidate.', 'error');
          });
      }
      
    });
    fetchInterviews();
  };
  


  return (
    <Table borderAxis="both" size="lg">
      <thead>
        <tr>
          <th style={{ width: '25%' }}>Job Role</th>
          <th>Interview Date</th>
          <th>Time</th>
          <th>Duration</th>
          <th>Applicant Name</th>
          <th style={{ width: '10%' }}></th>
        </tr>
      </thead>
      <tbody>
        {interviews.length > 0 ? (
          interviews.map((data) => (
            <tr key={data.id}>
              <td>{data.job.jobTitle}</td>
              <td>{data.interviewDate}</td>
              <td>{data.timeSlot}</td>
              <td>{data.duration} mins</td>
              <td>{data.user ? data.user.name : "Not yet booked"}</td>
              <th>
              <Button
              sx={{
              mt: { md: 2 },
              width: { md: '100px' },
              backgroundColor: data.status === "CONDUCTED" ? 'green' : 'primary',
              color: data.status === "CONDUCTED" ? 'white' : 'white',
                }}
              startDecorator={data.status === "CONDUCTED" ? null : <VisibilityIcon />}
              onClick={() => {
              if (data.status === "CONDUCTED") {
              Swal.fire({
              title: 'Interview Conducted',
              text: 'This interview has already been conducted.',
              icon: 'info',
              confirmButtonText: 'OK',
              });
            } else {
            handleViewClick(data); // Run the existing function if not "CONDUCTED"
            }
            }}
              >
          {data.status === "CONDUCTED" ? "Conducted" : "View"}
          </Button>

              </th>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6">No interviews available</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}
