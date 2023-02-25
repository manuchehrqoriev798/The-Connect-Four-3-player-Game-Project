// bug: logic does not work while there is three in vertical. Figurit out why
// todo: Put timer that when it finishes you lose the game
// DOM Elements
const allCells = document.querySelectorAll('.cell:not(.row-top)');               // would be selected all cells but not cells that are on row-top (invisible ones)
const topCells = document.querySelectorAll('.cell.row-top');                     // row-top cells
const resetButton = document.querySelector('.reset');                            // button
const statusSpan = document.querySelector('.status');                             // status

// columns
const column0 = [allCells[72], allCells[63], allCells[54], allCells[45], allCells[36], allCells[27], allCells[18], allCells[9], allCells[0], topCells[0]];      // array that contains elements of the columns. The reason of starting the numbers of columns from the biggest to the smallest is that columns fill from bottom to the top. Therefore the highest number would have the smaller index.
const column1 = [allCells[73], allCells[64], allCells[55], allCells[46], allCells[37], allCells[28], allCells[19], allCells[10], allCells[1], topCells[1]];      // array that contains elements of the columns. The reason of starting the numbers of columns from the biggest to the smallest is that columns fill from bottom to the top. Therefore the highest number would have the smaller index.
const column2 = [allCells[74], allCells[65], allCells[56], allCells[47], allCells[38], allCells[29], allCells[20], allCells[11], allCells[2], topCells[2]];      // array that contains elements of the columns. The reason of starting the numbers of columns from the biggest to the smallest is that columns fill from bottom to the top. Therefore the highest number would have the smaller index.
const column3 = [allCells[75], allCells[66], allCells[57], allCells[48], allCells[39], allCells[30], allCells[21], allCells[12], allCells[3], topCells[3]];     // array that contains elements of the columns. The reason of starting the numbers of columns from the biggest to the smallest is that columns fill from bottom to the top. Therefore the highest number would have the smaller index.
const column4 = [allCells[76], allCells[67], allCells[58], allCells[49], allCells[40], allCells[31], allCells[22], allCells[13], allCells[4], topCells[4]];     // array that contains elements of the columns. The reason of starting the numbers of columns from the biggest to the smallest is that columns fill from bottom to the top. Therefore the highest number would have the smaller index.
const column5 = [allCells[77], allCells[68], allCells[59], allCells[50], allCells[41], allCells[32], allCells[23], allCells[14], allCells[5], topCells[5]];     // array that contains elements of the columns. The reason of starting the numbers of columns from the biggest to the smallest is that columns fill from bottom to the top. Therefore the highest number would have the smaller index.
const column6 = [allCells[78], allCells[69], allCells[60], allCells[51], allCells[42], allCells[33], allCells[24], allCells[15], allCells[6], topCells[6]];     // array that contains elements of the columns. The reason of starting the numbers of columns from the biggest to the smallest is that columns fill from bottom to the top. Therefore the highest number would have the smaller index.
const column7 = [allCells[79], allCells[70], allCells[61], allCells[52], allCells[43], allCells[34], allCells[25], allCells[16], allCells[7], topCells[7]];     // array that contains elements of the columns. The reason of starting the numbers of columns from the biggest to the smallest is that columns fill from bottom to the top. Therefore the highest number would have the smaller index.
const column8 = [allCells[80], allCells[71], allCells[62], allCells[53], allCells[44], allCells[35], allCells[26], allCells[17], allCells[8], topCells[8]];     // array that contains elements of the columns. The reason of starting the numbers of columns from the biggest to the smallest is that columns fill from bottom to the top. Therefore the highest number would have the smaller index.
const columns = [column0, column1, column2, column3, column4, column5, column6, column7, column8];                                      // array of the arrays that contains all columns


