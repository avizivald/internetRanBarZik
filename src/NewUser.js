import React from 'react';
import  Myinput from'./utils/Myinput'
import { connect } from 'react-redux';
const axios = require('axios');


class NewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       
    };
}
 sendCandidate = ()=>{
  var size =this.props.newPerson? Object.keys(this.props.newPerson).length:null ;
  console.log("tttttttttt",this.props.newPerson);
  console.log("size ",size);
  // if(! size ||size < 11){
  //   alert("בבקשה מלא את כל השדות")
  // }
  // else {
    const person = Object.assign({}, this.props.newPerson);
let json = {
  eli:'eli'
}
console.log("persom",this.props.newPerson);

    axios.post('/a',this.props.newPerson )
    .then(function (response) {
      console.log("jkljlk",response);
    })
    .catch(function (error) {
      console.log(error);
    });
  // }
  
}

  render() {
    
    return <React.Fragment> <div className='newUser'>
      <p className="titleOfNewUser">Your step towards not being alone
</p>
<div className="first">
      <Myinput
      role="name"
      header="name"
      type="text" />
      <Myinput
      role="pid"
      header="ID"
      type="text" />
      <Myinput
      role="age"
      header="age"
      min="18"
      max="80"
      type="number" />
      <Myinput
      role="Gender"
      header="Gender"
      select={true}
      option={[
        <option >male</option>,
          <option >female</option>
        ]
        }
        type="text" />
         <Myinput
      role="tel"
      header="tel"
      min="1000000"
      max="9999999999"
      type="number" />
      <Myinput
      role="address"
      header="address"
      type="text" />
      </div>
    <div className="secend">
      <Myinput
      role="father"
      header="father"
      
      type="text" />
      <Myinput
      role="mother"
      header="mother"
      type="text" />
         <Myinput
      role="gives"
      header="gives"
      type="number" />
      <Myinput
      role="yeshiva"
      header="yeshiva"
      type="text" />
      <Myinput
      role="chug"
      header="chug"
      type="text" />
     
        <button onClick={this.sendCandidate} className="sendButton">send</button>
      </div>
    </div></React.Fragment> 
  }
}

const mapStateToProps = (state) => {
  console.log("state.shiduchim  ",state.shiduchim);
  
      return {
          newPerson :state.shiduchim.newPerson
  
      }
  
  }


export default connect(
  mapStateToProps,
  {  }
)(NewUser);