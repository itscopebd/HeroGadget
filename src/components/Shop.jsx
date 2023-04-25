import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';
import { addToBD} from '../utils/fakeBD';

const Shop = () => {
    const loadData=useLoaderData();
  
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