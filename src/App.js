import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, Box, Button, Card, CardActions, CardContent, Divider, Icon, Input, Link, TextField, Toolbar, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from './logo.jpeg';


let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff', // Adjust the primary color for dark mode
    },
    text: {
      primary: '#ffffff', // Set the text color for dark mode
    },
    typography: {
      h3: {
        fontSize: '1.2rem',
        '@media (min-width:600px)': {
          fontSize: '1.5rem',
        },
        '@media (min-width: 900px)': {
          fontSize: '1.4rem',
        },
      }
    }
 
  },
});

const Volunteer = () => {
  return (
    <>  
      <Box sx={{ position: "absolute", top: 200, width: "100% ", height: "100%", bgcolor: "#068FFF"}}>
          <Typography sx={{ textAlign: "center" }} variant='h3' color="white">Many of us take education for granted. In fact, it is a privilege that many in this country do not have access to.

Our organisation wants to change that. And with your help, we can help every child access quality education instead of being forced into poverty and child labour. 

Any talent you have - whether it is music, art, communication, planning or volunteering - is crucial to solve this problem. 

Fill out the volunteer form below to make a difference. After all, every vast ocean is comprised of single drops of water</Typography>
          {/* <Link sx={{ textAlign: "center", font}} href="#" underline="always">
            {'underline="always"'}
          </Link> */}
          <Typography sx={{ textAlign: "center"}} variant='h1' ><Link href='https://forms.office.com/Pages/ResponsePage.aspx?id=8uuQ2fYhVEOyZjxaFh1d9c9S5QeRmKlFkF7TETZ1HmFUQjlGT01QM1dRWVpCUVBGNTVaOE5LM1U1MC4u' underline='always'>Apply for being a organizer/teacher</Link></Typography>


      </Box>
    </>
  )
}
const About = () => {
  return (
  <Box sx={{ padding: 4, mt: 10 }}>
      <Typography variant='h5' color="white">About Us And Our Beginnings!</Typography>
      <Typography variant='h6' color="text.secondary">About EduCAN: child labour has turned into a cycle which doesn’t seem to be stopping. it’s a generation based cycle in which parents who didn’t receive a proper education in their time push their children into this field as well.Their childhood of learning has easily been exchanged for a childhood of earning.
 
 The steps: Tying up with local NGOs to provide these kids with an education.
  
 Teaching the parents about budgeting and how and where to invest their money.
 
 Spreading the importance of education in villages and rural areas in localities



 </Typography>
 <Typography variant='h6' color="text.secondary">EduCAN formation: when a group of young minds come together with the same passion of bringing about a change in the society. We believe in taking from the community and giving back to it.</ Typography>

  </Box>
  )
}

const ReachOut = () => {
  return (
    <>
      <Card sx={{ minWidth: 275, borderRadius: 2, pb: 10, pr: 20, mt: 20 }}>
        <CardContent>
          <Typography variant='h3' color="text.secondary" gutterBottom>
            Contact Us!
          </Typography>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            We're excited to meet you! 
          </Typography>
          <Typography variant="body2">
            <Link href="https://forms.microsoft.com/r/32BagYAuXf">Join us to be a part of the change</Link>
            <br />
            You can volunteer in various different roles, ranging from being a teacher to an event organizer to marketing!
            Spots are open and we could use your abilities! 

          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small"><a style={{ color: "white"}} href='https://www.instagram.com/project_educan/'> eduCAN's Instagram </a></Button>
          <Icon><InstagramIcon /></Icon>

        </CardActions>
      </Card>
    </>
  )
}

