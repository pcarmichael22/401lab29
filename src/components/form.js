import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', list: [], nextId: 0 };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    // console.log(this.state.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    let joinedArray = this.state.list.concat({
      id: this.state.nextId,
      value: this.state.value
    });
    console.log(joinedArray);
    this.setState({ list: joinedArray });
    this.setState({ nextId: this.state.nextId + 1 });
  }

  handleClick(id) {
    this.setState(state => {
      const list = state.list.map(item => {
        if (item.id === id) {
          item.completed = true;
        }
        return item;
      });
      return {
        list
      };
    });
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Click to add to the List!</button>
        </form>
        <ul>
          {this.state.list.map(data => {
            return (
              <li key={data.id}>
                <button type="button" onClick={() => this.handleClick(data.id)}>
                  {data.value}
                </button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Form;
