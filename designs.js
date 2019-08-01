// Select color input
// Select size input

var sizeForm = document.getElementById('sizePicker');                     // variable that holds the size form object
var myTable = document.getElementById('pixelCanvas');                     // variable that hold the pixel Canvas Table
var myColor = document.getElementById('colorPicker');                     // variabble that holds color input object 
var defColor = 1;                                                          // variable that tracks weather a color has been  
var colorTracker = 0;                                                      // variable used to track if squares have been colored

function clearTable(){                                                    // function to clear colors from the squares
    var new_tbody = document.createElement('tbody');                      
    var old_tbody = myTable.querySelector('tbody');
    myTable.replaceChild(new_tbody,old_tbody);
   
}

function makeGrid() {                                                            // function that draws the table grid
    var height = Number((document.getElementById('inputHeight')).value);         // variable that holds the number of rows
    var width = Number((document.getElementById('inputWidth')).value);           // variable that holds the number of columns
        for (var r = 0; r < height; r++){
       var thisRow = myTable.insertRow();
            for (var c = 0; c < width; c++){
            thisRow.insertCell();

            }
            
        }
    
 }

sizeForm.addEventListener('submit',function(event){                                  // listener for the submit button
    if (colorTracker === 0 ){
        event.preventDefault();
        makeGrid();
        }
    else{
        event.preventDefault();
        clearTable();
        makeGrid();
    }
});

myTable.addEventListener('click',function(event){                                // listener to color the squares 
    if (event.target.nodeName === 'TD'){
        var myCell = event.target;
        if (defColor === 1){
            myCell.style.background = 'black';
        }
        else {
            myCell.style.background = myColor;
            colorTracker = 1;
        }    
    }
    
});

myColor.addEventListener('input', function(){                                    // listener to select and change the color
    myColor = (document.getElementById('colorPicker')).value;
    defColor = 0;
});

