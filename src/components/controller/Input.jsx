import {
  FormControl,
  FormHelperText,
  InputLabel,
  TextField,
} from "@mui/material";
import PropTypes from "prop-types";

const StyledInput = ({
  label,
  name,
  value,
  onChange,
  className,
  error,
  helperText,
}) => {
  return (
    <FormControl className={className} error={error}>
      <InputLabel>{label}</InputLabel>
      <TextField type="text" name={name} value={value} onChange={onChange} />
      {error && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

StyledInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.string,
};

export default StyledInput;
