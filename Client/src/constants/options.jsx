const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

const govtIssuedId = [
  { value: "aadhaar", label: "Aadhaar" },
  { value: "pan", label: "Pan" },
];

const guardianOptions = [
  { value: "father", label: "Father" },
  { value: "mother", label: "Mother" },
  { value: "other", label: "Other" },
];

const religionOptions = [
  { value: "Hinduism", label: "Hinduism" },
  { value: "Sikhism", label: "Sikhism" },
  { value: "Jainism", label: "Jainism" },
  { value: "Buddhism", label: "Buddhism" },
  { value: "Christianity", label: "Christianity" },
  { value: "Muslims", label: "Muslims" },
];

const maritalStatusOptions = [
  { value: "single", label: "Single" },
  { value: "married", label: "Married" },
  { value: "divorced", label: "Divorced" },
  { value: "widowed", label: "Widowed" },
];

const bloodGroupOptions = [
  { value: "A+", label: "A+" },
  { value: "A-", label: "A-" },
  { value: "B+", label: "B+" },
  { value: "B-", label: "B-" },
  { value: "O+", label: "O+" },
  { value: "O-", label: "O-" },
  { value: "AB+", label: "AB+" },
  { value: "AB-", label: "AB-" },
];

const stateOptions = [
  { value: "Delhi", label: "Delhi" },
  { value: "Maharashtra", label: "Maharashtra" },
  { value: "Gujarat", label: "Gujarat" },
  { value: "Karnataka", label: "Karnataka" },
];

const cityOptions = {
  Delhi: [
    { value: "New Delhi", label: "New Delhi" },
    { value: "South Delhi", label: "South Delhi" },
    { value: "East Delhi", label: "East Delhi" },
    { value: "West Delhi", label: "West Delhi" },
  ],
  Maharashtra: [
    { value: "Mumbai", label: "Mumbai" },
    { value: "Pune", label: "Pune" },
    { value: "Nagpur", label: "Nagpur" },
    { value: "Nashik", label: "Nashik" },
  ],
  Gujarat: [
    { value: "Ahmedabad", label: "Ahmedabad" },
    { value: "Surat", label: "Surat" },
    { value: "Vadodara", label: "Vadodara" },
    { value: "Rajkot", label: "Rajkot" },
  ],
  Karnataka: [
    { value: "Bengaluru", label: "Bengaluru" },
    { value: "Mysuru", label: "Mysuru" },
    { value: "Hubli-Dharwad", label: "Hubli-Dharwad" },
    { value: "Mangaluru", label: "Mangaluru" },
  ],
};

const countryOptions = [{ value: "India", label: "India" }];

const nationalityOptions = [{ value: "Indian", label: "Indian" }];

export {
  genderOptions,
  govtIssuedId,
  guardianOptions,
  religionOptions,
  maritalStatusOptions,
  bloodGroupOptions,
  stateOptions,
  cityOptions,
  countryOptions,
  nationalityOptions,
};
