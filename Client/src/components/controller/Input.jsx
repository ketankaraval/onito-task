import { FormControl, FormHelperText, TextField } from "@mui/material";
import PropTypes from "prop-types";

const StyledInput = ({
  label,
  name,
  id,
  error,
  helperText,
  placeholder,
  register,
}) => {
  return (
    <FormControl error={error} fullWidth>
      <TextField
        type="text"
        name={name}
        id={id}
        label={label}
        fullWidth
        placeholder={placeholder}
        {...register(name)}
      />
      {error && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

StyledInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.any,
};

export default StyledInput;
