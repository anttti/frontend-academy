# Some JavaScript features
In these examples, we're using many new-ish JavaScript features from ES6. Of course, as it is from 2015, it's already old news in the web-scale of time, but here are some key ones if you've missed them!

## let, var, const
When you declare a variable using the var keyword, its scope is either global or local depending on where you declare it. The thing with let and var is that their values can be reassigned, and usually, we like our variables immutable, so most of the examples use const.

It's not worth to delve too deep into this here, but after a while, you might e.g. notice that const doesn't magically make stuff immutable, and maybe then you want to research these a bit more.
For now, knowing this is probably just enough:

```ts
const cat = 'Koistinen';

console.log(cat); // Writes 'Koistinen' to the console.
```

## Spreading, combining and destructuring
The '...' might look funny, but it's quite powerful, and you might even learn to love it. It is used to spread arrays and objects. It might be best explained with some examples, so here's a couple of those.

### Combining arrays
```ts
const noora = ['Myy', 'Pii'];
const antti = ['Sissi', 'Koistinen'];

const cats = [...noora, ...antti];
const catsInDifferentOrder = [...antti, ...noora];
const catsWithExtraCat = [...noora, 'Burzum', ...antti];

console.log(cats); // ['Myy', 'Pii', 'Sissi', 'Koistinen']
console.log(catsInDifferentOrder); // ['Sissi', 'Koistinen', 'Myy', 'Pii']
console.log(catsWithExtraCat); // ['Myy', 'Pii', 'Burzum', 'Sissi', 'Koistinen']
```

### Destructuring arrays
```ts
const noora = ['Myy', 'Pii'];
// For arrays, you can pick whatever variable names you wish
const [firstCat, secondCat] = noora;

console.log(firstCat); // 'Myy'
console.log(secondCat); // 'Pii'

const cats = [...noora, 'Sissi', 'Koistinen'];

// Maybe we need only the first one
const [onlyFirst] = cats;

console.log(onlyFirst); // 'Myy'

// Or maybe we don't just need the others separately
const [first, ...rest] = cats;

console.log(first); // 'Myy'
console.log(rest); // ['Pii', 'Sissi', 'Koistinen']

// Maybe we just need the second one
const [, second] = cats;

console.log(second); // 'Pii'

// Or maybe even all but first two
const [,, ...others] = cats;

console.log(others); // ['Sissi', 'Koistinen']
```

### Combining and destructuring objects
```ts
const cats = {
  noora: {
    myy: 'Maine coon',
    pii: 'Maine coon',
  },
  antti: {
    sissi: 'Ragdoll',
    koistinen: 'Russian blue',
  },
};

const combinedCats = {
  ...cats.noora,
  ...cats.antti,
};

console.log(combinedCats); // { myy: 'Maine coon', pii: 'Maine coon', sissi: 'Ragdoll', koistinen: 'Russian blue' }

// Use the object keys as variable names!
const { noora, antti } = cats;

console.log(noora); // { myy: 'Maine coon', pii: 'Maine coon' }
console.log(antti); // { sissi: 'Ragdoll', koistinen: 'Russian blue' }

// Or maybe rename the keys if you wish
const { noora: newNameForNoora } = cats;

console.log(newNameForNoora); // { myy: 'Maine coon', pii: 'Maine coon' }

// We can use the '...' here too
const { myy, ...allTheOtherCats } = combinedCats;

console.log(myy); // 'Maine coon'
console.log(allTheOtherCats); // { pii: 'Maine coon', sissi: 'Ragdoll', koistinen: 'Russian blue' }
```

## Arrow functions
Arrow functions are an alternative way of writing functions. The syntax is a bit shorter and there are some differences like the use of `this` keyword inside the function.

These all do the same thing:
```ts
// Not-an-arrow function
const add1 = function(x: number, y: number) {
  return x + y;
}

// Arrow function
const add2 = (x: number, y: number) => {
  return x + y;
};

// You can omit the curly brackets and the "return" keyword
const add3 = (x: number, y: number) => x + y;

console.log(add1(1, 2)); // 3
console.log(add2(1, 2)); // 3
console.log(add3(1, 2)); // 3
```

## Map an array
There's a lot of lists on the internet, so chances are you're going to have to do one of those. With React, using the `map()` method is probably the easiest way. It creates and returns a new array populated with the previous one.

You can pass any function to map, even a React component. With JSX you have to give a key prop for each. First parameter of the map function is the current value, second is its index. Third one is the array itself, but that one is rarely needed. You technically can use the index for the key, but it's a [good practice to prefer something else](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318). Often items in an array have a unique and permanent ID that is a good choice for a key.

