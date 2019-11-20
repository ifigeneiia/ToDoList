import * as actionTypes from "../constants/actionTypes";

const initialState = {
    
    items: [],
    isAddingItem: false,
    isAddingItemError: false,
    isRemovingItem: false,
    isRemovingItemError: false,
    isGettingItems: false,
    isGettingItemsError: false,
    isEditingItem: false,
    isEditingItemError: false,
    isCompletingItem: false,
    isCompletingItemError: false
};
function itemsReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADDING_ITEM:
            return {
                ...state,
                isAddingItem: true
            };
        case actionTypes.ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload],
                isAddingItem: false,
                isAddingItemError: false
            };
        case actionTypes.ADDING_ITEM_ERROR:
            return {
                ...state,
                isAddingItem: false,
                isAddingItemError: true
            };
        case actionTypes.REMOVING_ITEM:
            return {
                ...state,
                isRemovingItem: true
            };
        case actionTypes.REMOVE_ITEM:
            return {
                ...state,
                items: [...state.items.filter(item => item !== action.payload)],
                isRemovingItem: false,
                isRemovingItemError: false
            }
        case actionTypes.REMOVING_ITEM_ERROR:
            return {
                ...state,
                isRemovingItem: false,
                isRemovingItemError: true
            }
        case actionTypes.GETTING_ITEMS:
            return {
                ...state,
                isGettingItems: true
            };
        case actionTypes.GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                isGettingItems: false,
                isGettingItemsError: false,

            }
        case actionTypes.GETTING_ITEMS_ERROR:
            return {
                ...state,
                isGettingItems: false,
                isGettingItemsError: true
            }
        case actionTypes.EDITING_ITEM:
            return {
                ...state,
                isEditingItem: true
            };
        case actionTypes.EDIT_ITEM:
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id
                        ? { ...item, title: action.payload.title}
                        : item
                ),
                isEditingItem: false,
                isEditingItemError: false
            }
        case actionTypes.EDITING_ITEM_ERROR:
            return {
                ...state,
                isEditingItem: false,
                isEditingItemError: true
            }
        case actionTypes.COMPLETING_ITEM:
            return {
                ...state,
                isCompletingItem: true
            };
        case actionTypes.COMPLETED_ITEM:
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id
                        ? { ...item, title: action.payload.title }
                        : item
                ),
                isCompletingItem: false,
                isCompletingItemError: false
            }
        case actionTypes.COMPLETING_ITEM_ERROR:
            return {
                ...state,
                isCompletingItem: false,
                isCompletingItemError: true
            }

        default:
            return state;
    }
};
export default itemsReducer;