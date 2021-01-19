import React from "react";
import { CanvasJSChart } from "canvasjs-react-charts";

export const Chart = () => {
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2",
    title: {
      text:
        "Unit Sales of the Apple iPhone worldwide from 2007 to 2018 (in millions)",
      fontSize: 16,
    },
    axisY: {
      includeZero: true,
    },
    data: [
      {
        type: "column",
        indexLabel: "{y}",
        indexLabelFontColor: "#FFFFFF",
        indexLabelPlacement: "outside",
        dataPoints: [
          { x: 2007, y: 1.39 },
          { x: 2008, y: 11.63 },
          { x: 2009, y: 20.73 },
          { x: 2010, y: 39.99 },
          { x: 2011, y: 72.29 },
          { x: 2012, y: 125.05 },
          { x: 2013, y: 150.26 },
          { x: 2014, y: 169.22 },
          { x: 2015, y: 231.22 },
          { x: 2016, y: 211.88 },
          { x: 2017, y: 216.76 },
          { x: 2018, y: 217.72 },
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
