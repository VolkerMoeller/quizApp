let questionsGeography = [

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
        "question": "Wie heisst Indiens wichtigster und längster Fluss?",
        "answer-1": "Seine",
        "answer-2": "Spree",
        "answer-3": "Ganges",
        "answer-4": "Amazonas",
        "right-answer": 3
    }
];

let questionsPersons = [

    {
        "question": "Welcher &quot;Hermann&quot; ist kein Musiker?",
        "answer-1": "Rarebell",
        "answer-2": "Hesse",
        "answer-3": "Brood",
        "answer-4": "Van Veen",
        "right-answer": 2
    },
    {
        "question": "Welcher berühmte Apotheker und Esoteriker verfasste &quot;Les Prophethies&quot; (Die Prophezeiungen)?",
        "answer-1": "Nostradamus",
        "answer-2": "Klingsor",
        "answer-3": "John Dee",
        "answer-4": "Giovanni Battista Seni",
        "right-answer": 1
    }
];


let questionsAnimals = [

    {
        "question": "Welches Tier hat den lautesten Schrei der Welt?",
        "answer-1": "Brüllaffe",
        "answer-2": "Esel",
        "answer-3": "Wolf",
        "answer-4": "Löwe",
        "right-answer": 1
    },
    {
        "question": "Wo sind Steppenzebras zu Hause?",
        "answer-1": "in der Prärie",
        "answer-2": "im Urwald",
        "answer-3": "in den Bergen",
        "answer-4": "in der Savanne",
        "right-answer": 4
    }
];

let currentQuestion = 0;
let counter = -1;
let counterRight = 0;
let counterWrongAnswer = 0;
let AUDIO_success = new Audio('audio/sound-success.mp3');
let AUDIO_wrong = new Audio('audio/sound-wrong.mp3');
let AUDIO_fanfare = new Audio('audio/sound-fanfare.mp3')


async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}


function setCurrentButtonOnActiveById(id_Current_Button) {
    for (let i = 1; i < 4; i++) {
        let id_btn = 'nav-btn-' + i;
        document.getElementById(id_btn).classList.remove('active');
    }
    document.getElementById(id_Current_Button).classList.add('active');
}


function chooseGeography() {
    questions = questionsGeography;
}


function choosePersons() {
    questions = questionsPersons;
}


function chooseAnimals() {
    questions = questionsAnimals;
}


function showGeography() {
    chooseGeography();
    setCurrentButtonOnActiveById('nav-btn-1');
    initQuestions();
    closeMenu();
}


function showPersons() {
    choosePersons();
    setCurrentButtonOnActiveById('nav-btn-2');
    resetAnswerButtons();
    initQuestions();
    closeMenu();
}


function showAnimals() {
    chooseAnimals();
    setCurrentButtonOnActiveById('nav-btn-3');
    initQuestions();
    closeMenu();
}


function initQuestions() {
    resetAnswerButtons();
    document.getElementById('welcome').classList.add('d-none');
    document.getElementById('questions').classList.remove('d-none');
    replay();
}


function init() {
    document.getElementById('count-all').innerHTML = questions.length;
    enableButtons();
    showQuestion();
}


function showEnd() {
    document.getElementById('end').classList.remove('d-none');
    document.getElementById('questions').classList.add('d-none');
}


function enableButtons() {
    for (i = 1; i < 5; i++) {
        document.getElementById(`answerb-${i}`).disabled = false;
    }
}


function disableButtons() {
    for (i = 1; i < 5; i++) {
        document.getElementById(`answerb-${i}`).disabled = true;
    }
}


function showQuestion() {
    counter++;
    updateProgress(counter, 'progress');
    updateProgress(counterWrongAnswer, 'progressWrongAnswer');
    updateProgress(counterRight, 'progressRightAnswer');

    if (gameOver()) {
        showEndScreen();
    } else {
        updateToNextQuestion();
    }
}


function gameOver() {
    return currentQuestion >= questions.length;
}


function updateToNextQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('card-question').innerHTML = question['question'];
    document.getElementById('answer-1').innerHTML = question['answer-1'];
    document.getElementById('answer-2').innerHTML = question['answer-2'];
    document.getElementById('answer-3').innerHTML = question['answer-3'];
    document.getElementById('answer-4').innerHTML = question['answer-4'];
}


function showEndScreen() {
    AUDIO_fanfare.play();
    showEnd();
    document.getElementById('containerQuiz').classList.add('d-none');
    document.getElementById('containerQuizEnd').classList.remove('d-none');
    document.getElementById('countRightAnswers').innerHTML = `&ensp;` + counterRight;
    document.getElementById('countTotalAnswers').innerHTML = questions.length;
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfCurrentListItem = `listItem-${selectedQuestionNumber}`;
    let idOfRightAnswer = `answer-${question['right-answer']}`;
    let idOfListItemRightAnswer = `listItem-${question['right-answer']}`
    if (answerWasCorrect(selectedQuestionNumber, question)) {
        animateButtonAndUpdateCounter(selection, idOfListItemRightAnswer);
    } else {
        animateRightAndWrongButtonAndUpdateCounter(selection, idOfCurrentListItem, idOfRightAnswer, idOfListItemRightAnswer);
    }
    enableNextButton();
}


function enableNextButton() {
    document.getElementById('next-Button').disabled = false;
}


function animateButtonAndUpdateCounter(selection, idOfListItemRightAnswer) {
    AUDIO_success.play();
    styleRightAnswer(selection, idOfListItemRightAnswer);
    disableButtons();
    counterRight++;
}


function animateRightAndWrongButtonAndUpdateCounter(selection, idOfCurrentListItem, idOfRightAnswer, idOfListItemRightAnswer) {
    AUDIO_wrong.play();
    styleWrongAnswer(selection, idOfCurrentListItem, idOfRightAnswer, idOfListItemRightAnswer);
    disableButtons();
    counterWrongAnswer++;
}


function answerWasCorrect(selectedQuestionNumber, question) {
    return selectedQuestionNumber == question['right-answer'];
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
    stopSound();
    currentQuestion++;
    document.getElementById('next-Button').disabled = true;
    resetAnswerButtons();
    showQuestion();
    enableButtons();
}


function stopSound() {
    AUDIO_success.pause();
    AUDIO_success.currentTime = 0;
    AUDIO_wrong.pause();
    AUDIO_wrong.currentTime = 0;
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


function updateProgress(counter, idProgress) {
    let valueProgress = 100 / questions.length * counter;
    let newProgress = `width: ${valueProgress}%`;
    document.getElementById(idProgress).style = newProgress;
}


function replay() {
    stopSound();
    setGlobalValues();
    hideEndScreenAndShowQuiz();
    enableButtons();
    init();
}


function hideEndScreenAndShowQuiz() {
    document.getElementById('containerQuizEnd').classList.add('d-none');
    document.getElementById('containerQuiz').classList.remove('d-none');
    document.getElementById('end').classList.add('d-none');
    document.getElementById('questions').classList.remove('d-none');
}


function setGlobalValues() {
    currentQuestion = 0;
    counter = -1;
    counterRight = 0;
    counterWrongAnswer = 0;
}


function showMenu() {
    document.getElementById('navigation').classList.add('show_overlay_menu');
}


function closeMenu() {
    document.getElementById('navigation').classList.remove('show_overlay_menu');
}