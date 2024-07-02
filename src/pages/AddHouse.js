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
import {
  HeatingType,
  PropertyStatus,
  DetailedResidentialType,
  FloorLocation,
  Balcony,
  Elevator,
  Parking,
  Furnished,
  UsageStatus,
  InSite,
  Orientation,
  InternalFeatures,
  ExternalFeatures,
  NeighborhoodFeatures,
  Transportation,
  Landscape,
  ApartmentType,
} from "./Enum";
import MenuItem from "@mui/material/MenuItem";

function AddHouse() {
  const [personMail, setPersonMail] = useState("");
  const [status, setStatus] = useState("");
  const [heatingType, setHeatingType] = useState("");
  const [price, setPrice] = useState("");
  const [area, setArea] = useState("");
  const [livingRooms, setLivingRooms] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [buildingAge, setBuildingAge] = useState("");
  const [detailedResidentialType, setDetailedResidentialType] = useState("");
  const [floorLocation, setFloorLocation] = useState("");
  const [totalFloors, setTotalFloors] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [balcony, setBalcony] = useState("");
  const [elevator, setElevator] = useState("");
  const [parking, setParking] = useState("");
  const [furnished, setFurnished] = useState("");
  const [usageStatus, setUsageStatus] = useState("");
  const [inSite, setInSite] = useState("");
  const [orientation, setOrientation] = useState("");
  const [internalFeatures, setInternalFeatures] = useState("");
  const [externalFeatures, setExternalFeatures] = useState("");
  const [neighborhoodFeatures, setNeighborhoodFeatures] = useState("");
  const [transportation, setTransportation] = useState("");
  const [landscape, setLandscape] = useState("");
  const [apartmentType, setApartmentType] = useState("");
  const navigate = useNavigate();
  const [cookies] = useCookies(['accessToken']);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newHouse = {
      personMail,
      status,
      heatingType,
      price,
      area,
      livingRooms,
      bedrooms,
      buildingAge,
      detailedResidentialType,
      floorLocation,
      totalFloors,
      bathrooms,
      balcony,
      elevator,
      parking,
      furnished,
      usageStatus,
      inSite,
      orientation,
      internalFeatures,
      externalFeatures,
      neighborhoodFeatures,
      transportation,
      landscape,
      apartmentType,
    };

    // Debugging: Log the access token to ensure it is retrieved correctly
    console.log("Access Token:", cookies.accessToken);

    try {
      const response = await fetch("http://localhost:8086/houses/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${cookies.accessToken}`
        },
        body: JSON.stringify(newHouse),
      });

      if (response.ok) {
        console.log("House added successfully");
        navigate("/home"); // Navigate to home or another page after successful submission
      } else {
        const errorData = await response.json();
        console.error("Failed to add house", errorData);
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
              New House
            </MKTypography>
          </Grid>
          <Grid container item xs={12} lg={12} sx={{ mx: "auto" }}>
            <MKBox width="100%" component="form" method="post" autoComplete="off" onSubmit={handleSubmit}>
              <MKBox p={3}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <MKInput
                      variant="standard"
                      label="Person Email"
                      fullWidth
                      value={personMail}
                      onChange={(e) => setPersonMail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <MKInput
                      variant="standard"
                      label="Status"
                      select
                      fullWidth
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      {Object.values(PropertyStatus).map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </MKInput>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <MKInput
                      variant="standard"
                      label="Heating Type"
                      select
                      fullWidth
                      value={heatingType}
                      onChange={(e) => setHeatingType(e.target.value)}
                    >
                      {Object.values(HeatingType).map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </MKInput>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <MKInput
                      variant="standard"
                      label="Price"
                      type="number"
                      fullWidth
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <MKInput
                      variant="standard"
                      label="Area"
                      type="number"
                      fullWidth
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <MKInput
                      variant="standard"
                      label="Living Rooms"
                      type="number"
                      fullWidth
                      value={livingRooms}
                      onChange={(e) => setLivingRooms(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <MKInput
                      variant="standard"
                      label="Bedrooms"
                      type="number"
                      fullWidth
                      value={bedrooms}
                      onChange={(e) => setBedrooms(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <MKInput
                      variant="standard"
                      label="Building Age"
                      type="number"
                      fullWidth
                      value={buildingAge}
                      onChange={(e) => setBuildingAge(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <MKInput
                      variant="standard"
                      label="Detailed Residential Type"
                      select
                      fullWidth
                      value={detailedResidentialType}
                      onChange={(e) => setDetailedResidentialType(e.target.value)}
                    >
                      {Object.values(DetailedResidentialType).map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </MKInput>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <MKInput
                      variant="standard"
                      label="Floor Location"
                      select
                      fullWidth
                      value={floorLocation}
                      onChange={(e) => setFloorLocation(e.target.value)}
                    >
                      {Object.values(FloorLocation).map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </MKInput>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <MKInput
                      variant="standard"
                      label="Total Floors"
                      type="number"
                      fullWidth
                      value={totalFloors}
                      onChange={(e) => setTotalFloors(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <MKInput
                      variant="standard"
                      label="Bathrooms"
                      type="number"
                      fullWidth
                      value={bathrooms}
                      onChange={(e) => setBathrooms(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <MKInput
                      variant="standard"
                      label="Balcony"
                      select
                      fullWidth
                      value={balcony}
                      onChange={(e) => setBalcony(e.target.value)}
                    >
                      {Object.values(Balcony).map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </MKInput>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <MKInput
                      variant="standard"
                      label="Elevator"
                      select
                      fullWidth
                      value={elevator}
                      onChange={(e) => setElevator(e.target.value)}
                    >
                      {Object.values(Elevator).map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </MKInput>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <MKInput
                      variant="standard"
                      label="Parking"
                      select
                      fullWidth
                      value={parking}
                      onChange={(e) => setParking(e.target.value)}
                    >
                      {Object.values(Parking).map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </MKInput>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <MKInput
                      variant="standard"
                      label="Furnished"
                      select
                      fullWidth
                      value={furnished}
                      onChange={(e) => setFurnished(e.target.value)}
                    >
                      {Object.values(Furnished).map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </MKInput>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <MKInput
                      variant="standard"
                      label="Usage Status"
                      select
                      fullWidth
                      value={usageStatus}
                      onChange={(e) => setUsageStatus(e.target.value)}
                    >
                      {Object.values(UsageStatus).map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </MKInput>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <MKInput
                      variant="standard"
                      label="In Site"
                      select
                      fullWidth
                      value={inSite}
                      onChange={(e) => setInSite(e.target.value)}
                    >
                      {Object.values(InSite).map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </MKInput>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <MKInput
                      variant="standard"
                      label="Orientation"
                      select
                      fullWidth
                      value={orientation}
                      onChange={(e) => setOrientation(e.target.value)}
                    >
                      {Object.values(Orientation).map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </MKInput>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <MKInput
                      variant="standard"
                      label="Internal Features"
                      select
                      fullWidth
                      value={internalFeatures}
                      onChange={(e) => setInternalFeatures(e.target.value)}
                    >
                      {Object.values(InternalFeatures).map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </MKInput>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <MKInput
                      variant="standard"
                      label="External Features"
                      select
                      fullWidth
                      value={externalFeatures}
                      onChange={(e) => setExternalFeatures(e.target.value)}
                    >
                      {Object.values(ExternalFeatures).map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </MKInput>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <MKInput
                      variant="standard"
                      label="Neighborhood Features"
                      select
                      fullWidth
                      value={neighborhoodFeatures}
                      onChange={(e) => setNeighborhoodFeatures(e.target.value)}
                    >
                      {Object.values(NeighborhoodFeatures).map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </MKInput>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <MKInput
                      variant="standard"
                      label="Transportation"
                      select
                      fullWidth
                      value={transportation}
                      onChange={(e) => setTransportation(e.target.value)}
                    >
                      {Object.values(Transportation).map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </MKInput>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <MKInput
                      variant="standard"
                      label="Landscape"
                      select
                      fullWidth
                      value={landscape}
                      onChange={(e) => setLandscape(e.target.value)}
                    >
                      {Object.values(Landscape).map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </MKInput>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <MKInput
                      variant="standard"
                      label="Apartment Type"
                      select
                      fullWidth
                      value={apartmentType}
                      onChange={(e) => setApartmentType(e.target.value)}
                    >
                      {Object.values(ApartmentType).map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </MKInput>
                  </Grid>
                </Grid>
              </MKBox>
              <MKBox py={2} textAlign="center">
                <MKButton variant="contained" color="primary" type="submit" fullWidth>
                  Add House
                </MKButton>
              </MKBox>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
    </>
  );
}

export default AddHouse;
