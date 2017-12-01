import React from 'react';
import { Menu, Grid, Sidebar, Button, Icon, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './Header.scss';

class Header extends React.Component {
  state = {
    activeItem: 'about',
    menuItems: [
      { name: 'about', icon: null },
      { name: 'skills', icon: null },
      { name: 'experience', icon: null },
      { name: 'education', icon: null },
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

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  render() {
    const { activeItem, menuItems, pageHeight, visible } = this.state;

    const fixedMenu = +pageHeight > 200 ? 'top' : null;

    return (
      <Grid>
        <Grid.Column only="computer tablet" computer={16} tablet={16}>
          <div className="header">
            <div className="ui container">
              <h1 className="header__title">Damian Szalbierz</h1>
              <h3 className="header__subtitle">JUNIOR WEB DEVELOPER</h3>
              <Menu fixed={fixedMenu} inverted widths={5}>
                {menuItems.map(menu => (
                  <Menu.Item
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
              <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
              <Sidebar.Pushable as={Segment}>
                <Sidebar
                  as={Menu}
                  animation="push"
                  width="thin"
                  visible={visible}
                  icon="labeled"
                  vertical
                  inverted
                >
                  <Menu.Item name="home">
                    <Icon name="home" />
                    Home
                  </Menu.Item>
                  <Menu.Item name="gamepad">
                    <Icon name="gamepad" />
                    Games
                  </Menu.Item>
                  <Menu.Item name="camera">
                    <Icon name="camera" />
                    Channels
                  </Menu.Item>
                </Sidebar>
                <Sidebar.Pusher>{this.props.children}</Sidebar.Pusher>
              </Sidebar.Pushable>
            </div>
          </div>
        </Grid.Column>
      </Grid>
    );
  }
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
