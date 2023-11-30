import React from "react";
import ShopItem from './ShopItem.js';
import StockList from './ShopItemDataBase.json';
import "../styles.scss";


function Card({ children }) {
    return (

        <section className="merchandise-container">
            {children}
        </section>
    );
  }


function Shop() {

    return (
        <div>
            {
                StockList.map(item =>(
                    <Card key={item.id}>
                        <ShopItem item={item}/>
                    </Card>
                ))
            }
        </div>
  );

}



  

export default Shop