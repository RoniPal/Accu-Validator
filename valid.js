/*
let valid_btn = document.getElementById("valid_btn")  //buttons section
let search_valid = document.getElementById("search_valid")
let result_div = document.querySelector(".result")
let email_btn = document.getElementById("email_btn")   //validate email btn
let phone_btn = document.getElementById("phone_btn")   //validate phone no
let email_input = document.getElementById("email_input")  //input box
let valid_search = document.getElementById("valid_search") //search btn
let again_srh = document.getElementById("again_srh")  //other feature div
let again_valid_btn = document.getElementById("again_valid_btn")  //other feature 
let feature = document.getElementById("feature") // other feature name
let result = document.getElementById("result")  //result div

// show and hide only section
valid_btn.style.display = "flex"
search_valid.style.display = "none"
result_div.style.display = "none"
again_srh.style.display = "none"

//Declear some function

//email btn
let email_callback = () => {
    valid_btn.style.display = "none"
    search_valid.style.display = "flex"
    again_srh.style.display = "flex"

    //search_valid div change
    search_valid.innerHTML = `
    
    <h2>Email Validation</h2>
    <input type="email" placeholder="Email" id="email_input">
    <abbr title="Search"><button id="valid_search"><i class="fa-solid fa-user-check fa-2xl"></i></button></abbr>

    `
}

//phone btn
let phone_call = () => {
    valid_btn.style.display = "none"
    search_valid.style.display = "flex"
    again_srh.style.display = "flex"

    //search_valid div change
    search_valid.innerHTML = `

    <h2>Phone No Validation</h2>
    <input type="number" placeholder="Country Code & Number" id="email_input">
    <abbr title="Search"><button id="valid_search"><i class="fa-solid fa-user-check fa-2xl"></i></button></abbr>

    `

}

//email_btn click
email_btn.addEventListener('click' , email_callback)

//phone_btn click
phone_btn.addEventListener('click' , phone_call)

//again valid btn selection



//result part
/*
//json part schema
let jsonResultSchema_email = {
    "tag": "",
    "free": false,
    "role": false,
    "user": "akshaykumar",
    "email": "akshaykumar@codewithharry.com",
    "score": 0.64,
    "state": "undeliverable",
    "domain": "codewithharry.com",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
} 

let jsonResultSchema_phone = {
    "valid": true,
    "number": "14158586273",
    "local_format": "4158586273",
    "international_format": "+14158586273",
    "country_prefix": "+1",
    "country_code": "US",
    "country_name": "United States of America",
    "location": "Novato",
    "carrier": "AT&T Mobility LLC",
    "line_type": "mobile"
}


//API call
let url
let res
let str = ''

valid_search.addEventListener('click' , async (e) => {
    e.preventDefault()
    result_div.style.display = "flex" 

    if (currentValidation === "email") {
        url = `https://api.emailvalidation.io/v1/info?apikey=ema_live_VtDcH4OkwOcs5xUSZMrYGOCi1n9f9kMWu3oA3cy2&email=${email_input}`
        res = await fetch(url)
        jsonResultSchema_email = await res.json()
        console.log(jsonResultSchema_email)
        blank_drop(jsonResultSchema_email)

    } else {
        url = `https://api.numlookupapi.com/v1/validate/${email_input}?apikey=num_live_kRfS3Tep7EVUTRRGYVjduMxWu4XNYTXWA7z7Be21`
        res = await fetch(url)
        jsonResultSchema_phone = await res.json()
        console.log(jsonResultSchema_phone)
        blank_drop(jsonResultSchema_phone)
    }
})

//Prevent blank datas to show

let blank_drop = (a) =>{

    for (key of Object.keys(a)) {
        if(a[key] !== "" && a[key] !== " "){ 
            str = str + `<div>${key}: ${a[key]}</div>`
        }
    }

    console.log(str)
    result.innerHTML = str //Display in result section
} 

*/




