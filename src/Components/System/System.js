import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      //margin: theme.spacing(),
      marginRight: "15px",
      width: "120px",
      backgroundColor: "lightGray",
    },
  },
}));

export default function PaymentForm() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Information
      </Typography>
      <Box
        border={1}
        padding={4}
        borderRadius={10}
        style={{ backgroundColor: "white" }}
      >
        <Grid container spacing={3} justify="flex-end">
          <Grid item xs={12} md={12}>
            <TextField
              id="descr"
              label="Descrption"
              multiline
              rowsMax={4}
              fullWidth
              defaultValue={
                " Cisco IOS XR Software (Cisco IOS XRv Series), Version 6.1.3, Copyright (c) 2017 by Cisco Systems, Inc."
              }
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              id="v"
              label="Version"
              fullWidth
              defaultValue=" Router Cisco XR 6.1.3"
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              id="timeUp"
              label="System Time Up"
              fullWidth
              defaultValue=" 3:29:03.48"
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              id="svc"
              label="Services"
              fullWidth
              defaultValue="78"
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              onClick={(e) => {
                e.target.value = "";
              }}
              id="ctc"
              label="Organization Name"
              fullWidth
              defaultValue=" Espol"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              onClick={(e) => {
                e.target.value = "";
              }}
              id="loc"
              label="Localization"
              fullWidth
              defaultValue="Ecuador-Guayaquil"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} md={4} alig>
            <TextField
              onClick={(e) => {
                e.target.value = "";
              }}
              id="sysName"
              label="System Name"
              fullWidth
              defaultValue=" Cisco XR"
              variant="outlined"
            />
          </Grid>

          <Grid item>
            <div className={classes.root}>
              <Button variant="outlined">Refresh</Button>
              <Button variant="outlined">Save</Button>
            </div>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
