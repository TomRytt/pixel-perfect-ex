import {itemService} from '../services/item.service.js';
import {userService} from '../services/user.service.js';
import {showSuccessMsg, showErrorMsg} from '../services/event-bus.service.js';

export function loadItems() {
	return async (dispatch) => {
		try {
			const items = await itemService.query();
			console.log('Items from DB:', items);
			dispatch({type: 'SET_ITEMS', items});
		} catch (err) {
			showErrorMsg('Cannot load items');
			console.log('Cannot load items', err);
		}

		itemService.subscribe((items) => {
			console.log('Got notified');
			dispatch({
				type: 'SET_ITEMS',
				items,
			});
		});
	};
}

export function onRemoveItem(itemId) {
	return async (dispatch, getState) => {
		try {
			await itemService.remove(itemId);
			console.log('Deleted Succesfully!');
			dispatch({
				type: 'REMOVE_ITEM',
				itemId,
			});
			showSuccessMsg('Item removed');
		} catch (err) {
			showErrorMsg('Cannot remove item');
			console.log('Cannot remove item', err);
		}
	};
}

export function onAddItem() {
	return async (dispatch) => {
		try {
			const item = await itemService.getEmptyItem();
			await itemService.save(item);
			console.log('Added Item', savedItem);
			dispatch({
				type: 'ADD_ITEM',
				item: savedItem,
			});
			showSuccessMsg('Item added');
		} catch (err) {
			showErrorMsg('Cannot add item');
			console.log('Cannot add item', err);
		}
	};
}

export function onEditItem(itemToSave) {
	return async (dispatch) => {
		try {
			const savedItem = await itemService.save(itemToSave);
			console.log('Updated Item:', savedItem);
			dispatch({
				type: 'UPDATE_ITEM',
				item: savedItem,
			});
			showSuccessMsg('Item updated');
		} catch (err) {
			showErrorMsg('Cannot update item');
			console.log('Cannot save item', err);
		}
	};
}

export function addToItems(item) {
	return (dispatch) => {
		dispatch({type: 'ADD_TO_ITEMS', item});
	};
}

export function removeFromItems(itemId) {
	return (dispatch) => {
		dispatch({type: 'REMOVE_FROM_ITEMS', itemId});
	};
}
