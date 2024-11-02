import { toast } from "react-toastify";



const getStoredReadList = () =>{
    const storedListSter = localStorage.getItem('read-list')
    if(storedListSter){
        const stored = JSON.parse(storedListSter);
        return stored;
    }
    else{
        return [];
    }

};


const addStoreReadList = (id)=>{

    const storetList = getStoredReadList();

    if(storetList.includes(id)){

        console.log(id, 'already exists this id list')
    }else{
        storetList.push(id);
        const list = JSON.stringify(storetList);
        localStorage.setItem('read-list', list)
    }
}




// for wishLsit

const getWishlis = () =>{
    const store = localStorage.getItem('wish-List');
    if(store){
        const consvartJson = JSON.parse(store);
        return consvartJson;
    }
    else{
        return [];
    }
} 


const addwishlist = (id) =>{
    const getWish = getWishlis();

    if(getWish.includes(id)){
        console.log(id, 'already exists this id');

    }else{
        getWish.push(id);

        const stingifyvalue = JSON.stringify(getWish);

        localStorage.setItem('wish-List', stingifyvalue)

        toast('This book is added to your read list.')
    }
}

export {addStoreReadList, addwishlist, getStoredReadList}






