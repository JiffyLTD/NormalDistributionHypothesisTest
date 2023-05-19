import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import MyRoutes from "./Components/MyRoutes/MyRoutes";

function App() {
  return (
    <div className="container">
      <Header/>
      <BrowserRouter>
        <MyRoutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
