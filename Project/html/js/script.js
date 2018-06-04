var textBlockNum = 0;

var slideIndex = 1;
showSlides(slideIndex);

function nextFunction(){
  textBlockNum++;
  if (textBlockNum === 1){
    document.getElementById('aboutMe').innerHTML = 'My name is Antti Kurri. I&#39m a 22 years old engineering student from Oulu University Of Applied Sciences. I have currently just finished second year at school ';
    //document.getElementById('picture').src = "pictures/js.png"
  }
  else if (textBlockNum === 2){
    document.getElementById('aboutMe').innerHTML = 'I&#39m specialized in software development, but I&#39m also intrested in web development. I have experience in C, C++, C#, java, js, css, html and many other widely used programming languags.';}
  else if (textBlockNum === 3){
    document.getElementById('aboutMe').innerHTML = 'In future after graduation I wish I will get job in either software development or web development. I&#39m currently learning React in my free time and I wish in near future I will be able to use React to create a project I have been wanting to do for a while now! ';}
  else if (textBlockNum === 4){
    textBlockNum = 3;
  }
}

function previousFunction(){
  textBlockNum--;
  if (textBlockNum === 0){
    textBlockNum = 1;
  }
  else if (textBlockNum === 1){
    document.getElementById('aboutMe').innerHTML = 'My name is Antti Kurri. I&#39m a 22 years old engineering student from Oulu University Of Applied Sciences.  ';}
  else if (textBlockNum === 2){
    document.getElementById('aboutMe').innerHTML = 'I&#39m specialized in software development, but I&#39m also intrested in web development. I have experience in C, C++, C#, java, js, css, html and many other widely used programming languags.';}
  else if (textBlockNum === 3){
    document.getElementById('aboutMe').innerHTML = 'In future after graduation I wish I will get job in either software development or web development. I&#39m currently learning React in my free time and I wish in near future I will be able to use React to create a project I have been wanting to do for a while now! ';}

}

function helloFunction(){
  var msg = new SpeechSynthesisUtterance("This is a webpage with a lot of useless features");
  window.speechSynthesis.speak(msg);
}

function scrollFunction(){
  var msg = new SpeechSynthesisUtterance("Scrolling Scrolling");
  window.speechSynthesis.speak(msg);
}

function mouseOverFunction(){
  window.speechSynthesis.stop();
  console.log("stop");
}

function infoFunction(Val){

  switch(Val) {
    case 1:
        alert("C was my first language");
        break;
    case 2:
        alert("C++ was my most used language during first year. I used it to create a basic atm machine for example");
        break;
    case 3:
        alert("We used C# to create simple programs and also used it to create few basic games on Unity");
        break;
    case 4:
        alert("Java was was used for the most of second year. We used it create programs and also Adnroid apps and games");
        break;
    case 5:
        alert("Swift was briefly touched during second year");
        break;
    case 6:
        alert("Html I have lerned by myself and also during a summer course");
        break;
    case 7:
        alert("CSS I have learned by myself and also during a summer course");
        break;
    case 8:
        alert("Javascript I learned by myself and it's syntax is fairly similar to other languages");
        break;
    case 9:
        alert("Python have not been used that much but I have a basic understanding of it. I have created a twitter bot that repost keyworded tweets with Python;");
        break;
    case 10:
        alert("Qt creator was used when creating C and C++ programs. It's still one of my favorite IDE:s");
        break;
    case 11:
        alert("I use Git for version control and packages installs");
        break;
    case 12:
        alert("I'm mostly familiar mySQL lite. I have used it for a few programs and projects that needed database");
        break;
    case 13:
        alert("I used Visual studio to create C# programs and Unity scripts");
        break;
    case 14:
        alert("I have created few basic games on unity both 3D and 2D");
        break;
    case 15:
        alert("I have created multiple applications with android studio also few games using LibGDX as engine");
        break;
    case 16:
        alert("Android Java is Java with few twists");
        break;
    case 17:
      alert("I have used RaspberryPi for multiple purposes, as a database, twitterbot, emulator and few other projects");
      break;
    case 18:
      alert("I have done all kind of projects with arduino processor interrupts to basic measuring programs");
      break;
    case 19:
      alert("Microsoft office has become very easy and familiar to use");
      break;
    case 20:
      alert("Octave was used to calculate a few math problems and creata data graphs for physic based tests");
      break;
    default:
        alert("Error Occured");
      }
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
