import { useState } from "react";
import lab from "../assets/img/lab.png";
import Input from "../components/Input";
import AppButton from "../components/AppButton";
import { Link } from "react-router";
import { register } from "../services/authService";
import { useMessage } from "../hooks/useMessage";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const { message, showMessage } = useMessage();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return showMessage("Passwords doesnt match", "error");
    }
    const { confirmPassword, ...userData } = formData;
    try {
      await register(userData);
      showMessage("User Registered", "success");
    } catch (error) {
      showMessage(error.message, "error");
    }
  };
  return (
    <>
      <form
        className="grid grid-cols-1 sm:grid-cols-2 sm:min-h-screen"
        onSubmit={handleSignUp}
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
            Sign Up{" "}
          </div>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          >
            Full Name
          </Input>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          >
            Email Address
          </Input>
          <Input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}"
            title="Password must be at least 8 characters and contain an uppercase letter, lowercase letter, number, and symbol."
            required
          >
            Password
          </Input>
          <Input
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          >
            Confirm Password
          </Input>
          {message.text && (
            <div
              className={`pb-4 ${message.type === "success" ? "text-green-700" : "text-red-700"}`}
            >
              {message.text}
            </div>
          )}
          <AppButton type="submit"> Sign Up </AppButton>
          <p className="text-sm text-gray-600 pt-5">
            Already have an account?{" "}
            <Link className="text-sky-600 hover:underline" to="/">
              Log In
            </Link>
          </p>
        </div>
      </form>
    </>
  );
};
export default SignUp;
