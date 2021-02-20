const apiKey = config.KEY;
const url = "https://na1.api.riotgames.com";

const SUPPORTS = [
    {id: "432", champ: "Bard", role: "Assassin", h: "y"},
    {id: "555", champ: "Pyke", role: "Assassin", h: "n"},
    {id: "63", champ: "Brand", role: "Disuader", h: "y"},
    {id: "201", champ: "Braum", role: "Disuader", h: "y"},
    {id: "40", champ: "Janna", role: "Disuader", h: "y"},
    {id: "43", champ: "Karma", role: "Disuader", h: "n"},
    {id: "117", champ: "Lulu", role: "Disuader", h: "y"},
    {id: "25", champ: "Morgana", role: "Disuader", h: "n"},
    {id: "37", champ: "Sona", role: "Disuader", h: "n"},
    {id: "16", champ: "Soraka", role: "Disuader", h: "y"},
    {id: "223", champ: "Tahm Kench", role: "Disuader", h: "n"},
    {id: "44", champ: "Taric", role: "Disuader", h: "n"},
    {id: "412", champ: "Thresh", role: "Disuader", h: "y"},
    {id: "26", champ: "Zilean", role: "Disuader", h: "n"},
    {id: "12", champ: "Alistar", role: "Engager", h: "y"},
    {id: "89", champ: "Leona", role: "Engager", h: "n"},
    {id: "111", champ: "Nautilus", role: "Engager", h: "y"},
    {id: "80", champ: "Pantheon", role: "Engager", h: "y"},
    {id: "497", champ: "Rakan", role: "Engager", h: "y"},
    {id: "526", champ: "Rell", role: "Engager", h: "n"},
    {id: "350", champ: "Yuumi", role: "Engager", h: "n"},
    {id: "147", champ: "Seraphine", role: "Poker", h: "n"},
    {id: "53", champ: "Blitzcrank", role: "Poker", h: "n"},
    {id: "267", champ: "Nami", role: "Zoner", h: "y"},
    {id: "143", champ: "Zyra", role: "Zoner", h: "n"},
]

$(function() {
    //console.log(getapi(`${url}/lol/summoner/v4/summoners/by-name/KenzoEngineer?api_key=${apiKey}`));
    SUPPORTS.forEach(function(item){
        let option = document.createElement('option');
        $("#input_support").append(`<li><a href="#" class="dropdown-item">${item.champ}</a></li>`);
        // option.value = item.champ;
        // option.innerHTML = item.champ;
        // input_support.appendChild(option)
    });

    sortList("input_support")

    $("a").click(function () {
        let object = search($(this).text());
        $("#support_button").text($(this).text());
        $("#role_support").text(object.role);
        $("#good_support").text(object.h.toUpperCase());
        if (object.h == "y") {
            $("#good_support").css({"color":"rgb(82, 255, 111)"});
        } else {
            $("#good_support").css({"color":"rgb(255, 86, 86)"});
        }
        $("#image_support").attr("src",`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${object.id}.png`);
    });
});
function search(champ) {
    let found;
    for (let i = 0; i < SUPPORTS.length; i++) {
        if (SUPPORTS[i].champ === champ) {
            return {role: SUPPORTS[i].role, h: SUPPORTS[i].h, id: SUPPORTS[i].id};
        }
    }
}
function sortList(ul) {
    var ul = document.getElementById(ul);
  
    Array.from(ul.getElementsByTagName("LI"))
      .sort((a, b) => a.textContent.localeCompare(b.textContent))
      .forEach(li => ul.appendChild(li));
  }
async function getapi(url) {
    const response = await fetch(url);
    let data = await response.json();
    return data;
}