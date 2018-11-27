import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import indexRoutes from "routes/index.jsx";
import store from "./store";

// Material UI
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

// Global CSS
import "assets/css/material-dashboard-react.css";
import "assets/css/App.css";

const hist = createBrowserHistory();
const defaultTheme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <Router history={hist}>
            <Switch>
              {indexRoutes.map((prop, key) => {
                return <Route path={prop.path} component={prop.component} key={key} />;
              })}
            </Switch>
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
