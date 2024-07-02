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

function SeeHouses() {
  const [cookies] = useCookies(['accessToken']);
  const [houses, setHouses] = useState([]);
  const [error, setError] = useState(null);

  const fetchHouses = async () => {
    console.log("Access Token:", cookies.accessToken);

    try {
      const response = await fetch("http://localhost:8086/houses", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${cookies.accessToken}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setHouses(data);
        console.log(data);
      } else {
        console.error("Failed to fetch houses:", response.statusText);
        setError(`Failed to fetch houses: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setError(`Error: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchHouses();
  }, []);

  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <MKBox component="section" py={12} minHeight="70vh">
        <Container>
          <Grid container item justifyContent="center" xs={10} lg={9} mx="auto" textAlign="center">
            <MKTypography variant="h3" mb={1}>
              Houses
            </MKTypography>
          </Grid>
          <Grid container item xs={12} lg={12} sx={{ mx: "auto" }}>
            <TableContainer >
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <div>
                  <TableHead>
                    <TableRow>
                      <TableCell align="left" sx={{minWidth: 150, maxWidth: 150}}>Status</TableCell>
                      <TableCell align="left" sx={{minWidth: 150, maxWidth: 150}}>Heating Type</TableCell>
                      <TableCell align="left" sx={{minWidth: 150, maxWidth: 150}}>Price</TableCell>
                      <TableCell align="left" sx={{minWidth: 150, maxWidth: 150}}>Area</TableCell>
                      <TableCell align="left" sx={{minWidth: 150, maxWidth: 150}}>Living Rooms</TableCell>
                      <TableCell align="left" sx={{minWidth: 150, maxWidth: 150}}>Bedrooms</TableCell>
                      <TableCell align="left" sx={{minWidth: 150, maxWidth: 150}}>Building Age</TableCell>
                      <TableCell align="left" sx={{minWidth: 150, maxWidth: 150}}>Detailed Residential Type</TableCell>
                      <TableCell align="left" sx={{minWidth: 150, maxWidth: 150}}>Floor Location</TableCell>
                    </TableRow>
                  </TableHead>
                </div>
                <div>
                  <TableBody>
                    {houses.map((house) => (
                      <TableRow key={house.id}>
                        <TableCell align="left" sx={{minWidth: 150, maxWidth: 150}}>{house.status}</TableCell>
                        <TableCell align="left" sx={{minWidth: 150, maxWidth: 150}}>{house.heatingType}</TableCell>
                        <TableCell align="left" sx={{minWidth: 150, maxWidth: 150}}>{house.price}</TableCell>
                        <TableCell align="left" sx={{minWidth: 150, maxWidth: 150}}>{house.area}</TableCell>
                        <TableCell align="left" sx={{minWidth: 150, maxWidth: 150}}>{house.livingRooms}</TableCell>
                        <TableCell align="left" sx={{minWidth: 150, maxWidth: 150}}>{house.bedrooms}</TableCell>
                        <TableCell align="left" sx={{minWidth: 150, maxWidth: 150}}>{house.buildingAge}</TableCell>
                        <TableCell align="left" sx={{minWidth: 150, maxWidth: 150}}>{house.detailedResidentialType}</TableCell>
                        <TableCell align="left" sx={{minWidth: 150, maxWidth: 150}}>{house.floorLocation}</TableCell>
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

export default SeeHouses;
