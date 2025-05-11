import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Avatar, Button, FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox, TextField, Chip } from '@mui/material';
import Divider from '@mui/material/Divider';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import { useRef, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import TermsAndConditions from './terms&conditions';

const Home = () => {

    const navigate = useNavigate();
    const contactRef = useRef(null);

    // Ref for Contact Section
    const scrollToContact = () => {
        if (contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Checkbox state
    const [checkBoxState, setCheckBoxState] = useState({
        webOverview: true,
        servers: false,
        IIS: false,
        webApp: false,
        networking: false,
    });
    const { webOverview, servers, IIS, webApp, networking } = checkBoxState;

    // Input State
    const [inputData, setInputData] = useState({
        name: "",
        phone: "",
        email: "",
        schedule: ""
    });

    // Form User Inout
    const handleInputChange = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    }

    // Form Checkbox Selection
    const handleCheckBoxChange = (event) => {
        setCheckBoxState({
            ...checkBoxState, [event.target.name]: event.target.checked
        })
    }

    // Form Submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ inputData, checkBoxState }),
            });

            const result = await response.json();
            if (response.ok) {
                alert(result.message);
            } else {
                alert(`Error: ${result.message}`);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to submit form. Kindly reach out on Whatsapp!");
        }
    }




    return (
        <>
            {/* Define Routes */}
            <Routes>
                <Route path="/" />
                <Route path="/terms&conditions" element={<TermsAndConditions />} />
            </Routes>

            <Container>

                {/* Nav Bar */}
                <Box sx={{ mb: '20px' }}>
                    <AppBar position="sticky" color="transparent" sx={{ borderRadius: '5px' }}>
                        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

                            <Typography variant="h5" sx={{ fontWeight: '700' }}>
                                Tutor
                            </Typography>

                            <Box>
                                <Button variant="outlined" color="inherit" sx={{ mx: 1, fontSize: '12px' }}
                                    onClick={scrollToContact}
                                >
                                    Reach Me
                                </Button>
                                <Button variant="outlined" color="inherit" sx={{ mx: 1, fontSize: '12px' }}
                                    onClick={() => navigate("/terms&conditions")}
                                >
                                    Terms & Conditions
                                </Button>
                            </Box>

                        </Toolbar>
                    </AppBar>
                </Box>

                {/* About */}
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly', my: 10 }}>
                    <Box sx={{ width: '50%' }}>
                        <Avatar src="/ProfilePic.jpeg" sx={{ width: 200, height: 200, margin: 'auto' }} />
                    </Box>

                    <Box sx={{ width: '50%', margin: 'auto', paddingRight: 7 }}>
                        <Typography variant="body1">
                            Hello there, "I'm CJ!" <br />
                            Currently working as a Sr.Technical Engineer @Fiserv one of the Fortune 500 companies! <br />
                            My professional work is mostly troubleshooting Web Applications! <br />
                            Otherwise automation interests me!
                        </Typography>
                    </Box>
                </Box>

                <Divider variant='inset' />

                {/* Content */}
                <Box sx={{ p: '1em' }}>
                    <Box sx={{ p: '1em' }}>
                        <Typography variant="h6" align='left' sx={{ pb: 1 }}>
                            What's my goal?
                        </Typography>
                        <Typography variant="body2" align='left' sx={{ pl: 5 }}>
                            Most of the today's students are taught, how to write a program or queries, different types of SDLC, mutiple techonologies and practices. <br />
                            But I feel there is a gap, pretty mucha a large one, on the understanding of how things work on the real world and how those things taught are used in real  world. <br />
                            So, my goal here is to simply explain things in a broader way, which helps you connect the dots on how things actually work.
                        </Typography>
                    </Box>

                    {/* Form Section */}
                    <Box sx={{ p: '1em' }}>
                        <Typography variant="h6" align='left' sx={{ pb: 1 }}>
                            Topics
                        </Typography>

                        <form onSubmit={handleSubmit}>
                            <Box textAlign={'left'} sx={{ pl: 5 }}>
                                <FormControl component="fieldset" >
                                    <FormLabel sx={{ py: 2 }} component="legend">Choose your interests</FormLabel>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={webOverview} onChange={handleCheckBoxChange} name="webOverview" />
                                            }
                                            label="Web & DNS Overview"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={servers} onChange={handleCheckBoxChange} name="servers" />
                                            }
                                            label="Servers / Hypervisors / Virualization"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={IIS} onChange={handleCheckBoxChange} name="IIS" />
                                            }
                                            label="Internet Information Service - Windows Web Servers"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={webApp} onChange={handleCheckBoxChange} name="webApp" />
                                            }
                                            label="Web Application Workflow"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={networking} onChange={handleCheckBoxChange} name="networking" />
                                            }
                                            label="Networking Overview & Request - Response Capturing"
                                        />
                                        <FormControlLabel
                                            disabled
                                            control={
                                                <Checkbox name="docker" />
                                            }
                                            label="Docker coming soon!"
                                        />
                                    </FormGroup>

                                    <TextField
                                        sx={{ marginTop: 3 }}
                                        name="schedule"
                                        label="Preferred Schedule"
                                        placeholder='Ex: Mon, Thur: 09:00 - 10:00 AM'
                                        value={inputData.schedule}
                                        onChange={handleInputChange}
                                    />

                                    <TextField
                                        label="Full Name"
                                        name="name"
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        value={inputData.name}
                                        onChange={handleInputChange}
                                    />

                                    <TextField
                                        label="Phone Number"
                                        name="phone"
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        value={inputData.phone}
                                        onChange={handleInputChange}
                                        type="tel"
                                    />

                                    <TextField
                                        label="Email Address"
                                        name="email"
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        value={inputData.email}
                                        onChange={handleInputChange}
                                        type="email"
                                    />


                                    <Box sx={{ py: 2 }}>
                                        <Button sx={{ width: '40%' }} type='submit' variant="outlined">
                                            Request Details!
                                        </Button>
                                    </Box>

                                    <Typography variant="caption" color="textSecondary">
                                        Disclaimer: The content on this site/sessions is my personal teaching only and does not
                                        constitute legal or professional advice. Also, if there is a delay in response, kindly reach out on Whatsapp!
                                    </Typography>

                                </FormControl>
                            </Box>
                        </form>
                    </Box>
                </Box>

                <Divider variant='fullWidth' />

                {/* Footer / Contact */}
                <Box ref={contactRef} textAlign={'left'}>
                    <Typography variant="h6" sx={{ mt: 3, py: 1 }} textAlign={'left'}>Reach Me</Typography>

                    <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                        <PhoneIcon />
                        <Chip sx={{ ml: 2, px: 2 }} label="+91 7899533716" variant="outlined" />
                    </Box>
                    <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                        <EmailIcon />
                        <Chip sx={{ ml: 2, px: 2 }} label="prajwal.cj@outlook.com" variant="outlined" />
                    </Box>
                    <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                        <MapsHomeWorkIcon />
                        <Chip sx={{ ml: 2, px: 2 }} label="Based in Bengaluru" variant="outlined" />
                    </Box>
                </Box>

            </Container>
        </>
    )
}

export default Home;
