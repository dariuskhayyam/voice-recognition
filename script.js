const btn = document.querySelector('.btn')
const question = document.querySelector('.q')
const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recog = new speechRecognition()

recog.onstart = () => {
    console.log("listening")
}

recog.onresult = (event) => {
    const e = event
    const current = e.resultIndex
    const message = e.results[current][0].transcript
    console.log(message)
    res(message)
    question.innerHTML = `<h3> ${message} </h3>`
}

res = message => {
    const siri = new SpeechSynthesisUtterance()
    siri.volume = 1
    siri.text = message
    window.speechSynthesis.speak(siri)
    
}

btn.addEventListener('click', () => {
    recog.start()
})