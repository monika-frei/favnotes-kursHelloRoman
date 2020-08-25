const initialState = {
  twitters: [
    {
      title: 'Hello Roman',
      created: '1day',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non mauris ultricies, suscipit risus ut, rhoncus quam. Ut ullamcorper, mi vitae blandit lacinia, nulla velit pellentesque nibh, sed aliquam nunc sapien a urna. Phasellus faucibus at magna in ultrices. Maecenas laoreet, sapien eget facilisis sagittis, risus purus fermentum quam, eu rhoncus tortor erat non sem. ',
      twitterName: 'hello_roman',
      id: 1,
    },
    {
      title: 'Atomic Design',
      created: '2days',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non mauris ultricies, suscipit risus ut, rhoncus quam. Ut ullamcorper, mi vitae blandit lacinia, nulla velit pellentesque nibh, sed aliquam nunc sapien a urna. Phasellus faucibus at magna in ultrices. Maecenas laoreet, sapien eget facilisis sagittis, risus purus fermentum quam, eu rhoncus tortor erat non sem. ',
      twitterName: 'brad_frost',
      id: 2,
    },
    {
      title: 'Space!',
      created: '2days',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non mauris ultricies, suscipit risus ut, rhoncus quam. Ut ullamcorper, mi vitae blandit lacinia, nulla velit pellentesque nibh, sed aliquam nunc sapien a urna. Phasellus faucibus at magna in ultrices. Maecenas laoreet, sapien eget facilisis sagittis, risus purus fermentum quam, eu rhoncus tortor erat non sem. ',
      twitterName: 'elonmusk',
      id: 3,
    },
    {
      title: 'Hello Roman',
      created: '1day',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non mauris ultricies, suscipit risus ut, rhoncus quam. Ut ullamcorper, mi vitae blandit lacinia, nulla velit pellentesque nibh, sed aliquam nunc sapien a urna. Phasellus faucibus at magna in ultrices. Maecenas laoreet, sapien eget facilisis sagittis, risus purus fermentum quam, eu rhoncus tortor erat non sem. ',
      twitterName: 'hello_roman',
      id: 4,
    },
    {
      title: 'Atomic Design',
      created: '2days',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non mauris ultricies, suscipit risus ut, rhoncus quam. Ut ullamcorper, mi vitae blandit lacinia, nulla velit pellentesque nibh, sed aliquam nunc sapien a urna. Phasellus faucibus at magna in ultrices. Maecenas laoreet, sapien eget facilisis sagittis, risus purus fermentum quam, eu rhoncus tortor erat non sem. ',
      twitterName: 'brad_frost',
      id: 5,
    },
  ],
  notes: [
    {
      title: 'Note one',
      created: '3 days',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non mauris ultricies, suscipit risus ut, rhoncus quam. Ut ullamcorper, mi vitae blandit lacinia, nulla velit pellentesque nibh, sed aliquam nunc sapien a urna. Phasellus faucibus at magna in ultrices. Maecenas laoreet, sapien eget facilisis sagittis, risus purus fermentum quam, eu rhoncus tortor erat non sem. ',
      id: 1,
    },
    {
      title: 'Very interesting note',
      created: '5 days',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non mauris ultricies, suscipit risus ut, rhoncus quam. Ut ullamcorper, mi vitae blandit lacinia, nulla velit pellentesque nibh, sed aliquam nunc sapien a urna. Phasellus faucibus at magna in ultrices. Maecenas laoreet, sapien eget facilisis sagittis, risus purus fermentum quam, eu rhoncus tortor erat non sem. ',
      id: 2,
    },
    {
      title: 'What a wonderful note',
      created: '1 day',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non mauris ultricies, suscipit risus ut, rhoncus quam. Ut ullamcorper, mi vitae blandit lacinia, nulla velit pellentesque nibh, sed aliquam nunc sapien a urna. Phasellus faucibus at magna in ultrices. Maecenas laoreet, sapien eget facilisis sagittis, risus purus fermentum quam, eu rhoncus tortor erat non sem. ',
      id: 3,
    },
    {
      title: 'Note four',
      created: '5 days',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non mauris ultricies, suscipit risus ut, rhoncus quam. Ut ullamcorper, mi vitae blandit lacinia, nulla velit pellentesque nibh, sed aliquam nunc sapien a urna. Phasellus faucibus at magna in ultrices. Maecenas laoreet, sapien eget facilisis sagittis, risus purus fermentum quam, eu rhoncus tortor erat non sem. ',
      id: 4,
    },
    {
      title: 'One more note',
      created: '2 days',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non mauris ultricies, suscipit risus ut, rhoncus quam. Ut ullamcorper, mi vitae blandit lacinia, nulla velit pellentesque nibh, sed aliquam nunc sapien a urna. Phasellus faucibus at magna in ultrices. Maecenas laoreet, sapien eget facilisis sagittis, risus purus fermentum quam, eu rhoncus tortor erat non sem. ',
      id: 5,
    },
    {
      title: 'Note six',
      created: '6 days',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non mauris ultricies, suscipit risus ut, rhoncus quam. Ut ullamcorper, mi vitae blandit lacinia, nulla velit pellentesque nibh, sed aliquam nunc sapien a urna. Phasellus faucibus at magna in ultrices. Maecenas laoreet, sapien eget facilisis sagittis, risus purus fermentum quam, eu rhoncus tortor erat non sem. ',
      id: 6,
    },
  ],
  articles: [
    {
      title: 'Atomic design',
      created: '3 days',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non mauris ultricies, suscipit risus ut, rhoncus quam. Ut ullamcorper, mi vitae blandit lacinia, nulla velit pellentesque nibh, sed aliquam nunc sapien a urna. Phasellus faucibus at magna in ultrices. Maecenas laoreet, sapien eget facilisis sagittis, risus purus fermentum quam, eu rhoncus tortor erat non sem. ',
      articleUrl: 'https://bradfrost.com/blog/post/atomic-web-design/',
      id: 1,
    },
    {
      title: 'React documentation',
      created: '2 days',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non mauris ultricies, suscipit risus ut, rhoncus quam. Ut ullamcorper, mi vitae blandit lacinia, nulla velit pellentesque nibh, sed aliquam nunc sapien a urna. Phasellus faucibus at magna in ultrices. Maecenas laoreet, sapien eget facilisis sagittis, risus purus fermentum quam, eu rhoncus tortor erat non sem. ',
      articleUrl: 'https://reactjs.org/',
      id: 2,
    },
    {
      title: 'Fantastic article',
      created: '3 days',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non mauris ultricies, suscipit risus ut, rhoncus quam. Ut ullamcorper, mi vitae blandit lacinia, nulla velit pellentesque nibh, sed aliquam nunc sapien a urna. Phasellus faucibus at magna in ultrices. Maecenas laoreet, sapien eget facilisis sagittis, risus purus fermentum quam, eu rhoncus tortor erat non sem. ',
      articleUrl: 'https://bradfrost.com/blog/post/atomic-web-design/',
      id: 3,
    },
    {
      title: 'Inspiration',
      created: '2 days',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non mauris ultricies, suscipit risus ut, rhoncus quam. Ut ullamcorper, mi vitae blandit lacinia, nulla velit pellentesque nibh, sed aliquam nunc sapien a urna. Phasellus faucibus at magna in ultrices. Maecenas laoreet, sapien eget facilisis sagittis, risus purus fermentum quam, eu rhoncus tortor erat non sem. ',
      articleUrl: 'https://reactjs.org/',
      id: 4,
    },
    {
      title: 'Design design',
      created: '3 days',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non mauris ultricies, suscipit risus ut, rhoncus quam. Ut ullamcorper, mi vitae blandit lacinia, nulla velit pellentesque nibh, sed aliquam nunc sapien a urna. Phasellus faucibus at magna in ultrices. Maecenas laoreet, sapien eget facilisis sagittis, risus purus fermentum quam, eu rhoncus tortor erat non sem. ',
      articleUrl: 'https://bradfrost.com/blog/post/atomic-web-design/',
      id: 5,
    },
    {
      title: 'react react',
      created: '2 days',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non mauris ultricies, suscipit risus ut, rhoncus quam. Ut ullamcorper, mi vitae blandit lacinia, nulla velit pellentesque nibh, sed aliquam nunc sapien a urna. Phasellus faucibus at magna in ultrices. Maecenas laoreet, sapien eget facilisis sagittis, risus purus fermentum quam, eu rhoncus tortor erat non sem. ',
      articleUrl: 'https://reactjs.org/',
      id: 6,
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter((item) => item.id !== action.payload.id),
        ],
      };
    case 'ADD_ITEM':
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.item],
      };
    default:
      return state;
  }
};

export default rootReducer;
