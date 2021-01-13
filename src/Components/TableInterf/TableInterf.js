import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import State from "@material-ui/icons/FiberManualRecord";
import EditIcon from "@material-ui/icons/Edit";

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

const renderSwitch = (sts) => {
  switch (sts) {
    case "ON":
      return <State style={{ color: "darkgreen" }} />;
    case "OFF":
      return <State style={{ color: "darkred" }} />;
    default:
      break;
  }
};

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

const rows = [
  createData("MgmtEth0/0/CPU0/0","c:90:3b:1a:90:0","10269 bits","503 bits","OFF","12:05:03"),
  createData("GigabitEthernet0/0/0/0","c:90:3b:1a:90:0","10269 bits","503 bits","ON","12:05:03"),
  createData("GigabitEthernet0/0/0/1","c:90:3b:1a:90:0","10269 bits","503 bits","OFF","12:05:03"),
  createData("GigabitEthernet0/0/0/2","c:90:3b:1a:90:0","10269 bits","503 bits","ON","12:05:03"),
  createData("GigabitEthernet0/0/0/3","c:90:3b:1a:90:0","10269 bits","503 bits","OFF","12:05:03"),
  createData("GigabitEthernet0/0/0/4","c:90:3b:1a:90:0","10269 bits","503 bits","ON","12:05:03"),
  createData("GigabitEthernet0/0/0/5","c:90:3b:1a:90:0","10269 bits","503 bits","OFF","12:05:03"),
  createData("GigabitEthernet0/0/0/6","c:90:3b:1a:90:0","10269 bits","503 bits","ON","12:05:03"),
  createData("GigabitEthernet0/0/0/7","c:90:3b:1a:90:0","10269 bits","503 bits","OFF","12:05:03"),
];

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
            <StyledTableCell align="center">Data In</StyledTableCell>
            <StyledTableCell align="center">Data Out</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Last Contac</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.nameIf}>
              <StyledTableCell component="th" scope="row" align="center">
                {console.log(row.nameIf)}
                {row.nameIf}
              </StyledTableCell>
              <StyledTableCell align="center">{row.phyAddress}</StyledTableCell>
              <StyledTableCell align="center">{row.dataBitsIn}</StyledTableCell>
              <StyledTableCell align="center">
                {row.dataBitsOut}
              </StyledTableCell>
              <StyledTableCell align="center">
                {renderSwitch(row.status)}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.lastContact}
              </StyledTableCell>
              <StyledTableCell button align="center">
                <EditIcon />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
