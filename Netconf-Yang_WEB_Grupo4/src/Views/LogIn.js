import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import imagen from "../assets/img/fondo.jpg";

function Copyright() {
  return (
    <Typography variant="body2" color="black" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://espol.edu.ec/">
        Sistema de Monitoreo NETCONF - ASSR
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  fond: {
    backgroundImage: `url(${imagen})`,
    backgroundRepeat: "no-repeat",
    zIndex: "1",
    backgroundSize: "100%",
    backgroundPosition: "center",
    paddingTop: "94px",
    paddingBottom: "28px",
  },

  paper: {
    zIndex: "2",
    paddingTop: "10%",
    paddingLeft: "10%",
    paddingRight: "10%",
    paddingBottom: "3%",

    borderRadius: "5%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.9)",
  },
  avatar: {
    zIndex: "2",
    margin: theme.spacing(1),
    backgroundColor: "white",
    color: "black",
  },
  form: {
    zIndex: "2",
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    zIndex: "2",
    margin: theme.spacing(3, 0, 4),
    color: "black",
  },
}));

export default function SignIn(props) {
  const classes = useStyles();

  return (
    <div className={classes.fond}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="User"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              //type="submit"
              fullWidth
              variant="contained"
              color="black"
              className={classes.submit}
              onClick={() => props.history.push("/home")}
            >
              Sign In
            </Button>
          </form>
          <Copyright />
        </div>
        <Box mt={8}></Box>
      </Container>
    </div>
  );
}
