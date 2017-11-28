import React from 'react';
import { Grid, Divider } from 'semantic-ui-react';
import Data from './data';
import './About.scss';

class About extends React.Component {
  state = {};

  render() {
    return (
      <div className="about">
        <Grid columns={2}>
          <Grid.Row verticalAlign="middle">
            <Grid.Column width={4}>
              <Data />
            </Grid.Column>

            <Grid.Column width={12}>
              <Divider />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={4} />

            <Grid.Column width={12} />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default About;
