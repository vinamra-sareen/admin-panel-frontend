import { useState } from "react";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
import { useHistory } from "react-router-dom";
import { Loader } from "@progress/kendo-react-indicators";
import { Notification } from "@progress/kendo-react-notification";
import { Fade } from "@progress/kendo-react-animation";
import { authenticationService } from "../_services/authentication.service";
import FloatingInput from "../components/form/FloatingInput";

const Login = () => {
  let history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleLogin = (dataItem) => {
    setLoading(true);
    authenticationService
      .login(dataItem)
      .then((res) => {
        if (res.status === 200) {
          setTimeout(() => {
            setLoading(false);
            history.push("/");
          }, 500);
        } else {
          setLoading(false);
          setError(true);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container mx-auto h-96 m-16 w-full sm:w-96">
      {loading && (
        <div className="container w-3/12 absolute z-40 h-96 flex justify-center align-center margin-auto backdrop-filter backdrop-grayscale backdrop-blur-sm backdrop-contrast-100">
          <Loader size="large" type="converging-spinner" />
        </div>
      )}

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
                <Button primary={true} disabled={!formRenderProps.allowSubmit}>
                  Search
                </Button>
              </div>
            </FormElement>
          )}
        />
      </div>
      <Fade enter={true} exit={true}>
        {error && (
            <Notification 
              className="mt-10"
              type={{ style: "error", icon: true }}
              closable={true}
              onClose={() => setError(false)}
            >
              <span>Invalid Credentials ...</span>
            </Notification>
        )}
      </Fade>
    </div>
  );
};

export default Login;
