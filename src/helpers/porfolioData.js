import dictionary from '../images/projectsicon/dictionary.png'
import javascriptquiz from '../images/projectsicon/javascriptquiz.png'
import neoplants from '../images/projectsicon/neoplants.png'

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
]

export default portfolioData