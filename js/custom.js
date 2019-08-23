window.addEventListener("load", function() {
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
          link.parentNode.querySelector("ul").classList.add("hide");
        });
      that.parentNode.querySelector("ul .navListItem a").click();
    });
  });
});
