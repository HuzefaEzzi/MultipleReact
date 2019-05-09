//import 'bootstrap/dist/css/bootstrap.css';
//import React from 'react';
//import ReactDOM from 'react-dom';
//import { BrowserRouter } from 'react-router-dom';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

//const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
//const rootElement = document.getElementById('root');

//ReactDOM.render(
//  <BrowserRouter basename={baseUrl}>
//    <App />
//  </BrowserRouter>,
//  rootElement);

//registerServiceWorker();
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
class Dynamic extends Component {
    constructor(props) {
        super(props);
        this.state = { module: null };
    }
    componentDidMount() {
        const app2 = document.URL.includes("/app2");
        let path = './App';
        if (app2) {
            path = './App2'
        }
        import(`${path}`)
            .then(module => this.setState({ module: module.default }))
    }
    render() {
        const { module: Component } = this.state; // Assigning to new variable names @see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
        return (
            <BrowserRouter basename={baseUrl}>
                {Component && <Component />}
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Dynamic  />, document.getElementById('root'));
registerServiceWorker();