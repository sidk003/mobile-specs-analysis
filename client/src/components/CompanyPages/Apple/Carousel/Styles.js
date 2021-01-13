import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  carousel: {
    display: "flex",
    overflow: "hiddden",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 15,
    marginLeft: 720,
    height: 640,
    width: 360,
  },
  dimensions: {
    height: 640,
    width: 360,
  },
}));
