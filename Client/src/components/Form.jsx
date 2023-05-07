import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Dropdown, Input } from "./controller/index";
import schema from "../constants/schema";
import {
  bloodGroupOptions,
  cityOptions,
  countryOptions,
  genderOptions,
  govtIssuedId,
  guardianOptions,
  maritalStatusOptions,
  nationalityOptions,
  religionOptions,
  stateOptions,
} from "../constants/options";
import { styled } from "@mui/material/styles";
import { Button, Grid } from "@mui/material";
import axios from "axios";

const FormGroup = styled("div")(({ theme }) => ({
  marginBottom: theme.spacing(2),
  display: "flex",
  justifyContent: "space-between",
}));

const FormTitle = styled("h1")(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: "bold",
  color: "#000",
  marginBottom: theme.spacing(3),
}));

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const selectedState = watch("state", "");
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://onito-server-zffs.onrender.com/add-user", data)
      .then(() => {
        console.log("data added");
        reset();
        alert("Data added successfully");
      })
      .catch((err) => console.error(err));
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      style={{ background: "#fff", padding: "12px" }}
    >
      <FormTitle>Personal Details</FormTitle>
      <FormGroup>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Input
              required
              label="Name"
              name="name"
              id="name"
              placeholder="Enter your name"
              margin="dense"
              variant="outlined"
              register={register}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Input
              label="DOB or Age"
              name="age"
              id="age"
              placeholder="Enter your age"
              margin="dense"
              variant="outlined"
              register={register}
              error={!!errors.age}
              helperText={errors.age?.message}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Dropdown
              margin="dense"
              variant="outlined"
              label="Sex"
              name="sex"
              options={genderOptions}
              id="sex"
              register={register}
              error={!!errors.sex}
              helperText={errors.sex?.message}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Input
              label="Mobile Number"
              name="mobileNo"
              placeholder="Enter your mobile number"
              fullWidth
              margin="dense"
              variant="outlined"
              id="mobileNo"
              register={register}
              error={!!errors.mobileNo}
              helperText={errors.mobileNo?.message}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Dropdown
              label="Government Issued ID"
              name="govtIssuedIdType"
              options={govtIssuedId}
              id="govtIssuedIdType"
              register={register}
              error={!!errors.govtIssuedId}
              helperText={errors.govtIssuedId?.message}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Input
              label="Enter Government Id"
              name="govtIssuedId"
              placeholder="Enter Government Id"
              fullWidth
              margin="dense"
              variant="outlined"
              id="govtIssuedId"
              register={register}
              error={!!errors.govtIssuedId}
              helperText={errors.govtIssuedId?.message}
            />
          </Grid>
        </Grid>
      </FormGroup>
      <FormTitle>Contact Details</FormTitle>
      <FormGroup>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Dropdown
              label="Guardian Details"
              name="guardianDetails"
              options={guardianOptions}
              id="guardianDetails"
              register={register}
              error={!!errors.guardianDetails}
              helperText={errors.guardianDetails?.message}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Input
              label="Email"
              name="email"
              placeholder="Enter your email"
              fullWidth
              margin="dense"
              variant="outlined"
              id="email"
              register={register}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Input
              label="Emergency Contact Number"
              name="emergencyContactNo"
              placeholder="Enter emergency contact number"
              fullWidth
              margin="dense"
              variant="outlined"
              id="emergencyContactNo"
              register={register}
              error={!!errors.emergencyContactNo}
              helperText={errors.emergencyContactNo?.message}
            />
          </Grid>
        </Grid>
      </FormGroup>
      <FormTitle>Address Details</FormTitle>
      <FormGroup>
        <Input
          label="Address"
          name="address"
          placeholder="Enter your address"
          fullWidth
          margin="dense"
          variant="outlined"
          id="address"
          register={register}
          error={!!errors.address}
          helperText={errors.address?.message}
        />
        <Grid container spacing={2}>
          <Grid item sm={6} xs={12}>
            <Dropdown
              label="State"
              name="state"
              options={stateOptions}
              id="state"
              register={register}
              error={!!errors.state}
              helperText={errors.state?.message}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Dropdown
              label="City"
              name="city"
              options={cityOptions[selectedState] || []}
              id="city"
              register={register}
              error={!!errors.city}
              helperText={errors.city?.message}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Dropdown
              label="Country"
              name="country"
              options={countryOptions}
              id="country"
              register={register}
              error={!!errors.country}
              helperText={errors.country?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              label="Pincode"
              name="pincode"
              placeholder="Enter your pincode"
              fullWidth
              margin="dense"
              variant="outlined"
              id="pincode"
              register={register}
              error={!!errors.pincode}
              helperText={errors.pincode?.message}
            />
          </Grid>
        </Grid>
      </FormGroup>
      <FormTitle>Other Details</FormTitle>
      <FormGroup>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Input
              label="Occupation"
              name="occupation"
              placeholder="Enter your occupation"
              fullWidth
              margin="dense"
              variant="outlined"
              id="occupation"
              register={register}
              error={!!errors.occupation}
              helperText={errors.occupation?.message}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Dropdown
              label="Religion"
              name="religion"
              options={religionOptions}
              id="religion"
              register={register}
              error={!!errors.religion}
              helperText={errors.religion?.message}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Dropdown
              label="Marital Status"
              name="maritalStatus"
              options={maritalStatusOptions}
              id="maritalStatus"
              register={register}
              error={!!errors.maritalStatus}
              helperText={errors.maritalStatus?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Dropdown
              label="Blood Group"
              name="bloodGroup"
              options={bloodGroupOptions}
              id="bloodGroup"
              register={register}
              error={!!errors.bloodGroup}
              helperText={errors.bloodGroup?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Dropdown
              label="Nationality"
              name="nationality"
              options={nationalityOptions}
              id="nationality"
              register={register}
              error={!!errors.nationality}
              helperText={errors.nationality?.message}
            />
          </Grid>
        </Grid>
      </FormGroup>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
