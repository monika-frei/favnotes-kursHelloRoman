import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Twitters = ({ twitters }) => (
  <GridTemplate>
    {twitters.map((twitter) => (
      <Card
        id={twitter.id}
        pageType="twitters"
        title={twitter.title}
        created={twitter.created}
        content={twitter.content}
        twitterName={twitter.twitterName}
        key={twitter.id}
      />
    ))}
  </GridTemplate>
);

const mapStateToProps = ({ twitters }) => ({ twitters });

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      twitterName: PropTypes.string,
    }),
  ),
};

Twitters.defaultProps = {
  twitters: [],
};

export default connect(mapStateToProps)(Twitters);
