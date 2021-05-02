import React from "react";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { FloatingMaskedTextBox } from "../../../components/form/FloatingMaskedTextBox";
import FloatingInput from "../../../components/form/FloatingInput";

export const BasicDetails = (
  <>
    <div className="container mx-auto ">
      <div className="m-12">
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
          component={FloatingInput}
          type="phone"
        />
      </div>
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
