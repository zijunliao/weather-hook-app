import React from 'react';
import './SeasonDisplay.css';

const getSeason = (lat, month) =>{
    if(month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const seasonConfig = {
    summer: {
        text: 'Lets hit the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr it is cold',
        iconName: 'snowflake'
    }
}

const seasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];       //text, iconName
    
    return (
        <div className={`season-display ${season}`}>
            <i className={`${iconName} icon massive icon-left`} />
            <h1 className="text">{text}</h1>
            <i className={`${iconName} icon massive icon-right`} />
        </div>
    )
}

export default seasonDisplay;




