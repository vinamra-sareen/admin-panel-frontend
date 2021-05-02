import React from "react";
import { Field } from "@progress/kendo-react-form";
import FloatingInput from "../../../components/form/FloatingInput";
import { Editor } from "../../../components/form/Editor";
import { RadioGroup } from "../../../components/form/RadioGroup";

const data = [
  { label: "Medical", value: "medical" },
  { label: "Education", value: "education" },
  { label: "Memorial", value: "memorial" },
  { label: "Others", value: "others" },
];

export const CauseDetails = (
  <div className="container mx-auto">
    <div className="m-12">
      <Field
        id={"cause_name"}
        name={"cause_name"}
        label={"Cause Name"}
        component={FloatingInput}
        type="cause_name"
      />
      <Field
        id={"cause_type"}
        name={"cause_type"}
        label={"What is the cause ?"}
        component={RadioGroup}
        data={data}
        layout={"horizontal"}
      />
      <Field
        id={"target_price"}
        name={"target_price"}
        label={"What is the targeted amount ?"}
        component={FloatingInput}
        type="number"
      />
      <Field
        id={"description"}
        name={"description"}
        component={Editor}
        type="description"
      />
    </div>
  </div>
);
