import React from "react";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import FloatingInput from "../../../components/form/FloatingInput";

const ElaborateCauseDetails = ({ handleElaborateCauseDetailsSubmit }) => {
  return (
    <>
      <div className="m-12">
        <Form
          onSubmit={handleElaborateCauseDetailsSubmit}
          render={(formRenderProps) => (
            <FormElement>
              <div className="flex flex-col ">
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

export default ElaborateCauseDetails;