// rows
const topRow = [topCells[0], topCells[1], topCells[2], topCells[3], topCells[4], topCells[5], topCells[6], topCells[7], topCells[8]];                 
const row0 = [allCells[0], allCells[1], allCells[2], allCells[3], allCells[4], allCells[5], allCells[6], allCells[7], allCells[8]];             
const row1 = [allCells[9], allCells[10], allCells[11], allCells[12], allCells[13], allCells[14], allCells[15], allCells[16], allCells[17]];     
const row2 = [allCells[18], allCells[19], allCells[20], allCells[21], allCells[22], allCells[23], allCells[24], allCells[25], allCells[26]];                            
const row3 = [allCells[27], allCells[28], allCells[29], allCells[30], allCells[31], allCells[32], allCells[33], allCells[34], allCells[35]];                            
const row4 = [allCells[36], allCells[37], allCells[38], allCells[39], allCells[40], allCells[41], allCells[42], allCells[43], allCells[44]];                            
const row5 = [allCells[45], allCells[46], allCells[47], allCells[48], allCells[49], allCells[50], allCells[51], allCells[52], allCells[53]];                            
const row6 = [allCells[54], allCells[55], allCells[56], allCells[57], allCells[58], allCells[59], allCells[60], allCells[61], allCells[62]];                            
const row7 = [allCells[63], allCells[64], allCells[65], allCells[66], allCells[67], allCells[68], allCells[69], allCells[70], allCells[71]];                            
const row8 = [allCells[72], allCells[73], allCells[74], allCells[75], allCells[76], allCells[77], allCells[78], allCells[79], allCells[80]];                            
const rows = [row0, row1, row2, row3, row4, row5, row6, row7, row8, topRow];                                                                                             





// VARIABLES
let gameIsLive = true                                                                   // let because it can be false that shows that game is finished
let yellowIsNext = true                                                                 // let to show rather it is yellow's turn or red's turn. Boolean true shows rather it is turn of yellow or red
let redIsNext = true                                                                    // let to show rather it is yellow's turn or red's turn. Boolean true shows rather it is turn of yellow or red






// FUNCTION
const getClassListArray = (cell) => {                                                  // declaring function that affects to class name of cells
    const classList = cell.classList
    return [...classList]                                                        // classList was an object to better work we should transform it into an array. Spread element (...) spreads each elements of our array
}

const getCellLocation = (cell) => {
    const classList = getClassListArray(cell)
    const rowClass = classList.find(className  => className.includes('row'))           // searches for the class that has name of row using find method
    const colClass = classList.find(className  => className.includes('col'))           // searches for the class that has name of column using find method
    const rowIndex = rowClass[4]                                                       // selects just row and column in the form of a string. Like 4 6, 2 3. The reason of index being for is that row-x and col-y the fourth letter are numbers of row and columns                                       
    const colIndex = colClass[4]                                                       // selects just row and column in the form of a string. Like 4 6, 2 3. The reason of index being for is that row-x and col-y the fourth letter are numbers of row and columns 
    const rowNumber = parseInt(rowIndex, 10)                                           // converting 4th index of rowClass to numbers
    const colNumber = parseInt(colIndex, 10)                                           // converting 4th index of rowClass to numbers
    return [rowNumber, colNumber]                                                      // array with number of row and columns 
}

const getFirstOpenCellForColumn = (colIndex) => {
    const column = columns[colIndex]                                                   // array of the array of the columns 
    const columnWithoutTop = column.slice(0, 9)                                        // it will slice top column because we don't need it in  the game as regular cell

    for (cell of columnWithoutTop){
        const classList = getClassListArray(cell)
        if (!classList.includes('yellow') && !classList.includes('red') && !classList.includes('green')){            // checks rather class is empty
            return cell
        }
    }
    return null                                                                      // means all boxes were filled 
}

const clearColorFromTop = (colIndex) => {                                           // function that cleans topCell
    const topCell = topCells[colIndex]
    topCell.classList.remove('yellow')
    topCell.classList.remove('red')
    topCell.classList.remove('green')
}


const getColorOfCell = (cell) => {                                                   // function that checks for existence of color in the cell 
    const classList = getClassListArray(cell)
    if (classList.includes('yellow')) return 'yellow'
    if (classList.includes('red')) return 'red'
    if (classList.includes('green')) return 'green'
    return null
}







