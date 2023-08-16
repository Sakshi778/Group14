import React from 'react';
import { Container, Typography, Link } from '@mui/material';
import './Footer.css'; // Import your CSS file
import { FormatBold } from '@mui/icons-material';

const Footer = ({ showFooter }) => {
  return (
    <footer className={`footer ${showFooter ? 'show-footer' : ''}`}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="white" align="center" 
        >
          &copy; {new Date().getFullYear()} Arbitrage Recommendation System.
        </Typography>
        <div className="footer-links">
          <Link href="/about" style={{
            color: 'white',
          }}>About Us</Link><br/>
          <Link href="/recommender" className='link-text' style={{
            color: 'white',
          }}>Recommender</Link>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
