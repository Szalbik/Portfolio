import React from 'react';
import { Segment, Reveal, Image, List, Modal } from 'semantic-ui-react';
import SectionTitle from '../../section-title/SectionTitle';
import img3 from '../../../images/todoApp.png';
import './style.scss';

class Projects extends React.Component {
  state = {};

  render() {
    return (
      <div className="projects">
        <SectionTitle text="projects" round />
        <Segment raised compact>
          <Reveal animated="move right">
            <Reveal.Content visible>
              <Image src={img3} size="small" />
            </Reveal.Content>
            <Reveal.Content hidden>
              <List>
                <List.Item>
                  <List.Icon name="film" />
                  <List.Content>
                    <Modal trigger={<span>Preview</span>}>
                      <Modal.Header>Todo App (React / Redux)</Modal.Header>
                      <Modal.Content image>
                        <Image wrapped size="huge" src={img3} />
                      </Modal.Content>
                    </Modal>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="linkify" />
                  <List.Content>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="http://todoapp-redux.surge.sh/"
                    >
                      Live preview
                    </a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="code" />
                  <List.Content>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://bitbucket.org/DamianSzalbierz/todoapp_redux/src"
                    >
                      Source code
                    </a>
                  </List.Content>
                </List.Item>
              </List>
            </Reveal.Content>
          </Reveal>
        </Segment>
      </div>
    );
  }
}

export default Projects;
