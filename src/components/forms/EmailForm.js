import React from 'react';
// import { Form, Button, TextArea } from 'semantic-ui-react';
import axios from 'axios';

class EmailForm extends React.Component {
  state = {
    data: {
      email: '',
      message: '',
    },
  };

  onSubmit = e => {
    e.preventDefault();
    const { data } = this.state;
    const url = e.target.action;
    axios.post(url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: {
        data,
      },
    });
  };

  onChange = e => {
    const { data } = this.state;

    e.preventDefault();
    this.setState({ ...data, data: { [e.target.name]: e.target.value } });
  };

  render() {
    // const { data } = this.state;
    return (
      // <Form
      //   onSubmit={this.onSubmit}
      //   method="post"
      //   action="https://script.google.com/macros/s/AKfycbw3B9B01HNRbesDhDq9xbJ3xBFD0Zpt9YCoD2DO-dFE-JofjALp/exec"
      // >
      //   <Form.Field>
      //     <label htmlFor="email">
      //       <input
      //         type="email"
      //         id="email"
      //         name="email"
      //         value={data.email}
      //         onChange={this.onChange}
      //       />
      //     </label>
      //   </Form.Field>
      //
      //   <label htmlFor="message">
      //     <TextArea
      //       type="text"
      //       id="message"
      //       name="message"
      //       value={data.message}
      //       onChange={this.onChange}
      //     />
      //   </label>
      //   <Button type="submit">Send</Button>
      // </Form>
      <form
        id="gform"
        method="POST"
        className="pure-form pure-form-stacked"
        data-email="example@email.net"
        action="https://script.google.com/macros/s/AKfycbw3B9B01HNRbesDhDq9xbJ3xBFD0Zpt9YCoD2DO-dFE-JofjALp/exec"
      >
        <fieldset className="pure-group">
          <label htmlFor="name">
            Name:
            <input
              id="name"
              name="name"
              placeholder="What your Mom calls you"
            />
          </label>
        </fieldset>

        <fieldset className="pure-group">
          <label htmlFor="message">
            Message:
            <textarea
              id="message"
              name="message"
              rows="10"
              placeholder="Tell us what's on your mind..."
            />
          </label>
        </fieldset>

        <fieldset className="pure-group">
          <label htmlFor="email">
            <em>Your</em> Email Address:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your.name@email.com"
          />
          <span id="email-invalid" style={{ display: 'none' }}>
            Must be a valid email address
          </span>
        </fieldset>

        <fieldset className="pure-group">
          <label htmlFor="color">
            Favourite Color:
            <input id="color" name="color" placeholder="green" />
          </label>
        </fieldset>

        <button className="button-success pure-button button-xlarge">
          <i className="fa fa-paper-plane" />&nbsp;Send
        </button>
      </form>
    );
  }
}

export default EmailForm;
