
// Tiny jQuery Plugin
// by Chris Goodchild
$.fn.exists = function(callback) {
    var args = [].slice.call(arguments, 1);
  
    if (this.length) {
      callback.call(this, args);
    }
  
    return this;
};

function addcl(target){
	let parent = target.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(target){
	let parent = target.parentNode.parentNode;
	if(target.value == ""){
		parent.classList.remove("focus");
	}
}
  

  $(document).ready(function () {

    // Fonctionnement Categories Grid Checkbox


      // Fonctionnement Avatars Grid Checkbox

      // Animation des formulaires d'authentification
      $('body').on('focus','.input', function (e){
        e.preventDefault();
        e.stopImmediatePropagation();
        addcl(e.currentTarget);
      })
      $('body').on('blur','.input', function (e){
        e.preventDefault();
        e.stopImmediatePropagation();
        remcl(e.currentTarget);
      })
      
      // Animation des checkbox simples rouges stylisées
        
        

  })