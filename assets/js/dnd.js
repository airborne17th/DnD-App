const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://www.dnd5eapi.co/api/ability-scores/cha",
	"method": "GET",
};

function fetchAbility(){
    let e = document.getElementById("ability");
    let value = e.value;
    settings.url = "https://www.dnd5eapi.co/api/ability-scores/" + value;
    $.ajax(settings).done(function (response) {
        console.log(response);
        let desc = response.desc;
        document.getElementById("ability_data").innerHTML = desc;
        let skillsArray = response.skills.map(skill => skill.name);
        console.log(skillsArray);
                // create a new unordered list element
                let skillsList = document.createElement("ul");
        
                // loop through the skillsArray and add a new list item for each skill
                skillsArray.forEach(function(skill) {
                    let listItem = document.createElement("li");
                    listItem.innerText = skill;
                    skillsList.appendChild(listItem);
                });
                // append the skillsList to the DOM
                document.getElementById("skill_list").innerHTML = "Related Skills: ";
                document.getElementById("skill_list").appendChild(skillsList);
    });
}

function fetchAlignment(){
    let e = document.getElementById("alignment");
    let value = e.value;
    settings.url = "https://www.dnd5eapi.co/api/alignments/" + value;
    $.ajax(settings).done(function (response) {
        console.log(response);
        let desc = response.desc;
        document.getElementById("alignment_data").innerHTML = desc;
    });
}

function fetchSkill(){
    let e = document.getElementById("skill");
    let value = e.value;
    settings.url = "https://www.dnd5eapi.co/api/skills/" + value;
    $.ajax(settings).done(function (response) {
        console.log(response);
        let desc = response.desc;
        let desc1 = response.ability_score.name;
        document.getElementById("skill_data").innerHTML = desc;
        document.getElementById("ability_score").innerHTML = "Related Ability: " + desc1;
    });
}

function rollDie(num) { 
    console.log(num, typeof num);
    var result = Math.floor(Math.random()*num+1);
    console.log(result, typeof result);
    document.getElementById("die").innerHTML = result;
};
    