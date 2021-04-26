import { Form, Field, FormElement } from "@progress/kendo-react-form";
import FloatingInput from "../components/form/FloatingInput";
import { emailValidator } from "../validators/index";

const Login = () => {
  const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));
  return (
    <div className="container mx-auto h-96 m-16 w-full sm:w-96">
      <h1 className="leading-6 font-semibold m-5 sm:text-2xl sm:mb-10">
        User Login
      </h1>
      <div className="m-5 sm:m-0">
        <Form
          onSubmit={handleSubmit}
          render={(formRenderProps) => (
            <FormElement>
              <Field
                id={"email"}
                name={"email"}
                label={"Email"}
                component={FloatingInput}
                validator={emailValidator}
                type="email"
                hint="Please enter your primary email address"
              />
              <Field
                id={"password"}
                name={"password"}
                label={"Password"}
                component={FloatingInput}
                type="password"
              />
              <div className="k-form-buttons">
                <button
                  type={"submit"}
                  className="k-button"
                  disabled={!formRenderProps.allowSubmit}
                >
                  Submit
                </button>
              </div>
            </FormElement>
          )}
        />
      </div>
    </div>
  );
};

export default Login;
