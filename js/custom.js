window.addEventListener("load", function() {
  var links = document.querySelectorAll(".navGroups .navGroup .collapsible");
  var l = Array.from(links);
  links.forEach(function(el) {
    el.addEventListener("click", function() {
      var that = this;
      l.filter(function(_, i) {
        var index = l.indexOf(that);
        return i !== index;
      }).forEach(function(link) {
        link.parentNode.querySelector("ul").classList.add("hide");
      });
    });
  });
});
