import React from 'react';
import dummyData from '../data.js';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';


export default function TicketList() {

  const list = dummyData.map((ride, index) => {
    return <Card key={index}>{ride.name}</Card>
  });

  return (
    <Box>
      {list}
    </Box>
  );
};
