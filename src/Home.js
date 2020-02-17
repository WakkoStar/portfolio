import React from 'react';
import './App.sass';
import $ from "jquery";
import '@fortawesome/fontawesome-free/css/all.css';

export default class Home extends React.Component {

  toggleNavbar(e, addedClass, removedClass){
    e.preventDefault();
    $('#Project_navbar,#access_to_project').addClass(addedClass);
    $('#Project_navbar,#access_to_project').removeClass(removedClass);
  }

  displayProjects(e, id, addedClass, removedClass){
    this.props.dispProjectsCallback(e, id, addedClass, removedClass);
  }

  render(){
    return(
      <div id="Home">
        <section id="Screen">
          <div id="Presentation">
            <h1>Hugo Del Pia</h1>
            <h2>20 ans. Passionné de jeux-vidéos, de musique et de skate.</h2>
          </div>
          <div id="Links">
            <a href="https://soundcloud.com/hugo-del-pia/tracks">Soundcloud</a>
            <a href="https://www.linkedin.com/in/hugo-del-pia/">LInkedin</a>
            <a href="../assets/files/DELPIA-CV.pdf">Voir CV</a>
            <a href="mailto:delpiahugo@gmail.com">Contacter</a>
          </div>
        </section>

        <section
          onMouseEnter={(e) => this.toggleNavbar(e, 'displayed','not-displayed')}
          onMouseLeave={(e) => this.toggleNavbar(e, 'not-displayed','displayed')}
          onClick={(e) =>this.displayProjects(e,'#projects', 'deselected', 'not-displayed')}
          className="not-displayed" id="Project_navbar">
        </section>

        <div id="access_to_project"
          onMouseEnter={(e) => this.toggleNavbar(e, 'displayed','not-displayed')}
          onMouseLeave={(e) => this.toggleNavbar(e, 'not-displayed','displayed')}
          onClick={(e) =>this.displayProjects(e,'#projects', 'deselected', 'not-displayed')}
          className="not-displayed">
            <h1>ACCEDER AUX PROJETS</h1>
            <span style={{fontSize:"3vw"}}>
              <i className="fas fa-chevron-down not-displayed" style={{width: '32px'}}></i>
            </span>
        </div>
      </div>
    );

  }
}
