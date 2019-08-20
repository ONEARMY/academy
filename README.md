# OneArmy Docs Demo

This repo is for testing the integration of [Docusaurus](https://docusaurus.io) static site generation within the [OneArmy](https://github.com/OneArmyWorld/onearmy) platform. The code is hosted at:

https://onearmyworld.github.io/docs-demo/

It isn't particularly well-optimised for external contribution (yet!), but if you really want to try it out:

## Installation

1. Install Node  
   Follow instructions at https://nodejs.org/en/download/

2. Install Yarn  
   Follow instructions at https://yarnpkg.com/lang/en/docs/install

3. Clone the repo  
   Either use your favourite git client [client](https://git-scm.com/download/gui) or  
   `git clone https://github.com/OneArmyWorld/docs-demo.git`
4. Install website dependencies

```
cd docs-demo/website

yarn install
```

## Run locally

```
yarn start
```

## View local changes

The above command will automatically start up a local development server with live-reload, and open in a web browser.
Any changes you make should automatically recompile and refresh your browser window

# Development

For information on how to develop with docusaurus see:  
https://docusaurus.io

# Deployment

The site deploys from the `gh-pages` branch and is viewable at:  
https://onearmyworld.github.io/docs-demo/
