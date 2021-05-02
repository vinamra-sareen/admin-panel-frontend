import React from "react";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import FloatingInput from "../../../components/form/FloatingInput";
import { Editor } from "../../../components/form/Editor";
import { RadioGroup } from "../../../components/form/RadioGroup";

const data = [
  { label: "Medical", value: "medical" },
  { label: "Education", value: "education" },
  { label: "Memorial", value: "memorial" },
  { label: "Others", value: "others" },
];

const CauseDetails = ({ handleCauseDetailsSubmit }) => {
  return (
    <>
      <div className="m-12">
        <Form
          onSubmit={handleCauseDetailsSubmit}
          render={(formRenderProps) => (
            <FormElement>
              <Field
                id={"name"}
                name={"name"}
                label={"Cause Name"}
                component={FloatingInput}
                type="name"
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
              <div className="k-form-buttons">
                <button
                  type={"submit"}
                  className="k-button"
                  disabled={!formRenderProps.allowSubmit}
                >
                  Next <span className="k-icon k-i-arrow-right"></span>
                </button>
              </div>
            </FormElement>
          )}
        />
      </div>
    </>
  );
};

export default CauseDetails;
