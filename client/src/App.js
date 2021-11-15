import "./App.scss";
import React, { Component } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Upload from "./pages/Upload";
import TopBar from "./components/topBar/TopBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <TopBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/vidoes/:id" component={Home} />
            <Route
              path="/upload"
              component={Upload}
              render={(reactRouterDomProps) => {
                return <Upload {...reactRouterDomProps} />;
              }}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
