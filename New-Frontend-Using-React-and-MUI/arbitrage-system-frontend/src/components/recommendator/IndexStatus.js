import React, {useState} from 'react'
import { Card, CardContent, CardHeader, Typography, IconButton } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
function IndexStatus({data}) {
    const [expanded, setExpanded] = useState(false);
    const handleCardClick = () => {
        setExpanded(!expanded);
    };
  return (
    <Card variant="outlined"
    style={{
        padding: 5,
        marginBottom: 16,
        margin: 10,
        display: 'flex',
        flexDirection: 'column',
        height: expanded ? 'auto' : '55px',
        transition: 'height 0.3s',
        cursor: 'pointer',
        width: '50%'
    }}
    onClick={handleCardClick}>
        <CardHeader 
        title={
        <Typography variant='h6'>{data['index']}</Typography>
        }
        action={
            <IconButton onClick={handleCardClick}>
              {!expanded && (<ExpandMoreIcon />)}
              {expanded && (<ExpandLessIcon />)}
            </IconButton>
          }
        >
            
        </CardHeader>
            <CardContent style={{
                flex: 1,
                // overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: 20
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    // gap: 20
                }}>
                    <Typography variant='h8' style={{
                        color: 'grey',

                    }}>Price (INR)</Typography>
                    <Typography variant='h8'>{data['currentPrice']}</Typography>
                </div>

                {/* <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    // gap: 20
                }}>
                    <Typography variant='h7' style={{
                        color: 'grey',

                    }}>Last Updated Time</Typography>
                    <Typography variant='h7'>{data['lastUpdatedTime']}</Typography>
                </div>    */}
            </CardContent>
        
    </Card>
  )
}

export default IndexStatus