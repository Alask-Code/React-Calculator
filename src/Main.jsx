import React, { useState } from 'react'
import View from './components/View'
import Grid from './components/Grid'
import Button from './components/Button'
import characters from './assets/characters'
import Result from './components/Result'
import { handleCharacter } from './scripts/Calc'

export default function Main() {
  const [display, setDisplay] = useState('')

  return (
    <View>
      <Result placeholder='0' value={ display } />
      <Grid>
        {characters.map((character, i) => (
          <Button
          key={i}
          equals={character === '=' ? true : undefined}
          onClick={() => { handleCharacter(character, setDisplay, display) }}>
            {character}
          </Button>
        ))}
      </Grid>
    </View>
  )
}
