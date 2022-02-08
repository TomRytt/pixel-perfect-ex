import io from 'socket.io-client';

// export const SOCKET_EMIT_USER_WATCH = 'user-watch';
// export const SOCKET_EVENT_USER_UPDATED = 'user-updated';
// export const SOCKET_EVENT_REVIEW_ADDED = 'review-added';
// export const SOCKET_EVENT_REVIEW_ABOUT_YOU = 'review-about-you';

// export const SOCKET_EMIT_LOGIN = 'set-user-socket';
// export const SOCKET_EMIT_LOGOUT = 'unset-user-socket';

const baseUrl = process.env.NODE_ENV === 'production' ? '' : '//localhost:3030';
export const socketService = createSocketService();
console.log(baseUrl);
// for debugging from console
// window.socketService = socketService

// socketService.setup();

function createSocketService() {
	var socket = null;
	const socketService = {
		setup() {
			socket = io(baseUrl);
		},
		on(eventName, cb) {
			socket.on(eventName, cb);
		},
		off(eventName, cb = null) {
			if (!socket) return;
			if (!cb) socket.removeAllListeners(eventName);
			else socket.off(eventName, cb);
		},
		emit(eventName, data) {
			socket.emit(eventName, data);
		},
		terminate() {
			socket = null;
		},
	};
	return socketService;
}
