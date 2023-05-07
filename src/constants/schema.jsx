import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  age: yup.number().required("Age is required"),
  gender: yup.string().required("Gender is required"),
  mobileNo: yup
    .string()
    .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, "Invalid mobile number")
    .notRequired(),
  govtIssuedId: yup.string().when("idType", {
    is: (idType) => idType === "aadhar",
    then: yup.string().matches(/^\d{12}$/, "Invalid Aadhar number"),
    otherwise: yup
      .string()
      .matches(/^[A-Za-z]{5}\d{4}[A-Za-z]{1}$/, "Invalid PAN number"),
  }),
  guardianDetails: yup.string().required("Guardian details is required"),
  email: yup.string().email("Invalid email").notRequired(),
  emergencyContactNumber: yup
    .string()
    .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, "Invalid mobile number")
    .notRequired(),
  address: yup.string().notRequired(),
  state: yup.string().required("State is required"),
  city: yup.string().required("City is required"),
  country: yup.string().required("Country is required"),
  pincode: yup
    .string()
    .matches(/^\d{6}$/, "Invalid pincode")
    .required("Pincode is required"),
  occupation: yup.string().notRequired(),
  religion: yup.string().required("Religion is required"),
  maritalStatus: yup.string().required("Marital status is required"),
  bloodGroup: yup.string().notRequired(),
  nationality: yup.string().required("Nationality is required"),
});

export default schema;
