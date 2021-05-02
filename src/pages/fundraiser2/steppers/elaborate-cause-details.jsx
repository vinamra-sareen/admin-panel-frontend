import React from "react";
import { Field } from "@progress/kendo-react-form";
import FloatingInput from "../../../components/form/FloatingInput";

export const ElaborateCauseDetails = (
  <div className="container mx-auto">
    <div className="m-12">
      <Field
        id={"city"}
        name={"city"}
        label={"City"}
        component={FloatingInput}
        type="text"
        className="mr-1"
      />

      <Field
        id={"state"}
        name={"state"}
        label={"State"}
        component={FloatingInput}
        type="text"
      />

      <Field
        id={"country"}
        name={"country"}
        label={"Country"}
        component={FloatingInput}
        type="text"
      />

      <Field
        id={"postal_code"}
        name={"postal_code"}
        label={"Post Code"}
        component={FloatingInput}
        type="text"
      />
    </div>
  </div>
);
