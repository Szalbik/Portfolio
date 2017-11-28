import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import SectionTitle from '../../section-title/SectionTitle';
import './About.scss';

class About extends React.Component {
  state = {};

  render() {
    return (
      <div className="about">
        <SectionTitle text="about me" />
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={4}>
              <List animated>
                <List.Item>
                  <List.Icon name="marker" />
                  <List.Content>Gorzów Wielkopolski</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="phone square" />
                  <List.Content>667 768 745</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="mail" />
                  <List.Content>
                    <a href="mailto:szalbierz.d.k@gmail.com">
                      szalbierz.d.k@gmail.com
                    </a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="linkify" />
                  <List.Content>
                    <a href="http://www.damianszalbierz.pl/">My website</a>
                  </List.Content>
                </List.Item>
              </List>
              <List horizontal>
                <List.Item>
                  <List.Content>
                    <a
                      href="https://www.github.com/Szalbik"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <List.Icon size="large" name="github" />
                    </a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <a
                    href="https://bitbucket.org/DamianSzalbierz/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <List.Icon size="large" name="bitbucket" />
                  </a>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <a
                      href="https://www.facebook.com/damian.szalbierz.3"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <List.Icon size="large" name="facebook official" />
                    </a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <a
                      href="https://www.linkedin.com/in/damian-szalbierz-04110a110/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <List.Icon size="large" name="linkedin square" />
                    </a>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>

            <Grid.Column width={12} />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default About;
