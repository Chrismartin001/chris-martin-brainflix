import "./App.scss";
// import Comment from "./components/Comment";
import Home from "./pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopBar from "./components/topBar/TopBar";
import Upload from "./pages/Upload";
// can do as " " to rename Browser Router to anything you want.

function App() {
  return (
    <div className="App">
      <TopBar />

      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/vidoes/:id"
            render={(reactRouterDomProps) => {
              return <Home {...reactRouterDomProps} />;
            }}
          />
          <Route path="/upload" component={Upload} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

// <Link to=""
// or <NavLink to="" </NavLink> --- better for active link styling ---

// <Link to {props.match.path + "/services"}></Link

// // {/* <BrowserRouter>
// {/* <Switch>
// <Route path={props.match.path + "/services"} />
// <Route path="/about" component={} />
// </Switch>
// // </BrowserRouter> *
