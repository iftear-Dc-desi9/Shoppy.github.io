//about-sec-collapsible
var coll = document.getElementsByClassName('about-collapsible');
var i;

for ( i = 0; i < coll.length; i++){
coll[i].addEventListener("click" , function (){
  this.classList.toggle("active");
  var aboutContent = this.nextElementSibling;
  if (aboutContent.style.maxHeight){
    aboutContent.style.maxHeight = null;
  } else{
    aboutContent.style.maxHeight = aboutContent.scrollHeight + "px";
  }
});
}