// important: logic for winning
const checkWinningCells = (cells) => {
    if (cells.length < 4) return false;                                           // length more that 4 means one side has won the match
  
    gameIsLive = false;
    for (const cell of cells) {
      cell.classList.add('win');                                                 // adds class win so that it would be         
    }
    statusSpan.style.backgroundColor = 'black' 
    statusSpan.style.padding = '10px 30px'
    statusSpan.style.borderRadius = '10px'
    statusSpan.style.transition = '0.5s'
    if (yellowIsNext){                                                          // if yellowIsNext is correct means that yellow won. Line 304                                                
      statusSpan.textContent = `Yellow has won !`
      statusSpan.style.color = 'yellow'
      statusSpan.style.border = '5px solid yellow'
      statusSpan.style.outline = '2px solid black'
    } else if (redIsNext) {
      statusSpan.textContent = `Red has won !`
      statusSpan.style.color = 'red'
      statusSpan.style.border = '5px solid red'
      statusSpan.style.outline = '2px solid black'
    } else {
      statusSpan.textContent = `Green has won !`
      statusSpan.style.color = 'green'
      statusSpan.style.backgroundColor = 'white' 
      statusSpan.style.border = '5px solid green'
      statusSpan.style.outline = '2px solid black'
    }
    return true;

  };

  const checkStatusOfGame = (cell) => {                                                 // logic for game
    const color = getColorOfCell(cell);
    if (!color) return;
    const [rowIndex, colIndex] = getCellLocation(cell);
  
    // Check horizontally
    let winningCells = [cell];
    let rowToCheck = rowIndex;
    let colToCheck = colIndex - 1;                                                    // -1 means the line goes from the right to the left. Therefore it cannot be less than 0
    while (colToCheck >= 0) {
      const cellToCheck = rows[rowToCheck][colToCheck];
      if (getColorOfCell(cellToCheck) === color) {
        winningCells.push(cellToCheck);
        colToCheck--;
      } else {
        break;
      }
    }
    colToCheck = colIndex + 1;                                                       // +1 means the line goes from the left to the right. Therefore it cannot be more than 6
    while (colToCheck <= 8) {
      const cellToCheck = rows[rowToCheck][colToCheck];
      if (getColorOfCell(cellToCheck) === color) {
        winningCells.push(cellToCheck);
        colToCheck++;
      } else {
        break;
      }
    }
    let isWinningCombo = checkWinningCells(winningCells);
    if (isWinningCombo) return;


    // Check vertically
    winningCells = [cell];
    rowToCheck = rowIndex - 1;                                                       // -1 means from the top to the button. It cannot be less than 0
    colToCheck = colIndex;
    while (rowToCheck >= 0) {
      const cellToCheck = rows[rowToCheck][colToCheck];
      if (getColorOfCell(cellToCheck) === color) {
        winningCells.push(cellToCheck);
        rowToCheck--;
      } else {
        break;
      }
    }
    rowToCheck = rowIndex + 1;                                                      // +1 means from the button to the top. It cannot be more than 5
    while (rowToCheck <= 8 ) {
      const cellToCheck = rows[rowToCheck][colToCheck];
      if (getColorOfCell(cellToCheck) === color) {
        winningCells.push(cellToCheck);
        rowToCheck++;
      } else {
        break;
      }
    }
    isWinningCombo = checkWinningCells(winningCells);
    if (isWinningCombo) return;



    // Check diagonally /
    winningCells = [cell];
    rowToCheck = rowIndex + 1;                                        // rowIndex +1 and colIndex -1 means from the top right to the button left. col bigger than 0 and row less than 5               
    colToCheck = colIndex - 1;
    while (colToCheck >= 0 && rowToCheck <= 8) {
      const cellToCheck = rows[rowToCheck][colToCheck];
      if (getColorOfCell(cellToCheck) === color) {
        winningCells.push(cellToCheck);
        rowToCheck++;
        colToCheck--;
      } else {
        break;
      }
    }
    rowToCheck = rowIndex - 1;                                        // rowIndex -1 and colIndex +1 means from the button left to the top right. col less than 6 and row big than 0   
    colToCheck = colIndex + 1;
    while (colToCheck <= 6 && rowToCheck >= 0 ) {
      const cellToCheck = rows[rowToCheck][colToCheck];
      if (getColorOfCell(cellToCheck) === color) {
        winningCells.push(cellToCheck);
        rowToCheck--;
        colToCheck++;
      } else {
        break;
      }
    }
    isWinningCombo = checkWinningCells(winningCells);
    if (isWinningCombo) return;




    // Check diagonally \
    winningCells = [cell];
    rowToCheck = rowIndex - 1;                               // opposite of each other.            row -1 and col -1. From button right to the top left                                                                 
    colToCheck = colIndex - 1;                               // opposite of each other                
    while (colToCheck >= 0 && rowToCheck >= 0) {             // opposite of each other                             
      const cellToCheck = rows[rowToCheck][colToCheck];
      if (getColorOfCell(cellToCheck) === color) {
        winningCells.push(cellToCheck);
        rowToCheck--;                                        // opposite of each other
        colToCheck--;                                        // opposite of each other
      } else {
        break;
      }
    }
    rowToCheck = rowIndex + 1;                               // opposite of each other.           row +1 and col +1. From the top left to the button right.      
    colToCheck = colIndex + 1;                               // opposite of each other
    while (colToCheck <= 8 && rowToCheck <= 8 ) {            // opposite of each other                      
      const cellToCheck = rows[rowToCheck][colToCheck];
      if (getColorOfCell(cellToCheck) === color) {
        winningCells.push(cellToCheck);
        rowToCheck++;                                        // opposite of each other     
        colToCheck++;                                        // opposite of each other      
      } else {
        break;
      }
    }
    isWinningCombo = checkWinningCells(winningCells);
    if (isWinningCombo) return;


    // Game is tie
    const rowsWithoutTop = rows.slice(0, 9)
    for (const row of rowsWithoutTop){
        for (const cell of row){
            const classList = getClassListArray(cell)
            if (!classList.includes('yellow') && !classList.includes('red') && !classList.includes('green')){       // tie
                return
            }
        }
    }
    gameIsLive = false
    statusSpan.textContent =  'Good game from triple sides, the game is tie ! '
    statusSpan.style.color = 'yellow'
    statusSpan.style.border = '5px solid red'
    statusSpan.style.backgroundColor = 'black' 
    statusSpan.style.padding = '10px 30px'
    statusSpan.style.borderRadius = '10px'
    statusSpan.style.transition = '0.5s'
  };




