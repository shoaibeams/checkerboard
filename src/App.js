import React, { useEffect, useState } from 'react'
import ChessBoard from 'chessboardjsx'
import './App.css'

const App = () => {
  const [width, setWidth] = useState(500)
  const [error, setError] = useState('')

  const inputHandler = event => {
    if (event.target.value === '') {
      setError('')
    }

    const num = event.target.value
    if (event.target.value !== '') {
      if (num < 5 || num > 20) {
        setError("Number can't be less than 5 or greater than 20")
      } else {
        setWidth(event.target.value * 50)
        setError('')
      }
    }

    debugger
  }

  useEffect(() => {}, [])

  return (
    <div className="container">
      CheckerBoard
      <div>
        <input
          className="input"
          type="number"
          placeholder="Change the size of the grid?"
          onChange={event => inputHandler(event)}
        />
        <div style={{ color: 'red' }}>{width ? error : null}</div>
        <ChessBoard
          id="standard"
          orientation="black"
          position="start"
          darkSquareStyle={{ backgroundColor: 'black' }}
          lightSquareStyle={{ backgroundColor: 'white' }}
          width={width}
          pieces={{
            wK: ({ squareWidth, isDragging }) => (
              <img
                style={{
                  width: isDragging ? squareWidth * 1.75 : squareWidth,
                  height: isDragging ? squareWidth * 1.75 : squareWidth
                }}
                src={'red-sphere.png'}
                alt={'elvis'}
              />
            ),
            rk: ({ squareWidth, isDragging }) => (
              <img
                style={{
                  width: isDragging ? squareWidth * 1.75 : squareWidth,
                  height: isDragging ? squareWidth * 1.75 : squareWidth
                }}
                src={'circle.png'}
                alt={'elvis'}
              />
            )
          }}
        />
        >
      </div>
    </div>
  )
}

export default App
