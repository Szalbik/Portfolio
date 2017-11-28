import React from 'react';
import { Grid, Divider } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Title from './title';
import './SectionTitle.scss';

class SectionTitle extends React.Component {
  state = {};

  render() {
    return (
      <div className="section-title">
        <Grid columns={2}>
          <Grid.Row verticalAlign="middle">
            <Grid.Column width={4}>
              <Title text={this.props.text} />
            </Grid.Column>

            <Grid.Column width={12}>
              <Divider />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

SectionTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SectionTitle;
