import { Avatar } from "@mui/material";
import React from "react";
import profileImage from "../../assets/circle-profile.png";

const Banner = () => {
  return (
    <div>
      Banner
      <Avatar src={profileImage} sx={{ width: 200, height: 200 }} />
      Hello
    </div>
  );
};

export default Banner;
