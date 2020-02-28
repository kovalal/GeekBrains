const question = {
    question: "Хочешь стать миллионером?",
    various: ["Нет", "Не заню", "А что?"],
    answer:  "Да"
};

let case_ = {
    answer: (Math.floor(Math.random() * 4) + 1),
    showQuestion(quest) {
        let str = quest.question + '\n';
        var vars = quest.various;
        vars.splice(this.answer - 1, 0, quest.answer);
        for (let i = 0; i < vars.length; i++) {
            str += ((i + 1) + ' - ' + vars[i] + '\n')
        }
        answerUser = Number(prompt(str))
        return answerUser == this.answer
    }
};

let billioner = {
    init() {
        console.log("If you want to play, types billioner.run()")
    },
    run() {
        if (case_.showQuestion(question)) {
            alert("WIN!")
        } else {
            alert("LOOSER!")
        }
    }
};

billioner.init()