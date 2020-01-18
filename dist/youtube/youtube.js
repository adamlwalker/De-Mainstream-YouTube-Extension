var LOCAL_STORAGE_KEY="demainstream",GET_ALL="get_all",SET="set",SET_ALL="set_all",RATING_GREEN="#0f7b12",RATING_RED="#7e0308",DAILY_TOP_URL="https://www.youtube.com/results?search_query=youtube&sp=CAMSBAgCEAE%253D",browser=browser||chrome;function isObject(t){var e=typeof t;return"function"==e||"object"==e&&!!t}!function(){var t=document.querySelector("#search-form #container"),o=document.querySelector("#search[name='search_query']"),C=document.createElement("INPUT");C.setAttribute("type","checkbox"),C.setAttribute("id","GQAupbj5Ky"),C.style.setProperty("display","none","important");var i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.style.setProperty("display","inlne-block","important"),i.style.setProperty("height","20px","important"),i.style.setProperty("width","20px","important"),i.style.setProperty("margin-left","6px","important"),i.setAttribute("version","1.1"),i.setAttribute("xmlns","http://www.w3.org/2000/svg"),i.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),i.setAttribute("viewBox","0 0 60 60"),i.setAttribute("fill","#6F6F6F");var e=document.createElementNS("http://www.w3.org/2000/svg","path");e.setAttribute("d","M 12.097 8.992 C 11.152 9.191 10.53125 9.800 10.246 10.804 L 10.179 11.03125 L 10.171 16.847 C 10.164 23.296 10.152 22.882 10.355 23.359 C 10.5625 23.84375 11.011 24.375 11.402 24.605 C 12.964 25.519 14.851 24.785 15.386 23.050 L 15.453 22.835 L 15.46875 13.742 L 24.253 13.742 C 33.277 13.742 33.429 13.742 34.484 13.859 C 42.566 14.757 46.960 20.464 46.964 30.074 C 46.96875 39.746 42.480 45.464 34.234 46.304 C 33.285 46.398 32.621 46.40625 24.058 46.40625 L 15.46875 46.40625 L 15.46875 42.003 C 15.46875 37.339 15.46875 37.40625 15.324 36.976 C 14.539 34.695 11.316 34.609 10.355 36.847 C 10.152 37.320 10.164 36.914 10.171 43.300 L 10.179 49.058 L 10.246 49.292 C 10.492 50.175 11.109 50.804 11.96875 51.042 L 12.203 51.109 L 22.835 51.117 C 30.230 51.125 33.644 51.117 34.042 51.09375 C 45.820 50.4375 52.492 42.574 52.34375 29.523 C 52.328 28.074 52.316 27.800 52.203 26.691 C 51.144 15.984 44.59375 9.5625 34.121 8.964 C 33.0625 8.90625 12.394 8.929 12.097 8.992 M 27.421 22.714 C 27.21875 22.761 26.914 22.910 26.738 23.042 C 26.664 23.097 26.597 23.144 26.585 23.144 C 26.578 23.144 26.554 23.15625 26.535 23.175 C 26.460 23.238 26.132 23.464 26.117 23.464 C 26.105 23.464 26.082 23.484 26.058 23.503 C 25.992 23.5625 25.953 23.589 25.722 23.746 C 25.601 23.824 25.496 23.898 25.488 23.90625 C 25.480 23.914 25.375 23.988 25.253 24.066 C 25.132 24.148 25.027 24.222 25.019 24.230 C 25.011 24.238 24.914 24.308 24.800 24.382 C 24.519 24.570 24.21875 24.777 24.183 24.804 C 24.167 24.820 24.054 24.894 23.933 24.976 C 23.8125 25.054 23.710 25.128 23.703 25.136 C 23.691 25.144 23.585 25.21875 23.46875 25.296 C 23.347 25.378 23.234 25.453 23.21875 25.464 C 23.03125 25.605 22.820 25.753 22.804 25.753 C 22.796 25.753 22.773 25.765 22.753 25.78125 C 22.71875 25.8125 22.300 26.109 22.175 26.191 C 22.140 26.214 22.0625 26.273 22 26.316 C 21.9375 26.359 21.878 26.398 21.867 26.398 C 21.859 26.398 21.835 26.410 21.816 26.425 C 21.796 26.445 21.671 26.535 21.535 26.632 C 21.394 26.726 21.269 26.816 21.253 26.828 C 21.238 26.839 21.144 26.902 21.050 26.96875 C 20.953 27.03125 20.871 27.09375 20.863 27.105 C 20.859 27.117 20.835 27.128 20.816 27.128 C 20.792 27.128 20.773 27.140 20.765 27.152 C 20.753 27.175 20.578 27.304 20.550 27.304 C 20.542 27.304 20.519 27.316 20.5 27.335 C 20.335 27.472 20.28125 27.511 20.238 27.527 C 20.207 27.535 20.183 27.554 20.183 27.566 C 20.183 27.582 20.15625 27.601 20.121 27.613 C 20.085 27.625 20.042 27.644 20.027 27.660 C 19.886 27.777 19.851 27.804 19.835 27.804 C 19.824 27.804 19.789 27.828 19.757 27.855 C 19.726 27.882 19.648 27.9375 19.585 27.976 C 19.519 28.019 19.453 28.058 19.4375 28.074 C 19.332 28.15625 19.039 28.359 19.027 28.359 C 19.019 28.359 18.996 28.371 18.976 28.386 C 18.957 28.40625 18.832 28.496 18.695 28.59375 C 18.078 29.046 17.871 29.40625 17.871 30.042 C 17.871 30.679 18.078 31.042 18.695 31.492 C 18.832 31.589 18.953 31.679 18.96875 31.691 C 18.988 31.703 19.097 31.78125 19.21875 31.859 C 19.339 31.941 19.445 32.011 19.453 32.023 C 19.460 32.03125 19.566 32.101 19.6875 32.183 C 19.808 32.261 19.921 32.34375 19.941 32.359 C 19.960 32.375 20 32.402 20.023 32.425 C 20.046 32.445 20.078 32.460 20.089 32.460 C 20.105 32.460 20.140 32.480 20.171 32.503 C 20.203 32.527 20.28125 32.589 20.347 32.636 C 20.410 32.683 20.480 32.738 20.5 32.753 C 20.519 32.769 20.542 32.785 20.550 32.785 C 20.578 32.785 20.753 32.910 20.765 32.9375 C 20.773 32.949 20.792 32.960 20.816 32.960 C 20.835 32.960 20.859 32.96875 20.863 32.980 C 20.871 32.992 20.953 33.054 21.050 33.121 C 21.144 33.183 21.238 33.246 21.253 33.261 C 21.269 33.273 21.394 33.359 21.535 33.457 C 21.671 33.550 21.796 33.644 21.816 33.660 C 21.835 33.675 21.859 33.691 21.867 33.691 C 21.878 33.691 21.9375 33.726 22 33.773 C 22.0625 33.816 22.140 33.871 22.175 33.898 C 22.253 33.945 22.703 34.265 22.75 34.296 C 22.765 34.3125 22.878 34.386 23 34.46875 C 23.117 34.546 23.222 34.621 23.234 34.628 C 23.242 34.636 23.347 34.710 23.464 34.789 C 23.585 34.871 23.691 34.941 23.703 34.953 C 23.710 34.960 23.8125 35.03125 23.933 35.113 C 24.054 35.191 24.167 35.269 24.183 35.28125 C 24.21875 35.3125 24.519 35.519 24.800 35.703 C 24.914 35.78125 25.011 35.847 25.019 35.859 C 25.027 35.867 25.132 35.941 25.253 36.019 C 25.375 36.101 25.480 36.171 25.488 36.183 C 25.496 36.191 25.601 36.261 25.722 36.34375 C 25.84375 36.421 25.957 36.503 25.976 36.519 C 25.996 36.535 26.035 36.5625 26.058 36.585 C 26.082 36.605 26.109 36.621 26.117 36.621 C 26.132 36.621 26.464 36.851 26.535 36.914 C 26.554 36.929 26.578 36.941 26.589 36.941 C 26.597 36.941 26.65625 36.980 26.714 37.027 C 27.152 37.375 27.796 37.503 28.183 37.320 C 28.328 37.25 28.652 36.9375 28.652 36.871 C 28.652 36.84375 28.664 36.828 28.679 36.828 C 28.695 36.828 28.714 36.785 28.726 36.730 C 28.738 36.679 28.757 36.621 28.769 36.605 C 28.867 36.480 28.871 36.230 28.871 30.042 C 28.871 23.859 28.867 23.609 28.769 23.480 C 28.757 23.464 28.738 23.410 28.726 23.355 C 28.714 23.304 28.695 23.261 28.679 23.261 C 28.664 23.261 28.652 23.242 28.652 23.21875 C 28.652 23.148 28.328 22.839 28.175 22.765 C 28.003 22.683 27.65625 22.660 27.421 22.714 M 39.785 22.714 C 39.601 22.757 39.378 22.863 39.128 23.03125 C 39.035 23.09375 38.953 23.144 38.945 23.144 C 38.9375 23.144 38.917 23.160 38.898 23.175 C 38.878 23.191 38.75 23.285 38.613 23.378 C 38.476 23.476 38.351 23.5625 38.335 23.574 C 38.316 23.589 38.207 23.664 38.085 23.746 C 37.964 23.824 37.859 23.898 37.851 23.90625 C 37.84375 23.914 37.738 23.988 37.617 24.066 C 37.496 24.148 37.390 24.21875 37.382 24.226 C 37.359 24.25 37.070 24.453 36.796 24.632 C 36.660 24.722 36.542 24.804 36.535 24.8125 C 36.523 24.824 36.417 24.894 36.300 24.976 C 36.179 25.054 36.0625 25.136 36.039 25.160 C 36.019 25.179 35.992 25.195 35.980 25.195 C 35.96875 25.195 35.933 25.21875 35.902 25.246 C 35.871 25.277 35.792 25.332 35.726 25.371 C 35.664 25.410 35.597 25.453 35.582 25.464 C 35.476 25.546 35.183 25.753 35.167 25.753 C 35.160 25.753 35.136 25.765 35.117 25.78125 C 35.046 25.84375 34.71875 26.074 34.699 26.074 C 34.691 26.074 34.667 26.089 34.644 26.109 C 34.625 26.132 34.582 26.164 34.550 26.183 C 34.523 26.203 34.410 26.28125 34.308 26.351 C 34.203 26.425 34.089 26.5 34.0625 26.519 C 34.03125 26.542 33.929 26.613 33.832 26.683 C 33.738 26.75 33.648 26.808 33.636 26.808 C 33.621 26.808 33.605 26.816 33.597 26.828 C 33.59375 26.839 33.488 26.917 33.371 26.996 C 33.25 27.078 33.144 27.148 33.132 27.160 C 33.089 27.203 32.925 27.304 32.902 27.304 C 32.886 27.304 32.871 27.316 32.871 27.328 C 32.871 27.339 32.8125 27.390 32.738 27.4375 C 32.664 27.480 32.578 27.542 32.542 27.574 C 32.507 27.601 32.46875 27.628 32.453 27.628 C 32.441 27.628 32.410 27.644 32.390 27.664 C 32.367 27.683 32.328 27.714 32.296 27.738 C 32.265 27.757 32.15625 27.832 32.050 27.90625 C 31.945 27.976 31.835 28.054 31.804 28.074 C 31.773 28.09375 31.734 28.125 31.710 28.148 C 31.691 28.167 31.667 28.183 31.65625 28.183 C 31.648 28.183 31.589 28.21875 31.527 28.265 C 31.464 28.308 31.382 28.363 31.347 28.390 C 30.785 28.761 30.402 29.15625 30.335 29.425 C 30.324 29.46875 30.304 29.503 30.292 29.503 C 30.261 29.503 30.195 29.855 30.195 30.042 C 30.195 30.230 30.261 30.585 30.292 30.585 C 30.304 30.585 30.324 30.621 30.335 30.660 C 30.402 30.933 30.757 31.300 31.347 31.699 C 31.382 31.722 31.464 31.78125 31.527 31.824 C 31.589 31.867 31.648 31.902 31.65625 31.902 C 31.667 31.902 31.691 31.921 31.710 31.941 C 31.734 31.960 31.773 31.992 31.804 32.015 C 31.835 32.035 31.945 32.109 32.050 32.183 C 32.15625 32.253 32.265 32.332 32.296 32.351 C 32.328 32.371 32.367 32.402 32.390 32.425 C 32.410 32.445 32.441 32.460 32.453 32.460 C 32.46875 32.460 32.519 32.492 32.566 32.535 C 32.613 32.574 32.660 32.605 32.667 32.609 C 32.683 32.609 32.734 32.644 32.863 32.753 C 32.882 32.769 32.90625 32.785 32.914 32.785 C 32.929 32.785 33.101 32.898 33.132 32.929 C 33.144 32.9375 33.25 33.011 33.371 33.089 C 33.488 33.171 33.59375 33.242 33.601 33.25 C 33.613 33.257 33.71875 33.332 33.839 33.414 C 33.957 33.492 34.0625 33.566 34.070 33.574 C 34.082 33.582 34.1875 33.65625 34.304 33.734 C 34.539 33.890 34.578 33.917 34.640 33.976 C 34.664 33.996 34.691 34.015 34.699 34.015 C 34.71875 34.015 35.046 34.242 35.117 34.304 C 35.136 34.320 35.164 34.335 35.171 34.335 C 35.183 34.335 35.242 34.375 35.304 34.421 C 35.363 34.472 35.421 34.511 35.433 34.511 C 35.445 34.511 35.472 34.527 35.496 34.546 C 35.570 34.617 35.609 34.644 35.726 34.714 C 35.792 34.757 35.871 34.8125 35.902 34.839 C 35.933 34.871 35.96875 34.890 35.980 34.890 C 35.992 34.890 36.019 34.910 36.039 34.929 C 36.0625 34.949 36.179 35.03125 36.296 35.109 C 36.417 35.191 36.523 35.261 36.535 35.273 C 36.542 35.28125 36.660 35.363 36.796 35.453 C 37.070 35.636 37.359 35.835 37.382 35.859 C 37.390 35.867 37.496 35.941 37.617 36.019 C 37.738 36.101 37.84375 36.171 37.851 36.183 C 37.859 36.191 37.964 36.261 38.085 36.34375 C 38.207 36.421 38.316 36.5 38.335 36.511 C 38.636 36.738 39.289 37.167 39.480 37.261 C 40.226 37.632 40.992 37.277 41.160 36.480 C 41.207 36.261 41.207 23.828 41.160 23.609 C 41.015 22.929 40.449 22.5625 39.785 22.714"),e.setAttribute("fillRule","evenodd");var r=document.createElement("LABEL");r.setAttribute("for","GQAupbj5Ky"),r.style.setProperty("display","flex","important"),r.style.setProperty("align-items","center","important"),r.style.setProperty("cursor","pointer","important"),r.style.setProperty("height","100%","important"),r.appendChild(C),i.appendChild(e),r.appendChild(i),t&&t.appendChild(r);var s=[],a=[],l=!1,n=!1,p=!1,d=null,c=null;function y(){for(var t=document.querySelectorAll(".yt-formatted-string.yt-simple-endpoint, yt-formatted-string.ytd-channel-name"),e=0;e<t.length;e++){var r=t[e],n=r.getAttribute("href")||r.getAttribute("title"),o=n?n.replace("/user/","").replace("/channel/","").toLowerCase():-1;if(-1<s.indexOf(o))(C=r.closest("ytd-video-renderer, ytd-compact-video-renderer"))&&C.remove();else if(-1<a.indexOf(o)){var C;(C=r.closest("ytd-video-renderer, ytd-compact-video-renderer"))&&C.remove()}}}browser.runtime.sendMessage({action:GET_ALL},function(t){if(!Array.isArray(t))return!1;t.filter(function(t){return t.enabled}).forEach(function(t){a.push(t.name.toLowerCase()),s.push(t.id)})}),C.addEventListener("change",function(){for(var t=" [",e=0;e<a.length;e++){var r=a[e];t+=-1<r.indexOf(" ")?' -"'+r+'"':" -"+r}t+=" ]";var n=o.value.replace(/ *\[[^)]*\] */g,"");o.value=n,C.checked?(i.setAttribute("fill","#F04263"),o.value+=t):i.setAttribute("fill","#6F6F6F")},!1),t&&t.addEventListener("submit",function(){return!0},!1);var u,m,v=(u=window.MutationObserver||window.WebKitMutationObserver,function(t,r){t&&1!==!t.nodeType&&(u?new u(function(t){var e=t.find(function(t){return"childList"===t.type&&"contents"===t.target.id});r(e)}).observe(t,{childList:!0,subtree:!0}):window.addEventListener&&(t.addEventListener("DOMNodeInserted",r,!1),t.addEventListener("DOMNodeRemoved",r,!1)))});m=setInterval(function(){l||function(){var t=window.location.search,e=!1;"?search_query=youtube&sp=CAMSBAgCEAE%253D"===t&&(e=!0);var r=document.querySelector("div#items.style-scope.ytd-guide-section-renderer");if(!r)return;var n=document.createElement("a");n.href=DAILY_TOP_URL,n.style.setProperty("display","block","important"),n.style.setProperty("height","40px","important"),n.style.setProperty("width","100%","important"),n.style.setProperty("line-height","40px","important"),n.style.setProperty("padding","0 28px","important"),n.style.setProperty("cursor","pointer","important"),n.style.setProperty("box-sizing","border-box","important"),n.style.setProperty("text-decoration","none","important"),e&&n.style.setProperty("background-color","#d9d9d9","important"),n.addEventListener("mouseover",function(){n.style.setProperty("background-color","#E7E7E7","important")},!1),n.addEventListener("mouseout",function(){e||n.style.removeProperty("background-color")},!1);var o=document.createElement("span");o.innerHTML="Daily Popular Videos",o.style.setProperty("display","inlne-block","important"),o.style.setProperty("color","rgba(17,17,17,0.8)","important"),o.style.setProperty("font-size","14px","important"),o.style.setProperty("line-height","40px","important"),o.style.setProperty("text-decoration","none","important"),o.style.setProperty("vertical-align","middle","important"),e&&(o.style.setProperty("font-weight","500","important"),o.style.setProperty("color","#000","important"));var C=document.createElementNS("http://www.w3.org/2000/svg","svg");C.style.setProperty("display","inlne-block","important"),C.style.setProperty("height","20px","important"),C.style.setProperty("width","20px","important"),C.style.setProperty("vertical-align","middle","important"),C.style.setProperty("margin","0 24px 0 0","important"),C.setAttribute("version","1.1"),C.setAttribute("xmlns","http://www.w3.org/2000/svg"),C.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),C.setAttribute("viewBox","0 0 1792 1792");var i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttribute("d","M1920 1536v128h-2048v-1536h128v1408h1920zm-128-1248v435q0 21-19.5 29.5t-35.5-7.5l-121-121-633 633q-10 10-23 10t-23-10l-233-233-416 416-192-192 585-585q10-10 23-10t23 10l233 233 464-464-121-121q-16-16-7.5-35.5t29.5-19.5h435q14 0 23 9t9 23z"),i.setAttribute("fill","#909090"),e&&i.setAttribute("fill","#fc0d1b"),C.appendChild(i),n.appendChild(C),n.appendChild(o),r&&(r.appendChild(n),l=!0)}(),(d=document.querySelector("#contents.style-scope.ytd-item-section-renderer .ytd-watch-next-secondary-results-renderer"))&&!n&&(n=!0,v(d,function(t){y()})),(c=document.querySelector("#items.ytd-watch-next-secondary-results-renderer"))&&!p&&(p=!0,v(c,function(t){y()})),l&&d&&c&&clearInterval(m),y()},250),setTimeout(function(){clearInterval(m)},1e4)}();