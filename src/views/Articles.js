import React from 'react';
import { connect } from 'react-redux';
import Card from 'components/molecules/Card/Card';
import GridTemplate from 'templates/GridTemplate';

const Articles = ({ articles }) => (
  <GridTemplate pageType="articles">
    {articles.map((article) => (
      <Card
        id={article.id}
        pageType="articles"
        title={article.title}
        created={article.created}
        content={article.content}
        articleUrl={article.articleUrl}
        key={article.id}
      />
    ))}
  </GridTemplate>
);

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps)(Articles);
