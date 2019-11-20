import * as actionTypes from "../constants/actionTypes";

//ACTION CREATORS 

//ADD ITEM
export function addingItem() {
    return {
        type: actionTypes.ADDING_ITEM
    };
}

export function addItem(payload) {
    return {
        type: actionTypes.ADD_ITEM,
        payload
    };
}

export function addingItemError() {
    return {
        type: actionTypes.ADDING_ITEM_ERROR
    };
}

//REMOVE ITEM
export function removingItem() {
    return {
        type: actionTypes.REMOVING_ITEM
    };
}

export function removeItem(payload) {
    return {
        type: actionTypes.REMOVE_ITEM,
        payload
    };
}

export function removingItemError() {
    return {
        type: actionTypes.REMOVING_ITEM_ERROR
    };
}

//GET ITEM
export function gettingItems() {
    return {
        type: actionTypes.GETTING_ITEMS
    };
}

export function getItems(payload) {
    return {
        type: actionTypes.GET_ITEMS,
        payload
    };
}

export function gettingItemsError() {
    return {
        type: actionTypes.GETTING_ITEMS_ERROR
    };
}

//EDIT ITEM
export function editingItem() {
    return {
        type: actionTypes.EDITING_ITEM
    };
}

export function editItem(payload) {
    return {
        type: actionTypes.EDIT_ITEM,
        payload
    };
}

export function editingItemError() {
    return {
        type: actionTypes.EDITING_ITEM_ERROR
    };
}

//COMPLETED ITEM
export function completingItem() {
    return {
        type: actionTypes.COMPLETING_ITEM
    };
}

export function completedItem(payload) {
    return {
        type: actionTypes.COMPLETED_ITEM,
        payload
    };
}

export function completingItemError() {
    return {
        type: actionTypes.COMPLETING_ITEM_ERROR
    };
}
