import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button, Dropdown, Input } from "./controller/index";
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
import { Paper } from "@mui/material";

const FormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  maxWidth: 600,
  margin: "0 auto",
}));

const FormGroup = styled("div")(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const FormTitle = styled("h1")(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: theme.spacing(3),
}));

const Form = () => {
  const { register, handleSubmit, watch } = useForm({
    resolver: yupResolver(schema),
  });
  const selectedState = watch("state", "");
  const onSubmit = () => {
    //TODO: Write axios api to submit form
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>Personal Details</FormTitle>
      <FormGroup>
        <Input
          label="Name"
          name="name"
          placeholder="Enter your name"
          ref={register}
          // error={!!errors.name}
          // helperText={errors.name?.message}
        />
        <Input
          label="DOB or Age"
          name="age"
          placeholder="Enter your age"
          ref={register}
          // error={!!errors.age}
          // helperText={errors.age?.message}
        />
        <Dropdown
          label="Sex"
          name="sex"
          options={genderOptions}
          ref={register}
          // error={!!errors.sex}
          // helperText={errors.sex?.message}
        />
        <Input
          label="Mobile Number"
          name="mobileNo"
          placeholder="Enter your mobile number"
          ref={register}
          // error={!!errors.mobileNo}
          // helperText={errors.mobileNo?.message}
        />
        <Dropdown
          label="Government Issued ID"
          name="govtIssuedId"
          options={govtIssuedId}
          ref={register}
          // error={!!errors.govtIssuedId}
          // helperText={errors.govtIssuedId?.message}
        />
      </FormGroup>
      <FormTitle>Contact Details</FormTitle>
      <FormGroup>
        <Dropdown
          label="Guardian Details"
          name="guardianDetails"
          options={guardianOptions}
          ref={register}
        />
        <Input
          label="Email"
          name="email"
          placeholder="Enter your email"
          ref={register}
          // error={!!errors.email}
          // helperText={errors.email?.message}
        />
        <Input
          label="Emergency Contact Number"
          name="emergencyContactNo"
          placeholder="Enter emergency contact number"
          ref={register}
          // error={!!errors.emergencyContactNo}
          // helperText={errors.emergencyContactNo?.message}
        />
      </FormGroup>
      <FormTitle>Address Details</FormTitle>
      <FormGroup>
        <Input
          label="Address"
          name="address"
          placeholder="Enter your address"
          ref={register}
        />
        <Dropdown
          label="State"
          name="state"
          options={stateOptions}
          ref={register}
          // error={!!errors.state}
          // helperText={errors.state?.message}
        />
        <Dropdown
          label="City"
          name="city"
          options={cityOptions[selectedState] || []}
          ref={register}
          // error={!!errors.city}
          // helperText={errors.city?.message}
        />
        <Dropdown
          label="Country"
          name="country"
          options={countryOptions}
          ref={register}
          // error={!!errors.country}
          // helperText={errors.country?.message}
        />
        <Input
          label="Pincode"
          name="pincode"
          placeholder="Enter your pincode"
          ref={register}
          // error={!!errors.pincode}
          // helperText={errors.pincode?.message}
        />
      </FormGroup>
      <FormTitle>Other Details</FormTitle>
      <FormGroup>
        <Input
          label="Occupation"
          name="occupation"
          placeholder="Enter your occupation"
          ref={register}
        />
        <Dropdown
          label="Religion"
          name="religion"
          options={religionOptions}
          ref={register}
        />
        <Dropdown
          label="Marital Status"
          name="maritalStatus"
          options={maritalStatusOptions}
          ref={register}
        />
        <Dropdown
          label="Blood Group"
          name="bloodGroup"
          options={bloodGroupOptions}
          ref={register}
        />
        <Dropdown
          label="Nationality"
          name="nationality"
          options={nationalityOptions}
          ref={register}
        />
      </FormGroup>
      <Button type="submit">Submit</Button>
    </FormContainer>
  );
};

export default Form;
