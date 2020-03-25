import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import useLocation from './useLocation';

const App = () => {
    const [lat, errorMessage] = useLocation();

    let content;
    if( errorMessage ) {
        content = <div>Error: {errorMessage}</div>
    } else if( !errorMessage && !lat) {
        content = <Spinner message="Please accept location request" />
    } else {
        return <SeasonDisplay lat={lat}/>
    }
    return <div className="border red">{content}</div>;
}



/*
class App extends React.Component {
    state = {lat: null, lon:null,  error: ''}

    componentDidMount(){
        // When we call navigator, we need to add window
        window.navigator.geolocation.getCurrentPosition(
            // DO NOT USE SIMPLE ASSIGNMENT
            position => this.setState({lat:position.coords.latitude, lon:position.coords.longitude}), 
            err => this.setState({error:err.message})
        );
    }

    componentDidUpdate(){
        console.log("Component is rerendered");
    }

    renderContent = () => {
        if(!this.state.lat && !this.state.error) {
            return <Spinner message="Please accept location request" />
        } else if (!this.state.lat && this.state.error){
            return <div>Error: {this.state.error} </div>
        } else {
            return <SeasonDisplay lat={this.state.lat} lon={this.state.lon}/>
        }
    }

    render(){
        return (
            <div className="overall-wrapper">
                {this.renderContent()}
            </div>
        )
    }
}
*/


ReactDOM.render(
    <App />,
    document.querySelector('#root')
)