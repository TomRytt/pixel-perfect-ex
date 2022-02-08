const initialState = {
	items: [],
};
export function itemReducer(state = initialState, action) {
	var newState = state;
	var items;
	switch (action.type) {
		case 'SET_ITEMS':
			newState = {...state, items: action.items};
			break;
		case 'REMOVE_ITEM':
			const lastRemovedItem = state.items.find((item) => item._id === action.itemId);
			items = state.items.filter((item) => item._id !== action.itemId);
			newState = {...state, items, lastRemovedItem};
			break;
		case 'ADD_ITEM':
			newState = {...state, items: [...state.items, action.item]};
			break;
		case 'UPDATE_ITEM':
			items = state.items.map((item) => (item._id === action.item._id ? action.item : item));
			newState = {...state, items};
			break;
		case 'ADD_TO_ITEMS':
			newState = {...state, items: [...state.items, action.item]};
			break;
		case 'REMOVE_FROM_ITEMS':
			items = state.items.filter((item) => item._id !== action.itemId);
			newState = {...state, items};
			break;
		case 'CLEAR_ITEMS':
			newState = {...state, item: []};
			break;
		case 'UNDO_REMOVE_ITEM':
			if (state.lastRemovedItem) {
				newState = {...state, items: [...state.items, state.lastRemovedItem], lastRemovedItem: null};
			}
			break;
		default:
	}
	// For debug:
	window.itemState = newState;
	// console.log('Prev State:', state)
	// console.log('Action:', action)
	// console.log('New State:', newState)
	return newState;
}
