import React, { Component } from 'react';
import PostList from './PostList';
import PostBox from './PostBox';
import {request} from './utils';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    request('http://localhost:3001/posts')
    .then((response) => {
      this.setState({posts: JSON.parse(response)});
    });
  }

  vote(postId) {
    console.log('PostId' + postId);
    this.setState({posts: this.state.posts.map( post => {
      if(post.id === postId)
        post.votes = post.votes ? ++post.votes : 1;
      return post;
    })});
  }

  delete(postId) {
    this.setState({posts: this.state.posts.filter( post => post.id !== postId)});
  }

  submit(post) {
    this.setState({posts: [post, ...this.state.posts]});
  }

  getNextId() {
    return this.state.posts.reduce((max, post) => {
      if(post.id > max)
        max = post.id;

      return max;
    }, 0) + 1;
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1 className="col-md-12">CoderNews</h1>
          <PostBox nextId={this.getNextId.bind(this)} onSubmit={this.submit.bind(this)} />
          <PostList delete={this.delete.bind(this)} vote={this.vote.bind(this)} posts={this.state.posts}/>
        </div>
      </div>
    );
  }
}