// EVENT HANDLERS
const handleCellMouseOver = (e) => {                                
  const cell = e.target;
  const [rowIndex, colIndex] = getCellLocation(cell);
  const topCell = topCells[colIndex];
  topCell.classList.add(yellowIsNext ? 'yellow' : redIsNext ? 'red' : 'green')
}

const handleCellMouseOut = (e) => {     
  const cell = e.target                            
  const [rowIndex, colIndex] = getCellLocation(cell)
  clearColorFromTop(colIndex)  
}



const handleCellClick = (e) => {
  if (!gameIsLive) return
  const cell = e.target
  const [rowIndex, colIndex] = getCellLocation(cell);
  const openCell = getFirstOpenCellForColumn(colIndex);

  if (!openCell) return

  openCell.classList.add(yellowIsNext ? 'yellow' : redIsNext ? 'red' : 'green')

  checkStatusOfGame(openCell)
  if (yellowIsNext){
    yellowIsNext = !yellowIsNext                                                   // after change yellow to red and red to yellow  
  } else if (redIsNext){
    redIsNext = !redIsNext
  } else {
    yellowIsNext = !yellowIsNext
    redIsNext = !redIsNext
  }

  
  clearColorFromTop(colIndex)
  if (gameIsLive){
    const topCell = topCells[colIndex]
    topCell.classList.add(yellowIsNext ? 'yellow' : redIsNext ? 'red' : 'green');
  }
}



// ADDING EVENT LISTENERS
window.addEventListener("load", (event) => {
  for (const row of rows){                                            // selecting each row of the rows
    for (const cell of row) {                                       // selecting each cell of each row
        cell.addEventListener('mouseover', handleCellMouseOver);    // while putting mouse over the cell works handleCellMouseOver function (when you put mouse over the cell)
        cell.addEventListener('mouseout', handleCellMouseOut);      // while putting mouse over the cell works handleCellMouseOut function  (when you unput(remove) mouse over the cell)
        cell.addEventListener('click', handleCellClick);
}}  
});
                                 


resetButton.addEventListener('click', () => {
    for (const row of rows){
        for (const cell of row){
            cell.classList.remove('yellow')
            cell.classList.remove('red')
            cell.classList.remove('green')
            cell.classList.remove('win')
        }
    }
    gameIsLive = true
    yellowIsNext = true
    statusSpan.textContent = ''      // bug: here it should show nothing
})

































































































