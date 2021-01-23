import React from "react";
import { CanvasJSChart } from "canvasjs-react-charts";

export const Chart = ({ darkState, bargraph }) => {
  const darkTheme = "dark2";
  const lightTheme = "light2";
  const barColorDark = "#EC4646";
  const barColorLight = "#005CE6";
  const black = "#000000";
  const white = "#FFFFFF";

  var bgTheme = darkState ? darkTheme : lightTheme;
  var colorSet = darkState ? barColorDark : barColorLight;
  var fontColor = darkState ? white : black;

  var xVal = "";
  var yVal = 1;
  var dps = [];

  if (bargraph !== undefined) {
    for (var i = 0; i < bargraph.length; i++) {
      xVal = bargraph[i].xlabel;
      yVal = bargraph[i].ylabel;
      dps.push({ x: xVal, y: yVal });
    }
  }

  const options = {
    animationEnabled: true,
    theme: bgTheme,

    title: {
      text:
        "Unit Sales of the Apple iPhone worldwide from 2007 to 2018 (in millions)",
      fontSize: 16,
    },
    axisY: {
      includeZero: true,
    },

    backgroundColor: "",
    data: [
      {
        type: "column",
        color: colorSet,
        indexLabel: "{y}",
        indexLabelFontColor: fontColor,
        indexLabelPlacement: "outside",
        dataPoints: dps,
      },
    ],
  };
  const containerProps = {
    width: "100%",
    height: "290px",
    margin: "auto",
  };
  return (
    <div>
      <CanvasJSChart containerProps={containerProps} options={options} />
    </div>
  );
};
