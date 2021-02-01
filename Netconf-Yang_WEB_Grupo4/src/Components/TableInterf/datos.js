import React, { Component } from 'react';
import dat from "../../controller/config"; 
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import EditIcon from "@material-ui/icons/Edit";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import State from "@material-ui/icons/FiberManualRecord";

const socialMediaList = dat.data;
const renderAddress = (sts,i) => {
    switch (sts) {
      case "true":
        return "IP";
      case "false":
        return "-";
      default:
        break;
        
    }
  };

  const renderSwitch = (sts) => {
    switch (sts) {
      case "true":
        return <State style={{ color: "darkgreen" }} />;
      case "false":
        return <State style={{ color: "darkred" }} />;
      default:
        break;
    }
  };


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
class Example1 extends Component {
	render() {
		return (
      <TableBody>
                {socialMediaList.interfaces.interface.map(s => 
                    (
                      
                      <StyledTableRow key={s.name}>
                      <StyledTableCell component="th" scope="row" align="center">
                        {s.name}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {renderAddress(s.config.enaled,s)}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                      {renderSwitch(s.config.enaled)}
                      </StyledTableCell>
                      <StyledTableCell button align="center">
                        <EditIcon></EditIcon>
                      </StyledTableCell>
                    </StyledTableRow>
                      )
                      
                    )}               
                </TableBody>
            
        );
    }
} 
export default Example1;