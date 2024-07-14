import { DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Typography from "@mui/material/Typography";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Icon,
  Radio,
  RadioGroup,
  styled,
  Autocomplete,
  TextField
} from "@mui/material";
import { Span } from "app/components/Typography";
import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

const AutoComplete = styled(Autocomplete)(() => ({ width: 300, marginBottom: "16px" }));

const FieldText = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px"
}));

const SimpleForm = () => {
  const [state, setState] = useState({ date: new Date() });

  useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== state.password) return false;

      return true;
    });
    return () => ValidatorForm.removeValidationRule("isPasswordMatch");
  }, [state.password]);

  const handleSubmit = (event) => {
    // console.log("submitted");
    // console.log(event);
  };

  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleDateChange = (date) => setState({ ...state, date });

  const {
    username,
    differ,
    creditCard,
    mobile,
    password,
    confirmPassword,
    gender,
    date,
    email,
    isDifferent,
    Representative,
    cusAccount,
    telePhone
  } = state;

  const suggestions = [
    { label: "Western Australia (WA)" },
    { label: "Northern Territory (NT)" },
    { label: "South Australia (SA)" },
    { label: "Victoria (VIC)" },
    { label: "New South Wales (NSW)" },
    { label: "Queensland (QLD)" },
    { label: "Canberra (ACT)" }
  ];

  return (
    <div>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <Grid container spacing={6}>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <FieldText
              type="text"
              name="username"
              id="standard-basic"
              value={username || ""}
              onChange={handleChange}
              errorMessages={["this field is required"]}
              label="Please provide your Organisations ABN number *"
              validators={["required", "minStringLength: 4", "maxStringLength: 11"]}
            />

            <Typography>
              Is your Vendor Name different to your Registered Business Name? *
            </Typography>
            <RadioGroup
              row
              name="isDifferent"
              sx={{ mb: 2 }}
              value={isDifferent || ""}
              onChange={handleChange}>
              <FormControlLabel
                value="Yes"
                label="Yes"
                labelPlacement="end"
                control={<Radio color="secondary" />}
              />

              <FormControlLabel
                value="No"
                label="No"
                labelPlacement="end"
                control={<Radio color="secondary" />}
              />
            </RadioGroup>

            <FieldText
              type="text"
              name="differ"
              label="If you answered yes to Q2 please state why your Registered Business Name differs. *"
              onChange={handleChange}
              value={differ || ""}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />


            <FieldText
              type="email"
              name="email"
              label="Email"
              value={email || ""}
              onChange={handleChange}
              validators={["required", "isEmail"]}
              errorMessages={["this field is required", "email is not valid"]}
            />

            <Typography>
              Select the state(s) and/or countries which your business operates. *
            </Typography>
            <AutoComplete
              options={suggestions}
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextField {...params} label="States" variant="outlined" fullWidth />
              )}
            />
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <Typography>
              Select the state(s) and/or countries, which your business can supply.*
            </Typography>
            <AutoComplete
              options={suggestions}
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextField {...params} label="States" variant="outlined" fullWidth />
              )}
            />

            <FieldText
              sx={{ mb: 4 }}
              type="text"
              name="Representative"
              label="Contact Name of your Customer Accounts Representative: *"
              onChange={handleChange}
              value={Representative || ""}
              errorMessages={["this field is required"]}
              validators={["required", "minStringLength:0", "maxStringLength: 16"]}
            />
          </Grid>
        </Grid>

        <Button color="primary" variant="contained" type="submit">
          <Icon>send</Icon>
          <Span sx={{ pl: 1, textTransform: "capitalize" }}>Submit</Span>
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default SimpleForm;
