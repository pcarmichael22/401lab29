import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', person: '', list: [], nextId: 0 };

    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    // console.log(this.state.value);
  }
  handleChange2(event) {
    this.setState({ person: event.target.person });
    console.log(this.state.person);
  }

  handleSubmit(event) {
    event.preventDefault();
    let joinedArray = this.state.list.concat({
      id: this.state.nextId,
      value: this.state.value,
      person: this.state.person
    });
    console.log(joinedArray);
    this.setState({ list: joinedArray });
    this.setState({ nextId: this.state.nextId + 1 });
  }

  handleEdit(id) {
    this.setState(state => {
      const list = state.list.map(item => {
        if (item.id === id) {
          item.contentEditable = true;
        }
        return item;
      });
      return {
        list
      };
    });
  }

  handleDelete(id) {
    this.setState(state => {
      const list = state.list.filter(item => item.id !== id);
      return {
        list
      };
    });
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
          <label>
            <input
              type="text"
              person={this.state.person}
              onChange={this.handleChange2}
            />
          </label>
          <button type="submit">Click to add to the List!</button>
        </form>
        <ul>
          {this.state.list.map(data => {
            return (
              <li key={data.id}>
                <p
                  className={data.completed ? 'completed' : null}
                  contentEditable={data.contentEditable}
                >
                  {data.value}
                </p>
                <button type="button" onClick={() => this.handleClick(data.id)}>
                  Mark as Completed
                </button>
                <button type="button" onClick={() => this.handleEdit(data.id)}>
                  Edit Your Item
                </button>
                <button
                  type="button"
                  onClick={() => this.handleDelete(data.id)}
                >
                  Delete Task
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
