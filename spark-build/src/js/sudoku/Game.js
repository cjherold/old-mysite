import loadouts from "./loadouts";
/**
 * Main game class.
 * Selects loadout, shuffles, checks for win, new game
 * Difficulty will affect amount of tiles initially showing
 */
 class Game {
    constructor(difficulty) {
        const difficultyNumber = {
            easy: 60,
            medium: 50,
            hard: 35,
        };
        this.difficulty = difficultyNumber[difficulty];
        const selected = Math.floor(Math.random() * loadouts.length);
        this.loadout = loadouts[selected] || [];
    }

    /**
     *  Builds the html for the puzzle container
     */
    initialize() {
        // Prepare the loadout
        this.swapLoadoutValues({ numberOfSwaps: 2 });
        this.shuffleLoadout();
        this.flattenLoadout();

        // Using the loadout, apply values to each tile on the board
        return this.createBoard();
    }

    /**
     * Picks 2 random numbers and swaps them in the loadout
     */
    swapLoadoutValues({numberOfSwaps}) {
        const swapValues = (selected, first, second) => {
            if (selected === first) return second;
            if (selected === second) return first;
            return selected;
        };

        for (let i = 0; i < numberOfSwaps; i++) {
            const value1 = (Math.floor(Math.random() * 9)) + 1;
            const value2 = (Math.floor(Math.random() * 9)) + 1;
            // swap values
            this.loadout = this.loadout.map(row => {
                row = row.map(seleced => swapValues(seleced, value1, value2));
                return row;
            });
        }
    }

    /**
     *  Shuffles rows around to make the puzzle appear to be a brand new loadout.
     *  Sort of like turning a row on a rubik's cube
     */
    shuffleLoadout() {
        const selected = (Math.floor(Math.random() * 3));
        const shuffleOptions = {
            0: () => {
                this.loadout = [
                    this.loadout[3],
                    this.loadout[4],
                    this.loadout[5],
                    this.loadout[6],
                    this.loadout[7],
                    this.loadout[8],
                    this.loadout[0],
                    this.loadout[1],
                    this.loadout[2],
                ];
            },
            1: () => {
                this.loadout = [
                    this.loadout[6],
                    this.loadout[7],
                    this.loadout[8],
                    this.loadout[0],
                    this.loadout[1],
                    this.loadout[2],
                    this.loadout[3],
                    this.loadout[4],
                    this.loadout[5],
                ];
            },
            2: () => {
                this.loadout = [
                    this.loadout[0],
                    this.loadout[1],
                    this.loadout[2],
                    this.loadout[6],
                    this.loadout[7],
                    this.loadout[8],
                    this.loadout[3],
                    this.loadout[4],
                    this.loadout[5],
                ];

            },
        };

        // Perform the shuffle
        shuffleOptions[selected]();
    }


    /**
     *  Convert loadout into a 2d array. Makes things easier and cleaner when using .map
     */
    flattenLoadout() {
        const flatLoadout = [];
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                flatLoadout.push(this.loadout[row][col]);
            }
        }
        this.loadout = flatLoadout;
    }

    /**
     *  Return the html for a new game. Gets placed into the puzzle container
     */
    createBoard() {
        const puzzleRow = (rowNumber) => {
            let puzzleRow = '';
            for (let i = 0; i < 9; i++) {
                const id = (rowNumber * 9) + i;
                const covered = (Math.floor(Math.random() * 100) > this.difficulty);
                const p = {
                    id,
                    correctanswer: this.loadout[id],
                    changeable: (covered) ? 'yes' : 'no',
                    correct: (covered) ? '' : 'correct',
                    covered: (covered) ? 'covered' : '',
                    html: (!covered) ? this.loadout[id] : '',
                };
                puzzleRow += (`
                        <div class="puzzle-tile d-flex">
                            <p id="${p.id}"
                                class="m-auto tile-number ${p.covered} ${p.correct}"
                                data-correctanswer="${p.correctanswer}"
                                data-changeable="${p.changeable}"
                            >${p.html}</p>
                        </div>
                    `);
            }
            return puzzleRow;
        };
        const board = () => {
            let board = '';
            for (let i = 0; i < 9; i++) {
                board += (`
                        <div class="row d-flex justify-content-center puzzle-row">
                            ${puzzleRow(i)}
                        </div>
                    `
                );
            }
            return board;
        };

        const html = board();
        return html;
    }
}

export default Game;