import React from 'react';
import { Menu, Grid, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './Header.scss';

class Header extends React.Component {
  state = {
    activeItem: 'about',
    menuItems: [
      { name: 'about', icon: 'vcard outline' },
      { name: 'skills', icon: 'fork' },
      { name: 'experience', icon: 'shopping bag' },
      { name: 'education', icon: 'student' },
      { name: 'contact', icon: 'mail' },
    ],
    pageHeight: '0',
    visible: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', () => {
      this.setState({ pageHeight: window.pageYOffset });
    });
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    const el = document.querySelector(`.${name}`);
    const elY = el.offsetTop - el.scrollTop + el.clientTop - 50;
    if (window.pageYOffset < 100) {
      window.scrollTo(0, elY);
    } else {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  handleMobileItemClick = (e, { name }) => {
    this.setState({ activeItem: name, visible: !this.state.visible });
    const el = document.querySelectorAll(`.${name}`)[1];
    const elY = el.offsetTop - el.scrollTop + el.clientTop - 50;
    if (window.pageYOffset < 100) {
      window.scrollTo(0, elY);
    } else {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  render() {
    const { activeItem, menuItems, pageHeight } = this.state;

    const fixedMenu = +pageHeight > 200 ? 'top' : null;

    return (
      <Grid>
        <Grid.Column only="computer tablet" computer={16} tablet={16}>
          <div className="header">
            <div className="ui container">
              <h1 className="header__title">Damian Szalbierz</h1>
              <h3 className="header__subtitle">JUNIOR WEB DEVELOPER</h3>
              <Menu fixed={fixedMenu} inverted widths="five">
                {menuItems.map(menu => (
                  <Menu.Item
                    as="dropdown"
                    key={menu.name}
                    name={menu.name}
                    active={activeItem === menu.name}
                    onClick={this.handleItemClick}
                    icon={menu.icon}
                  />
                ))}
              </Menu>
            </div>
          </div>
          {this.props.children}
        </Grid.Column>
        <Grid.Column only="mobile" mobile={16}>
          <div className="header">
            <div className="ui container">
              <h1 className="header__title">Damian Szalbierz</h1>
              <h3 className="header__subtitle">JUNIOR WEB DEVELOPER</h3>
              <Menu compact fixed={fixedMenu} inverted widths="five">
                {menuItems.map(menu => (
                  <Menu.Item
                    fitted
                    key={menu.name}
                    name={menu.name}
                    active={activeItem === menu.name}
                    onClick={this.handleMobileItemClick}
                    icon={menu.icon}
                  >
                    <Icon name={menu.icon} />
                  </Menu.Item>
                ))}
              </Menu>
            </div>
          </div>
          {this.props.children}
        </Grid.Column>
      </Grid>
    );
  }
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
