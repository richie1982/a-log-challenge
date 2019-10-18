const dataElement = document.getElementById('data-list')

const fetchData = () => {
    return fetch('./data.json')
    .then(resp => resp.json())
}

const renderData = (data) => {
    data.forEach((el, index) => renderQuestions(el, index))
}

const renderQuestions = (question, index) => {
    const questionEl = document.createElement('div')
    const questionDiv = document.createElement('div')
    const questionTitle = document.createElement('h5')
    const iconImgUp = document.createElement('i')
    const iconImgDown = document.createElement('i')
    const textEl = document.createElement('p')
    
    questionEl.id = index + 1
    questionEl.className = "question-container"
    questionDiv.className = "question-div"
    textEl.className = "content"
    questionTitle.innerText = `${index + 1}. ` + question.title
    iconImgDown.id = `icon${index + 1}`
    iconImgUp.className = "fas fa-caret-up"
    iconImgDown.className = "fas fa-caret-down"
    textEl.innerText = question.content

    dataElement.append(questionEl)
    questionEl.appendChild(questionDiv)
    questionDiv.appendChild(questionTitle)
    questionDiv.appendChild(iconImgDown)
    questionEl.appendChild(textEl)
    
    let textHidden = true
    
    questionDiv.addEventListener('click', () => {
        if (textHidden === true) {
            textHidden = false
            textEl.style.display = 'block'
            icon = document.getElementById(`icon${index + 1}`)
            icon.remove()
            questionDiv.appendChild(iconImgUp)
            iconImgUp.id = `icon${index + 1}`
        } else {
            textHidden = true
            textEl.style.display = 'none'
            icon = document.getElementById(`icon${index + 1}`)
            icon.remove()
            questionDiv.appendChild(iconImgDown)
            iconImgDown.id = `icon${index + 1}`
        }
    })
}

document.addEventListener("DOMContentLoaded", () => {
    fetchData()
        .then(data => renderData(data.rows))
});
