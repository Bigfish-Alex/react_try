import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class Title extends Component {
//   handleClickOnTitle(para, e) {
//     console.log('click on title')
//     console.log(e)
//     console.log(this)
//     console.log(para)
//   }
//   render() {
//     return (
//       <h1 onClick={this.handleClickOnTitle.bind(this, 'hello')}>React 小书</h1>
//     )
//   }
// }

// class Header extends Component {
//   render() {
//     return (
//       <div>
//         <Title />
//         <h2>This is Header content</h2>
//       </div>
//     )
//   }
// }

// class Main extends Component {
//   render() {
//     return (
//       <div>
//         <h1>This is Main content</h1>
//         <LikeButton likedText='YES' unlikedText='NO'/>
//       </div>
//     )
//   }
// }

// class Footer extends Component {
//   render() {
//     return (
//       <h1>This is Footer content</h1>
//     )
//   }
// }

// class LikeButton extends Component {
//   constructor() {
//     super()
//     this.state = {
//       isLiked: false,
//       count: 0
//     }
//   }

//   handleClickOnLikeButton() {
//     this.setState({
//       isLiked: !this.state.isLiked
//     })
//   }

//   render() {
//     const likedText = this.props.likedText || '取消'
//     const unlikedText = this.props.unlikedText || '点赞'
//     return (
//       <button onClick={this.handleClickOnLikeButton.bind(this)}>{this.state.isLiked ? likedText : unlikedText}</button>
//     )
//   }
// }

// class Index extends Component {
//   render() {
//     return (
//       <div>
//         <Header />
//         <Main />
//         <Footer />
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <Index />,
//   document.getElementById('root')
// )




import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
