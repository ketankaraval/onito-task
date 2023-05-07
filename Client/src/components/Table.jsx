import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import PropTypes from "prop-types";

const StyledTable = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Age/Sex</TableCell>
            <TableCell>Mobile</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Govt ID</TableCell>
            <TableCell>Guardian Details</TableCell>
            <TableCell>Nationality</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.mobile}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.age + " / " + row.sex}</TableCell>
              <TableCell>{row.mobileNo}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>
                {row.govtIssuedIdType + " / " + row.govtIssuedId}
              </TableCell>
              <TableCell>{row.guardianDetails}</TableCell>
              <TableCell>{row.nationality}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

StyledTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      ageSex: PropTypes.string.isRequired,
      mobile: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      govtID: PropTypes.string.isRequired,
      guardianDetails: PropTypes.string.isRequired,
      nationality: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default StyledTable;
