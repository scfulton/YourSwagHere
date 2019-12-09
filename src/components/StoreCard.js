import React from "react";
import "../styleSheets/StoreCard.css";

export default function StoreCard(props) {
    return (
        <div>
            <img className='Store_Card' src={props.children} alt='item image' />
        </div>
    );
}
