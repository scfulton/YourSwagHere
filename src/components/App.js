import React from "react";
import NavBar from "../components/NavigationBar";
import "../styleSheets/NavigationBar.css";
import "../styleSheets/App.css";
import dfalt_logo from "../components/dfalt_logo.png";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthed: false,
            logo: dfalt_logo,
            isRectangle: false
        };

        this.afterImgUpload = this.afterImgUpload.bind(this);
        this.afterIsAuthed = this.afterIsAuthed.bind(this);
        this.afterSignOut = this.afterSignOut.bind(this);
        this.isRectangleUploaded = this.isRectangleUploaded.bind(this);
    }

    afterImgUpload(image) {
        this.setState({ logo: image });
    }
    afterIsAuthed(tORf) {
        this.setState({ isAuthed: tORf, logo: dfalt_logo });
        // this.setState({ logo: dfalt_logo });
    }
    afterSignOut(tORf) {
        this.setState({ logo: dfalt_logo });
    }

    isRectangleUploaded(tORf) {
        this.setState({ isRectangle: tORf });
    }

    render() {
        return (
            <div className='body'>
                <NavBar
                    afterImgUpload={this.afterImgUpload}
                    afterIsAuthed={this.afterIsAuthed}
                    isRectangleUploaded={this.isRectangleUploaded}
                    isRectangle={this.state.isRectangle}
                    logo={this.state.logo}
                />
            </div>
        );
    }
}
