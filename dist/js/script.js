// ++++++++++++++++++    world data +++++++++++++++++++++++++++++++++++++++++++++++++++++
$.ajax({
  url: 'https://api.thevirustracker.com/free-api?countryTotal=IN',
  dataType: 'json',
  success: function(data) {
    $(document).ready(function(){
   $(".total_india_case").text(data.countrydata[0].total_cases)
   $(".total_india_death").text(data.countrydata[0].total_deaths)
   $(".total_india_recovered").text(data.countrydata[0].total_recovered)
   $(".total_india_active").text(data.countrydata[0].total_active_cases)
   $(".total_india_active_today").text(data.countrydata[0].total_new_cases_today)
   $(".total_india_deaths_today").text(data.countrydata[0].total_new_deaths_today)
   $(".test").text((data.countrydata[0].total_new_deaths_today+data.countrydata[0].total_new_cases_today))
});
  }
});


// ++++++++++++++++++++++++++++ india   ++++++++++++++++++++++++++++++++++++++++++++++++++++++
$.ajax({
  url: 'https://api.rootnet.in/covid19-in/stats/latest',
  dataType: 'json',
  success: function(res) {
    $(document).ready(function(){
        $("#s").text(res.data.regional[0].loc);
        $("#s1").text(res.data.regional[0].totalConfirmed);
        $("#s2").text(res.data.regional[0].deaths);
        $("#s3").text(res.data.regional[0].discharged);
        $("#s4").text((res.data.regional[0].totalConfirmed-res.data.regional[0].deaths));
        $("#total").text(res.data.summary.total);
    });
}
});

// ++++++++++++++++++++++++++++++++++++ WORLD today data ++++++++++++++++++++++++++++++++++++
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    document.getElementById("global_confirmed").innerHTML = myArr["cases"];
    document.getElementById("global_confirmed_today").innerHTML = "+" + myArr["todayCases"] + "  today";
    document.getElementById("global_deaths").innerHTML = myArr["deaths"];
    document.getElementById("global_deaths_today").innerHTML = "+" + myArr["todayDeaths"] + "  today";
    document.getElementById("global_recovered").innerHTML = myArr["recovered"] ;
    // document.getElementById("global_recover_today").innerHTML = "+" + myArr["todayRecover"] + "  today";
    document.getElementById("global_active").innerHTML =myArr["active"];
    // document.getElementById("global_recovered").innerHTML = myArr["recovered"] ;
    document.getElementById("global_critical").innerHTML = myArr["critical"];
    document.getElementById("global_tests").innerHTML = myArr["tests"];
 
  }
};
xmlhttp.open("GET", "https://corona.lmao.ninja/v2/all?yesterday=flase", true);
xmlhttp.send();




// ++++++++++++++++++++++++++++++++++++ WORLD yesterday data ++++++++++++++++++++++++++++++++++++
function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    var myArry = JSON.parse(this.responseText);
    document.getElementById("yesterday_confirm").innerHTML = myArry["cases"];
    document.getElementById("yesterday_confirmcase").innerHTML = "+" + myArry["todayCases"] + "  yesterday";
    document.getElementById("yesterday_deaths").innerHTML = myArry["deaths"];
    document.getElementById("yesterday_deathcase").innerHTML = "+" + myArry["todayDeaths"] + "  yesterday";
    document.getElementById("yesterday_recovered").innerHTML = myArry["recovered"] ;
    // document.getElementById("global_recover_today").innerHTML = "+" + myArr["todayRecover"] + "  today";
    document.getElementById("yesterday_active").innerHTML =myArry["active"];
    // document.getElementById("global_recovered").innerHTML = myArr["recovered"] ;
    document.getElementById("yesterday_critical").innerHTML = myArry["critical"];
    // document.getElementById("yesterday_tests").innerHTML = myArry["tests"];
     document.getElementById("yesterday_tests").innerHTML = myArry["tests"];
 
  }
  };
  xhttp.open("GET", "https://disease.sh/v2/all?yesterday=true", true);
  xhttp.send();
}




