import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
    constructor() {
        super()
        this.state = {
            commentList: [],
            isShowHeader: true
        }
    }


    componentDidMount() {
        // ajax.get('http://json-api.com/user', (userData) => {
        //     console.log(userData)
        // })
        this._loadComments()
    }

    _loadComments() {
        let comments = localStorage.getItem('comments');
        if(comments){
            comments = JSON.parse(comments)
            this.setState({
                commentList : comments
            })
        }
    }

    _saveComments(comments){
        localStorage.setItem('comments',JSON.stringify(comments))
    }

    handleSubmitComment(comment) {
        console.log(comment)
        let comments = this.state.commentList;
        comments.push(comment)
        if( !comment ) return
        if( !comment.username ) {
            alert('please input username') 
            return false
        }
        if( !comment.content ) {
            alert('please input content')
            return false
        }
        this.setState({
            commentList: comments
        })
        this._saveComments(comments)
    }
    handleHeaderClick() {
        this.setState({
            isShowHeader: !this.state.isShowHeader
        })
    }
    handleDeleteComment(index){
        console.log(index)
        const comments = this.state.commentList
        comments.splice(index,1)
        this.setState({comments})
        this._saveComments(comments)
    }


    render() {
        return (
            <div className='wrapper'>
                {/* {this.state.isShowHeader ? <Header /> : null}
                <div className='comment-field-button'>
                    <button onClick={this.handleHeaderClick.bind(this)}>S/H</button>
                </div> */}
                {/* <AutoFocusInput /> */}
                {/* <Card>
                    <h2>Children here</h2>
                    <p>this is very good</p>
                </Card> */}
                {/* <Editor /> */}
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
                <CommentList comments={this.state.commentList} onDeleteComment={this.handleDeleteComment.bind(this)}/>
            </div>
        )
    }
}

class Header extends Component {
    render() {
        return (
            <div>
                This is Comment Header!
            </div>
        )
    }
}

class AutoFocusInput extends Component {
    componentDidMount(){
        this.input.focus()
    }
    render() {
        return (
            <input ref={(input) => this.input = input} />
        )
    }
}

class Card extends Component {
    render() {
        return (
            <div className='card'>
                <div className='card-content'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

class Editor extends Component {
    constructor(){
        super()
        this.state = {
            content : '<h7>this is a html string</h7> <br/> Click Me turn to Blue Blue<br/> ',
            color:'balck'
        }
    }
    handleWordingClick(){
        this.setState({
            color:'blue'
        })
    }
    render() {
        return (
            <div className='editor' onClick={this.handleWordingClick.bind(this)} dangerouslySetInnerHTML={{__html:this.state.content}} style={{fontSize:'20px',color:this.state.color}}>
                {/* {this.state.content} */}
            </div>
        )
    }
}

export default CommentApp