import { useState, useEffect } from "react";
import "./App.css";
import Interface from "./Interface";

const Game = () => {
  const array = Array(9).fill("");

  const [board, setBoard] = useState(array);
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const gradeClick = index => {
    if (winner) {
      return null;
    }
    if (board[index] !== "") {
      return null;
    }

    setBoard(
      board.map((item, itemIndex) => (itemIndex === index ? player : item))
    );

    setPlayer(player === "X" ? "O" : "X");
  };

  const result = () => {
    const winner = [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],
      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],
      [board[0], board[4], board[8]],
      [board[2], board[4], board[6]]
    ];

    winner.forEach(grades => {
      if (grades.every(grade => grade === "X")) setWinner("X");
      if (grades.every(grade => grade === "O")) setWinner("O");
    });

    if (winner === null) {
      draw();
    }
  };

  const draw = () => {
    if (board.every(item => item !== "")) setWinner("E");
  };

  const newGame = () => {
    setPlayer("X");
    setBoard(array);
    setWinner(null);
  };

  useEffect(result, [board]);

  return Interface(board, winner, gradeClick, player, newGame);
};

export default Game;
