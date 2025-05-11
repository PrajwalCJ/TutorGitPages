import { Container, Typography, Box, Paper } from "@mui/material";

const TermsAndConditions = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Terms & Conditions
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                    Last updated on 11-05-2025
                </Typography>

                <Box sx={{ mt: 2 }}>
                    <Typography variant="body1" paragraph>
                        These Terms and Conditions, along with the privacy policy or other terms (“Terms”), constitute a binding agreement by and between PRAJWAL CHAGACHAGERE JAGADEESHA, ( “Website Owner” or
                        “we” or “us” or “our”) you (“you” or “your”) regarding the use of our website, goods, or services (“Services”).
                    </Typography>

                    <Typography variant="body1" paragraph>
                        By using our website and availing the Services, you agree that you have read and accepted these Terms (including the Privacy Policy). We reserve the right to modify these Terms at any time without assigning any reason. It is your responsibility to periodically review these Terms.
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        Terms of Use:
                    </Typography>
                    <Typography variant="body1" paragraph align="left">
                        - You agree to provide true, accurate, and complete information during registration and are responsible for all acts done through your registered account.
                    </Typography>
                    <Typography variant="body1" paragraph align="left">
                        - We do not guarantee the accuracy, completeness, or suitability of the information and exclude liability to the fullest extent permitted by law.
                    </Typography>
                    <Typography variant="body1" paragraph align="left">
                        - Your use of the website and Services is at your own risk, and you are responsible for assessing their suitability.
                    </Typography>
                    <Typography variant="body1" paragraph align="left">
                        - All website content is proprietary, and you have no claim to intellectual property rights.
                    </Typography>
                    <Typography variant="body1" paragraph align="left">
                        - Unauthorized use of the website may lead to action as per applicable laws.
                    </Typography>
                    <Typography variant="body1" paragraph align="left">
                        - Payments made for Services are non-refundable except as per the refund policy.
                    </Typography>
                    <Typography variant="body1" paragraph align="left">
                        - The website may contain third-party links governed by their respective policies.
                    </Typography>
                    <Typography variant="body1" paragraph align="left">
                        - Upon initiating a transaction, you enter a legally binding contract with us.
                    </Typography>
                    <Typography variant="body1" paragraph align="left">
                        - Refund claims must be made within the stipulated timeframe as per our policies.
                    </Typography>
                    <Typography variant="body1" paragraph align="left">
                        - We are not liable for failures due to force majeure events.
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        Governing Law & Jurisdiction:
                    </Typography>
                    <Typography variant="body1" paragraph>
                        These Terms are governed by the laws of India, and disputes shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        Contact Information:
                    </Typography>
                    <Typography variant="body1" paragraph>
                        For concerns regarding these Terms, please contact us using the information provided on our website.
                    </Typography>
                </Box>
            </Paper>
        </Container>
    );
};

export default TermsAndConditions;
