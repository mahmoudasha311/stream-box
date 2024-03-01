// MINMAX BUTTON //
var minmaxButton = document.getElementById("minmax-button"),
  maximizeICON = document.getElementById("maximize-icon"),
  minimizeICON = document.getElementById("minimize-icon");

// CHECKBOX //
var timeShiftCheckbox = document.getElementById("timeshift-checkbox"),
  loadBalanceCheckbox = document.getElementById("loadbalance-checkbox"),
  loadBalanceDiv = document.getElementById("loadbalance-div"),
  loadbalanceIcon = document.getElementById("loadbalance-icon"),
  timeshiftChecked = document.getElementById("timeshift-icon"),
  timeShiftDiv = document.getElementById("timeshift-div"),
  timeshiftIcon = document.getElementById("timeshift-icon");

// NAV STUFF //
var menuBtn = document.getElementById("menu-button"),
  menuContent = document.getElementById("menu-main"),
  mainContent = document.getElementById("content-main"),
  menuNavItems = document.getElementById("menu-nav-items"),
  menuHeader = document.getElementById("menu-header"),
  menuPageHeader = document.getElementById("menu-page-header"),
  pagesLinks = document.getElementById("pages-links");

// MENU BUTTON //
// specifing the clicks of menu buttons
var clicks = 0;
menuBtn.onclick = function btnClicked() {
  // hide/show the pages links when toggling between menu and pages
  pagesLinks.classList.toggle("hide");
  mainContent.classList.toggle("hide");
  menuContent.classList.toggle("hide");

  // looping throw menu items to get ready for animation //
  // setting an array for the [HTMLCollection]
  let items = [];
  for (var i = 0; i < menuNavItems.children.length; i++) {
    // putting the menu items inside an array
    items[i] = menuNavItems.children.item(i);

    // setting a looping indicator to loop throw the ready items
    var j = 0;
    // menu animation function
    function animateMenu() {
      // set the [clicks] to 1 so this mean the button has been clicked
      clicks = 1;

      // animate each element due a certain time
      setTimeout(function () {
        // adding the animation class after 60ms
        items[j].classList.add(`menu-animate`);

        // increase the loop steps
        j++;

        // check if the items has been all loop throw before animate the next element
        if (j < menuNavItems.children.length) {
          // recursion the [animateFunction] so the [setTimeout] function do it's job for each element not just the first element
          animateMenu();
        }
      }, 60);
    }
  }

  // check if the click hasn't counted yet
  if (clicks == 0) {
    // do animation
    animateMenu();

    // animate header and current page name
    menuHeader.classList.add("menu-header");
    menuPageHeader.classList.add("menu-page-header");
  }

  // reset the animation to its default state so we can animate each click
  function restMenu() {
    // reset the clicks to its normal state {unclicked}
    clicks = 0;

    // looping throw each items to be ready for reset
    for (let i = 0, oitems = []; i <= menuNavItems.children.length; i++) {
      // putting the menu items inside an array
      oitems[i] = menuNavItems.children.item(i);

      // reset to the default classes
      oitems[i].classList.remove("menu-animate");
      oitems[i].classList.add("menu-items");
    }
  }

  // if this is the 2nd click, reset to the default state
  if (clicks == 1) {
    // reset to the default classes
    restMenu();

    // reset header and current page name
    menuHeader.classList.remove("menu-header");
    menuPageHeader.classList.remove("menu-page-header");
  }
};

// minmax button behavior
minmaxButton.onclick = function () {
  if (document.fullscreen) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen();
  }
};

// fullscreen behaviour
document.addEventListener("fullscreenchange", function () {
  if (document.fullscreen) {
    // Show the minimize icon and hide the maximize icon when in fullscreen
    minimizeICON.classList.remove("hide");
    maximizeICON.classList.add("hide");
  } else {
    // Show the maximize icon and hide the minimize icon when not in fullscreen
    maximizeICON.classList.remove("hide");
    minimizeICON.classList.add("hide");
  }
});

// the fake checkboxes //
loadBalanceDiv.onclick = function () {
  // click the real {hidden} checkbox
  loadBalanceCheckbox.click();
};

timeShiftDiv.onclick = function () {
  // click the real {hidden} checkbox
  timeShiftCheckbox.click();
};

// real checkboxes

loadBalanceCheckbox.onclick = function () {
  // see if the checkbox were check , put the check icon on fake check box
  if (loadBalanceCheckbox.checked === true) {
    // hide or show the check icon due to the chekcbox state
    loadbalanceIcon.classList.toggle("unchecked");
  } else if (loadBalanceCheckbox.checked === false) {
    // hide or show the check icon due to the chekcbox state
    loadbalanceIcon.classList.toggle("unchecked");
  }
};

timeShiftCheckbox.onclick = function () {
  // see if the checkbox were check , put the check icon on fake check box
  if (timeShiftCheckbox.checked === true) {
    // hide or show the check icon due to the chekcbox state
    timeshiftIcon.classList.toggle("unchecked");
  } else if (timeShiftCheckbox.checked === false) {
    // hide or show the check icon due to the chekcbox state
    timeshiftIcon.classList.toggle("unchecked");
  }
};
