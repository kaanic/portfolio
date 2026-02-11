# Kaanic's Arcade-themed Portfolio
A personal portfolio site featuring components like projects, skills and career. It has a retro/arcade aesthetic design with occasional pixelart UI.

<!-- add img of the site here -->

## Features
- Retro and pixelart arcade-style UI
- Dark/light theme toggle
- Animated "space" background
- Fully responsive design 

## Dependencies
- `svelte` (^5.43.8)
- `vite` (^7.2.4)
- `@sveltejs/vite-plugin-svelte` (^6.2.1)
- `lucide-svelte` (^0.563.0)
- `gh-pages` (^6.3.0)

## Local installation

```bash
# clone the repo
$ git clone https://github.com/kaanic/portfolio

# open the repo
$ cd portfolio

# install dependencies
$ npm install

# run the project in development
$ npm run dev
```

Then open `http://localhost:5173` on your browser.

<!-- add configuration guide for users -->

## Project structure

```
src/
├── lib/                    
│   ├── components/         # reused components 
│   ├── data/               # actual content data
│   ├── Header.svelte       
│   ├── Main.svelte         
│   ├── About.svelte        
│   ├── Stack.svelte        
│   └── ...                 
├── App.svelte              
├── main.js                 
├── themeStore.svelte.js    # state and functions for theme toggle
└── app.css                 # globally applied styles
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command | Action |
| :--- | :--- |
| `npm install` | Installs dependencies |
| `npm run dev` | Starts local dev server at `localhost:5173` |
| `npm run build` | Builds the production site to `./dist/` |
| `npm run preview` | Preview the build locally, before deploying |
| `npm run deploy` | Build and deploy to GitHub Pages |

<!-- add credits -->

## License

Licensed under the [MIT](https://github.com/kaanic/portfolio/blob/main/LICENSE) license.