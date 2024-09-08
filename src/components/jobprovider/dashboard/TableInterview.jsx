import * as React from 'react';
import Table from '@mui/joy/Table';

export default function TableFooter({interviews}) {
  return (
    <Table borderAxis="both" size="lg">
      <thead>
        <tr>
          <th style={{ width: '30%' }}>Job Role</th>
          <th>Interview Date</th>
          <th>Time</th>
          <th>Duration</th>
          <th>Applicant Name</th>
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
              <td>{data.job.jobTitle}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5">No interviews available</td>
          </tr>
        )}
      </tbody>
      <tfoot>
        <tr>
          <th scope="row">Totals</th>
          <td>1,319</td>
          <td>50.7</td>
          <td>201</td>
          <td>22.5</td>
        </tr>
      </tfoot>
    </Table>
  );
}
