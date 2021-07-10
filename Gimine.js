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
            if (person.gender) {  // ei gender yra true (visada true by default)
                //statusas = person.married ? 'istekejusi' : 'neistekejusi';
                // arba
                statusas = (person.married ? '' : 'ne') + 'istekejusi';
            } else {
                //statusas = person.married ? 'vedes' : 'nevedes';
                // arba
                statusas = (person.married ? '' : 'ne') + 'vedes';
            }
            /*  // ARBA
            if (person.married) {
                statusas = 'yra';
            */

            console.log(`${i + 1}. ${person.name} gime ${person.year} metais ir yra ${statusas}`);
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
            if (i !== index) {  //jei mano asmuo nesutampa su tuo, kuris mire, tada
                updatedList.push(this.list[i]);
            }
        }
        this.list = updatedList; //perrasau LIST reiksme (overwrite)

        console.log('------------------');
    }
    skyrybos(index) {
        this.list[index].married = false;
    }
}

module.exports = Gimine;