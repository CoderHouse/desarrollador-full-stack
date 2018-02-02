import React, { Component } from 'react';
import Post from './Post';
export default class PostList extends Component {

  onVote(postId) {
    console.log(postId);
    this.props.vote(postId);
  }

  onDelete(postId) {
    this.props.delete(postId);
  }

  onEdit(postId) {
    this.props.edit(postId);
  }

  render() {
    return (
      <div className="col-md-12">
        {this.props.posts.map(post => (
          <Post
            key={post.id}
            postId={post.id}
            link={post.link}
            titulo={post.titulo}
            bajada={post.bajada}
            votes={post.votes}
            onVote={this.onVote.bind(this)}
            onDelete={this.onDelete.bind(this)}
            onEdit={this.onEdit.bind(this)}/>
        ))}
      </div>
    );
  }
}