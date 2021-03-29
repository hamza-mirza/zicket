# Zicket Frontend Task

---

### Time logs

- Friday, March 26: 45 minutes
- Saturday, March 27: 3 hours
- Sunday, March 28: 2.5 hours
- Monday, March 29:

### Documentation

[Live preview](https://zicket-task.netlify.app/)
This is the link to the landing page. Directly linked to the master branch and uses CI to update itself every time the code is pushed to the master branch.

#### How to launch the project?

---

1. Clone/download the repo.
2. Navigate to the project in the terminal.
3. Run `npm install`.
4. Once the dependencies have been installed, run `npm start`.
5. To generate the `dist` folder, run `npm run build` from the root of the project.

#### Project walkthrough

---

##### Build

- Webpack is the module bundler and uses out-of-the-box plugins to optimise the assets and code.
- Webpack injects Babel to allow for ES6+ JavaScript.
- All the dependencies live in `package.json`.

##### Structure

- While this page could easily be designed Desktop first, I wanted to stick to what I find preferable and for that reason, I've built this page to be mobile-first.
- I've used SASS for styling and plain JavaScript for making changes to the DOM.
- My primary objective was to keep everything modular, and for that reason, I took the atomic design approach and broke everything down into smaller chunks
- The CSS has been split into three different folders - `base`, `layout` and `modules`.
- The `base` folder contains files that take care of the gloabl styles such as SASS variables, mixins, breakpoints and setting generic styles for html and body.
- The `layout` folder contains styling for the 'two-column' layout and the page wrapper.
- The `modules` folder contains styling for components such navigation, buttons, titles, body-copy, popups.

---

- The JavaScript uses ES6+ features - `const`, `let`, arrow fucntions, `map`.
- To avoid 'spaghetti code', I've used classes to write code for DOM manipulation.
- The `main.js` file is the entry point. All the JavaScript and CSS styles are loaded here.
- I've used Swiper.js to create the carousel. While the carousel could easily be built with plain JavaScript, I wanted to demonstrate my ability to work with external JS libraries.

##### What I could have done better if this were a real client project or if I'd spent more time on it:

- Transitions and hover animations.
- The carousel could be better.
- Better styling for the mobile menu.
- Better support for the hero section's background image: using the `picture` element to cater for various breakpoints and resolutions.

##### Final thoughts:

Overall, I am glad to have built this page. While a simple landing page, there were a bunch of components that could be modularised. I discovred a couple of new CSS properties, such as text-outline.
