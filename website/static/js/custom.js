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
});

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
