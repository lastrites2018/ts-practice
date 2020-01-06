import React from "react";
import Greetings from "./Greetings";
import Counter from "./Counter";
import MyForm from "./MyForm";
import ReducerSample from "./ReducerSample";

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return (
    <div>
      {" "}
      <h1>basic 샘플</h1>
      <Greetings name="React" onClick={onClick} />
      <h1>카운터 샘플</h1>
      <Counter />
      <h1>마이폼 샘플</h1>
      <MyForm onSubmit={onSubmit} />
      <h1>리듀서 샘플</h1>
      <ReducerSample />
    </div>
  );
};

export default App;
