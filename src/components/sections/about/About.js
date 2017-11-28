import React from 'react';
import { Grid } from 'semantic-ui-react';
import SectionTitle from '../../section-title/SectionTitle';
import './About.scss';

class About extends React.Component {
  state = {};

  render() {
    return (
      <div className="about">
        <SectionTitle text="about me" />
        <Grid columns={2}>
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
