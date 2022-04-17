import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import Spinner from './Spinner';
import {findAllByDisplayValue} from "@testing-library/react";

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {lat: null, errorMessage: ''};
    //     // don't do data loading here (not recommended). Instead, do it in componentDidMount
    // }

    state = {lat: null, errorMessage: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (
                position) => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message}));
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div> Error: {this.state.errorMessage}</div>;
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        }
        return <Spinner message='Please accept location request'/>;
    }

    // we have to define render and is only used to return JSX
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));