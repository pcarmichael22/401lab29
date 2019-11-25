import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <span>&copy; {this.props.display}</span>
    )
  }
}

export default Footer;