import React , { Component } from 'react';


class Blink extends React.Component {
constructor() {
    super()
    this.state = {
    showText: true
    }
    setInterval(() => {
    this.setState(previousState => {
        return {showText: !previousState.showText}
    })
    },350)
}
render() {
    const {showText} = this.state
    return (
    <div style={{height: "50vw", backgroundColor: "#002641", color: "white", paddingTop: "235px" , margin: "1vw 0" , width: "100%" , textAlign: "center"}}>
        <h1> {showText ? <MyIcon /> : ""} </h1>
    </div>
    )
}
}

export default Blink;