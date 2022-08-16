let countryData = [];

let selectedCountry = sessionStorage.getItem("selectedCountry").toLowerCase();
if(selectedCountry === "UNITED KINGDOM".toLowerCase()){
  selectedCountry = "United Kingdom of Great Britain and Northern Ireland".toLowerCase();
}
let TotalConfirmed = sessionStorage.getItem("TotalConfirmed");
let TotalDeaths = sessionStorage.getItem("TotalDeaths");
let TotalRecovered = sessionStorage.getItem("TotalRecovered");

const getCountery = async () => {
  const resp = await fetch("https://restcountries.com/v2/all");
  const data = await resp.json();
  countryData = data;

  let myCountry = countryData.find((country) => {
    let countryName = country.name.toLowerCase();
    return countryName === selectedCountry;
  });
  document.getElementById("country").innerText = selectedCountry.toUpperCase();
  document.getElementById("case").innerText =
    "Total Confirmed : " + TotalConfirmed;
  document.getElementById("death").innerText = "Total Deaths : " + TotalDeaths;
  //document.getElementById("recover").innerText =
  //  "Total Recovered : " + TotalRecovered;
  document.getElementById("popu").innerText =
    "Population : " + myCountry.population;
  document.getElementById("cap").innerText = "Capital : " + myCountry.capital;
  document.getElementById("reg").innerText = "Region : " + myCountry.region;
  document.getElementById("lang").innerText =
    "Language : " + myCountry.languages[0].name;
  document.getElementById("time").innerText =
    "Timezone : " + myCountry.timezones[0];
  document.getElementById("flag").src = myCountry.flags.png;
};

getCountery();
