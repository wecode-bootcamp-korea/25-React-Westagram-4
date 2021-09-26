import React from 'react';
import CommentList from './CommentList';
import './Comment.scss';

let id = 4;

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
      content: '',
      isLiked: false,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ commentList: data });
      });
  }

  getComment = e => {
    if (e.code === 'Enter') {
      return;
    }
    this.setState({
      content: e.target.value,
    });
  };

  uploadComment = e => {
    this.state.commentList.push({
      id: id,
      userId: '_minji.jeong',
      content: this.state.content,
      isLiked: false,
    });
    this.setState({ content: '' });
    id++;
  };

  handleEnter = e => {
    if (e.code === 'Enter') {
      e.preventDefault();
      this.uploadComment();
    }
  };

  removeComment = deleteList => {
    const newArr = this.state.commentList.filter(
      item => item.id !== deleteList.props.id
    );
    this.setState({
      commentList: newArr,
    });
  };

  render() {
    return (
      <>
        <div className="article_comments">
          {/* 추가될 댓글 위치 */}
          {this.state.commentList.map(el => {
            return (
              <CommentList
                key={el.id}
                id={el.id}
                userId={el.userId}
                content={el.content}
                isLiked={el.isLiked}
                toggleLike={this.toggleLike}
                removeComment={this.removeComment}
              />
            );
          })}
        </div>
        <div className="time_ago">
          <span className="pass_time">42</span>분 전
        </div>
        <div className="add_comment">
          <textarea
            cols="30"
            rows="1"
            placeholder="댓글 달기..."
            onChange={this.getComment}
            onKeyPress={this.handleEnter}
            value={this.state.content}
          ></textarea>
          <button
            className="btn_upload"
            type="button"
            onClick={this.uploadComment}
          >
            게시
          </button>
        </div>
      </>
    );
  }
}

export default Comment;
