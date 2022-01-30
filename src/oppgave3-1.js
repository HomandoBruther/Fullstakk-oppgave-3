// Statisk tekst som brukes til å søke i
/*const text =
  "Baby cliche unicorn brooklyn farm-to-table. Salvia semiotics hella literally paleo humblebrag bushwick letterpress messenger bag pork belly brooklyn authentic vexillologist. Gastropub sustainable banjo, shaman snackwave viral air plant ramps health goth. Edison bulb vegan microdosing, tote bag unicorn skateboard disrupt copper mug four loko sustainable whatever cloud bread slow-carb lumbersexual four dollar toast. Waistcoat lomo hammock vape shabby chic sartorial yr godard pok pok fashion axe organic migas. Quinoa yr vexillologist intelligentsia verylongwordthatislong neutra mixtape YOLO XOXO listicle letterpress farm-to-table beard.";*/

// const longestWord = () => {
// TODO: Gjør om text til array eks. ['Baby', 'cliche']

// TODO: Velg første ord så du har noe å sammenlikne med
// TODO: Gå igjennom alle ordene og oppdater hvis nytt ord er lengre

/*let lgth = 0;
let longest = "";

for (var i = 0; i < arr.length; i++) {
  if (arr[i].length > lgth) {
    longest = arr[i];
  }
  //ga meg bare siste verdi i array
}*/

function findLongestWord(str) {
  let words = str.split(" ");
  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) longest = word;
  }
  console.log(longest);
  return longest;
}

findLongestWord(
  "Baby cliche unicorn brooklyn farm-to-table. Salvia semiotics hella literally paleo humblebrag bushwick letterpress messenger bag pork belly brooklyn authentic vexillologist. Gastropub sustainable banjo, shaman snackwave viral air plant ramps health goth. Edison bulb vegan microdosing, tote bag unicorn skateboard disrupt copper mug four loko sustainable whatever cloud bread slow-carb lumbersexual four dollar toast. Waistcoat lomo hammock vape shabby chic sartorial yr godard pok pok fashion axe organic migas. Quinoa yr vexillologist intelligentsia verylongwordthatislong neutra mixtape YOLO XOXO listicle letterpress farm-to-table beard."
);
//let lgth = wordArray[i].length;

// console.log(longestWord());
