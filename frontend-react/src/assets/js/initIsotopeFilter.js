// external js: isotope.pkgd.js

// init Isotope
/* eslint-disable */
export default function initIsotopeFilter() {
  $(document).ready(function() { $(".grid").imagesLoaded(function() {
  var $grid = $(".grid").isotope({
    itemSelector: ".content-box",
  });

  // store filter for each group
  var filters = {};

  $(".filters").on("click", ".button", function (event) {
    var $button = $(event.currentTarget);
    // get group key
    var $buttonGroup = $button.parents(".button-group");
    var filterGroup = $buttonGroup.attr("data-filter-group");
    // set filter for group
    filters[filterGroup] = $button.attr("data-filter");
    // combine filters
    var filterValue = concatValues(filters);
    // set filter for Isotope
    $grid.isotope({ filter: filterValue });
  });

  // change is-checked class on buttons
  $(".button-group").each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on("click", "button", function (event) {
      $buttonGroup.find(".is-checked").removeClass("is-checked");
      var $button = $(event.currentTarget);
      $button.addClass("is-checked");
    });
  });

  // flatten object by concatting values
  function concatValues(obj) {
    var value = "";
    for (var prop in obj) {
      value += obj[prop];
    }
    console.log(value);
    return value;
  }

})
  })
}