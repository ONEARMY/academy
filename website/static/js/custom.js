function addHideClass(item) {
  return item.classList.add("hide");
}

window.addEventListener("DOMContentLoaded", function() {
  var categoryNodes = document.querySelectorAll(
    ".navGroups .navGroup .collapsible"
  );
  var categoryLinks = Array.from(categoryNodes);
  categoryNodes.forEach(function(category) {
    category.addEventListener("click", function() {
      var that = this;
      categoryLinks
        .filter(function(_, i) {
          var index = categoryLinks.indexOf(that);
          return i !== index;
        })
        .forEach(function(link) {
          link.parentNode.querySelector(" ul").classList.add("hide");
        });
      that.parentNode.querySelector("ul .navListItem a").click();
    });
  });

  var subNodes = document.querySelectorAll(
    ".navGroups .navGroup.subNavGroup .navGroupSubcategoryTitle"
  );
  var subCatLinks = Array.from(subNodes);
  subNodes.forEach(function(category) {
    category.classList.add("collapsible");
    category.parentNode.querySelectorAll("ul").forEach(addHideClass);
    category.addEventListener("click", function() {
      var that = this;
      that.classList.toggle("upsideDown");
      that.parentNode.querySelector("ul").classList.toggle("hide");
      subCatLinks
        .filter(function(_, i) {
          var index = subCatLinks.indexOf(that);
          return i !== index;
        })
        .forEach(function(link) {
          link.classList.remove("upsideDown");
          addHideClass(link.parentNode.querySelector("ul"));
        });
      that.parentNode.querySelector("ul .navListItem a").click();
    });
  });

  function showActiveSubChapterMenu() {
    var activeLink = document.getElementsByClassName("navListItemActive")[0];
    if (activeLink) {
      activeLink.parentNode.classList.remove("hide");
      activeLink.parentNode.parentNode.firstChild.classList.add("upsideDown");
    }
  }
  showActiveSubChapterMenu();

  function initiateSlideshows() {
    tns({
      container: ".j-slideshow",
      items: 1,
      controlsPosition: "bottom",
      navPosition: "bottom",
      slideBy: "page",
      controlsText: ["<", ">"],
      autoHeight: true
    });
  }
  if (document.getElementsByClassName("j-slideshow").length > 0) {
    initiateSlideshows();
  }

  (function getKitDownloadCount() {
    var kitUrl =
      "https://cors-anywhere.herokuapp.com/https://cutt.ly/api/api.php?key=19f84938273aa758d86cc1f73a0e5b236ca06&stats=precious-plastic-kit";
    var request = new XMLHttpRequest();
    request.open("GET", kitUrl, true);

    request.onload = function() {
      if (this.status >= 200 && this.status < 400) {
        try {
          var data = JSON.parse(this.response);
          var downloadCount = ["stats", "clicks"].reduce(function(obj, path) {
            return (obj || {})[path];
          }, data);
          writeToDomNodes(".downloadCount", downloadCount);
          removeLoadingClass(".downloadCount");
        } catch (error) {}
      }
    };

    request.send();
  })();
});

function removeLoadingClass(selector) {
  Array.from(document.querySelectorAll(selector + ".loading")).forEach(function(
    domNode
  ) {
    domNode.classList.remove("loading");
  });
}
function writeToDomNodes(selector, value) {
  var nodes = Array.from(document.querySelectorAll(selector));
  if (nodes.length > 0) {
    nodes.forEach(function(n) {
      n.innerHTML = value;
    });
  }
}

/********************************************************************
 *  Custom functions to support use as an Iframe within the
 *  OneArmy community platform
 *******************************************************************/
if (isIframe()) {
  // attach link listeners after page load
  window.addEventListener("DOMContentLoaded", passLinkClicksToParent);
  // can safely emit url immediately
  passPageUrlToParent();
}

// Detect if in iframe
function isIframe() {
  try {
    return window.self !== window.top;
  } catch (error) {
    return true;
  }
}
// On every page load emit the current pathname
function passPageUrlToParent() {
  parent.postMessage({ pathname: location.pathname }, "*");
}

// Add event listner to all 'a' links that emits to parent postmessage
function passLinkClicksToParent() {
  document.querySelectorAll("a").forEach(node => {
    // external links only
    if (!node.href.includes(location.host)) {
      node.addEventListener("click", ev => {
        ev.preventDefault();
        const href = ev.target.href;
        parent.postMessage({ linkClick: href }, "*");
      });
    }
  });
}
