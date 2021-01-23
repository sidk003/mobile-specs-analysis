import React from "react";
import CanvasJSReact from "../../../../canvasjs.stock.react";
var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;
const CanvasJS = CanvasJSReact.CanvasJS;

CanvasJS.addColorSet("darkSet", ["#BB86FC"]);
CanvasJS.addColorSet("lightSet", ["#005CE6"]);

export const Chart = ({ stockData, darkState }) => {
  const darkTheme = "dark2";
  const lightTheme = "light2";

  var bgTheme = darkState ? darkTheme : lightTheme;
  var colorSet = darkState ? "darkSet" : "lightSet";

  var xVal = 1;
  var yVal = 1;
  var dps = [];

  for (var i = 0; i < stockData.length; i++) {
    yVal = stockData[i].open;
    xVal = new Date(stockData[i].date);
    dps.push({ x: xVal, y: yVal });
  }

  const options = {
    title: {
      text: "Apple Stock Prices",
      fontSize: 18,
    },
    colorSet: colorSet,
    animationEnabled: true,
    backgroundColor: "",
    theme: bgTheme,
    charts: [
      {
        axisY: {
          prefix: "$",
        },
        data: [
          {
            type: "spline",
            yValueFormatString: "$#,###.##",
            dataPoints: dps,
          },
        ],
      },
    ],
    navigator: {
      slider: {
        minimum: new Date(2018, 0x2, 0x1),
        maximum: new Date(2018, 0x8, 0x1),
      },
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
