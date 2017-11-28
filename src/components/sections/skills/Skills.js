import React from 'react';
import { Grid } from 'semantic-ui-react';
import SectionTitle from '../../section-title/SectionTitle';
import ProgressCircle from '../../progress/ProgressCircle';

const Skills = () => (
  <div>
    <SectionTitle text="skills" />

    <Grid column={4}>
      <Grid.Row>
        <Grid.Column width={4}>
          <ProgressCircle proc={65} text="html/css" />
        </Grid.Column>
        <Grid.Column width={4}>
          <ProgressCircle proc={50} text="es5/es6" />
        </Grid.Column>
        <Grid.Column width={4}>
          <ProgressCircle proc={65} text="react/redux" />
        </Grid.Column>
        <Grid.Column width={4}>
          <ProgressCircle proc={30} text="node" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default Skills;
