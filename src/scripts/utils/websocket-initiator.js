import NotificationHelper from './notification-helper';
import CONFIG from '../globals/config';
 
const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },
 
  _onMessageHandler(message) {
    const movie = JSON.parse(message.data);
    
    NotificationHelper.sendNotification({
      title: `${restaurant.name} has arrived in Indonesia!`,
      options: {
        body: restaurants.description,
        image: `${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}`,
      },
    });
  },
};
 
export default WebSocketInitiator;