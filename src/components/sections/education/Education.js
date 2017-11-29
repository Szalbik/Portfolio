import React from 'react';
import SectionTitle from '../../section-title/SectionTitle';
import HeaderWithTitle from '../../section-header-with-title/HeaderWithTitle';

class Education extends React.Component {
  state = {
    posts: {
      post_1: {
        title: 'Pierwsza szkoła',
        year: '1994 - 2000',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.`,
      },
      post_2: {
        title: 'Pierwsza szkoła',
        year: '1994 - 2000',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.`,
      },
    },
  };

  render() {
    return (
      <div className="education">
        <SectionTitle text="education" round />
        <HeaderWithTitle {...this.state.posts.post_1} />
        <HeaderWithTitle {...this.state.posts.post_2} />
      </div>
    );
  }
}

export default Education;
