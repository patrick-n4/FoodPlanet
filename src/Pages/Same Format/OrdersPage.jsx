import React from "react";
import TopNav from "../../Components/TopNav";
import OrderList from "./ComposForOrders/OrderList";

export default function Order() {
  return (
    <div className="flex flex-col w-[80%] h-[100%] orders-page">
      <TopNav title="Orders" />
      <div id="stats">
        <span className="statistics">Total Orders</span>
        <span className="statistics">Delivered</span>
        <span className="statistics">Pending</span><br />
        <h1 className="statNumbers">1</h1>
        <h1 className="statNumbers">2</h1>
        <h1 className="statNumbers">3</h1>
      </div>
      <div id="new-order">
        <h3 className="text-[1em] order-card-title">New Order</h3>
        <div className="order-items flex flex-row items-center gap-[1em]">
          <input type="checkbox" name="Appetizer" id="appetizer" className="order w-[1.5em] h-[2em] " />
          <span className="order-items text-[1em] font-medium">Appetizer</span>
          <button className="newitem">+ New</button>
        </div>
        <div className="order-items flex flex-row items-center gap-[1em]">
          <input type="checkbox" name="Starter" id="starter" className="order w-[1.5em] h-[2em] " />
          <span className="order-items text-[1em] font-medium">Starter</span>
          <button className="newitem">+ New</button>
        </div>
        <div className="order-items flex flex-row items-center gap-[1em]">
          <input type="checkbox" name="Main" id="main-meal" className="order w-[1.5em] h-[2em] " />
          <span className="order-items text-[1em] font-medium">Main</span>
          <button className="newitem">+ New</button>
        </div>
        <div className="order-items flex flex-row items-center gap-[1em]">
          <input type="checkbox" name="Dessert" id="dessert" className="order w-[1.5em] h-[2em] " />
          <span className="order-items text-[1em] font-medium">Dessert</span>
          <button className="newitem">+ New</button>
        </div>
        <div className="order-items flex flex-row items-center gap-[1em]">
          <input type="checkbox" name="Drink" id="drink" className="order w-[1.5em] h-[2em] " />
          <span className="order-items text-[1em] font-medium">Drink</span>
          <button className="newitem">+ New</button>
        </div>
        </div>
      
      <div id="order-bar">
        <h2>Orders</h2>
        <button className="filter-order">Delivered</button>
        <button className="filter-order" id="pend">Pending</button>
        <button className="filter-order">All</button><br /><br />
      </div>
      <div className="head-of-table">
                <span id="number">No.</span>
                <span id="item">Items</span>
                <span id="client">Client</span>
                <span id="client-price">Price</span>
                <span id="client-phone">Client's phone</span>
            </div>

      
        <OrderList />
        <OrderList />
        <OrderList />
        <OrderList />
        <OrderList />
        <OrderList /> 
    </div>
    

  );
}
