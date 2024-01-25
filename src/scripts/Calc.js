export const handleCharacter = (character, setDisplay, display) => {
  switch (character) {
    case 'C':
      setDisplay('')
      break
    case 'Del':
      setDisplay(String(display.slice(0, -1)))
      break
    case '=':
      try {
        const result = String(eval(display))
        setDisplay(isFinite(result) ? result : 'Error')
      } catch (error) {
        setDisplay('Error')
      }
      break
    case '.':
      if (display === '') {
        setDisplay('0.')
      } else {
        setDisplay(String(display + character))
      }
      break
    default:
      setDisplay(String(display + character))
      break
  }
}
