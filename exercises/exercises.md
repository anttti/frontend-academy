# Frontend Academy exercises

## Static HTML & CSS

1. Do a custom styled button. Remember you can do `:hover`, `:focus`, `:active` and `:disabled` selectors to react to different states! 
   1. [MDN's button article](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) is probably worth your while
   2. Extra credit: Read the accessibility section at the end of the page

## React

1. Style the `Button` component to your liking
   1. Take into account disabled & focus styles!
   2. Create stories for the different styles
2. Create an `Input` component with your custom styles
   1. Create stories for at least the following states
      1. Normal
      2. Active
      3. Disabled
      4. Invalid
3. Extract common CSS values (think "design tokens") into a styled-component `theme`
   1. See `src/theme.ts` and an example usage of it in `src/components/Button.tsx`
