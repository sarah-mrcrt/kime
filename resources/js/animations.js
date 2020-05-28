
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
    $('body').on('click','.categories-grid__category', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        let category = e.currentTarget;

        let checkbox = category.children[4];
        let background = category.children[3];
        let check = category.children[2];

        if(checkbox.checked === true) {
            console.log('checked -> uncheck ' + checkbox.checked);
            checkbox.checked = false;
            background.classList.remove("selected");
            check.classList.remove("selected");
            return true;
            
        } else if (checkbox.checked === false) {
            console.log('unchecked -> check ' + checkbox.checked);
            checkbox.checked = true;
            background.classList.add("selected");
            check.classList.add("selected");
            return true;
            
        }
      })

      // Fonctionnement Categories Grid Checkbox
      $('body').on('click','.avatars-grid__avatar.unlocked', function (e) {
          e.preventDefault();
          e.stopImmediatePropagation();
          let avatar = e.currentTarget;
  
          let radio = avatar.children[2];
          let background = avatar.children[1];
  
          if (radio.checked === false) {
              console.log('unchecked -> check ' + radio.checked);
              radio.checked = true;
              $('.avatars-grid__avatar__background.selected').removeClass("selected");
              background.classList.add("selected");
          }
        })

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
        $('body').on('click','.set-children-number__nb:not(.selected)', function (e){
          e.preventDefault();
          e.stopImmediatePropagation();
          let newNumber = e.currentTarget;
          let parent = $('.set-children-number__selector');
          let selected = $('.set-children-number__nb.selected');
          let radio = newNumber.children[1];

          let clicX = e.pageX;
          let xCenter = $(window).width() / 2;

          let left = parent.css("left")
          let step = newNumber.offsetWidth;
          let leftTab = left.split('px');
          left = leftTab[0];
          left = parseInt(left);
  
          if(clicX > xCenter) {
              radio.checked = true;
              parent.css( "left", left - step );
              selected.removeClass("selected");
              newNumber.classList.add("selected");
              console.log('NEXT checked '+ radio.checked);
              
          } else if (clicX < xCenter) {
              radio.checked = true;
              parent.css( "left", left + step );
              selected.removeClass("selected");
              newNumber.classList.add("selected");
              console.log('PREV checked '+ radio.checked);
          }
        })
        

  })