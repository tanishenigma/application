import React, { useState } from "react";
import Input from "./Input";
import { Eye, EyeOff } from "lucide-react";

interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
}

function InputField() {
  const [inputField, setInputField] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{
    username?: string;
    email?: string;
    password?: string;
  }>({});

  const validate = (formData: {
    username: string;
    email: string;
    password: string;
  }) => {
    const errorsData: {
      username?: string;
      email?: string;
      password?: string;
    } = {};
    if (!formData.username || formData.username.length < 3) {
      errorsData.username = "Please Enter a Valid Username!";
    }
    if (!formData.email) {
      errorsData.email = "Please Enter a Valid Email Address!";
    }
    if (!formData.password || formData.password.length < 6) {
      errorsData.password = "Please Enter a Valid Password!";
    }

    console.log("Form Submitted Successfully!", inputField);

    setErrors(errorsData);
    return errorsData;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validateResult = validate(inputField);
    if (Object.keys(validateResult).length) return;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputField((prev) => ({ ...prev, [name]: value }));
  };

  const [showPass, setShowPass] = useState(false);
  return (
    <div className="  text-black md:w-fit md:h-fit p-10 rounded-xl dark:text-white text-xs md:text-x ">
      <div className="bg-white dark:bg-zinc-950/80 shadow-xl dark:shadow-lg border dark:border-white/20 rounded-xl  ">
        <div className="flex flex-col my-2 md:my-10 text-left ">
          <h1 className="text-2xl mt-5 md:text-5xl px-8 font-black md:mt-10 ">
            Sign Up
          </h1>
          <p className="text-xs md:text-lg mt-2 md:mt-5 px-8 text-zinc-400">
            Hello there, new guy👋
          </p>

          <form
            className="flex mt-4 flex-col md:m-15 md:mt-5 md:w-80 w-50 m-8 text-xs md:text-xl"
            onSubmit={handleSubmit}>
            {" "}
            <Input
              label="Username"
              id="username"
              name="username"
              onChange={handleChange}
              value={inputField.username}
              invalid={errors.username}
              error={errors.username}
              placeholder="type your name"
              size="sm"
              variant="ghost"
              helperText="Username must be more than 3 chars"
            />
            <Input
              label="Email"
              id="email"
              name="email"
              onChange={handleChange}
              value={inputField.email}
              invalid={errors.email}
              error={errors.email}
              placeholder="type your name"
              type="email"
              size="sm"
              variant="ghost"
              helperText="Email must be valid"
            />
            <Input
              label="Password"
              id="password"
              name="password"
              onChange={handleChange}
              value={inputField.password}
              invalid={errors.password}
              error={errors.password}
              placeholder="type your name"
              size="sm"
              variant="ghost"
              type={!showPass ? "password" : "text"}
              helperText="Password must be more than 6 chars">
              <button
                type="button"
                className="cursor-pointer"
                onClick={() => {
                  setShowPass((prev) => !prev);
                }}>
                {!showPass ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </Input>
            <div className="flex items-center mb-5 gap-x-2 cursor-pointer text-zinc-500/80 md:justify-center justify-end">
              <button className="cursor-pointer p-2 px-5 w-fit md:w-full md:p-3 bg-black text-white  dark:bg-zinc-600 rounded-full  hover:bg-zinc-700 dark:hover:bg-zinc-500 transition-colors duration-200">
                Sign Up
              </button>
            </div>
          </form>

          <div className="text-right mt-2 items-center mb-5 cursor-pointer text-zinc-500 text-xs md:text-sm">
            <span>Already have an account?</span>
            <a href="./signin">
              <button className="font-bold bg-none cursor-pointer ml-1 text-blue-800 hover:text-blue-600 pr-9">
                Sign in
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputField;
