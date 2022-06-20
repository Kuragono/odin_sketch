function addDiv(amount, size) {
    for (let i = 0; i <= amount-1; i++) {
        let newDiv = document.createElement('div');
        newDiv.className = 'squaredivh';
        newDiv.style.height = `${size}px`;
        newDiv.style.width = `${size}px`;
        document.body.querySelector('.main').appendChild(newDiv);
        for (let j = 0; j <= amount - 1; j++) {
            let newDiv = document.createElement('div');
            newDiv.className = `squaredivv`;
            newDiv.id = `squaredivv${(j+1)+16*i}`;
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

function mouseOver(element) {
    element.style.backgroundColor = 'black';
}

addDiv(16, 25);

document.querySelectorAll('[id^=squaredivv]').addEventListener('mouseover', mouseOver(document.querySelectorAll('[id^=squaredivv]')));