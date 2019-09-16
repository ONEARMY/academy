# OneArmy Docs Demo

This repo is for testing the integration of [Docusaurus](https://docusaurus.io) static site generation within the [OneArmy](https://github.com/onearmy/community-platform) platform. The code is hosted at:

https://onearmy.github.io/academy/

It isn't particularly well-optimised for external contribution (yet!), but if you really want to try it out:

## Installation

1. Install Node  
   Follow instructions at https://nodejs.org/en/download/

2. Install Yarn  
   Follow instructions at https://yarnpkg.com/lang/en/docs/install

3. Clone the repo  
   Either use your favourite git client [client](https://git-scm.com/download/gui) or  
   `git clone https://github.com/onearmy/academy.git`
4. Install website dependencies

```
cd academy/website

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

The site is configured to automatically build whenever changes are made to the master branch, and the generated html is deployed from the `gh-pages` branch.

You can view build status at https://travis-ci.org/onearmy/academy  
You can see live deployment at : https://onearmy.github.io/academy/
