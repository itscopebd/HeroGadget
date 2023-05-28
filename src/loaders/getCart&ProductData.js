import { getStoreCard } from "../utils/fakeBD";

export const getProductAndData = async () => {
    const saveCard = getStoreCard();
    const pData = await fetch("products.json");
    const products = await pData.json();

    let cartArray = []
    for (const id in saveCard) {
        const foundProduct = products.find(product => product.id === id);
        if (foundProduct) {

            foundProduct.quantity = saveCard[id]
            cartArray.push(foundProduct)
        }
    }
    return { cartArray, products }


}