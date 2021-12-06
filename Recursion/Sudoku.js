function check(board, i, j, p) {
  let r = Math.floor(i / 3) * 3;
  let c = Math.floor(j / 3) * 3;
  // console.log(r,c)
  //condition for small square
  for (let k = r; k < r + 3; k++) {
    for (let l = c; l < c + 3; l++) {
      if (board[k][l] === p) {
        return false;
      }
    }
  }
  //condition for row
  for (let m = 0; m < board.length; m++) {
    if (board[i][m] === p) {
      return false;
    }
  }
  //condition for column
  for (let z = 0; z < board.length; z++) {
    if (board[z][j] === p) {
      return false;
    }
  }
  return true;
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let n = input.length;
  let board = [];
  for (let i = 0; i < n; i++) {
    let a = input[i].trim().split(" ").map(Number);
    board.push(a);
  }
  let tofill = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 0) {
        tofill.push([i, j]);
      }
    }
  }
  // console.log(tofill[20]);
  // console.log(tofill);
  let possible = solve(tofill, 0);
  if (possible) {
    for (let i = 0; i < board.length; i++) {
      console.log(board[i].join(" "));
    }
  } else {
    console.log(-1);
  }

  function solve(tofill, cur) {
    if (cur === tofill.length) {
      return true;
    }
    // console.log(cur)
    let [i, j] = [tofill[cur][0], tofill[cur][1]];
    // console.log(tofill[cur]);
    for (let p = 1; p < 10; p++) {
      if (check(board, i, j, p)) {
        board[i][j] = p;
        // console.log(board);
        let a = solve(tofill, cur + 1);
        if (a) {
          return true;
        }
        board[i][j] = 0;
      }
    }
    return false;
  }
}
if (process.env.USERNAME === "adam") {
  runProgram(`0 4 0 0 0 0 1 7 9 
      0 0 2 0 0 8 0 5 4 
      0 0 6 0 0 5 0 0 8 
      0 8 0 0 7 0 9 1 0 
      0 5 0 0 9 0 0 3 0 
      0 1 9 0 6 0 0 4 0 
      3 0 0 4 0 0 7 0 0 
      5 7 0 1 0 0 2 0 0 
      9 2 8 0 0 0 0 6 0`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
