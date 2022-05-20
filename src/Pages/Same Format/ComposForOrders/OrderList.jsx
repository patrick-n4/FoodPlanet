import React from "react";

function OrderList() {
    return (
        <div className="orderContainer">
            <div className="orderBox">
                <div className="orderList">
                    <h3>Order </h3>
                    <div className="theOrder">
                        <h4>Fruit salad, grilled lamb, apple pie</h4>
                        <div className="clientName">
                            <h6 className="clientName">Ndayambaje Lois</h6>
                        </div>
                    </div>
                    <div className="price">
                        <h3 className="price">Rwf 9500</h3>
                        <div className="clientNum"><h5 className="clientNum">0789012345</h5></div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default OrderList;