// +++++++++++++++++   ASIA yesterday data +++++++++++++++++++++++++++++++++++++++++
function LoadAsia() {
  var asiaxhttp = new XMLHttpRequest();
  asiaxhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    var asia = JSON.parse(this.responseText);
    document.getElementById("asia_yesterday_confirm").innerHTML = asia["cases"];
    document.getElementById("asia_yesterday_confirmcase").innerHTML = "+" + asia["todayCases"] + "  yesterday";
    document.getElementById("asia_yesterday_deaths").innerHTML = asia["deaths"];
    document.getElementById("asia_yesterday_deathcase").innerHTML = "+" + asia["todayDeaths"] + "  yesterday";
    document.getElementById("asia_yesterday_recovered").innerHTML = asia["recovered"] ;
    // document.getElementById("global_recover_today").innerHTML = "+" + myArr["todayRecover"] + "  today";
    document.getElementById("asia_yesterday_active").innerHTML =asia["active"];
    // document.getElementById("global_recovered").innerHTML = myArr["recovered"] ;
    document.getElementById("asia_yesterday_critical").innerHTML = asia["critical"];
    // document.getElementById("yesterday_tests").innerHTML = myArry["tests"];
     // document.getElementById("asia_yesterday_tests").innerHTML = asia["tests"];
 
  }
  };
  asiaxhttp.open("GET", "https://disease.sh/v2/continents/asia?yesterday=true", true);
  asiaxhttp.send();
}



// +++++++++++++++++++++++++ ASIA today ++++++++++++++++++++++++++++++++++++++++++++++++
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    document.getElementById("asia_confirmed").innerHTML = myArr["cases"];
    document.getElementById("asia_confirmed_today").innerHTML = "+" + myArr["todayCases"] + "  today";
    document.getElementById("asia_deaths").innerHTML = myArr["deaths"];
    document.getElementById("asia_deaths_today").innerHTML = "+" + myArr["todayDeaths"] + "  today";
    document.getElementById("asia_recovered").innerHTML = myArr["recovered"] ;
    // document.getElementById("asia_recover_today").innerHTML = "+" + myArr["todayRecover"] + "  today";
    document.getElementById("asia_active").innerHTML =myArr["active"];
    // document.getElementById("asia_recovered").innerHTML = myArr["recovered"] ;
    document.getElementById("asia_critical").innerHTML = myArr["critical"];
    // document.getElementById("global_tests").innerHTML = myArr["tests"];
 
  }
};
xmlhttp.open("GET", "https://corona.lmao.ninja/v2/continents/asia?yesterday=false", true);
xmlhttp.send();






var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    document.getElementById("india_confirmed").innerHTML = myArr["cases"];
    document.getElementById("india_confirmed_today").innerHTML = "+" + myArr["todayCases"] + "  today";
    document.getElementById("india_deaths").innerHTML = myArr["deaths"];
    document.getElementById("india_deaths_today").innerHTML = "+" + myArr["todayDeaths"] + "  today";
    document.getElementById("india_recovered").innerHTML = myArr["recovered"] ;
    // document.getElementById("asia_recover_today").innerHTML = "+" + myArr["todayRecover"] + "  today";
    document.getElementById("india_active").innerHTML =myArr["active"];
    // document.getElementById("asia_recovered").innerHTML = myArr["recovered"] ;
    document.getElementById("india_critical").innerHTML = myArr["critical"];
    document.getElementById("india_tests").innerHTML = myArr["tests"];
 
  }
};
xmlhttp.open("GET", "https://corona.lmao.ninja/v2/countries/india?yesterday=false", true);
xmlhttp.send();



// +++++++++++++++++++++++++ europe today ++++++++++++++++++++++++++++++++++++++++++++++++
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var europeToday = JSON.parse(this.responseText);
    document.getElementById("europe_confirmed").innerHTML = europeToday["cases"];
    document.getElementById("europe_confirmed_today").innerHTML = "+" + europeToday["todayCases"] + "  today";
    document.getElementById("europe_deaths").innerHTML = europeToday["deaths"];
    document.getElementById("europe_deaths_today").innerHTML = "+" + europeToday["todayDeaths"] + "  today";
    document.getElementById("europe_recovered").innerHTML = europeToday["recovered"] ;
    // document.getElementById("asia_recover_today").innerHTML = "+" + myArr["todayRecover"] + "  today";
    document.getElementById("europe_active").innerHTML =europeToday["active"];
    // document.getElementById("asia_recovered").innerHTML = myArr["recovered"] ;
    document.getElementById("europe_critical").innerHTML = europeToday["critical"];
    // document.getElementById("global_tests").innerHTML = myArr["tests"];
 
  }
};
xmlhttp.open("GET", "https://disease.sh/v2/continents/europe?yesterday=false", true);
xmlhttp.send();




