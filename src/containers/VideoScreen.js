//React
import React, {Component} from 'react';
import {} from 'prop-types';
//Redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//import * as someAction from '../actions/someAction';

//Components
import Video from '../components/video/Video';

class VideoScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const video_url = 'https://www.youtube.com/watch?v=99PDG-4-fsU';
        return (
            <Video video={ video_url } />
        );
    }
}

VideoScreen.propTypes = {};
export default VideoScreen;
// function mapStateToProps(state) {
//     return {
//         state: state,
//     };
// }
//
// function MapDispatchToProps(dispatch) {
//     return {
//         actions: bindActionCreators(someActions, dispatch)
//     };
// }
//
// export default connect(mapStateToProps, MapDispatchToProps)(VideoScreen)