const Aims = () => {
  return (
    <>
      <Typography variant='h6' color="text.secondary"  component='div' sx={{ mt: 2, p: 0, fontSize: "46px", textAlign: "center"}}> 160 million children under the age of 13 are engaged in child labour. 60 million have not received an education past primary levels. You might see these as statistics of yet more global and social issues; however, one is the solution to the other.

Child labour is a vicious cycle. It yields nothing in terms of wages, so education is highly unaffordable. Uneducated individuals are unlikely to land suitably paying jobs, so they once again turn their children towards the unavoidable - child labour. <br />

We at EduCan aim to spread not only education to these communities, but also awareness. <br /> Cultural and social taboos, such as the caste system and resistance against education for the girl child form one of the primary causes for illiteracy in India. 

We know that alone, one can achieve anything, but together, we can achieve everything. That's why we aspire to partner with as many organisations, NGOs and individuals as possible to help those who may not have the opportunties to learn and grow mentally and physically. Join us and help to provide previously unknown opportunities to the talented youth of this planet </Typography>
    </>
    
  )
}
const Graph = () => {
   return (
    <>
      <Box sx={{ textAlign: "center", mt: 10 }} className="elementToFadeInAndOut">
        <Typography variant='h2' sx={{ color: "white" }} >160,000,000 kids are working under 13</Typography>
        <Divider />
        <Typography variant='h3' sx={{ color: "white", mt: 2}}>60,000,000 kids haven't received education after primary standards</Typography>
        <Divider />

        <Typography variant='h3' sx={{ color: "white", mt: 2, mb: 2 }}>Help us change that.</Typography>
        <Divider />

        <Box>
          <Button variant='contained' sx={{ mr: 2 }}>Volunteer as a teacher</Button>
          <Button variant='contained' sx={{ mr: 2 }}>Volunteer as a organizer</Button>
          <Button variant='contained'>Learn more!</Button>
        </Box>
      </Box>
    </>
  )
}

const B = () => {
  return (
    <>
     <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <TextField
        id="outlined-basic"
        label="How many kids under 13 are working intensively?"
        variant="outlined"
        sx={{ width: '500px', mb: 2 }}
      />
      <TextField
        id="outlined-basic"
        label="How many of them have gone to school at least once in their life?"
        variant="outlined"
        sx={{ width: '500px', mb: 2 }}
      />
      <Input
        disabled
        defaultValue="Press enter to submit"
        sx={{ color: 'white' }}
      />
      
   
    </Box>
    </>
  )
}


const A = () => {
  const [inputValue, setInputValue] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
         setInputValue(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      {inputValue ? <Graph /> : <B />}
    </>
  )
}

const MyComponent = () => {
  const [reachOut, setReachOut] = useState(false);
  const [aboutUs, setAboutUs] = useState(false);
  const [aims, setAims] = useState(false)
  const [volun, setVolun] = useState(false)
  const [show, setShow] = useState(true)
 
  const sdf = (ar) => {
    if (ar === "aim") {
      setAboutUs(false)
      setReachOut(false)
      setVolun(false)
      setAims(true)
      setShow(true)
    }
    if (ar === "reach") {
      setAboutUs(false)
      setReachOut(true)
      setVolun(false)
      setAims(false)


    }
    if (ar === "about") {
      setAboutUs(true)
      setReachOut(false)
      setVolun(false)
      setAims(false)


    }
    if (ar === "vietnam") {
      setAboutUs(false)
      setReachOut(false)
      setVolun(true)
      setShow(false)
      setAims(false)
    }
  
  }


  

  return (
    <ThemeProvider theme={theme}>
     <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography component="div" sx={{ flexGrow: 1 }}>
              <img src={logo} style={{ width: "100px", height: "100px", position: "relative"}}/>
            </Typography>
            <Button color="inherit" onClick={() => (sdf("reach"))}>Reach out</Button>
            <Button color="inherit" onClick={() => (sdf("about"))}>About us</Button>
            <Button color="inherit" onClick={() => (sdf("vietnam"))}>Volunteer</Button>
            <Button color="inherit" onClick={() => (sdf("aim"))}>Aims</Button>

          </Toolbar>
        </AppBar>
      </Box>
    <Typography variant='h2' sx={{ color: "white", textAlign: 'center', mt: 2 }}> Project eduCAN </Typography>
    <Typography variant='h2' sx={{ color: "white", textAlign: 'center', mt: 2, fontWeight: "bold" }}>Believing in the power of education </Typography>

    {aims && show ? <Aims /> : null}
    {!aims && show ? <A /> : null }
    {reachOut ? <ReachOut /> : null}
    {aboutUs ? <About /> : null }
    {volun ? < Volunteer /> : null}
    
    </ThemeProvider>
  );
};

export default MyComponent;

