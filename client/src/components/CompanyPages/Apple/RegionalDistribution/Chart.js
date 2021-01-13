import React, { Component } from "react";
import { CanvasJSChart } from "canvasjs-react-charts";

export default class Chart extends Component {
  render() {
    const options = {
      animationEnabled: true,
      title: {
        text: "Share of people using Iphone in 2019",
      },
      theme: "light2",
      data: [
        {
          type: "doughnut",
          showInLegend: true,
          indexLabel: "{name}: {y}",
          yValueFormatString: "#,###'%'",
          dataPoints: [
            { name: "U.S.A", y: 59.63 },
            { name: "Australia", y: 56.93 },
            { name: "Canada", y: 50.62 },
            { name: "U.K", y: 50.03 },
            { name: "India", y: 4.8 },
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
  }
}
