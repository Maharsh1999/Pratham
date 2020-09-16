import React , { Component } from 'react';
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class MyIcon extends React.Component {
    render() {
      return (
        <FontAwesomeIcon icon={faClock} />
      )
    }
  }