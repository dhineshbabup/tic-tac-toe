import React, { useRef, useState } from "react";
import x_mark from "../assets/cross.png";
import o_mark from "../assets/circle.png";
var data = ["", "", "", "", "", "", "", "", ""];
function TicTacToe() {
  const [count, setCount] = useState(0);
  const titleRef = useRef();
  const [lock, setLock] = useState(false);
  function choice(e, num) {
    if (count % 2 == 0 && data[num] === "") {
      data[num] = "x";
      e.target.innerHTML = `<img src=${x_mark} />`;
      setCount(count + 1);
    } else if (data[num] === "") {
      e.target.innerHTML = `<img src=${o_mark} />`;
      data[num] = "o";
      setCount(count + 1);
    }
    checkwin();
  }
  let box1 = useRef();
  let box2 = useRef();
  let box3 = useRef();
  let box4 = useRef();
  let box5 = useRef();
  let box6 = useRef();
  let box7 = useRef();
  let box8 = useRef();
  let box9 = useRef();
  const boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
  function checkwin() {
    //draw
    let drawCnt = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i] !== "") drawCnt++;
    }
    if (drawCnt == data.length) {
      titleRef.current.innerHTML = "Match Draw";
    }
    //row
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "")
      won(data[0]);
    else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "")
      won(data[4]);
    else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "")
      won(data[6]);
    //diagonal
    else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "")
      won(data[0]);
    else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "")
      won(data[2]);
    //column
    else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "")
      won(data[0]);
    else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "")
      won(data[1]);
    else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "")
      won(data[2]);
  }
  function won(data) {
    titleRef.current.innerHTML = `${data} won the game`;
    setLock(true);
  }
  function reset() {
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = "Tic Tac Toe game started.";
    setLock(false);
    boxes.map((box) => {
      box.current.innerHTML = "";
    });
  }
  console.log(data);
  return (
    <>
      <div className="flex flex-col justify-center items-center border-2 p-4 rounded-md">
        <h1 ref={titleRef} className="text-white text-4xl text-center">
          Tic Tac Toe game started.
        </h1>
        <div>
          <div className="flex">
            <div
              ref={box1}
              onClick={(e) => !lock && choice(e, 0)}
              className="bg-box w-[200px] h-[160px] m-2 hover:cursor-pointer p-2 flex items-center justify-center  rounded-md"
            ></div>
            <div
              ref={box2}
              onClick={(e) => !lock && choice(e, 1)}
              className="bg-box w-[200px] h-[160px] m-2 hover:cursor-pointer flex items-center justify-center  rounded-md"
            ></div>
            <div
              ref={box3}
              onClick={(e) => !lock && choice(e, 2)}
              className="bg-box w-[200px] h-[160px] m-2 hover:cursor-pointer flex items-center justify-center  rounded-md"
            ></div>
          </div>
          <div className="flex">
            <div
              ref={box4}
              onClick={(e) => !lock && choice(e, 3)}
              className="bg-box w-[200px] h-[160px] m-2 hover:cursor-pointer  flex items-center justify-center  rounded-md"
            ></div>
            <div
              ref={box5}
              onClick={(e) => !lock && choice(e, 4)}
              className="bg-box w-[200px] h-[160px] m-2 hover:cursor-pointer flex items-center justify-center  rounded-md"
            ></div>
            <div
              ref={box6}
              onClick={(e) => !lock && choice(e, 5)}
              className="bg-box w-[200px] h-[160px] m-2 hover:cursor-pointer flex items-center justify-center  rounded-md"
            ></div>
          </div>
          <div className="flex">
            <div
              ref={box7}
              onClick={(e) => !lock && choice(e, 6)}
              className="bg-box w-[200px] h-[160px] m-2 hover:cursor-pointer flex items-center justify-center  rounded-md"
            ></div>
            <div
              ref={box8}
              onClick={(e) => !lock && choice(e, 7)}
              className="bg-box w-[200px] h-[160px] m-2 hover:cursor-pointer flex items-center justify-center  rounded-md"
            ></div>
            <div
              ref={box9}
              onClick={(e) => !lock && choice(e, 8)}
              className="bg-box w-[200px] h-[160px] m-2 hover:cursor-pointer flex items-center justify-center  rounded-md"
            ></div>
          </div>
        </div>
        <button
          onClick={reset}
          className="bg-white w-auto h-auto px-4 py-2 text-md rounded-sm "
        >
          Reset
        </button>
      </div>
    </>
  );
}
export default TicTacToe;
