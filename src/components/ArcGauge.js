import React from "react";
import { ArcGauge } from "@progress/kendo-react-gauges";

class ArcGaugeComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  componentDidMount() {
    this.setState({
      value: Math.ceil(Math.random() * 100),
    });
  }

  render() {
    const colors = [
      { from: 0, to: 30, color: "red" },
      { from: 30, to: 100, color: "green" },
    ];

    const arcOptions = {
      value: this.state.value,
      colors,
    };

    const arcCenterRenderer = (value, color) => {
      return <h3 style={{ color: color }}>{value}%</h3>;
    };

    return (
      <ArcGauge
        style={{ width: "100px", height: "50px" }}
        {...arcOptions}
        arcCenterRender={arcCenterRenderer}
      />
    );
  }
}

export default ArcGaugeComponent;
