// BUG: OPTIMIZE THE PROGRAM

// todo: effect of background change while clicking
// todo: logic of winning combination
// todo: design, styling
// todo: random generator that after putting your name, determines who starts first
// todo: you can clean opponents box but you are not allowed to put your sign in recently deleted form
// todo: animation to the game is tired

const allCells = document.querySelectorAll('.cell')
const statusSpan = document.querySelector('.status');          // interacting with elements from HTML through DOM      
const resetButton = document.querySelector('.reset');            // interacting with elements from HTML through DOM  




// columns
const column0 = [allCells[35], allCells[28], allCells[21], allCells[14], allCells[7], allCells[0]];                   // array that contains elements of the columns. The reason of starting the numbers of columns from the biggest to the smallest is that columns fill from bottom to the top. Therefore the highest number would have the smalles index.
const column1 = [allCells[36], allCells[29], allCells[22], allCells[15], allCells[8], allCells[1]];                   // array that contains elements of the columns. The reason of starting the numbers of columns from the biggest to the smallest is that columns fill from bottom to the top. Therefore the highest number would have the smalles index.
const column2 = [allCells[37], allCells[30], allCells[23], allCells[16], allCells[9], allCells[2]];                   // array that contains elements of the columns. The reason of starting the numbers of columns from the biggest to the smallest is that columns fill from bottom to the top. Therefore the highest number would have the smalles index.
const column3 = [allCells[38], allCells[31], allCells[24], allCells[17], allCells[10], allCells[3]];                  // array that contains elements of the columns. The reason of starting the numbers of columns from the biggest to the smallest is that columns fill from bottom to the top. Therefore the highest number would have the smalles index.
const column4 = [allCells[39], allCells[32], allCells[25], allCells[18], allCells[11], allCells[4]];                  // array that contains elements of the columns. The reason of starting the numbers of columns from the biggest to the smallest is that columns fill from bottom to the top. Therefore the highest number would have the smalles index.
const column5 = [allCells[40], allCells[33], allCells[26], allCells[19], allCells[12], allCells[5]];                  // array that contains elements of the columns. The reason of starting the numbers of columns from the biggest to the smallest is that columns fill from bottom to the top. Therefore the highest number would have the smalles index.
const column6 = [allCells[41], allCells[34], allCells[27], allCells[20], allCells[13], allCells[6]];                  // array that contains elements of the columns. The reason of starting the numbers of columns from the biggest to the smallest is that columns fill from bottom to the top. Therefore the highest number would have the smalles index.
const columns = [column0, column1, column2, column3, column4, column5, column6];                                      // array of the arrays that contains all columns


// rows
const row0 = [allCells[0], allCells[1], allCells[2], allCells[3], allCells[4], allCells[5], allCells[6]];              // array that contains elements fo the rows. The reason of exponancially grow of rows is that they go from the left to the right   
const row1 = [allCells[7], allCells[8], allCells[9], allCells[10], allCells[11], allCells[12], allCells[13]];          // array that contains elements fo the rows. The reason of exponancially grow of rows is that they go from the left to the right     
const row2 = [allCells[14], allCells[15], allCells[16], allCells[17], allCells[18], allCells[19], allCells[20]];       // array that contains elements fo the rows. The reason of exponancially grow of rows is that they go from the left to the right
const row3 = [allCells[21], allCells[22], allCells[23], allCells[24], allCells[25], allCells[26], allCells[27]];       // array that contains elements fo the rows. The reason of exponancially grow of rows is that they go from the left to the right
const row4 = [allCells[28], allCells[29], allCells[30], allCells[31], allCells[32], allCells[33], allCells[34]];       // array that contains elements fo the rows. The reason of exponancially grow of rows is that they go from the left to the right
const row5 = [allCells[35], allCells[36], allCells[37], allCells[38], allCells[39], allCells[40], allCells[41]];       // array that contains elements fo the rows. The reason of exponancially grow of rows is that they go from the left to the right
const rows = [row0, row1, row2, row3, row4, row5];                  


     

// important: Game Constants
const xSymbol = '×';             // special signs of constants of the game
const oSymbol = '○';             // special signs of constants of the game




// important: Game Parameters
let gameIsLive = true;           // if gameIsLive becomes false game finishes
let xIsNext = true;              // if xIsNext false it would be turn of o
  







// // important: Functions
// const letterToSymbol = (letter) => letter === 'x' ? xSymbol : oSymbol;   // ternar statement: if there is no x print xSymbol; if there is print oSymbol

// const handleWin = (letter) => {                                          // function that shows text to notify the winner
//   gameIsLive = false;
//   if (letter === 'x') {
//     statusSpan.innerHTML = `${letterToSymbol(letter)} has won!`;
//     statusSpan.style.backgroundColor = 'red'
//     statusSpan.style.transition = '0.5s'
//   } else {
//     statusSpan.innerHTML = `<span>${letterToSymbol(letter)} has won!</span>`;
//     statusSpan.style.backgroundColor = 'red'
//     statusSpan.style.transition = '0.5s'
//   }
// };

