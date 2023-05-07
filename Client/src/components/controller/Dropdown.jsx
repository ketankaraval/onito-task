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
  id,
  register,
  options,
  error,
  helperText,
}) => {
  return (
    <FormControl sx={{ minWidth: "-webkit-fill-available" }} error={error}>
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
      <Select
        labelId={`${name}-label`}
        id={id}
        label={label}
        {...register(name)}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

StyledDropdown.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  register: PropTypes.any.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.string,
};

export default StyledDropdown;
