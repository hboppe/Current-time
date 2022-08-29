function load() {
    var now = new Date()
    var hour = now.getHours()
    var text = window.document.getElementById('text')
    text.innerHTML = `It is ${hour}h`
    var pic = window.document.getElementById('pic')
    
    var hour = 7

    if (hour >= 0 && hour < 12) { // Morning
        pic.src='./images/morning.jpg'  
        document.body.style.background='#c9bf9b'
    } else if (hour >= 12 && hour <18){ //Afternoon
        pic.src='./images/afternoon.jpg'
        document.body.style.background='#d38e43'
    } else {
        pic.src='./images/night.jpg'
        document.body.style.background='#526b93'
    }
}