const people = [
  {
    id: 1,
    name: "Сумченко Володимир Борисович",
    role: "Ліквідатор 1-А категорії",
    bio: "Often regarded as the first computer programmer, Ada Lovelace wrote the first algorithm intended to be processed by a machine.",
    location: "London, UK",
    born: "1815",
    tags: ["Mathematics", "Computing", "Science"],
    avatar: "/images/Sumchenko_Volodymyr_avatar.png",
    photo: "/images/Sumchenko_Volodymyr_avatar.png",
    sections: [
      {
        text: "Він — ліквідатор 1-А категорії, інвалід війни ІІІ групи. З листопада 1986 по січень 1987 року Володимир Борисович здійснив понад 30 виїздів в особливо небезпечну зону №3. Його особиста доза опромінення склала 25 рентген (доза у 25 рентгенів перевищує умовно безпечний рівень приблизно у 50 разів!).  Шлях до епіцентру та робота в «невидимому вогні» Для Володимира Борисовича Чорнобиль розпочався з повістки лейтенанту запасу та швидких зборів у Сумському військкоматі. Після перепідготовки у Білій Церкві його направили до елітного Окремого спеціального батальйону хімічного захисту, який через складність завдань називали «спецназом». Разом із побратимами Володимир працював у самому серці катастрофи — в особливо небезпечній зоні №3, на території перших трьох енергоблоків. Їхні будні минали у підвальних приміщеннях на мінусових відмітках: вони відкачували радіоактивну воду, дезактивували кабелі та обладнання в реакторному цеху. Щодня шлях до робочих місць пролягав повз розвалений четвертий реактор та «Рудий ліс», де рівень радіації перевищував 50 рентген на годину, перетворюючи кожну зміну на справжнє випробування людської витривалості.",
        image: '/images/Sumchenko_Volodymyr.png'
      },
      {
        text: "Ціна обов'язку та життя після подвигу Основним захистом ліквідаторів у ті часи була лише марлева пов'язка «пелюстка», яка швидко намокала від поту й забивалася радіоактивним пилом під час багатогодинних змін. Володимир Борисович згадує, що радіація була невідчутною на дотик чи запах, але проявлялася металевим присмаком у роті, головним болем та постійною втомою. Попри невидиму небезпеку, почуття відповідальності переважало страх за здоров'я. Сьогодні, завершивши свою місію на станції, він продовжує служити людям як незмінний голова Тростянецького осередку «Союз Чорнобиль України». За свій подвиг та багаторічну громадську діяльність він відзначений Грамотою Верховної Ради України, залишаючись живою легендою та символом незламності для своєї громади.",
        image: "/images/Sumchenko_Volodymyr_story.jpg"
      },
    ]
  },
  // {
  //   id: 2,
  //   name: "Alan Turing",
  //   role: "Computer Scientist",
  //   bio: "Alan Turing was a pioneering computer scientist, mathematician, and logician widely considered the father of theoretical computer science.",
  //   location: "London, UK",
  //   born: "1912",
  //   tags: ["AI", "Cryptography", "Mathematics"],
  //   avatar: "https://api.dicebear.com/7.x/personas/svg?seed=Alan",
  //   photo: "https://api.dicebear.com/7.x/personas/svg?seed=Alan",
  //   sections: [
  //     {
  //       text: "Alan Turing studied mathematics at King's College, Cambridge, and went on to formalize the concept of computation with his 1936 paper introducing the Turing machine — a theoretical device that defined what it means for a function to be computable.",
  //       image: null
  //     },
  //     {
  //       text: "During World War II Turing worked at Bletchley Park where he led the team that cracked the Nazi Enigma cipher. His bombe machine dramatically accelerated decryption and is credited with shortening the war by several years, saving millions of lives.",
  //       image: null
  //     },
  //     {
  //       text: "In 1950 he proposed the Turing Test as a measure of machine intelligence, asking whether a machine could exhibit behavior indistinguishable from a human. This question remains central to artificial intelligence research today.",
  //       image: null
  //     }
  //   ],
  //   memories: [
  //     { author: "Дослідник", date: "14.04.2026", text: "Його внесок у перемогу у Другій світовій війні був колосальним, але довгий час залишався засекреченим. Справжній герой, якого не визнали за життя." }
  //   ]
  // },
  // {
  //   id: 3,
  //   name: "Grace Hopper",
  //   role: "Computer Scientist & Admiral",
  //   bio: "Grace Hopper invented one of the first linkers and popularized machine-independent programming languages, including COBOL.",
  //   location: "New York, USA",
  //   born: "1906",
  //   tags: ["Programming", "Navy", "COBOL"],
  //   avatar: "https://api.dicebear.com/7.x/personas/svg?seed=Grace",
  //   photo: "https://api.dicebear.com/7.x/personas/svg?seed=Grace",
  //   sections: [
  //     {
  //       text: "Grace Hopper earned her PhD in mathematics from Yale in 1934. After joining the Navy during WWII she was assigned to the Bureau of Ordnance Computation Project at Harvard, where she programmed the Mark I computer — one of the first large-scale electromechanical computers.",
  //       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg/440px-Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg"
  //     },
  //     {
  //       text: "Hopper believed programming languages should resemble plain English rather than machine code. This conviction led her to develop the first compiler in 1952 and later FLOW-MATIC, which directly influenced the creation of COBOL — a language still running trillions of dollars in transactions today.",
  //       image: null
  //     },
  //     {
  //       text: "She retired from the Navy as a Rear Admiral at age 79, the oldest active-duty officer in the U.S. armed forces at the time. She famously kept a clock on her wall that ran counterclockwise to remind people to question convention.",
  //       image: null
  //     }
  //   ],
  //   memories: [
  //     { author: "Програміст", date: "14.04.2026", text: "Завдяки Grace Hopper ми маємо мови програмування, зрозумілі людині. Її фраза 'It's easier to ask forgiveness than it is to get permission' актуальна досі." }
  //   ]
  // },
  // {
  //   id: 4,
  //   name: "Linus Torvalds",
  //   role: "Software Engineer",
  //   bio: "Linus Torvalds created the Linux kernel and Git, two projects that underpin most of the modern internet infrastructure.",
  //   location: "Portland, USA",
  //   born: "1969",
  //   tags: ["Linux", "Open Source", "Git"],
  //   avatar: "https://api.dicebear.com/7.x/personas/svg?seed=Linus",
  //   photo: "https://api.dicebear.com/7.x/personas/svg?seed=Linus",
  //   sections: [
  //     {
  //       text: "In 1991 Linus Torvalds, then a 21-year-old student at the University of Helsinki, posted a message to a newsgroup announcing a free operating system kernel he was working on as a hobby. That kernel became Linux, now powering over 96% of the world's top web servers.",
  //       image: null
  //     },
  //     {
  //       text: "Frustrated with existing version control systems during Linux kernel development, Torvalds wrote Git in just ten days in 2005. Git revolutionized collaborative software development and today is used by over 100 million developers worldwide through platforms like GitHub.",
  //       image: null
  //     },
  //     {
  //       text: "Torvalds is known for his direct, unfiltered communication style on mailing lists. Despite controversy around his manner, his technical judgment has guided the Linux kernel through decades of growth from a hobby project to critical global infrastructure.",
  //       image: null
  //     }
  //   ],
  //   memories: [
  //     { author: "Розробник", date: "14.04.2026", text: "Git змінив моє життя як розробника. Важко уявити сучасну розробку без нього. Дякую Linus!" }
  //   ]
  // },
  // {
  //   id: 5,
  //   name: "Margaret Hamilton",
  //   role: "Software Engineer",
  //   bio: "Margaret Hamilton led the Apollo flight software team at NASA and coined the term 'software engineering'.",
  //   location: "Boston, USA",
  //   born: "1936",
  //   tags: ["NASA", "Apollo", "Space"],
  //   avatar: "https://api.dicebear.com/7.x/personas/svg?seed=Margaret",
  //   photo: "https://api.dicebear.com/7.x/personas/svg?seed=Margaret",
  //   sections: [
  //     {
  //       text: "Margaret Hamilton joined MIT's Instrumentation Laboratory in the early 1960s and was eventually made director of software engineering for the Apollo program. She led a team of dozens of programmers responsible for the on-board flight software for the Apollo missions.",
  //       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Margaret_Hamilton_-_restoration.jpg/440px-Margaret_Hamilton_-_restoration.jpg"
  //     },
  //     {
  //       text: "During the Apollo 11 moon landing, her team's error-detection software saved the mission. When the guidance computer was overloaded three minutes before touchdown, the software correctly prioritized critical tasks and allowed the landing to proceed — Neil Armstrong landed with 17 seconds of fuel to spare.",
  //       image: null
  //     },
  //     {
  //       text: "Hamilton coined the term 'software engineering' to give the discipline the same legitimacy as other fields of engineering. She later founded her own company and developed Universal Systems Language, a formal systems design methodology.",
  //       image: null
  //     }
  //   ],
  //   memories: [
  //     { author: "Інженер", date: "14.04.2026", text: "Вона буквально написала код, який допоміг людству досягти Місяця. Справжня легенда програмної інженерії." }
  //   ]
  // },
  // {
  //   id: 6,
  //   name: "Dennis Ritchie",
  //   role: "Computer Scientist",
  //   bio: "Dennis Ritchie created the C programming language and co-developed Unix, forming the foundation of nearly all modern operating systems.",
  //   location: "New Jersey, USA",
  //   born: "1941",
  //   tags: ["C Language", "Unix", "Bell Labs"],
  //   avatar: "https://api.dicebear.com/7.x/personas/svg?seed=Dennis",
  //   photo: "https://api.dicebear.com/7.x/personas/svg?seed=Dennis",
  //   sections: [
  //     {
  //       text: "Dennis Ritchie spent most of his career at Bell Labs, where in the early 1970s he developed the C programming language. C gave programmers a powerful yet portable way to write system software, and its influence can be seen in virtually every modern programming language including C++, Java, JavaScript, and Go.",
  //       image: null
  //     },
  //     {
  //       text: "Together with Ken Thompson, Ritchie co-created the Unix operating system. Unix introduced foundational concepts — the file system hierarchy, piping, and the philosophy of small composable tools — that shaped every major OS that followed, from Linux to macOS.",
  //       image: null
  //     },
  //     {
  //       text: "Steve Jobs called Ritchie's work the basis of everything we do. Despite his enormous impact, Ritchie remained quietly modest throughout his life. He received the Turing Award in 1983 and the National Medal of Technology in 1999 alongside Ken Thompson.",
  //       image: null
  //     }
  //   ],
  //   memories: [
  //     { author: "C розробник", date: "14.04.2026", text: "Без C не було б ні Linux, ні Windows, ні macOS. Його вплив на комп'ютерний світ важко переоцінити." }
  //   ]
  // }
];

module.exports = people;