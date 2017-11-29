import React from 'react';
import { Menu } from 'semantic-ui-react';
import './Header.scss';

class Header extends React.Component {
  state = {
    activeItem: 'about',
    menuItems: ['about', 'skills', 'experience', 'education', 'contact'],
    pageHeight: '0',
  };

  componentDidMount() {
    window.addEventListener('scroll', () => {
      this.setState({ pageHeight: window.pageYOffset });
    });
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    const el = document.querySelector(`.${name}`);
    if (window.pageYOffset < 100) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  render() {
    const { activeItem, menuItems, pageHeight } = this.state;

    const fixedMenu = +pageHeight > 200 ? 'top' : null;

    return (
      <div className="header" ref={this.handleContextRef}>
        <div className="ui container">
          <h1 className="header__title">Damian Szalbierz</h1>
          <h3 className="header__subtitle">JUNIOR WEB DEVELOPER</h3>
          <Menu fixed={fixedMenu} inverted widths={5}>
            {menuItems.map(menu => (
              <Menu.Item
                key={menu}
                name={menu}
                active={activeItem === menu}
                onClick={this.handleItemClick}
                disabled={menu === 'contact'}
              />
            ))}
          </Menu>
        </div>
      </div>
    );
  }
}

export default Header;
