import "../style/style.css";
import Login from "./Login/Login";
import CustomSlider from "./CustomSlider/CustomSlider";

function App() {
  return (
    <div className="App">
      <div className="container">
        <CustomSlider/>
        <Login />
      </div>
    </div>
  );
}

export default App;
