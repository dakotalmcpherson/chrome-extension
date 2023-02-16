const body = document.querySelector('body')

//Add an event listener to our body that reacts on click finishing
body.addEventListener('mouseup', (event) => {

  //If there is highlighted text
  if (window.getSelection().toString()) {
    let highlightedText = window.getSelection().toString()
    
    body.addEventListener('keydown', (e) => {
      if (e.key === 's') {
        async function getDef(input) {
          const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
          let finalData = data.json()
          return finalData
        }
        getDef(highlightedText)
        .then((data) => {
        const definition = data[0]['meanings'][0]['definitions'][0]['definition']
        const popUp = document.createElement('div')
        popUp.setAttribute('id', 'pop-up-box-hackathon')
        popUp.style.border = 'dotted black 2px'
        popUp.style.position = 'absolute'
        popUp.style.backgroundColor = 'white'
        popUp.style.height = '500px'
        popUp.style.width = '500px'
        popUp.style.zIndex = '90000'
        popUp.style.top = '0px'
        popUp.style.left = '0px'
        popUp.style.display = 'flex'
        popUp.style.flexDirection = 'column'
        popUp.style.alignItems = 'center'
        popUp.style.justifyContent = 'center'
        popUp.style.textAlign = 'center'
        const word = document.createElement('h1')
        word.innerText = `${highlightedText}`
        word.style.fontSize = '300%'
        popUp.appendChild(word)
        const text = document.createElement('h2')
        text.innerText = definition
        const button = document.createElement('button')
        button.addEventListener('click', (e) => {
          e.preventDefault()
          const toRemove = document.querySelector('#pop-up-box-hackathon')
          toRemove.remove()
        })
        button.innerText = 'Close Definition'
        button.style.backgroundColor = 'white'
        button.style.borderRadius = '10px'
        button.style.padding = '10px'
        button.style.color = 'red'
        button.style.outline = 'none'
        button.style.boxShadow = 'none'
        button.style.borderColor = 'red'
        button.style.borderWidth = '3px'
        popUp.appendChild(text)
        popUp.appendChild(button)
        body.appendChild(popUp)
        highlightedText = ''
    })


      }
    }, {once: true})

    //define async function
   
    //call async function
    
  }
})