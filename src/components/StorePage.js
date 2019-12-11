import React from "react";
// import ImageUpload from "./ImageUpload";
import StoreCard from "./StoreCard";
import blackShirt from "../shopImages/blackshirt.PNG";
import whiteShirt from "../shopImages/whiteshirt.PNG";
import hatblack from "../shopImages/hatblack.PNG";
import hatwhite from "../shopImages/hatwhite.PNG";
import folderblack from "../shopImages/folderblack1.PNG";
import folderbrown from "../shopImages/folderbrown1.PNG";
import bottleblue from "../shopImages/bottleblue1.PNG";
import bottleshort from "../shopImages/bottleshort1.PNG";
// import dfalt_logo from "../components/dfalt_logo.png";
// import ShoppingCart from "./ShoppingCart";
import "../styleSheets/StoreCard.css";

import { Route } from "react-router-dom";
// import UpLoadWindow from "./UploadWindow";

var listShirt = [];
listShirt.push(blackShirt);
listShirt.push(whiteShirt);

var listHat = [];
listHat.push(hatblack);
listHat.push(hatwhite);

var listOffice = [];
listOffice.push(folderblack);
listOffice.push(folderbrown);

var listBottle = [];
listBottle.push(bottleshort);
listBottle.push(bottleblue);

// let logoImg = [];

function StorePage(props) {
    return (
        <div>
            <br />
            <div className="head">Store page</div>
            <ul id="mainColumns" className="flex-container">
                <div>Shirts</div>
                {listShirt.map((item, i) => {
                    return (
                        <li key={i} className="Store_Card">
                            <div>
                                <a className="a" href="/cart">
                                    {" "}
                                    <StoreCard item={item} logo={props.logo}>
                                        {/* <Link to="/cart" /> */}
                                    </StoreCard>
                                </a>

                                <br />
                            </div>
                        </li>
                    );
                })}
            </ul>

            <ul id="mainColumns" className="flex-container">
                <div>Hats</div>
                {listHat.map((item, i) => {
                    return (
                        <li key={i} className="Store_Card">
                            <div>
                                <a className="a" href="/cart">
                                    <StoreCard
                                        item={item}
                                        logo={props.logo}></StoreCard>
                                </a>
                                <br />
                            </div>
                        </li>
                    );
                })}
            </ul>

            <ul id="mainColumns" className="flex-container">
                <div>Office</div>
                {listOffice.map((item, i) => {
                    return (
                        <li key={i} className="Store_Card">
                            <div>
                                <a className="a" href="/cart">
                                    <StoreCard
                                        item={item}
                                        logo={props.logo}></StoreCard>
                                </a>
                                <br />
                            </div>
                        </li>
                    );
                })}
            </ul>

            <ul id="mainColumns" className="flex-container">
                <div>Bottles</div>
                {listBottle.map((item, i) => {
                    return (
                        <li key={i} className="Store_Card">
                            <div>
                                <a className="a" href="/cart">
                                    <StoreCard
                                        item={item}
                                        logo={props.logo}></StoreCard>
                                </a>
                                <br />
                            </div>
                        </li>
                    );
                })}
            </ul>
            <Route path="/cart" component={ShoppingCart}></Route>
            {/* <img src={blackShirt} /> */}
        </div>
    );
}

function ShoppingCart() {
    return (
        <div>
            <br />

            <h1>Shopping Cart</h1>
        </div>
    );
}

export default StorePage;
