import React from 'react'
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';



function SmallCard({ icon: Icon, heading, count}) {
    return (
      <Card size="lg" variant="soft" color='primary' invertedColors>
        <CardContent orientation="horizontal">
          <Icon sx={{ fontSize: 50 }} color='primary' />
          <CardContent>
            <Typography level="body-sm" color="danger">{heading}</Typography>
            <Typography level="h3">{count}</Typography>
          </CardContent>
        </CardContent>
      </Card>
    )
  }


export default SmallCard
