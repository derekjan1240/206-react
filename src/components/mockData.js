function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rickAndMortys = [
    {
        'name': "MORTY",
        'imgSrc': 'https://i0.pngocean.com/files/421/837/156/morty-smith-rick-sanchez-computer-icons-clip-art-smiley.jpg',
        'data': [
            createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
            createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        ],
    },
    {
        'name': "RICK",
        'imgSrc': 'https://66.media.tumblr.com/21523a1c9f10700b3f95bf0bcafe133e/tumblr_oq4vp2Hkc11vua2npo2_250.jpg',
        'data': [
            createData('Cupcake', 305, 3.7, 67, 4.3),
            createData('Eclair', 262, 16.0, 24, 6.0),
            createData('Pickle', 305, 3.7, 67, 4.3),
        ],
    },
    {
        'name': "PICKLE_RICK",
        'imgSrc': 'https://cdn.statically.io/img/www.tshirtterrorist.co.za/f=auto/wp-content/uploads/2017/10/picklerick-520.4.jpg',
        'data': [
            createData('Gingerbread', 356, 16.0, 49, 3.9)
        ],
    },
];
const pokemons = [
    {
        'name': "Diglett",
        'imgSrc': 'https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/583fa625d6fda586a5734f5f9e455952aa6af15f.png',
        'data': [createData('Frozen yoghurt', 159, 6.0, 24, 4.0)],
    },
    {
        'name': "Electrode",
        'imgSrc': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/101.png',
        'data': [
            createData('Cupcake', 305, 3.7, 67, 4.3),
            createData('Pickle', 305, 3.7, 67, 4.3),
        ],
    },
    {
        'name': "Magikarp",
        'imgSrc': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png',
        'data': [createData('Gingerbread', 356, 16.0, 49, 3.9)],
    },
    {
        'name': "Bellsprout",
        'imgSrc': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/069.png',
        'data': [
            createData('Gingerbread', 356, 16.0, 49, 3.9),
            createData('Eclair', 262, 16.0, 24, 6.0),
            createData('Pickle', 305, 3.7, 67, 4.3),
        ],
    },
    {
        'name': "Wobbuffet",
        'imgSrc': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/202.png',
        'data': [createData('Gingerbread', 356, 16.0, 49, 3.9)],
    },
];
const nyans = [
    {
        'name': "NYAN",
        'imgSrc': 'http://www.nyan.cat/cats/original.gif',
        'data': [createData('Frozen yoghurt', 159, 6.0, 24, 4.0)],
    },
    {
        'name': "NYANINJA",
        'imgSrc': 'http://www.nyan.cat/cats/nyaninja.gif',
        'data': [createData('Cupcake', 305, 3.7, 67, 4.3)],
    },
    {
        'name': "NYANJAZZ",
        'imgSrc': 'http://www.nyan.cat/cats/jazz.gif',
        'data': [createData('Gingerbread', 356, 16.0, 49, 3.9)],
    },
];

const characterTypes = ["RickAndMorty", 'Pokemon', 'Nyan']
const characters = {
    'RickAndMorty': rickAndMortys,
    'Pokemon': pokemons,
    'Nyan': nyans,
};

export { rickAndMortys, pokemons, nyans, characterTypes, characters }