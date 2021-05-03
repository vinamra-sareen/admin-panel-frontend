import { Form, Field, FormElement } from "@progress/kendo-react-form";
import FloatingInput from "../components/form/FloatingInput";
import { useHistory } from "react-router-dom";
import { authenticationService } from "../_services/authentication.service";

const Login = () => {
  let history = useHistory();

  const handleLogin = (dataItem) => {
    authenticationService
      .login(dataItem)
      .then((res) => {
        history.push("/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container mx-auto h-96 m-16 w-full sm:w-96">
      <h1 className="leading-6 font-semibold m-5 sm:text-2xl sm:mb-10">
        User Login
      </h1>
      <div className="m-5 sm:m-0">
        <Form
          onSubmit={handleLogin}
          render={(formRenderProps) => (
            <FormElement>
              <Field
                id={"user_name"}
                name={"user_name"}
                label={"Username/Email"}
                component={FloatingInput}
                type="text"
                hint="Please enter your username/email address"
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
