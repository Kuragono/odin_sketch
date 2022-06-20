function addDiv(amount, size) {
    for (let i = 0; i <= amount-1; i++) {
        let newDiv = document.createElement('div');
        newDiv.className = 'squaredivh';
        newDiv.style.height = `${size}px`;
        newDiv.style.width = `${size}px`;
        document.body.querySelector('.main').appendChild(newDiv);
        for (let j = 0; j <= amount-1; j++) {
            let newDiv = document.createElement('div');
            newDiv.className = 'squaredivv';
            newDiv.style.height = `${size}px`;
            newDiv.style.width = `${size}px`;
            document.body.querySelectorAll('.squaredivh')[i].appendChild(newDiv);
        }
    }
    // let newGrid = document.createElement('div');
    // newGrid.className = 'grid';
    // newGrid.style.height = `${size*amount}px`;
    // newGrid.style.width = `${size*amount}px`;
    // document.body.querySelector('.main').appendChild(newGrid);
}

addDiv(16, 25);