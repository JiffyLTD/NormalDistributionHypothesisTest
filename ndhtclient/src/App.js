import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import MyRoutes from "./Components/MyRoutes/MyRoutes";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
