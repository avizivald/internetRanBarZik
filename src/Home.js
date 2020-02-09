import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import NewUser from './NewUser'

class Home extends React.Component {
  render() {
    return <div className='home'>
      <p className="title">לא טוב היות האדם לבדו</p>
      <NewUser/>
    </div>
  }
}

export default Home;