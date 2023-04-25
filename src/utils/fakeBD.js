const addToBD = id => {
    let shoppingCard = {};

    const storedCard = localStorage.getItem("shopping-card");
    if (storedCard) {
        shoppingCard = JSON.parse(storedCard)
    }

    const quantity = shoppingCard[id]
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCard[id] = newQuantity;
    }
    else {
        shoppingCard[id] = 1;
    }

    localStorage.setItem("shopping-card", JSON.stringify(shoppingCard))
}

const getStoreCard=()=>{

    let shoppingCard = {};
    const getData=localStorage.getItem('shopping-card');
    if(getData){
        const dataConverString=JSON.parse(getData);
        shoppingCard =dataConverString;
    }

    return shoppingCard;
}


export {addToBD,getStoreCard};