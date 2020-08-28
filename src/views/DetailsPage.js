import React, { Component } from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import { connect } from 'react-redux';
import withContext from 'hoc/withContext';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class DetailsPage extends Component {
  state = {
    activeItem: {
      title: '',
      content: '',
      articleUrl: '',
      twitterName: '',
    },
  };

  componentDidMount() {
    if (this.props.activeItem.length > 0) {
      const [activeItem] = this.props.activeItem;
      this.setState({
        activeItem,
      });
    } else {
      const { id } = this.props.match.params;
      axios
        .get(`http://localhost:9000/api/note/${id}`)
        .then(({ data }) => this.setState({ activeItem: data }))
        .catch((err) => console.log(err));
    }
  }

  render() {
    const { activeItem } = this.state;
    const { pageContext } = this.props;
    const { id } = this.props.match.params;
    return (
      <DetailsTemplate
        pageType={pageContext}
        title={activeItem.title}
        content={activeItem.content}
        twitterName={activeItem.twitterName}
        articleUrl={activeItem.articleUrl}
        id={id}
      ></DetailsTemplate>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  if (state[ownProps.pageContext]) {
    return {
      activeItem: state[ownProps.pageContext].filter(
        (activeItem) => activeItem._id === ownProps.match.params.id,
      ),
    };
  } else {
    return null;
  }
};

export default withContext(connect(mapStateToProps)(DetailsPage));
