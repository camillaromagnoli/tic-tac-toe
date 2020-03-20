import React, { useState, useEffect } from 'react'
import './App.css'


const App = () => {

    // const arr = [
    //     ['x', 'o', 'x'],
    //     ['x', 'o', 'o'],
    //     ['x', 'x', 'X']
    // ];

    const array = Array(9).fill('')

    const [board, setBoard] = useState(array)
    const [player, setPlayer] = useState('Jogador 1')
    const [symbol, setSymbol] = useState('O')
    const [winner, setWinner] = useState(null)



    const gradeClick = (index) => {
        if (board[index] !== "") {
            return null;
        }

        setBoard(board.map((item, itemIndex) => itemIndex === index ? symbol : item))

        setSymbol(symbol === 'X' ? 'O' : 'X')

        setPlayer(symbol === 'X' ? 'Jogador 1' : 'Jogador 2')

    }

    const result = () => {
        const winner = [

            [board[0], board[1], board[2]],
            [board[3], board[4], board[5]],
            [board[6], board[7], board[8]],
            [board[0], board[3], board[6]],
            [board[1], board[4], board[7]],
            [board[2], board[5], board[8]],
            [board[0], board[4], board[8]],
            [board[2], board[4], board[6]],
        ];

        winner.forEach(grades => {
            if (grades.every(grade => grade === 'X')) setWinner(symbol);
            if (grades.every(grade => grade === 'O')) setWinner(symbol);
        });
    }

    useEffect(result, [board]);

    return (

        <main><h1 className='title'>JOGO DA VELHA</h1>


            {/* <div className='board'>

                {board.map((item) => (
                    <div>
                        {item.map((item2, index) =>
                            <div>{item2[index]}
                            </div>
                        )}
                    </div>


                ))}
            </div> */}

            <div className='board'>
                {board.map((item, index) => (
                    <div key={index}
                        className={`grade ${item}`}
                        onClick={() => gradeClick(index)}>
                        {item}
                    </div>
                )
                )}
            </div>

            <div className='message'><b>Vez do jogador {player}</b></div>
        </main>




    )

}

export default App;