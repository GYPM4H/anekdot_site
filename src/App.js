import { Header } from "./Header/Header.jsx"
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import { MainPage } from "./MainPage/MainPage.jsx"
import { AboutPage } from "./About/AboutPage.jsx";
import { NavBar } from "./NavBar/NavBar.jsx"
import styles from "./App.module.css"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
         <div className={styles.content}>
          <NavBar />
          <Switch>
            
              <Route path="/" exact component={MainPage} />
              <Route path="/about" component={AboutPage} />
           
          </Switch>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
