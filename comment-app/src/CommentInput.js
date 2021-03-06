import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommentInput extends Component {
    static propTypes = {
        onSubmit : PropTypes.func
    }

    constructor() {
        super()
        this.state = {
            username: '',
            content: ''
        }
    }

    // 生命周期钩子函数
    componentDidMount() {
        this.textarea.focus()
        this._loadUsername()
    }

    // 组件的私有方法 _开头区分
    _saveUsername(username){
        localStorage.setItem('username',username)
    }
    _loadUsername(){
        if(localStorage.getItem('username')){
            this.setState({
                username:localStorage.getItem('username')
            })
        }
    }

    // 监听函数
    handleUsernameChange(e){
        this.setState({
            username: e.target.value
        })
    }
    handleContentChange(e){
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit(){
        if(this.props.onSubmit){
            this.props.onSubmit({
                username: this.state.username,
                content: this.state.content,
                createdTime: +new Date()
            })
        }
        this.setState({content:''})
    }
    handleUsernameBlur(e){
        this._saveUsername(e.target.value)
    }
    
    // render函数
    render() {
        return(
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input 
                            value={this.state.username} 
                            onBlur={this.handleUsernameBlur.bind(this)}
                            onChange={this.handleUsernameChange.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea
                            ref={(textarea) => this.textarea = textarea}  
                            value={this.state.content} 
                            onChange={this.handleContentChange.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}

export default CommentInput