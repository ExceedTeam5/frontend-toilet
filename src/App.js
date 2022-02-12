import logo from "./logo.svg";
import ToiletList from "./components/ToiletList";
import classes from "./App.module.css";
import { Fragment } from "react/cjs/react.production.min";

import Time from "./components/Time";

function App() {

  return (
    <div className={classes.bg}>
      <div>
        <header>
          <div className={classes.title}>
          <h3 className={classes.welcome}>WELCOME</h3>
          <h3 className={classes.to}>TO</h3>
          <h1 className={classes.title}>Luxury Toilet</h1>
          {/* <h2>current time: {timeState}</h2> */}
          <Time />
          </div>
          
        </header>

        <div className={classes.container}>
          <ToiletList />
        </div>
      </div>
    </div>
  );
}

export default App;
