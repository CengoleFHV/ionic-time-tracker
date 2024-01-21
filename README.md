# Ionic Time Tracker ⚛️⏲️

## Description 📓

This App is a small Project built for the Course `Desktop-Webapplikationen`

This specific Project was built with the [`Ionic Framework`](https://ionicframework.com/) and uses [`Rust`](https://www.rust-lang.org/) with [`wasm-pack`](https://github.com/rustwasm/wasm-bindgen) to encrypt Data

## Getting Started 🚀

Version:

- npm - `v10.2.5`
- nodeJS - `v20.10.0`
- rustup - `v1.26.0`

To start the Project and build all the necessary stuff you need to install `npm`, `nodeJS` and `rustup`

install `rustup` from [here](https://rustup.rs/)

install afterwards `wasm-pack` form [here](https://github.com/rustwasm/wasm-bindgen)

---

To get started run the following commands:

```sh
npm install -g @ionic/cli
```

```sh
npm install
```

```sh
npm run install:encrypter
```

```sh
npm run build:encrypter
```

now you can run

```sh
npm run build
```

now you have to switch to the electron folder with `cd electron` and run

```sh
npm install
```

to install all the necessary electron modules

after that return to the root folder and run

```sh
npm run electron
```

when the electron app runs it works 🫡

## Building

To build the Electron app a few run commands where made to make it simple

### Windows

To build an Executable for Windows just run the Following Command

```sh
npm run electron:win
```

This will create an `IonicTimetracker.exe` File in the Folder `release-builds/IonicTimetracker-win32-x64` from where you will be able to run the Electron App

### MacOS

> _These Builds are made for Apple Silicon Powered Macs_

To Build for `MacOS` Run the Command

```sh
npm run electron:mac
```

This will create all the necessary files for MacOS in the folder `release-builds/IonicTimeTracker-darwin-arm64`

### Linux

For Linux the Command is

```sh
npm run electron:linux
```
