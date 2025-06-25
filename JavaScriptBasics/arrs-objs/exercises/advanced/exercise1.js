//  Sort Array of Objects by Nested Property

const users = [
{ name: 'Alice', stats: { score: 88 } },
{ name: 'Bob', stats: { score: 95 } },
{ name: 'Charlie', stats: { score: 72 } }
];

function sortByScore(users){
    return users.sort((a, b) => b.stats.score - a.stats.score);
}

console.log(sortByScore(users));

/*
Output:
[
 { name: 'Bob', stats: { score: 95 } },
 { name: 'Alice', stats: { score: 88 } },
 { name: 'Charlie', stats: { score: 72 } }
];
*/
