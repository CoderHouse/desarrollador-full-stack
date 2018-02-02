import React, { Component } from 'react';
export default class PostBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titulo: '',
      bajada: '',
      id: 0,
      link: ''
    };
  }

  handleSubmit() {
    this.props.onSubmit(this.state);
    this.setState({
      titulo:'',
      bajada: '',
      id: this.props.nextId(),
      link: ''
    });
  }

  onTitleChange(e) {
    this.setState({titulo:e.target.value});
  }

  onSummaryChange(e) {
    this.setState({bajada:e.target.value});
  }

  onLinkChange(e) {
    this.setState({link:e.target.value});
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="form-group">
          <label>Link:</label>
          <input className="form-control" type="text" value={this.state.link} onChange={this.onLinkChange.bind(this)}/>
        </div>
        <div className="form-group">
          <label>Title:</label>
          <input className="form-control" type="text" value={this.state.titulo} onChange={this.onTitleChange.bind(this)}/>
        </div>
        <div className="form-group">
          <label>Summary</label>
          <textarea className="form-control" value={this.state.bajada} onChange={this.onSummaryChange.bind(this)}/>
        </div>
        <div className="form-group">
          <button className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>Submit</button>
        </div>
      </div>
    );
  }
}