import React from 'react';
import EmailForm from '../../forms/EmailForm';
import SectionTitle from '../../section-title/SectionTitle';
import './style.scss';

class Contact extends React.Component {
  state = {};

  render() {
    return (
      <div className="contact">
        <SectionTitle text="contact" />
        <EmailForm />
      </div>
    );
  }
}

export default Contact;
