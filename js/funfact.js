// var elements[] = ["https://ashleyc.netlify.app/"];

function addAdvice(){
    if ((document.getElementById('advice-reveal').style.display) == ("block")) {
      document.getElementById('advice-reveal').style.display = null;
    } else {
    document.getElementById('advice-reveal').style.display = "block";
  }
}

function addFact() {
  // var facts = ["Pienapple belongs on pizza.", "I've watched the whole Avatar series 5x.", "Wyoming only has two escalators.", "This tab was inspired by CS61B's sum of all human knowledge."];
  if ((document.getElementById('funfact-reveal').style.display) == ("block")) {
    document.getElementById('funfact-reveal').style.display = null;
  } else {
    // var index = Math.floor(Math.random() * (facts.length-1));
    // console.log(index);
    // document.getElementById('ffspan').innerHTML = facts[index];
    document.getElementById('funfact-reveal').style.display = "block";
  }
}