// // VARIABLES
// let gameIsLive = true                                                                   // let because it can be false that shows that game is finished
// let yellowIsNext = true                                                                 // let to show rather it is yellow's turn or red's turn. Boolean true shows rather it is turn of yellow or red
// let redIsNext = true                                                                    // let to show rather it is yellow's turn or red's turn. Boolean true shows rather it is turn of yellow or red
// let greenIsNext = true





// // FUNCTION
// const getClassListArray = (cell) => {                                                  // declaring function that affects to class name of cells
//     const classList = cell.classList
//     return [...classList]                                                        // classList was an object to better work we should transform it into an array. Spread element (...) spreads each elements of our array
// }

// const getCellLocation = (cell) => {
//     const classList = getClassListArray(cell)
//     const rowClass = classList.find(className  => className.includes('row'))           // searches for the class that has name of row using find method
//     const colClass = classList.find(className  => className.includes('col'))           // searches for the class that has name of column using find method
//     const rowIndex = rowClass[4]                                                       // selects just row and column in the form of a string. Like 4 6, 2 3. The reason of index being for is that row-x and col-y the fourth letter are numbers of row and columns                                       
//     const colIndex = colClass[4]                                                       // selects just row and column in the form of a string. Like 4 6, 2 3. The reason of index being for is that row-x and col-y the fourth letter are numbers of row and columns 
//     const rowNumber = parseInt(rowIndex, 10)                                           // converting 4th index of rowClass to numbers
//     const colNumber = parseInt(colIndex, 10)                                           // converting 4th index of rowClass to numbers
//     return [rowNumber, colNumber]                                                      // array with number of row and columns 
// }

// const getFirstOpenCellForColumn = (colIndex) => {
//     const column = columns[colIndex]                                                   // array of the array of the columns 
//     const columnWithoutTop = column.slice(0, 9)                                        // it will slice top column because we don't need it in  the game as regular cell

//     for (cell of columnWithoutTop){
//         const classList = getClassListArray(cell)
//         if (!classList.includes('yellow') && !classList.includes('red') && !classList.includes('green')){            // checks rather class is empty
//             return cell
//         }
//     }
//     return null                                                                      // means all boxes were filled 
// }

// const clearColorFromTop = (colIndex) => {                                           // function that cleans topCell
//     const topCell = topCells[colIndex]
//     topCell.classList.remove('yellow')
//     topCell.classList.remove('red')
//     topCell.classList.remove('green')
// }


// const getColorOfCell = (cell) => {                                                   // function that checks for existence of color in the cell 
//     const classList = getClassListArray(cell)
//     if (classList.includes('yellow')) return 'yellow'
//     if (classList.includes('red')) return 'red'
//     if (classList.includes('green')) return 'green'
//     return null
// }





// // bug: does not work motherfuck
// // important: logic for winning
// const checkWinningCells = (cells) => {
//   if (cells.length < 4) return false;                                           // length more that 4 means one side has won the match

//   gameIsLive = false;
//   for (const cell of cells) {
//     cell.classList.add('win');                                                 // adds class win so that it would be         
//   }
//   statusSpan.style.backgroundColor = 'black' 
//   statusSpan.style.padding = '10px 30px'
//   statusSpan.style.borderRadius = '10px'
//   statusSpan.style.transition = '0.5s'
//   if (yellowIsNext){
//     statusSpan.textContent = `Yellow has won!`
//     statusSpan.style.color = 'yellow'
//     statusSpan.style.border = '5px solid yellow'
//     statusSpan.style.outline = '2px solid black'
//   } else {
//     statusSpan.textContent = `Red has won!`
//     statusSpan.style.color = 'red'
//     statusSpan.style.border = '5px solid red'
//     statusSpan.style.outline = '2px solid black'
//   }
//   return true;

// };

// const checkStatusOfGame = (cell) => {                                                 // logic for game
//   const color = getColorOfCell(cell);
//   if (!color) return;
//   const [rowIndex, colIndex] = getCellLocation(cell);

