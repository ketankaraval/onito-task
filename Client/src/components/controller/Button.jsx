import { Button } from "@mui/material";
import PropTypes from "prop-types";

const StyledButton = ({ children, onClick, className, disabled }) => {
  return (
    <Button
      className={className}
      variant="contained"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

StyledButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default StyledButton;
