import React from "react";
import ImageUpload from "./ImageUpload";
import "../styleSheets/Dashboard.css";
// import UpLoadWindow from "./UploadWindow";

function Dashboard(props) {
    return (
        <div>
            <div className="head">Load Image Page</div>
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
