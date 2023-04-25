import { getStoreCard } from "../utils/fakeBD";

export const getProductAndData = async () => {
    const saveCard = getStoreCard();
    const products = await fetch("products.json");
    const pData = await products.json();

    let cartArray = []
    for (const id in saveCard) {
        const foundProduct = pData.find(product => product.id === id);
        if (foundProduct) {

            foundProduct.quantity = saveCard[id]
            cartArray.push(foundProduct)
        }
    }
    return { cartArray, products }


}