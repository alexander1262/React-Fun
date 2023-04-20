import dictionary from '../images/projectsicon/dictionary.png'
import javascriptquiz from '../images/projectsicon/javascriptquiz.png'
import neoplants from '../images/projectsicon/neoplants.png'
import notetaker from '../images/projectsicon/notetaker.png'
import logogenerator from '../images/projectsicon/logogenerator.png'
import readme from '../images/projectsicon/readme.png'

const portfolioData = [
    {
        image: javascriptquiz,
        deployed: 'https://alexander1262.github.io/Javascript-Timed-Coding-Quiz/',
        repo: 'https://github.com/alexander1262/Javascript-Timed-Coding-Quiz',
        title: 'Javascript Coding Quiz',
        description: 'A timed quiz on Javascript coding that uses localstorage for a highscores list',
        technologies: 'HTML | CSS | Javascript'
    },
    {
        image: dictionary,
        deployed: 'https://rapperthedabber.github.io/Daring-Dinoursars/',
        repo: 'https://github.com/rapperthedabber/Daring-Dinoursars',
        title: 'Daring Dinosaurs Dictionary',
        description: 'An online search engine that takes in a word and displays the definition, top 5 YouTube results, and Wikipedia entry',
        technologies: 'HTML | CSS | Javascript'
    },
    {
        image: neoplants,
        deployed: 'https://grey-stones.herokuapp.com/',
        repo: 'https://github.com/alexander1262/NeoPlants-Interactive-Web-Game',
        title: 'NeoPlants',
        description: 'A browser based game that allows the user to create, raise, and interact with a virtual plant',
        technologies: 'Handlebars | CSS | Javascript | Express.js | Node.js'
    },
    {
        image: notetaker,
        deployed: 'https://tranquil-castle-94562.herokuapp.com/',
        repo: 'https://github.com/alexander1262/Note-Taker',
        title: 'Note Taker',
        description: 'A website application that allows the user to take notes, save them, and delete notes on click',
        technologies: 'HTML | CSS | Javascript | Node.js | Heroku'
    },
    {
        image: logogenerator,
        deployed: 'https://drive.google.com/file/d/1lK4wo_kbX5DN3m09PfgLEsJEOdsj2ZyN/view',
        repo: 'https://github.com/alexander1262/SVG-Logo-Generator',
        title: 'Logo Generator',
        description: 'An application that takes in user input to generate an svg logo',
        technologies: 'Javascript | Jest | Node.js'
    },
    {
        image: readme,
        deployed: 'https://drive.google.com/file/d/1uQ578TYbaHPtI_frQJTp72RzH9Og2Ot0/view',
        repo: 'https://github.com/alexander1262/Professional-READme-Generator',
        title: 'Readme Generator',
        description: 'An application that generates a professional ReadMe file propagated with user input',
        technologies: 'Javascript | Node.js'
    }
]

export default portfolioData