import React, {Component} from 'react';
import './index.css';

class RegularClass {

}
class ComponentClass extends Component {}

console.log(RegularClass);
console.log(ComponentClass);

class App extends Component {

// constructor (){
//   super();
//   this.state = {displayBio: false} ;
//   console.log('Component this',this);

//   this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
// }
// readMore(){
//   console.log('readMore this',this);
//   this.setState({displayBio:true});
// }
// showLess(){
// this.setState({displayBio:false});
// }
 
state = {displayBio:false};

toggleDisplayBio = () =>{
  this.setState({displayBio: !this.state.displayBio});
}
  render(){
const bio = this.state.displayBio ? (
 <div>
    <p> i live in Bangalore</p>
    <p>my favorite food is everything.</p>
    <div>
    <button onClick={this.toggleDisplayBio}>Show Less</button> 
  </div>
 </div>
 ) :  (
  <div>
    <button onClick={this.toggleDisplayBio}>Read More</button> 
  </div>
  
)

    return (
      <div>
        <h1>Hello..!!</h1>
        <h2>my name Hitesh.</h2>
        <h3>i'm Developer</h3>
        {bio}
      </div>
    ) 
  }
}
export default App;
