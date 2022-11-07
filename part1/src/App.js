import "./App.css";
import Mensaje from "./Mensaje";

const Description = () => {
  return <p>Esta es la app del curso de fullstack bootcamp</p>;
};

function App() {
  return (
    <div className="App">
      <Mensaje color="red" msg="Estamos trabajando" />
      <Mensaje color="blue" msg="en un curso" />
      <Mensaje color="orange" msg="de React" />
      <Description />
    </div>
  );
}

export default App;
