import React from 'react';
import { Form, Button, TextArea } from 'semantic-ui-react';
import isEmail from 'validator/lib/isEmail';
import InlineError from '../messages/InlineError';

class EmailForm extends React.Component {
  state = {
    data: {
      email: '',
      message: '',
    },
    errors: {},
  };

  onChange = e => {
    e.preventDefault();
    const { data, errors } = this.state;

    this.setState({
      data: { ...data, [e.target.name]: e.target.value },
      errors: { ...errors, [e.target.name]: '' },
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      document.querySelector('.ui.form').submit();
    }
  };

  validate = data => {
    const errors = {};
    if (!isEmail(data.email)) errors.email = 'Wpisany email jest niepoprawny';
    if (!data.message) errors.message = 'Wiadomość nie może być pusta';
    return errors;
  };

  render() {
    const { data, errors } = this.state;

    return (
      <Form
        onSubmit={this.onSubmit}
        method="post"
        action="https://formspree.io/szalbierz.d.k@gmail.com"
      >
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Twój email"
              value={data.email}
              onChange={this.onChange}
            />
          </label>
          {!!errors.email && <InlineError text={errors.email} />}
        </Form.Field>

        <Form.Field error={!!errors.message}>
          <label htmlFor="message">
            <TextArea
              type="text"
              id="message"
              name="message"
              placeholder="Wiadomość dla mnie"
              value={data.message}
              onChange={this.onChange}
            />
          </label>
          {!!errors.message && <InlineError text={errors.message} />}
        </Form.Field>

        <Button type="submit">Wyślij</Button>
      </Form>
    );
  }
}

export default EmailForm;
