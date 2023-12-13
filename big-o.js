/* 
    BIG - O NOTATION

          - Time it takes to run a function
        - How does runtime of a function grow?
            - RUNTIME - time it takes to execute a piece of code
        - As input/ number of elements (n) increases, the time it takes to execute increases
    
    TIME COMPLEXITY (best O(1)-> O(logn) -> O(n) -> O(n log n) -> O(n^2), O(2^n), O(n!) worse )
        - the amount of time it takes the function to complete measured in number of steps
        -  runtime (y axis) input size (x-axis)
        -way of showing how the runtime of a function increasesas the size of the input increases

     SPACE COMPLEXITY
        - the amount of memory (RAM) required for an algorithm to run
*/

const artists = [
    {
      name: "Miles Davis",
      albums: [
        {
          title: "In a Silent Way",
          songs: ["Shhh/Peaceful", "In a Silent Way/It's About That Time"],
        },
        {
          title: "Milestones",
          songs: [
            "Dr. Jekyl",
            "Sid's Ahead",
            ///...
          ],
        },
      ],
    },
    {
      name: "Dolly Parton",
      albums: [
        {
          title: "Jolene",
          songs: [
            //...
          ],
        },
        {
          title: "9 to 5 and Other Odd Jobs",
          songs: [
            // ...
          ],
        },
      ],
    },
  ];

  console.log(artists[0].albums[0].title)
  console.log(artists[0].albums[0].songs[0])

//   CONSTANT O(1) - NOT BASED ON INPUT SIZE - code runs one time, no matter input length O(1)
const getFirstSongFromPlaylist = (album) => {
    console.log(album[0]);
  };

//   LINEAR O(N) - runtime increases as input increases. linear growth time depends on (n) input length/ size O(n)
const printSongs = (album) => {
    for (let n = 0; n < album.length; n++) {
      console.log(album[n]);
    }
  };

// QUADRATIC O(n^2) or O(n*m) nested loops (loop inside a loop) -> worse -> outer loop runs (n) times then inner loop runs (n) times for each iteration of outer loop -> if 10 elements will run 10*10 times
const PrintSongsWithinAlbums = (artist) => {
    // O(n) * O(m) = O(n*m) 
    //  O(n) * O(n) O(n* n) = O(n^2)

    // O(n)
    for (let n = 0; n < artist.albums.length; n++) {
        for (let m = 0; m < artist.album.songs.length; m++) {
            console.log(artist.album[n].songs[m]);
          }
    }
    // O(m)
    

    //   O(2n) -> O(n)
  };

  artists.forEach(el => {
    el.song.map(el => {
        el
    })
  })
//    artist = 1000000000
//  songs = 100000
//  100 times
// 10 + 10 = 20

const PrintSongsWithinAlbumsByArtist = () => {

    // O(n)
    for (let n = 0; n < artists.length; n++) {
        // O(m)
      for (let m = 0; m < artists[n].albums.length; m++) {
        // O(k)
        for (let k = 0; k < artists[n].album[m].songs.length; k++) {
          console.log(artists[n].albums[m].songs[k]);
        }
      }
    }
    // O(n*m*k) -> O(n^3) O(n * n * n )
  };
  
  // Alternative syntax to help with readability
  for (let artist of artists) {
    for (let albums of artist.albums) {
      for (let songs of album.songs) {
        console.log(songs);
      }
    }
  }

// FACTORIAL - O(n!) -  - Factorial means the product of all positive integers less than or equal to n. (3! -> 3*2*1) Factorial algorithm increases faster than in any other example
/*  3! -> 3*2*1
 8! -> 8*7*6*5..*1 */
 function factorial(n) {
    if (n === 0 || n === 1) {
      return 1; // Base case: 0! and 1! are both 1
    } else {
      return n * factorial(n - 1); // Recursive case: n! = n * (n-1)!
    }
  }

//   Logarithmic - O(log n) similar to linear time complexity, except that the runtime does not depend on the input size but rather on half the input size. ->runs for half the input size ex. Binary Search (think dictionary)
// log(2) -> base 2 log 2(2) -> what exponent 2 must be raised to in order to return 2 -> == 1
//  log(16) -> 4 
/* 
O(log 16)
  log(16) _ 2^ ? = 16 = 4 2-> 4-> 8-> 16

*/

function artistSearch(artists, artist, first = 0, last = null) {
    /* 
        Parameters:
        artists - array
        artist - target value
        first - starting index default value 0
        last - ending index default value null

    */

    // cheacks if last value is not provided, if not sets last to be the value of the length of the artist array
    /* 
     !(null) -> !false -> true
     !(3) > !true -> false
    */
    if (!last) {
        last = artists.length
    }

    // [1,2,3,4,5]
    /* 
        (5 - 0) / 2
        Math.floor(2.5) -> 2 + 0
        midpoint = 2

        calculates middle index of current range of the array
    */
    let midpoint = Math.floor((last - first) / 2) + first;

    // compares value in the array at the middle index position to out target artist value. If it matches, we return the middle index value
    if (artists[midpoint] === artist){
        return midpoint;
    } 

    /* 
        E artist[midpoint] -> Q
        a-e     q-z
        if artist at the midpoint is greater than my target artist, recursively call my function, and update my 'last' argument with the value of the midpoint
    */
    if (artists[midpoint] > artist){
        return artistSearch(artists, artist, first, midpoint);
    }
    
      
    /* 
        target = E    artist[mipoint] ->B
        b - z
        if artist at the midpoint is less than the target, call function recursively updating starting (first) index to where the midpoint is.
    */
    if (artists[midpoint] < artist)
      return artistSearch(artists, artist, midpoint, last);
  }


//   o(1) - constant 
  let min = 0;
//   o(1)
  let max = 0;
//   o(n)
  for (let n of numbersArray) {
    // o(1)
    if (x < min) min = x;
    // o(1)
    if (x > max) max = x;
  }
//   4* o(1) + o(n)
// o(1) + o(n)
//  o(n)

// o(1)
let min = 0;

// o(1)
let max = 0;

// o(n)
for (let n of numbersArray) {
    // o(1)
  if (n < min) min = n;
}

// o(n)
for (let n of numbersArray) {
    // o(1)
  if (n > max) max = n;
}

//  o(2n) =>(o(2*1 * n)) -> o(n)

// 0(n^2) + o(n) + o(1) +o(1) + o(1) + o(1)
//  0(n^2) + o(n)
//  o(n^2)

const someNestedArray = []
//  o(1)
let sum = 0

// o(n^2)
for (let a row of someNestedArray) {
 for (let item of row) {
    // o(1)
 console.log(item, row)
//  o(1)
 sum += item
 }

//  o(n)
 for (let n of numbersArray) {
    // o(1)
  if (n < min) min = n;
}
 }

//    -Ambiguity - refers to situations where the meaning of a piece of code is not clear or can be interpreted in multiple ways

/* 
 - resources Free code camp Big-O
https://www.freecodecamp.org/news/big-o-cheat-sheet-time-complexity-chart/
*/
