import React from 'react';
import { Grid, List, Image } from 'semantic-ui-react';
import SectionTitle from '../../section-title/SectionTitle';
import './About.scss';
import img from '../../../images/dyplomowe.jpg';
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
              <h2>Cześć jestem Damian. </h2>
              <p>
                Aktualnie mieszkam w Gorzowie Wielkopolskim, jestem studentem
                Akademii im. Jakuba z Paradyża na 7 semestrze informatyki.
                Chciałbym rozwijać się jako Junior Front-End Developer. Swój
                wolny czas poświęcam na doskonalenie umiejętności HTML | CSS |
                JS (ES5, ES6, ES7). Posiadam to co każdy junior powinien mieć -
                chęć i niekończący się zapał do nauki programowania.
              </p>
            </Grid.Column>

            <Grid.Column only="mobile" mobile={16}>
              <Image src={img} alt="image" width={220} rounded fluid />
            </Grid.Column>
            <Grid.Column only="mobile" mobile={16}>
              <p>
                Nazywam się Damian Szalbierz. Aktualnie mieszkam w Gorzowie
                Wielkopolskim i studiuję w Akademii Jakuba z Paradyża. Chciałbym
                znaleźć pracę jako Junior Front-End Developer. Aktualnie
                poświęcam cały swój wolny czas na doskonalenie umiejętności HTML
                | CSS | JS (ES5, ES6, ES7). Posiadam to co każdy junior powinien
                mieć - chęc i niekończący się zapał do nauki programowania.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default About;
