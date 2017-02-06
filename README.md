# Hack Reactor Alumni Network

###### A social media platform for building/maintaining relationships within the Reactor Core network.
***

HRAN provides a platform for leveraging your Hack Reactor/Reactor Core peer network to accelerate your growth as a software engineer.  Build your own profile and link up with your fellow alumns to keep each other up to date on your job search status, current projects, and learning experiences.  Contribute to the networks value by posting self-authored articles on industry experiences and technical discoveries.  Consider this our own private LinkedIn, our *fulcrum* (if you will) to ease the burden of navigating our new journey.

## Team

  - __Product Owner__: Anthony Pecchillo
  - __Scrum Master__: Jordan Medina
  - __Development Team Members__: Maurice Okumu, Patrick Shen

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

Using HRAN is simple!  To get started:

#### Sign Up ####

From the HRAN landing page:  

1. Click the sign up button to navigate to our registration page.

2. Provide your pertinent information in the registration form.  
    - Upon submitting the form, you will be automatically logged in and redirected to the Main Feed.
      
#### Set Up Your Profile ####

3. Click settings to edit your profile.  
    - Add a Bio
    - Add your Picture
    - Add links to your LinkedIn, GitHub, Twitter, etc.

4. Click Profile to see your updated profile.

#### Check Out the Feed ####

5. Click Feed to read the most recent posts from the Alumni Network.

6. Submit your first post!

## Requirements

- Node v6.1.0
- Yarn v0.19.1
- Nodemon v1.11.0
- MySQL v5.7.17
    - To install MySQL, it is recommended that you use Homebrew.

*NOTE:*  We use Yarn instead of NPM.  A very useful NPM-to-Yarn cheatsheet can be found [here](https://shift.infinite.red/npm-vs-yarn-cheat-sheet-8755b092e5cc#.o5oqiaubp).

## Development

### Installing Dependencies

All required dependencies are stored in the yarn.lock file in the root directory.  At the command line from within the root directory, enter:

```sh
yarn
```
### Transpiling React Codebase

Run the following at the command line once initially, and then again after making any changes to your front-end React code:

```sh
yarn build:dev
```

This is for builds *during development*.  In order to build *for production*, simply run:

```sh
yarn build
```

### Starting the Server

To start the server using Nodemon and continuously watch for any file changes, run the following at the command line:

```sh
yarn start
```

### Begin Development

View the current project at `localhost:3000`.  At this point, you're ready to start development!  

### Roadmap

View the project roadmap [here](https://github.com/bracegirdles/bracegirdles/issues).


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
