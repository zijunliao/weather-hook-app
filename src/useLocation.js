import {useState, useEffect} from 'react';

const useLocation = () => {
    // Declare state and setter
    const [lat, setLat] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect( ()=>{
        // When we call navigator, we need to add window
        window.navigator.geolocation.getCurrentPosition(
            // DO NOT USE SIMPLE ASSIGNMENT
            position => setLat(position.coords.latitude), 
            err => setErrorMessage(err.message)
        );
    }, []); // [] means only run one time for entire application

    // Return array if there are more than one return values.
    // But if you add some props in the future, all logic need to be changed
    return [lat, errorMessage];     
}

export default useLocation;