// +++++++++++++++++   EUROPE  yesterday data +++++++++++++++++++++++++++++++++++++++++
function LoadEurope() {
  var europexhttp = new XMLHttpRequest();
  europexhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    var europe = JSON.parse(this.responseText);
    document.getElementById("europe_yesterday_confirm").innerHTML = europe["cases"];
    document.getElementById("europe_yesterday_confirmcase").innerHTML = "+" + europe["todayCases"] + "  yesterday";
    document.getElementById("europe_yesterday_deaths").innerHTML = europe["deaths"];
    document.getElementById("europe_yesterday_deathcase").innerHTML = "+" + europe["todayDeaths"] + "  yesterday";
    document.getElementById("europe_yesterday_recovered").innerHTML = europe["recovered"] ;
    // document.getElementById("global_recover_today").innerHTML = "+" + myArr["todayRecover"] + "  today";
    document.getElementById("europe_yesterday_active").innerHTML =europe["active"];
    // document.getElementById("global_recovered").innerHTML = myArr["recovered"] ;
    document.getElementById("europe_yesterday_critical").innerHTML = europe["critical"];
    // document.getElementById("yesterday_tests").innerHTML = myArry["tests"];
     // document.getElementById("asia_yesterday_tests").innerHTML = asia["tests"];
 
  }
  };
  europexhttp.open("GET", "https://disease.sh/v2/continents/europe?yesterday=true", true);
  europexhttp.send();
}



// +++++++++++++++++++++++++ north america today ++++++++++++++++++++++++++++++++++++++++++++++++
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var NorthAmericaToday = JSON.parse(this.responseText);
    document.getElementById("NorthAmerica_confirmed").innerHTML = NorthAmericaToday["cases"];
    document.getElementById("NorthAmerica_confirmed_today").innerHTML = "+" + NorthAmericaToday["todayCases"] + "  today";
    document.getElementById("NorthAmerica_deaths").innerHTML = NorthAmericaToday["deaths"];
    document.getElementById("NorthAmerica_deaths_today").innerHTML = "+" + NorthAmericaToday["todayDeaths"] + "  today";
    document.getElementById("NorthAmerica_recovered").innerHTML = NorthAmericaToday["recovered"] ;
    // document.getElementById("asia_recover_today").innerHTML = "+" + myArr["todayRecover"] + "  today";
    document.getElementById("NorthAmerica_active").innerHTML =NorthAmericaToday["active"];
    // document.getElementById("asia_recovered").innerHTML = myArr["recovered"] ;
    document.getElementById("NorthAmerica_critical").innerHTML = NorthAmericaToday["critical"];
    // document.getElementById("global_tests").innerHTML = myArr["tests"];
 
  }
};
xmlhttp.open("GET", "https://disease.sh/v2/continents/north%20america?yesterday=false", true);
xmlhttp.send();




// ++++++++++++++++   North America  yesterday data +++++++++++++++++++++++++++++++++++++++++
function LoadNorthAmerica() {
  var NorthAmericaxhttp = new XMLHttpRequest();
  NorthAmericaxhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    var NorthAmerica = JSON.parse(this.responseText);
    document.getElementById("NorthAmerica_yesterday_confirm").innerHTML = NorthAmerica["cases"];
    document.getElementById("NorthAmerica_yesterday_confirmcase").innerHTML = "+" + NorthAmerica["todayCases"] + "  yesterday";
    document.getElementById("NorthAmerica_yesterday_deaths").innerHTML = NorthAmerica["deaths"];
    document.getElementById("NorthAmerica_yesterday_deathcase").innerHTML = "+" + NorthAmerica["todayDeaths"] + "  yesterday";
    document.getElementById("NorthAmerica_yesterday_recovered").innerHTML = NorthAmerica["recovered"] ;
    // document.getElementById("global_recover_today").innerHTML = "+" + myArr["todayRecover"] + "  today";
    document.getElementById("NorthAmerica_yesterday_active").innerHTML =NorthAmerica["active"];
    // document.getElementById("global_recovered").innerHTML = myArr["recovered"] ;
    document.getElementById("NorthAmerica_yesterday_critical").innerHTML = NorthAmerica["critical"];
    // document.getElementById("yesterday_tests").innerHTML = myArry["tests"];
     // document.getElementById("asia_yesterday_tests").innerHTML = asia["tests"];
 
  }
  };
  NorthAmericaxhttp.open("GET", "https://disease.sh/v2/continents/north%20america?yesterday=true", true);
  NorthAmericaxhttp.send();
}






