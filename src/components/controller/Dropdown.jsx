import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import PropTypes from "prop-types";

const StyledDropdown = ({
  label,
  name,
  options,
  value,
  onChange,
  className,
  error,
  helperText,
}) => {
  return (
    <FormControl className={className} error={error}>
      <InputLabel>{label}</InputLabel>
      <Select name={name} value={value} onChange={onChange}>
        <MenuItem value="">Select an option</MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {error && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

StyledDropdown.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.string,
};

export default StyledDropdown;
