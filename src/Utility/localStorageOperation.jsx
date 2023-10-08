
const loadLocalCart=()=>{
    let cart={};
    const savedCart=localStorage.getItem('cart');
    if(savedCart){
        cart=JSON.parse(savedCart);
    }
    
    return cart;
}

const setLocalCart=(id)=>{
    let savedCart=loadLocalCart();
    const quantity=savedCart[id];
    if(!quantity){
        savedCart[id]=1;
    }
    else{
        savedCart[id]++;
    }
    localStorage.setItem('cart',JSON.stringify(savedCart));
}
const removeLocal=id=>{
    let savedCart=loadLocalCart();
    delete savedCart[id];
    localStorage.setItem('cart',JSON.stringify(savedCart))
}


export {loadLocalCart,setLocalCart,removeLocal}