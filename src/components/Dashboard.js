import React from "react";
import ImageUpload from "./ImageUpload";
// import UpLoadWindow from "./UploadWindow";

function Dashboard(props) {
    return (
        <div>
            This is the Dashboard
            <br />
            <br />
            <ImageUpload
                isRectangleUploaded={props.isRectangleUploaded}
                isRectangle={props.isRectangle}
                afterImgUpload={props.afterImgUpload}
            />
        </div>
    );
}

export default Dashboard;
