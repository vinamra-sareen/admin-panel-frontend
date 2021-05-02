import React from "react";
import * as PropTypes from "prop-types";

import { MaskedTextBox as KendoMaskedTextBox } from "@progress/kendo-react-inputs";
import { FieldWrapper } from "@progress/kendo-react-form";
import { FloatingLabel, Error, Hint } from "@progress/kendo-react-labels";

export const FloatingMaskedTextBox = (fieldRenderProps) => {
  const {
    validationMessage,
    touched,
    label,
    id,
    valid,
    hint,
    optional,
    ...others
  } = fieldRenderProps;

  const showValidationMessage = touched && validationMessage;
  const showHint = !showValidationMessage && hint;
  const hintId = showHint ? `${id}_hint` : "";
  const errorId = showValidationMessage ? `${id}_error` : "";

  return (
    <FieldWrapper>
      <FloatingLabel
        label={label}
        editorId={id}
        editorValid={valid}
        optional={optional}
      >
        <div className={"k-form-field-wrap"}>
          <KendoMaskedTextBox
            ariaDescribedBy={`${hintId} ${errorId}`}
            valid={valid}
            id={id}
            {...others}
          />
          {showHint && <Hint id={hintId}>{hint}</Hint>}
          {showValidationMessage && (
            <Error id={errorId}>{validationMessage}</Error>
          )}
        </div>
      </FloatingLabel>
    </FieldWrapper>
  );
};
FloatingMaskedTextBox.displayName = "FloatingMaskedTextBox";
FloatingMaskedTextBox.propTypes = {
  valid: PropTypes.bool,
  value: PropTypes.string,
  id: PropTypes.string,
  optional: PropTypes.bool,
  label: PropTypes.string,
  hint: PropTypes.string,
  validationMessage: PropTypes.string,
  visited: PropTypes.bool,
};
