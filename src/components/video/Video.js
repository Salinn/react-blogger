//React
import React from 'react';
import {} from 'prop-types';
//Components
import { Player } from 'video-react';

//Styles
import "../../../node_modules/video-react/dist/video-react.css";

const Video = ( { video, } ) => {
    return (
        <div>
            video
            {video}
            <Player
                playsInline
                poster="/assets/poster.png"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />
        </div>
    );
};

Video.propTypes = {};

export default Video