// File: 
//_data/mockData.js
const slugify = (text) =>
  text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');

// Categories with icons
const categories = [
  { name: "History", icon: "🏺", slug: "history" },
  { name: "Science", icon: "🧪", slug: "science" },
  { name: "Math", icon: "🧮", slug: "math" },
  { name: "Programming", icon: "💻", slug: "programming" },
  { name: "Geography", icon: "🌍", slug: "geography" },
  { name: "Literature", icon: "📚", slug: "literature" },
  { name: "Sports", icon: "🏅", slug: "sports" },
  { name: "Music", icon: "🎵", slug: "music" },
  { name: "Movies", icon: "🎬", slug: "movies" },
  { name: "Art", icon: "🎨", slug: "art" },
  { name: "Technology", icon: "🖥️", slug: "technology" },
  { name: "Business", icon: "💼", slug: "business" },
  { name: "Health", icon: "🩺", slug: "health" },
  { name: "Food", icon: "🍽️", slug: "food" },
  { name: "Travel", icon: "✈️", slug: "travel" },
  { name: "Nature", icon: "🌳", slug: "nature" },
  { name: "Politics", icon: "🏛️", slug: "politics" },
  { name: "Languages", icon: "🗣️", slug: "languages" },
  { name: "Philosophy", icon: "🤔", slug: "philosophy" },
  { name: "Fashion", icon: "👗", slug: "fashion" },
  { name: "Comics", icon: "🦸", slug: "comics" },
  { name: "Animals", icon: "🐾", slug: "animals" },
  { name: "Space", icon: "🪐", slug: "space" },
  { name: "Economics", icon: "💹", slug: "economics" },
  { name: "Engineering", icon: "🛠️", slug: "engineering" },
  { name: "Psychology", icon: "🧠", slug: "psychology" },
  { name: "Religion", icon: "⛪", slug: "religion" },
  { name: "Education", icon: "🎓", slug: "education" },
  { name: "Environment", icon: "🌱", slug: "environment" },
  { name: "Law", icon: "⚖️", slug: "law" },
  // Additional categories
  { name: "Mythology", icon: "🐉", slug: "mythology" },
  { name: "Board Games", icon: "🎲", slug: "board-games" },
  { name: "Video Games", icon: "🎮", slug: "video-games" },
  { name: "Television", icon: "📺", slug: "television" },
  { name: "Cartoons", icon: "🦄", slug: "cartoons" },
  { name: "Automotive", icon: "🚗", slug: "automotive" },
  { name: "Gardening", icon: "🌻", slug: "gardening" },
  { name: "Parenting", icon: "👨‍👩‍👧‍👦", slug: "parenting" },
  { name: "DIY", icon: "🔨", slug: "diy" },
  { name: "Fitness", icon: "🏋️", slug: "fitness" },
  { name: "Photography", icon: "📷", slug: "photography" },
  { name: "Poetry", icon: "📝", slug: "poetry" },
  { name: "Architecture", icon: "🏛️", slug: "architecture" },
  { name: "Astrology", icon: "🔮", slug: "astrology" },
  { name: "Finance", icon: "💰", slug: "finance" },
  { name: "Medicine", icon: "💊", slug: "medicine" },
  { name: "Crafts", icon: "✂️", slug: "crafts" },
  { name: "Pets", icon: "🐶", slug: "pets" },
  { name: "Adventure", icon: "🧗", slug: "adventure" },
  { name: "Hobbies", icon: "🎯", slug: "hobbies" },
];

