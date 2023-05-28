import React from 'react';

import { Link, useLoaderData } from 'react-router-dom';
import CartItem from './CartItem';
import { deleteAllCart, removeFormDb } from '../../utils/fakeBD';
const Cart = () => {

    const { cartArray } = useLoaderData();
    let total = 0;
    if (cartArray.length > 0) {
        for (const cart of cartArray) {

            total = total + cart.price * cart.quantity;

        }

    }

  // remove specific data ui and localStorage 
  const removeCartFormUi = (id) => {
    removeFormDb(id)
  }
// delete all cart 

const deleteAllCartHandler=()=>{
deleteAllCart()
}

    // console.log(pData)
    // useEffect(() => {
    //     const saveCard = getStoreCard();
    //     let newArr=[]
    //     for (const id in saveCard) {
    //         const foundProduct = pData.find(product => product.id === id);
    //         if (foundProduct) {

    //             foundProduct.quantity = saveCard[id]
    //             newArr.push(foundProduct)
    //         }
    //     }

    //     setCart(newArr)
    // }, [])

    console.log(cartArray)
    return (
        <div className='bg-gray-100 text-gray-900 flex justify-center items-start min-h-screen'>
            <div>
                <div className='flex flex-col max-w-3xl p-6 space-y-3 sm:p-10'>
                    <h2 className='text-xl font-semibold'>{cartArray.length > 0 ? "Review Cart Items" : "Cart is Empty"}</h2>
                </div>



                <ul className='divide-y divide-gray-700 flex flex-col'>
                    {
                        cartArray.map(product => <CartItem product={product} key={product.id} removeCartFormUi={removeCartFormUi} deleteAllCartHandler={deleteAllCartHandler}></CartItem>)
                    }
                </ul>
                <div className='space-y-1 text-right'>
                    <p>
                        Total amount: <span className='font-semibold'>{total}$</span>
                    </p>
                    <p className='text-sm text-gray-400'>
                        Not include taxes and shipping costs
                    </p>
                </div>
                <div className='flex justify-end space-x-4'>
                    {
                       cartArray.length>0 ? <button className='btn-outlined' onClick={deleteAllCartHandler}>Clear Cart</button> :
                       <Link to="/shop"><button className='btn-outlined' >Back To Shop</button></Link>
                    }
                    
                    <button className='btn-primary'>Place Order</button>

                </div>

            </div>

        </div>
    );

};

export default Cart;