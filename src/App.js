import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";

//Components
import Home from "./components/Home";

// Material UI
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

// Global CSS
import "./App.css";

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
          <div className="App">
            <CssBaseline />
            <Home />
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
