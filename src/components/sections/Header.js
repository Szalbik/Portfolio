import React from 'react';
import { Menu } from 'semantic-ui-react';
import './Header.scss';

class Header extends React.Component {
  state = { activeItem: 'about' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div className="header">
        <div className="ui container">
          <h1 className="header__title">Damian Szalbierz</h1>
          <h3 className="header__subtitle">JUNIOR WEB DEVELOPER</h3>

          <Menu inverted widths={5}>
            <Menu.Item
              name="about"
              active={activeItem === 'about'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="skills"
              active={activeItem === 'skills'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="experince"
              active={activeItem === 'experince'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="education"
              active={activeItem === 'education'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="contact"
              active={activeItem === 'contact'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </div>
      </div>
    );
  }
}

export default Header;
