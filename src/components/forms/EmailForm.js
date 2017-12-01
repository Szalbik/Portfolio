import React from 'react';
import { Form, Button, TextArea } from 'semantic-ui-react';

class EmailForm extends React.Component {
  state = {
    data: {
      email: '',
      message: '',
    },
  };

  onChange = e => {
    const { data } = this.state;

    e.preventDefault();
    this.setState({ ...data, data: { [e.target.name]: e.target.value } });
  };

  render() {
    const { data } = this.state;
    return (
      <Form method="post" action="https://formspree.io/szalbierz.d.k@gmail.com">
        <Form.Field>
          <label htmlFor="email">
            <input
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={this.onChange}
            />
          </label>
        </Form.Field>

        <label htmlFor="message">
          <TextArea
            type="text"
            id="message"
            name="message"
            value={data.message}
            onChange={this.onChange}
          />
        </label>
        <Button type="submit">Send</Button>
      </Form>
    );
  }
}

export default EmailForm;
