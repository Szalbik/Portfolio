import React from 'react';
import SectionTitle from '../../section-title/SectionTitle';
import HeaderWithTitle from '../../section-header-with-title/HeaderWithTitle';
import './style.scss';

class Experience extends React.Component {
  state = {
    posts: {
      post_1: {
        title: 'Pierwsza praca',
        year: '1994 - 2000',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.`,
      },
      post_2: {
        title: 'Pierwsza praca',
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
      <div className="experience">
        <SectionTitle text="experience" round />
        <HeaderWithTitle {...this.state.posts.post_1} />
        <HeaderWithTitle {...this.state.posts.post_2} />
      </div>
    );
  }
}

export default Experience;
