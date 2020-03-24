import React from "react";

const Interface = (board, winner, gradeClick, player, newGame) => {
  return (
    <main>
      <h1 className="title">JOGO DA VELHA</h1>

      <div className={`board ${winner ? "game-over" : ""}`}>
        {board.map((item, index) => (
          <div
            key={index}
            className={`grade ${item}`}
            onClick={() => gradeClick(index)}
          >
            {item}
          </div>
        ))}
      </div>

      {winner === null ? (
        <div className="message">
          <b>Vez do jogador {player}</b>
        </div>
      ) : (
        <div>
          {winner === "E" ? (
            <div className="message">Empate</div>
          ) : (
            <div className="message">Vitória do {winner}</div>
          )}
        </div>
      )}
      <button className="new-game" onClick={newGame}>
        JOGAR NOVAMENTE
      </button>
    </main>
  );
};

export default Interface;
