// assets/js/script.js - minimal behavior
document.addEventListener('DOMContentLoaded', function(){
  // Simple fix to ensure navbar toggler shows icon (Bootstrap requires .navbar-toggler-icon background)
  var togglers = document.getElementsByClassName('navbar-toggler-icon');
  if(togglers.length && getComputedStyle(togglers[0]).backgroundImage === 'none'){
    // inject simple icon
    for(var i=0;i<togglers.length;i++){
      togglers[i].style.backgroundImage = "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 30 30%22><path stroke=%22%23333%22 stroke-width=%222.5%22 stroke-linecap=%22round%22 stroke-miterlimit=%2210%22 d=%22M4 7h22M4 15h22M4 23h22%22/></svg>')";
    }
  }
});
