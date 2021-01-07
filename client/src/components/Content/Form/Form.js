import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
// import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";

const Form = () => {
  // const [aboutData, setAboutData] = useState({
  //   title: "",
  //   content: "",
  // });

  const classes = useStyles();

  // const clear = () => {
  //   setAboutData({
  //     title: "",
  //     content: "",
  //   });
  // };

  return (
    <Paper>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
      >
        <Typography variant="h6">Edit About-Us</Typography>
        <TextField name="title" variant="outlined" label="Title" fullWidth />
        <TextField
          name="content"
          variant="outlined"
          label="Content"
          fullWidth
          multiline
          rows={4}
        />

        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        {/* <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button> */}
      </form>
    </Paper>
  );
};

export default Form;
