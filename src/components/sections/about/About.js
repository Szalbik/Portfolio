import React from 'react';
import { Grid, List, Image } from 'semantic-ui-react';
import SectionTitle from '../../section-title/SectionTitle';
import './About.scss';
import img from '../../../images/caricature_right.png';
import cv from '../../../files/Curriculum Vitae.pdf';

class About extends React.Component {
  state = {};

  render() {
    return (
      <div className="about">
        <SectionTitle text="about me" />
        <Grid>
          <Grid.Row>
            <Grid.Column computer={4} tablet={5} only="computer tablet">
              <List animated>
                <List.Item>
                  <List.Icon size="large" name="marker" />
                  <List.Content>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://www.google.pl/maps/place/Gorz%C3%B3w+Wielkopolski/@52.7312454,15.0781532,11z/data=!3m1!4b1!4m5!3m4!1s0x47071f0a5a4118b7:0x5dd10df3cb5799dd!8m2!3d52.7325285!4d15.2369305"
                    >
                      Gorzów Wielkopolski
                    </a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon size="large" name="github" />
                  <List.Content>
                    <a
                      href="https://www.github.com/Szalbik"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      My github
                    </a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon size="large" name="bitbucket" />
                  <List.Content>
                    <a
                      href="https://bitbucket.org/DamianSzalbierz/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      My bitbucket
                    </a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon size="large" name="cloud download" />
                  <List.Content>
                    <a href={cv} download="Curriculum Vitae - Damian Szalbierz">
                      Curriculum Vitae
                    </a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon size="large" name="linkedin square" />
                  <List.Content>
                    <a
                      href="https://www.linkedin.com/in/damian-szalbierz-04110a110/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>

            <Grid.Column
              className="description"
              only="computer tablet"
              computer={12}
              tablet={11}
            >
              <Image src={img} alt="image" width={220} floated="left" rounded />
              <h2>Hello I{'\''}m Damian.</h2>
              <p>
                I live in Poznan and I’m studying on Poznan University of Technology.  My free time I spend on increasing my skills in front-end development. My favorite frameworks are React,  Nods.js and Ruby on Rails. At the same time, perfect my html and css skills. I have what every junior should have - a willingness and endless enthusiasm for learning programming.
              </p>
            </Grid.Column>
          </Grid.Row>
            <Grid.Row centered>
              <Grid.Column only="mobile" mobile={12}>
                <Image src={img} alt="image" width={220} rounded fluid />
              </Grid.Column>

              <Grid.Column only="mobile" mobile={16}>
                <h2>Hello I{'\''}m Damian.</h2>
                <p>
                  I live in Poznan and I’m studying on Poznan University of Technology.  My free time I spend on increasing my skills in front-end development. My favorite frameworks are React,  Nods.js and Ruby on Rails. At the same time, perfect my html and css skills. I have what every junior should have - a willingness and endless enthusiasm for learning programming.
                </p>
              </Grid.Column>
            </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default About;
