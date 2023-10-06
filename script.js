const countriesList =[
    {
        name: "Bahrain", 
        imgUrl: "images/Bahrain.png", 
        currency: "BHD", 
        regions: "Al 'Asimah, Al Janubiyah, Al Muharraq, Ash Shamaliyah", 
        wikiUrl: "https://en.wikipedia.org/wiki/Bahrain"
    },
    {
        name: "Bosnia",
        imgUrl: "images/Bosnia.png",
        currency: "BAM",
        regions: "Brcko distrikt, Federacija Bosne i Hercegovine, Republika Srpska",
        wikiUrl: "https://en.wikipedia.org/wiki/Bosnia_and_Herzegovina"
    },
    {
        name: "Brunei",
        imgUrl: "images/Brunei.png", 
        currency: "BND",
        regions: "Belait, Brunei-Muara, Temburong, Tutong",
        wikiUrl: "https://en.wikipedia.org/wiki/Brunei"
    },
    {
        name: "Georgia",
        imgUrl: "images/Georgia.png",
        currency:"GEL",
        regions: "Haut-Ogooue, Ngounie, Nyanga, Ogooue-Maritime, Woleu-Ntem",
        wikiUrl: "https://en.wikipedia.org/wiki/Georgia"
    },
    {
        name: "Greenland",
        imgUrl: "images/Greenland.png",
        currency:"DKK",
        regions: "Avannaata Kommunia, Kommune Kujalleq, Kommune Qeqertalik, Kommuneqarfik Sermersooq, Qeqqata Kommunia",
        wikiUrl: "https://en.wikipedia.org/wiki/Greenland"
    },
    {
        name: "Iceland",
        imgUrl: "images/Iceland.png", 
        currency:"ISK",
        regions: "Austurland, Hofudborgarsvaedi, Nordurland eystra. Nordurland vestra, Sudurland, Sudurnes, Vestfirdir, Vesturland",
        wikiUrl: "https://en.wikipedia.org/wiki/Iceland"
    },
    {
        name: "Mayotte",
        imgUrl: "images/Mayotte.png", 
        currency:"EUR",
        regions: "Bandraboua, Bandrele, Mamoudzou, Ouangani",
        wikiUrl: "https://en.wikipedia.org/wiki/Mayotte"
    },
    {
        name: "Micronesia",
        imgUrl: "images/Micronesia.png", 
        currency:"USD",
        regions: "Chuuk, Kosrae, Pohnpei, Yap",
        wikiUrl: "https://en.wikipedia.org/wiki/Micronesia"
    },
    {
        name: "New Caledonia",
        imgUrl: "images/New Caledonia.png", 
        currency: "CFP",
        regions: "Province Nord, Province Sud",
        wikiUrl: "https://en.wikipedia.org/wiki/New_Caledonia"
    }, 
    {
        name: "Saint Vincent Grenadines",
        imgUrl: "images/Saint Vincent Grenadines.png",
        currency: "XCD",
        regions: "Charlotte,  Grenadines, Saint George, Saint Patrick",
        wikiUrl: "https://en.wikipedia.org/wiki/Saint_Vincent_and_the_Grenadines"
    }, 
    {
        name: "Samoa",
        imgUrl: "images/Samoa.png", 
        currency: "EUR",
        regions: "Atua, Fa'asaleleaga, Tuamasaga",
        wikiUrl: "https://en.wikipedia.org/wiki/Samoa"
    }, 
    {
        name: "Sierra Leone",
        imgUrl: "images/Sierra Leone.png", 
        currency: "EUR",
        regions: "Eastern, Northern, Southern, Western Area",
        wikiUrl: "https://en.wikipedia.org/wiki/Sierra_Leone"
    }, 
    {
        name: "South Sudan",
        imgUrl: "images/South Sudan.png",
        currency: "SSP",
        regions: "Central Equatoria, Eastern Equatoria, Jonglei Lakes, Northern Bahr el Ghazal, Upper Nile, Western Equatoria",
        wikiUrl:  "https://en.wikipedia.org/wiki/South_Sudan"
    }, 
    {
        name: "Suriname",
        imgUrl: "images/Suriname.png", 
        currency: "SRD",
        regions: "Brokopondo, Commewijne, Nickerie, Para, Paramaribo, Sipaliwini, Wanica",
        wikiUrl: "https://en.wikipedia.org/wiki/Suriname"
    }, 
    {
        name: "Tajikistan",
        imgUrl: "images/Tajikistan.png", 
        currency: "TJS",
        regions: "Dushanbe, Khatlon, Nohiyahoi, Tobei, Jumhuri, Sughd",
        wikiUrl: "https://en.wikipedia.org/wiki/Tajikistan"
    }, 
    {
        name: "Timor-Leste", 
        imgUrl: "images/Timor-Leste.png",
        currency: "USD",
        regions: "Ainaro, Bobonaro, Cova, Lima, Dili, Liquica",
        wikiUrl: "https://en.wikipedia.org/wiki/East_Timor"
    },
    {
        name: "Tonga",
        imgUrl: "images/Togo.png",
        currency: "XOF",
        regions: "Ha'apai, Niuas, Niuas",
        wikiUrl: "https://en.wikipedia.org/wiki/Togo"
    }, 
    {
        name: "Turkmenistan",
        imgUrl: "images/Turkmenistan.png", 
        currency: "TMT",
        regions: "Ahal, Balkan, Dasoguz, Lebap, Mary",
        wikiUrl: "https://en.wikipedia.org/wiki/Turkmenistan"
    },
    {
        name: "Vanuatu",
        imgUrl: "images/Vanuatu.png", 
        currency: "VUV",
        regions: "Shefa, Tafea, Torba",
        wikiUrl: "https://en.wikipedia.org/wiki/Vanuatu"
    },
    {
        name: "Wallis and Futuna",
        imgUrl: "images/Wallis and Futuna.png", 
        currency: "XPF",
        regions: "Sigave, Uvea",
        wikiUrl: "https://en.wikipedia.org/wiki/Wallis_and_Futuna"
    },          
]    