```ts
interface Cat {
  name: string;
  breed: string;
}

const catObjects = [
  { name: 'Myy', breed: 'Maine coon' },
  { name: 'Pii', breed: 'Maine coon' },
  { name: 'Sissi', breed: 'Ragdoll' },
  { name: 'Koistinen', breed: 'Russian blue' },
];

const catNames = catObjects.map((cat) => cat.name);

// You can also define the function separately
const getBreed = (cat: Cat) => cat.breed;

const catBreeds = catObjects.map(getBreed);

console.log(catNames); // ['Myy', 'Pii', 'Sissi', 'Koistinen']
console.log(catBreeds); // ['Maine coon', 'Maine coon', 'Ragdoll', 'Russian blue']
```

```tsx
const cats = ['Myy', 'Pii', 'Sissi', 'Koistinen'];

// You shouldn't use index as a key, but I'm lazy
const List: React.FC = () => (
  <ul>
    {cats.map((cat, index) => <li key={index}>{cat}</li>)}
  </ul>
);

// This renders as
<ul>
  <li>Myy</li>
  <li>Pii</li>
  <li>Sissi</li>
  <li>Koistinen</li>
</ul>
```

```tsx
interface CatItemProps {
  name: string;
  breed: string;
}

const CatItem: React.FC<CatItemProps> = ({ name, breed }) => (
  <li>{name}, {breed}</li>
);

interface CatListProps {
  catObjects: CatItemProps[];
}

// You can also spread the props for your component!
const CatList: React.FC<CatListProps> = ({ catObjects }) => (
  <ul>
    {catObjects.map(({ id, ...cat }) => (
      <CatItem
        key={id}
        {...cat}
      />
    ))}
  </ul>
);

const App = () => {
  const catObjects = [
    { id: 0, name: 'Myy', breed: 'Maine coon' },
    { id: 1, name: 'Pii', breed: 'Maine coon' },
    { id: 2, name: 'Sissi', breed: 'Ragdoll' },
    { id: 3, name: 'Koistinen', breed: 'Russian blue' },
  ];

  return <CatList catObjects={catObjects} />;
};

// This renders as
<ul>
  <li>Myy, Maine coon</li>
  <li>Pii, Maine coon</li>
  <li>Sissi, Ragdoll</li>
  <li>Koistinen, Russian blue</li>
</ul>
```

## Template literals
Template literals are mostly just about the syntax, but they allow you to work with strings in many ways. You can use template literals with wrapping your text in backticks. You can also use e.g. variables in your template literals with `${variable}` syntax.

```ts
const str = `Hello world!`;
console.log(str); // 'Hello world!'

const myy = { name: 'Myy', breed: 'Maine coon' };
console.log(`This cat is named ${myy.name} and it is a ${myy.breed}.`);
// 'This cat is named Myy and it is a Maine coon.'

interface Cat {
  name: string;
  breed: string;
}

const intro = (cat: Cat) => `This is ${cat.name}`;
console.log(intro(myy)); // 'This is Myy.'

const cats = ['Myy', 'Pii', 'Sissi', 'Koistinen'];
const info = `
  There are ${cats.length} cats.
  Their names are: ${cats.join(', ')}.
`;
// There are 4 cats.
// Their names are: Myy, Pii, Sissi, Koistinen.
```

## Ternary operators
Sometimes you may want to be a bit more concise! Ternary and logical operators are a great way to be a bit less verbose than the more traditional `if ... else`. These can be useful if your component renders something conditionally, or if a prop affects a specific style.

Ternary looks like `condition ? expression1 : expression2`. If the condition is truthy, we'll get expression1, otherwise expression2.

```ts
let inverted = false;

const background = inverted ? 'black' : 'white';
console.log(background); // 'white'

inverted = true;

const text = inverted ? 'black' : 'white';
console.log(text); // 'white'
```

```ts
interface Cat {
  name: string;
  age: number;
}

const cats = [
  { name: 'Myy', age: 4 },
  { name: 'Pii', age: 0 },
];

const strToLog = ({ name, age }: Cat) =>
  age > 0 ? `${name} is ${age} years old.` : `${name} is still a kitten!`;

const [myy, pii] = cats;

console.log(strToLog(myy)); // "Myy is 4 years old."
console.log(strToLog(pii)); // "Pii is still a kitten!"
```

You can use the ternary operator to render different things in different situations:
```tsx
interface CatListProps {
  cats: string[];
}

const CatList: React.FC<CatListProps> = ({ cats }) => (
  <>
    <h1>List of cats</h1>
    {cats.length > 0 ? (
      <ul>{/* Do something for the cats */}</ul>
    ) : (
      <p>There's no cats!</p>
    )}
  </>
);
```
