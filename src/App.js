import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./component/Header";
import Section from "./component/Section";
import Footer from "./component/Footer";
import { DataProvider } from "./component/Context";

/* ================================================= */

class App extends React.Component {
  render() {
    return (
      <DataProvider>
        <div className="app">
          <Router>
            <Header />
            <Section />
            <Footer />
          </Router>
        </div>
      </DataProvider>
    );
  }
}

export default App;
