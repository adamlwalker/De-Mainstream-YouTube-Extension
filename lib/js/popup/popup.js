var list = document.getElementById("list");
var selectAllBtn = document.getElementById('select-all-btn');
var deselectAllBtn = document.getElementById('deselect-all-btn');
var listItemCheckboxes = [];

browser.runtime.sendMessage({
  action: GET_ALL,
}, function (values) {
  if (!Array.isArray(values)) return false;

  makeList(values);
});

function makeList(values) {
  if (!Array.isArray(values)) return false;

  for (var i = 0; i < values.length; i++) {
    var block = values[i];
    var listItem = makeListItem(block);
    list.appendChild(listItem);
  };
};

function makeListItem(item) {
  var listItem = document.createElement("li");
  listItem.className = "list-item";

  var checkbox = document.createElement("input");
  checkbox.className = "list-item__checkbox";
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", item.id);
  checkbox.setAttribute("name", item.name);

  listItemCheckboxes.push(checkbox);

  checkbox.addEventListener("change", function () {
    saveSetting(this.id, this.checked);
  }, false);
  checkbox.checked = item.enabled;

  var block = document.createElement("label");
  block.className = "list-item__block";
  block.setAttribute("for", item.id);

  var icon = document.createElement("img");
  icon.className = "list-item__icon";
  icon.src = item.icon;

  var text = document.createElement("span");
  text.className = "list-item__text";
  text.innerText = item.name;

  block.appendChild(icon);
  block.appendChild(text);

  listItem.appendChild(checkbox);
  listItem.appendChild(block);

  return listItem;
};

function saveSetting(id, enabled) {
  browser.runtime.sendMessage({
    action: SET,
    channelId: id,
    enabled: enabled
  });
};

function setAllEnabled(enabled) {
  browser.runtime.sendMessage({
    action: SET_ALL,
    enabled: enabled
  });

  for (var i = 0; i < listItemCheckboxes.length; i++) {
    var checkbox = listItemCheckboxes[i];
    checkbox.checked = enabled;
  };
};

selectAllBtn.addEventListener("click", function () {
  setAllEnabled(true);
}, false);

deselectAllBtn.addEventListener("click", function () {
  setAllEnabled(false);
}, false);
