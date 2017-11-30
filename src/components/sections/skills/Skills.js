import React from 'react';
import { Grid } from 'semantic-ui-react';
import SectionTitle from '../../section-title/SectionTitle';
import ProgressCircle from '../../progress/ProgressCircle';
import './Skills.scss';

const Skills = () => (
  <div className="skills">
    <SectionTitle text="skills" />

    <Grid centered>
      <Grid.Row>
        <Grid.Column computer={3} tablet={5} mobile={8}>
          <ProgressCircle proc={65} text="html/css" />
        </Grid.Column>
        <Grid.Column computer={3} tablet={5} mobile={8}>
          <ProgressCircle proc={50} text="es5/es6" />
        </Grid.Column>
        <Grid.Column computer={3} tablet={5} mobile={8}>
          <ProgressCircle proc={65} text="react/redux" />
        </Grid.Column>
        <Grid.Column computer={3} tablet={5} mobile={8}>
          <ProgressCircle proc={30} text="node" />
        </Grid.Column>
        <Grid.Column computer={3} tablet={5} mobile={8}>
          <ProgressCircle proc={50} text="ruby /rails" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default Skills;
