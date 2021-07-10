class Gimine {
    constructor() {
        this.list = [];
    }

    gime(item) {
        item.married = false;  //pridedam dar viena pozymi
        this.list.push(item);

        console.log('----------------');
    }

    giminesMedis() {
        for (let i = 0; i < this.list.length; i++) {
            const person = this.list[i];
            let statusas = '';
            if (person.married === true) {
                statusas = 'yra';
            } else {
                statusas = 'nera';
            }
            /*  // ARBA
            if (person.married) {
                statusas = 'yra';
            */
            console.log(`${i + 1}. ${person.name} gime ${person.year} ir ${statusas} vedes.`);
        }
        console.log('------------------');
    }

    zmogausInformacija(index) {
        console.log(this.list[index]);

        console.log('------------------');
    }
    vestuves(index) {
        this.list[index].married = true;

        console.log('------------------');
    }
    mire(index) {
        const updatedList = [];

        for (let i = 0; i < this.list.length; i++) {
            if (i !== index) {
                updatedList.push(this.list[i]);
            }
        }
        this.list = updatedList;

        console.log('------------------');
    }
    skyrybos(index) {
        this.list[index].married = false;

    }
}

module.exports = Gimine;