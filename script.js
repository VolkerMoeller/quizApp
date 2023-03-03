let questions = [

    {
        "question": "Welches Land sieht auf der Landkarte aus wie ein Stiefel?",
        "answer-1": "Italien",
        "answer-2": "USA",
        "answer-3": "China",
        "answer-4": "Thailand",
        "right-answer": 1
    },
    {
        "question": "Nach wem wird eine Frisur benannt?",
        "answer-1": "Zöpfern",
        "answer-2": "Piss-Pottern",
        "answer-3": "Wikingern",
        "answer-4": "Irokesen",
        "right-answer": 4
    },
    {
        "question": "Was passt zusammen?",
        "answer-1": "Fidel Castro und Jamaika",
        "answer-2": "Fidel Castro und Kuba",
        "answer-3": "Fidel Castro und Bolivien",
        "answer-4": "Fidel Castro und Hawaii",
        "right-answer": 2
    },
    {
        "question": "Welche Insel besitzt die berühmten Steinskulpturen, die Moais genannt werden?",
        "answer-1": "Fidschi",
        "answer-2": "Osterinseln",
        "answer-3": "Vanuatu",
        "answer-4": "Galapagos",
        "right-answer": 2

    },
    {
        "question": "Wie heisst die Hauptstadt der USA?",
        "answer-1": "Washington D.C.",
        "answer-2": "New York",
        "answer-3": "Los Angeles",
        "answer-4": "Rocky Beach",
        "right-answer": 1
    },
    {
        "question": "Wie heisst ein Inselstaat im Pazifischen Ozean?",
        "answer-1": "Marshallinseln",
        "answer-2": "Sheriffinseln",
        "answer-3": "Rangerinseln",
        "answer-4": "Lieutenantinseln",
        "right-answer": 1
    },
    {
        "question": "Wie heisst Indiens wichtigster und längster Fluss??",
        "answer-1": "Seine",
        "answer-2": "Spree",
        "answer-3": "Ganges",
        "answer-4": "Amazonas",
        "right-answer": 3
    }
];

let currentQuestion = 0;
let counter = -1;


function init() {
    document.getElementById('count-all').innerHTML = questions.length;
    showQuestion();
}


function showQuestion() {
    counter++;
    updateProgress(counter);
    if (currentQuestion >= questions.length) {
        // showEndScreen
    } else {
        let question = questions[currentQuestion];
        document.getElementById('question-number').innerHTML = currentQuestion + 1;
        document.getElementById('card-question').innerHTML = question['question'];
        document.getElementById('answer-1').innerHTML = question['answer-1'];
        document.getElementById('answer-2').innerHTML = question['answer-2'];
        document.getElementById('answer-3').innerHTML = question['answer-3'];
        document.getElementById('answer-4').innerHTML = question['answer-4'];
    }
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfCurrentListItem = `listItem-${selectedQuestionNumber}`;

    let idOfRightAnswer = `answer-${question['right-answer']}`;
    let idOfListItemRightAnswer = `listItem-${question['right-answer']}`

    if (selectedQuestionNumber == question['right-answer']) {
        styleRightAnswer(selection, idOfListItemRightAnswer);
    } else {
        styleWrongAnswer(selection, idOfCurrentListItem, idOfRightAnswer, idOfListItemRightAnswer);
    }
    document.getElementById('next-Button').disabled = false;
}


function styleRightAnswer(selection, idOfListItemRightAnswer) {
    document.getElementById(selection).parentNode.classList.add('bg-success');
    document.getElementById(idOfListItemRightAnswer).classList.remove('bg-opacity-25');
    document.getElementById(idOfListItemRightAnswer).classList.add('bg-success');
    document.getElementById(idOfListItemRightAnswer).classList.add('text-white');
}

function styleWrongAnswer(selection, idOfCurrentListItem, idOfRightAnswer, idOfListItemRightAnswer) {
    document.getElementById(selection).parentNode.classList.add('bg-danger');
    document.getElementById(idOfCurrentListItem).classList.add('text-white');
    document.getElementById(idOfCurrentListItem).classList.remove('bg-opacity-25');
    document.getElementById(idOfCurrentListItem).classList.add('bg-danger');
    document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    document.getElementById(idOfListItemRightAnswer).classList.remove('bg-opacity-25');
    document.getElementById(idOfListItemRightAnswer).classList.add('bg-success');
    document.getElementById(idOfListItemRightAnswer).classList.add('text-white');
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-Button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {
    for (let i = 1; i < 5; i++) {
        document.getElementById(`answer-${i}`).parentNode.classList.remove('bg-danger');
        document.getElementById(`answer-${i}`).parentNode.classList.remove('bg-success');
        document.getElementById(`listItem-${i}`).classList.add('bg-opacity-25');
        document.getElementById(`listItem-${i}`).classList.remove('bg-success');
        document.getElementById(`listItem-${i}`).classList.remove('bg-danger');
        document.getElementById(`listItem-${i}`).classList.remove('text-white');
    }
}

function updateProgress(counter) {
    let valueProgress = 100 / questions.length * counter;
    let newProgress = `width: ${valueProgress}%`;
    document.getElementById('progress').style = newProgress;
}