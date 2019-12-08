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
        fetch("https://your-swag-here.herokuapp.com/image/uploadbase/", {
            // await fetch("http://localhost:3003/image/uploadbase/", {
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
            }, 5000)
        );
        // // promise.all version
        // async handleUploadImage(ev) {
        //     ev.preventDefault();
        //     await Promise.all([
        //         // https://your-swag-here.herokuapp.com/
        //         // fetch("https://your-swag-here.herokuapp.com/image/uploadbase/", {
        //         fetch("http://localhost:3003/image/uploadbase/", {
        //             method: "POST",
        //             headers: {
        //                 Accept: "application/json",
        //                 "Content-Type": "application/json"
        //             },
        //             body: JSON.stringify({
        //                 companyName: this.fileName.value,
        //                 imageBase64: this.state.files.base64.toString()
        //             })
        //         }),
        //         setTimeout(() => {
        //             this.afterUpload();
        //         }, 5000)
        //     ]);
        // .then(setTimeout(10000))
        // .then(this.afterUpload());

        // .then(response => {
        //     setTimeout(3000);
        //     let queryString =
        //         "http://localhost:3003/image/findOne/" + this.fileName.value;
        //     fetch(queryString, {
        //         method: "GET",
        //         headers: {
        //             Accept: "application/json",
        //             "Content-Type": "application/json"
        //         }
        //     })
        //         .then(response => {
        //             return response.json();
        //         })
        //         .then(body => {
        //             this.setState({
        //                 // imageURL: atob(this.state.unEncFile)
        //                 imageURL: body.base64.toString("base64")
        //             });
        //         });
        // });
    }
    async afterUpload() {
        // ev.preventDefault();

        let queryString =
            // "http://localhost:3003/image/findOne/" +
            "https://your-swag-here.herokuapp.com/image/findOne/" +
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
                // console.log(body[0].imageBase64.toString());

                this.setState({
                    // imageURL: body.toString()
                    imageURL: body.imageBase64.toString()
                });
                // console.log("in then body");
            });
    }

    // //Promise.all version
    // async afterUpload() {
    //     // ev.preventDefault();

    //     let queryString =
    //         "http://localhost:3003/image/findOne/" +
    //         // "https://your-swag-here.herokuapp.com/image/findOne/" +
    //         this.fileName.value;
    //     console.log("query str: " + queryString);

    //     // await setTimeout(console.log(this.fileName.value), 8000)
    //     // console.log(this.fileName.value);
    //     await Promise.all([
    //         fetch(
    //             queryString,
    //             {
    //                 method: "GET",
    //                 headers: {
    //                     Accept: "application/json",
    //                     "Content-Type": "application/json"
    //                 }
    //             },
    //             console.log("in fetch")
    //         ),
    //         response => {
    //             console.log("in then resp");
    //             return response.json();
    //         },
    //         body => {
    //             // console.log(body[0].imageBase64.toString());

    //             this.setState({
    //                 // imageURL: atob(this.state.unEncFile)
    //                 imageURL: body[0].imageBase64.toString()
    //             });
    //             console.log("in then body");
    //         }
    //     ]);
    // }

    render() {
        return (
            <form onSubmit={this.handleUploadImage}>
                <div>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={this.getFiles.bind(this)}
                    />
                    <input
                        ref={ref => {
                            this.fileName = ref;
                        }}
                        type="text"
                        placeholder="Enter Company name"
                    />
                </div>
                <br />
                <div>
                    <button>Upload</button>
                </div>
                <img src={this.state.imageURL} alt="img" />
            </form>
        );
    }
}

export default ImageUpload;
