import React, { useState, useContext } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { GlobalContext } from "../../../context/GlobalState";
import useStyles from "./Styles";

const Form = () => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [links, setLinks] = useState("");

  const { addAbout } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newAbout = {
      id: Math.floor(Math.random() * 100000000),
      title,
      content,
      links,
    };
    addAbout(newAbout);
  };

  return (
    <Paper>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={onSubmit}
      >
        <Typography variant="h6">Edit About-Us</Typography>
        <TextField
          type="text"
          value={title}
          variant="outlined"
          label="Title"
          fullWidth
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          type="text"
          value={content}
          variant="outlined"
          label="Content"
          fullWidth
          multiline
          rows={4}
          onChange={(e) => setContent(e.target.value)}
        />
        <TextField
          type="text"
          value={links}
          variant="outlined"
          label="not working yet, try postman"
          fullWidth
          multiline
          rows={4}
          name="links[]"
          onChange={(e) => setLinks(e.target.value)}
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
      </form>
    </Paper>
  );
};

export default Form;
