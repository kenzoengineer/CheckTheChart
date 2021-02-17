const apiKey = config.KEY;
const url = "https://na1.api.riotgames.com";
const championArr = { url: "champions.js" };
$(function() {
    //console.log(getapi(`${url}/lol/summoner/v4/summoners/by-name/KenzoEngineer?api_key=${apiKey}`));
    $("#myInput").easyAutocomplete(championArr);
});
async function getapi(url) {
    const response = await fetch(url);
    let data = await response.json();
    return data;
}