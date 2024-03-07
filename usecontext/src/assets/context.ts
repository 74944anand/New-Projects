import { createContext, useContext } from "react";
import { User } from "../App";

export const DashBoardContext = createContext<User | undefined>(undefined);


export const useUserContext=()=>{
    const user=useContext(DashBoardContext);
    if(user===undefined) throw new Error("Use useUserContext in the correct context");
    return user;
}