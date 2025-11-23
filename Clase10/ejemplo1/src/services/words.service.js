import Factory from "../models/Factory.js";

class WordsService {
    constructor() {
        this.model = Factory.get("");
    }

    getAllWords = async () => {
        const words = await this.model.getAllWords();
        return words;
    };

    postWords = async (word) => {
        const newWord = await this.model.postWords(word);
        return newWord;
    };

    patchWords = async (identificador, word) => {
        const update = await this.model.patchWords(identificador, word);
        return update;
    };
}

export default WordsService;
