import React from 'react';
import '../../assets/stylesheets/shared.css'

class ToiletForm extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.toiletPos) {
      this.state = {
        lat: this.props.toiletPos.lat,
        lng: this.props.toiletPos.lng,
        title: this.props.title,
        address: this.props.address,
        comments: this.props.comments,
        date: new Date(),
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return(e) => {
      this.setState({[field]: e.target.value});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatchToilet(this.state).then(() => this.props.history.push('/main'))
  }


  render() {
    if (!this.props.creator) {
      return <h2>You Must Log In to Create Toilets</h2>;
    }
    this.state.creator = this.props.creator;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="input-text"
            type="text"
            placeholder="Title of the Porcelain You're Sitting On"
            value={this.state.title}
            onChange={this.update('title')}
            />
          <input
            className="btn btn-submit"
            type="submit"
            value={this.props.formType}
            />
        </form>
      </div>
    )
  }
}

export default ToiletForm;
