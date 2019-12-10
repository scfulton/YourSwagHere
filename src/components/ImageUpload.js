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
            cName: ""
        };

        this.handleUploadImage = this.handleUploadImage.bind(this);
        this.afterUpload = this.afterUpload.bind(this);
    }

    getFiles(files) {
        // const nFiles = imageProcess(files);

        this.setState({
            files: files,
            cName: this.fileName.value
        });
    }

    async handleUploadImage(ev) {
        ev.preventDefault();

        // https://your-swag-here.herokuapp.com/
        // fetch("https://your-swag-here.herokuapp.com/image/uploadbase/", {
        await fetch("http://localhost:3003/image/uploadbase/", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                companyName: this.fileName.value,
                imageBase64: this.state.files.base64.toString()
            })
        }).then(
            setTimeout(() => {
                this.afterUpload();
            }, 8000)
        );
    }
    async afterUpload() {
        // ev.preventDefault();

        let queryString =
            "http://localhost:3003/image/findOne/" +
            // "https://your-swag-here.herokuapp.com/image/findOne/" +
            this.fileName.value;
        // console.log("query str: " + queryString);

        // await setTimeout(console.log(this.fileName.value), 8000)
        // console.log(this.fileName.value);

        await fetch(
            queryString,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            }
            // console.log("in fetch")
        )
            .then(response => {
                // console.log(typeof response);
                return response.json();
            })

            .then(body => {
                // this.props.isRectangleUploaded(body.isSquare);
                console.log("body.isSquare: ", body.isSquare);
                this.setState({
                    // imageURL: body.toString()
                    imageURL: body.imageBase64.toString()
                });
                // console.log("height: ", heightNum);

                this.props.afterImgUpload(body.imageBase64.toString());
                // console.log("in then body");
            });
    }

    componentDidMount() {
        this.setState({ imageURL: DefaultImage });
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
                <img id='imgRender' src={this.state.imageURL} alt='img' />
            </form>
        );
    }
}

export default ImageUpload;
