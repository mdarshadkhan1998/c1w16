import React from "react";
import styles from "./Product.module.css"
// keep the add to cart component here
const CartButton = () => {
    //manage state of the count 
    const [count, setCounter]=React.useState(0);
    const handleClick =(value)=>{
          setCounter(count+value)
    }
  return <>
  {/* add to cart button */}
  {/* count with - and  + button */}
  <div className={styles.btn}>
      {count ?(
          <>
          <button onClick={() => handleClick(-1)} className={styles.as}>-</button>
          <label className={styles.qty}>{count}</label>
          <button onClick={() => handleClick(1)} className={styles.as}>+</button>
        </>
          
        ):(
          <button onClick={() => handleClick(1)} className={styles.addcart}>Add to cart</button>
          
          )
        }
  </div>
  </>;
};
export default CartButton