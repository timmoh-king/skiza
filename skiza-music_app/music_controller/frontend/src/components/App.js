import React, { Component } from 'react';
import { render } from "react-dom";

export default class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        <h1>Skiza Music Player</h1>
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
