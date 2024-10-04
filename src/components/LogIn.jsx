import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { BeatLoader } from "react-spinners";
import ShowError from "./ShowError";
import * as Yup from "yup";
import useFetch from "@/hooks/use-fetch";
import {login} from "@/db/apiAuth";
import { useNavigate, useSearchParams } from "react-router-dom";
import { UrlState } from "@/context";

const LogIn = () => {
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  let [searchParams] = useSearchParams();
  const longLink = searchParams.get("createNew");

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const {loading, error, fn: fnLogin, data} = useFetch(login, formData);
  const {fetchUser} = UrlState();

  useEffect(() => {
    if(error === null && data){
      fetchUser();
      navigate(`/dashboard?${longLink ? `createNew=${longLink}` : ""}`)
    }
  }, [error, data]);

  const handleLogin = async () => {
    setErrors([]);
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Invalid email")
          .required("Email is required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required"),
      });
      await schema.validate(formData, { abortEarly: false });
      await fnLogin();
    } catch (e) {
      const newErrors = {};

      e?.inner?.forEach((err) => {
        newErrors[err.path] = err.message;
      });

      setErrors(newErrors);
    }
  };
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>LogIn</CardTitle>
          <CardDescription>
            LogIn to your account if you have one!
          </CardDescription>
          {error && <ShowError message={error.message} />}
        </CardHeader>
        
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Input
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={handleInputChange}
            />
            {errors.email && <ShowError message={errors.email} />}
          </div>
        </CardContent>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Input
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={handleInputChange}
            />
            {errors.password && <ShowError message={errors.password} />}
          </div>
        </CardContent>
        <CardFooter className="space-y-2">
          <Button onClick={handleLogin}>
            {loading ? <BeatLoader size={10} color="green" /> : "LogIn"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LogIn;
