import React from "react";
import FileBase from "react-file-base64";
import DefaultImage from "./default-img.jpg";
// import imageProcess from "../images/imagerocess";
// const imageProcess = require("../imaging/imagerocess");

class ImageUpload extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imageURL: DefaultImage,
            files: [],
            unEncFile: ""
        };

        this.handleUploadImage = this.handleUploadImage.bind(this);
    }

    getFiles(files) {
        // const nFiles = imageProcess(files);
        this.setState({ files: files, unEncFile: files });
    }

    handleUploadImage(ev) {
        ev.preventDefault();
        fetch("http://localhost:3003/image/uploadbase/", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                companyName: this.fileName.value,
                imageBase64: this.state.files.base64.toString()
            })
        }).then(response => {
            response.json().then(body => {
                this.setState(
                    {
                        // imageURL: atob(this.state.unEncFile)
                        imageURL: this.state.files.base64.toString("base64")
                    },
                    console.log()
                );
            });
        });
    }

    render() {
        return (
            <form onSubmit={this.handleUploadImage}>
                <div>
                    <FileBase
                        type='file'
                        multiple={false}
                        onDone={this.getFiles.bind(this)}
                    />
                    <input
                        ref={ref => {
                            this.fileName = ref;
                        }}
                        type='text'
                        placeholder='Enter Company name'
                    />
                </div>
                <br />
                <div>
                    <button>Upload</button>
                </div>
                <img src={this.state.imageURL} alt='img' />
            </form>
        );
    }
}

export default ImageUpload;
