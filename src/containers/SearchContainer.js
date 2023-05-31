import {useState} from 'react'
import { Stack, Tabs, Tab, Typography } from '@mui/material'
import BodyParts from "../components/BodyParts";
import Search from "../components/Search";
import { useGlobalContext } from '../context';

const SearchContainer = () => {
  const {danger, success} =useGlobalContext();
    const [selectedTab, setSelectedTab] = useState(0);
    const handleTabChange = (event, newValue) => {
      setSelectedTab(newValue);
    };
  return (
    <Stack alignItems={'center'} height={'300px'} justifyContent={'center'} spacing={'50px'}>
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab sx={{fontWeight: '500', fontSize: {'xs': '14px', 'sm':'20px'} }} label="Search by category" />
            <Tab sx={{fontWeight: '500', fontSize: {'xs': '14px', 'sm':'20px'}}} label="Search by name" />
          </Tabs>
          <Stack width={'100%'} alignItems={'center'} spacing={'5px'}>
          <Typography sx={{color: 'red', backgroundColor: 'rgba(0,0,0,0.5)',borderRadius: '5px', padding: '5px', display: danger?'block':'none'}}>No text provided, type something</Typography>
          <Typography sx={{color: 'green',backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '5px', display: success?'block':'none'}}>Data displayed succesfully</Typography>
          {selectedTab === 0 ? <BodyParts /> : <Search />}
          </Stack>
        </Stack>
  )
}

export default SearchContainer