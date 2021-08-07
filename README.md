## Advance React Hooks 
This repository contained some of the basic to advanced concepts based React Hooks Project.

### For quick setup:
- clone this repository
- run `npm install`
- run `npm start`
- open `http://localhost:3000`

### Deploy on Github Pages:
- add `"homepage": "https://username.github.io/RepoName"` in your package.json at the top
- now install `npm install --save gh-pages`
- now simply add the following in your package.json under the scripts section
- ```yml
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
  ```
- Lastly run `npm run deploy`.
That's it!

