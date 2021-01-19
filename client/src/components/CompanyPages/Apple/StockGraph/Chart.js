import React from "react";
import CanvasJSReact from "../../../../canvasjs.stock.react";
var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;

export const Chart = ({ stockData }) => {
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
