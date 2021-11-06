Multiple titles -> Display them like its being typed out, erased, then next one repeating (https://dorota1997.github.io/react-frontend-dev-portfolio/)
Light/dark mode

Experienced full-stack web and mobile developer

Filters at the top:
- Languages
- Frameworks / Libraries
- Platforms
- Areas

Professional Experience

Front end
- Very experienced developing sites with technolgoies from HTML/CSS/JS to React
- Have used libraries like bootstrap

Backend
- Have developed backends and REST APIs in Java, Python, Javascript

Languages:
- React
- React native
- Java
  - JAVAFX
  - Swing
  - JavaRX
- Python
- HTML/CSS/Javascript
- jQuery

Databases
- MySQL
- PostgreSQL
- Neo4j
- 

Projects
- Indepocket
  - Languages: Javascript
  - Frameworks/Libraries: React-Native, Firebase
  - Areas: Mobile Development
  - A powerful mobile task tracker built with react-native.
    - Extrememly customizable
    - Task scheduling
    - Friends and real-time collaboration
  - App store: https://play.google.com/store/apps/details?id=com.shaver.indepocket
- Midio
  - Languages: Java, Javascript
  - Frameworks/Libraries: React-Native, Android
  - Areas: Mobile Development
  - An react-native Android toy app for connecting to MIDI keyboards and playing with various sounds
  - App store: https://play.google.com/store/apps/details?id=com.shaver.midio
  - Developed from custom react-native modules I also developed:
    - Soundfont player: https://github.com/ShavaShav/react-native-soundfont
    - Soundfont libraries: https://github.com/ShavaShav/react-native-soundfonts
    - MIDI controller: https://github.com/ShavaShav/react-native-midi
- Smartcampus
  - A facebook clone developed using react-native.
  - Languages: HTML, Javascript, CSS
  - Frameworks/Libraries: React, NodeJS, Neo4j
  - Areas: Web Development
    - Backend: https://github.com/ShavaShav/smartcampus-api
    - Frontend: https://github.com/ShavaShav/smartcampus-web
- Juzahach
  - A facebook clone developed using react-native.
  - Languages: HTML, Javascript, CSS, C++
  - Frameworks/Libraries: React, NodeJS, Express
  - Areas: Web/Mobile Development
  - https://github.com/ShavaShav/juzahach-cloud/wiki
  - IoT real-time vehicle tracking software package including:
    - A react-based web app. Users can manage devices and view/track their current position on a map.
      - https://github.com/ShavaShav/juzahach-manager
    - A 'cloud' server that processes data from the edge devices, and serves the web app. 
      - https://github.com/ShavaShav/juzahach-cloud
    - A QT-based 'edge' android application that signs up device and streams the current location to the cloud app.
      - https://github.com/ShavaShav/juzahach-edge

- Cream
  - Languages: Java
  - Frameworks/Libraries: Android
  - Areas: Mobile Development
  - https://github.com/ShavaShav/cream
  - Native Android money manager. Tracks income and expenses, offering graphs and visualizations.
- Mailjar
  - Languages: Java
  - Frameworks/Libraries: JavaFX
  - Platform: Desktop
  - Areas: Desktop
  - https://github.com/ShavaShav/MailJar
  - Java-based Desktop email client.
- AgendaBot
  - Languages: Java
  - Frameworks/Libraries: Twitter API
  - Platform: Service
  - Areas: Bots
  - https://github.com/ShavaShav/AgendaBot
  - CodeJam project 
  - Responds to tweets with keywords containing @WindsorAlert with a link to the Windor City Council agendar containing the keywords.
- Prisoner's Dilemma strategy development
  - Languages: Java
  - Frameworks/Libraries: IPX(?) source code
  - Platform: Desktop
  - Areas: Algorithms
  - https://github.com/ShavaShav/PrisonersDilemma
  - Developed various strategies for playing the Prisoners Dilemma 
- NQueens Hill Climber visualization
  - Languages: Java
  - Frameworks/Libraries: JavaFX
  - Platform: Desktop
  - Areas: Algorithms
  - https://github.com/ShavaShav/NQueens_HillClimbing
  - Java based visualization of the NQueens Hill Climber visualization

Main description:
- Strong foundations in computer science. Able to make informed decisions on algorithm choices.
- Full-time experience working on full stack applications and a proven track record of adding value.
- Out of the box thinker that strives for simplicity
- Started work as a QA, so I'm very test-driven

Types of queries:

- Show all records for a particular language, framework, library or platform, or combinations thereof
- Sort records by time (most recent, or oldest first), title, popularity
- Search record title, descriptions

Search (top)
Filter (side bar)
  - Each category:
    - language
    - framework
    - library
    - platform
    - area of interest
  - type
  - link available
  - has source code
  - has documentation

Sort -> time, title, github popularity (api call?) (dropdown beside search?)

Record {
  title: '',
  description: '',
  start: date,
  end: date,
  logo: url,
  skills: [],
  languages: [],
  frameworks: [],
  libraries: [],
  platforms: [],
  links: [
    { type: 'google_play' | 'executable' | 'website', url: string }
  ],
}

Project implements Record {
  screenshot: url,
  sourceCode: url,
  docs: url, 
}

Work extends Record {
  employer: '',
}