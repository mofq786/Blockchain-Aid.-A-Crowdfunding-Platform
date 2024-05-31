import React from 'react';
import { Grid, Container, Typography, Link, Box} from '@mui/material';
import { LinkedIn, GitHub } from '@mui/icons-material';
import dev1 from "../assets/developer1.jpg";
import dev2 from "../assets/developer2.jpg";
import dev3 from "../assets/developer3.jpg";

const AboutUs = () => {
  const developers = [
    {
      name: 'MD Omar Farooq Qureshi',
      designation: 'Full Stack Developer',
      linkedIn: 'https://www.linkedin.com/in/johndoe/',
      github: 'https://github.com/johndoe',
      photo: dev1,
    },
    {
      name: 'Amaan Ali Khan',
      designation: 'Frontend Developer',
      linkedIn: 'https://www.linkedin.com/in/janedoe/',
      github: 'https://github.com/janedoe',
      photo: dev2,
    },
    {
      name: 'Mohammad Abubakar',
      designation: 'Backend Developer',
      linkedIn: 'https://www.linkedin.com/in/bobsmith/',
      github: 'https://github.com/bobsmith',
      photo: dev3,
    },
  ];

  return (
    <Box className="App" sx={{ background: "linear-gradient(to bottom right, #C70039  0%, #C70039  100%)" }}>
    <Container maxWidth="lg" style={{ paddingTop: '24px', paddingBottom: '24px', color: '#' }}>
      <Grid container spacing={4}>
        {developers.map((developer, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={developer.photo} alt={developer.name} style={{ borderRadius: '50%', width: 150, height: 150 }} />
              <Typography variant="h5" style={{ marginTop: '16px' }}>
                {developer.name}
              </Typography>
              <Typography variant="body2" style={{ marginBottom: '16px' }}>
                {developer.designation}
              </Typography>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Link href={developer.linkedIn} target="_blank" rel="noopener noreferrer" style={{ marginRight: '8px' }}>
                  <LinkedIn />
                </Link>
                <Link href={developer.github} target="_blank" rel="noopener noreferrer">
                  <GitHub />
                </Link>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
    </Box>
  );
};

export default AboutUs;
