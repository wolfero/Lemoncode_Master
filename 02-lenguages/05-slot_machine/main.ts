class SlothMachine {
    coinsCounter = 0;
    readonly losingMessage = 'Good luck next time!!';

    coinsIncrement() {
        this.coinsCounter++;
    }
    coinsReset() {
        this.coinsCounter = 0;
    }

    play() {
        this.coinsIncrement();

        const firstRoulette = this.stateRoulette();
        const secondRoulette = this.stateRoulette();
        const thirdRoulette = this.stateRoulette();

        const winningCondition =
            firstRoulette && secondRoulette && thirdRoulette;

        if (winningCondition) {
            const winningMessage = `Congratulations!!!. You won ${this.coinsCounter} coins!!`;
            this.coinsReset();
            return winningMessage;
        } else {
            return this.losingMessage;
        }
    }

    stateRoulette() {
        return Math.random() < 0.5;
    }
}

const machine = new SlothMachine();
console.log(machine.play());
console.log(machine.play());
console.log(machine.play());
console.log(machine.play());
console.log(machine.play());
console.log(machine.play());
console.log(machine.play());
console.log(machine.play());
