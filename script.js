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
const JUNGLE = [
    {id: "245", champ: "Ekko", role: "Assassin", h:"Poor Pick"},
    {id: "28", champ: "Evelynn", role: "Assassin", h:"Poor Pick"},
    {id: "120", champ: "Hecarim", role: "Assassin", h:"Good Pick"},
    {id: "141", champ: "Kayn (Blue)", role: "Assassin", h:"Poor Pick"},
    {id: "121", champ: "Khazix", role: "Assassin", h:"Poor Pick"},
    {id: "64", champ: "Lee Sin", role: "Assassin", h:"Poor Pick"},
    {id: "11", champ: "Master Yi", role: "Assassin", h:"Poor Pick"},
    {id: "56", champ: "Nocturne", role: "Assassin", h:"Poor Pick"},
    {id: "421", champ: "Reksai", role: "Assassin", h:"Good Pick"},
    {id: "107", champ: "Rengar", role: "Assassin", h:"Poor Pick"},
    {id: "35", champ: "Shaco", role: "Assassin", h:"Poor Pick"},
    {id: "104", champ: "Graves", role: "Disuader", h:"Poor Pick"},
    {id: "427", champ: "Ivern", role: "Disuader", h:"Good Pick"},
    {id: "203", champ: "Kindred", role: "Disuader", h:"Poor Pick"},
    {id: "48", champ: "Trundle", role: "Disuader", h:"Poor Pick"},
    {id: "60", champ: "Elise", role: "Early Pressure", h:"Poor Pick"},
    {id: "76", champ: "Nidalee", role: "Early Pressure", h:"Poor Pick"},
    {id: "163", champ: "Taliyah", role: "Early Pressure", h:"Poor Pick"},
    {id: "5", champ: "Xin Zhao", role: "Early Pressure", h:"Poor Pick"},
    {id: "32", champ: "Amumu", role: "Engager", h:"Poor Pick"},
    {id: "9", champ: "Fiddlesticks", role: "Engager", h:"Poor Pick"},
    {id: "59", champ: "Jarvan IV", role: "Engager", h:"Poor Pick"},
    {id: "141", champ: "Kayn (Red)", role: "Engager", h:"Poor Pick"},
    {id: "876", champ: "Lillia", role: "Engager", h:"Poor Pick"},
    {id: "20", champ: "Nunu", role: "Engager", h:"Good Pick"},
    {id: "2", champ: "Olaf", role: "Engager", h:"Poor Pick"},
    {id: "33", champ: "Rammus", role: "Engager", h:"Good Pick"},
    {id: "113", champ: "Sejuani", role: "Engager", h:"Poor Pick"},
    {id: "72", champ: "Skarner", role: "Engager", h:"Good Pick"},
    {id: "77", champ: "Udyr", role: "Engager", h:"Good Pick"},
    {id: "254", champ: "Vi", role: "Engager", h:"Poor Pick"},
    {id: "234", champ: "Viego", role: "Engager", h:"Poor Pick"},
    {id: "19", champ: "Warwick", role: "Engager", h:"Good Pick"},
    {id: "102", champ: "Shyvana", role: "Poker", h:"Good Pick"}
]
const MID = [
    {id: "103", champ: "Ahri", role: "Assassin", h:"Poor Pick"},
    {id: "84", champ: "Akali", role: "Assassin", h:"Poor Pick"},
    {id: "131", champ: "Diana", role: "Assassin", h:"Poor Pick"},
    {id: "105", champ: "Fizz", role: "Assassin", h:"Poor Pick"},
    {id: "38", champ: "Kassadin", role: "Assassin", h:"Poor Pick"},
    {id: "55", champ: "Katarina", role: "Assassin", h:"Poor Pick"},
    {id: "7", champ: "Leblanc", role: "Assassin", h:"Poor Pick"},
    {id: "246", champ: "Qiyana", role: "Assassin", h:"Poor Pick"},
    {id: "68", champ: "Rumble", role: "Assassin", h:"Poor Pick"},
    {id: "517", champ: "Sylas", role: "Assassin", h:"Poor Pick"},
    {id: "91", champ: "Talon", role: "Assassin", h:"Poor Pick"},
    {id: "157", champ: "Yasuo", role: "Assassin", h:"Poor Pick"},
    {id: "777", champ: "Yone", role: "Assassin", h:"Poor Pick"},
    {id: "238", champ: "Zed", role: "Assassin", h:"Poor Pick"},
    {id: "1", champ: "Annie", role: "Disuader", h:"Poor Pick"},
    {id: "136", champ: "Aurelion Sol", role: "Disuader", h:"Poor Pick"},
    {id: "69", champ: "Cassiopeia", role: "Disuader", h:"Poor Pick"},
    {id: "3", champ: "Galio", role: "Disuader", h:"Good Pick"},
    {id: "74", champ: "Heimerdinger", role: "Disuader", h:"Poor Pick"},
    {id: "90", champ: "Malzahar", role: "Disuader", h:"Good Pick"},
    {id: "82", champ: "Mordekaiser", role: "Disuader", h:"Good Pick"},
    {id: "518", champ: "Neeko", role: "Disuader", h:"Poor Pick"},
    {id: "13", champ: "Ryze", role: "Disuader", h:"Good Pick"},
    {id: "4", champ: "Twisted Fate", role: "Disuader", h:"Poor Pick"},
    {id: "39", champ: "Irelia", role: "Engager", h:"Poor Pick"},
    {id: "127", champ: "Lissandra", role: "Engager", h:"Good Pick"},
    {id: "8", champ: "Vladimir", role: "Engager", h:"Poor Pick"},
    {id: "154", champ: "Zac", role: "Engager", h:"Good Pick"},
    {id: "42", champ: "Corki", role: "Poker", h:"Poor Pick"},
    {id: "99", champ: "Lux", role: "Poker", h:"Poor Pick"},
    {id: "161", champ: "Velkoz", role: "Poker", h:"Good Pick"},
    {id: "101", champ: "Xerath", role: "Poker", h:"Poor Pick"},
    {id: "115", champ: "Ziggs", role: "Poker", h:"Poor Pick"},
    {id: "142", champ: "Zoe", role: "Poker", h:"Poor Pick"},
    {id: "34", champ: "Anivia", role: "Zoner", h:"Poor Pick"},
    {id: "268", champ: "Azir", role: "Zoner", h:"Poor Pick"},
    {id: "30", champ: "Karthus", role: "Zoner", h:"Good Pick"},
    {id: "61", champ: "Orianna", role: "Zoner", h:"Poor Pick"},
    {id: "134", champ: "Syndra", role: "Zoner", h:"Poor Pick"},
    {id: "45", champ: "Veigar", role: "Zoner", h:"Poor Pick"},
    {id: "112", champ: "Viktor", role: "Zoner", h:"Good Pick"},
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
    {id: "143", champ: "Zyra", role: "Zoner", h: "Poor Pick"}
]
const ADC = [
    {id:"145", champ: "Kaisa", role: "Assassin", h:"Good Pick"},
    {id:"29", champ: "Twitch", role: "Assassin", h:"Poor Pick"},
    {id:"50", champ: "Swain", role: "Disuader", h:"Good Pick"},
    {id:"498", champ: "Xayah", role: "Disuader", h:"Good Pick"},
    {id:"429", champ: "Kalista", role: "Early Pressure", h:"Poor Pick"},
    {id:"360", champ: "Samira", role: "Engager", h:"Poor Pick"},
    {id:"22", champ: "Ashe", role: "Poker", h:"Poor Pick"},
    {id:"81", champ: "Ezreal", role: "Poker", h:"Good Pick"},
    {id:"110", champ: "Varus", role: "Poker", h:"Poor Pick"},
    {id:"15", champ: "Sivir", role: "Poker", h:"Good Pick"},
    {id:"523", champ: "Aphelios", role: "Siege", h:"Poor Pick"},
    {id:"119", champ: "Draven", role: "Siege", h:"Poor Pick"},
    {id:"202", champ: "Jhin", role: "Siege", h:"Poor Pick"},
    {id:"222", champ: "Jinx", role: "Siege", h:"Poor Pick"},
    {id:"96", champ: "Kogmaw", role: "Siege", h:"Poor Pick"},
    {id:"236", champ: "Lucian", role: "Siege", h:"Poor Pick"},
    {id:"235", champ: "Senna", role: "Siege", h:"Good Pick"},
    {id:"18", champ: "Tristana", role: "Siege", h:"Poor Pick"},
    {id:"67", champ: "Vayne", role: "Siege", h:"Poor Pick"},
    {id:"51", champ: "Caitlyn", role: "Zoner", h:"Good Pick"},
    {id:"21", champ: "Miss Fortune", role: "Zoner", h:"Good Pick"}
]
$(function() {
    //console.log(getapi(`${url}/lol/summoner/v4/summoners/by-name/KenzoEngineer?api_key=${apiKey}`));
    TOP.forEach(function (item){
        $("#input_top").append(`<li><a href="#" class="dropdown-item top-item">${item.champ}</a></li>`);
    });
    JUNGLE.forEach(function (item){
        $("#input_jungle").append(`<li><a href="#" class="dropdown-item jungle-item">${item.champ}</a></li>`);
    });
    MID.forEach(function (item){
        $("#input_mid").append(`<li><a href="#" class="dropdown-item mid-item">${item.champ}</a></li>`);
    });
    SUPPORTS.forEach(function (item){
        $("#input_support").append(`<li><a href="#" class="dropdown-item support-item">${item.champ}</a></li>`);
    });
    ADC.forEach(function (item){
        $("#input_adc").append(`<li><a href="#" class="dropdown-item adc-item">${item.champ}</a></li>`);
    });

    sortList("input_top");
    sortList("input_jungle");
    sortList("input_mid");
    sortList("input_support");
    sortList("input_adc");

    $(".top-item").click(function () {
        let object = search($(this).text(),"TOP");
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

    $(".jungle-item").click(function () {
        let object = search($(this).text(),"JUNGLE");
        $("#jungle_button").text($(this).text());
        $("#role_jungle").text(object.role);
        $("#good_jungle").text(object.h.toUpperCase());
        if (object.h == "Good Pick") {
            $("#good_jungle").css({"color":"rgb(82, 255, 111)"});
        } else {
            $("#good_jungle").css({"color":"rgb(255, 86, 86)"});
        }
        $("#image_jungle").attr("src",`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${object.id}.png`);
        $("#counter_jungle").text(searchRole("JUNGLE",listCounters(object.role)[2],listCounters(object.role)[3]).sort().join(", "));
        $("#countered_jungle").text(searchRole("JUNGLE",listCounters(object.role)[0],listCounters(object.role)[1]).sort().join(", "));
    });

    $(".mid-item").click(function () {
        let object = search($(this).text(),"MID");
        $("#mid_button").text($(this).text());
        $("#role_mid").text(object.role);
        $("#good_mid").text(object.h.toUpperCase());
        if (object.h == "Good Pick") {
            $("#good_mid").css({"color":"rgb(82, 255, 111)"});
        } else {
            $("#good_mid").css({"color":"rgb(255, 86, 86)"});
        }
        $("#image_mid").attr("src",`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${object.id}.png`);
        $("#counter_mid").text(searchRole("MID",listCounters(object.role)[2],listCounters(object.role)[3]).sort().join(", "));
        $("#countered_mid").text(searchRole("MID",listCounters(object.role)[0],listCounters(object.role)[1]).sort().join(", "));
    });

    $(".support-item").click(function () {
        let object = search($(this).text(),"SUPPORTS");
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

    $(".adc-item").click(function () {
        let object = search($(this).text(),"ADC");
        $("#adc_button").text($(this).text());
        $("#role_adc").text(object.role);
        $("#good_adc").text(object.h.toUpperCase());
        if (object.h == "Good Pick") {
            $("#good_adc").css({"color":"rgb(82, 255, 111)"});
        } else {
            $("#good_adc").css({"color":"rgb(255, 86, 86)"});
        }
        $("#image_adc").attr("src",`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${object.id}.png`);
        $("#counter_adc").text(searchRole("ADC",listCounters(object.role)[2],listCounters(object.role)[3]).sort().join(", "));
        $("#countered_adc").text(searchRole("ADC",listCounters(object.role)[0],listCounters(object.role)[1]).sort().join(", "));
    });
});
function search(champ, role) {
    let found;
    for (let i = 0; i < eval(role).length; i++) {
        if (eval(role)[i].champ === champ) {
            return {role: eval(role)[i].role, h: eval(role)[i].h, id: eval(role)[i].id};
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