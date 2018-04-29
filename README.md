# Getting Started
Follow the instructions below to download and run the project.

## Installation
Install <a href="https://git-scm.com/downloads">git</a>

Install <a href="https://nodejs.org/en/download/">node.js</a>

Verify the node.js installation in either Terminal (Mac OS X), or Windows Command Prompt (Windows):
```
node -v
```
Verify the npm installation: 
```
npm -v
```

## With node.js installed
In a directory where you have write permission, clone the repository from Github:

```
git clone git@github.com:jzhen/studio-ghibli-project.git
```

When the cloning completes, `cd` into the `studio-ghibli-project` directory and run the following command:

```
npm install
```
## Start
Start the development task

```
npm start
```

Go to `http://localhost:8080/`

## Test

To run the tests, use the command

```
npm test
```

That will run any file ending in `.test.js` in the `src` directory using jest.
