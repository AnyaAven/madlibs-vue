/** Madlib Story */

type tPartsOfSpeech = 'verb' | 'noun' | 'adjective' | 'adverb' | 'pronoun';
type tMadLibAnswers = {
    [K in `${ tPartsOfSpeech }${ number | '' }`]?: string;
};

/** Build madlib game
 *
 * title: string
 * prompts: ["noun", "verb", "noun2",...]
 * template: "In the cozy corner of the [noun]...."
 */
class Story {

    title: string;
    prompts: `${ tPartsOfSpeech }${ number | '' }`[];
    template: string;

    constructor({ title, prompts, template }: {
        title: string,
        prompts: `${ tPartsOfSpeech }${ number | '' }`[],
        template: string
    }) {
        this.title = title;
        this.prompts = prompts;
        this.template = template;
    }

    /** Return result text from obj of {prompt: answer, ...}*/
    getResultText(answers: tMadLibAnswers) {
        let result = this.template;
        console.log({result, answers})

        for (const prompt in answers) {
            const answer = answers[prompt as keyof tMadLibAnswers];
            if (answer) {
                result = result.replace(`[${ prompt }]`, answer)
            }
        }

        return result
    }
}

export { Story };