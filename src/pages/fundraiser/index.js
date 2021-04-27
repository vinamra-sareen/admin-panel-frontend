import React from "react";
import { Stepper } from "@progress/kendo-react-layout";

const items = [
  { label: "Who is this for ?", icon: "k-i-info" },
  { label: "Basic Details", icon: "k-i-user" },
  { label: "Cause Details", icon: "k-i-dollar" },
  { label: "Elborate Cause Details", icon: "k-i-txt" },
  { label: "Done", icon: "k-i-check" },
];

const Fundraiser = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (e) => {
    setValue(e.value);
  };

  return (
    <div className="m-12 container mx-auto w-1/2 h-96">
      <Stepper
        value={value}
        onChange={handleChange}
        items={items}
        linear={true}
      />
    </div>
  );
};

export default Fundraiser;
