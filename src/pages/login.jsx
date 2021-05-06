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
  if(authenticationService.currentUserValue){
    history.push('/');
  }
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');

  const handleLogin = (dataItem) => {
    setLoading(true);
    authenticationService
      .login(dataItem)
      .then((res) => {
        if (res.status === 200) {
          setTimeout(() => {
            setLoading(false);
            history.push("/admin");
          }, 500);
        } else if(res.status === 201) {
          setMessage("Invalid Credentials");
          setLoading(false);
          setError(true);
        } else {
          setMessage(res.data.message);
          setLoading(false);
          setError(true);
        }
      })
      .catch((err) => {
        setMessage("Network Error");
        setLoading(false);
        setError(true);
      });
  };

  return (
    <div className="container mx-auto h-96 m-16 w-full sm:w-96">
      {loading && (
        <div className="container w-3/12 absolute z-40 h-96 flex justify-center align-center backdrop-filter backdrop-grayscale backdrop-blur-sm backdrop-contrast-100">
          <Loader size="large" type="converging-spinner" />
        </div>
      )}
      <div className="bg-white p-5 flex flex-col justify-center items-center shadow ">
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
                  <Button
                    primary={true}
                    disabled={!formRenderProps.allowSubmit}
                  >
                    Login
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
              <span>{message}</span>
            </Notification>
          )}
        </Fade>
      </div>
    </div>
  );
};

export default Login;
