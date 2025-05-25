const b2 = document.querySelector('.move_to_B2');
const b1 = document.querySelector('.move_to_B1');

const total_apple = 10;
const total_b1 = document.querySelector('.basket1 h1');
let totalapple_b1 = total_apple;
total_b1.innerHTML = totalapple_b1;

let totalapple_b2 = total_apple - totalapple_b1;
const total_b2 = document.querySelector('.basket2 span');
total_b2.innerText = totalapple_b2;

b2.addEventListener('click', () => {
    if (totalapple_b1 > 0) {
        console.log('totalapple_b1', totalapple_b1);
        console.log('totalapple_b2', totalapple_b2);
        
        totalapple_b1--;
        total_b1.innerHTML = totalapple_b1;

        totalapple_b2++;
        total_b2.innerText = totalapple_b2;

        console.log('totalapple_b1', totalapple_b1);
        console.log('totalapple_b2', totalapple_b2);
    }
});

b1.addEventListener('click', () => {
    if (totalapple_b2 > 0) {
        console.log('totalapple_b1', totalapple_b1);
        console.log('totalapple_b2', totalapple_b2);
        
        totalapple_b1++;
        total_b1.innerHTML = totalapple_b1;

        totalapple_b2--;
        total_b2.innerText = totalapple_b2;

        console.log('totalapple_b1', totalapple_b1);
        console.log('totalapple_b2', totalapple_b2);
    }
});