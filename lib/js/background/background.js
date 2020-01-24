function sendYouTubeUpdate(data) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, data);
  });
}

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
      sendYouTubeUpdate({
        type: SET_ALL,
        enabled: message.enabled
      });
      break;
    case SET:
      setChannelEnabled(message.channelId, message.enabled);
      sendYouTubeUpdate({
        type: SET,
        channelId: message.channelId
      });
      break;
    default:
      break;
  };

  return true;
});
