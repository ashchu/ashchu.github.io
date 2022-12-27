// var elements[] = ["https://ashleyc.netlify.app/"];

function addAdvice(){
    if ((document.getElementById('advice-reveal').style.display) == ("block")) {
      document.getElementById('advice-reveal').style.display = null;
    } else {
    document.getElementById('advice-reveal').style.display = "block";
  }
}

function addFact() {
  var facts = ["Pienapple belongs on pizza.", "You look nice today :)", "I've watched the whole Avatar series 5x.", "Wyoming only has two escalators.", "Boba should be considered a soup.", "This tab was inspired by CS61B's sum of all human knowledge."];
  if ((document.getElementById('funfact-reveal').style.display) == ("block")) {
    document.getElementById('funfact-reveal').style.display = null;
  } else {
    var index = Math.floor(Math.random() * (facts.length-1));
    console.log(index);
    document.getElementById('ffspan').innerHTML = facts[index];
    document.getElementById('funfact-reveal').style.display = "block";
  }
}

function addProject() {
  var sites = ["https://arkgnaaerkgnajengajngreajngaejngaenhatrklhnalknth.netlify.app/", "https://bitbybit.netlify.app/", "https://justthebeginningheheheehe.netlify.app/", "https://mommasday21.netlify.app/", "https://walmeals.netlify.app/", "https://60b6f97f95a71441e64c5570--inertiamobile.netlify.app/", "https://swetreatwoohoo.netlify.app/", "https://ucbswebsite.netlify.app/", "https://ilovemydoggos.netlify.app/", "https://kwkphotoalblum.netlify.app/", "https://happymothersday.netlify.app/", "https://alamedaasa.netlify.app/", "https://ashleychu.netlify.app/" ];
  var index = Math.floor(Math.random() * (sites.length));
  open(sites[index]);
}
