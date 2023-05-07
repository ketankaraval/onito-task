import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  age: yup.number().required("Age is required"),
  sex: yup.string().required("Gender is required"),
  mobileNo: yup
    .string()
    .nullable()
    .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, "Invalid mobile number")
    .notRequired(),
  govtIssuedIdType: yup.string().oneOf(["pan", "aadhaar"]),
  govtIssuedId: yup.string().notRequired(),
  guardianDetails: yup.string().notRequired(),
  email: yup.string().email("Invalid email").notRequired(),
  emergencyContactNumber: yup
    .string()
    .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, "Invalid mobile number")
    .notRequired(),
  address: yup.string().notRequired(),
  state: yup.string().notRequired(),
  city: yup.string().notRequired(),
  country: yup.string().notRequired(),
  pincode: yup
    .string()
    .matches(/^\d{6}$/, "Invalid pincode")
    .notRequired(),
  occupation: yup.string().notRequired(),
  religion: yup.string().notRequired(),
  maritalStatus: yup.string().notRequired(),
  bloodGroup: yup.string().notRequired(),
  nationality: yup.string().notRequired(),
});

export default schema;
