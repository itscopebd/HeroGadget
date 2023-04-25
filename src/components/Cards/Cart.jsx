import React from 'react';

import { useLoaderData } from 'react-router-dom';
import CartItem from './CartItem';

const Cart = () => {

    const { cartArray } = useLoaderData();

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
       
        <div className=''>
           
            <div className='divide-y divide-gray-700 flex flex-col'>
                {
                    cartArray.map(product=><CartItem product={product} key={product.id}></CartItem>)
                }
            </div>

        </div>
         </div>

        </div>
    );
  
};

export default Cart;