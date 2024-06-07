<a id='readme-top'> </a>
<h2 align="center"> An encounter creator that leverages generative AI. </h2>


<details>
 <summary>Table of Contents</summary>

1. [Project Overview](https://github.com/Mecha-Godzilla-Source-Code/Skoolhub?tab=readme-ov-file#project-overview)
2. [Getting Started](https://github.com/Mecha-Godzilla-Source-Code/Skoolhub?tab=readme-ov-file#getting-started)
   - [Prerequsites](https://github.com/Mecha-Godzilla-Source-Code/Skoolhub?tab=readme-ov-file#prerequisites)
   - [Installation](https://github.com/Mecha-Godzilla-Source-Code/Skoolhub?tab=readme-ov-file#installation)
3. [Usage](https://github.com/Mecha-Godzilla-Source-Code/Skoolhub?tab=readme-ov-file#usage)

</details>

## Project Overview

<br />



<p>
The D&D Encounter Generator is an innovative tool designed to enhance the role-playing experience by providing Dungeon Masters with the ability to create dynamic and engaging encounters. Users can select creatures from a comprehensive MongoDB database and define the context of the encounter. The generator then crafts a captivating narrative using OpenAI's ChatGPT completion API, bringing the encounter to life.
</p>
<p>
This is a minimum viable product (MVP) which I am in the process of refactoring into a mobile app for Android and IOS.
</p>
<p>KEY FEATURES</p>
<ul>
<li>Creature Selection: Users can choose from a diverse array of creatures stored in a MongoDB and apply filters to sort the data.</li>
<li>Context Setting: Dungeon Masters can set the scene and context for the encounter, tailoring the narrative to fit their campaign.</li>
<li>Narrative Generation: Utilizing OpenAI's ChatGPT completion API, the generator creates immersive and engaging stories that captivate players and enhance the gameplay experience.</li>
<p>This tool empowers Dungeon Masters to create immersive and exciting gameplay experiences for their players, fostering creativity, strategy, and collaboration in the world of Dungeons & Dragons.</p>


</ul>

### Built With

[![React](https://img.shields.io/badge/React-%23000000.svg?style=for-the-badge&logo=react&logoColor)](https://react.dev/)
[![Express](https://img.shields.io/badge/Express-%23000000.svg?style=for-the-badge&logo=Express)](https://expressjs.com/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)
[![Axios](https://img.shields.io/badge/Axios-007ACC?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)
[![MongoDB](https://img.shields.io/badge/Mongo--DB-%23000000?style=for-the-badge&logo=mongodb&logoColor=darkGreen)](https://www.mongodb.com/)
[![Mongoose](https://img.shields.io/badge/Mongoose.JS-%23000000?style=for-the-badge&logo=mongoose.js)](https://mongoosejs.com/)




## Getting Started
<p>
    Instructions to setup this app on your local machine below.
</p>

### Prerequisites

[![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo
```sh
git clone https://github.com/mob61887/MVP_5e_encounter_generator.git
```

2. Install dependencies using
```sh
npm install
```
3. Open two separate terminal tabs and run in your dev environment:
```
npm run server-dev
```
```
npm run client-dev
```

 <p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

This app is designed to run on the designated port. It can also be accessed utilizing localhost:PORT directly in the browser.

 <p align="right">(<a href="#readme-top">back to top</a>)</p>