// Quizzes mapped by category
const quizzes = {
  "History": [
    { id: "h1", title: "Ancient Civilizations", slug: "ancient-civilizations" },
    { id: "h2", title: "World Wars", slug: "world-wars" },
    { id: "h3", title: "Modern History", slug: "modern-history" },
  ],
  "Science": [
    { id: "s1", title: "Basic Physics", slug: "basic-physics" },
    { id: "s2", title: "Human Biology", slug: "human-biology" },
    { id: "s3", title: "Chemistry Basics", slug: "chemistry-basics" },
  ],
  "Math": [
    { id: "m1", title: "Algebra Fundamentals", slug: "algebra-fundamentals" },
    { id: "m2", title: "Geometry Essentials", slug: "geometry-essentials" },
  ],
  "Programming": [
    { id: "p1", title: "JavaScript Basics", slug: "javascript-basics" },
    { id: "p2", title: "Python Fundamentals", slug: "python-fundamentals" },
  ],
  "Geography": [
    { id: "g1", title: "World Capitals", slug: "world-capitals" },
    { id: "g2", title: "Famous Mountains", slug: "famous-mountains" },
  ],
  "Literature": [
    { id: "l1", title: "Famous Authors", slug: "famous-authors" },
    { id: "l2", title: "Classic Novels", slug: "classic-novels" },
  ],
  "Sports": [
    { id: "sp1", title: "Olympic Games", slug: "olympic-games" },
    { id: "sp2", title: "Football Legends", slug: "football-legends" },
  ],
  "Music": [
    { id: "mu1", title: "Classical Composers", slug: "classical-composers" },
    { id: "mu2", title: "Pop Hits", slug: "pop-hits" },
  ],
  "Movies": [
    { id: "mo1", title: "Oscar Winners", slug: "oscar-winners" },
    { id: "mo2", title: "Animated Films", slug: "animated-films" },
  ],
  "Art": [
    { id: "a1", title: "Renaissance Art", slug: "renaissance-art" },
    { id: "a2", title: "Modern Artists", slug: "modern-artists" },
  ],
  "Technology": [
    { id: "t1", title: "Tech Innovations", slug: "tech-innovations" },
  ],
  "Business": [
    { id: "b1", title: "Business Basics", slug: "business-basics" },
  ],
  "Health": [
    { id: "he1", title: "Human Body", slug: "human-body" },
  ],
  "Food": [
    { id: "f1", title: "World Cuisines", slug: "world-cuisines" },
  ],
  "Travel": [
    { id: "tr1", title: "Famous Landmarks", slug: "famous-landmarks" },
  ],
  "Nature": [
    { id: "n1", title: "Natural Wonders", slug: "natural-wonders" },
  ],
  "Politics": [
    { id: "po1", title: "World Leaders", slug: "world-leaders" },
  ],
  "Languages": [
    { id: "la1", title: "Language Origins", slug: "language-origins" },
  ],
  "Philosophy": [
    { id: "ph1", title: "Famous Philosophers", slug: "famous-philosophers" },
  ],
  "Fashion": [
    { id: "fa1", title: "Fashion Through Ages", slug: "fashion-through-ages" },
  ],
  "Comics": [
    { id: "co1", title: "Comic Book Heroes", slug: "comic-book-heroes" },
  ],
  "Animals": [
    { id: "an1", title: "Animal Kingdom", slug: "animal-kingdom" },
  ],
  "Space": [
    { id: "spc1", title: "Solar System", slug: "solar-system" },
  ],
  "Economics": [
    { id: "ec1", title: "Economic Terms", slug: "economic-terms" },
  ],
  "Engineering": [
    { id: "en1", title: "Engineering Marvels", slug: "engineering-marvels" },
  ],
  "Psychology": [
    { id: "ps1", title: "Human Mind", slug: "human-mind" },
  ],
  "Religion": [
    { id: "re1", title: "World Religions", slug: "world-religions" },
  ],
  "Education": [
    { id: "ed1", title: "Education Systems", slug: "education-systems" },
  ],
  "Environment": [
    { id: "env1", title: "Climate Change", slug: "climate-change" },
  ],
  "Law": [
    { id: "lw1", title: "Legal Basics", slug: "legal-basics" },
  ],
  "Mythology": [
    { id: "my1", title: "Greek Myths", slug: "greek-myths" },
  ],
  "Board Games": [
    { id: "bg1", title: "Chess Trivia", slug: "chess-trivia" },
  ],
  "Video Games": [
    { id: "vg1", title: "Classic Video Games", slug: "classic-video-games" },
  ],
  "Television": [
    { id: "tv1", title: "TV Show Facts", slug: "tv-show-facts" },
  ],
  "Cartoons": [
    { id: "ct1", title: "Animated Series", slug: "animated-series" },
  ],
  "Automotive": [
    { id: "au1", title: "Car Brands", slug: "car-brands" },
  ],
  "Gardening": [
    { id: "gd1", title: "Plant Care", slug: "plant-care" },
  ],
  "Parenting": [
    { id: "pa1", title: "Parenting Tips", slug: "parenting-tips" },
  ],
  "DIY": [
    { id: "diy1", title: "Home Projects", slug: "home-projects" },
  ],
  "Fitness": [
    { id: "fit1", title: "Exercise Basics", slug: "exercise-basics" },
  ],
  "Photography": [
    { id: "phg1", title: "Photography 101", slug: "photography-101" },
  ],
  "Poetry": [
    { id: "poe1", title: "Famous Poems", slug: "famous-poems" },
  ],
  "Architecture": [
    { id: "ar1", title: "Famous Buildings", slug: "famous-buildings" },
  ],
  "Astrology": [
    { id: "ast1", title: "Zodiac Signs", slug: "zodiac-signs" },
  ],
  "Finance": [
    { id: "fin1", title: "Personal Finance", slug: "personal-finance" },
  ],
  "Medicine": [
    { id: "med1", title: "Medical Discoveries", slug: "medical-discoveries" },
  ],
  "Crafts": [
    { id: "cr1", title: "Craft Ideas", slug: "craft-ideas" },
  ],
  "Pets": [
    { id: "pet1", title: "Pet Care", slug: "pet-care" },
  ],
  "Adventure": [
    { id: "adv1", title: "Adventure Sports", slug: "adventure-sports" },
  ],
  "Hobbies": [
    { id: "hb1", title: "Popular Hobbies", slug: "popular-hobbies" },
  ],
};

