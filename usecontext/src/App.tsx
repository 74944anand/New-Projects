import { useState } from "react";

import "./App.css";
import { DashBoardContext } from "./assets/context";
import DashBoard from "./DashBoard";

export interface User {
  name: string;
  age: number;
}

function App() {

  const [user] = useState<User>({
    name: "John",
    age: 30,
  });

  return (
    <>
      <DashBoardContext.Provider value={user}>
        <DashBoard />
      </DashBoardContext.Provider>
    </>
  );
}

export default App;
