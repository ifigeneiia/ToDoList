import * as types from '../actions/itemActions';
import axiosInstance from '../axios-items';

export const addItemProcedure = (item) => {
    return (dispatch) => {
        console.log(item);
        dispatch(types.addingItem());
        axiosInstance.post('/items.json',item)
         .then(response => {
             console.log(response.data.name);
             item.firebaseID = response.data.name
             item.completed = false
             return axiosInstance.patch('/items/' + item.firebaseID + '.json',item)
            })
                                .then(() =>{
                                    dispatch(types.addItem(item));
                                })
         .catch(error => {
            console.log(error);
            dispatch(types.addingItemError());
         });
    }

}
export const deleteItemProcedure = (item) => {
    return (dispatch) => {
        console.log(item);
        dispatch(types.removingItem());
        axiosInstance.delete('/items/' + item.firebaseID + '.json')
         .then(response => {
             console.log(response);
             dispatch(types.removeItem(item));
         })
         .catch(error => {
            console.log(error);
            dispatch(types.removingItemError());
         });
    }
    
}

export const getItemsProcedure = (item) => {
    return (dispatch) => {
        dispatch(types.gettingItems());
        axiosInstance.get('/items.json', item)
         .then(response => {
             console.log(response);
             let items = Object.values(response.data);
             console.log(items);
             dispatch(types.getItems(items));
         })
         .catch(error => {
            console.log(error);
            dispatch(types.gettingItemsError());
         });
    }
    
}

export const editItemProcedure = (item) => {
    return (dispatch) => {
        
        dispatch(types.editingItem());
        axiosInstance.patch('/items/' + item.firebaseID + '.json',item)
        .then((response) => {
            dispatch(types.editItem(item));
        })
         .catch(error => {
            dispatch(types.editingItemError());
         });
    }
    
}

export const completedItemProcedure = (item) => {
    return (dispatch) => {
        
        dispatch(types.completingItem());
        axiosInstance.patch('/items/' + item.firebaseID + '.json',item)
        .then((response) => {
            dispatch(types.completedItem(item));
        })
         .catch(error => {
            dispatch(types.completingItemError());
         });
    }
    
}



