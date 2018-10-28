import React, { Component } from 'react';

export class CommentForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            rating: '',
            body: '',
            creator: this.props.creator.username,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createToiletComment(this.state)
        .then(() => {
            this.setState({
                rating: '',
                body: '',
                creator: this.props.creator.username,
            })
        });
    }


  render() {
      this.state.toilet_id = this.props.toiletId;
      if (this.props.creator.id) {
          return (
              <form className="comment-form" onSubmit={this.handleSubmit}>
                  <textarea className="input-text comment-textarea" placeholder="Add Comment" value={this.state.body} onChange={this.update("body")} />
      
                  <div className="ratings">
                      <h2>Rating</h2>
                      <label>
                          <span>1</span>
                          <input type="radio" name="rating" value="1" onChange={this.update("rating")} />
                      </label>
                      <label>
                          <span>2</span>
                          <input type="radio" name="rating" value="2" onChange={this.update("rating")} />
                      </label>
                      <label>
                          <span>3</span>
                          <input type="radio" name="rating" value="3" onChange={this.update("rating")} />
                      </label>
                      <label>
                          <span>4</span>
                          <input type="radio" name="rating" value="4" onChange={this.update("rating")} />
                      </label>
                      <label>
                          <span>5</span>
                          <input type="radio" name="rating" value="5" onChange={this.update("rating")} />
                      </label>
                  </div>
      
                  <button className="btn btn-secondary btn-m">Create Comment</button>
              </form>
          )
      }
      return <h1>Sign In to comment!</h1>
  }
}

export default CommentForm
