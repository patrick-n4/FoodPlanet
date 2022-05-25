import React from "react";
import TopNav from "../../Components/TopNav";

export default function Order() {
  return (
    <div className="flex flex-col w-[80%] h-[100%] orders-page">
      <TopNav title="Orders" />
      <div id="stats-order-card">
        <div id="stats">
          <h2>Total Orders</h2>
          <h4>13</h4>
          <h2>Delivered</h2>
          <h4>13</h4>
          <h2>Pending</h2>
          <h4>0</h4>
        </div>

        <div id="new-order">
          <h3 className="text-[1em] order-card-title">New Order</h3>
          <table>
            <tr>
                <td><input
                  type="checkbox"
                  name="Appetizer"
                  id="appetizer"
                  className="order w-[1.5em] h-[2em] "
                  /></td>
                  <td>Appetizer</td>
                <td><button className="newitem">+ New</button></td>
            </tr>
            <tr>
                <td><input
              type="checkbox"
              name="Starter"
              id="starter"
              className="order w-[1.5em] h-[2em] "
              /></td>
              <td>Starter</td>
              <td><button className="newitem">+ New</button></td>
            </tr>
            <tr>
              <td><input
              type="checkbox"
              name="Main"
              id="main-meal"
              className="order w-[1.5em] h-[2em] "
            /></td>
              <td>Main</td>
              <td>
                <td><button className="newitem">+ New</button></td></td>
            </tr>
            <tr>
              <td><input
              type="checkbox"
              name="Main"
              id="main-meal"
              className="order w-[1.5em] h-[2em] "
            /></td>
            <td>Dessert</td>
              <td>
              <td><button className="newitem">+ New</button></td></td>
          </tr>
            <tr>
              <td><input
              type="checkbox"
              name="Main"
              id="main-meal"
              className="order w-[1.5em] h-[2em] "
            /></td>
            <td>Drink</td>
              <td><button className="newitem">+ New</button></td>
          </tr>
        </table>
        </div>
      </div>

      <div id="order-bar">
        <h2>Orders</h2>
        <button className="filter-order">Delivered</button>
        <button className="filter-order" id="pend">
          Pending
        </button>
        <button className="filter-order">All</button>
        <br />
        <br />
      </div>

      <div id="order-table">
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Items</th>
              <th>Client</th>
              <th>Price</th>
              <th>Client's phone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Fruit salad, grilled lamb, apple pie</td>
              <td>Ndayambaje Lois</td>
              <td>Rwf 9500</td>
              <td>0789012345</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Fruit salad, grilled lamb, apple pie</td>
              <td>Ndayambaje Lois</td>
              <td>Rwf 9500</td>
              <td>0789012345</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Fruit salad, grilled lamb, apple pie</td>
              <td>Ndayambaje Lois</td>
              <td>Rwf 9500</td>
              <td>0789012345</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Fruit salad, grilled lamb, apple pie</td>
              <td>Ndayambaje Lois</td>
              <td>Rwf 9500</td>
              <td>0789012345</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Fruit salad, grilled lamb, apple pie</td>
              <td>Ndayambaje Lois</td>
              <td>Rwf 9500</td>
              <td>0789012345</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Fruit salad, grilled lamb, apple pie</td>
              <td>Ndayambaje Lois</td>
              <td>Rwf 9500</td>
              <td>0789012345</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Fruit salad, grilled lamb, apple pie</td>
              <td>Ndayambaje Lois</td>
              <td>Rwf 9500</td>
              <td>0789012345</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Fruit salad, grilled lamb, apple pie</td>
              <td>Ndayambaje Lois</td>
              <td>Rwf 9500</td>
              <td>0789012345</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Fruit salad, grilled lamb, apple pie</td>
              <td>Ndayambaje Lois</td>
              <td>Rwf 9500</td>
              <td>0789012345</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
