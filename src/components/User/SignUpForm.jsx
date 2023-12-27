"use client";
import { useState } from "react";
import {
  ErrorToast,
  IsEmail,
  IsEmpty,
  SuccessToast,
} from "@/utility/FormHelper";
import SubmitButton from "@/components/SubmitButton/SubmitButton";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    userImg: null,
  });
  const [submit, setSubmit] = useState(false);
  const router = useRouter();
  const inputOnChange = (name, value) => {
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setData((data) => ({
      ...data,
      userImg: file,
    }));
  };

  const formSubmit = async () => {
    if (IsEmpty(data.firstName)) {
      ErrorToast("First Name Required");
    } else if (IsEmpty(data.lastName)) {
      ErrorToast("Last Name Required");
    } else if (IsEmpty(data.mobile)) {
      ErrorToast("Mobile No Required");
    } else if (IsEmail(data.email)) {
      ErrorToast("Valid Email Address Required");
    } else if (IsEmpty(data.password)) {
      ErrorToast("Password Required");
    } else {
      setSubmit(true);

      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      if (data.userImg) {
        formData.append("userImg", data.userImg);
      }

      console.log("formData:", formData);

      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      };

      try {
        let res = await fetch("/api/user/registration", options);
        let ResJson = await res.json();

        console.log("API Response:", ResJson);

        if (ResJson["status"] === "success") {
          SuccessToast("Registration Success");
          router.replace("/User/Login");
        } else {
          setSubmit(false);
          ErrorToast("Request Fail");
        }
      } catch (error) {
        console.error("API Request Error:", error);
        setSubmit(false);
        ErrorToast("Request Error");
      }
    }
  };

  return (
    <div className="row h-100  justify-content-center center-screen">
      <div className="col-md-8 col-lg-8 col-sm-12 col-12 ">
        <div className="card container-fluid animated fadeIn p-5 gradient-bg">
          <div className="row ">
            <h5 className="mb-3 mx-0 px-0">User Registration</h5>

            <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
              <label className="form-label">User Image</label>
              <input
                onChange={handleImageChange}
                type="file"
                accept="image/*"
                className="form-control mb-2"
              />
            </div>

            <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
              <label className="form-label">First Name</label>
              <input
                onChange={(e) => {
                  inputOnChange("firstName", e.target.value);
                }}
                type="text"
                className="form-control mb-2"
              />
            </div>

            <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
              <label className="form-label">Last Name</label>
              <input
                onChange={(e) => {
                  inputOnChange("lastName", e.target.value);
                }}
                type="text"
                className="form-control mb-2"
              />
            </div>

            <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
              <label className="form-label">Mobile</label>
              <input
                onChange={(e) => {
                  inputOnChange("mobile", e.target.value);
                }}
                type="text"
                className="form-control mb-2"
              />
            </div>

            <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
              <label className="form-label">Email</label>
              <input
                onChange={(e) => {
                  inputOnChange("email", e.target.value);
                }}
                type="email"
                className="form-control mb-2"
              />
            </div>

            <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
              <label className="form-label">Password</label>
              <input
                onChange={(e) => {
                  inputOnChange("password", e.target.value);
                }}
                type="password"
                className="form-control mb-2"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
              <SubmitButton
                className="btn btn-danger w-100 mt-3"
                submit={submit}
                onClick={formSubmit}
                text="Sign Up"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUpForm;
