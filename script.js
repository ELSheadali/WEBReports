function changePage(pageName) {
    var mainContent = document.getElementById('mainContent');
    var labsButtons = document.querySelectorAll('#LabsButtons button');

    // Знайти натиснуту кнопку за pageName
    var pressedButton = Array.from(labsButtons).find(function (btn) {
        return btn.onclick && btn.onclick.toString().includes(pageName);
    });

    // Зняти попередню натиснутість з усіх кнопок
    labsButtons.forEach(function (btn) {
        btn.classList.remove('pressed');
        // Зняти стилі з попередньої натиснутої кнопки
        btn.style.backgroundColor = '#D9D9D9';
        btn.style.color = '#000000';
    });

    // Додати клас "pressed" до нової натиснутої кнопки
    if (pressedButton) {
        pressedButton.classList.add('pressed');
        // Змінити стилі нової натиснутої кнопки
        pressedButton.style.backgroundColor = '#555';
        pressedButton.style.color = '#EFF9FF';
    }

    var labsFolderPath = 'labs/';
    var labFilePath = labsFolderPath + pageName;

    fetch(labFilePath)
        .then(response => response.text())
        .then(data => {
            mainContent.innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
}

function changeContent(contentType) {
    var mainContent = document.querySelector('.main2-content');
    var contentButtons = document.querySelectorAll('.buttons button');

    // Знайти натиснуту кнопку за contentType
    var pressedButton = Array.from(contentButtons).find(function (btn) {
        return btn.onclick && btn.onclick.toString().includes(contentType);
    });

    // Зняти попередню натиснутість з усіх кнопок
    contentButtons.forEach(function (btn) {
        btn.classList.remove('pressed');
        // Зняти стилі з попереднього вибраного контенту
        btn.style.backgroundColor = '#eed5b0';
        btn.style.color = '#000000';
    });

    // Додати клас "pressed" до нової натиснутої кнопки
    if (pressedButton) {
        pressedButton.classList.add('pressed');
        // Змінити стилі ново вибраного контенту
        pressedButton.style.backgroundColor = '#e9ae61';
        pressedButton.style.color = '#000000';
    }

    var contentFilePath = 'content/' + contentType + '.html';

    fetch(contentFilePath)
        .then(response => response.text())
        .then(data => {
            mainContent.innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
}

//------------------- start Лабораторна №5 МАСИВИ -------------------------
function sumBetweenMinMax(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let maxIndex = arr.indexOf(max);
    let minIndex = arr.indexOf(min);
    let startIndex = Math.min(maxIndex, minIndex) + 1;
    let endIndex = Math.max(maxIndex, minIndex);
    let sum = 0;
    for (let i = startIndex; i < endIndex; i++) {
        sum += arr[i];
    }
    return sum;
}

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2)) {
            continue;
        }
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

function generateArray() {
    const numElements = parseInt(document.getElementById("numElements").value);
    const initialArray = [];
    for (let i = 0; i < numElements; i++) {
        initialArray.push(Math.floor(Math.random() * 100));
    }
    document.getElementById("initialArray").innerText = "Початковий масив: " + initialArray.join(", ");
    const resultArray = quickSort([...initialArray]);
    document.getElementById("resultArray").innerText = "Відсортований масив: " + resultArray.join(", ");
    const sum = sumBetweenMinMax(initialArray);
    document.getElementById("sum").innerText = "Сума елементів між min та max: " + sum;
}
//------------- end Лабораторна №5 МАСИВИ ------------------------
