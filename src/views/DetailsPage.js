import React, { Component } from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import { routes } from 'routes';

class DetailsPage extends Component {
  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    switch (this.props.match.path) {
      case routes.article:
        this.setState({ pageType: 'articles' });
        break;
      case routes.twitter:
        this.setState({ pageType: 'twitters' });
        break;
      case routes.note:
        this.setState({ pageType: 'notes' });
        break;
    }
  }

  render() {
    const templateNote = {
      title: 'Note in details',
      created: '23/02/2020',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisi risus, mollis pretium massa a, varius placerat tortor. Donec facilisis sagittis ex, vitae pulvinar mauris eleifend non. Praesent ipsum sem, fermentum ac placerat at, varius ut odio. Nulla a semper tortor, volutpat pretium est. Nam nec dolor a augue malesuada mattis. ',
      twitterName: 'hello_roman',
      articleUrl: 'https://medium.com/',
    };
    return (
      <DetailsTemplate
        pageType={this.state.pageType}
        title={templateNote.title}
        created={templateNote.created}
        content={templateNote.content}
        twitterName={templateNote.twitterName}
        articleUrl={templateNote.articleUrl}
      ></DetailsTemplate>
    );
  }
}

export default DetailsPage;
