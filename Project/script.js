var textBlockNum = 0;

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

function time() {
    var dateTime = new Date();
    document.getElementById('time').innerHTML = dateTime;
}

setInterval(time, 1000);

time();
