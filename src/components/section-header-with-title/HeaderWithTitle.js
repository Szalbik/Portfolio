import React from 'react';
import { Header, Label, Segment, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './style.scss';

const HeaderWithTitle = props => (
  <Segment raised>
    <Header as="h2">
      <Icon name="circle thin" />
      <Header.Content>
        {props.title}
        <Label horizontal>{props.year}</Label>
      </Header.Content>
      <Header.Subheader>{props.content}</Header.Subheader>
    </Header>
  </Segment>
);

HeaderWithTitle.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default HeaderWithTitle;
