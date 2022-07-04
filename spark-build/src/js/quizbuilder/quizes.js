const quizes = [
    {
        title: 'Random Facts Quiz',
        questions: [
            {
                question: 'Wich of these most closely matches the distance to the Moon?',
                questionType: 'multiple-choice',
                answers: [
                    '200,000 miles',
                    '500,000 miles',
                    '1,000,000 miles',
                    '80,000 miles',
                ],
                correctMatch: '200,000 miles',
                correctResponse: 'The Moon is 238,900 miles away.',
            },
            {
                question: 'Bulls hate the color red.',
                questionType: 'true-false',
                correctMatch: false,
                correctResponse: 'False. They are actually color blind.',
            },
            {
                question: 'Minnesota is sometimes colder than Mars.',
                questionType: 'true-false',
                correctMatch: true,
                correctResponse: 'True. Mars can go from -220F to 70F.',
            },
            {
                question: 'Which planet is, on average, closest to Earth?',
                questionType: 'multiple-choice',
                answers: [
                    'Mars',
                    'Mercury',
                    'Venus',
                    'Saturn',
                ],
                correctMatch: 'Mercury',
                correctResponse: 'Although Venus comes closer to Earth at times, it has a wide orbit. Mercury is actually closer on average.',
            },
            {
                question: 'If you combined all the gold ever mined, it would cover the state of Main.',
                questionType: 'true-false',
                correctMatch: false,
                correctResponse: 'False, all the gold ever mined would form a cube roughly 21 meters on each side.',
            },
            {
                question: 'Dogs are great!',
                questionType: 'true-false',
                correctMatch: true,
                correctResponse: 'True. They are best.',
            },
        ]
    },
    {
        title: 'Biology Quiz',
        questions: [
            {
                question: 'A tomato is a fruit.',
                questionType: 'true-false',
                correctMatch: 'true',
                correctResponse: 'True... I think? I mean they DO have seeds, right?',
            },

        ]
    }
];

export default quizes;
