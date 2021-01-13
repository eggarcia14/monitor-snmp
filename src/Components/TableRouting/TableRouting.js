import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 17,
    fontStyle:"Bold",
  },
  body: {
    fontSize: 15,
    color: "black",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(protocol, nameIf, nextHop, timeUp) {
  return {protocol, nameIf, nextHop, timeUp};
}

const rows = [
  createData("OSPF", "G0/0/0/0", "20:01:0d:b8:ac:ad:00:30:00:00:00:00:00:00:00:02/64", "12:05:03"),
  createData("OSPF", "G0/0/0/1", "20:01:0d:b8:ac:ad:00:30:00:00:00:00:00:00:00:02/128", "12:05:03"),
  createData("OSPF", "G0/0/0/2", "20:01:0d:b8:ac:ad:00:30:00:00:00:00:00:00:00:02/64", "12:05:03"),
  createData("OSPF", "G0/0/0/3", "20:01:0d:b8:ac:ad:00:30:00:00:00:00:00:00:00:02/64", "12:05:03"),
  createData("Local", "G0/0/0/4", "20:01:0d:b8:ac:ad:00:30:00:00:00:00:00:00:00:02/64", "12:05:03"),
  createData("Local", "G0/0/0/5", "20:01:0d:b8:ac:ad:00:30:00:00:00:00:00:00:00:128", "12:05:03"),
  createData("OSPF", "G0/0/0/6", "20:01:0d:b8:ac:ad:00:30:00:00:00:00:00:00:00:02/64", "12:05:03"),
  createData("OSPF", "G0/0/0/7", "20:01:0d:b8:ac:ad:00:30:00:00:00:00:00:00:00:02/64", "12:05:03"),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} style={{marginBottom:"30px"}}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            
            <StyledTableCell align="center">Protocol</StyledTableCell>
            <StyledTableCell align="center">Interface</StyledTableCell>
            <StyledTableCell align="center">Next Hop</StyledTableCell>
            <StyledTableCell align="center">Time Up</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>

         {rows.map((row) => (
            <StyledTableRow key={row.protocol}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.protocol}
              </StyledTableCell>
              <StyledTableCell align="center">{row.nameIf}</StyledTableCell>
              <StyledTableCell align="center">{row.nextHop}</StyledTableCell>
              <StyledTableCell align="center">{row.timeUp}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
