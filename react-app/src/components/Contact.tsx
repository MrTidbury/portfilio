import React from 'react';
import '../assets/styles/Contact.scss';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';

function Contact({parentToChild}: any) {
  const {mode} = parentToChild || {mode: 'dark'};
  const isDarkMode = mode === 'dark';

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <div style={{ textAlign: 'center', paddingTop: '30px' }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<EmailIcon />}
              href="mailto:mrtidbury@gmail.com"
              sx={{
                backgroundColor: isDarkMode ? '#5000ca' : '#5000ca',
                color: 'white !important',
                padding: '12px 30px',
                fontSize: '1.1rem',
                '&:hover': {
                  backgroundColor: isDarkMode ? '#3d00a0' : '#6b1fff',
                  color: 'white !important',
                },
                '& svg': {
                  color: 'white !important',
                },
                boxShadow: isDarkMode ? 'none' : '0px 2px 4px rgba(0,0,0,0.1)',
              }}
            >
              Send Email
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;