let unreadCounter = null
let unreadNotifs  = null
let readAllButton = null

function clearAllNotifs(e) {
    e.preventDefault()
    unreadNotifs.forEach(e => {
        e.classList.remove("unread")
    })
    reset()
    update()
}

function reset() {
    readAllButton.removeEventListener("click", clearAllNotifs)
    unreadCounter = null
    unreadNotifs  = null
    readAllButton = null    
}

function update() {
    unreadCounter = document.querySelector(".counter")
    unreadNotifs = document.querySelectorAll(".notification.unread")
    readAllButton = document.querySelector(".read-all")
    readAllButton.addEventListener("click", clearAllNotifs)
    unreadCounter.textContent = unreadNotifs.length
}

// function to test
function makeUnread(n) {
    const allNotifs = document.querySelectorAll(".notification")
    for (let i=0; i<n; i++) allNotifs[i].classList.add("unread")
    reset()
    update()
}

update()