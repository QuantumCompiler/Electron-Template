## This is a quick start guide to building with Electron JS.
---
#### Step 1: First make sure you have nodejs downloaded. The instructions for how to download these can be found below:

[Windows Users:](https://nodejs.org/en/download/),
[MacOS Users:](https://nodejs.org/en/download/) (Side Note: It is worth your time if you are using MacOS to install [homebrew:](https://brew.sh/), and
[Linux Users:](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions-enterprise-linux-fedora-and-snap-packages).

#### Step 2: After nodejs has been installed, you must install npm. The instructions for this can be found below:

[Windows Users:](https://www.npmjs.com/get-npm),
[MacOS Users:](https://shapeshed.com/setting-up-nodejs-and-npm-on-mac-osx/), and
[Linux Users:](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

#### Step 3: After npm is intsalled, it is HIGHLY advised you install yarn. The instructions for how to build your apps will be given with yarn. You can build with npm but this README.md will include instructions for yarn:

[Windows Users:](https://classic.yarnpkg.com/en/docs/install/#windows-stable),
[MacOS Users:](https://classic.yarnpkg.com/en/docs/install/#mac-stable), and
[Linux Users:](https://classic.yarnpkg.com/en/docs/install/#debian-stable) (Select distro from drop down)

#### These are the preliminary installs that are needed for building with electronjs. We will now dive into how to actually build with electronjs.

It is highly advised that whenever you want to start a new project to just clone this repository. The url for this repository is

[GitHub Repo:](https://github.com/DaTaylorSeries/Electron-Template.git) Feel free to clone this repository as often as you like :)

Once this has been cloned to a location on your machine, open terminal (command prompt for Windows users) and use the following commands:

yarn - Install node js modules needed to build
yarn start - Runs your program for you to test and interact with
yarn dist - This command is what you use to build with yarn. Type, "yarn dist --help" to get more instruction on how to build for each OS you are seeking.

This is essentially all you need to know/ do to build right out of the box with this template.

## A basic Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.

You can learn more about each of these components within the [Quick Start Guide](https://electronjs.org/docs/tutorial/quick-start).

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## Resources for Learning Electron

- [electronjs.org/docs](https://electronjs.org/docs) - all of Electron's documentation
- [electronjs.org/community#boilerplates](https://electronjs.org/community#boilerplates) - sample starter apps created by the community
- [electron/simple-samples](https://github.com/electron/simple-samples) - small applications with ideas for taking them further
- [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - an Electron app that teaches you how to use Electron
- [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - small demo apps for the various Electron APIs

---

#### License

[CC0 1.0 (Public Domain)](LICENSE.md)                                                                                   
