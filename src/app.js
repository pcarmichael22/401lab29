import React from 'react';
import Header from './components/header';
import Form from './components/form';
import Footer from './components/footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Peter Carmichael Lab 29',
      lab: 'Add something to your To-Do list!',
      copywrite: 'Peter Carmichael 2019'
    };
  }

  handleData = (count, results) => {
    this.setState({ count, results });
  };

  render() {
    console.log(this.state.count, this.state.results);
    return (
      <React.Fragment>
        <Header title={this.state.title} lab={this.state.lab} />
        <Form />
        <Footer display={this.state.copywrite} />
      </React.Fragment>
    );
  }
}

export default App;
