import React, { useState } from "react";
import { Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import DeleteIcon from "@material-ui/icons/Delete";
import "./App.css";
import CheckBox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import { blue, pink } from "@material-ui/core/colors";
import {
  makeStyles,
  ThemeProvider,
  createTheme,     
} from "@material-ui/core/styles";
import "fontsource-roboto"; 
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";

import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { MenuOpen } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    borderRadius: "6px",
    padding: "10px 20px",
    background: "linear-gradient(45deg, #fe6888, #ff8e53)",
    marginBottom: "20px",
    color: "#fff",
    textTransform: "capitalize",
    fontWeight: "bold",
  },
});

const theme = createTheme({
  typography: {
    h3: {
      fontSize: 58,
    },
  },
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: pink[200],
    },
  },
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled</Button>;
}

function CheckboxExample() {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  return (
    <>
      <FormControlLabel
        control={
          <CheckBox
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            color="secondary"
            inputProps={{
              "aria-label": "secondary checkbox",
            }}
            //  style={{
            //    color : 'blue'
            //  }}
          />
        }
        label="Eleigible"
      ></FormControlLabel>
      <FormControlLabel
        control={
          <CheckBox
            checked={checked2}
            onChange={(e) => setChecked2(e.target.checked)}
            icon={<DeleteIcon />}
            checkedIcon={<SaveIcon />}
            color="primary"
            inputProps={{
              "aria-label": "primary checkbox",
              "aria-autocomplete": "secondary checkbox",
            }}
          />
        }
        label="CheckBox"
      ></FormControlLabel>
    </>
  );
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xlg">
        <div className="App">
          <AppBar>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuOpen />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
              </Typography>
              <Button
                color="secondary"
                variant="filled"
                style={{ marginLeft: "auto" }}
              >
                Login
              </Button>
            </Toolbar>
          </AppBar>
          <Typography variant="h3" component="div">
            Welcome To MUI
          </Typography>
          <Typography variant="h4">Learn how to use Material UI .</Typography>
          <ButtonStyled />
          <Grid container spacing={5} justifyContent="center">
            <Grid item xs={12} md={6} lg={4} xlg={4}>
              <Paper style={{ height: 100, width: "100%" }} />
            </Grid>
            <Grid item xs={12} md={6} lg={4} xlg={4}>
              <Paper style={{ height: 100, width: "100%" }} />
            </Grid>
            <Grid item xs={12} md={6} lg={4} xlg={4}>
              <Paper style={{ height: 100, width: "100%" }} />
            </Grid>
          </Grid>
          <TextField
            variant="outlined"
            color="secondary"
            type="text" // which type of input
            label="username"
            value="example@gmail.com"
            style={{
              width: "500px",
              fontSize: "30px",
            }}
          />
          <CheckboxExample />

          {/* 
      <Button
       startIcon={<SaveIcon />}
      //  endIcon={<SaveIcon />}
      onClick={() => alert('hello')}
       variant="contained" color="primary"
       href="#"
       size="large"
       //  style={{
         //    textTransform : "capitalize",
         //    fontWeight : "bold"
         
         //  }}
         //  disabled
        >Save</Button> */}

          <ButtonGroup variant="contained" color="primary">
            <Button startIcon={<SaveIcon />}>Save</Button>

            <Button startIcon={<DeleteIcon />} color="secondary">
              Discard
            </Button>
          </ButtonGroup>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default App;