function searchCountryUsingName(){
    const checkInputValidity = validateInput("searchByName");
    
    if(!checkInputValidity){
        alert("Invalid Input");
        return;
    }

    const searchValue = document.getElementById("searchByName").value.toLowerCase();
    const results = [];

    if (searchValue === ""){
        dynamicallyDisplayMatches(results);
        return;
    }

    for (const country of countriesList){
        if (country.name.toLowerCase().startsWith(searchValue) && results.length < 5){
            results.push(country);
        }
    }

    dynamicallyDisplayMatches(results)
}

function searchCountryUsingCurrencyCode(){

    const checkInputValidity = validateInput("searchByCurrencyCode");
    if(!checkInputValidity){
        alert("Invalid Input");
        return;
    }
    const searchValue = document.getElementById("searchByCurrencyCode").value.toUpperCase();
    const results = [];

    if (searchValue === ""){
        dynamicallyDisplayMatches(results);
        return;
    }

    for (const country of countriesList){
        if (country.currency.toUpperCase().startsWith(searchValue) && results.length < 5){
            results.push(country);
        }
    }

    dynamicallyDisplayMatches(results)
}

function validateInput(validatingInputId){
    const input = document.getElementById(validatingInputId).value;

        if (validatingInputId === 'searchByName')
        {
            if ((!/\d/.test(input)) && input.length <=20)
            {
                return true;
            }
        }
        else
        {
            if (/^[A-Z]{0,3}$/.test(input))
            {
                return true;
            }
        }

        return false;
}


function dynamicallyDisplayMatches(results){
    const matchesContainer = document.getElementById("dynamicResultsContainer")
    
    //this loop clears any previous matches
    while (matchesContainer.firstChild){
        matchesContainer.removeChild(matchesContainer.firstChild)
    }

    //the if statement is to hide the container if there are no matches
    if (results.length === 0){
        matchesContainer.style.display = "none";
    }
    else{ //show container if there are matches
        matchesContainer.style.display = "block";

        const resList = document.createElement("ul");

        for (const country of results){ 
            const resItem = document.createElement("li");
            
            const img = document.createElement("img");
            img.className = "image";
            img.src = country.imgUrl;
            img.alt = `Flag of ${country.name}`;

            const lineBreak = document.createElement("br");


            const nameElement = document.createElement("b");
            nameElement.className = "name";
            nameElement.textContent = country.name;

            const currencyElement = document.createElement("p");
            currencyElement.textContent = `Currency: ${country.currency}`;

            const regionsElement = document.createElement("p");
            regionsElement.textContent = `Regions: ${country.regions}`;

            const wikiElement = document.createElement("a");
            wikiElement.href = country.wikiUrl;
            wikiElement.textContent = "Wikipedia Page"

            //append elements 
            resItem.appendChild(img);
            resItem.appendChild(lineBreak);
            resItem.appendChild(nameElement);
            resItem.appendChild(currencyElement);
            resItem.appendChild(regionsElement);
            resItem.appendChild(wikiElement);

            //append list item to the results list
            resList.appendChild(resItem);
        }

        matchesContainer.appendChild(resList);
    }
}

document.getElementById("searchByName").addEventListener("input",searchCountryUsingName);
document.getElementById("searchByCurrencyCode").addEventListener("input", searchCountryUsingCurrencyCode);