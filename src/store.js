import { createStore } from "redux";
const initialState = {
  text: `
  # Heading (H1 size)
  
  ## Subheading (H2 size)
  
  [Link to Google](https://www.google.com)
  
  Inline code: \`console.log('Hello World!');\`
  
  \`\`\`
  Code block:
  function helloWorld() {
    console.log('Hello World!');
  }
  \`\`\`
  
  * List item 1
  * List item 2
  * List item 3
  
  > Blockquote: "The only true wisdom is in knowing you know nothing." - Socrates
  
  ![Image of a cat](https://picsum.photos/200/300)
  
  **Bolded text**: This text is bolded
  `,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGING":
      console.log(action.payload);
      return {
        ...state,
        text: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
