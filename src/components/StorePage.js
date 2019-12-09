import React from "react";
import ImageUpload from "./ImageUpload";
import StoreCard from "./StoreCard";
import blackShirt from "../shopImages/blackshirt.PNG";
import whiteShirt from "../shopImages/whiteshirt.PNG";
// import UpLoadWindow from "./UploadWindow";

var list = [];
let populatedList = [];
list.push(blackShirt);
list.push(whiteShirt);
function StorePage(props) {
    // for (let key in list){
    //     populatedList
    // }

    return (
        <div>
            <div>This is the Store page</div>
            <ul>
                {list.map((item, i) => {
                    return (
                        <li key={i}>
                            <div>
                                <StoreCard>{item}</StoreCard>
                                <br />
                                {/* <img src= alt='shirt' /> */}
                            </div>
                        </li>
                    );
                })}
            </ul>
            {/* <img src={blackShirt} /> */}
        </div>
    );
}

export default StorePage;
