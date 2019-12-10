import React from "react";
import "../styleSheets/StoreCard.css";
export default function StoreCard(props) {
    return (
        <div>
            <div className='item_z1_img'>
                <img className='col' src={props.item} alt='item image' />
            </div>
            <div
                className={
                    !props.isRectangle ? "logoSqr_z2_img" : "logoRec_z2_img"
                }>
                {/* <div>{props.isRectangle ? "logoSqr_z2_img" : "logoRec_z2_img" }</div> */}
                <img className='logo_col' src={props.logo} alt='item image' />
            </div>
        </div>
    );
}
