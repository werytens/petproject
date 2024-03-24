import React from "react";
import Dates from "./other/Dates";
import Form from "./other/Form";
import Types from "./other/Types";

function App() {
  return (
    <div className=" absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] bg-[#87642b] w-[600px] h-[800px] p-2 rounded">
      <Dates />
      <Form display />
      <Types />
    </div>
  );
}

export default App;
