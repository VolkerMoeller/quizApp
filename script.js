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
];

let currentQuestion = 0;


function init() {
    document.getElementById('count-all').innerHTML = questions.length;
    showQuestion();
}


function showQuestion () {
    let question = questions[currentQuestion];
    document.getElementById('question').innerHTML = question['question'];
    document.getElementById('answer-1').innerHTML = question['answer-1'];
    document.getElementById('answer-2').innerHTML = question['answer-2'];
    document.getElementById('answer-3').innerHTML = question['answer-3'];
    document.getElementById('answer-4').innerHTML = question['answer-4'];
}