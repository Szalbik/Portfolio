import React from 'react';
import EmailForm from '../../forms/EmailForm';

class Contact extends React.Component {
  state = {};

  render() {
    return (
      <div className="contact">
        <EmailForm />;
      </div>
    );
  }
}

export default Contact;