//   // Check horizontally
//   let winningCells = [cell];
//   let rowToCheck = rowIndex;
//   let colToCheck = colIndex - 1;                                                    // -1 means the line goes from the right to the left. Therefore it cannot be less than 0
//   while (colToCheck >= 0) {
//     const cellToCheck = rows[rowToCheck][colToCheck];
//     if (getColorOfCell(cellToCheck) === color) {
//       winningCells.push(cellToCheck);
//       colToCheck--;
//     } else {
//       break;
//     }
//   }
//   colToCheck = colIndex + 1;                                                       // +1 means the line goes from the left to the right. Therefore it cannot be more than 6
//   while (colToCheck <= 8) {
//     const cellToCheck = rows[rowToCheck][colToCheck];
//     if (getColorOfCell(cellToCheck) === color) {
//       winningCells.push(cellToCheck);
//       colToCheck++;
//     } else {
//       break;
//     }
//   }
//   let isWinningCombo = checkWinningCells(winningCells);
//   if (isWinningCombo) return;


//   // // Check vertically
//   // winningCells = [cell];
//   // rowToCheck = rowIndex - 1;                                                       // -1 means from the top to the button. It cannot be less than 0
//   // colToCheck = colIndex;
//   // while (rowToCheck >= 0) {
//   //   const cellToCheck = rows[rowToCheck][colToCheck];
//   //   if (getColorOfCell(cellToCheck) === color) {
//   //     winningCells.push(cellToCheck);
//   //     rowToCheck--;
//   //   } else {
//   //     break;
//   //   }
//   // }
//   // rowToCheck = rowIndex + 1;                                                      // +1 means from the button to the top. It cannot be more than 5
//   // while (rowToCheck <= 8 ) {
//   //   const cellToCheck = rows[rowToCheck][colToCheck];
//   //   if (getColorOfCell(cellToCheck) === color) {
//   //     winningCells.push(cellToCheck);
//   //     rowToCheck++;
//   //   } else {
//   //     break;
//   //   }
//   // }
//   // isWinningCombo = checkWinningCells(winningCells);
//   // if (isWinningCombo) return;



//   // // Check diagonally /
//   // winningCells = [cell];
//   // rowToCheck = rowIndex + 1;                                        // rowIndex +1 and colIndex -1 means from the top right to the button left. col bigger than 0 and row less than 5               
//   // colToCheck = colIndex - 1;
//   // while (colToCheck >= 0 && rowToCheck <= 8) {
//   //   const cellToCheck = rows[rowToCheck][colToCheck];
//   //   if (getColorOfCell(cellToCheck) === color) {
//   //     winningCells.push(cellToCheck);
//   //     rowToCheck++;
//   //     colToCheck--;
//   //   } else {
//   //     break;
//   //   }
//   // }
//   // rowToCheck = rowIndex - 1;                                        // rowIndex -1 and colIndex +1 means from the button left to the top right. col less than 6 and row big than 0   
//   // colToCheck = colIndex + 1;
//   // while (colToCheck <= 8 && rowToCheck >= 0 ) {
//   //   const cellToCheck = rows[rowToCheck][colToCheck];
//   //   if (getColorOfCell(cellToCheck) === color) {
//   //     winningCells.push(cellToCheck);
//   //     rowToCheck--;
//   //     colToCheck++;
//   //   } else {
//   //     break;
//   //   }
//   // }
//   // isWinningCombo = checkWinningCells(winningCells);
//   // if (isWinningCombo) return;




//   // // Check diagonally \
//   // winningCells = [cell];
//   // rowToCheck = rowIndex - 1;                               // opposite of each other.            row -1 and col -1. From button right to the top left                                                                 
//   // colToCheck = colIndex - 1;                               // opposite of each other                
//   // while (colToCheck >= 0 && rowToCheck >= 0) {             // opposite of each other                             
//   //   const cellToCheck = rows[rowToCheck][colToCheck];
//   //   if (getColorOfCell(cellToCheck) === color) {
//   //     winningCells.push(cellToCheck);
//   //     rowToCheck--;                                        // opposite of each other
//   //     colToCheck--;                                        // opposite of each other
//   //   } else {
//   //     break;
//   //   }
//   // }
//   // rowToCheck = rowIndex + 1;                               // opposite of each other.           row +1 and col +1. From the top left to the button right.      
//   // colToCheck = colIndex + 1;                               // opposite of each other
//   // while (colToCheck <= 8 && rowToCheck <= 8 ) {            // opposite of each other                      
//   //   const cellToCheck = rows[rowToCheck][colToCheck];
//   //   if (getColorOfCell(cellToCheck) === color) {
//   //     winningCells.push(cellToCheck);
//   //     rowToCheck++;                                        // opposite of each other     
//   //     colToCheck++;                                        // opposite of each other      
//   //   } else {
//   //     break;
//   //   }
//   // }
//   // isWinningCombo = checkWinningCells(winningCells);
//   // if (isWinningCombo) return;

