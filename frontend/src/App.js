// IMPORTING CSS
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import "./styles/style.css";

// IMPORTING ROUTER AND SWITCH
import {Switch, Route} from "react-router-dom";
import {useEffect, useState} from "react";
import LayoutActionCreate from "./pages/LayoutActionCreate";
import LayoutActionTable from "./pages/LayoutActionTable";
import ConnectDatabase from "./pages/ConnectDatabase";
import LayoutSettings from "./pages/LayoutSettings";

function App() {
  const [mode, setMode] = useState(1);

  let localMode = localStorage.getItem("modeLocal");

  useEffect(() => {
    if(!localMode) {
      localStorage.setItem("modeLocal", "1");
      setMode(1);
    }
    if(!localMode) {
      document.body.style.background = "#f5f6f8";
    } else if(localMode === "1") {
      document.body.style.background = "#f5f6f8";
    } else if(localMode && localMode === "2") {
      document.body.style.background = "#212121";
    }
  }, [localMode, mode]);

  return (
    <div
      className={`${
        (!localMode && "light") || (localMode === "1" && "light") || "dark"
      }`}
    >
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/actions" component={LayoutActionTable}/>
        <Route exact path="/connect-database" component={ConnectDatabase}/>
        <Route exact path="/settings">
          <LayoutSettings localMode={localMode} mode={mode} setMode={setMode}/>
        </Route>
        <Route exact path="/create-action">
          <LayoutActionCreate localMode={localMode}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;