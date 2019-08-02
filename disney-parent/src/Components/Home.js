import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import TabPanel from './TabPanel';
import LinkTab from './LinkTab';
import AttractionsList from './AttractionsList';
import TicketList from './TicketList';
import CreateRequest from './Create';

export default function Home() {
  const [value, setValue] = useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function a11yProps(index) {
    return {
      id: `nav-tab-${index}`,
      'aria-controls': `nav-tabpanel-${index}`,
    };
  }

  return (
    <div>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}>

          <LinkTab label="Home" href="/home" {...a11yProps(0)} />
          <LinkTab label="Open Requests" href="/tickets" {...a11yProps(1)} />
          <LinkTab label="Main Attractions" href="/attractions" {...a11yProps(2)} />

        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <CreateRequest />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TicketList />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AttractionsList />
      </TabPanel>
    </div>

  )
};
