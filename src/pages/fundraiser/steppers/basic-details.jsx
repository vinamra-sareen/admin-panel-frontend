import React from "react";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { FloatingMaskedTextBox } from "../../../components/form/FloatingMaskedTextBox";
import FloatingInput from "../../../components/form/FloatingInput";

const BasicDetails = ({ handleBasicDetailsSubmit }) => {
  return (
    <>
      <div className="m-12">
        <Form
          onSubmit={handleBasicDetailsSubmit}
          render={(formRenderProps) => (
            <FormElement>
              <Field
                id={"name"}
                name={"name"}
                label={"Your Name"}
                component={FloatingInput}
                type="name"
              />
              <Field
                id={"email"}
                name={"email"}
                label={"Email"}
                component={FloatingInput}
                type="email"
              />
              <Field
                id={"phone"}
                name={"phone"}
                label={"Phone"}
                component={FloatingMaskedTextBox}
                type="phone"
              />
              <div className="k-form-buttons">
                <button
                  type={"submit"}
                  className="k-button"
                  disabled={!formRenderProps.allowSubmit}
                  // onClick={() => handleBasicDetailsSubmit()}
                >
                  Next <span className="k-icon k-i-arrow-right"></span>
                </button>
              </div>
            </FormElement>
          )}
        />
      </div>
      <style>
        {` 
            .k-button {
                background-color: #fa5052;
            } 
           .k-button:focus {
                background-color: #ff6454;
           }
           .k-button.k-state-active {
                background-color: #ff1404;
           }
          `}
      </style>
    </>
  );
};

export default BasicDetails;
