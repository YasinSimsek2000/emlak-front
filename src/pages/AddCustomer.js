/* eslint-disable */

import { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import routes from "routes";
import footerRoutes from "footer.routes";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function AddCustomer() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fax, setFax] = useState("");
  const navigate = useNavigate();
  const [cookies] = useCookies(['accessToken']);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newCustomer = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      phone: phone,
      fax: fax
    };

    // Debugging: Log the access token to ensure it is retrieved correctly
    console.log("Access Token:", cookies.accessToken);

    try {
      const response = await fetch("http://localhost:8086/persons/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${cookies.accessToken}`
        },
        body: JSON.stringify(newCustomer),
      });

      if (response.ok) {
        // Handle successful response
        console.log("Customer added successfully");
        navigate("/home"); // Navigate to home or another page after successful submission
      } else {
        // Handle error response
        const errorData = await response.json();
        console.error("Failed to add customer", errorData);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <MKBox component="section" py={12} minHeight="70vh">
        <Container>
          <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
            <MKTypography variant="h3" mb={1}>
              New Customer
            </MKTypography>
          </Grid>
          <Grid container item xs={12} lg={7} sx={{ mx: "auto" }}>
            <MKBox width="100%" component="form" method="post" autoComplete="off" onSubmit={handleSubmit}>
              <MKBox p={3}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label="First Name"
                      fullWidth
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label="Last Name"
                      fullWidth
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      type="email"
                      label="Email Address"
                      fullWidth
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label="Phone"
                      fullWidth
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label="Fax"
                      fullWidth
                      value={fax}
                      onChange={(e) => setFax(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} mt={3}>
                    <MKButton variant="contained" color="primary" type="submit" fullWidth>
                      Add Customer
                    </MKButton>
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

export default AddCustomer;
