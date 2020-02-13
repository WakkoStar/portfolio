import React from 'react';
import './App.sass';
import $ from "jquery";
import '@fortawesome/fontawesome-free/css/all.css';

export default class ButtonProjects  extends React.Component {

  toggleBtn(e, addedClass, removedClass){

    $(".case_project").on("mouseover", function(){
        $(this).addClass(addedClass);
        $(this).removeClass(removedClass);
    });

    $(".case_project").on("mouseout", function(){
      $(".case_project").addClass(removedClass);
      $(".case_project").removeClass(addedClass);
    });

  }

  render(){
    return(
      <div className="case_project not-displayed"
      onMouseEnter={(e) => this.toggleBtn(e, 'displayed', 'not-displayed')}
      onMouseLeave={(e) => this.toggleBtn(e, 'not-displayed', 'displayed')}
      onClick={this.props.onClickcallback}
      >
        <h2>{this.props.titre}</h2>
        <p>{this.props.desc}</p>
      </div>
    )
}
  }
