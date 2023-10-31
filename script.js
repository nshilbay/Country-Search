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
    const checkInputValidity = validateInput("searchByName");
    
    if(!checkInputValidity){
        alert("Invalid Input: Only enter letters");
        return;
    }

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

    const checkInputValidity = validateInput("searchByCurrencyCode");
    if(!checkInputValidity){
        alert("Invalid Input: Entry must be three letters & all capitals");
        return;
    }
    const searchValue = document.getElementById("searchByCurrencyCode").value.toUpperCase();
    const results = [];

    for (const country of countriesList){
        if (country.currency.toUpperCase() === searchValue && results.length < 5){
            results.push(country);
        }
    }

    displayMatches(results);
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
            if (/^[A-Z]{3}$/.test(input))
            {
                return true;
            }
        }

        return false;
}

function displayMatches(results){

    if (results.length === 0)
    {
        alert("No Matches Found");
    }
    else{

        let message = "Matches Found: \n";
        for(let i =0; i < results.length; i++){
            message += `${results[i].name} - ${results[i].currency}\n`;
        }
        alert (message);

    }
   
}