// Validation functions
let navBorder = document.querySelectorAll(".wrap-nav>a");
let section2=false;

const arr = [
    {
        name: "General Service",
        price: "899/-",
        list: ['voltage check', 'v beltcheck', 'motor check', 'pcb check', 'mcb check', 'Lubrication', 'wiring check']
    },
    {
        name: "Repair",
        price: "799/-",
        list: ['voltage check', 'v beltcheck', 'motor check', 'pcb check', 'mcb check', 'Lubrication', 'wiring check']
    },
    {
        name: "Installation",
        price: "1099/-",
        list: ['voltage check', 'v beltcheck', 'motor check', 'pcb check', 'mcb check', 'Lubrication', 'wiring check']
    },
]


function sectionState(x) {
    Array.from(navBorder).map((vl)=>{
        vl.classList.remove("navBorder")
    })
    let state = Array.from(document.getElementsByTagName("section"))
    state.map((val) => {
        val.classList.add("unactiveSection");
        val.classList.remove("activeSection");
    })


}
function Step1() {
    sectionState(1);
    navBorder[0].classList.add("navBorder")
    document.querySelector(".section1").classList.remove("unactiveSection")
    document.querySelector(".section1").classList.add("activeSection");
    document.getElementById("btn1").innerHTML="Proceed"
    document.getElementById('btn1').onclick=null;
    document.getElementById('btn1').addEventListener('click', function () {
       
        Step2();
        
    });


}

function Step2() {
    
    
        // Check if step 1 is completed before allowing the user to proceed to step 2
        if (!isStep1Completed()) {
            alert("Please complete Step 1 before proceeding to Step 2.");
            return;
        }
    
        // ... rest of your Step2 function logic ...
    
    
    
   
    sectionState(0);
    if(document.querySelector(".section2>.step2").children.length==0){
        Section2();
    }
    navBorder[0].addEventListener('click',()=>{
        Step1();
    })
    

    document.getElementById("btn1").innerHTML="Proceed"


    navBorder[1].classList.add("navBorder");
    document.querySelector(".section2").classList.remove("unactiveSection");
    document.querySelector(".section2").classList.add("activeSection")
    


}
function Step3(bill,price) {
    console.log("I am here")
    console.log(price)
    console.log(bill)
    sectionState(1);
    navBorder[2].classList.add("navBorder");
    document.querySelector(".section3").classList.remove("unactiveSection");
    document.querySelector(".section3").classList.add("activeSection");
    Section3(bill,price);
    document.getElementById("btn1").innerHTML="Pay Now"
    navBorder[0].addEventListener('click',()=>{
        Step1();
    })
    navBorder[1].addEventListener('click',()=>{
        Step2();
    })
}

function isStep1Completed() {
    // Add your logic to check if step 1 is completed here
    // For example, you can check if all required fields in step 1 are filled out
    var city = document.getElementById("city").value;
    var code = document.getElementById("code").value;
    var brand = document.getElementById("brand").value;
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;

    // Check if any of the required fields in step 1 are empty
    if (city === "" || code === "" || brand === "" || name === "" || phone === "" || email === "") {
        return false; // Step 1 is not completed
    }

    return true; // Step 1 is completed
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
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(email)) {
        setError(emailInput, "Please enter a valid email address.");
    } else {
        clearError(emailInput);
    }
}
function validatePhone() {
    var phoneInput = document.getElementById("phone");
    var phone = phoneInput.value.trim();
    var phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
        setError(phoneInput, "Please enter a valid 10-digit phone number.");
    } else {
        clearError(phoneInput);
    }
}



function validatePincode() {
    var pincodeInput = document.getElementById("code");
    var pincode = pincodeInput.value;
    var pincodePattern = /^[0-9]{6}$/;

    if (!pincodePattern.test(pincode)) {
        setError(pincodeInput, "Please enter a valid 6-digit pincode.");
    } else {
        clearError(pincodeInput);
    }
}

// Utility functions
function setError(input, message) {
    var errorDiv = input.nextElementSibling;
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
    const step2 = document.querySelector(".step2")
    arr.map((vl) => {
        innerDiv = document.createElement("div");
        innerDiv.setAttribute('class', 'innerDiv');

        let first=
        `<h1>${vl.name}</h1>
        <h2>${vl.price}</h2>
        `
        let second=""
        vl.list.map((value)=>{
            second+=`<p>${value}</p>`
        })
        let wrapSecond=document.createElement("div");
        let wrapFirst=document.createElement("div");
        wrapFirst.innerHTML=`${first}`
        wrapSecond.innerHTML=`${second}`
        innerDiv.appendChild(wrapFirst)
        innerDiv.appendChild(wrapSecond)
        wrapSecond.className="wrapSecond"
        wrapFirst.className="wrapFirst"
        step2.appendChild(innerDiv);
    })

    innerDivState=()=>{
        Array.from(document.querySelectorAll(".innerDiv")).map((vl)=>{
            vl.classList.remove("activeInnerDiv")
        })


    }
    Array.from(document.querySelectorAll(".innerDiv")).map((vl)=>{
        vl.addEventListener('click',(e)=>{
            e.stopPropagation();
            innerDivState();
            let bubble;

            if(e.target.className==='wrapSecond' || e.target.className==="wrapFirst") {
                e.target.parentElement.classList.add("activeInnerDiv");
                bubble=e.target.parentElement;
            }
            else if(e.target.className === 'innerDiv') {
                e.target.classList.add("activeInnerDiv")
                bubble=e.target;
            }
            else{
                e.target.parentElement.parentElement.classList.add("activeInnerDiv");
                bubble=e.target.parentElement.parentElement;
            
            }
            if(document.querySelector(".section2").classList.contains("activeSection")) {
                console.log("i am here")


            document.getElementById("btn1").addEventListener('click',()=>{
                console.log(document.querySelector(".section1").classList.contains("activeSection"))
                if(document.querySelector(".section1").classList.contains("activeSection")) {
                    Step2();
                    }
                    else{
                let bill=bubble.children[0].firstElementChild.textContent
                let price=bubble.children[0].lastElementChild.textContent
                Step3(bill,price);
                    }
            })
        }

           
        },true)
    })
}

//Section-3
function Section3(bill, price){
    document.getElementById("bill").innerHTML=bill
    document.getElementById("price").innerHTML=price
}

//Button
document.getElementById('btn1').addEventListener('click', function () {
    if(document.querySelector(".section1").classList.contains("activeSection")) {

    Step2();
    }
});
Step1();
