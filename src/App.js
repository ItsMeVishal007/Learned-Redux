import './App.css';
import { connect } from 'react-redux';
import * as action from './action';

function App({counter , INCREMENT , DECREMENT}) {
  // const counter = 0;
  return (
    <div className="App">
      <h3>count : {counter}</h3>
      <button onClick={INCREMENT}>Increment</button>
      <button onClick={DECREMENT}>Decrement</button>
    </div>
  );
}

const mapStateToProps = state =>({
  counter : state.counter
})

const mapDispatchToProps ={
  ...action
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
