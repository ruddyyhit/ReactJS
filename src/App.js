import React, {Component} from 'react';
import './index.css';

class RegularClass {

}
class ComponentClass extends Component {}

console.log(RegularClass);
console.log(ComponentClass);

class App extends Component {
  render(){
    return (
      <div>
        <h1>Hello..!!</h1>
        <h2>my name Hitesh.</h2>
        <h3>i'm Developer</h3>
      </div>
    )
  }
}
export default App;
