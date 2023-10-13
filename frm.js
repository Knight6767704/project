let navBorder = document.querySelectorAll(".wrap-nav>a");
let section2 = false;
let formObject = {}
let formArr = []
let stepArr3=[document.getElementById("date"),document.getElementById("response"),document.getElementById("address")]

document.getElementById("previous").style.display = "none"
const animationData = { "nm": "Checklist 2", "mn": "", "layers": [{ "ty": 4, "nm": "Checklist", "mn": "", "sr": 1, "st": 0, "op": 720, "ip": 0, "hd": false, "cl": "", "ln": "", "ddd": 0, "bm": 0, "tt": 0, "hasMask": false, "td": 0, "ao": 0, "ks": { "a": { "a": 0, "k": [297.587, 298.119, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 }, "sk": { "a": 0, "k": 0 }, "p": { "a": 0, "k": [259.587, 260.119, 0], "ix": 2 }, "sa": { "a": 0, "k": 0 }, "o": { "a": 1, "k": [{ "o": { "x": 0.333, "y": 0 }, "i": { "x": 0.667, "y": 1 }, "s": [100], "t": 50 }, { "o": { "x": 0.167, "y": 0.167 }, "i": { "x": 0.833, "y": 0.833 }, "s": [0], "t": 62 }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 } }, "ef": [], "shapes": [{ "ty": "gr", "bm": 0, "cl": "", "ln": "", "hd": false, "mn": "ADBE Vector Group", "nm": "Group 1", "ix": 1, "cix": 2, "np": 2, "it": [{ "ty": "sh", "bm": 0, "cl": "", "ln": "", "hd": false, "mn": "ADBE Vector Shape - Group", "nm": "Path 1", "ix": 1, "d": 1, "ks": { "a": 0, "k": { "c": false, "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[54.754, -36.121], [-17.487, 36.12], [-54.754, -1.147]] }, "ix": 2 } }, { "ty": "st", "bm": 0, "cl": "", "ln": "", "hd": false, "mn": "ADBE Vector Graphic - Stroke", "nm": "Stroke 1", "lc": 2, "lj": 2, "ml": 1, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 23, "ix": 5 }, "d": [], "c": { "a": 0, "k": [1, 1, 1], "ix": 3 } }, { "ty": "tr", "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "p": { "a": 0, "k": [294.971, 298.679], "ix": 2 }, "r": { "a": 0, "k": 0, "ix": 6 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "o": { "a": 0, "k": 100, "ix": 7 } }] }, { "ty": "tm", "bm": 0, "cl": "", "ln": "", "hd": false, "mn": "ADBE Vector Filter - Trim", "nm": "Trim Paths 1", "ix": 2, "e": { "a": 0, "k": 100, "ix": 2 }, "o": { "a": 0, "k": 0, "ix": 3 }, "s": { "a": 1, "k": [{ "o": { "x": 0.333, "y": 0 }, "i": { "x": 0, "y": 1 }, "s": [100], "t": 24 }, { "o": { "x": 0.167, "y": 0.167 }, "i": { "x": 0.833, "y": 0.833 }, "s": [0], "t": 36 }], "ix": 1 }, "m": 1 }], "ind": 0 }, { "ty": 4, "nm": "Cricle", "mn": "", "sr": 1, "st": 0, "op": 720, "ip": 0, "hd": false, "cl": "", "ln": "", "ddd": 0, "bm": 0, "tt": 0, "hasMask": false, "td": 0, "ao": 0, "ks": { "a": { "a": 0, "k": [-7.627, -7.691, 0], "ix": 1 }, "s": { "a": 1, "k": [{ "o": { "x": 0.167, "y": 0 }, "i": { "x": 0.667, "y": 1 }, "s": [124.222, 124.222, 100], "t": 18 }, { "o": { "x": 0.333, "y": 0 }, "i": { "x": 0.667, "y": 1 }, "s": [134.222, 134.222, 100], "t": 20 }, { "o": { "x": 0.333, "y": 0 }, "i": { "x": 0.667, "y": 1 }, "s": [114.222, 114.222, 100], "t": 22 }, { "o": { "x": 0.167, "y": 0.167 }, "i": { "x": 0.833, "y": 0.833 }, "s": [124.222, 124.222, 100], "t": 24 }], "ix": 6 }, "sk": { "a": 0, "k": 0 }, "p": { "a": 0, "k": [260, 260, 0], "ix": 2 }, "sa": { "a": 0, "k": 0 }, "o": { "a": 1, "k": [{ "o": { "x": 0.333, "y": 0 }, "i": { "x": 0.667, "y": 1 }, "s": [100], "t": 50 }, { "o": { "x": 0.167, "y": 0.167 }, "i": { "x": 0.833, "y": 0.833 }, "s": [0], "t": 62 }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 } }, "ef": [], "shapes": [{ "ty": "gr", "bm": 0, "cl": "", "ln": "", "hd": false, "mn": "ADBE Vector Group", "nm": "Ellipse 1", "ix": 1, "cix": 2, "np": 4, "it": [{ "ty": "el", "bm": 0, "cl": "", "ln": "", "hd": false, "mn": "ADBE Vector Shape - Ellipse", "nm": "Ellipse Path 1", "d": 1, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "s": { "a": 0, "k": [178.46, 178.46], "ix": 2 } }, { "ty": "tm", "bm": 0, "cl": "", "ln": "", "hd": false, "mn": "ADBE Vector Filter - Trim", "nm": "Trim Paths 1", "ix": 2, "e": { "a": 1, "k": [{ "o": { "x": 0.333, "y": 0 }, "i": { "x": 0.239, "y": 1 }, "s": [0], "t": 0 }, { "o": { "x": 0.167, "y": 0.167 }, "i": { "x": 0.833, "y": 0.833 }, "s": [100], "t": 24 }], "ix": 2 }, "o": { "a": 0, "k": 0, "ix": 3 }, "s": { "a": 0, "k": 0, "ix": 1 }, "m": 1 }, { "ty": "st", "bm": 0, "cl": "", "ln": "", "hd": false, "mn": "ADBE Vector Graphic - Stroke", "nm": "Stroke 1", "lc": 2, "lj": 2, "ml": 1, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 10, "ix": 5 }, "d": [], "c": { "a": 0, "k": [0.0706, 0.0706, 0.0706], "ix": 3 } }, { "ty": "fl", "bm": 0, "cl": "", "ln": "", "hd": false, "mn": "ADBE Vector Graphic - Fill", "nm": "Fill 1", "c": { "a": 0, "k": [0.0706, 0.0706, 0.0706], "ix": 4 }, "r": 1, "o": { "a": 1, "k": [{ "o": { "x": 0.333, "y": 0 }, "i": { "x": 0, "y": 1 }, "s": [0], "t": 22 }, { "o": { "x": 0.167, "y": 0.167 }, "i": { "x": 0.833, "y": 0.833 }, "s": [100], "t": 24 }], "ix": 5 } }, { "ty": "tr", "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "p": { "a": 0, "k": [-7.627, -7.691], "ix": 2 }, "r": { "a": 0, "k": 0, "ix": 6 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "o": { "a": 0, "k": 100, "ix": 7 } }] }], "ind": 1 }, { "ty": 4, "nm": "Line", "mn": "", "sr": 1, "st": 0, "op": 720, "ip": 28, "hd": false, "cl": "", "ln": "", "ddd": 0, "bm": 0, "tt": 0, "hasMask": false, "td": 0, "ao": 0, "ks": { "a": { "a": 0, "k": [298, 298, 0], "ix": 1 }, "s": { "a": 1, "k": [{ "o": { "x": 0.333, "y": 0 }, "i": { "x": 0, "y": 1 }, "s": [46, 46, 100], "t": 28 }, { "o": { "x": 0.167, "y": 0.167 }, "i": { "x": 0.833, "y": 0.833 }, "s": [100, 100, 100], "t": 50 }], "ix": 6 }, "sk": { "a": 0, "k": 0 }, "p": { "a": 0, "k": [260, 260, 0], "ix": 2 }, "sa": { "a": 0, "k": 0 }, "o": { "a": 1, "k": [{ "o": { "x": 0.333, "y": 0 }, "i": { "x": 0.667, "y": 1 }, "s": [0], "t": 28 }, { "o": { "x": 0.333, "y": 0 }, "i": { "x": 0.667, "y": 1 }, "s": [100], "t": 39 }, { "o": { "x": 0.167, "y": 0.167 }, "i": { "x": 0.833, "y": 0.833 }, "s": [0], "t": 50 }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 } }, "ef": [], "shapes": [{ "ty": "gr", "bm": 0, "cl": "", "ln": "", "hd": false, "mn": "ADBE Vector Group", "nm": "Group 1", "ix": 1, "cix": 2, "np": 2, "it": [{ "ty": "sh", "bm": 0, "cl": "", "ln": "", "hd": false, "mn": "ADBE Vector Shape - Group", "nm": "Path 1", "ix": 1, "d": 1, "ks": { "a": 0, "k": { "c": true, "i": [[-120.208, 0], [0, -120.208], [120.207, 0], [0, 120.208]], "o": [[120.207, 0], [0, 120.208], [-120.208, 0], [0, -120.208]], "v": [[0, -217.655], [217.655, 0], [0, 217.655], [-217.655, 0]] }, "ix": 2 } }, { "ty": "st", "bm": 0, "cl": "", "ln": "", "hd": false, "mn": "ADBE Vector Graphic - Stroke", "nm": "Stroke 1", "lc": 1, "lj": 1, "ml": 10, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 2, "ix": 5 }, "d": [], "c": { "a": 0, "k": [0.0706, 0.0706, 0.0706], "ix": 3 } }, { "ty": "tr", "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "p": { "a": 0, "k": [297.587, 298.119], "ix": 2 }, "r": { "a": 0, "k": 0, "ix": 6 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "o": { "a": 0, "k": 100, "ix": 7 } }] }], "ind": 2 }, { "ty": 4, "nm": "Shadow", "mn": "", "sr": 1, "st": 0, "op": 720, "ip": 22, "hd": false, "cl": "", "ln": "", "ddd": 0, "bm": 0, "tt": 0, "hasMask": false, "td": 0, "ao": 0, "ks": { "a": { "a": 0, "k": [298, 298, 0], "ix": 1 }, "s": { "a": 1, "k": [{ "o": { "x": 0.333, "y": 0 }, "i": { "x": 0, "y": 1 }, "s": [60, 60, 100], "t": 22 }, { "o": { "x": 0.167, "y": 0.167 }, "i": { "x": 0.833, "y": 0.833 }, "s": [100, 100, 100], "t": 44 }], "ix": 6 }, "sk": { "a": 0, "k": 0 }, "p": { "a": 0, "k": [260, 260, 0], "ix": 2 }, "sa": { "a": 0, "k": 0 }, "o": { "a": 1, "k": [{ "o": { "x": 0.333, "y": 0 }, "i": { "x": 0.667, "y": 1 }, "s": [0], "t": 22 }, { "o": { "x": 0.333, "y": 0 }, "i": { "x": 0.667, "y": 1 }, "s": [100], "t": 33 }, { "o": { "x": 0.167, "y": 0.167 }, "i": { "x": 0.833, "y": 0.833 }, "s": [0], "t": 44 }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 } }, "ef": [], "shapes": [{ "ty": "gr", "bm": 0, "cl": "", "ln": "", "hd": false, "mn": "ADBE Vector Group", "nm": "Group 1", "ix": 1, "cix": 2, "np": 2, "it": [{ "ty": "sh", "bm": 0, "cl": "", "ln": "", "hd": false, "mn": "ADBE Vector Shape - Group", "nm": "Path 1", "ix": 1, "d": 1, "ks": { "a": 0, "k": { "c": true, "i": [[-94.797, 0], [0, -94.797], [94.797, 0], [0, 94.798]], "o": [[94.797, 0], [0, 94.798], [-94.797, 0], [0, -94.797]], "v": [[0, -171.646], [171.646, 0], [0, 171.646], [-171.646, 0]] }, "ix": 2 } }, { "ty": "fl", "bm": 0, "cl": "", "ln": "", "hd": false, "mn": "ADBE Vector Graphic - Fill", "nm": "Fill 1", "c": { "a": 0, "k": [0.0706, 0.0706, 0.0706], "ix": 4 }, "r": 1, "o": { "a": 0, "k": 100, "ix": 5 } }, { "ty": "tr", "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "p": { "a": 0, "k": [297.587, 298.119], "ix": 2 }, "r": { "a": 0, "k": 0, "ix": 6 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "o": { "a": 0, "k": 100, "ix": 7 } }] }], "ind": 3 }], "ddd": 0, "h": 520, "w": 520, "meta": { "a": "", "k": "", "d": "", "g": "@lottiefiles/toolkit-js 0.17.4", "tc": "#ffffff" }, "v": "5.7.12", "fr": 24, "op": 63, "ip": 0, "assets": [] }
let flagCode=false;

const arr = [
    {
        name: "General Service",
        price: "899/-",
        list: ['VoltageCheck ', ' V beltCheck', 'Motor ', 'PCB Check', 'MCB Check', 'Lubrication', 'wiring ']
    },
    {
        name: "Repair",
        price: "799/-",
        list: [' VoltageCheck', ' V beltcheck', 'Motor ', 'PCB Check', 'MCB check', 'Lubrication', 'wiring ']
    },
    {
        name: "Installation",
        price: "1099/-",
        list: ['VoltageCheck ', ' V beltcheck', 'Motor ', 'PCB check', 'MCB Check', 'Lubrication', 'wiring ']
    }
]


function initalForm() {
    formArr.push(document.getElementById("city"),document.getElementById("code"), document.getElementById("product"),document.getElementById("name"), document.getElementById("email"), document.getElementById("phone"))
    formArr.forEach((vl) => {
        
        clearError(vl);

    })

}
function stepForm3(){
    stepArr3.forEach((vl)=>{
        clearError(vl);
    })
    
}
var animationContainer = document.getElementById("logo");
var animationSettings = {
    container: animationContainer,
    renderer: 'svg', // You can choose 'svg', 'canvas', or 'html' as the renderer
    loop: true,       // Set to true for looping
    autoplay: true,   // Set to true to start playing automatically
    animationData: animationData // Your JSON data here
};

var animation = lottie.loadAnimation(animationSettings);



function sectionState(x) {
    Array.from(navBorder).map((vl) => {
        vl.classList.remove("navBorder")
    })
    let state = Array.from(document.getElementsByTagName("section"))
    state.map((val) => {
        val.classList.add("unactiveSection");
        val.classList.remove("activeSection");
    })
}

// Define an array of valid PIN codes for the specified cities
const validPincodes = {
    Hyderabad: ["500001", "500036", "500072"],
    Chennai: ["600001", "600028", "600102"],
    Coimbatore: ["641001", "641006", "641045"],
    Trivandrum: ["695001", "695014", "695023"],
    Visakhapatnam: ["530001", "530027", "530045"],
    Vijayawada: ["520001", "520004", "520010"],
    Nagpur: ["440001", "440012", "440020"],
    Kolkata: ["700001", "700027", "700078"],
    Mumbai: ["400001", "400063", "400086"],
    Bengaluru: ["560001", "560040", "560100"],
    Mysore: ["570001", "570016", "570023"],
    Puducherry: ["605001", "605005", "605008"]
};

// Function to validate the entered PIN code
function validateCode(city, pincode) {
    if (validPincodes[city] && validPincodes[city].includes(pincode)) {
        return true
    } else {
        return false;
    }
}



function Changecity(e) {
    var citySelect = document.getElementById("city");
    var selectedCity = citySelect.value;
    formObject.city = selectedCity;
}

function validatePincode() {
    var pincodeInput = document.getElementById("code");
    var pincode = pincodeInput.value;
    var pincodePattern = /^[0-9]{6}$/;

    if (pincode.length != 0) {
        if (formObject.hasOwnProperty('city')) {

            if (!pincodePattern.test(pincode)) {
                setError(pincodeInput, "Please enter a valid 6-digit pincode.");
                
            } else {
                if (validateCode(formObject.city, pincode)) {
                    clearError(pincodeInput);
                    flagCode=true;
                }
                else {
                    //i am here
                    let pin = pincode.slice(0, 4);
                    let flag = false;
                    console.log(pin)
                    validPincodes[formObject.city].map((vl) => {
                        if (vl.slice(0, 4) == pin) {
                            flag = true;
                        }
                    })


                    if (flag) {
                        setError(pincodeInput, "Oops! Looks like your area is not covered.")
                    }
                    else {
                        setError(pincodeInput, "Drop in an email we will get back to you.")
                    }

                }

            }
        }
        else {
            setError(pincodeInput, 'Please select the City')
        }
    }
    else {

        clearError(pincodeInput);
    }

}
let flagAddress=false;
function validateAddress() {
    let addressInput = document.getElementById("address");
    let address=addressInput.value;
    const addressRegex =/^[A-Za-z0-9\s\.,#-]+$/;

    if(address.length!=0) {
        
    //     if(addressRegex.test(address)){

    //         setError(addressInput,'Invalid address')
    //         flagAddress=false;
    //     }
    //     else{
    //         clearError(addressInput)
    //         flagAddress=true;

    //     }

    // }
    // else{
    //     clearError(addressInput);
    // }

    clearError(addressInput)
    }
}
//STEPS 1,2,3

function Step1() {
    document.getElementById("btn1").style.display="block"
    document.getElementById("btn2").style.display="none"
    document.getElementById("btn3").style.display="none"

    sectionState(1);
    navBorder[0].classList.add("navBorder")
    document.querySelector(".section1").classList.remove("unactiveSection")
    document.querySelector(".section1").classList.add("activeSection");
    document.getElementById("btn1").innerHTML = "Proceed"
    document.getElementById('btn1').onclick = null;
    document.getElementById('btn1').addEventListener('click', function () {
        if (validateBtn()) {

            Step2();
        }
    });

}
function Step2() {
    sectionState(0);
    document.getElementById("btn1").style.display="none"
    document.getElementById("btn2").style.display="none"
    document.getElementById("btn3").style.display="block"
    document.getElementById("previous").style.display = "block"


    if (document.querySelector(".section2>.step2").children.length == 0) {
        Section2();
    }
    navBorder[0].addEventListener('click', () => {
        Step1();
    })

    document.getElementById("btn1").innerHTML = "Proceed"
    navBorder[1].classList.add("navBorder");
    document.querySelector(".section2").classList.remove("unactiveSection");
    document.querySelector(".section2").classList.add("activeSection")


}
function Step3(bill, price) {
    document.getElementById("btn2").style.display="block"
    document.getElementById("btn1").style.display="none"
    document.getElementById("btn3").style.display="none"


    console.log("I am here")
    formObject['total'] = parseInt(price) - 200;
    

    console.log(price)
    console.log(bill)
    sectionState(1);
    navBorder[2].classList.add("navBorder");
    document.querySelector(".section3").classList.remove("unactiveSection");
    document.querySelector(".section3").classList.add("activeSection");
    Section3(bill, price);

    document.querySelector(".step-3 > .form-group>#date").addEventListener('click', (e) => {
        e.target.showPicker()
    });


    navBorder[0].addEventListener('click', () => {
        Step1();
    })
    navBorder[1].addEventListener('click', () => {
        Step2();
    })
}

function Step4() {
    sectionState(2);
    document.getElementById("btn1").style.display="none"
    document.getElementById("btn2").style.display="none"
    document.getElementById("previous").style.display = "none"
    document.getElementById("navLink").style.display = "none";
    document.querySelector(".first").style.display = "none";
    document.querySelector(".section4").classList.remove("unactiveSection");
    document.querySelector(".section4").classList.add("activeSection")


    let info2 = document.querySelectorAll(".info2>h1")
    info2[0].children[0].textContent = formObject['total'] + "/-";
    info2[1].children[0].textContent = formObject['date'] + "/-";

}


function validateName() {
    var nameInput = document.getElementById("name");
    var name = nameInput.value.trim();

    if (name === "") {
        setError(nameInput, "Please enter valid name.");

    } else {
        clearError(nameInput);
    }

}

function validateEmail() {
    var emailInput = document.getElementById("email");
    var email = emailInput.value.trim();
    if (email.length != 0) {
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!emailPattern.test(email)) {
            setError(emailInput, "Please enter a valid email address.");
        } else {
            clearError(emailInput);
        }
    }
    else {
        clearError(emailInput)
    }
}
function validatePhone() {
    var phoneInput = document.getElementById("phone");
    var phone = phoneInput.value.trim();
    if (phone.length != 0) {
        var phonePattern = /^[0-9]{10}$/;

        if (!phonePattern.test(phone)) {
            setError(phoneInput, "Please enter a valid 10-digit phone number.");
        } else {
            clearError(phoneInput);
        }
    }
    else {
        clearError(phoneInput)
    }
}

function selFun(e) {
if(e.value.length!=0) {
    clearError(e)
}
}
document.getElementById("defaultCheck1").addEventListener("click",(e)=>{
    if(e.target.checked) {
        clearError(e.target.nextElementSibling);
    }
})




// Utility functions
function setError(input, message) {
    var errorDiv = input.nextElementSibling;
    console.log(errorDiv)
    errorDiv.textContent = message;
    errorDiv.style.display = "block";
}

function clearError(input) {
    var errorDiv = input.nextElementSibling;
    errorDiv.textContent = "";
    errorDiv.style.display = "none";
}

// Attach event listeners for validation
document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("phone").addEventListener("blur", validatePhone);
document.getElementById("code").addEventListener("blur", validatePincode)


//Section-2   
function Section2() {
    let bubble;

    const step2 = document.querySelector(".step2")
    arr.map((vl) => {
        innerDiv = document.createElement("div");
        innerDiv.setAttribute('class', 'innerDiv');

        let first =
            `<h1>${vl.name}</h1>
        <h2>${vl.price}</h2>
        `
        let second = ""
        vl.list.map((value) => {
            second += `<div class="wrapSecond-inner">
            <img src="./checkmark-24.png"/>
            <span>${value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()}</span>
            </div>`
        })
        let wrapSecond = document.createElement("div");
        let wrapFirst = document.createElement("div");
        wrapFirst.innerHTML = `${first}`
        wrapSecond.innerHTML = `${second}`
        innerDiv.appendChild(wrapFirst)
        innerDiv.appendChild(wrapSecond)
        wrapSecond.className = "wrapSecond"
        wrapFirst.className = "wrapFirst"
        step2.appendChild(innerDiv);
    })

    innerDivState = () => {
        Array.from(document.querySelectorAll(".innerDiv")).map((vl) => {
            vl.classList.remove("activeInnerDiv")
        })


    }
    Array.from(document.querySelectorAll(".innerDiv")).map((vl) => {
        vl.addEventListener('click', (e) => {
            innerDivState();
            if (e.target.className === 'wrapSecond' || e.target.className === "wrapFirst") {
                e.target.parentElement.classList.add("activeInnerDiv");
                bubble = e.target.parentElement;
            }
            else if(e.target.tagName==="H1"||e.target.tagName==="H2"){
                console.log("first");
                e.target.parentElement.parentElement.classList.add("activeInnerDiv");
                bubble = e.target.parentElement;
            }
            else if (e.target.className === 'innerDiv') {
                e.target.classList.add("activeInnerDiv")
                bubble = e.target;
            }
            else if (e.target.className == 'wrapSecond-inner') {
                e.target.parentElement.parentElement.classList.add("activeInnerDiv")
                bubble = e.target.parentElement.parentElement;
            }
            else {
                if (e.target.parentElement.parentElement.parentElement.className == "innerDiv") {
                    console.log(e.target.parentElement.parentElement.parentElement)
                    e.target.parentElement.parentElement.parentElement.classList.add("activeInnerDiv");
                    bubble = e.target.parentElement.parentElement.parentElement;

                }
                console.log(e.target.parentElement.parentElement.parentElement)



            }
            if (document.querySelector(".section2").classList.contains("activeSection")) {
                const step2Element = document.querySelector(".step2");
                if (step2Element.classList.contains("activeInnerDiv")) {
                    step2Element.classList.remove("activeSection");

                }

                document.getElementById("btn3").addEventListener('click', () => {
                    console.log("button2")

                    console.log(document.querySelector(".section1").classList.contains("activeSection"))
                    if (document.querySelector(".section1").classList.contains("activeSection")) {
                        Step2();
                    }
                    else {
                        let bill = bubble.children[0].firstElementChild.textContent
                        let price = bubble.children[0].lastElementChild.textContent
                        console.log(bill)
                        console.log(price)
                        Step3(bill, price);
                    }
                })
            }


        }, true)
    })

}
function validateBtnStep3(){
    let isValid = true;
    if (document.getElementsByClassName("error")[0].textContent.length != 0) {
        return false;
    }
    for (let i = 0; i < stepArr3.length; i++) {
        let vl = stepArr3[i];

        if (vl.value.length === 0) {
            setError(vl, "*Required");
            isValid = false;
        }
    }
    
    
    return isValid;
}
//Section-3
function Section3(bill, price) {
    
    let total = parseInt(price) - 200;
    document.getElementById("bill").innerHTML = bill
    document.getElementById("price").innerHTML = price
    document.getElementById("paid-amt").innerHTML = total + "/-"
    
    if (document.querySelector(".section3").classList.contains("activeSection")) {
       let step3Group=document.querySelectorAll(".step3-group");
       console.log(step3Group)
        document.getElementById("btn2").addEventListener("click", (e) => {
            let a=step3Group[0].children[0].value.length
            let b=step3Group[1].children[0].value.length
            let c=step3Group[2].children[0].value.length
            let d=step3Group[3].children[0].checked


            var cd = new Date();

            // // Get the current year, month, and day
            var cy = cd.getFullYear();
            var cm = (cd.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-indexed
            var cd = cd.getDate().toString().padStart(2, '0');

            // // Format the date as "YYYY-MM-DD" for the min attribute
            var fD = `${cy}-${cm}-${cd}`;
            console.log(stepArr3[2])
            if(validateBtnStep3()) {

            if (document.querySelector(".section3").classList.contains("activeSection") ) {
                formObject['date'] = fD;
                console.log(formObject)
                console.log(e.target.textContent)
                Step4()
            }
        }
        })
    }
}



const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);
const year = tomorrow.getFullYear();
const month = (tomorrow.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based, so add 1
const date = tomorrow.getDate().toString().padStart(2, '0');
const formattedDate = `${year}-${month}-${date}`;
// Set the min attribute of the input element
document.getElementById("date").setAttribute("min", formattedDate);


function validateBtn() {
    let arr4 = ["Please select a city","Please enter a valid 6-digit pincode.", "Please select a product","Please enter valid name.", "Please enter a valid email address.", "Please enter a valid 10-digit phone number."]
    let isValid = true;
    if (document.getElementsByClassName("error")[0].textContent.length != 0) {
        return false;
    }
    for (let i = 0; i < formArr.length; i++) {
        let vl = formArr[i];
        console.log(vl)

        if (vl.value.length === 0) {
            setError(vl, arr4[i]);
            isValid = false;
        }
    }
    return isValid;

}

document.getElementById('btn1').addEventListener('click', function () {
    if (document.querySelector(".section1").classList.contains("activeSection")) {

        if (validateBtn()) {
            console.log("Iam inside")
            Step2();
        }



    }
});
function Previous() {
    document.getElementById("previous").style.display = "none"
}

document.getElementById("previous").addEventListener('click', (e) => {


    if (navBorder[1].classList.contains("navBorder")) {
        Step1();
        Previous();
    }
    if (navBorder[2].classList.contains("navBorder")) {
        Step2();
    }


})





Step1();
initalForm();

