import React, { useEffect, useState } from 'react'
import './Profile.css'
import ProfileSideBar from './ProfileSideBar'
import { Button, Typography } from '@mui/material'
import DynamicRenderer from './DynamicRenderer'
import {Edit} from '@mui/icons-material';

function Profile() {
  const [profile, setProfile] = useState(null)
  const [mobileNO, setMobileNO] = useState('')
  const [email, setEmail] = useState('')
  const [gotProfileInfo, setGotProfileInfo] = useState(false);
  useEffect(() => {
    fetch('http://localhost:8080/sdavis92')
      .then((response) => response.json())
      .then((data) => {
          setProfile(data);
          console.log(data);
          setGotProfileInfo(true);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [])


  return (
    <div className='profile-container'>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        borderBottom: '1px solid grey',
        marginTop: '16px',
        marginBottom: '16px',
      }}>
        <Typography variant='h5' gutterBottom style={{
          marginRight: '30%'
        }}>{profile['username']}</Typography>
        <Button 
        variant="contained"
        color="primary"
        startIcon={<Edit />}
        style={{marginLeft: '10px', alignSelf: 'flex-start', justifySelf: 'center'}}>Edit</Button>
      </div>
      
      {gotProfileInfo &&(
        <div className='profile-content'>
          <DynamicRenderer data={profile}/>
        </div>
      )}
      
    </div>
  )
}

export default Profile