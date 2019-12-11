import React from "react";
import "../styleSheets/StoreCard.css";
// import ShoppingCart from "./ShoppingCart";
export default function StoreCard(props) {
    return (
        <div>
            <div className="item_z1_img">
                <img className="col" src={props.item} alt="item " />
            </div>
            <div>
                {/* <div>{props.isRectangle ? "logoSqr_z2_img" : "logoRec_z2_img" }</div> */}
                <img
                    className={
                        !props.isRectangle ? "logoSqr_z2_img" : "logoRec_z2_img"
                    }
                    src={props.logo}
                    alt="item "
                />
            </div>
        </div>
    );
}
