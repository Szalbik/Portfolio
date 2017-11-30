import React from 'react';
import { Grid, Divider } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import SkewTitle from './skewTitle';
import RoundTitle from './roundTitle';
import './SectionTitle.scss';

const SectionTitle = props => (
  <div className="section-title">
    <Grid>
      <Grid.Row verticalAlign="middle">
        <Grid.Column computer={4} tablet={5} mobile={16}>
          {props.round ? (
            <RoundTitle text={props.text} />
          ) : (
            <SkewTitle text={props.text} />
          )}
        </Grid.Column>

        <Grid.Column only="computer tablet" computer={12} tablet={10}>
          <Divider />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

SectionTitle.propTypes = {
  text: PropTypes.string.isRequired,
  round: PropTypes.bool,
};

SectionTitle.defaultProps = {
  round: false,
};
export default SectionTitle;
