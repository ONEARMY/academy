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
