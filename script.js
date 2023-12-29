//your JS code here. If required.
const formElement = document.getElementById("form")

formElement.addEventListener("submit", (event)=>{
	event.preventDefault();
	let data = {
		firstName: formElement.firstName.value,
		lastName: formElement.lastName.value,
		phoneNumber: formElement.phoneNumber.value,
		emailID: formElement.emailID.value,
	}
    var result = "First Name: " + data.firstName + "\nLast Name: " + data.lastName + "\nPhone Number: " + data.phoneNumber + "\nEmail ID: " + data.emailID;
    alert(result);
})


