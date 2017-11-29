import React from 'react';
import { Menu } from 'semantic-ui-react';
import './Header.scss';

class Header extends React.Component {
  state = {
    activeItem: 'about',
    menuItems: ['about', 'skills', 'experience', 'education', 'contact'],
    scroll: '',
  };

  componentDidMount() {
    /* eslint-disable */
    window.addEventListener('scroll', () => {
      this.setState({ scroll: pageYOffset });
    });
    /* eslint-enable */
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem, menuItems, scroll } = this.state;

    const fixedMenu = +scroll > 200 ? 'top' : null;

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
              />
            ))}
          </Menu>
        </div>
      </div>
    );
  }
}

export default Header;
