## Capital Selector

This simple application demonstrates a "Capital Selector" similar to the MacOS Emoji Selector:

![image](https://user-images.githubusercontent.com/8524633/130389634-ecdfbfee-c651-43c5-a229-d5742b35f39f.png)

While typing in a textarea, use the keyboard shortcut `shift + .` to bring up a country capital selection list. Select from a list of contries to insert its capital city as text into the active textarea.

![image](https://user-images.githubusercontent.com/8524633/130391017-e04e7ab6-47a0-4936-846b-34f0c237ceaa.png)

----

### Getting started  

- Ensure Node is installed (v14+)  
  https://nodejs.org/en/download/
- Install dependencies:  
`npm i`  
- Start the dev server:  
`npm run start`
  
Navigate your browser to the running server:  
**http://localhost:8080**

----

### Problems

1) The modal's caret does not point to the cursor's current position.
2) The capital selector modal may be partially off screen under certain circumstances.
3) The city is always inserted at the end of the text (instead of the cursor's current position).
4) The search filter is case-sensitive ('ar' does not match 'Argentina').  

*(Do you notice any others? We'd love to hear your thoughts on improving the user experience)*

----

### Application Structure

`public/index.html`

The root of the application. Contains the initial HTML rendered to the page (including the textarea). Loads the root script.

`src/index.jsx`

The root script. Contains all logic for rendering the selector modal and updating the textarea with the selected country's capital.

`src/Menu.tsx`

The capital selector modal, exported as a React component.

----

### Resources

https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange
