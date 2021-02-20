const apiKey = config.KEY;
const url = "https://na1.api.riotgames.com";
const TOP = [
    {id: "31", champ: "Chogath", role: "Disuader", h:"Good Pick"},
    {id: "420", champ: "Illaoi", role: "Disuader", h:"Good Pick"},
    {id: "10", champ: "Kayle", role: "Disuader", h:"Poor Pick"},
    {id: "82", champ: "Mordekaiser", role: "Disuader", h:"Good Pick"},
    {id: "78", champ: "Poppy", role: "Disuader", h:"Poor Pick"},
    {id: "98", champ: "Shen", role: "Disuader", h:"Good Pick"},
    {id: "266", champ: "Aatrox", role: "Engager", h:"Good Pick"},
    {id: "122", champ: "Darius", role: "Engager", h:"Good Pick"},
    {id: "36", champ: "Dr Mundo", role: "Engager", h:"Poor Pick"},
    {id: "86", champ: "Garen", role: "Engager", h:"Good Pick"},
    {id: "150", champ: "Gnar", role: "Engager", h:"Poor Pick"},
    {id: "79", champ: "Gragas", role: "Engager", h:"Poor Pick"},
    {id: "85", champ: "Kennen", role: "Engager", h:"Poor Pick"},
    {id: "240", champ: "Kled", role: "Engager", h:"Poor Pick"},
    {id: "54", champ: "Malphite", role: "Engager", h:"Poor Pick"},
    {id: "57", champ: "Maokai", role: "Engager", h:"Poor Pick"},
    {id: "516", champ: "Ornn", role: "Engager", h:"Poor Pick"},
    {id: "58", champ: "Renekton", role: "Engager", h:"Poor Pick"},
    {id: "92", champ: "Riven", role: "Engager", h:"Poor Pick"},
    {id: "875", champ: "Sett", role: "Engager", h:"Good Pick"},
    {id: "27", champ: "Singed", role: "Engager", h:"Poor Pick"},
    {id: "14", champ: "Sion", role: "Engager", h:"Poor Pick"},
    {id: "6", champ: "Urgot", role: "Engager", h:"Poor Pick"},
    {id: "106", champ: "Volibear", role: "Engager", h:"Poor Pick"},
    {id: "126", champ: "Jayce", role: "Poker", h:"Poor Pick"},
    {id: "17", champ: "Teemo", role: "Poker", h:"Poor Pick"},
    {id: "114", champ: "Fiora", role: "Split Push", h:"Poor Pick"},
    {id: "24", champ: "Jax", role: "Split Push", h:"Poor Pick"},
    {id: "75", champ: "Nasus", role: "Split Push", h:"Poor Pick"},
    {id: "133", champ: "Quinn", role: "Split Push", h:"Poor Pick"},
    {id: "83", champ: "Yorick", role: "Split Push", h:"Poor Pick"},
    {id: "41", champ: "Gangplank", role: "Zoner", h:"Poor Pick"},
]
const SUPPORTS = [
    {id: "432", champ: "Bard", role: "Assassin", h: "Good Pick"},
    {id: "555", champ: "Pyke", role: "Assassin", h: "Poor Pick"},
    {id: "63", champ: "Brand", role: "Disuader", h: "Good Pick"},
    {id: "201", champ: "Braum", role: "Disuader", h: "Good Pick"},
    {id: "40", champ: "Janna", role: "Disuader", h: "Good Pick"},
    {id: "43", champ: "Karma", role: "Disuader", h: "Poor Pick"},
    {id: "117", champ: "Lulu", role: "Disuader", h: "Good Pick"},
    {id: "25", champ: "Morgana", role: "Disuader", h: "Poor Pick"},
    {id: "37", champ: "Sona", role: "Disuader", h: "Poor Pick"},
    {id: "16", champ: "Soraka", role: "Disuader", h: "Good Pick"},
    {id: "223", champ: "Tahm Kench", role: "Disuader", h: "Poor Pick"},
    {id: "44", champ: "Taric", role: "Disuader", h: "Poor Pick"},
    {id: "412", champ: "Thresh", role: "Disuader", h: "Good Pick"},
    {id: "26", champ: "Zilean", role: "Disuader", h: "Poor Pick"},
    {id: "12", champ: "Alistar", role: "Engager", h: "Good Pick"},
    {id: "89", champ: "Leona", role: "Engager", h: "Poor Pick"},
    {id: "111", champ: "Nautilus", role: "Engager", h: "Good Pick"},
    {id: "80", champ: "Pantheon", role: "Engager", h: "Good Pick"},
    {id: "497", champ: "Rakan", role: "Engager", h: "Good Pick"},
    {id: "526", champ: "Rell", role: "Engager", h: "Poor Pick"},
    {id: "350", champ: "Yuumi", role: "Engager", h: "Poor Pick"},
    {id: "147", champ: "Seraphine", role: "Poker", h: "Poor Pick"},
    {id: "53", champ: "Blitzcrank", role: "Poker", h: "Poor Pick"},
    {id: "267", champ: "Nami", role: "Zoner", h: "Good Pick"},
    {id: "143", champ: "Zyra", role: "Zoner", h: "Poor Pick"},
]
$(function() {
    //console.log(getapi(`${url}/lol/summoner/v4/summoners/by-name/KenzoEngineer?api_key=${apiKey}`));
    TOP.forEach(function (item){
        $("#input_top").append(`<li><a href="#" class="dropdown-item top-item">${item.champ}</a></li>`);
    });
    SUPPORTS.forEach(function (item){
        $("#input_support").append(`<li><a href="#" class="dropdown-item support-item">${item.champ}</a></li>`);
    });

    sortList("input_support");
    sortList("input_top");

    $(".top-item").click(function () {
        let object = search($(this).text(),"T");
        $("#top_button").text($(this).text());
        $("#role_top").text(object.role);
        $("#good_top").text(object.h.toUpperCase());
        if (object.h == "Good Pick") {
            $("#good_top").css({"color":"rgb(82, 255, 111)"});
        } else {
            $("#good_top").css({"color":"rgb(255, 86, 86)"});
        }
        $("#image_top").attr("src",`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${object.id}.png`);
        $("#counter_top").text(searchRole("TOP",listCounters(object.role)[2],listCounters(object.role)[3]).sort().join(", "));
        $("#countered_top").text(searchRole("TOP",listCounters(object.role)[0],listCounters(object.role)[1]).sort().join(", "));
    });

    $(".support-item").click(function () {
        let object = search($(this).text(),"S");
        $("#support_button").text($(this).text());
        $("#role_support").text(object.role);
        $("#good_support").text(object.h.toUpperCase());
        if (object.h == "Good Pick") {
            $("#good_support").css({"color":"rgb(82, 255, 111)"});
        } else {
            $("#good_support").css({"color":"rgb(255, 86, 86)"});
        }
        $("#image_support").attr("src",`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${object.id}.png`);
        $("#counter_support").text(searchRole("SUPPORTS",listCounters(object.role)[2],listCounters(object.role)[3]).sort().join(", "));
        $("#countered_support").text(searchRole("SUPPORTS",listCounters(object.role)[0],listCounters(object.role)[1]).sort().join(", "));
    });
});
function search(champ, role) {
    let found;
    if (role === "T") {
        for (let i = 0; i < TOP.length; i++) {
            if (TOP[i].champ === champ) {
                return {role: TOP[i].role, h: TOP[i].h, id: TOP[i].id};
            }
        }
    }

    if (role === "S") {
        for (let i = 0; i < SUPPORTS.length; i++) {
            if (SUPPORTS[i].champ === champ) {
                return {role: SUPPORTS[i].role, h: SUPPORTS[i].h, id: SUPPORTS[i].id};
            }
        }
    }
}
function searchRole(l, role1, role2) {
    let arr = [role1, role2];
    let output = [];
    for (let i = 0; i < eval(l).length; i++) {
        if (arr.includes(eval(l)[i].role)) {
            output.push(eval(l)[i].champ);
        };
    }
    return output;
}
function sortList(ul) {
    var ul = document.getElementById(ul);
  
    Array.from(ul.getElementsByTagName("LI"))
      .sort((a, b) => a.textContent.localeCompare(b.textContent))
      .forEach(li => ul.appendChild(li));
}
function listCounters(role) {
    switch (role) {
        case "Engager":
            return ["Zoner","Disuader","Poker","Assassin"];
        case "Disuader":
            return ["Zoner","Poker","Engager","Assassin"];
        case "Zoner":
            return ["Poker","Assassin","Disuader","Engager"];
        case "Poker":
            return ["Engager","Assassin","Disuader","Zoner"];
        case "Assassin":
            return ["Engager","Disuader","Poker","Zoner"];
        case "Seige":
            return ["N/A","","Disuaders","Engage"];
        case "Split Push":
            return ["N/A","","Good at side pressure",""];
        case "Early Pressure":
            return ["Anyone who outscales","","Can build early lead",""];
    }
}
async function getapi(url) {
    const response = await fetch(url);
    let data = await response.json();
    return data;
}