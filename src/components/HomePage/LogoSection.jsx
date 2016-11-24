import React from 'react';
import { Link } from 'react-router';

class LogoSection extends React.Component {
	chooseLogoImage() {
    	let choice = Math.floor(Math.random()*7);
    	let path = "img/logos/logo-" + choice + ".png";
    	return path;
    }
    shouldComponentUpdate(nextProps, nextState) {
	    return false;
	}
    render() {
        return (
			<img id="logo" src={this.chooseLogoImage()} />
        );
    }
}

export default LogoSection;