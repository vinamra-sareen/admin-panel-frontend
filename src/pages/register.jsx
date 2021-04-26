import * as React from "react";

import { Button } from "@progress/kendo-react-buttons";
import { Form, Field, FormElement } from "@progress/kendo-react-form";

import { useHistory } from "react-router-dom";
import { Input } from "../components/form/Input";
import { MaskedTextBox } from "../components/form/MaskedTextBox";
import { Editor } from "../components/form/Editor";
import { Upload } from "../components/form/Upload";
// import { AppContext } from "./../AppContext";
import {
  requiredValidator,
  emailValidator,
  phoneValidator,
  biographyValidator,
  passwordValidator,
} from "../validators";

// const countriesData = countries.map((country) => country.name);
// const teamsData = teams.map((team) => ({
//   value: team.teamID,
//   label: team.teamName,
// }));

const Register = () => {
  //   const {
  //     languageId,
  //     onLanguageChange,
  //     onProfileChange,
  //     ...formValues
  //   } = React.useContext(AppContext);
  const history = useHistory();

  const onSubmit = React.useCallback(
    (dataItem) => {
      //   onProfileChange({ dataItem });

      history.push("/");
    }
    // [onProfileChange, history]
  );

  const [values, setValues] = React.useState([]);

  const onCancelClick = React.useCallback(() => {
    history.push("/");
  }, [history]);

  const passwordMatchValidator = () => {};

  return (
    <div id="Register" className="container mx-auto m-16 w-full sm:w-1/2">
      <div className="card-container">
        <div className="card-component">
          <h1 className="leading-6 font-semibold m-5 sm:text-2xl sm:mb-10">
            User Registration
          </h1>
          <Form
            onSubmit={onSubmit}
            initialValues={
              {
                //   ...formValues,
              }
            }
            render={(formRenderProps) => (
              <FormElement horizontal={true} style={{ maxWidth: 700 }}>
                <Field
                  id={"avatar"}
                  name={"avatar"}
                  label={""}
                  validator={requiredValidator}
                  component={Upload}
                />
                <Field
                  id={"firstName"}
                  name={"firstName"}
                  label={"Name"}
                  validator={requiredValidator}
                  component={Input}
                />
                <Field
                  id={"middleName"}
                  name={"middleName"}
                  label={"Middle Name"}
                  optional={true}
                  component={Input}
                />
                <Field
                  id={"lastName"}
                  name={"lastName"}
                  label={"Last Name"}
                  validator={requiredValidator}
                  component={Input}
                />
                <Field
                  id={"email"}
                  name={"email"}
                  type={"email"}
                  placeholder={"e.g.: username@email.com"}
                  label={"Email"}
                  validator={emailValidator}
                  component={Input}
                />
                <Field
                  id={"password"}
                  name={"password"}
                  label={"Password"}
                  component={Input}
                  type="password"
                  validator={passwordValidator}
                />
                <Field
                  id={"confirmPassword"}
                  name={"confirmPassword"}
                  label={"Confirm Password"}
                  component={Input}
                  type="password"
                  validator={passwordMatchValidator}
                />
                <Field
                  id={"phoneNumber"}
                  name={"phoneNumber"}
                  label={"Phone Number"}
                  mask={"(+9) 0000-000-00-00"}
                  validator={phoneValidator}
                  component={MaskedTextBox}
                />
                {/* <Field
                  id={"country"}
                  name={"country"}
                  label={localizationService.toLanguageString("custom.country")}
                  data={countriesData}
                  component={DropDownList}
                /> */}
                <Field
                  id={"biography"}
                  name={"biography"}
                  label={"Biography"}
                  validator={biographyValidator}
                  component={Editor}
                />
                {/* <Field
                  labelId={"teamlabel"}
                  name={"teamId"}
                  layout={"horizontal"}
                  label={localizationService.toLanguageString("custom.team")}
                  component={RadioGroup}
                  data={teamsData}
                /> */}
                <br />
                <hr />
                <div className={"k-form-buttons"}>
                  <Button
                    primary={true}
                    type={"submit"}
                    disabled={!formRenderProps.allowSubmit}
                  >
                    Create Profile
                  </Button>
                </div>
              </FormElement>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
