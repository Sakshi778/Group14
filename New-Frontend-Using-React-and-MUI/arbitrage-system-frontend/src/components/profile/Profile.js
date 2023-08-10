import React, { useEffect, useState } from 'react'
import './Profile.css'
import ProfileSideBar from './ProfileSideBar'
import { Button, Typography } from '@mui/material'
import DynamicRenderer from './DynamicRenderer'
import {Edit} from '@mui/icons-material';

function Profile() {
  const [profile, setProfile] = useState(null)
  const [mobileNo, setMobileNo] = useState('')
  const [email, setEmail] = useState('')
  const [isEditingCont, setIsEditingCont] = useState(false)
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('')
  const [pinCode, setPinCode] = useState('')
  const [insEditingAd, setEditingAd] = useState(false);
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
        <Typography variant='h4' gutterBottom style={{
          marginRight: '30%'
        }}>Profile</Typography>
      </div>
      
      {gotProfileInfo &&(
        <div className='profile-content'>
          <div className='profile-content-indiv'>
            <Typography variant='h6' gutterBottom style={{
              
            }}>Account Information</Typography>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 100
            }}>
              <Typography variant='p' style={{
                fontSize: '15px',
                color: 'grey'
              }}>Username</Typography>
              <Typography variant='p' style={{
                fontSize: '15px',
              }}>{profile.username}</Typography>
            </div>
          </div>

          <div className='profile-content-indiv'>
            <Typography variant='h6' gutterBottom>Personal Information</Typography>
            <div className='profile-content-box'>
              <div className='profile-content-title'>
                <Typography variant='p' style={{
                  fontSize: '15px',
                }}>Name</Typography>
                <Typography variant='p' style={{
                  fontSize: '15px',
                }}>Date of Birth</Typography>
                <Typography variant='p' style={{
                  fontSize: '15px',
                }}>Gender</Typography>
              </div>
              <div className='profile-content-values'>
                <Typography variant='p' style={{
                  fontSize: '15px',
                }}>{profile.name}</Typography>
                <Typography variant='p' style={{
                  fontSize: '15px',
                }}>{profile.birth_date}</Typography>
                <Typography variant='p' style={{
                  fontSize: '15px',
                }}>{profile.gender}</Typography>
              </div>
            </div> 
          </div>

          <div className='profile-content-indiv'>
            <Typography variant='h6' gutterBottom>Contact Information</Typography>
            <div className='profile-content-box'>
              <div className='profile-content-title'>
                <Typography variant='p' style={{
                  fontSize: '15px',
                }}>Mobile No.</Typography>
                <Typography variant='p' style={{
                  fontSize: '15px',
                }}>Email</Typography>
              </div>
              <div className='profile-content-values'>
                <Typography variant='p' style={{
                  fontSize: '15px',
                }}>{profile.mobile_no}</Typography>
                <Typography variant='p' style={{
                  fontSize: '15px',
                }}>{profile.email}</Typography>
              </div>
            </div> 
          </div>

          <div className='profile-content-indiv'>
            <Typography variant='h6' gutterBottom>Address Information</Typography>
            <div className='profile-content-box'>
              <div className='profile-content-title'>
                <Typography variant='p' style={{
                  fontSize: '15px',
                }}>Street</Typography>
                <Typography variant='p' style={{
                  fontSize: '15px',
                }}>Area</Typography>
                <Typography variant='p' style={{
                  fontSize: '15px',
                }}>City</Typography>
                <Typography variant='p' style={{
                  fontSize: '15px',
                }}>State</Typography>
                <Typography variant='p' style={{
                  fontSize: '15px',
                }}>Country</Typography>
                <Typography variant='p' style={{
                  fontSize: '15px',
                }}>PIN Code</Typography>
              </div>
              <div className='profile-content-values'>

                {/* <TextField
                  label="street"
                  margin="normal"
                  fullWidth
                  value={street}
                  disabled={!isEditing} // Disable the field when not in edit mode
                  onChange={(e) => setUsername(e.target.value)}
                /> */}

                <Typography variant='p' style={{
                  fontSize: '15px',
                }}>{profile.street}</Typography>
                <Typography variant='p' style={{
                  fontSize: '15px',
                }}>{profile.area}</Typography>
                <Typography variant='p' style={{
                  fontSize: '15px',
                }}>{profile.city}</Typography>
                <Typography variant='p' style={{
                  fontSize: '15px',
                }}>{profile.state}</Typography>
                <Typography variant='p' style={{
                  fontSize: '15px',
                }}>{profile.country}</Typography>
                <Typography variant='p' style={{
                  fontSize: '15px',
                }}>{profile.pin_code}</Typography>
              </div>
            </div> 
          </div>

          
        </div>
      )}
      
    </div>
  )
}

export default Profile