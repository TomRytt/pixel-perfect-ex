import {storageService} from './async-storage.service.js';
import {utilService} from './util.service.js';
import {userService} from './user.service.js';

const STORAGE_KEY = 'item';
const listeners = [];

export const itemService = {
	query,
	getById,
	save,
	remove,
	getEmptyItem,
	subscribe,
};
window.cs = itemService;

function query() {
	return storageService.query(STORAGE_KEY);
}
function getById(itemId) {
	return storageService.get(STORAGE_KEY, itemId);
}
function remove(itemId) {
	// return new Promise((resolve, reject) => {
	//     setTimeout(reject, 2000)
	// })
	// return Promise.reject('Not now!');
	return storageService.remove(STORAGE_KEY, itemId);
}
function save(item) {
	if (item._id) {
		return storageService.put(STORAGE_KEY, item);
	} else {
		item.owner = userService.getLoggedinUser();
		return storageService.post(STORAGE_KEY, item);
	}
}

function getEmptyItem() {
	return {
		title: 'New item',
		id: utilService.makeId(),
	};
}

function subscribe(listener) {
	listeners.push(listener);
}

function _notifySubscribersItemsChanged(items) {
	console.log('Notifying Listeners');
	listeners.forEach((listener) => listener(items));
}

window.addEventListener('storage', () => {
	console.log('Storage Changed from another Browser!');
	query().then((items) => {
		_notifySubscribersItemsChanged(items);
	});
});

// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 980}).then(x => console.log(x))
