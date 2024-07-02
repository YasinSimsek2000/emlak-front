/* eslint-disable */

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import routes from "routes";
import footerRoutes from "footer.routes";
import MKInput from "components/MKInput";


function Profile() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        sticky
      />
      <MKBox component="section" py={12} minHeight="70vh">
        <div>
        </div>
        <Container>
          <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
            <MKTypography variant="h3" mb={1}>
              Business Profile
            </MKTypography>
          </Grid>
          <Grid container item xs={12} lg={7} sx={{ mx: "auto" }}>
            <MKBox width="100%" component="form" method="post" autocomplete="off">
              <MKBox p={3}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput variant="standard" label="First Name" fullWidth />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput variant="standard" label="Last Name" fullWidth />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput variant="standard" type="email" label="Email Address" fullWidth />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput variant="standard" label="Password" fullWidth />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput variant="standard" label="Business Name" fullWidth />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput variant="standard" label="Phone" fullWidth />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput variant="standard" label="Fax" fullWidth />
                  </Grid>
                </Grid>
              </MKBox>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Profile;