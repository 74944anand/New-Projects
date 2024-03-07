import React, { useContext } from "react";
import { DashBoardContext, useUserContext } from "./assets/context";

const SideBar = () => {
  const user = useUserContext();

  return (
    <div>
      <div>{user.name}</div>
      <div>{user.age}</div>
    </div>
  );
};

export default SideBar;
