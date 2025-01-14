import { WordleGame, GameState } from '@/scripts/wordleGame'

describe('Game Test', () => {
  test('is an instance', () => {
    const game = new WordleGame('APPLE')
    expect(game).toBeTruthy()
  })
  test('Win Game', () => {
    const game = new WordleGame('APPLE')
    expect(game.state).toBe(GameState.Active)
    game.currentWord.addLetter('P')
    game.currentWord.addLetter('A')
    game.currentWord.addLetter('P')
    game.currentWord.addLetter('A')
    game.currentWord.addLetter('L')
    game.submitWord()
    expect(game.state).toBe(GameState.Active)

    game.currentWord.addLetter('A')
    game.currentWord.addLetter('P')
    game.currentWord.addLetter('P')
    game.currentWord.addLetter('L')
    game.currentWord.addLetter('E')
    game.submitWord()
    expect(game.state).toBe(GameState.Won)
  })

  test('Lose Game', () => {
    const game = new WordleGame('APPLE')
    expect(game.state).toBe(GameState.Active)
    game.currentWord.addLetter('P')
    game.currentWord.addLetter('A')
    game.currentWord.addLetter('P')
    game.currentWord.addLetter('A')
    game.currentWord.addLetter('L')
    game.submitWord()
    expect(game.state).toBe(GameState.Active)

    game.currentWord.addLetter('P')
    game.currentWord.addLetter('A')
    game.currentWord.addLetter('P')
    game.currentWord.addLetter('A')
    game.currentWord.addLetter('L')
    game.submitWord()
    expect(game.state).toBe(GameState.Active)

    game.currentWord.addLetter('P')
    game.currentWord.addLetter('A')
    game.currentWord.addLetter('P')
    game.currentWord.addLetter('A')
    game.currentWord.addLetter('L')
    game.submitWord()
    expect(game.state).toBe(GameState.Active)

    game.currentWord.addLetter('P')
    game.currentWord.addLetter('A')
    game.currentWord.addLetter('P')
    game.currentWord.addLetter('A')
    game.currentWord.addLetter('L')
    game.submitWord()
    expect(game.state).toBe(GameState.Active)

    game.currentWord.addLetter('P')
    game.currentWord.addLetter('A')
    game.currentWord.addLetter('P')
    game.currentWord.addLetter('A')
    game.currentWord.addLetter('L')
    game.submitWord()

    game.currentWord.addLetter('P')
    game.currentWord.addLetter('A')
    game.currentWord.addLetter('P')
    game.currentWord.addLetter('A')
    game.currentWord.addLetter('L')
    game.submitWord()
    expect(game.state).toBe(GameState.Lost)
  })
})

describe('correctChars Test', () => {
  const game = new WordleGame('DISCO')
  expect(game.state).toBe(GameState.Active)
  game.currentWord.addLetter('D')
  game.currentWord.addLetter('I')
  game.currentWord.addLetter('N')
  game.currentWord.addLetter('O')
  game.currentWord.addLetter('S')
  game.submitWord()

  expect(game.correctChars.length).toBe(2)
  expect(game.correctChars.includes('D')).toBe(true)
  expect(game.correctChars.includes('I')).toBe(true)

  expect(game.wrongPlaceChars.length).toBe(2)
  expect(game.wrongPlaceChars.includes('O')).toBe(true)
  expect(game.wrongPlaceChars.includes('S')).toBe(true)

  expect(game.wrongChars.length).toBe(1)
  expect(game.wrongChars.includes('N')).toBe(true)
})