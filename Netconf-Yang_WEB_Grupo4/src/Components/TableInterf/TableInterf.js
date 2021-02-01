import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


import Example1 from './datos';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 17,
    fontStyle: "Bold",
  },
  body: {
    fontSize: 15,
    color: "darkBlack",
  },
}))(TableCell);


const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(
  nameIf,
  phyAddress,
  dataBitsIn,
  dataBitsOut,
  status,
  lastContact,
  edt
) {
  return {
    nameIf,
    phyAddress,
    dataBitsIn,
    dataBitsOut,
    status,
    lastContact,
    edt,
  };
}


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} style={{ marginBottom: "30px" }}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Interfaces Name</StyledTableCell>
            <StyledTableCell align="center">Physic Address</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
          </TableRow>
        </TableHead>
        <Example1></Example1>
      </Table>
      
    </TableContainer>
  );
}
