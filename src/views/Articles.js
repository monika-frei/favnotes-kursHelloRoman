import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'components/molecules/Card/Card';
import GridTemplate from 'templates/GridTemplate';
import { fetchItems } from 'actions';

class Articles extends Component {
  componentDidMount() {
    this.props.fetchArticles();
  }
  render() {
    const { articles } = this.props;
    return (
      <GridTemplate>
        {articles.map(({ title, content, _id: id, articleUrl }) => (
          <Card
            id={id}
            pageType="articles"
            title={title}
            content={content}
            articleUrl={articleUrl}
            key={id}
          />
        ))}
      </GridTemplate>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticles: () => dispatch(fetchItems('articles')),
  };
};

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
