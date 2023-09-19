const countriesList =[
    {
        name: "Bahrain", currency: "BHD",
    },
    {
        name: "Bosnia", currency: "BAM",
    },
    {
        name: "Brunei", currency: "BND",
    },
    {
        name: "Georgia", currency:"GEL",
    },
    {
        name: "Greenland", currency:"DKK",
    },
    {
        name: "Iceland", currency:"ISK",
    },
    {
        name: "Mayotte", currency:"EUR",
    },
    {
        name: "Micronesia", currency:"USD",
    },
    {
        name: "New Caledonia", currency: "CFP",
    }, 
    {
        name: "Saint Vincent Grenadines", currency: "XCD",
    }, 
    {
        name: "Samoa", currency: "EUR",
    }, 
    {
        name: "Sierra Leone", currency: "EUR",
    }, 
    {
        name: "South Sudan", currency: "SSP",
    }, 
    {
        name: "Suriname", currency: "SRD",
    }, 
    {
        name: "Tajikistan", currency: "TJS",
    }, 
    {
        name: "Timor-Leste", currency: "USD",
    },
    {
        name: "Togo", currency: "XOF",
    }, 
    {
        name: "Turkmenistan", currency: "TMT",
    },
    {
        name: "Vanuatu", currency: "VUV",
    },
    {
        name: "Wallis and Futuna", currency: "XPF",
    },          
]    

function searchCountryUsingName(){
    const searchValue = document.getElementById("searchByName").value.toLowerCase();
    const results = [];

    for (const country of countriesList){
        if (country.name.toLowerCase().startsWith(searchValue) && results.length < 5){
            results.push(country);
        }
    }

    displayMatches(results);
}

function searchCountryUsingCurrencyCode(){
    const searchValue = document.getElementById("searchByCurrencyCode").value.toUpperCase();
    const results = [];

    for (const country of countriesList){
        if (country.currency.toUpperCase() == searchValue && results.length < 5){
            results.push(country);
        }
    }

    displayMatches(results);
}

function displayMatches(results){
    let message = "Matches Found: \n";

    for(let i =0; i < results.length; i++){
        message += `${results[i].name} - ${results[i].currency}\n`;
    }

    alert (message);
}