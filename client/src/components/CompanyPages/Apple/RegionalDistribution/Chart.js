import React from "react";
import { CanvasJSChart } from "canvasjs-react-charts";

export const Chart = ({ doughnutchart }) => {
  var country1 = "";
  var country2 = "";
  var country3 = "";
  var country4 = "";
  var country5 = "";

  if (doughnutchart !== undefined && doughnutchart.entry1 !== undefined) {
    country1 = doughnutchart.entry1;
    country2 = doughnutchart.entry2;
    country3 = doughnutchart.entry3;
    country4 = doughnutchart.entry4;
    country5 = doughnutchart.entry5;
  }

  const options = {
    title: {
      text: "Share of people using iphone in 2019",
    },
    animationEnabled: true,
    theme: "light2",
    data: [
      {
        type: "doughnut",
        showInLegend: true,
        indexLabel: "{name}: {y}",
        yValueFormatString: "#,###'%'",
        dataPoints: [
          { name: country1.name, y: country1.value },
          { name: country2.name, y: country2.value },
          { name: country3.name, y: country3.value },
          { name: country4.name, y: country4.value },
          { name: country5.name, y: country5.value },
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
      <CanvasJSChart options={options} containerProps={containerProps} />
    </div>
  );
};
