function hasLocalStorage() {
  if (!window.localStorage) return false;
  if (!isObject(window.localStorage)) return false;

  return true;
}

function setup() {
  if (!hasLocalStorage()) return false;

  if (!window.localStorage[LOCAL_STORAGE_KEY] && !Array.isArray(window.localStorage[LOCAL_STORAGE_KEY])) {
    var defaultStorageChannels = channels.map(function (block) {
      //Enable all on startup
      block['enabled'] = true;
      return block;
    });

    window.localStorage[LOCAL_STORAGE_KEY] = JSON.stringify(defaultStorageChannels);
  }
};

function getValues() {
  if (!hasLocalStorage()) return false;

  var params = window.localStorage[LOCAL_STORAGE_KEY];
  params = JSON.parse(params);

  return params;
};

function setChannelEnabled(channelId, enabled) {
  if (!hasLocalStorage()) return;

  var storedChannels = window.localStorage[LOCAL_STORAGE_KEY];
  storedChannels = JSON.parse(storedChannels); 

  if (!Array.isArray(storedChannels)) setup();

  for (var i = 0; i < storedChannels.length; i++) {
    var block = storedChannels[i];

    if (block.id === channelId) {
      block.enabled = enabled;
      storedChannels[i] = block;
    }
  };

  //Set all
  window.localStorage[LOCAL_STORAGE_KEY] = JSON.stringify(storedChannels);
};

function setAllChannelsEnabled(enabled) {
  if (!hasLocalStorage()) return;

  var defaultStorageChannels = channels.map(function(block) {
    //Disable all
    block['enabled'] = enabled;
    return block;
  });

  window.localStorage[LOCAL_STORAGE_KEY] = JSON.stringify(defaultStorageChannels);
};

setup();
