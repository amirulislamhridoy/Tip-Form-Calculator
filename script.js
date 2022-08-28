const form = document.getElementById('form')
const cardDiv = document.getElementById('card-div')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const bill = e.target.bill.value
    const people = e.target.people.value
    const service = e.target.service.value

    if(!bill){
        let p = document.createElement('p')
        p.innerText = 'Bill Amount Cannot Be Blank'
        cardDiv.appendChild(p)
    }
    if(!people){
        let p = document.createElement('p')
        p.innerText = 'Number Of Users Must Be Greater Than Zero'
        cardDiv.appendChild(p)
    }
    if(service === 'Choose...'){
        let p = document.createElement('p')
        p.innerText = 'You Must Select A Service'
        cardDiv.appendChild(p)
    }
    setTimeout(() => {
        cardDiv.innerHTML = ''
    }, 2000)
})