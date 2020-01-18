browser.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  var action = message.action;

  switch (action) {
    case GET_ALL:
      if (sendResponse) {
        sendResponse(getValues());
      }
      break;
    case SET_ALL:
      setAllChannelsEnabled(message.enabled);
      break;
    case SET:
      setChannelEnabled(message.channelId, message.enabled);
      break;
    default:
      break;
  };

  return true;
});
