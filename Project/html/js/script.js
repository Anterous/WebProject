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
  document.getElementById('scroll').innerHTML = 'You have hovered over the project';
}


function insertSkill(){

  var table = document.getElementById('skillTable');
  var Val = document.getElementById('skill').value;
  var row = document.getElementById('skillRow');
  console.log(Val);

  switch(Val) {
    case "Aws":
      row.deleteCell(4);
      var x = row.insertCell(0);
      x.innerHTML = '<img src="pictures/aws.png" alt="Skill" width="250"/>';
        break;
    case "Java":
      row.deleteCell(4);
      var x = row.insertCell(0);
      x.innerHTML = '<img src="pictures/java.png" alt="Skill" width="250"/>';
        break;
    case "C":
      row.deleteCell(4);
      var x = row.insertCell(0);
      x.innerHTML = '<img src="pictures/C_logo.png" alt="Skill" width="250"/>';
        break;
    case "C#":
      row.deleteCell(4);
      var x = row.insertCell(0);
      x.innerHTML = '<img src="pictures/c_sharp.jpg" alt="Skill" width="250"/>';
        break;
    case "C++":
      row.deleteCell(4);
      var x = row.insertCell(0);
      x.innerHTML = '<img src="pictures/C++.png" alt="Skill" width="250"/>';
        break;
    case "Css":
      row.deleteCell(4);
      var x = row.insertCell(0);
      x.innerHTML = '<img src="pictures/css.png" alt="Skill" width="250"/>';
        break;
    case "Javascript":
      row.deleteCell(4);
      var x = row.insertCell(0);
      x.innerHTML = '<img src="pictures/js.png" alt="Skill" width="250"/>';
        break;
    case "Html":
      row.deleteCell(4);
      var x = row.insertCell(0);
      x.innerHTML = '<img src="pictures/html.png" alt="Skill" width="250"/>';
        break;
    case "Sql":
      row.deleteCell(4);
      var x = row.insertCell(0);
      x.innerHTML = '<img src="pictures/SQL.png" alt="Skill" width="250"/>';
        break;
    case "Swift":
      row.deleteCell(4);
      var x = row.insertCell(0);
      x.innerHTML = '<img src="pictures/swift.png" alt="Skill" width="250"/>';
        break;
    case "Git":
      row.deleteCell(4);
      var x = row.insertCell(0);
      x.innerHTML = '<img src="pictures/Git.png" alt="Skill" width="250"/>';
        break;
    case "Python":
      row.deleteCell(4);
      var x = row.insertCell(0);
      x.innerHTML = '<img src="pictures/Python.png" alt="Skill" width="250"/>';
        break;
    default:
        alert("The skill doesn't exist")
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
