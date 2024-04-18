loginNameHandler = () => {
    selectHandler()
    const login = document.getElementById('login')
    const username = localStorage.getItem('username');

    if(username){
        login.innerHTML = username
        login.href = "profile.html"
    } 
}

const cities = ['adana', 'izmir', 'ankara']

selectHandler = () => {
    const fromCities = document.getElementById('from')
    const toCities = document.getElementById('to')
    cities.forEach(city => {
        const cityElement = document.createElement("option")
        const textNode = document.createTextNode(city)
        cityElement.appendChild(textNode)
        cityElement.setAttribute("value", city)
        let cloneCityElement = cityElement.cloneNode(true) 
        fromCities.appendChild(cityElement)
        toCities.appendChild(cloneCityElement)
    });
}

const counter = document.getElementById("counter")
let count = Number(counter.innerHTML)
decPassenger = () => {
    if(count>1) {
        count--
        counter.innerHTML = count
    }
}
incPassenger = () => {
    count++
    counter.innerHTML = count
}

let errorMessageCounter = 0
errorMessageHandler = () => {
    if (errorMessageCounter==0) {
        const errorMessage = document.createElement("p")
        const textNode = document.createTextNode("Invalid Choice")
        errorMessage.appendChild(textNode)
        errorMessageCounter++
        return errorMessage
    } else return ""
}

flightHandler = () => {
    const fromCity = document.getElementById("from").value
    const toCity = document.getElementById("to").value
    let departDate = document.getElementById("depart-date").value
    let returnDate = document.getElementById("return-date").value
    console.log(departDate<returnDate)
    const passenger = document.getElementById("counter").innerHTML
    if(fromCity==toCity || !departDate || !returnDate || departDate>returnDate) {
        const searchFlightDiv = document.querySelector(".search-flight")
        searchFlightDiv.append(errorMessageHandler())
    } else {
        localStorage.setItem("fromCity", fromCity)
        localStorage.setItem("toCity", toCity)
        localStorage.setItem("departDate", departDate)
        localStorage.setItem("returnDate", returnDate)
        localStorage.setItem("passenger", passenger)
        window.location.href="flights.html"
    }
}