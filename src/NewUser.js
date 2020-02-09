import React from 'react';
import  Myinput from'./utils/Myinput'

class NewUser extends React.Component {
  
  render() {
    
    return <div className='newUser'>
      <p className="titleOfNewUser">Your step towards not being alone
</p>
      <Myinput
      role="name"
        header="name"
        type="text" />
      <Myinput
      role="id"
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
        <button className="sendButton">send</button>
    </div>
  }
}

export default NewUser;