//     // Game is tie
//     const rowsWithoutTop = rows.slice(0, 9)
//     for (const row of rowsWithoutTop){
//         for (const cell of row){
//             const classList = getClassListArray(cell)
//             if (!classList.includes('yellow') && !classList.includes('red') && !classList.includes('green')){       // tie
//                 return
//             }
//         }
//     }
//     gameIsLive = false
//     statusSpan.textContent =  'Good game from both sides, the game is tie ! '
//     statusSpan.style.color = 'yellow'
//     statusSpan.style.border = '5px solid red'
//     statusSpan.style.backgroundColor = 'green' 
//     statusSpan.style.padding = '10px 30px'
//     statusSpan.style.borderRadius = '10px'
//     statusSpan.style.transition = '0.5s'
//   };










// const colors = ['yellow', 'red', 'green'];
// let counter = 0;

// // EVENT HANDLERS
// const handleCellMouseOver = (e) => {                                
//   const cell = e.target;
//   const [rowIndex, colIndex] = getCellLocation(cell);
//   const topCell = topCells[colIndex];
//   const colorAdd = colors[counter % colors.length];
//   if (!topCell.classList.contains(colorAdd)) {
//     topCell.classList.add(colorAdd);
//   }
// }

// const handleCellMouseOut = (e) => {                                 // bug: color does not change while mouse is on the cell.
//   const cell = e.target
//   const [rowIndex, colIndex] = getCellLocation(cell)
//   clearColorFromTop(colIndex)  
// }



// const handleCellClick = (e) => {
//   if (!gameIsLive) return
//   const cell = e.target
//   const [rowIndex, colIndex] = getCellLocation(cell);
//   const openCell = getFirstOpenCellForColumn(colIndex);

//   if (!openCell) return
  
  
//   checkStatusOfGame(openCell)
//   // yellowIsNext = !yellowIsNext
//   const colorAdd = colors[counter % colors.length];
//   openCell.classList.add(colorAdd);
//   counter++;
//   if (gameIsLive){
//     const topCell = topCells[colIndex]
//     topCell.classList.add(colorAdd);
//   }
//   // bug: color does not change while mouse is on the cell.
//   if (yellowIsNext){                                                     // bug: error is here
//     yellowIsNext = !yellowIsNext
//   } else if (redIsNext){
//     redIsNext = !redIsNext
//   } else if (greenIsNext){
//     greenIsNext = !greenIsNext
//   } else if (!greenIsNext){
//     yellowIsNext = !! yellowIsNext
//   }
//   clearColorFromTop(colIndex)
//   const topCell = topCells[colIndex]
//   if (yellowIsNext) {
//     topCell.classList.add('yellow')
//   } else if(redIsNext){
//     topCell.classList.add('red')
//   } else if (greenIsNext){
//     topCell.classList.add('green')
//   }
// }






// // ADDING EVENT LISTENERS
// window.addEventListener("load", (event) => {
//   for (const row of rows){                                            // selecting each row of the rows
//     for (const cell of row) {                                       // selecting each cell of each row
//         cell.addEventListener('mouseover', handleCellMouseOver);    // while putting mouse over the cell works handleCellMouseOver function (when you put mouse over the cell)
//         cell.addEventListener('mouseout', handleCellMouseOut);      // while putting mouse over the cell works handleCellMouseOut function  (when you unput(remove) mouse over the cell)
//         cell.addEventListener('click', handleCellClick);
// }}  
// });
                                 


// resetButton.addEventListener('click', () => {
//     for (const row of rows){
//         for (const cell of row){
//             cell.classList.remove('yellow')
//             cell.classList.remove('red')
//             cell.classList.remove('green')
//             cell.classList.remove('win')
//         }
//     }
//     gameIsLive = true
//     yellowIsNext = true
//     statusSpan.textContent = ''
// })













