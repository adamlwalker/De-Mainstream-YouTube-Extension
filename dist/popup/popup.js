var LOCAL_STORAGE_KEY="demainstream",GET_ALL="get_all",SET="set",SET_ALL="set_all",RATING_GREEN="#0f7b12",RATING_RED="#7e0308",DAILY_TOP_URL="https://www.youtube.com/results?search_query=youtube&sp=CAMSBAgCEAE%253D",browser=browser||chrome;function isObject(e){var t=typeof e;return"function"==t||"object"==t&&!!e}var list=document.getElementById("list"),selectAllBtn=document.getElementById("select-all-btn"),deselectAllBtn=document.getElementById("deselect-all-btn"),listItemCheckboxes=[];function makeList(e){if(!Array.isArray(e))return!1;for(var t=0;t<e.length;t++){var n=makeListItem(e[t]);list.appendChild(n)}}function makeListItem(e){var t=document.createElement("li");t.className="list-item";var n=document.createElement("input");n.className="list-item__checkbox",n.setAttribute("type","checkbox"),n.setAttribute("id",e.id),n.setAttribute("name",e.name),listItemCheckboxes.push(n),n.addEventListener("change",function(){saveSetting(this.id,this.checked)},!1),n.checked=e.enabled;var s=document.createElement("label");s.className="list-item__block",s.setAttribute("for",e.id);var l=document.createElement("img");l.className="list-item__icon",l.src=e.icon;var i=document.createElement("span");return i.className="list-item__text",i.innerText=e.name,s.appendChild(l),s.appendChild(i),t.appendChild(n),t.appendChild(s),t}function saveSetting(e,t){browser.runtime.sendMessage({action:SET,channelId:e,enabled:t})}function setAllEnabled(e){browser.runtime.sendMessage({action:SET_ALL,enabled:e});for(var t=0;t<listItemCheckboxes.length;t++){listItemCheckboxes[t].checked=e}}browser.runtime.sendMessage({action:GET_ALL},function(e){if(!Array.isArray(e))return!1;makeList(e)}),selectAllBtn.addEventListener("click",function(){setAllEnabled(!0)},!1),deselectAllBtn.addEventListener("click",function(){setAllEnabled(!1)},!1);