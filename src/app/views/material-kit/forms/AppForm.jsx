import { Stack } from "@mui/material";
import { Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import SimpleForm from "./SimpleForm";
import StepperForm from "./StepperForm";
import Typography from "@mui/material/Typography";

// STYLED COMPONENTS
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
  }
}));

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return `As part of our supplier quality assurance program, and in accordance with the requirements of our ISO 9001 registration, new and periodic assessments are conducted of our suppliers and sub-contractors. To this end, would you please complete and return the attached vendor questionnaire.

Information from this questionnaire will be used to update our records and enable us to maintain our approved supplier list.

Analysis of this information may result in the need for an assessment or audit by one of our Quality staff. In this event, we would contact you to arrange a convenient date.

Please be assured that any information provided will be treated in complete confidence.
`;
  }
}

export default function AppForm() {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Material", path: "/material" }, { name: "Form" }]} />
      </Box>

      <Stack spacing={3}>
        <SimpleCard title="VENDOR (SUPPLIER OF GOODS) QUESTIONNAIRE">
          <Typography>{getStepContent(0)}</Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Section 1:
          </Typography>
          {"required *"}
          <SimpleForm />
        </SimpleCard>
      </Stack>
    </Container>
  );
}
