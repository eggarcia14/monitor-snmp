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
  ipv4Address,
  ipv4Prefix,
  ipv6Address,
  ipv6Prefix,
  status
) {
  return { nameIf, ipv4Address, ipv4Prefix, ipv6Address, ipv6Prefix, status };
}

const rows = [
  createData("GigabitEthernet0/0/0/0", "192.168.1.1", "/24", "-", "-", "ON"),
  createData("GigabitEthernet0/0/0/1", "-", "-", "-", "/64", "OFF"),
  createData("GigabitEthernet0/0/0/2", "-", "-", "20:01:0d:b8:ac:ad:00:30:00:00:00:00:00:00:00:02", "/64", "ON"),
  createData("GigabitEthernet0/0/0/3", "-", "-", "-", "/64", "OFF"),
  createData("GigabitEthernet0/0/0/4","-","-","20:01:0d:b8:ac:ad:00:12:00:00:00:00:00:00:00:02","/64","ON"),
  createData("GigabitEthernet0/0/0/5", "-", "-", "-", "/64", "OFF"),
  createData("GigabitEthernet0/0/0/6","-","-","20:01:0d:b8:ac:ad:00:23:00:00:00:00:00:00:00:02","/64","ON"),
  createData("GigabitEthernet0/0/0/7", "-", "-", "-", "/64", "OFF"),
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
            <StyledTableCell align="center">Ipv4 Address</StyledTableCell>
            <StyledTableCell align="center">Ipv4 Prefix</StyledTableCell>
            <StyledTableCell align="center">Ipv6 Address</StyledTableCell>
            <StyledTableCell align="center">Ipv6 Prefix</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
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
              <StyledTableCell align="center">
                {row.ipv4Address}
              </StyledTableCell>
              <StyledTableCell align="center">{row.ipv4Prefix}</StyledTableCell>
              <StyledTableCell align="center">
                {row.ipv6Address}
              </StyledTableCell>
              <StyledTableCell align="center">{row.ipv6Prefix}</StyledTableCell>
              <StyledTableCell align="center">
                {renderSwitch(row.status)}
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
