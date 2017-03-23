import React, { Component } from 'react';
export default class Post extends Component {
  handleVote() {
    this.props.onVote(this.props.postId);
  }
  handleDelete() {
    this.props.onDelete(this.props.postId);
  }
  render() {
    const props = this.props;
    return (
      <div>
        <h3><a href={props.link}>{props.titulo}</a></h3>
        <p>{props.bajada}</p>
        <p>Votes: {props.votes || 0}</p>
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-default" onClick={this.handleVote.bind(this)}>Vote</button>
          <button type="button" className="btn btn-default" onClick={this.handleDelete.bind(this)}>Delete</button>
        </div>
      </div>
    );
  }
}