import { Input } from "@progress/kendo-react-inputs";
import { Error, Hint, FloatingLabel } from "@progress/kendo-react-labels";
import { FieldWrapper } from "@progress/kendo-react-form";

const FloatingInput = (fieldRenderProps) => {
  const {
    validationMessage,
    visited,
    label,
    id,
    valid,
    value,
    hint,
    type,
    ...others
  } = fieldRenderProps;
  const showValidationMessage = visited && validationMessage;
  return (
    <FieldWrapper>
      <FloatingLabel
        label={label}
        editorValue={value}
        editorValid={valid}
        editorId={id}
      >
        <Input value={value} valid={valid} type={type} id={id} {...others} />
      </FloatingLabel>
      {!showValidationMessage && <Hint>{hint}</Hint>}
      {showValidationMessage && <Error>{validationMessage}</Error>}
    </FieldWrapper>
  );
};

export default FloatingInput;
