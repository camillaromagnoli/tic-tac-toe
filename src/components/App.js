import React, { useState, useEffect } from 'react'
import './App.css'


const App = () => {

    const array = Array(9).fill('')

    const [board, setBoard] = useState(array)
    const [player, setPlayer] = useState('X')
    const [winner, setWinner] = useState(null)



    const gradeClick = (index) => {

        if (winner) {
            return null;
        }
        if (board[index] !== "") {
            return null;
        }


        setBoard(board.map((item, itemIndex) => itemIndex === index ? player : item))


        setPlayer(player === 'X' ? 'O' : 'X')

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
            if (grades.every(grade => grade === 'X')) setWinner('X');
            if (grades.every(grade => grade === 'O')) setWinner('O');
        });

        draw();
    }

    const draw = () => {
        if (board.every(item => item !== ''))
            setWinner('E')
    }

    const newGame = () => {
        setPlayer('X')
        setBoard(array)
        setWinner(null)

    }

    useEffect(result, [board]);

    return (

        <main><h1 className='title'>JOGO DA VELHA</h1>


            <div className={`board ${winner ? 'game-over' : ""}`}>
                {board.map((item, index) => (
                    <div key={index}
                        className={`grade ${item}`}
                        onClick={() => gradeClick(index)}>
                        {item}
                    </div>
                )
                )}
            </div>

            {winner === null ?
                <div className='message'><b>Vez do jogador {player}</b></div>
                : <div>{winner === 'E' ?
                    <div className='message'>Empate</div>
                    :
                    <div className='message'>Vitória do {winner}</div>
                }</div>}
            <button className='new-game' onClick={newGame}>JOGAR NOVAMENTE</button>

        </main>
    )

}

export default App;