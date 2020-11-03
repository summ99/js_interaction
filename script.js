var numInput = document.getElementById('half-input');
var calcButton = document.getElementById('half-button');
var name = document.getElementById('fortune-input';)
var fortuneButton = document.getElementById('fortune-button');
var fortuneSlip = document.getElementById('outputText');
var fortunes = [
  "Today it's up to you to create the peacefulness you long for.",
  "If you refuse to accept anything but the best, you very often get it.",
  "Your high-minded principles spell success.",
  "Hard work pays off in the future, laziness pays off now.",
  "Change can hurt, but it leads a path to something better.",
  "A chance meeting opens new doors to success and friendship.",
  "You learn from your mistakes... You will learn a lot today.",
  "If you have something good in your life, don't let it go!",
  "What ever you're goal is in life, embrace it visualize it, and for it will be yours.",
  "You cannot love life until you live the life you love.",
  "Be on the lookout for coming events; They cast their shadows beforehand.",
  "Land is always on the mind of a flying bird.",
  "Meeting adversity well is the source of your strength.",
  "A dream you have will come true.",
  "Our deeds determine us, as much as we determine our deeds.",
  "Never give up. You're not a failure if you don't give up.",
  "You will become great if you believe in yourself.",
  "You already know the answer to the questions lingering inside your head.",
  "It is now, and in this world, that we must live.",
  "You must try, or hate yourself for not trying.",
  "You can make your own happiness."
];
calcButton.addEventListener("click", function(){
  halfNumber();
});

fortuneButton.addEventListener("click", function(){
  fortune();
});

function halfNumber(){
  console.log("Half of "+numInput.value+" is "+ numInput.value/2);
  alert("Half of "+numInput.value+" is "+ numInput.value/2);
}

function fortune(){
  var x = Math.floor(Math.random() * 21);
  fortuneSlip.innerHTML = name +" " + fortunes[x];
}
