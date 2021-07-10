const Gimine = require('./Gimine.js');

const bajorai = new Gimine();

console.log(bajorai); // gimines sarasas

bajorai.gime({ name: 'Augustas', year: 2000 });
bajorai.gime({ name: 'Barbora', year: 1998 });
bajorai.gime({ name: 'Jogaila', year: 1985 });

console.log(bajorai); // gimines sarasas

bajorai.giminesMedis();
// 1. Augustas gime 2000 metais ir nera vedes.
// 2. Barbora gime 1998 metais ir nera vedes.

bajorai.zmogausInformacija(0);
// {name: 'Augustas', year: 2000, married: false}

bajorai.zmogausInformacija(1);
// {name: 'Barbora', year: 1998, married: false}

bajorai.zmogausInformacija(2);
// { name: 'Jogaila', year: 1985, married: false }

bajorai.vestuves(2);

bajorai.giminesMedis();
// 1. Augustas gime 2000 metais ir nera vedes.
// 2. Barbora gime 1998 metais ir nera vedes.
// 3. Jogaila gime 1985 metais ir yra vedes.

bajorai.vestuves(1);

bajorai.giminesMedis();
// 1. Augustas gime 2000 metais ir nera vedes.
// 2. Barbora gime 1998 metais ir yra vedes.

bajorai.vestuves(0);

bajorai.giminesMedis();
// 1. Augustas gime 2000 metais ir yra vedes.
// 2. Barbora gime 1998 metais ir yra vedes.

bajorai.mire(1);

bajorai.giminesMedis();
// 1. Augustas gime 2000 metais ir yra vedes.

bajorai.skyrybos(1);

bajorai.giminesMedis();
// 1. Augustas gime 2000 metais ir yra vedes.
// 2. Jogaila gime 1985 metais ir nera vedes.

bajorai.skyrybos(0);

bajorai.giminesMedis();
// 1. Augustas gime 2000 metais ir nera vedes.
// 2. Jogaila gime 1985 metais ir nera vedes.
