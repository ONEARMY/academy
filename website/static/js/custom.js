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

  if (document.getElementsByClassName("j-slideshow").length > 0) {
    tns({
      container: ".j-slideshow",
      items: 1,
      controlsPosition: "bottom",
      navPosition: "bottom",
      slideBy: "page",
      controlsText: ["<", ">"]
    });
  }
});
// On every page load emit the current pathname
// for use in iframe embeds
parent.postMessage({ pathname: location.pathname }, "*");
