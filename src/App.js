import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";

const App = () => {
  return (
    <div className="App">
      <LifecycleA />
      {/* <Form /> */}

      {/* <h1 className='error'>Error</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}
      {/* <Inline /> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <ClassClick /> */}
      {/* <FunctionClick /> */}
      {/* <Counter /> */}

      {/* <Message /> */}

      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p> </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet>
      <Greet name="Diana"heroName="Wonder Woman">
      </Greet>

      <Welcome name="Bruce" heroName="Batman"/>
      <Welcome name="Clark" heroName="Superman"/>
      <Welcome name="Diana"heroName="Wonder Woman"/> */}
    </div>
  );
};

export default App;
