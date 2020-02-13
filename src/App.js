import React from 'react';
import './App.sass';
import Home from './Home';
import ListProjects from './ListProjects';
import $ from "jquery";
import YouTube from 'react-youtube';
import '@fortawesome/fontawesome-free/css/all.css';

export default class App extends React.Component {

  toggleNavbar(e, addedClass, removedClass){
    e.preventDefault();
    $('#Project_navbar,#access_to_project').addClass(addedClass);
    $('#Project_navbar,#access_to_project').removeClass(removedClass);
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.mute();
  }
  _onEnd(event) {
    event.target.playVideo();
  }

  displayProjects(e, id, addedClass, removedClass){
    e.preventDefault();
    $([document.documentElement, document.body]).animate({
        scrollTop: $(id).offset().top
    }, 500);
    $('#Project_navbar,#access_to_project').addClass(addedClass);
    $('#Project_navbar,#access_to_project').removeClass(removedClass);
  }

  resizeViewport(){
    const view = $(window).height();
    $('#Home, #projects').height(view);
  }
  componentDidMount(){
    this.resizeViewport();
    window.addEventListener('resize', this.resizeViewport);
  }

  render(){

      const opts = {
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
          controls: 0,
          rel: 0,
          showinfo: 0
        }
      }

    return (
      <div id="App">

        <div className="video-background">
          <div className="video-foreground">
            <YouTube
               videoId="q06qVueCQoo"
               opts={opts}
               onReady={this._onReady}
               onEnd={this._onEnd}
               className="video-iframe"
             />
          </div>
        </div>

        <Home dispProjectsCallback={this.displayProjects}/>
        <ListProjects dispProjectsCallback={this.displayProjects}/>

      </div>
    );
  }
}