// +++++++++++++++++++++++++ south america today ++++++++++++++++++++++++++++++++++++++++++++++++
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var SouthAmericaToday = JSON.parse(this.responseText);
    document.getElementById("SouthAmerica_confirmed").innerHTML = SouthAmericaToday["cases"];
    document.getElementById("SouthAmerica_confirmed_today").innerHTML = "+" + SouthAmericaToday["todayCases"] + "  today";
    document.getElementById("SouthAmerica_deaths").innerHTML = SouthAmericaToday["deaths"];
    document.getElementById("SouthAmerica_deaths_today").innerHTML = "+" + SouthAmericaToday["todayDeaths"] + "  today";
    document.getElementById("SouthAmerica_recovered").innerHTML = SouthAmericaToday["recovered"] ;
    // document.getElementById("asia_recover_today").innerHTML = "+" + myArr["todayRecover"] + "  today";
    document.getElementById("SouthAmerica_active").innerHTML =SouthAmericaToday["active"];
    // document.getElementById("asia_recovered").innerHTML = myArr["recovered"] ;
    document.getElementById("SouthAmerica_critical").innerHTML = SouthAmericaToday["critical"];
    // document.getElementById("global_tests").innerHTML = myArr["tests"];
 
  }
};
xmlhttp.open("GET", "https://disease.sh/v2/continents/south%20america?yesterday=false", true);
xmlhttp.send();




// ++++++++++++++++   South America  yesterday data +++++++++++++++++++++++++++++++++++++++++
function LoadSouthAmerica() {
  var SouthAmericaxhttp = new XMLHttpRequest();
  SouthAmericaxhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    var SouthAmerica = JSON.parse(this.responseText);
    document.getElementById("SouthAmerica_yesterday_confirm").innerHTML = SouthAmerica["cases"];
    document.getElementById("SouthAmerica_yesterday_confirmcase").innerHTML = "+" + SouthAmerica["todayCases"] + "  yesterday";
    document.getElementById("SouthAmerica_yesterday_deaths").innerHTML = SouthAmerica["deaths"];
    document.getElementById("SouthAmerica_yesterday_deathcase").innerHTML = "+" + SouthAmerica["todayDeaths"] + "  yesterday";
    document.getElementById("SouthAmerica_yesterday_recovered").innerHTML = SouthAmerica["recovered"] ;
    // document.getElementById("global_recover_today").innerHTML = "+" + myArr["todayRecover"] + "  today";
    document.getElementById("S_active").innerHTML = SouthAmerica["active"];
    // document.getElementById("global_recovered").innerHTML = myArr["recovered"] ;
    document.getElementById("SouthAmerica_yesterday_critical").innerHTML = SouthAmerica["critical"];
    // document.getElementById("yesterday_tests").innerHTML = myArry["tests"];
     // document.getElementById("asia_yesterday_tests").innerHTML = asia["tests"];
 
  }
  };
  SouthAmericaxhttp.open("GET", "https://disease.sh/v2/continents/south%20america?yesterday=true", true);
  SouthAmericaxhttp.send();
}




// +++++++++ +++++++++++++++ AFRICA today ++++++++++++++++++++++++++++++++++++++++++++++++
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var AfricaToday = JSON.parse(this.responseText);
    document.getElementById("Africa_confirmed").innerHTML = AfricaToday["cases"];
    document.getElementById("Africa_confirmed_today").innerHTML = "+" + AfricaToday["todayCases"] + "  today";
    document.getElementById("Africa_deaths").innerHTML = AfricaToday["deaths"];
    document.getElementById("Africa_deaths_today").innerHTML = "+" + AfricaToday["todayDeaths"] + "  today";
    document.getElementById("Africa_recovered").innerHTML = AfricaToday["recovered"] ;
    // document.getElementById("asia_recover_today").innerHTML = "+" + myArr["todayRecover"] + "  today";
    document.getElementById("Africa_active").innerHTML =AfricaToday["active"];
    // document.getElementById("asia_recovered").innerHTML = myArr["recovered"] ;
    document.getElementById("Africa_critical").innerHTML = AfricaToday["critical"];
    // document.getElementById("global_tests").innerHTML = myArr["tests"];
 
  }
};
xmlhttp.open("GET", "https://disease.sh/v2/continents/africa?yesterday=false", true);
xmlhttp.send();




