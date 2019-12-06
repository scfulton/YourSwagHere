import React from "react";
import FileBase from "react-file-base64";
import DefaultImage from "./default-img.jpg";

class ImageUpload extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imageURL: DefaultImage,
            files: []
        };

        this.handleUploadImage = this.handleUploadImage.bind(this);
    }

    getFiles(files) {
        this.setState({ files: files });
    }

    handleUploadImage(ev) {
        ev.preventDefault();

        // const data = new FormData();
        // data.append("file", this.uploadInput.files[0]);
        // data.append("filename", this.fileName.value);

        //////////////////////
        let file = this.state.files;
        let imageObj = {
            imageName: this.fileName.value,
            imageData: file.base64.toString()
        };
        /////////////////////////

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
                this.setState({
                    imageURL: `http://localhost:3003/${body.file}`
                });
            });
        });
    }

    render() {
        return (
            <form onSubmit={this.handleUploadImage}>
                <div>
                    {/* <input
                        ref={ref => {
                            this.uploadInput = ref;
                        }}
                        type='file'
                    /> */}
                </div>
                <div>
                    <FileBase
                        type='file'
                        multiple={false}
                        // onDone={this.getBaseFile.bind(this)}
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
