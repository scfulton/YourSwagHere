import React from "react";
import FileBase from "react-file-base64";
import axios from "axios";
import DefaultImage from "./default-img.jpg";

const API_URL = "http://localhost:3003";

class UploadWindow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            baseImage: DefaultImage
        };
    }

    setDefaultImage(uploadType) {
        this.setState({
            baseImage: DefaultImage
        });
    }
    // function to capture base64 format of an image
    getBaseFile(files) {
        // create a local readable base64 instance of an image
        this.setState({
            baseImage: files.base64
        });

        let imageObj = {
            imageName: "base-image-" + Date.now(),
            imageData: files.base64.toString()
        };

        axios
            .post(`${API_URL}/image/uploadbase`, imageObj)
            .then(data => {
                if (data.data.success) {
                    alert(
                        "Image has been successfully uploaded using base64 format"
                    );
                    this.setDefaultImage("base");
                }
            })
            .catch(err => {
                alert("Error while uploading image using base64 format");
                this.setDefaultImage("base");
            });
    }
    render() {
        return (
            <div>
                <div className='process'>
                    <h4 className='process__heading'>Process: Using Base64</h4>
                    <p className='process__details'>
                        Upload image as Base64 directly to MongoDB database
                    </p>

                    <div className='process__upload-btn'>
                        <FileBase
                            type='file'
                            multiple={false}
                            onDone={this.getBaseFile.bind(this)}
                        />
                    </div>
                    <img
                        src={this.state.baseImage}
                        alt='upload-image'
                        className='process__image'
                    />
                </div>
            </div>
        );
    }
}

export default UploadWindow;
