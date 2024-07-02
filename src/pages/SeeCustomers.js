/* eslint-disable */

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import routes from "routes";
import footerRoutes from "footer.routes";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function SeeCustomers() {
  const [cookies] = useCookies(['accessToken']);
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    console.log("Access Token:", cookies.accessToken);

    try {
      const response = await fetch("http://localhost:8086/persons", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${cookies.accessToken}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setCustomers(data);
        console.log(data);
      } else {
        console.error("Failed to fetch customers:", response.statusText);
        setError(`Failed to fetch customers: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setError(`Error: ${error.message}`);
    }
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <MKBox component="section" py={12} minHeight="70vh">
        <Container>
          <Grid container item justifyContent="center" xs={10} lg={9} mx="auto" textAlign="center">
            <MKTypography variant="h3" mb={1}>
              Customers
            </MKTypography>
          </Grid>
          <Grid container item xs={12} lg={12} sx={{ mx: "auto" }}>
            <TableContainer >
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <div>
                  <TableHead>
                    <TableRow>
                      <TableCell align="left" sx={{minWidth: 150, maxWidth: 150}}>First Name</TableCell>
                      <TableCell align="left" sx={{minWidth: 200, maxWidth: 200}}>Last Name</TableCell>
                      <TableCell align="left" sx={{minWidth: 450, maxWidth: 450}}>Email</TableCell>
                      <TableCell align="left" sx={{minWidth: 150, maxWidth: 150}}>Phone</TableCell>
                      <TableCell align="left" sx={{minWidth: 150, maxWidth: 150}}>Fax</TableCell>
                    </TableRow>
                  </TableHead>
                </div>
                <div>
                  <TableBody>
                    {customers.map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="left" sx={{minWidth: 150, maxWidth: 150}}>{row.firstName}</TableCell>
                        <TableCell align="left" sx={{minWidth: 185, maxWidth: 150}}>{row.lastName}</TableCell>
                        <TableCell align="left" sx={{minWidth: 450, maxWidth: 450}}>{row.email}</TableCell>
                        <TableCell align="left" sx={{minWidth: 150, maxWidth: 150}}>{row.phone}</TableCell>
                        <TableCell align="left" sx={{minWidth: 150, maxWidth: 150}}>{row.fax}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </div>
              </Table>
            </TableContainer>
          </Grid>
        </Container>
      </MKBox>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default SeeCustomers;
