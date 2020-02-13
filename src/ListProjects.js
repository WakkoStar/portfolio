import React from 'react';
import './App.sass';
import $ from "jquery";
import '@fortawesome/fontawesome-free/css/all.css';
import ButtonProject from './ButtonProject';
import Projects from './Projects';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ReactLoading from 'react-loading';

export default class ListProjects extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      project: Projects[0]
    }
  }
  displayHome(e, id, addedClass, removedClass){
    this.props.dispProjectsCallback(e, id, addedClass, removedClass);
  }

  toggleNavbar(e, addedClass, removedClass){
    e.preventDefault();
    $('#HomeNavbar').addClass(addedClass);
    $('#HomeNavbar').removeClass(removedClass);
  }

  displayProject(project,e){
    $("#Interface").addClass('not-displayed').removeClass('displayed');
    setTimeout(() => {
      this.setState({project});
    },200);
    setTimeout(() => {$("#Interface").addClass('displayed').removeClass('not-displayed');}, 1000);
  }
  render(){
    var _project = this.state.project;
    return(
      <section id="projects">
      <div id="HomeNavbar"
      onMouseEnter={(e) => this.toggleNavbar(e, 'displayed', 'not-displayed')}
      onMouseLeave={(e) => this.toggleNavbar(e, 'not-displayed', 'displayed')}
      onClick={(e) =>this.displayHome(e,'#App', 'not-displayed', 'deselected')}
      className="not-displayed"
      >
      <h1>REVENIR A L'ACCEUIL</h1>
      </div>
        <article id="Menu">
          {Projects.map(
              (project) => {
                return (
                  <ButtonProject
                    titre={project.titre}
                    desc={project.resume}
                    onClickcallback={this.displayProject.bind(this, project)}
                  />
                )
              }
            )
          }

        </article>
        <article id="Interface" style={{color:'white'}} className="displayed">

          <Carousel showIndicators={true} showThumbs={false} showStatus={false} autoPlay infiniteLoop>
            {_project.videos.map(
                (video) => {
                  return (
                    <div>
                        <iframe src={video}>
                        </iframe>
                    </div>
                  )
                }
            )}
              { _project.images.map(
                (image) => {
                  return <div style={{backgroundImage: image }}></div>
                }
              )}
          </Carousel>

          <h2>Origine</h2>
          <p>{_project.origine}</p>
          <h2>Description</h2>
          <p>{_project.description}</p>
          <h2>Outils</h2>
          <p>{_project.outils}</p>
          <h2>Liens</h2>
          {_project.liens.map(
            (link) => {
              return <a href={link.data}>{link.label}</a>
            }
          )}
        </article>
      </section>
    );
  }
}