const getClassListArray = (cell) => {                                         // function gives us array of the names of div classes. Why cell because cell is manipulator of the name of classes 
  const classList = cell.classList
  return [...classList]                                            
} 

const getCellLocation = (cell) => {
  const classList = getClassListArray(cell)

  const rowClass = classList.find(className => className.includes('row'))    // finds classes with that has name of row or col 
  const colClass = classList.find(className => className.includes('col'))    // finds classes with that has name of row or col
  const rowIndex = rowClass[4]                                               // gets 5th letter of class of class that has name of row or col which is number of row and column
  const colIndex = colClass[4]                                               // gets 5th letter of class of class that has name of row or col which is number of row and column
  const rowNumber = parseInt(rowIndex, 10)                                   // since rowIndex was letter, using parseInt changed it to number
  const colNumber = parseInt(colIndex, 10)                                   // since rowIndex was letter, using parseInt changed it to number
  return [rowNumber, colNumber]                                              // return number of row and column of the cell                 
}


const getColorOfCell = (cell) => {
  const classList = getClassListArray(cell)
  if (classList.includes('x')) return 'x'
  if (classList.includes('o')) return 'o'
  return null
}

















// important: logic for winning
const checkWinningCells = (cells) => {
  if (cells.length < 4) return false;

  gameIsLive = false;
  for (const cell of cells) {
    cell.classList.add('win');
  }
  statusSpan.style.backgroundColor = 'black' 
  statusSpan.style.padding = '18px 30px'
  statusSpan.style.borderRadius = '10px'
  statusSpan.style.transition = '0.5s'
  statusSpan.style.color = 'red'
  statusSpan.style.border = '5px solid red'
  statusSpan.style.outline = '1px solid gold'
  if (xIsNext){
    statusSpan.textContent = `O has won!`
  } else {
    statusSpan.textContent = `X has won!`
  }
  return true;
};

