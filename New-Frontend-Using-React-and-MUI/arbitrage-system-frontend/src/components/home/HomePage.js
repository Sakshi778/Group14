import React, {useState, useEffect} from 'react'
import { Container, Typography, Button, Grid, Paper } from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import { Navigate, useNavigate } from 'react-router-dom';
function HomePage() {
    const navigate = useNavigate()
//   return (
//     <div className='page-container'>
//         {/* <Container maxWidth="md" className=''>
//         <Typography variant="h4" className="title fade-in" gutterBottom>
//           Arbitrage Recommendation System
//         </Typography>
//         <Typography variant="body1" className="description fade-in" gutterBottom>
//           Welcome to the Arbitrage Opportunity Finder, your ultimate partner in unlocking hidden potential within the stock market. Our cutting-edge recommendation system empowers investors and traders with the insights they need to capitalize on arbitrage opportunities between the National Stock Exchange (NSE) and the Bombay Stock Exchange (BSE).
//         </Typography>
//         <Button variant="contained" color="primary" className="join-button">
//           Get Recommendations
//         </Button>
//       </Container> */}
      
//     </div>
//   )
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
    const element = document.querySelector('.animated-container');
    if (element) {
        const rect = element.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight);
    }
    };

    useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, []);

    const handleRecommend = () => {
        navigate('/home/recommender')
    }

    return (
        <div className='page-container'>
            <div className={`animated-container ${isVisible ? 'visible' : ''}`}>
                <div className="animated-content">
                    <Container maxWidth="md" className='content-container'>
                        <Typography variant="h2" className="title" gutterBottom>
                        Arbitrage Recommendation System
                        </Typography>
                        <Typography variant="body1" className="description" gutterBottom>
                        Welcome to the Arbitrage Opportunity Finder, your ultimate partner in unlocking hidden potential within the stock market. Our cutting-edge recommendation system empowers investors and traders with the insights they need to capitalize on arbitrage opportunities between the National Stock Exchange (NSE) and the Bombay Stock Exchange (BSE).
                        </Typography>
                        <Button variant="contained" color="primary" className="join-button" onClick={handleRecommend}>
                        Get Recommendations
                        </Button>
                    </Container>

                    <Container maxWidth="md" style={{
                        marginTop: 150,
                        marginBottom: 100
                    }}>
                        <Typography variant="h2" className="title" style={{
                            textAlign: 'center',
                        }} gutterBottom>
                        Our Mission
                        </Typography>
                        <Typography variant="body1" className="description" style={{
                            textAlign: 'left',
                        }} gutterBottom>
                        At Arbitrage Opportunity Finder, our mission is to revolutionize the way you navigate the intricate world of stock trading. We understand that timing is crucial in the world of finance, and that's why our platform is meticulously designed to identify and highlight fleeting arbitrage windows between NSE and BSE. Our goal is to provide you with real-time, data-driven recommendations that empower you to make informed decisions and optimize your investment strategies.
                        </Typography>
                    </Container>

                    <div className="key-features">
                    <Container maxWidth="md">
                        <Typography variant="h2" className="section-title" gutterBottom>
                        Key Features
                        </Typography>
                        <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Paper className="feature-card">
                            <div className="icon-container">
                                <UpdateIcon className="feature-icon" />
                            </div>
                            <Typography variant="h6" className="feature-title">
                                Real-time Insights
                            </Typography>
                            <Typography variant="body1">
                                Stay informed with real-time monitoring of price disparities and market inefficiencies on NSE and BSE.
                            </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Paper className="feature-card">
                            <div className="icon-container">
                            <QueryStatsIcon className="feature-icon" />
                            </div>
                            <Typography variant="h6" className="feature-title">
                                Data-Driven Accuracy
                            </Typography>
                            <Typography variant="body1">
                                Make informed decisions with recommendations grounded in data analysis and historical trends.
                            </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Paper className="feature-card">
                            <div className="icon-container">
                                <StayCurrentPortraitIcon className="feature-icon" />
                            </div>
                            <Typography variant="h6" className="feature-title">
                                User-Friendly Interface
                            </Typography>
                            <Typography variant="body1">
                                Seamlessly navigate our intuitive and user-friendly interface tailored to your trading style.
                            </Typography>
                            </Paper>
                        </Grid>
                        {/* Add more feature cards as needed */}
                        </Grid>
                    </Container>
                    </div>
                </div>
            </div>
        </div>
    
    );
}

export default HomePage