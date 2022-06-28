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
      title: `${restaurants.name} has arrived in Indonesia!`,
      options: {
        body: restaurants.description,
        image: `${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}`,
      },
    });
  },
};
 
export default WebSocketInitiator;