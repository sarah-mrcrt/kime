
// Tiny jQuery Plugin
// by Chris Goodchild
$.fn.exists = function(callback) {
    var args = [].slice.call(arguments, 1);
  
    if (this.length) {
      callback.call(this, args);
    }
  
    return this;
};
  

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


        /*if(e.target.parentNode.parentNode.className != "audio_actu audio_playlist") {
          e.preventDefault();
          let url = $(this).attr('data-file');
          let audio = $('#audio');
          audio[0].src = url;
          audio[0].play();
          $('#player').css({"display" : "grid"});
  
          let parent = e.target.parentNode.parentNode;
  
          let audio_img = parent.children[0];
          let img = audio_img.children[1];
  
          let audio_actions = parent.children[1];
          let aimer = audio_actions.children[1];
          let aimer_nb = aimer.children[0];
          let aimer_icon = aimer.children[1];
  
          // Si l'utilisateur peut supprimer une chanson / est le créateur de la chanson
          if(audio_actions.children[2]) {
              let sup = audio_actions.children[2];
              document.getElementById('audio_actions').children[1].style.display = "flex";
              document.getElementById('audio_actions').children[1].href = sup.href;
          } else {
              document.getElementById('audio_actions').children[1].style.display = "none";
          }
  
          let audio_infos = parent.children[2];
          let title = audio_infos.children[0];
          let infos_all = audio_infos.children[1];
          let infos1 = infos_all.children[0];
          let infos2 = infos_all.children[1];
          let genre = audio_infos.children[2];
  
          document.getElementById('audio_img').children[0].src = img.src;
  
          document.getElementById('audio_actions').children[0].className = aimer.className;
          document.getElementById('audio_actions').children[0].href = aimer.href;
          document.getElementById('audio_actions').children[0].children[0].innerHTML = aimer_nb.innerHTML;
          document.getElementById('audio_actions').children[0].children[1].className = aimer_icon.className;
  
          document.getElementById('audio_infos_title').innerHTML = title.innerHTML;
          document.getElementById('audio_infos_style').innerHTML = genre.innerHTML;
          document.getElementById('audio_infos1').innerHTML = infos1.innerHTML;
          document.getElementById('audio_infos2').innerHTML = infos2.innerHTML;
  
          document.getElementById('audio_actu').style.opacity = 1;
          document.getElementById('audio').style.opacity = 1;
        }*/
      })

  })