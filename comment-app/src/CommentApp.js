import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
    constructor(){
        super()
        this.state = {
            commentList: []
        }
    }
    handleSubmitComment(comment){
        console.log(comment)
        let comments = this.state.commentList;
        comments.push(comment)
        this.setState({
            commentList:comments
        })
    }
    render() {
        return(
            <div className='wrapper'>
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList comments={this.state.commentList}/>
            </div>
        )
    }
}

export default CommentApp