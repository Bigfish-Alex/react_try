// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer" 
        >
          Learn React
        </a> 
      </header>
      <div className="test">
        
      </div> */}
      <Title />
      <List />
    </div>
  );
}

class Title extends Component {
  render() {
    return (
      <div>HELLO WORLD</div>
    )
  }
}

const users = [
  { username: 'Jerry', age: 21, gender: 'male' },
  { username: 'Tommey', age: 11, gender: 'male' },
  { username: 'Lily', age: 31, gender: 'female' },
  { username: 'Yeli', age: 23, gender: 'female' }
];

class List extends Component {
  render() {
    return (
      <div>
        {users.map((user,i)=>
          <User user={user} key={i}/>
        )}
      </div>
    )
  }
}

class User extends Component {
  render() {
    const { user } = this.props
    return (
      <div className="line">
        <div>姓名:{user.username}</div>
        <div>年龄:{user.age}</div>
        <div>性别:{user.gender}</div>
      </div>
    )
  }
}

export default App;
