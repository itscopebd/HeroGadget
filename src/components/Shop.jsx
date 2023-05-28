import React, { useContext } from 'react';

import ProductCard from './Cards/ProductCard';
import { addToBD} from '../utils/fakeBD';
import { ProductContext } from '../App';

const Shop = () => {
    // const loadData=useLoaderData();

    const loadData=useContext(ProductContext);

   
  
const handleAddToCard=id=>{
   addToBD(id)
}

    return (
        <div className='product-container my-container'>
            {
                loadData.map(product=><ProductCard product={product} key={product.id} handleAddToCard={handleAddToCard}></ProductCard>)
            }
        </div>
    );
};

export default Shop;