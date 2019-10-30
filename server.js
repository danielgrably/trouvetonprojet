/**
 *
 * entrez la commande suivante:
 * npm install --save express express-session body-parser morgan cors
 * puis node server.js
 * exemple complet à l'adresse https://github.com/Musinux/first-vue-app
 */
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const session = require('express-session')

const app = express()

// ces lignes (cors) sont importantes pour les sessions dans la version de développement
app.use(cors({
  credentials: true,
  origin: 'http://localhost:8080'
}))

app.use(session({
  secret: 'acakolials14', // changez cette valeur
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // ne changez que si vous avez activé le https
}))

app.use(morgan('dev'))
app.use(bodyParser.json())

const path = require('path')
app.use(express.static(path.join(__dirname, '/dist')))

const users = [{
  username: 'admin',
  password: '1234',
  classe: '4A',
  filiere: 'SI'
}]

let projects = [
  {
    name: 'Projet WEB',
    creator: 'Teacher',
    description: 'Building a website with modern tooling and understanding of front-end and back-end concepts\nFront-end technologies: HTML5, CSS3, Javascript (Vue.js)\nBack-end technologies: Node.js (Express)',
    classe: '4A',
    filiere: 'SI'
  },
  {
    name: 'Projet WEB 2',
    creator: 'Teacher',
    description: 'Building a website with modern tooling and understanding of front-end and back-end concepts\nFront-end technologies: HTML5, CSS3, Javascript (Vue.js)\nBack-end technologies: Node.js (Express)',
    classe: '4A',
    filiere: 'SI'
  }
]

app.post('/api/login', (req, res) => {
  console.log('req.body', req.body)
  console.log('req.query', req.query)
  if (!req.session.userId) {
    const user = users.find(u => u.username === req.body.login && u.password === req.body.password)
    if (!user) {
      // gérez le cas où on n'a pas trouvé d'utilisateur correspondant
      // res.status(401)
      res.json({
        message: 'unknown login and pass',
        username: ''
      })
    } else {
      // connect the user
      req.session.userId = 1000 // connect the user, and change the id
      req.session.username = user.username
      req.session.classe = user.classe
      req.session.filiere = user.filiere
      res.json({
        message: 'connected',
        username: user.username,
        classe: user.classe,
        filiere: user.filiere
      })
    }
  } else {
    // res.status(401)
    res.json({
      message: 'already connected',
      username: req.session.username,
      classe: req.session.classe,
      filiere: req.session.filiere
    })
  }
})

app.post('/api/newaccount', (req, res) => {
  console.log('req.body', req.body)
  console.log('req.query', req.query)
  if (!req.session.userId) {
    const user = users.find(u => u.username === req.body.login)
    if (!user) {
      // Le compte n'existe pas
      users.push({ username: req.body.login, password: req.body.password, classe: req.body.classe, filiere: req.body.filiere })
      res.json({
        message: 'account created'
      })
    } else {
      // Le compte existe déjà
      res.json({
        message: 'account already exists'
      })
    }
  } else {
    res.json({
      message: 'already connected'
    })
  }
})

app.post('/api/updateaccount', (req, res) => {
  console.log('req.body', req.body)
  if (req.session.userId) {
    // On récupère l'index de l'utilisateur
    const userIndex = users.findIndex(u => u.username === req.body.login && u.password === req.body.password)
    if (userIndex > -1 && req.body.newpassword) {
      users[userIndex].password = req.body.newpassword
      users[userIndex].classe = req.body.classe
      users[userIndex].filiere = req.body.filiere
      res.json({
        message: 'account updated'
      })
      console.log('Updated ' + users[userIndex].username + ' informations')
    } else {
      res.json({
        message: 'bad login'
      })
    }
  } else {
    res.json({
      message: 'not connected'
    })
  }
})

app.get('/api/logout', (req, res) => {
  if (!req.session.userId) {
    // res.status(401)
    res.json({
      message: 'already disconnected'
    })
  } else {
    req.session.userId = 0
    res.json({
      message: 'disconnected'
    })
  }
})

function getMatchingProjects (classe, filiere) {
  let matchingProj = []
  // Pour chaque projet dans la liste
  projects.forEach(project => {
    // Si le projet contient au moins un des tags, alors on l'ajoute aux matchs
    if (!matchingProj.includes(project) && project.classe === classe && project.filiere === filiere) {
      matchingProj.push(project)
    }
  })

  return matchingProj
}

app.post('/api/getprojects', (req, res) => {
  console.log('project req.body', req.body)
  console.log('project req.query', req.query)
  if (req.session.userId) {
    res.json({
      matchingProjects: getMatchingProjects(req.body.data.classe, req.body.data.filiere),
      message: 'ok'
    })
  } else {
    req.session.userId = 0
    res.json({
      message: 'not connected'
    })
  }
})

app.get('/api/admin', (req, res) => {
  if (!req.session.userId || req.session.isAdmin === false) {
    res.status(401)
    res.json({ message: 'Unauthorized' })
    return
  }

  res.json({
    message: 'congrats, you are connected'
  })
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`listening on ${port}`)
})