let valid_btn = document.getElementById("valid_btn")  //buttons section
let search_valid = document.getElementById("search_valid")
let result_div = document.querySelector(".result")
let email_btn = document.getElementById("email_btn")   //validate email btn
let phone_btn = document.getElementById("phone_btn")   //validate phone no
let email_input = document.getElementById("email_input").value  //input box
let valid_search = document.getElementById("valid_search") //search btn
let again_srh = document.getElementById("again_srh")  //other feature div
let again_valid_btn = document.getElementById("again_valid_btn")  //other feature 
let feature = document.getElementById("feature") // other feature name
let result = document.getElementById("result")  //result div
let currentValidation = "email";  // Track the current validation type

// Show and hide only sections
valid_btn.style.display = "flex"
search_valid.style.display = "none"
result_div.style.display = "none"
again_srh.style.display = "none"

// Function for email validation UI
let email_callback = () => {
    valid_btn.style.display = "none"
    search_valid.style.display = "flex"
    again_srh.style.display = "flex"
result_div.style.display = "none"
    currentValidation = "email";

    // Change search_valid div content
    search_valid.innerHTML = `
        <h2>Email Validation</h2>
        <input type="email" placeholder="Email" id="email_input">
        <abbr title="Search"><button id="valid_search"><i class="fa-solid fa-user-check fa-2xl"></i></button></abbr>
    `;
    
    // Set the again_srh feature text
    feature.innerHTML = "Phone No.";

    bindSearchButton(); // Bind event listener for search button
}

// Function for phone validation UI
let phone_callback = () => {
    valid_btn.style.display = "none"
    search_valid.style.display = "flex"
    again_srh.style.display = "flex"
result_div.style.display = "none"
    currentValidation = "phone";

    // Change search_valid div content
    search_valid.innerHTML = `
        <h2>Phone No Validation</h2>
        <input type="number" placeholder="Country Code & Number" id="email_input">
        <abbr title="Search"><button id="valid_search"><i class="fa-solid fa-user-check fa-2xl"></i></button></abbr>
    `;
    
    // Set the again_srh feature text
    feature.innerHTML = "Email";

    bindSearchButton(); // Bind event listener for search button
}

// Function to toggle between email and phone validation based on currentValidation
let toggleValidation = () => {
    if (currentValidation === "email") {
        phone_callback();  // Switch to phone validation
    } else {
        email_callback();  // Switch to email validation
    }
}

// Bind the email and phone buttons to their respective functions
email_btn.addEventListener('click', email_callback);
phone_btn.addEventListener('click', phone_callback);

// Bind again_valid_btn to toggle validation function
again_valid_btn.addEventListener('click', toggleValidation);


// Function to bind search button for validation
let bindSearchButton = () => {
    document.getElementById("valid_search").addEventListener("click", async (e) => {
        e.preventDefault();
        result_div.style.display = "flex";
        result.innerHTML = `<img width="50px" src="load.svg" background="none">`
        let email_input = document.getElementById("email_input").value; // Retrieve current input value
        let url, res, data;

        try {
            if (currentValidation === "email") {
                url = `https://api.emailvalidation.io/v1/info?apikey=ema_live_VtDcH4OkwOcs5xUSZMrYGOCi1n9f9kMWu3oA3cy2&email=${email_input}`;
                res = await fetch(url);
                data = await res.json();
                console.log(data);
                blank_drop(data);
            } else {
                url = `https://api.numlookupapi.com/v1/validate/${email_input}?apikey=num_live_kRfS3Tep7EVUTRRGYVjduMxWu4XNYTXWA7z7Be21`;
                res = await fetch(url);
                data = await res.json();
                console.log(data);
                blank_drop(data);
            }
        } catch (error) {
            console.error("API call failed:", error);
            result.innerHTML = `<div>Error fetching data. Please try again later.</div>`;
        }
    });
};

// Prevent blank or undefined data from displaying
let blank_drop = (data) => {
    str = ""; // Reset the display string
    for (let key in data) {
        if (data[key] !== "" && data[key] !== " " && data[key] !== null) {
            str += `<div>${key}: ${data[key]}</div>`;
        }
    }
    result.innerHTML = str; // Display in result section
};


//copyright year change
let currentyear = document.getElementById("copyYear")
actualYera = new Date()
currentyear.innerHTML = actualYera.getFullYear()
