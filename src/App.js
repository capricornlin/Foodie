import Home from "./Pages/Home";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import AppRouter from "./Components/AppRouter";
import AuthContextProider from "./Context/AuthContext";

function App() {
  // const element = useRoutes(routes);
  // return element;
  return (
    <AuthContextProider>
      <AppRouter />
    </AuthContextProider>
  );
}

export default App;
