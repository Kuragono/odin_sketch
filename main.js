const GRID_SIZE = 640;

function createGrid(amount) {
    for (let i = 0; i <= amount-1; i++) {
        let newDiv = document.createElement('div');
        newDiv.className = 'squaredivh';
        newDiv.style.height = `${(GRID_SIZE/amount)}px`;
        newDiv.style.width = `${(GRID_SIZE/amount)}px`;
        document.body.querySelector('.main').appendChild(newDiv);
        for (let j = 0; j <= amount - 1; j++) {
            let newDiv = document.createElement('div');
            newDiv.className = `squaredivv`;
            newDiv.id = `squaredivv${(j+1)+16*i}`;
            newDiv.style.height = `${(GRID_SIZE/amount)}px`;
            newDiv.style.width = `${(GRID_SIZE/amount)}px`;
            document.body.querySelectorAll('.squaredivh')[i].appendChild(newDiv);
        }
    }
}

createGrid(16);

// gets sliderbar input and refreshes the grid with the appropriate size
function sliderBarValue() {
    let value = document.getElementById('sliderRange').value;
    createGrid(value);
}

// adds hover class to the grid squares
$('.main').on('mouseenter', '.squaredivv', function() {
        $(this).addClass('hover');
    }
);

// refreshes the grid when the refresh button is clicked
$('body').on('click', '.refresh', function() {
        $('.squaredivv').removeClass('hover');
    }
);

// deletes old grid and calls sliderBarValue() when the slider is changed
$('#sliderRange').on('click', function() {
    $('.squardivv').remove();
    $('.squaredivh').remove();
    sliderBarValue();
    }
);