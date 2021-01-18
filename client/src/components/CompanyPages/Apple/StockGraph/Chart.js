import React from "react";
import CanvasJSReact from "../../../../canvasjs.stock.react";
var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;

export const Chart = ({ stockData }) => {
  // console.log("stock data received in Chart: ", stockData[0].close);

  var xVal = 1,
    yVal = 100;
  var dps = [];
  for (var i = 0; i < stockData.length; i++) {
    yVal = stockData[i].close;
    dps.push({ x: xVal, y: yVal });
    xVal++;
  }

  const options = {
    title: {
      text: "Apple Stock Prices",
    },
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2",
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
        startValue: 4000,
        endValue: 6000,
        valueFormatString: "###0",
      },

      buttons: [
        {
          label: "1 Day",
          range: 1000,
          rangeType: "number",
        },
        {
          label: "1 year",
          range: 2000,
          rangeType: "number",
        },
        {
          label: "10 Years",
          range: 5000,
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
