//Random terrain generation
const terrain_types = ['desert', 'forest', 'plains', 'jungle', 'mountains', 'ocean'];
let terrain1 = [];
const hex_rows = 10;
const hex_columns = 10;
const terrain = [
	'plains',
	'jungle',
	'mountains',
	'mountains',
	'plains',
	'forest',
	'desert',
	'plains',
	'forest',
	'plains',
	'mountains',
	'plains',
	'ocean',
	'jungle',
	'plains',
	'desert',
	'desert',
	'plains',
	'ocean',
	'plains',
	'forest',
	'jungle',
	'ocean',
	'ocean',
	'desert',
	'forest',
	'plains',
	'jungle',
	'forest',
	'plains',
	'ocean',
	'plains',
	'ocean',
	'desert',
	'mountains',
	'desert',
	'jungle',
	'forest',
	'plains',
	'plains',
	'jungle',
	'mountains',
	'forest',
	'jungle',
	'mountains',
	'ocean',
	'ocean',
	'forest',
	'mountains',
	'forest',
	'jungle',
	'ocean',
	'plains',
	'forest',
	'desert',
	'mountains',
	'ocean',
	'ocean',
	'jungle',
	'jungle',
	'desert',
	'plains',
	'desert',
	'plains',
	'plains',
	'ocean',
	'jungle',
	'jungle',
	'jungle',
	'forest',
	'desert',
	'jungle',
	'ocean',
	'mountains',
	'mountains',
	'plains',
	'plains',
	'plains',
	'mountains',
	'ocean',
	'mountains',
	'ocean',
	'plains',
	'jungle',
	'mountains',
	'desert',
	'ocean',
	'plains',
	'forest',
	'desert',
	'forest',
	'ocean',
	'mountains',
	'mountains',
	'plains',
	'desert',
	'forest',
	'plains',
	'forest',
	'desert',
	'mountains',
	'desert',
	'jungle',
	'jungle',
	'jungle',
	'forest',
	'plains',
	'ocean',
	'mountains',
	'forest',
	'forest',
	'plains',
	'desert',
	'forest',
	'desert',
	'forest',
	'forest',
	'jungle',
	'desert',
	'forest',
	'plains',
	'forest',
	'mountains',
	'jungle',
	'jungle',
	'forest',
	'ocean',
	'desert',
	'jungle',
	'plains',
	'desert',
	'forest',
	'mountains',
	'forest',
	'forest',
	'jungle',
	'plains',
	'plains',
	'plains',
	'plains',
	'forest',
	'jungle',
	'jungle',
	'ocean',
	'jungle',
	'plains',
	'desert',
	'plains',
	'desert',
	'desert',
	'ocean',
	'forest',
	'forest',
	'ocean',
	'desert',
	'plains',
	'mountains',
	'jungle',
	'jungle',
	'plains',
	'jungle',
	'jungle',
	'desert',
	'forest',
	'desert',
	'mountains',
	'desert',
	'ocean',
	'mountains',
	'desert',
	'forest',
	'forest',
	'jungle',
	'mountains',
	'plains',
	'desert',
	'jungle',
	'mountains',
	'desert',
	'mountains',
	'plains',
	'ocean',
	'desert',
	'mountains',
	'plains',
	'jungle',
	'forest',
	'ocean',
	'forest',
	'jungle',
	'jungle',
	'desert',
	'forest',
	'mountains',
	'plains',
	'jungle',
	'mountains',
	'forest',
	'jungle',
	'plains',
	'forest',
	'mountains',
	'plains',
	'mountains',
	'forest',
	'forest',
	'plains',
	'forest',
	'plains',
	'jungle',
	'desert',
	'jungle',
	'mountains',
	'forest',
	'mountains',
	'desert',
	'desert',
	'desert',
	'plains',
	'ocean',
	'plains',
	'plains',
	'jungle',
	'jungle',
	'desert',
	'ocean',
	'forest',
	'plains',
	'mountains',
	'ocean',
	'plains',
	'desert',
	'forest',
	'ocean',
	'ocean',
	'desert',
	'plains',
	'desert',
	'jungle',
	'ocean',
	'desert',
	'jungle',
	'plains',
	'forest',
	'desert',
	'ocean',
	'jungle',
	'ocean',
	'ocean',
	'forest',
	'forest',
	'mountains',
	'ocean',
	'mountains',
	'jungle',
	'forest',
	'jungle',
	'mountains',
	'mountains',
	'plains',
	'ocean',
	'plains',
	'mountains',
	'forest',
	'jungle',
	'jungle',
	'forest',
	'mountains',
	'desert',
	'mountains',
	'jungle',
	'plains',
	'ocean',
	'jungle',
	'mountains',
	'desert',
	'desert',
	'mountains',
	'jungle',
	'forest',
	'mountains',
	'mountains',
	'desert',
	'ocean',
	'mountains',
	'ocean',
	'mountains',
	'plains',
	'desert',
	'mountains',
	'mountains',
	'mountains',
	'mountains',
	'plains',
	'plains',
	'plains',
	'desert',
	'ocean',
	'mountains',
	'ocean',
	'ocean',
	'desert',
	'jungle',
	'forest',
	'mountains',
	'ocean',
	'plains',
	'mountains',
	'mountains',
	'forest',
	'ocean',
	'mountains',
	'plains',
	'jungle',
	'plains',
	'desert',
	'mountains',
	'ocean',
	'plains',
	'forest',
	'plains',
	'ocean',
	'jungle',
	'forest',
	'plains',
	'ocean',
	'ocean',
	'plains',
	'plains',
	'ocean',
	'jungle',
	'desert',
	'desert',
	'mountains',
	'plains',
	'forest',
	'desert',
	'plains',
	'jungle',
	'jungle',
	'desert',
	'jungle',
	'mountains',
	'jungle',
	'jungle',
	'mountains',
	'mountains',
	'desert',
	'forest',
	'plains',
	'forest',
	'jungle',
	'plains',
	'jungle',
	'jungle',
	'plains',
	'forest',
	'ocean',
	'desert',
	'forest',
	'ocean',
	'ocean',
	'mountains',
	'ocean',
	'mountains',
	'ocean',
	'forest',
	'jungle',
	'mountains',
	'plains',
	'desert',
	'jungle',
	'jungle',
	'ocean',
	'forest',
	'forest',
	'forest',
	'plains',
	'desert',
	'plains',
	'plains',
	'plains',
	'ocean',
	'mountains',
	'forest',
	'forest',
	'plains',
	'plains',
	'forest',
	'forest',
	'ocean',
	'plains',
	'plains',
	'mountains',
	'jungle',
	'mountains',
	'ocean',
	'plains',
	'forest',
	'forest',
	'mountains',
	'mountains',
	'ocean',
	'jungle',
	'mountains',
	'forest',
	'desert',
	'jungle',
	'mountains',
	'desert',
	'mountains',
	'desert',
	'mountains',
	'ocean',
	'mountains',
	'jungle',
	'plains',
	'mountains',
	'forest',
	'plains',
	'jungle',
	'jungle',
	'jungle',
	'forest',
	'desert',
	'mountains',
	'jungle',
	'mountains',
	'mountains',
	'mountains',
	'jungle',
	'desert',
	'desert',
	'mountains',
	'forest',
	'desert',
	'desert',
	'ocean',
	'plains',
	'ocean',
	'mountains',
	'forest',
	'jungle',
	'ocean',
	'forest',
	'plains',
	'jungle',
	'plains',
	'forest',
	'desert',
	'forest',
	'desert',
	'plains',
	'jungle',
	'jungle',
	'plains',
	'plains',
	'ocean',
	'desert',
	'jungle',
	'plains',
	'forest',
	'forest',
	'plains',
	'ocean',
	'plains',
	'ocean',
	'desert',
	'jungle',
	'forest',
	'desert',
	'plains',
	'forest',
	'desert',
	'mountains',
	'jungle',
	'desert',
	'ocean',
	'ocean',
	'desert',
	'forest',
	'mountains',
	'mountains',
	'forest',
	'ocean',
	'desert',
	'forest',
	'mountains',
	'plains',
	'plains',
	'ocean',
	'desert',
	'mountains',
	'forest',
	'desert',
	'plains',
	'ocean',
	'mountains',
	'plains',
	'desert',
	'plains',
	'forest',
	'desert',
	'jungle',
	'jungle',
	'jungle',
	'jungle',
	'forest',
	'ocean',
	'forest',
	'jungle',
	'jungle',
	'plains',
	'plains',
	'jungle',
	'mountains',
	'desert',
	'ocean',
	'desert',
	'ocean',
	'jungle',
	'desert',
	'jungle',
	'jungle',
	'ocean',
	'ocean',
	'desert',
	'plains',
	'mountains',
	'desert',
	'mountains',
	'desert',
	'ocean',
	'desert',
	'forest',
	'mountains',
	'plains',
	'desert',
	'mountains',
	'ocean',
	'mountains',
	'plains',
	'plains',
	'jungle',
	'jungle',
	'mountains',
	'desert',
	'forest',
	'forest',
	'mountains',
	'forest',
	'plains',
	'plains',
	'forest',
	'ocean',
	'jungle',
	'forest',
	'mountains',
	'mountains',
	'jungle',
	'jungle',
	'ocean',
	'desert',
	'forest',
	'jungle',
	'desert',
	'mountains',
	'forest',
	'forest',
	'jungle',
	'plains',
	'jungle',
	'jungle',
	'forest',
	'forest',
	'jungle',
	'desert',
	'mountains',
	'jungle',
	'mountains',
	'forest',
	'forest',
	'mountains',
	'mountains',
	'desert',
	'forest',
	'jungle',
	'mountains',
	'jungle',
	'plains',
	'ocean',
	'plains',
	'desert',
	'plains',
	'plains',
	'forest',
	'forest',
	'ocean',
	'forest',
	'ocean',
	'forest',
	'jungle',
	'plains',
	'mountains',
	'desert',
	'forest',
	'jungle',
	'mountains',
	'jungle',
	'ocean',
	'jungle',
	'jungle',
	'jungle',
	'forest',
	'mountains',
	'plains',
	'jungle',
	'jungle',
	'ocean',
	'ocean',
	'mountains',
	'jungle',
	'mountains',
	'forest',
	'mountains',
];

/*for (let i = 0; i < hex_rows * hex_columns; i++) {
	let a = terrain_types[Math.floor(Math.random() * terrain_types.length)];
	terrain.push(a);
}*/

const factionDescriptions = {
	faction1: 'lorem ipsum1',
	faction2: 'lorem ipsum2',
	faction3: 'lorem ipsum3',
	faction4: 'lorem ipsum4',
	faction5: 'lorem ipsum5',
	faction6: 'lorem ipsum6',
};
export { terrain, factionDescriptions, hex_rows, hex_columns };