const checkStatusOfGame = (cell) => {
  const color = getColorOfCell(cell);
  if (!color) return;
  const [rowNumber, colNumber] = getCellLocation(cell);

  // Check horizontally
  let winningCells = [cell];
  let rowToCheck = rowNumber;
  let colToCheck = colNumber - 1;                                                            // -1 means the line goes from the right to the left. Therefore it cannot be less than 0
  while (colToCheck >= 0) {
    const cellToCheck = rows[rowToCheck][colToCheck];
    if (getColorOfCell(cellToCheck) === color) {
      winningCells.push(cellToCheck);
      colToCheck--;
    } else {
      break;
    }
  }
  colToCheck = colNumber + 1;                                                              // +1 means the line goes from the left to the right. Therefore it cannot be more than 6
  while (colToCheck <= 6) {
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
  rowToCheck = rowNumber - 1;                                                             // -1 means from the top to the button. It cannot be less than 0
  colToCheck = colNumber;
  while (rowToCheck >= 0) {
    const cellToCheck = rows[rowToCheck][colToCheck];
    if (getColorOfCell(cellToCheck) === color) {
      winningCells.push(cellToCheck);
      rowToCheck--;
    } else {
      break;
    }
  }
  rowToCheck = rowNumber + 1;                                                             // +1 means from the button to the top. It cannot be more than 5
  while (rowToCheck <= 5 ) {
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
  rowToCheck = rowNumber + 1;                                         // rowNumber + 1 and colNumber -1 means from the top right to the button left. col bigger than 0 and row less than 5
  colToCheck = colNumber - 1;
  while (colToCheck >= 0 && rowToCheck <= 5) {
    const cellToCheck = rows[rowToCheck][colToCheck];
    if (getColorOfCell(cellToCheck) === color) {
      winningCells.push(cellToCheck);
      rowToCheck++;
      colToCheck--;
    } else {
      break;
    }
  }
  rowToCheck = rowNumber - 1;                                        // rowNumber -1 and colNumber +1 means from the top left to the button right. col less than 6 and row big than 0 
  colToCheck = colNumber + 1;
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
  rowToCheck = rowNumber - 1;                               // opposite of each other          row -1 and col -1. From button right to the top left                                                           
  colToCheck = colNumber - 1;                               // opposite of each other                
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
  rowToCheck = rowNumber + 1;                               // opposite of each other         row +1 and col +1. From the top left to the button right. 
  colToCheck = colNumber + 1;                               // opposite of each other
  while (colToCheck <= 6 && rowToCheck <= 5 ) {            // opposite of each other                      
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
  for (const row of rows){
      for (const cell of row){
          const classList = getClassListArray(cell)
          if (!classList.includes('o') && !classList.includes('x')){
              return
          }
      }
  }
  gameIsLive = false
  statusSpan.textContent =  'Good game from both sides, the game is tie ! '                           // bug: it should show the result 
}

































// Important: Event Handlers



const handleCellClick = (e) => {
  const cell = e.target                                                // target manipulates with element in HTML
  const [rowIndex, colIndex] = getCellLocation(cell)                   // inside of [] numbers are in the array, but we don't use them as an array. Declaring function of getCellLocation to get location of the clicked cell
  const classList = e.target.classList
  if (!gameIsLive || classList[3] === 'x' || classList[3] === 'o') {   // x or o. Not both or multiple
    return;
  }
  if (xIsNext) {                                                           // first adds x 
    statusSpan.innerHTML = `${oSymbol} now is your turn`;  
    statusSpan.style.color = 'white'                                        // bug: change color of the status properly
    classList.add('x');
    xIsNext = !xIsNext                                                     // makes xIsNext false which forces to go to else. So next time it adds o  
    checkStatusOfGame(cell)                   
  } else {
    statusSpan.style.color = 'gold'                                         // bug: change color of the status properly
    statusSpan.innerHTML = `${xSymbol} now is your turn`;  
    classList.add('o');
    xIsNext = !xIsNext                                                     // makes xIsNext true which leads the process to repeat itself
    checkStatusOfGame(cell)                  
  }
}














// // important: ADDING EVENT LISTENERS
for (const row of rows){                                             // selecting each row of the rows
  for (const cell of row) {                                          // selecting each cell of each row  // while putting mouse over the cell works handleCellMouseOut function  (when you unput(remove) mouse over the cell)
    cell.addEventListener('click', handleCellClick)                 // click is the name of the event and declaring handleCellMouseOver function   
  }}                                 





resetButton.addEventListener('click', () => {                      // bug:  fix this reset button
    for (const row of rows){
      for (const cell of row){
        cell.classList.remove('x')
        cell.classList.remove('o')
        cell.classList.remove('win')
        }
    gameIsLive = true
    xIsNext = true
    statusSpan.textContent = '' 
    }
})




































































































































































































// important: Beginner Level
// // HTML Elements
// const statusDiv = document.querySelector('.status');          // ineracting with elements from HTML through DOM      
// const resetDiv = document.querySelector('.reset');            // ineracting with elements from HTML through DOM    
// const cellDivs = document.querySelectorAll('.game-cell');     // ineracting with elements from HTML through DOM         

// // game constants
// const xSymbol = '×';             // special signs of constants of the game
// const oSymbol = '○';             // special signs of constants of the game

// // game variables
// let gameIsLive = true;           // if gameIsLive becomes false game finishes
// let xIsNext = true;              // if xIsNext false it would be turn of o


// // functions
// const letterToSymbol = (letter) => letter === 'x' ? xSymbol : oSymbol;   // ternar statement: if there is no x print xSymbol; if there is print oSymbol


// // handleWin(letter).style.color = 'green'
// const handleWin = (letter) => {                                          // function that shows text to notify the winner
//   gameIsLive = false;
//   if (letter === 'x') {
//     statusDiv.innerHTML = `${letterToSymbol(letter)} has won!`;
//     statusDiv.style.backgroundColor = 'red'
//     statusDiv.style.transition = '0.5s'
//   } else {
//     statusDiv.innerHTML = `<span>${letterToSymbol(letter)} has won!</span>`;
//     statusDiv.style.backgroundColor = 'red'
//     statusDiv.style.transition = '0.5s'
//   }
// };
// // statusDiv.style.color = 'green'
// // handleWin.style.color = 'red'




// const checkGameStatus = () => {                                                           // function of listening all boxes
//   const zero = cellDivs[0].classList[1];
//   const one = cellDivs[1].classList[1];
//   const two = cellDivs[2].classList[1];
//   const three = cellDivs[3].classList[1];
//   const four = cellDivs[4].classList[1];
//   const five = cellDivs[5].classList[1];
//   const six = cellDivs[6].classList[1];
//   const seven = cellDivs[7].classList[1];
//   const eight = cellDivs[8].classList[1];
//   const nine = cellDivs[9].classList[1];
//   const ten = cellDivs[10].classList[1];
//   const eleven = cellDivs[11].classList[1];
//   const twelve = cellDivs[12].classList[1];
//   const thirteen = cellDivs[13].classList[1];
//   const fourteen = cellDivs[14].classList[1];
//   const fifteen = cellDivs[15].classList[1];
//   const sixteen = cellDivs[16].classList[1];
//   const seventeen = cellDivs[17].classList[1];
//   const eighteen = cellDivs[18].classList[1];
//   const nineteen = cellDivs[19].classList[1];
//   const twenty = cellDivs[20].classList[1];
//   const twentyOne = cellDivs[21].classList[1];
//   const twentyTwo = cellDivs[22].classList[1];
//   const twentyThree = cellDivs[23].classList[1];
//   const twentyFour = cellDivs[24].classList[1];
//   const twentyFive = cellDivs[25].classList[1];
//   const twentySix = cellDivs[26].classList[1];
//   const twentySeven = cellDivs[27].classList[1];
//   const twentyEight = cellDivs[28].classList[1];
//   const twentyNine = cellDivs[29].classList[1];
//   const thirty = cellDivs[30].classList[1];
//   const thirtyOne = cellDivs[31].classList[1];
//   const thirtyTwo = cellDivs[32].classList[1];
//   const thirtyThree = cellDivs[33].classList[1];
//   const thirtyFour = cellDivs[34].classList[1];
//   const thirtyFive = cellDivs[35].classList[1];
//   const thirtySix = cellDivs[36].classList[1];
//   const thirtySeven = cellDivs[37].classList[1];
//   const thirtyEight = cellDivs[38].classList[1];
//   const thirtyNine = cellDivs[39].classList[1];
//   const fourty= cellDivs[40].classList[1];
//   const fourtyOne= cellDivs[41].classList[1]; 








//   // todo: 550 line of code just for logic of this program. What I have learned? There is always easy option that you must know in order to write less and effective line of code
//   // check winner                                                                        //Logic of  writing places of all winning combination
//   // important: Horizontal 
//   // First
//   if (zero && zero === one && zero === two  && zero === three ) { 
//     handleWin(one);
//     cellDivs[0].classList.add('won');
//     cellDivs[1].classList.add('won');
//     cellDivs[2].classList.add('won');
//     cellDivs[3].classList.add('won');
//   } else if (one && one === two && one === three && four === four) {
//     handleWin(four);
//     cellDivs[1].classList.add('won');
//     cellDivs[2].classList.add('won');
//     cellDivs[3].classList.add('won');
//     cellDivs[4].classList.add('won');
//   } else if (two && two === three  && two === four && two === five) {
//     handleWin(two);
//     cellDivs[2].classList.add('won');
//     cellDivs[3].classList.add('won');
//     cellDivs[4].classList.add('won');
//     cellDivs[5].classList.add('won');
//   } else if (three && three  === four && three  === five && three  === six) {
//     handleWin(three);
//     cellDivs[3].classList.add('won');
//     cellDivs[4].classList.add('won');
//     cellDivs[5].classList.add('won');
//     cellDivs[6].classList.add('won');
//   }
//   // Second
//   else if (seven && seven === eight && seven === nine  && seven === ten ) {
//     handleWin(seven);
//     cellDivs[7].classList.add('won');
//     cellDivs[8].classList.add('won');
//     cellDivs[9].classList.add('won');
//     cellDivs[10].classList.add('won');
//   } else if (eight && eight === nine && eight === ten  && eight === eleven ) {
//     handleWin(eight);
//     cellDivs[8].classList.add('won');
//     cellDivs[9].classList.add('won');
//     cellDivs[10].classList.add('won');
//     cellDivs[11].classList.add('won');
//   } else if (nine && nine === ten && nine === eleven  && nine === twelve ) {
//     handleWin(nine);
//     cellDivs[9].classList.add('won');
//     cellDivs[10].classList.add('won');
//     cellDivs[11].classList.add('won');
//     cellDivs[12].classList.add('won');
//   } else if (ten && ten === eleven && ten === twelve  && ten === thirteen ) {
//     handleWin(ten);
//     cellDivs[10].classList.add('won');
//     cellDivs[11].classList.add('won');
//     cellDivs[12].classList.add('won');
//     cellDivs[13].classList.add('won');
//   }
//   //Third
//   else if (fourteen && fourteen === fifteen && fourteen === sixteen  && fourteen === seventeen ) {
//     handleWin(fourteen);
//     cellDivs[14].classList.add('won');
//     cellDivs[15].classList.add('won');
//     cellDivs[16].classList.add('won');
//     cellDivs[17].classList.add('won');
//   }  else if (fifteen && fifteen === sixteen && fifteen === seventeen  && fifteen === eighteen ) {
//     handleWin(fifteen);
//     cellDivs[15].classList.add('won');
//     cellDivs[16].classList.add('won');
//     cellDivs[17].classList.add('won');
//     cellDivs[18].classList.add('won');
//   }  else if (sixteen && sixteen === seventeen && sixteen === eighteen  && sixteen === nineteen ) {
//     handleWin(sixteen);
//     cellDivs[16].classList.add('won');
//     cellDivs[17].classList.add('won');
//     cellDivs[18].classList.add('won');
//     cellDivs[19].classList.add('won');
//   }  else if (seventeen && seventeen === eighteen && seventeen === nineteen  && seventeen === twenty ) {
//     handleWin(seventeen);
//     cellDivs[17].classList.add('won');
//     cellDivs[18].classList.add('won');
//     cellDivs[19].classList.add('won');
//     cellDivs[20].classList.add('won');
//   }
//   //Fourth
//   else if (twentyOne && twentyOne === twentyTwo && twentyOne === twentyThree  && twentyOne === twentyFour ) {
//     handleWin(twentyOne);
//     cellDivs[21].classList.add('won');
//     cellDivs[22].classList.add('won');
//     cellDivs[23].classList.add('won');
//     cellDivs[24].classList.add('won');
//   } else if (twentyTwo && twentyTwo === twentyThree && twentyTwo === twentyFour  && twentyTwo === twentyFive ) {
//     handleWin(twentyTwo);
//     cellDivs[22].classList.add('won');
//     cellDivs[23].classList.add('won');
//     cellDivs[24].classList.add('won');
//     cellDivs[25].classList.add('won');
//   } else if (twentyThree && twentyThree === twentyFour && twentyThree === twentyFive  && twentyThree === twentySix) {
//     handleWin(twentyThree);
//     cellDivs[23].classList.add('won');
//     cellDivs[24].classList.add('won');
//     cellDivs[25].classList.add('won');
//     cellDivs[26].classList.add('won');
//   } else if (twentyFour && twentyFour === twentyFive && twentyFour === twentySix  && twentyFour === twentySeven ) {
//     handleWin(twentyFour);
//     cellDivs[24].classList.add('won');
//     cellDivs[25].classList.add('won');
//     cellDivs[26].classList.add('won');
//     cellDivs[27].classList.add('won');
//   }
//   //Fifth
//   else if (twentyEight && twentyEight === twentyNine && twentyEight === thirty  && twentyEight === thirtyOne ) {
//     handleWin(twentyEight);
//     cellDivs[28].classList.add('won');
//     cellDivs[29].classList.add('won');
//     cellDivs[30].classList.add('won');
//     cellDivs[31].classList.add('won');
//   } else if (twentyNine && twentyNine === thirty && twentyNine === thirtyOne  && twentyNine === thirtyTwo ) {
//     handleWin(twentyNine);
//     cellDivs[29].classList.add('won');
//     cellDivs[30].classList.add('won');
//     cellDivs[31].classList.add('won');
//     cellDivs[32].classList.add('won');
//   } else if (thirty && thirty === thirtyOne && thirty === thirtyTwo  && thirty === thirtyThree ) {
//     handleWin(thirty);
//     cellDivs[30].classList.add('won');
//     cellDivs[31].classList.add('won');
//     cellDivs[32].classList.add('won');
//     cellDivs[33].classList.add('won');
//   } else if (thirtyOne && thirtyOne === thirtyTwo && thirtyOne === thirtyThree  && thirtyOne === thirtyFour ) {
//     handleWin(thirtyOne);
//     cellDivs[31].classList.add('won');
//     cellDivs[32].classList.add('won');
//     cellDivs[33].classList.add('won');
//     cellDivs[34].classList.add('won');
//   }
//   //Sixth
//   else if (thirtyFive && thirtyFive === thirtySix && thirtyFive === thirtySeven  && thirtyFive === thirtyEight ) {
//     handleWin(thirtyFive);
//     cellDivs[35].classList.add('won');
//     cellDivs[36].classList.add('won');
//     cellDivs[37].classList.add('won');
//     cellDivs[38].classList.add('won');
//   } else if (thirtySix && thirtySix === thirtySeven && thirtySix === thirtyEight  && thirtySix === thirtyNine ) {
//     handleWin(thirtySix);
//     cellDivs[36].classList.add('won');
//     cellDivs[37].classList.add('won');
//     cellDivs[38].classList.add('won');
//     cellDivs[39].classList.add('won');
//   } else if (thirtySeven && thirtySeven === thirtyEight && thirtySeven === thirtyNine  && thirtySeven === fourty ) {
//     handleWin(thirtySeven);
//     cellDivs[35].classList.add('won');
//     cellDivs[36].classList.add('won');
//     cellDivs[37].classList.add('won');
//     cellDivs[38].classList.add('won');
//   } else if (thirtyEight && thirtyEight === thirtyNine && thirtyEight === fourty  && thirtyEight === fourty ) {
//     handleWin(thirtyEight);
//     cellDivs[38].classList.add('won');
//     cellDivs[39].classList.add('won');
//     cellDivs[40].classList.add('won');
//     cellDivs[41].classList.add('won');
//   }

//   // important: vertical
//   // Zero
//   else if (zero && zero === seven && zero === fourteen  && zero === twentyOne ) {
//     handleWin(zero);
//     cellDivs[0].classList.add('won');
//     cellDivs[7].classList.add('won');
//     cellDivs[14].classList.add('won');
//     cellDivs[21].classList.add('won');
//   } else if (seven && seven === fourteen && seven === twentyOne  && seven === twentyEight ) {
//     handleWin(seven);
//     cellDivs[7].classList.add('won');
//     cellDivs[14].classList.add('won');
//     cellDivs[21].classList.add('won');
//     cellDivs[28].classList.add('won');
//   } else if (fourteen && fourteen === twentyOne && fourteen === twentyEight  && fourteen === thirtyFive ) {
//     handleWin(fourteen);
//     cellDivs[14].classList.add('won');
//     cellDivs[21].classList.add('won');
//     cellDivs[28].classList.add('won');
//     cellDivs[35].classList.add('won');
//   }
//   //One
//   else if (one && one === eight && one === fifteen  && one === twentyTwo ) {
//     handleWin(one);
//     cellDivs[1].classList.add('won');
//     cellDivs[8].classList.add('won');
//     cellDivs[15].classList.add('won');
//     cellDivs[22].classList.add('won');
//   }
//   else if (eight && eight === fifteen && eight === twentyTwo  && eight === twentyNine ) {
//     handleWin(eight);
//     cellDivs[8].classList.add('won');
//     cellDivs[15].classList.add('won');
//     cellDivs[22].classList.add('won');
//     cellDivs[29].classList.add('won');
//   }  else if (fifteen && fifteen === twentyTwo && fifteen === twentyNine  && fifteen === thirtySix ) {
//     handleWin(fifteen);
//     cellDivs[15].classList.add('won');
//     cellDivs[22].classList.add('won');
//     cellDivs[29].classList.add('won');
//     cellDivs[36].classList.add('won');
//   }
//   // Two
//   else if (two && two === nine && two === sixteen && two === twentyThree ) {
//     handleWin(two);
//     cellDivs[2].classList.add('won');
//     cellDivs[9].classList.add('won');
//     cellDivs[16].classList.add('won');
//     cellDivs[23].classList.add('won');
//   }  else if (nine && nine === sixteen && nine === twentyThree && nine === thirty ) {
//     handleWin(nine);
//     cellDivs[9].classList.add('won');
//     cellDivs[16].classList.add('won');
//     cellDivs[23].classList.add('won');
//     cellDivs[30].classList.add('won');
//   }  else if (sixteen && sixteen === twentyThree && sixteen === thirty && sixteen === twentySeven ) {
//     handleWin(sixteen);
//     cellDivs[16].classList.add('won');
//     cellDivs[23].classList.add('won');
//     cellDivs[30].classList.add('won');
//     cellDivs[37].classList.add('won');
//   }
//   // Three 
//   else if (three && three === ten && three === seventeen && three === twentyFour ) {
//     handleWin(three);
//     cellDivs[3].classList.add('won');
//     cellDivs[10].classList.add('won');
//     cellDivs[17].classList.add('won');
//     cellDivs[24].classList.add('won');
//   } else if (ten && ten === seventeen && ten === twentyFour && ten === thirtyOne ) {
//     handleWin(ten);
//     cellDivs[10].classList.add('won');
//     cellDivs[17].classList.add('won');
//     cellDivs[24].classList.add('won');
//     cellDivs[31].classList.add('won');
//   } else if (seventeen && seventeen === twentyFour && seventeen === thirtyOne && seventeen === thirtyEight ) {
//     handleWin(seventeen);
//     cellDivs[17].classList.add('won');
//     cellDivs[24].classList.add('won');
//     cellDivs[31].classList.add('won');
//     cellDivs[38].classList.add('won');
//   }
//   // Four
//   else if (four && four === eleven && four === eighteen && four === twentyFive ) {
//     handleWin(four);
//     cellDivs[4].classList.add('won');
//     cellDivs[11].classList.add('won');
//     cellDivs[18].classList.add('won');
//     cellDivs[25].classList.add('won');
//   }  else if (eleven && eleven === eighteen && eleven === twentyFive && eleven === thirtyTwo ) {
//     handleWin(eleven);
//     cellDivs[11].classList.add('won');
//     cellDivs[18].classList.add('won');
//     cellDivs[25].classList.add('won');
//     cellDivs[32].classList.add('won');
//   } else if (eighteen && eighteen === twentyFive && eighteen === thirtyTwo && eighteen === thirtyNine ) {
//     handleWin(eighteen);
//     cellDivs[18].classList.add('won');
//     cellDivs[25].classList.add('won');
//     cellDivs[32].classList.add('won');
//     cellDivs[39].classList.add('won');
//   }
//   // Five
//   else if (five && five === twelve && five === nineteen && five === twentySix ) {
//     handleWin(five);
//     cellDivs[5].classList.add('won');
//     cellDivs[12].classList.add('won');
//     cellDivs[19].classList.add('won');
//     cellDivs[26].classList.add('won');
//   }  else if (twelve && twelve === nineteen && twelve === twentySix && twelve === thirtyThree ) {
//     handleWin(twelve);
//     cellDivs[12].classList.add('won');
//     cellDivs[19].classList.add('won');
//     cellDivs[26].classList.add('won');
//     cellDivs[33].classList.add('won');
//   } else if (nineteen && nineteen === twentySix && nineteen === thirtyThree && nineteen === fourty ) {
//     handleWin(nineteen);
//     cellDivs[19].classList.add('won');
//     cellDivs[26].classList.add('won');
//     cellDivs[33].classList.add('won');
//     cellDivs[40].classList.add('won');
//   }
//   // Six
//   else if (six && six === thirteen && six === twenty && six === twentySeven ) {
//     handleWin(six);
//     cellDivs[6].classList.add('won');
//     cellDivs[13].classList.add('won');
//     cellDivs[20].classList.add('won');
//     cellDivs[27].classList.add('won');
//   } else if (thirteen && thirteen === twenty && thirteen === twentySeven && thirteen === thirtyFour ) {
//     handleWin(thirteen);
//     cellDivs[13].classList.add('won');
//     cellDivs[20].classList.add('won');
//     cellDivs[27].classList.add('won');
//     cellDivs[34].classList.add('won');
//   } else if (twenty && twenty === twentySeven && twenty === thirtyFour && twenty === fourtyOne ) {
//     handleWin(twenty);
//     cellDivs[20].classList.add('won');
//     cellDivs[27].classList.add('won');
//     cellDivs[34].classList.add('won');
//     cellDivs[41].classList.add('won');
//   }


//   // important: Diagnal ///////////////
//   // THREE
//   else if (three && three === nine && three === fifteen && three === twentyOne ) { 
//     handleWin(three);
//     cellDivs[3].classList.add('won');
//     cellDivs[9].classList.add('won');
//     cellDivs[15].classList.add('won');
//     cellDivs[21].classList.add('won');
//   }
//   // FOUR
//   else if (four && four === ten && four === sixteen && four === twentyTwo ) { 
//     handleWin(four);
//     cellDivs[4].classList.add('won');
//     cellDivs[10].classList.add('won');
//     cellDivs[16].classList.add('won');
//     cellDivs[22].classList.add('won');
//   } else if (ten && ten === sixteen && ten === twentyTwo && ten === twentyEight ) { 
//     handleWin(ten);
//     cellDivs[10].classList.add('won');
//     cellDivs[16].classList.add('won');
//     cellDivs[22].classList.add('won');
//     cellDivs[28].classList.add('won');
//   }
//   // FIVE
//   else if (five && five === eleven && five === seventeen && five === twentyThree ) { 
//     handleWin(five);
//     cellDivs[5].classList.add('won');
//     cellDivs[11].classList.add('won');
//     cellDivs[17].classList.add('won');
//     cellDivs[23].classList.add('won');
//   } else if (eleven && eleven === seventeen && eleven === twentyThree && eleven === twentyNine ) { 
//     handleWin(eleven);
//     cellDivs[11].classList.add('won');
//     cellDivs[17].classList.add('won');
//     cellDivs[23].classList.add('won');
//     cellDivs[29].classList.add('won');
//   } else if (seventeen && seventeen === twentyThree && seventeen === twentyNine && seventeen === thirtyFive ) { 
//     handleWin(seventeen);
//     cellDivs[17].classList.add('won');
//     cellDivs[23].classList.add('won');
//     cellDivs[29].classList.add('won');
//     cellDivs[35].classList.add('won');
//   }
//   // SIX 
//   else if (six && six === twenteen && six === eighteen && six === twentyFour ) { 
//     handleWin(six);
//     cellDivs[6].classList.add('won');
//     cellDivs[12].classList.add('won');
//     cellDivs[18].classList.add('won');
//     cellDivs[24].classList.add('won');
//   }  else if (twelve && twelve === eighteen && twelve === twentyFour && twelve === thirty ) { 
//     handleWin(twelve);
//     cellDivs[12].classList.add('won');
//     cellDivs[18].classList.add('won');
//     cellDivs[24].classList.add('won');
//     cellDivs[30].classList.add('won');
//   } else if (eighteen && eighteen === twentyFour && eighteen === thirty && eighteen === thirtySix ) { 
//     handleWin(eighteen);
//     cellDivs[18].classList.add('won');
//     cellDivs[24].classList.add('won');
//     cellDivs[30].classList.add('won');
//     cellDivs[36].classList.add('won');
//   }
//   // THIRTEEN
//   else if (thirteen && thirteen === nineteen && thirteen === twentyFive && thirteen === thirtyOne ) { 
//     handleWin(thirteen);
//     cellDivs[13].classList.add('won');
//     cellDivs[19].classList.add('won');
//     cellDivs[25].classList.add('won');
//     cellDivs[31].classList.add('won');
//   } else if (nineteen && nineteen === twentyFive && nineteen === thirtyOne && nineteen === thirtySeven ) { 
//     handleWin(nineteen);
//     cellDivs[19].classList.add('won');
//     cellDivs[25].classList.add('won');
//     cellDivs[31].classList.add('won');
//     cellDivs[37].classList.add('won');
//   }
//   // TWENTY
//   else if (twenty && twenty === twentySix && twenty === thirtyTwo && twenty === thirtyEight ) { 
//     handleWin(twenty);
//     cellDivs[20].classList.add('won');
//     cellDivs[26].classList.add('won');
//     cellDivs[32].classList.add('won');
//     cellDivs[38].classList.add('won');
//   }
  
//   // important: Diagnal \\\\\\\\\\\\\\\\
//   //THREE 
//   else if (three && three === eleven && three === nineteen && three === twentySeven ) { 
//     handleWin(three);
//     cellDivs[3].classList.add('won');
//     cellDivs[11].classList.add('won');
//     cellDivs[19].classList.add('won');
//     cellDivs[27].classList.add('won');
//   }
//   //TWO
//   else if (two && two === ten && two === eighteen && two ===twentySix ) { 
//     handleWin(two);
//     cellDivs[2].classList.add('won');
//     cellDivs[10].classList.add('won');
//     cellDivs[18].classList.add('won');
//     cellDivs[26].classList.add('won');
//   } else if (ten && ten === eighteen && ten === twentySix && ten === thirtyFour ) { 
//     handleWin(ten);
//     cellDivs[10].classList.add('won');
//     cellDivs[18].classList.add('won');
//     cellDivs[26].classList.add('won');
//     cellDivs[34].classList.add('won');
//   }
//   // FIRST 
//   else if (one && one === nine && one === seventeen && one === twentyFive ) { 
//     handleWin(one);
//     cellDivs[1].classList.add('won');
//     cellDivs[9].classList.add('won');
//     cellDivs[17].classList.add('won');
//     cellDivs[25].classList.add('won');
//   } else if (nine && nine === seventeen && nine === twentyFive && nine === thirtyThree ) { 
//     handleWin(nine);
//     cellDivs[9].classList.add('won');
//     cellDivs[17].classList.add('won');
//     cellDivs[25].classList.add('won');
//     cellDivs[33].classList.add('won');
//   } else if (seventeen && seventeen === twentyFive && seventeen === thirtyThree && seventeen === fourtyOne ) { 
//     handleWin(seventeen);
//     cellDivs[17].classList.add('won');
//     cellDivs[25].classList.add('won');
//     cellDivs[33].classList.add('won');
//     cellDivs[41].classList.add('won');
//   }
//   // ZERO
//   else if (zero && zero === eight && zero === sixteen && zero === twentyFour ) { 
//     handleWin(zero);
//     cellDivs[0].classList.add('won');
//     cellDivs[8].classList.add('won');
//     cellDivs[16].classList.add('won');
//     cellDivs[24].classList.add('won');
//   }  else if (eight && eight === sixteen && eight === twentyFour && eight === thirtyTwo ) { 
//     handleWin(eight);
//     cellDivs[8].classList.add('won');
//     cellDivs[16].classList.add('won');
//     cellDivs[24].classList.add('won');
//     cellDivs[32].classList.add('won');
//   }  else if (sixteen && sixteen === twentyFour && sixteen === thirtyTwo && sixteen === fourty ) { 
//     handleWin(sixteen);
//     cellDivs[8].classList.add('won');
//     cellDivs[16].classList.add('won');
//     cellDivs[24].classList.add('won');
//     cellDivs[32].classList.add('won');
//   } 
//   // SEVEN
//   else if (seven && seven === fifteen && seven === twentyThree && seven === thirtyOne ) { 
//     handleWin(seven);
//     cellDivs[7].classList.add('won');
//     cellDivs[15].classList.add('won');
//     cellDivs[23].classList.add('won');
//     cellDivs[31].classList.add('won');
//   } else if (fifteen && fifteen === twentyThree && fifteen === thirtyOne && fifteen === thirtyNine ) { 
//     handleWin(fifteen);
//     cellDivs[15].classList.add('won');
//     cellDivs[23].classList.add('won');
//     cellDivs[31].classList.add('won');
//     cellDivs[39].classList.add('won');
//   }
//   // FOURTEEN
//   else if (fourteen && fourteen === twentyTwo && fourteen === thirty && fourteen === thirtyEight ) { 
//     handleWin(fourteen);
//     cellDivs[14].classList.add('won');
//     cellDivs[22].classList.add('won');
//     cellDivs[30].classList.add('won');
//     cellDivs[38].classList.add('won');
//   }  
  

//   // the rest 
//   else if (one && one && two  && four && five && six && eight && nine && ten && 
//            eleven && twelve && thirteen && fourteen && fifteen && sixteen && seventeen && eighteen && nineteen &&
//            twenty && twentyOne && twentyTwo  && twentyThree && twentyFour && twentyFive && twentySix && twentySeven && twentyEight && twentyNine &&
//            thirty && thirtyOne && thirtyTwo  && thirtyThree && thirtyFour && thirtyFive && thirtySix && thirtySeven && thirtyEight && thirtyNine &&
//            fourty && fourtyOne
//            ){  
//     gameIsLive = false;
//     statusDiv.innerHTML = 'Game is tied!';                                                                   // if all cells are filled but there is no winning combination, game is draw
//   } else {
//     xIsNext = !xIsNext;
//     if (xIsNext) {
//       statusDiv.innerHTML = `${xSymbol} now is your turn`;                                                   // if x is true type this, but afterzero true it becomes false
//     } else {
//       statusDiv.innerHTML = `<span>${oSymbol} now is you turn </span>`;                                     // if x is false type o
//     }
//   }
// };


// // event Handlers
// const handleReset = () => {                                             // reset bottom: remove x, 0, won. Bring text of xSymbol is next. Change style of status (text)
//   xIsNext = true;
//   statusDiv.innerHTML = `${xSymbol} is next`;
//   for (const cellDiv of cellDivs) {
//     cellDiv.classList.remove('x');
//     cellDiv.classList.remove('o');
//     cellDiv.classList.remove('won');
//   }
//   gameIsLive = true;
//   statusDiv.style.backgroundColor = 'black'
// };

// const handleCellClick = (e) => {                                       // function that adds x or o to as 2nd class of grid-cells.
//   const classList = e.target.classList;

//   if (!gameIsLive || classList[1] === 'x' || classList[1] === 'o') {   // x or o. Not both or multiple
//     return;
//   }

//   if (xIsNext) {                                                       // first adds x then o then x then o. 
//     classList.add('x');
//     checkGameStatus();
//   } else {
//     classList.add('o');
//     checkGameStatus();
//   }
// };

// // event listeners
// resetDiv.addEventListener('click', handleReset);                     // while clicking to resetDiv it declares handleReset function

// for (const cellDiv of cellDivs) {                                    // while clickin in grid-cells that are children of grid it declares handleCellClick which adds x or o to element as addition class
//   cellDiv.addEventListener('click', handleCellClick)
// }

