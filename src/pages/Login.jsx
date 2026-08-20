import lab from "../assets/img/lab.png";
import Input from "../components/Input";
import AppButton from "../components/AppButton";
import { useState } from "react";
import { login } from "../services/authService";
import { useNavigate, Link } from "react-router";
import { useMessage } from "../hooks/useMessage";

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { message, showMessage } = useMessage();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await login(formData.email, formData.password);
      setLoginError("");
      setIsAuthenticated(true);
      navigate("/home");
      console.log("authenticated");
    } catch (error) {
      showMessage(error.message);
    }
  };
  return (
    <>
      <form
        className="grid grid-cols-1 sm:grid-cols-2 sm:min-h-screen"
        onSubmit={handleLogin}
      >
        <div className="flex flex-col items-center justify-start col-span-1 bg-gray-200 pt-14 lg:pt-24">
          <div className="mx-4 font-bold text-3xl text-sky-600 uppercase ">
            {" "}
            Mata lab system{" "}
          </div>
          <img src={lab} alt="lab-img" />
        </div>
        <div className="flex flex-col justify-start mx-6 pt-14 lg:pt-24">
          <div className="font-bold text-3xl text-sky-600 uppercase pb-6">
            {" "}
            Log In{" "}
          </div>
          <Input
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
          >
            Email Address
          </Input>
          <Input
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({
                ...formData,
                password: e.target.value,
              })
            }
            required
          >
            Password
          </Input>
          {message.text && (
            <p className="text-sm text-red-500 pb-4">
              {message.text}. Please try again.{" "}
            </p>
          )}
          <AppButton type="submit"> Log In </AppButton>
          <p className="text-sm text-gray-600 pt-5">
            Don't have an account?{" "}
            <Link className="text-sky-600 hover:underline" to="/sign-up">
              Register here
            </Link>
          </p>
        </div>
      </form>
    </>
  );
};
export default Login;
