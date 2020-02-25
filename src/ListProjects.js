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
    e.preventDefault();
    this.props.dispProjectsCallback(e, id, addedClass, removedClass);
  }

  toggleNavbar(e, addedClass, removedClass){
    e.preventDefault();
    $('#HomeNavbar').addClass(addedClass);
    $('#HomeNavbar').removeClass(removedClass);
  }

  displayProject(project,e){
    e.preventDefault();
    $("#Interface").addClass('not-displayed').removeClass('displayed');
    setTimeout(() => {
      this.setState({project});
    },200);
    setTimeout(() => {$("#Interface").addClass('displayed').removeClass('not-displayed');}, 1000);
  }

  displayProject_mobile(project,e){
    e.preventDefault()
    this.displayProject(project,e);
    this.fetchProjets(e);
  }

  fetchProjets(e){
    e.preventDefault();

    let view = $(window).height();
    $('#ProjectsNavbar>article').css('display', 'flex');
    if($('#ProjectsNavbar').height() > view/2){
      view = '9vw'
      $('#ProjectsNavbar>article').css('display', 'none');
    }
    $('#ProjectsNavbar').height(view);

    this.displayHome(e,'#projects', 'deselected', 'not-displayed')
  }
  render(){
    var _project = this.state.project;
    return(
      <section id="projects">
      <div id="ProjectsNavbar">
        <button onClick={(e) =>this.displayHome(e,'#App', 'not-displayed', 'deselected')}>Retour</button>
        <button onClick={(e) =>this.fetchProjets(e)}>Projets</button>
        <article>
          {Projects.map(
              (project) => {
                return (
                  <ButtonProject
                    titre={project.titre}
                    desc={project.resume}
                    onClickcallback={this.displayProject_mobile.bind(this, project))}
                  />
                )
              }
            )
          }

        </article>
      </div>
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

          <Carousel showIndicators={false} showThumbs={false} showStatus={false} infiniteLoop>
            {_project.videos.map(
                (video) => {
                  return (
                    <div>
                        <iframe allowfullscreen="true" src={video}>
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
