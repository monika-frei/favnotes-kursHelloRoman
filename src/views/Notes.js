import React, { Component } from 'react';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { fetchItems } from 'actions';

class Notes extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }
  render() {
    const { notes } = this.props;
    return (
      <GridTemplate>
        {notes.map(({ title, content, _id: id }) => (
          <Card id={id} pageType="notes" title={title} content={content} key={id} />
        ))}
      </GridTemplate>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNotes: () => dispatch(fetchItems('notes')),
  };
};

const mapStateToProps = (state) => {
  const { notes } = state;
  return { notes };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
