import React from "react"
import data from '../data.json'
import GroceryItem from "./GroceryItem"
import styles from "./Product.module.css"

const GroceryDetails = ()=>{
console.log(data)

    return(
        <>
        <h1 className={styles.gro}>Groceries</h1>
        <h5 className={styles.top}>TOP DEALS</h5>
        <div className={styles.container}>
            {/* map through the data and display the cards */}
            {
                data.map((el)=>(
                    <GroceryItem {...el}/>
                ))
            }
        </div>
        </>
    )
}
export default GroceryDetails