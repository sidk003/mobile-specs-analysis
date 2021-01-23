import React from "react";
import { CanvasJSChart } from "canvasjs-react-charts";

export const Chart = ({ bargraph, darkState }) => {
  const darkTheme = "dark2";
  const lightTheme = "light2";
  const barColorDark = "#EC4646";
  const barColorLight = "#005CE6";
  const black = "#000000";
  const white = "#FFFFFF";

  var bgTheme = darkState ? darkTheme : lightTheme;
  var colorSet = darkState ? barColorDark : barColorLight;
  var fontColor = darkState ? white : black;

  var year1 = 0;
  var year2 = 0;
  var year3 = 0;
  var year4 = 0;
  var year5 = 0;
  var year6 = 0;
  var year7 = 0;
  var year8 = 0;
  var year9 = 0;
  var year10 = 0;
  var year11 = 0;
  var year12 = 0;

  if (bargraph !== undefined && bargraph.entry1 !== undefined) {
    year1 = bargraph.entry1;
    year2 = bargraph.entry2;
    year3 = bargraph.entry3;
    year4 = bargraph.entry4;
    year5 = bargraph.entry5;
    year6 = bargraph.entry6;
    year7 = bargraph.entry7;
    year8 = bargraph.entry8;
    year9 = bargraph.entry9;
    year10 = bargraph.entry10;
    year11 = bargraph.entry11;
    year12 = bargraph.entry12;
  }

  const options = {
    animationEnabled: true,
    // exportEnabled: true,
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
        dataPoints: [
          { x: year1.name, y: year1.value },
          { x: year2.name, y: year2.value },
          { x: year3.name, y: year3.value },
          { x: year4.name, y: year4.value },
          { x: year5.name, y: year5.value },
          { x: year6.name, y: year6.value },
          { x: year7.name, y: year7.value },
          { x: year8.name, y: year8.value },
          { x: year9.name, y: year9.value },
          { x: year10.name, y: year10.value },
          { x: year11.name, y: year11.value },
          { x: year12.name, y: year12.value },
        ],
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