// ++++++++++++++++   Africa  yesterday data +++++++++++++++++++++++++++++++++++++++++
function LoadAfrica() {
  var Africaxhttp = new XMLHttpRequest();
  Africaxhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    var Africa = JSON.parse(this.responseText);
    document.getElementById("Africa_yesterday_confirm").innerHTML = Africa["cases"];
    document.getElementById("Africa_yesterday_confirmcase").innerHTML = "+" + Africa["todayCases"] + "  yesterday";
    document.getElementById("Africa_yesterday_deaths").innerHTML = Africa["deaths"];
    document.getElementById("Africa_yesterday_deathcase").innerHTML = "+" + Africa["todayDeaths"] + "  yesterday";
    document.getElementById("Africa_yesterday_recovered").innerHTML = Africa["recovered"] ;
    // document.getElementById("global_recover_today").innerHTML = "+" + myArr["todayRecover"] + "  today";
    document.getElementById("Africa_yesterday_active").innerHTML = Africa["active"];
    // document.getElementById("global_recovered").innerHTML = myArr["recovered"] ;
    document.getElementById("Africa_yesterday_critical").innerHTML = Africa["critical"];
    // document.getElementById("yesterday_tests").innerHTML = myArry["tests"];
     // document.getElementById("asia_yesterday_tests").innerHTML = asia["tests"];
 
  }
  };
  Africaxhttp.open("GET", "https://disease.sh/v2/continents/africa?yesterday=true", true);
  Africaxhttp.send();
}





// +++++++++ +++++++++++++++ oceania today ++++++++++++++++++++++++++++++++++++++++++++++++
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var oceaniaToday = JSON.parse(this.responseText);
    document.getElementById("oceania_confirmed").innerHTML = oceaniaToday["cases"];
    document.getElementById("oceania_confirmed_today").innerHTML = "+" + oceaniaToday["todayCases"] + "  today";
    document.getElementById("oceania_deaths").innerHTML = oceaniaToday["deaths"];
    document.getElementById("oceania_deaths_today").innerHTML = "+" + oceaniaToday["todayDeaths"] + "  today";
    document.getElementById("oceania_recovered").innerHTML = oceaniaToday["recovered"] ;
    // document.getElementById("asia_recover_today").innerHTML = "+" + myArr["todayRecover"] + "  today";
    document.getElementById("oceania_active").innerHTML =oceaniaToday["active"];
    // document.getElementById("asia_recovered").innerHTML = myArr["recovered"] ;
    document.getElementById("oceania_critical").innerHTML = oceaniaToday["critical"];
    // document.getElementById("global_tests").innerHTML = myArr["tests"];
 
  }
};
xmlhttp.open("GET", "https://disease.sh/v2/continents/Australia%2FOceania?yesterday=false", true);
xmlhttp.send();




// ++++++++++++++++   oceania yesterday data +++++++++++++++++++++++++++++++++++++++++
function Loadoceania() {
  var oceaniaxhttp = new XMLHttpRequest();
  oceaniaxhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    var oceania = JSON.parse(this.responseText);
    document.getElementById("oceania_yesterday_confirm").innerHTML = oceania["cases"];
    document.getElementById("oceania_yesterday_confirmcase").innerHTML = "+" + oceania["todayCases"] + "  yesterday";
    document.getElementById("oceania_yesterday_deaths").innerHTML = oceania["deaths"];
    document.getElementById("oceania_yesterday_deathcase").innerHTML = "+" + oceania["todayDeaths"] + "  yesterday";
    document.getElementById("oceania_yesterday_recovered").innerHTML = oceania["recovered"] ;
    // document.getElementById("global_recover_today").innerHTML = "+" + myArr["todayRecover"] + "  today";
    document.getElementById("oceania_yesterday_active").innerHTML = oceania["active"];
    // document.getElementById("global_recovered").innerHTML = myArr["recovered"] ;
    document.getElementById("oceania_yesterday_critical").innerHTML = oceania["critical"];
    // document.getElementById("yesterday_tests").innerHTML = myArry["tests"];
     // document.getElementById("asia_yesterday_tests").innerHTML = asia["tests"];
 
  }
  };
  oceaniaxhttp.open("GET", "https://disease.sh/v2/continents/Australia%2FOceania?yesterday=true", true);
  oceaniaxhttp.send();
}





 








