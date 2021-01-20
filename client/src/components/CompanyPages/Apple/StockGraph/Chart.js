import React from "react";
import CanvasJSReact from "../../../../canvasjs.stock.react";
var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;
const CanvasJS = CanvasJSReact.CanvasJS;

CanvasJS.addColorSet("darkSet", ["#ff471a"]);
CanvasJS.addColorSet("lightSet", ["#005ce6"]);

export const Chart = ({ stockData, darkState }) => {
  // var bgColor = darkState ? "#262626" : "#FFFFFF";
  var bgTheme = darkState ? "dark2" : "light2";
  var colorSet = darkState ? "darkSet" : "lightSet";

  var xVal = 1,
    yVal = 1;
  var dps = [];

  for (var i = 0; i < stockData.length; i++) {
    yVal = stockData[i].close;
    dps.push({ x: xVal, y: yVal });
    xVal++;
  }
  if (stockData[0] !== undefined) {
    var date = stockData[stockData.length - 1].date;
    var parsedDate = new Date(date);
    console.log("DAte Str: ", typeof parsedDate);
  }

  const options = {
    title: {
      text: "Apple Stock Prices",
      fontSize: 18,
    },
    colorSet: colorSet,
    animationEnabled: true,
    // exportEnabled: true,
    backgroundColor: "",
    theme: bgTheme,
    charts: [
      {
        axisX: {
          crosshair: {
            enabled: true,
            snapToDataPoint: true,
          },
        },
        axisY: {
          crosshair: {
            enabled: true,
          },
        },
        data: [
          {
            type: "spline",
            dataPoints: dps,
          },
        ],
      },
    ],
    rangeSelector: {
      inputFields: {
        startValue: 3000,
        endValue: 3032,
        valueFormatString: "###0",
      },

      buttons: [
        {
          label: "1 month",
          range: 30,
          rangeType: "number",
        },
        {
          label: "1 year",
          range: 365,
          rangeType: "number",
        },
        {
          label: "10 Years",
          range: 3650,
          rangeType: "number",
        },
        {
          label: "All",
          rangeType: "all",
        },
      ],
    },
  };
  const containerProps = {
    width: "100%",
    height: "270px",
    margin: "auto",
  };
  return (
    <div>
      <div>
        <CanvasJSStockChart containerProps={containerProps} options={options} />
      </div>
    </div>
  );
};
