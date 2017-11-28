import React from 'react';
import { Menu } from 'semantic-ui-react';
import './Header.scss';

class Header extends React.Component {
  state = { activeItem: 'about' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const menuItems = ['about', 'skills', 'experince', 'education', 'contact'];
    return (
      <div className="header">
        <div className="ui container">
          <h1 className="header__title">Damian Szalbierz</h1>
          <h3 className="header__subtitle">JUNIOR WEB DEVELOPER</h3>

          <Menu inverted widths={5}>
            {menuItems.map(menu => (
              <Menu.Item
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
