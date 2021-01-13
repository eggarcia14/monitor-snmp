import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import imagen from "../../assets/img/attention.png";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 17,
  },
  body: {
    fontSize: 15,
    color: "black",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(eventId, iface, eventDesc) {
  return { eventId, iface, eventDesc };
}

const rows = [
  createData("4", "GigabitEthernet0/0/0/0", "Alta Actividad"),
  createData("3", "GigabitEthernet0/0/0/2", "Alta Actividad"),
  createData("2", "GigabitEthernet0/0/0/4", "Baja Actividad"),
];

const useStyles = makeStyles({
  table: {
    minWidth: "1010px",
  },
});

export default function CustomizedTables(props) {
  const classes = useStyles();
  //const {item} = props;

  return (
    <div className={classes.table}>
      <div style={{ margin: "25px", alignItems: "center" }}>
        <img 
          src={imagen} 
          width="50%" 
          style={{ marginLeft: "240px" }} 
        />
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Event ID</StyledTableCell>
              <StyledTableCell align="center">Interface</StyledTableCell>
              <StyledTableCell align="center">
                Event Description
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.eventId}>
                <StyledTableCell component="th" scope="row" align="center">
                  {row.eventId}
                </StyledTableCell>
                <StyledTableCell align="center">{row.iface}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.eventDesc}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
