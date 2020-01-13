function addHideClass(item) {
  return item.classList.add("hide");
}

var mql = window.matchMedia("(min-width: 1024px)");

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

      if (mql.matches) {
        that.parentNode.querySelector("ul .navListItem a").click();
      }
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
      if (mql.matches) {
        that.parentNode.querySelector("ul .navListItem a").click();
      }
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

  function getDownloadStats(url, linkId) {
    var $link = document.getElementById(linkId);
    var $fileSize = document.getElementById(linkId + "-fileSize");
    var $downloadCount = document.getElementById(linkId + "-downloadCount");
    var $versionTag = document.getElementById(linkId + "-version");
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.setRequestHeader("Accept", "application/vnd.github.v3+json");

    request.onload = function() {
      if (this.status >= 200 && this.status < 400) {
        try {
          var data = JSON.parse(this.response);
          var asset = ["assets", 0].reduce(function(obj, path) {
            return (obj || {})[path];
          }, data);
          var downloadCount = asset.download_count || 0;
          var fileSize = humanFormatBytes(asset.size || 0);
          var tag = data.tag_name || "";
          writeToDomNodes($downloadCount, downloadCount + " downloads ");
          writeToDomNodes($fileSize, fileSize);
          writeToDomNodes($versionTag, tag);
          addLoadedClass([$link, $fileSize, $downloadCount, $versionTag]);
        } catch (error) {
          removeDomNode(
            [$link, $fileSize, $downloadCount, $versionTag].filter(Boolean)
          );
        }
      } else {
        removeDomNode(
          [$link, $fileSize, $downloadCount, $versionTag].filter(Boolean)
        );
      }
    };
    request.send();
  }

  (function getStatsForDownloadButtons() {
    var links = document.querySelectorAll(".js-getLinkDetails");
    Array.from(links).forEach(function(node) {
      getDownloadStats(node.href, node.id);
      node.addEventListener("click", function(e) {
        e.preventDefault();
        console.log(e.target.href, e.target.id);
      });
    });
  })();
});

function addLoadedClass(elements) {
  elements.forEach(function(domNode) {
    domNode.classList.add("loaded");
  });
}

function humanFormatBytes(bytes, decimals) {
  if (bytes === 0) return "0 Bytes";
  var k = 1024;
  // default to 2 decimal points
  var dm = (decimals < 0 ? 0 : decimals) || 0;
  var sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  var i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

function writeToDomNodes(el, value) {
  if (el) {
    el.innerHTML = value;
  }
}

function removeDomNode(elements) {
  elements
    .filter(function(b) {
      return !b;
    })
    .forEach(function(node) {
      if (node.parentNode) {
        node.parentNode.removeChild(node);
      }
    });
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
