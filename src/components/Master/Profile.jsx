"use client";
import { useEffect, useState } from "react";

const Profile = (props) => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    user_img: "",
  });

  useEffect(() => {
    setData(props.propData);
  }, [props.propData]);

  const inputOnChange = (name, value) => {
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const formSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div onChange={formSubmit} className="container pro-main mx-auto d-flex">
      <div className="profile">
        <div className="text-center">
          <img
            className="profile-img"
            src={data.user_img}
            alt="Profile Image"
          />
        </div>
        <div className="information mt-4">
          <div className="fl-name d-flex">
            <h4 className="result">Name : {data.firstName}</h4>
            <h4 className="result">{data.lastName}</h4>
          </div>
          <h4 className="result">Email : {data.email}</h4>
          <h4 className="result">Number : {data.mobile}</h4>
        </div>
      </div>
    </div>
  );
};

export default Profile;
