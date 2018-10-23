import React from 'react';


class ToiletForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: this.props.lat,
      lng: this.props.lng,
      title: this.props.title,
      creator_id: this.prop.creator_id,
      date: new Date(),
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
    this.props.action(this.state).then(() => this.props.history.push('/'))
  }


  render() {
    return (
      <div>
        <h1>Hi</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Title of the Porcelain You're Sitting On"
            value={this.state.title}
            onChange={this.update('title')}
            />
          <input
            type="submit"
            value={this.props.formType}
            />
        </form>
      </div>
    )
  }
}

export default ToiletForm;
