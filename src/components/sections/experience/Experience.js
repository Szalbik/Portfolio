import React from 'react';
import { Header, Label, Segment, Icon } from 'semantic-ui-react';
import SectionTitle from '../../section-title/SectionTitle';
import './Experience.scss';

class Experience extends React.Component {
  state = {};

  render() {
    return (
      <div className="experience">
        <SectionTitle text="experience" round />

        <Segment raised>
          <Header as="h2">
            <Icon name="circle thin" />
            <Header.Content>
              Pierwsza praca
              <Label horizontal>1994 - 2000</Label>
            </Header.Content>
            <Header.Subheader>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Header.Subheader>
          </Header>
        </Segment>

        <Segment raised>
          <Header as="h2">
            <Icon name="circle thin" />
            <Header.Content>
              Pierwsza praca
              <Label horizontal>1994 - 2000</Label>
            </Header.Content>
            <Header.Subheader>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Header.Subheader>
          </Header>
        </Segment>
      </div>
    );
  }
}

export default Experience;
