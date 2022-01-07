const cardContainer = document.getElementById("cardContainer")

let getRequest = async () => {
    cardContainer.innerHTML = '';

    let getRequest = await fetch("https://tallboye2.herokuapp.com/vindmolle/").then(response => response.json());

    for (let i = 0; i < getRequest.Windmills.length; i++) {
        let card = document.createElement("card")
        card.className = "databaseCard"
        card.id = getRequest.Windmills[i].uniqueID
        let ID = document.createTextNode("uniqueID: " + getRequest.Windmills[i].uniqueID)
        let NAVN = document.createTextNode("Navn: " + getRequest.Windmills[i].Navn)
        let GPS = document.createTextNode("GPS: " + getRequest.Windmills[i].GPS)
        let MODEL = document.createTextNode("Model: " + getRequest.Windmills[i].Model)

        card.appendChild(ID)
        card.appendChild(document.createElement('br'))
        card.appendChild(NAVN)
        card.appendChild(document.createElement('br'))
        card.appendChild(GPS)
        card.appendChild(document.createElement('br'))
        card.appendChild(MODEL)

        cardContainer.appendChild(card)
        cardContainer.scrollTop = cardContainer.scrollHeight;
    }
}

let postRequest = async () => {
    cardContainer.innerHTML = '';
    let ID = document.getElementById("ID").value
    let NAVN = document.getElementById("NAVN").value
    let GPS = document.getElementById("GPS").value
    let MODEL = document.getElementById("MODEL").value

    let data = {
        "uniqueID": ID,
        "Navn": NAVN,
        "GPS" : GPS,
        "Model": MODEL
    }

    let postRequest = await fetch(`http://tallboye2.herokuapp.com/vindmolle/${ID}`, { //https://tallboye.herokuapp.com/user
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data),
    });

    await getRequest()

}

let updateRequest = async () => {
    cardContainer.innerHTML = '';

    let ID = document.getElementById("ID").value
    let NAVN = document.getElementById("NAVN").value
    let GPS = document.getElementById("GPS").value
    let MODEL = document.getElementById("MODEL").value

    let data = {
        "uniqueID": ID,
        "Navn": NAVN,
        "GPS" : GPS,
        "Model": MODEL
    }

    let updateRequest = await fetch(`http://tallboye2.herokuapp.com/vindmolle/${ID}`, { //https://tallboye.herokuapp.com/user
        method: 'PUT',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data),
    });

    await getRequest()
}

let deleteRequest = async () => {
    cardContainer.innerHTML = '';

    let ID = document.getElementById("ID").value

    let deleteRequest = await fetch(`http://tallboye2.herokuapp.com/vindmolle/${ID}`, { //https://tallboye.herokuapp.com/user
        method: 'DELETE',
    });

    await getRequest()
}

let searchRequest = async () => {
    cardContainer.innerHTML = '';

    let search = document.getElementById("ID").value

    let searchRequest = await fetch(`http://tallboye2.herokuapp.com/vindmolle/${search}`).then(response => response.json());

    console.log(searchRequest)

    let card = document.createElement("card")
    card.className = "databaseCard"
    card.id = searchRequest.windmill.uniqueID
    let ID = document.createTextNode("uniqueID: " + searchRequest.windmill.uniqueID)
    let NAVN = document.createTextNode("Navn: " + searchRequest.windmill.Navn)
    let GPS = document.createTextNode("GPS: " + searchRequest.windmill.GPS)
    let MODEL = document.createTextNode("Model: " + searchRequest.windmill.Model)

    card.appendChild(ID)
    card.appendChild(document.createElement('br'))
    card.appendChild(NAVN)
    card.appendChild(document.createElement('br'))
    card.appendChild(GPS)
    card.appendChild(document.createElement('br'))
    card.appendChild(MODEL)

    cardContainer.appendChild(card)
    cardContainer.scrollTop = cardContainer.scrollHeight;

}

let apiCall = async () => {
    cardContainer.innerHTML = '';

    let searchRequest = await fetch(`https://api.kanye.rest/`).then(response => response.json());

    console.log(searchRequest)

    let card = document.createElement("card")
    card.className = "databaseCard"
    card.id = "quote"
    let text = document.createTextNode(searchRequest.quote)


    card.appendChild(text)
    card.appendChild(document.createElement('br'))

    cardContainer.appendChild(card)
    cardContainer.scrollTop = cardContainer.scrollHeight;

}

function getCookie(name){

    let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) {
        return match[2];
    }
    else {
        console.log('something went wrong');
    }
}