// Quiz details mapped by quiz ID
const quizDetails = {
  h1: {
    id: "h1",
    title: "Ancient Civilizations",
    category: "History",
    slug: slugify("Ancient Civilizations"),
    questions: [
      {
        question: "Who built the pyramids?",
        options: ["Romans", "Greeks", "Egyptians", "Babylonians"],
        answer: "Egyptians",
      },
      {
        question: "Which river is associated with the Indus Valley Civilization?",
        options: ["Ganges", "Indus", "Tigris", "Nile"],
        answer: "Indus",
      },
    ],
  },
  h2: {
    id: "h2",
    title: "World Wars",
    category: "History",
    slug: slugify("World Wars"),
    questions: [
      {
        question: "World War I began in which year?",
        options: ["1912", "1914", "1916", "1918"],
        answer: "1914",
      },
      {
        question: "Who was the Prime Minister of the UK during WWII?",
        options: ["Winston Churchill", "Neville Chamberlain", "Tony Blair", "Margaret Thatcher"],
        answer: "Winston Churchill",
      },
    ],
  },
  h3: {
    id: "h3",
    title: "Modern History",
    category: "History",
    slug: slugify("Modern History"),
    questions: [
      {
        question: "The Berlin Wall fell in which year?",
        options: ["1987", "1989", "1991", "1993"],
        answer: "1989",
      },
      {
        question: "Who was the first President of the United States?",
        options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
        answer: "George Washington",
      },
    ],
  },
  s1: {
    id: "s1",
    title: "Basic Physics",
    category: "Science",
    slug: slugify("Basic Physics"),
    questions: [
      {
        question: "What is the unit of force?",
        options: ["Watt", "Newton", "Pascal", "Joule"],
        answer: "Newton",
      },
      {
        question: "Speed = ?",
        options: ["Distance × Time", "Distance ÷ Time", "Time ÷ Distance", "Mass × Acceleration"],
        answer: "Distance ÷ Time",
      },
    ],
  },
  s2: {
    id: "s2",
    title: "Human Biology",
    category: "Science",
    slug: slugify("Human Biology"),
    questions: [
      {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi body"],
        answer: "Mitochondria",
      },
      {
        question: "How many chambers are there in a human heart?",
        options: ["2", "3", "4", "5"],
        answer: "4",
      },
    ],
  },
  s3: {
    id: "s3",
    title: "Chemistry Basics",
    category: "Science",
    slug: slugify("Chemistry Basics"),
    questions: [
      {
        question: "What is H2O commonly known as?",
        options: ["Oxygen", "Hydrogen", "Water", "Salt"],
        answer: "Water",
      },
      {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
        answer: "Carbon Dioxide",
      },
    ],
  },
  m1: {
    id: "m1",
    title: "Algebra Fundamentals",
    category: "Math",
    slug: slugify("Algebra Fundamentals"),
    questions: [
      {
        question: "What is the value of x in the equation 2x + 3 = 7?",
        options: ["1", "2", "3", "4"],
        answer: "2",
      },
      {
        question: "What is the solution to x^2 = 9?",
        options: ["3", "-3", "3 and -3", "0"],
        answer: "3 and -3",
      },
    ],
  },
  m2: {
    id: "m2",
    title: "Geometry Essentials",
    category: "Math",
    slug: slugify("Geometry Essentials"),
    questions: [
      {
        question: "How many degrees are in a triangle?",
        options: ["90", "180", "270", "360"],
        answer: "180",
      },
      {
        question: "What is the name of a polygon with 6 sides?",
        options: ["Pentagon", "Hexagon", "Heptagon", "Octagon"],
        answer: "Hexagon",
      },
    ],
  },
  p1: {
    id: "p1",
    title: "JavaScript Basics",
    category: "Programming",
    slug: slugify("JavaScript Basics"),
    questions: [
      {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "let", "const", "All of the above"],
        answer: "All of the above",
      },
      {
        question: "What does DOM stand for?",
        options: ["Document Object Model", "Data Object Model", "Desktop Oriented Model", "None"],
        answer: "Document Object Model",
      },
    ],
  },
  p2: {
    id: "p2",
    title: "Python Fundamentals",
    category: "Programming",
    slug: slugify("Python Fundamentals"),
    questions: [
      {
        question: "Which symbol is used for comments in Python?",
        options: ["//", "#", "<!--", "/* */"],
        answer: "#",
      },
      {
        question: "What is the output of print(2 ** 3)?",
        options: ["6", "8", "9", "5"],
        answer: "8",
      },
    ],
  },
  g1: {
    id: "g1",
    title: "World Capitals",
    category: "Geography",
    slug: slugify("World Capitals"),
    questions: [
      {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris",
      },
      {
        question: "What is the capital of Japan?",
        options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
        answer: "Tokyo",
      },
    ],
  },
  l1: {
    id: "l1",
    title: "Famous Authors",
    category: "Literature",
    slug: slugify("Famous Authors"),
    questions: [
      {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
        answer: "William Shakespeare",
      },
      {
        question: "Who is the author of '1984'?",
        options: ["George Orwell", "Aldous Huxley", "J.K. Rowling", "Ernest Hemingway"],
        answer: "George Orwell",
      },
    ],
  },
  g2: {
    id: "g2",
    title: "Famous Mountains",
    category: "Geography",
    slug: slugify("Famous Mountains"),
    questions: [
      {
        question: "Which is the highest mountain in the world?",
        options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"],
        answer: "Mount Everest",
      },
      {
        question: "In which continent is the Andes mountain range located?",
        options: ["Asia", "Europe", "South America", "Africa"],
        answer: "South America",
      },
    ],
  },
  l2: {
    id: "l2",
    title: "Classic Novels",
    category: "Literature",
    slug: slugify("Classic Novels"),
    questions: [
      {
        question: "Who wrote 'Pride and Prejudice'?",
        options: ["Jane Austen", "Emily Brontë", "Leo Tolstoy", "Charles Dickens"],
        answer: "Jane Austen",
      },
      {
        question: "Which novel features the character Atticus Finch?",
        options: ["To Kill a Mockingbird", "Moby Dick", "Great Expectations", "The Great Gatsby"],
        answer: "To Kill a Mockingbird",
      },
    ],
  },
  sp1: {
    id: "sp1",
    title: "Olympic Games",
    category: "Sports",
    slug: slugify("Olympic Games"),
    questions: [
      {
        question: "In which year were the first modern Olympic Games held?",
        options: ["1896", "1900", "1924", "1936"],
        answer: "1896",
      },
      {
        question: "Which city hosted the 2012 Summer Olympics?",
        options: ["Beijing", "London", "Rio de Janeiro", "Athens"],
        answer: "London",
      },
    ],
  },
  sp2: {
    id: "sp2",
    title: "Football Legends",
    category: "Sports",
    slug: slugify("Football Legends"),
    questions: [
      {
        question: "Who is known as 'The King of Football'?",
        options: ["Diego Maradona", "Pele", "Cristiano Ronaldo", "Lionel Messi"],
        answer: "Pele",
      },
      {
        question: "Which player has won the most Ballon d'Or awards?",
        options: ["Cristiano Ronaldo", "Lionel Messi", "Michel Platini", "Johan Cruyff"],
        answer: "Lionel Messi",
      },
    ],
  },
  mu1: {
    id: "mu1",
    title: "Classical Composers",
    category: "Music",
    slug: slugify("Classical Composers"),
    questions: [
      {
        question: "Who composed the 'Fifth Symphony'?",
        options: ["Mozart", "Beethoven", "Bach", "Chopin"],
        answer: "Beethoven",
      },
      {
        question: "Which composer became deaf later in life?",
        options: ["Beethoven", "Brahms", "Tchaikovsky", "Handel"],
        answer: "Beethoven",
      },
    ],
  },
  mu2: {
    id: "mu2",
    title: "Pop Hits",
    category: "Music",
    slug: slugify("Pop Hits"),
    questions: [
      {
        question: "Who sang 'Thriller'?",
        options: ["Prince", "Michael Jackson", "Madonna", "Whitney Houston"],
        answer: "Michael Jackson",
      },
      {
        question: "Which band released 'Hey Jude'?",
        options: ["The Beatles", "Queen", "The Rolling Stones", "Pink Floyd"],
        answer: "The Beatles",
      },
    ],
  },
  mo1: {
    id: "mo1",
    title: "Oscar Winners",
    category: "Movies",
    slug: slugify("Oscar Winners"),
    questions: [
      {
        question: "Which movie won Best Picture at the 1994 Oscars?",
        options: ["Pulp Fiction", "Forrest Gump", "The Shawshank Redemption", "Four Weddings and a Funeral"],
        answer: "Forrest Gump",
      },
      {
        question: "Who won the Oscar for Best Actor in 2020?",
        options: ["Joaquin Phoenix", "Leonardo DiCaprio", "Brad Pitt", "Antonio Banderas"],
        answer: "Joaquin Phoenix",
      },
    ],
  },
  mo2: {
    id: "mo2",
    title: "Animated Films",
    category: "Movies",
    slug: slugify("Animated Films"),
    questions: [
      {
        question: "Which studio produced 'Toy Story'?",
        options: ["DreamWorks", "Pixar", "Disney", "Blue Sky"],
        answer: "Pixar",
      },
      {
        question: "Who is the main character in 'Shrek'?",
        options: ["Donkey", "Shrek", "Fiona", "Puss in Boots"],
        answer: "Shrek",
      },
    ],
  },
  a1: {
    id: "a1",
    title: "Renaissance Art",
    category: "Art",
    slug: slugify("Renaissance Art"),
    questions: [
      {
        question: "Who painted the Mona Lisa?",
        options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
        answer: "Leonardo da Vinci",
      },
      {
        question: "Which city is known as the birthplace of the Renaissance?",
        options: ["Rome", "Florence", "Venice", "Milan"],
        answer: "Florence",
      },
    ],
  },
  a2: {
    id: "a2",
    title: "Modern Artists",
    category: "Art",
    slug: slugify("Modern Artists"),
    questions: [
      {
        question: "Who painted 'The Persistence of Memory'?",
        options: ["Pablo Picasso", "Salvador Dalí", "Claude Monet", "Andy Warhol"],
        answer: "Salvador Dalí",
      },
      {
        question: "Which artist is famous for Campbell's Soup Cans?",
        options: ["Jackson Pollock", "Andy Warhol", "Roy Lichtenstein", "Mark Rothko"],
        answer: "Andy Warhol",
      },
    ],
  },
  t1: {
    id: "t1",
    title: "Tech Innovations",
    category: "Technology",
    slug: slugify("Tech Innovations"),
    questions: [
      {
        question: "Who is known as the father of the computer?",
        options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
        answer: "Charles Babbage",
      },
      {
        question: "What year was the World Wide Web invented?",
        options: ["1989", "1991", "1995", "2000"],
        answer: "1989",
      },
    ],
  },
  b1: {
    id: "b1",
    title: "Business Basics",
    category: "Business",
    slug: slugify("Business Basics"),
    questions: [
      {
        question: "What does CEO stand for?",
        options: ["Chief Executive Officer", "Chief Engineering Officer", "Central Executive Officer", "Chief Economic Officer"],
        answer: "Chief Executive Officer",
      },
      {
        question: "Which company is known for the slogan 'Just Do It'?",
        options: ["Adidas", "Nike", "Puma", "Reebok"],
        answer: "Nike",
      },
    ],
  },
  he1: {
    id: "he1",
    title: "Human Body",
    category: "Health",
    slug: slugify("Human Body"),
    questions: [
      {
        question: "How many bones are in the adult human body?",
        options: ["206", "208", "210", "212"],
        answer: "206",
      },
      {
        question: "What is the largest organ in the human body?",
        options: ["Heart", "Liver", "Skin", "Lungs"],
        answer: "Skin",
      },
    ],
  },
  f1: {
    id: "f1",
    title: "World Cuisines",
    category: "Food",
    slug: slugify("World Cuisines"),
    questions: [
      {
        question: "Sushi is a cuisine from which country?",
        options: ["China", "Japan", "Thailand", "Vietnam"],
        answer: "Japan",
      },
      {
        question: "Which country is famous for pizza?",
        options: ["France", "Italy", "Spain", "Greece"],
        answer: "Italy",
      },
    ],
  },
  tr1: {
    id: "tr1",
    title: "Famous Landmarks",
    category: "Travel",
    slug: slugify("Famous Landmarks"),
    questions: [
      {
        question: "Where is the Eiffel Tower located?",
        options: ["London", "Paris", "Rome", "Berlin"],
        answer: "Paris",
      },
      {
        question: "Which country is home to Machu Picchu?",
        options: ["Brazil", "Peru", "Chile", "Argentina"],
        answer: "Peru",
      },
    ],
  },
  n1: {
    id: "n1",
    title: "Natural Wonders",
    category: "Nature",
    slug: slugify("Natural Wonders"),
    questions: [
      {
        question: "Which is the largest rainforest in the world?",
        options: ["Congo", "Amazon", "Daintree", "Tongass"],
        answer: "Amazon",
      },
      {
        question: "Where is the Great Barrier Reef located?",
        options: ["Australia", "USA", "South Africa", "India"],
        answer: "Australia",
      },
    ],
  },
  po1: {
    id: "po1",
    title: "World Leaders",
    category: "Politics",
    slug: slugify("World Leaders"),
    questions: [
      {
        question: "Who was the first female Prime Minister of the UK?",
        options: ["Theresa May", "Margaret Thatcher", "Angela Merkel", "Indira Gandhi"],
        answer: "Margaret Thatcher",
      },
      {
        question: "Who is the current President of the United States? (as of 2024)",
        options: ["Donald Trump", "Joe Biden", "Barack Obama", "George Bush"],
        answer: "Joe Biden",
      },
    ],
  },
  la1: {
    id: "la1",
    title: "Language Origins",
    category: "Languages",
    slug: slugify("Language Origins"),
    questions: [
      {
        question: "Which language is considered the root of the Romance languages?",
        options: ["Greek", "Latin", "French", "German"],
        answer: "Latin",
      },
      {
        question: "What is the most spoken language in the world?",
        options: ["English", "Mandarin Chinese", "Spanish", "Hindi"],
        answer: "Mandarin Chinese",
      },
    ],
  },
  ph1: {
    id: "ph1",
    title: "Famous Philosophers",
    category: "Philosophy",
    slug: slugify("Famous Philosophers"),
    questions: [
      {
        question: "Who wrote 'The Republic'?",
        options: ["Plato", "Aristotle", "Socrates", "Descartes"],
        answer: "Plato",
      },
      {
        question: "Which philosopher said 'I think, therefore I am'?",
        options: ["Kant", "Nietzsche", "Descartes", "Hume"],
        answer: "Descartes",
      },
    ],
  },
  fa1: {
    id: "fa1",
    title: "Fashion Through Ages",
    category: "Fashion",
    slug: slugify("Fashion Through Ages"),
    questions: [
      {
        question: "Which decade is known for bell-bottom pants?",
        options: ["1950s", "1960s", "1970s", "1980s"],
        answer: "1970s",
      },
      {
        question: "Who is a famous French fashion designer?",
        options: ["Coco Chanel", "Giorgio Armani", "Ralph Lauren", "Donatella Versace"],
        answer: "Coco Chanel",
      },
    ],
  },
  co1: {
    id: "co1",
    title: "Comic Book Heroes",
    category: "Comics",
    slug: slugify("Comic Book Heroes"),
    questions: [
      {
        question: "Who is Batman's alter ego?",
        options: ["Clark Kent", "Bruce Wayne", "Peter Parker", "Tony Stark"],
        answer: "Bruce Wayne",
      },
      {
        question: "Which superhero is known as the 'Man of Steel'?",
        options: ["Iron Man", "Superman", "Hulk", "Thor"],
        answer: "Superman",
      },
    ],
  },
  an1: {
    id: "an1",
    title: "Animal Kingdom",
    category: "Animals",
    slug: slugify("Animal Kingdom"),
    questions: [
      {
        question: "Which animal is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        answer: "Blue Whale",
      },
      {
        question: "What is a group of lions called?",
        options: ["Pack", "Flock", "Pride", "School"],
        answer: "Pride",
      },
    ],
  },
  spc1: {
    id: "spc1",
    title: "Solar System",
    category: "Space",
    slug: slugify("Solar System"),
    questions: [
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Mars",
      },
      {
        question: "How many planets are in the Solar System?",
        options: ["7", "8", "9", "10"],
        answer: "8",
      },
    ],
  },
  ec1: {
    id: "ec1",
    title: "Economic Terms",
    category: "Economics",
    slug: slugify("Economic Terms"),
    questions: [
      {
        question: "What does GDP stand for?",
        options: ["Gross Domestic Product", "General Domestic Product", "Gross Domestic Profit", "General Domestic Profit"],
        answer: "Gross Domestic Product",
      },
      {
        question: "Which is a type of market structure?",
        options: ["Monopoly", "Democracy", "Oligarchy", "Autocracy"],
        answer: "Monopoly",
      },
    ],
  },
  en1: {
    id: "en1",
    title: "Engineering Marvels",
    category: "Engineering",
    slug: slugify("Engineering Marvels"),
    questions: [
      {
        question: "Where is the Golden Gate Bridge located?",
        options: ["New York", "San Francisco", "Los Angeles", "Chicago"],
        answer: "San Francisco",
      },
      {
        question: "Which country built the Burj Khalifa?",
        options: ["Saudi Arabia", "Qatar", "UAE", "Kuwait"],
        answer: "UAE",
      },
    ],
  },
  ps1: {
    id: "ps1",
    title: "Human Mind",
    category: "Psychology",
    slug: slugify("Human Mind"),
    questions: [
      {
        question: "Who is known as the father of psychoanalysis?",
        options: ["Sigmund Freud", "Carl Jung", "Ivan Pavlov", "B.F. Skinner"],
        answer: "Sigmund Freud",
      },
      {
        question: "What is the term for a fear of spiders?",
        options: ["Arachnophobia", "Acrophobia", "Agoraphobia", "Claustrophobia"],
        answer: "Arachnophobia",
      },
    ],
  },
  re1: {
    id: "re1",
    title: "World Religions",
    category: "Religion",
    slug: slugify("World Religions"),
    questions: [
      {
        question: "Which religion is based on the teachings of Jesus Christ?",
        options: ["Islam", "Christianity", "Buddhism", "Hinduism"],
        answer: "Christianity",
      },
      {
        question: "What is the holy book of Islam?",
        options: ["Bible", "Torah", "Quran", "Vedas"],
        answer: "Quran",
      },
    ],
  },
  ed1: {
    id: "ed1",
    title: "Education Systems",
    category: "Education",
    slug: slugify("Education Systems"),
    questions: [
      {
        question: "Which country is known for the 'Gurukul' system?",
        options: ["China", "India", "Japan", "Greece"],
        answer: "India",
      },
      {
        question: "What is the highest academic degree?",
        options: ["Bachelor's", "Master's", "Doctorate", "Diploma"],
        answer: "Doctorate",
      },
    ],
  },
  env1: {
    id: "env1",
    title: "Climate Change",
    category: "Environment",
    slug: slugify("Climate Change"),
    questions: [
      {
        question: "Which gas is a major contributor to global warming?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Carbon Dioxide",
      },
      {
        question: "What is the process of planting trees called?",
        options: ["Deforestation", "Afforestation", "Desertification", "Urbanization"],
        answer: "Afforestation",
      },
    ],
  },
  lw1: {
    id: "lw1",
    title: "Legal Basics",
    category: "Law",
    slug: slugify("Legal Basics"),
    questions: [
      {
        question: "What is the supreme law of the United States?",
        options: ["Bill of Rights", "Declaration of Independence", "Constitution", "Magna Carta"],
        answer: "Constitution",
      },
      {
        question: "Who represents the government in a criminal case?",
        options: ["Defendant", "Plaintiff", "Prosecutor", "Judge"],
        answer: "Prosecutor",
      },
    ],
  },
  my1: {
    id: "my1",
    title: "Greek Myths",
    category: "Mythology",
    slug: slugify("Greek Myths"),
    questions: [
      {
        question: "Who is the king of the Greek gods?",
        options: ["Poseidon", "Zeus", "Hades", "Apollo"],
        answer: "Zeus",
      },
      {
        question: "Who completed the Twelve Labors?",
        options: ["Perseus", "Theseus", "Hercules", "Odysseus"],
        answer: "Hercules",
      },
    ],
  },
  bg1: {
    id: "bg1",
    title: "Chess Trivia",
    category: "Board Games",
    slug: slugify("Chess Trivia"),
    questions: [
      {
        question: "How many squares are there on a chessboard?",
        options: ["64", "81", "100", "49"],
        answer: "64",
      },
      {
        question: "Which piece can move any number of squares in any direction?",
        options: ["Bishop", "Queen", "Rook", "Knight"],
        answer: "Queen",
      },
    ],
  },
  vg1: {
    id: "vg1",
    title: "Classic Video Games",
    category: "Video Games",
    slug: slugify("Classic Video Games"),
    questions: [
      {
        question: "Who is the main character in the 'Super Mario' series?",
        options: ["Luigi", "Mario", "Peach", "Bowser"],
        answer: "Mario",
      },
      {
        question: "Which game features the character 'Link'?",
        options: ["Metroid", "The Legend of Zelda", "Donkey Kong", "Pac-Man"],
        answer: "The Legend of Zelda",
      },
    ],
  },
  tv1: {
    id: "tv1",
    title: "TV Show Facts",
    category: "Television",
    slug: slugify("TV Show Facts"),
    questions: [
      {
        question: "Which TV show features the character 'Walter White'?",
        options: ["Breaking Bad", "The Sopranos", "Friends", "Lost"],
        answer: "Breaking Bad",
      },
      {
        question: "Which sitcom is set in New York and features six friends?",
        options: ["Seinfeld", "Friends", "How I Met Your Mother", "The Office"],
        answer: "Friends",
      },
    ],
  },
  ct1: {
    id: "ct1",
    title: "Animated Series",
    category: "Cartoons",
    slug: slugify("Animated Series"),
    questions: [
      {
        question: "Who lives in a pineapple under the sea?",
        options: ["Patrick", "Squidward", "SpongeBob", "Mr. Krabs"],
        answer: "SpongeBob",
      },
      {
        question: "Which cartoon features a boy and his dog named Jake?",
        options: ["Adventure Time", "Regular Show", "Steven Universe", "Gravity Falls"],
        answer: "Adventure Time",
      },
    ],
  },
  au1: {
    id: "au1",
    title: "Car Brands",
    category: "Automotive",
    slug: slugify("Car Brands"),
    questions: [
      {
        question: "Which company manufactures the Mustang?",
        options: ["Chevrolet", "Ford", "Dodge", "Toyota"],
        answer: "Ford",
      },
      {
        question: "Which country is home to the car brand 'Toyota'?",
        options: ["USA", "Germany", "Japan", "France"],
        answer: "Japan",
      },
    ],
  },
  gd1: {
    id: "gd1",
    title: "Plant Care",
    category: "Gardening",
    slug: slugify("Plant Care"),
    questions: [
      {
        question: "What do plants need for photosynthesis?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
        answer: "Carbon Dioxide",
      },
      {
        question: "Which tool is used for pruning plants?",
        options: ["Shovel", "Hoe", "Pruner", "Rake"],
        answer: "Pruner",
      },
    ],
  },
  pa1: {
    id: "pa1",
    title: "Parenting Tips",
    category: "Parenting",
    slug: slugify("Parenting Tips"),
    questions: [
      {
        question: "What is important for child development?",
        options: ["Nutrition", "Sleep", "Play", "All of the above"],
        answer: "All of the above",
      },
      {
        question: "Which is a positive discipline technique?",
        options: ["Yelling", "Time-out", "Ignoring", "Spanking"],
        answer: "Time-out",
      },
    ],
  },
  diy1: {
    id: "diy1",
    title: "Home Projects",
    category: "DIY",
    slug: slugify("Home Projects"),
    questions: [
      {
        question: "What tool is used to drive nails into wood?",
        options: ["Screwdriver", "Hammer", "Wrench", "Pliers"],
        answer: "Hammer",
      },
      {
        question: "Which material is commonly used for insulation?",
        options: ["Glass", "Fiberglass", "Plastic", "Metal"],
        answer: "Fiberglass",
      },
    ],
  },
  fit1: {
    id: "fit1",
    title: "Exercise Basics",
    category: "Fitness",
    slug: slugify("Exercise Basics"),
    questions: [
      {
        question: "Which exercise strengthens the chest muscles?",
        options: ["Squats", "Push-ups", "Lunges", "Plank"],
        answer: "Push-ups",
      },
      {
        question: "How many minutes of moderate exercise are recommended per week?",
        options: ["60", "150", "200", "300"],
        answer: "150",
      },
    ],
  },
  phg1: {
    id: "phg1",
    title: "Photography 101",
    category: "Photography",
    slug: slugify("Photography 101"),
    questions: [
      {
        question: "What does DSLR stand for?",
        options: ["Digital Single-Lens Reflex", "Digital Standard Lens Range", "Dual Shutter Lens Reflex", "Digital Shutter Lens Reflex"],
        answer: "Digital Single-Lens Reflex",
      },
      {
        question: "Which setting controls the amount of light entering the camera?",
        options: ["ISO", "Aperture", "Shutter Speed", "White Balance"],
        answer: "Aperture",
      },
    ],
  },
  poe1: {
    id: "poe1",
    title: "Famous Poems",
    category: "Poetry",
    slug: slugify("Famous Poems"),
    questions: [
      {
        question: "Who wrote 'The Raven'?",
        options: ["Robert Frost", "Edgar Allan Poe", "Emily Dickinson", "Walt Whitman"],
        answer: "Edgar Allan Poe",
      },
      {
        question: "Which poem begins 'Two roads diverged in a yellow wood'?",
        options: ["The Road Not Taken", "Ozymandias", "Daffodils", "If—"],
        answer: "The Road Not Taken",
      },
    ],
  },
  ar1: {
    id: "ar1",
    title: "Famous Buildings",
    category: "Architecture",
    slug: slugify("Famous Buildings"),
    questions: [
      {
        question: "Where is the Taj Mahal located?",
        options: ["India", "Pakistan", "Bangladesh", "Nepal"],
        answer: "India",
      },
      {
        question: "Which building is known as the tallest in the world (as of 2024)?",
        options: ["Shanghai Tower", "Burj Khalifa", "One World Trade Center", "Petronas Towers"],
        answer: "Burj Khalifa",
      },
    ],
  },
  ast1: {
    id: "ast1",
    title: "Zodiac Signs",
    category: "Astrology",
    slug: slugify("Zodiac Signs"),
    questions: [
      {
        question: "Which sign is represented by the lion?",
        options: ["Leo", "Aries", "Sagittarius", "Taurus"],
        answer: "Leo",
      },
      {
        question: "How many zodiac signs are there?",
        options: ["10", "11", "12", "13"],
        answer: "12",
      },
    ],
  },
  fin1: {
    id: "fin1",
    title: "Personal Finance",
    category: "Finance",
    slug: slugify("Personal Finance"),
    questions: [
      {
        question: "What is a budget?",
        options: ["A type of loan", "A spending plan", "A bank account", "A credit card"],
        answer: "A spending plan",
      },
      {
        question: "Which is a form of investment?",
        options: ["Stocks", "Savings account", "Real estate", "All of the above"],
        answer: "All of the above",
      },
    ],
  },
  med1: {
    id: "med1",
    title: "Medical Discoveries",
    category: "Medicine",
    slug: slugify("Medical Discoveries"),
    questions: [
      {
        question: "Who discovered penicillin?",
        options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Edward Jenner"],
        answer: "Alexander Fleming",
      },
      {
        question: "What is the study of the heart called?",
        options: ["Neurology", "Cardiology", "Dermatology", "Oncology"],
        answer: "Cardiology",
      },
    ],
  },
  cr1: {
    id: "cr1",
    title: "Craft Ideas",
    category: "Crafts",
    slug: slugify("Craft Ideas"),
    questions: [
      {
        question: "Which material is commonly used in origami?",
        options: ["Plastic", "Paper", "Wood", "Metal"],
        answer: "Paper",
      },
      {
        question: "What is the art of making objects from clay called?",
        options: ["Pottery", "Weaving", "Knitting", "Embroidery"],
        answer: "Pottery",
      },
    ],
  },
  pet1: {
    id: "pet1",
    title: "Pet Care",
    category: "Pets",
    slug: slugify("Pet Care"),
    questions: [
      {
        question: "Which animal is known as man's best friend?",
        options: ["Cat", "Dog", "Rabbit", "Parrot"],
        answer: "Dog",
      },
      {
        question: "What do cats use their whiskers for?",
        options: ["Hearing", "Balance", "Sensing surroundings", "Smelling"],
        answer: "Sensing surroundings",
      },
    ],
  },
  adv1: {
    id: "adv1",
    title: "Adventure Sports",
    category: "Adventure",
    slug: slugify("Adventure Sports"),
    questions: [
      {
        question: "Which sport involves jumping from an aircraft with a parachute?",
        options: ["Bungee Jumping", "Skydiving", "Paragliding", "Hang Gliding"],
        answer: "Skydiving",
      },
      {
        question: "Which river is famous for white-water rafting in the USA?",
        options: ["Mississippi", "Colorado", "Amazon", "Nile"],
        answer: "Colorado",
      },
    ],
  },
  hb1: {
    id: "hb1",
    title: "Popular Hobbies",
    category: "Hobbies",
    slug: slugify("Popular Hobbies"),
    questions: [
      {
        question: "Which hobby involves collecting stamps?",
        options: ["Philately", "Numismatics", "Origami", "Calligraphy"],
        answer: "Philately",
      },
      {
        question: "What is the hobby of growing and caring for plants called?",
        options: ["Gardening", "Painting", "Cooking", "Knitting"],
        answer: "Gardening",
      },
    ],
  },
};

export { categories, quizzes, quizDetails };
