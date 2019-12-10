import React from "react";
import ImageUpload from "./ImageUpload";
import StoreCard from "./StoreCard";
import blackShirt from "../shopImages/blackshirt.PNG";
import whiteShirt from "../shopImages/whiteshirt.PNG";
import dfalt_logo from "../components/dfalt_logo.png";
// import UpLoadWindow from "./UploadWindow";

var list = [];
let logoImg = [];

list.push(blackShirt);
list.push(whiteShirt);

function StorePage(props) {
    // for (let key in list){
    //     populatedList
    // }
    // if (props.isAuthed) {
    //     logoImg.push(dfalt_logo);
    // } else {
    //     logoImg.push(props.companyLogo);
    // }
    return (
        <div>
            <div>This is the Store page</div>
            <ul id='mainColumns' className='flex-container'>
                {list.map((item, i) => {
                    return (
                        <li key={i} className='Store_Card'>
                            <div>
                                <StoreCard
                                    item={item}
                                    logo={props.logo}></StoreCard>
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
