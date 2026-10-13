export default function help (parentElement) {
 const mainContainer = document.createElement('div')
    mainContainer.setAttribute('class','mainContainers')
    const helpContainer = document.createElement('div')
    helpContainer.setAttribute('class','helpContainer')
    const help = document.createElement('div')
    help.textContent = "help"
    const showCommands = document.createElement('div')
    showCommands.textContent = "Show available commands"
    const clearContainer = document.createElement('div')
    clearContainer.setAttribute('class','clearContainer')
    const clear = document.createElement('div')
    clear.textContent = "clear"
    const clearTerminal = document.createElement('div')
    clearTerminal.textContent = "To clear the Terminal"
    const whoamiContainer = document.createElement('div')
    whoamiContainer.setAttribute('class','whoamiContainer')
    const whoami = document.createElement('div')
    whoami.textContent = "whoami"
    const displayUser = document.createElement('div')
    displayUser.textContent = "Display current user"
    const colorContainer = document.createElement('div')
    colorContainer.setAttribute('class','colorContainer')
    const color = document.createElement('div')
    color.textContent = "color <name>"
    const changeColor = document.createElement('div')
    changeColor.textContent = "Change color of the text"
       const scanContainer = document.createElement('div')
    scanContainer.setAttribute('class','scanContainer')
    const scan = document.createElement('div')
    scan.textContent = "scan"
    const scanGhost = document.createElement('div')
    parentElement.appendChild(mainContainer)
    scanGhost.textContent = "Detect Ghost"
    mainContainer.appendChild(helpContainer)
    mainContainer.appendChild(clearContainer)
    mainContainer.appendChild(colorContainer)
    mainContainer.appendChild(scanContainer)
    helpContainer.appendChild(help)
    helpContainer.appendChild(showCommands)
    clearContainer.appendChild(clear)
    clearContainer.appendChild(clearTerminal)
    colorContainer.appendChild(color)
    colorContainer.appendChild(changeColor)
    scanContainer.appendChild(scan)
    scanContainer.appendChild(scanGhost)
}