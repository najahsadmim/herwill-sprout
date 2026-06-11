const app = document.querySelector("#app");
const language = document.querySelector("#language");
const toast = document.querySelector("#toast");

const copy = {
  en: {
    navHome:"Home",navCourses:"Courses",navProjects:"Projects",navAccount:"My Account",start:"Start learning",
    heroEyebrow:"A curious mind can change the world",heroTitle:"Big ideas, made <span>simple.</span>",heroBody:"Learn AI and rising technology through short stories, playful activities, and projects that matter.",explore:"Explore projects",
    trust:["Free to explore","4 languages","Made for every device"],hello:"Hello, curious mind!",ready:"Ready to discover how AI learns?",shortIdeas:"3-minute ideas",meaningful:"Projects that matter",
    how:"How learning works",oneIdea:"One idea at a time",oneIdeaBody:"Each course follows the same friendly rhythm, so you always know what comes next.",
    steps:[["Read a short story","Meet each idea through a clear, visual story."],["Try an activity","Use the idea in a practical 5–10 minute challenge."],["Test your thinking","Pass basic, intermediate, and advanced quizzes."],["Build a project","Apply several ideas to something meaningful."]],
    path:"Made for your level",gradePrompt:"Choose your learning path",gradeBody:"Tell us your grade. We will show you the right amount of challenge, and you can move up or review anytime.",seeCourses:"See my courses",
    featured:"Featured courses",questionStart:"Start with a question",questionBody:"Then follow it through stories, experiments, quizzes, and projects.",viewCourse:"View course",
    coursesTitle:"Your AI learning journey",coursesBody:"Short, visual lessons with activities and three quizzes to help every idea stick.",curriculum:"Curriculum",showFor:"Show materials for",filters:["All AI topics","AI basics","Creating with AI","Responsible AI"],
    bigQuestion:"The big question",bigQuestionText:"How can a machine learn to recognize something it has never seen before?",core:"Core concepts",concepts:["Machines learn from examples","Examples become training data","Testing reveals mistakes","Better data improves results"],
    outcomes:"By the end, you can...",outcomeItems:["Explain how a machine learns from examples","Create and label a simple dataset","Test predictions and identify mistakes","Suggest a responsible way to improve a model"],journey:"Your course journey",
    journeyItems:["Meet the mango challenge","Learn about training data","Activity: choose better examples","Watch and test a model","Activity: improve the model","Pass all three quizzes"],
    progress:"Your progress",level:"Level",learning:"Learning",activities:"Activities",completion:"Completion",shortModules:"6 short modules",tasks:"2 practical tasks",passThree:"Pass 3 quizzes",download:"Download materials",
    lessonName:"How Machines Learn",module:"Module 1 of 6",story:"A 3-minute story",mangoTitle:"Rafi’s mango mystery",mangoOne:"Rafi wants to teach a computer to identify ripe mangoes. He shows it many yellow mangoes, and soon the computer becomes very good at recognizing them.",mangoTwo:"Then Rafi shows it a ripe green mango. The computer says it is not ripe. Why did the computer make this mistake?",keyIdea:"Machines learn patterns from the examples we give them. If the examples are incomplete, their predictions can be incomplete too.",
    coreConcept:"Core concept",trainingTitle:"Examples become training data",trainingText:"A collection of examples used to teach a machine is called training data. Good training data includes enough different examples to represent the real world.",activityTime:"5-minute activity",activityTitle:"Choose better mango examples",activityText:"Which new mangoes should Rafi add so the computer learns more fairly?",startActivity:"Complete activity",activityDone:"Activity completed",watch:"Watch & wonder",watchTitle:"See a model learn",videoCaption:"2:14 · How examples shape AI",captions:"Captions and transcript available",transcript:"Read transcript",
    quizReady:"Ready to test yourself?",quizIntro:"Complete all three quizzes",quizRule:"Each quiz needs a score of 70% or higher. You can review and retry as many times as you need.",basic:"Basic",intermediate:"Intermediate",advanced:"Advanced",basicHint:"Remember the key ideas",intermediateHint:"Use ideas in a scenario",advancedHint:"Analyze and improve",
    projectsTitle:"Small projects. Real thinking.",projectsBody:"Every project helps you observe, test, improve, and create something meaningful.",learnDoing:"Learn by doing",saveProject:"Save project",saved:"Saved",projectFilters:["All projects","No device","Phone-friendly","Computer"],
    accountTitle:"My Account",accountBody:"Keep track of courses, quizzes, projects, activities, and downloaded materials.",learningSpace:"Your learning space",tabs:["Overview","My courses","My projects","Activities","Downloads","Feedback"],helloName:"Hello, Samira!",creator:"AI Creator · Grades 6–8",continue:"Continue learning",inProgress:"Courses in progress",completedActivities:"Activities completed",savedProjects:"Projects saved",open:"Open",empty:"Nothing saved here yet.",downloadAgain:"Download again",
    feedbackTitle:"Share your feedback",listening:"We are listening",feedbackBody:"Tell HerWILL what helped, what was confusing, or what you would love to learn next.",name:"Your name",email:"Your email",feedbackType:"Feedback type",message:"Your message",emailFeedback:"Email feedback to HerWILL",emailNote:"This opens your email app so you can review the message before sending.",
    quizThink:"Think before you choose",check:"Submit quiz",review:"Review lesson",score:"Your score",passed:"Passed",retry:"Try again",next:"Next",nextModule:"Next module",mustPass:"Score 70% or higher to continue.",
    selected:"selected. Your course list is ready.",savedToast:"Saved to My Account.",downloadToast:"Material saved in My Account downloads.",progressSaved:"Progress saved automatically."
  },
  bn: {
    navHome:"হোম",navCourses:"কোর্স",navProjects:"প্রজেক্ট",navAccount:"আমার অ্যাকাউন্ট",start:"শেখা শুরু করো",
    heroEyebrow:"কৌতূহলী মন পৃথিবী বদলাতে পারে",heroTitle:"বড় ধারণা, এখন <span>সহজ।</span>",heroBody:"ছোট গল্প, মজার কার্যক্রম ও অর্থবহ প্রজেক্টের মাধ্যমে AI ও নতুন প্রযুক্তি শেখো।",explore:"প্রজেক্ট দেখো",
    trust:["বিনামূল্যে শেখো","৪টি ভাষা","সব ডিভাইসে ব্যবহারযোগ্য"],hello:"হ্যালো, কৌতূহলী বন্ধু!",ready:"AI কীভাবে শেখে তা জানতে প্রস্তুত?",shortIdeas:"৩ মিনিটের ধারণা",meaningful:"অর্থবহ প্রজেক্ট",
    how:"যেভাবে শিখবে",oneIdea:"একবারে একটি ধারণা",oneIdeaBody:"প্রতিটি কোর্স একই সহজ ধারায় চলে, তাই পরের ধাপ সবসময় পরিষ্কার।",
    steps:[["ছোট গল্প পড়ো","সহজ দৃশ্যমান গল্পের মাধ্যমে ধারণার সঙ্গে পরিচিত হও।"],["কার্যক্রম করো","৫–১০ মিনিটের ব্যবহারিক চ্যালেঞ্জে ধারণাটি প্রয়োগ করো।"],["নিজেকে যাচাই করো","বেসিক, ইন্টারমিডিয়েট ও অ্যাডভান্সড কুইজ পাস করো।"],["প্রজেক্ট তৈরি করো","একাধিক ধারণা দিয়ে অর্থবহ কিছু তৈরি করো।"]],
    path:"তোমার স্তরের জন্য",gradePrompt:"তোমার শেখার পথ বেছে নাও",gradeBody:"তোমার শ্রেণি জানাও। আমরা সঠিক মাত্রার চ্যালেঞ্জ দেখাব, আর তুমি যেকোনো সময় রিভিউ বা এগিয়ে যেতে পারবে।",seeCourses:"আমার কোর্স দেখো",
    featured:"নির্বাচিত কোর্স",questionStart:"একটি প্রশ্ন দিয়ে শুরু করো",questionBody:"তারপর গল্প, পরীক্ষা, কুইজ ও প্রজেক্টের মাধ্যমে উত্তর খোঁজো।",viewCourse:"কোর্স দেখো",
    coursesTitle:"তোমার AI শেখার যাত্রা",coursesBody:"ছোট ভিজ্যুয়াল পাঠ, কার্যক্রম ও তিনটি কুইজের মাধ্যমে প্রতিটি ধারণা ভালোভাবে শেখো।",curriculum:"পাঠ্যক্রম",showFor:"যে শ্রেণির উপকরণ দেখবে",filters:["সব AI বিষয়","AI-এর ভিত্তি","AI দিয়ে তৈরি","দায়িত্বশীল AI"],
    bigQuestion:"মূল প্রশ্ন",bigQuestionText:"একটি মেশিন আগে না দেখা কিছু চিনতে শেখে কীভাবে?",core:"মূল ধারণা",concepts:["মেশিন উদাহরণ থেকে শেখে","উদাহরণ ট্রেনিং ডেটা হয়","পরীক্ষা ভুল দেখায়","ভালো ডেটা ফল উন্নত করে"],
    outcomes:"শেষে তুমি যা পারবে",outcomeItems:["মেশিন কীভাবে উদাহরণ থেকে শেখে তা ব্যাখ্যা করতে","সহজ ডেটাসেট তৈরি ও লেবেল করতে","পূর্বানুমান পরীক্ষা করে ভুল খুঁজতে","মডেল উন্নত করার দায়িত্বশীল উপায় বলতে"],journey:"তোমার কোর্স যাত্রা",
    journeyItems:["আমের চ্যালেঞ্জের সঙ্গে পরিচয়","ট্রেনিং ডেটা শেখা","কার্যক্রম: ভালো উদাহরণ বেছে নেওয়া","মডেল দেখা ও পরীক্ষা","কার্যক্রম: মডেল উন্নত করা","তিনটি কুইজ পাস করা"],
    progress:"তোমার অগ্রগতি",level:"স্তর",learning:"পাঠ",activities:"কার্যক্রম",completion:"সম্পন্ন করতে",shortModules:"৬টি ছোট মডিউল",tasks:"২টি ব্যবহারিক কাজ",passThree:"৩টি কুইজ পাস",download:"উপকরণ ডাউনলোড",
    lessonName:"মেশিন কীভাবে শেখে",module:"৬টির মধ্যে মডিউল ১",story:"৩ মিনিটের গল্প",mangoTitle:"রাফির আমের রহস্য",mangoOne:"রাফি একটি কম্পিউটারকে পাকা আম চিনতে শেখাতে চায়। সে অনেক হলুদ আম দেখায়, আর কম্পিউটার সেগুলো চিনতে দক্ষ হয়।",mangoTwo:"তারপর রাফি একটি পাকা সবুজ আম দেখায়। কম্পিউটার বলে এটি পাকা নয়। কেন এমন ভুল হলো?",keyIdea:"আমরা যে উদাহরণ দিই, মেশিন সেখান থেকে ধরন শেখে। উদাহরণ অসম্পূর্ণ হলে পূর্বানুমানও অসম্পূর্ণ হতে পারে।",
    coreConcept:"মূল ধারণা",trainingTitle:"উদাহরণই হয় ট্রেনিং ডেটা",trainingText:"মেশিনকে শেখানোর জন্য ব্যবহৃত উদাহরণের সংগ্রহকে ট্রেনিং ডেটা বলে। ভালো ট্রেনিং ডেটায় বাস্তব পৃথিবীর বিভিন্ন উদাহরণ থাকে।",activityTime:"৫ মিনিটের কার্যক্রম",activityTitle:"আরও ভালো আমের উদাহরণ বেছে নাও",activityText:"কম্পিউটারকে ন্যায্যভাবে শেখাতে রাফির কোন নতুন আমগুলো যোগ করা উচিত?",startActivity:"কার্যক্রম সম্পন্ন করো",activityDone:"কার্যক্রম সম্পন্ন",watch:"দেখো ও ভাবো",watchTitle:"একটি মডেলকে শিখতে দেখো",videoCaption:"২:১৪ · উদাহরণ কীভাবে AI-কে গড়ে",captions:"ক্যাপশন ও ট্রান্সক্রিপ্ট আছে",transcript:"ট্রান্সক্রিপ্ট পড়ো",
    quizReady:"নিজেকে যাচাই করতে প্রস্তুত?",quizIntro:"তিনটি কুইজ সম্পন্ন করো",quizRule:"প্রতিটি কুইজে ৭০% বা বেশি পেতে হবে। যতবার প্রয়োজন রিভিউ ও পুনরায় চেষ্টা করা যাবে।",basic:"বেসিক",intermediate:"ইন্টারমিডিয়েট",advanced:"অ্যাডভান্সড",basicHint:"মূল ধারণা মনে করো",intermediateHint:"পরিস্থিতিতে ধারণা ব্যবহার করো",advancedHint:"বিশ্লেষণ ও উন্নতি করো",
    projectsTitle:"ছোট প্রজেক্ট। বাস্তব চিন্তা।",projectsBody:"প্রতিটি প্রজেক্ট তোমাকে পর্যবেক্ষণ, পরীক্ষা, উন্নয়ন ও অর্থবহ কিছু তৈরি করতে সাহায্য করবে।",learnDoing:"কাজ করে শেখো",saveProject:"প্রজেক্ট সংরক্ষণ",saved:"সংরক্ষিত",projectFilters:["সব প্রজেক্ট","ডিভাইস ছাড়াই","ফোনে করা যায়","কম্পিউটার"],
    accountTitle:"আমার অ্যাকাউন্ট",accountBody:"কোর্স, কুইজ, প্রজেক্ট, কার্যক্রম ও ডাউনলোড করা উপকরণ দেখো।",learningSpace:"তোমার শেখার জায়গা",tabs:["সারসংক্ষেপ","আমার কোর্স","আমার প্রজেক্ট","কার্যক্রম","ডাউনলোড","মতামত"],helloName:"হ্যালো, সামিরা!",creator:"AI ক্রিয়েটর · শ্রেণি ৬–৮",continue:"শেখা চালিয়ে যাও",inProgress:"চলমান কোর্স",completedActivities:"সম্পন্ন কার্যক্রম",savedProjects:"সংরক্ষিত প্রজেক্ট",open:"খোলো",empty:"এখানে এখনো কিছু সংরক্ষিত নেই।",downloadAgain:"আবার ডাউনলোড",
    feedbackTitle:"তোমার মতামত জানাও",listening:"আমরা শুনছি",feedbackBody:"কী সাহায্য করেছে, কী অস্পষ্ট ছিল বা এরপর কী শিখতে চাও তা HerWILL-কে জানাও।",name:"তোমার নাম",email:"তোমার ইমেইল",feedbackType:"মতামতের ধরন",message:"তোমার বার্তা",emailFeedback:"HerWILL-কে ইমেইল করো",emailNote:"পাঠানোর আগে বার্তা দেখার জন্য এটি তোমার ইমেইল অ্যাপ খুলবে।",
    quizThink:"বেছে নেওয়ার আগে ভাবো",check:"কুইজ জমা দাও",review:"পাঠ রিভিউ করো",score:"তোমার স্কোর",passed:"পাস",retry:"আবার চেষ্টা",next:"পরবর্তী",nextModule:"পরবর্তী মডিউল",mustPass:"এগিয়ে যেতে ৭০% বা বেশি পেতে হবে।",selected:"নির্বাচিত হয়েছে। তোমার কোর্স তালিকা প্রস্তুত।",savedToast:"আমার অ্যাকাউন্টে সংরক্ষিত হয়েছে।",downloadToast:"উপকরণ ডাউনলোড তালিকায় সংরক্ষিত হয়েছে।",progressSaved:"অগ্রগতি স্বয়ংক্রিয়ভাবে সংরক্ষিত হয়েছে।"
  },
  fr: {
    navHome:"Accueil",navCourses:"Cours",navProjects:"Projets",navAccount:"Mon compte",start:"Commencer",
    heroEyebrow:"Un esprit curieux peut changer le monde",heroTitle:"Les grandes idées, rendues <span>simples.</span>",heroBody:"Découvre l’IA et les technologies émergentes avec des histoires, des activités et des projets utiles.",explore:"Voir les projets",
    trust:["Accès gratuit","4 langues","Tous les appareils"],hello:"Bonjour, esprit curieux !",ready:"Prêt à découvrir comment l’IA apprend ?",shortIdeas:"Idées en 3 minutes",meaningful:"Projets utiles",
    how:"Comment apprendre",oneIdea:"Une idée à la fois",oneIdeaBody:"Chaque cours suit le même rythme simple pour que la prochaine étape soit toujours claire.",steps:[["Lire une histoire","Découvre une idée grâce à une histoire visuelle."],["Faire une activité","Applique l’idée dans un défi pratique de 5 à 10 minutes."],["Tester ta compréhension","Réussis les quiz débutant, intermédiaire et avancé."],["Créer un projet","Combine plusieurs idées pour créer quelque chose d’utile."]],
    path:"Adapté à ton niveau",gradePrompt:"Choisis ton parcours",gradeBody:"Indique ta classe. Nous afficherons le bon niveau de défi, avec la liberté de réviser ou d’avancer.",seeCourses:"Voir mes cours",featured:"Cours à découvrir",questionStart:"Commence par une question",questionBody:"Puis explore-la avec des histoires, expériences, quiz et projets.",viewCourse:"Voir le cours",
    coursesTitle:"Ton parcours d’apprentissage de l’IA",coursesBody:"Des leçons visuelles courtes, des activités et trois quiz pour bien comprendre chaque idée.",curriculum:"Programme",showFor:"Afficher les ressources pour",filters:["Tous les sujets IA","Bases de l’IA","Créer avec l’IA","IA responsable"],
    bigQuestion:"La grande question",bigQuestionText:"Comment une machine apprend-elle à reconnaître quelque chose qu’elle n’a jamais vu ?",core:"Concepts clés",concepts:["Les machines apprennent avec des exemples","Les exemples deviennent des données d’entraînement","Les tests révèlent les erreurs","De meilleures données améliorent les résultats"],outcomes:"À la fin, tu pourras...",outcomeItems:["Expliquer comment une machine apprend","Créer et étiqueter un petit jeu de données","Tester des prédictions et repérer les erreurs","Proposer une amélioration responsable"],journey:"Ton parcours",journeyItems:["Le défi de la mangue","Comprendre les données d’entraînement","Activité : choisir de meilleurs exemples","Observer et tester un modèle","Activité : améliorer le modèle","Réussir les trois quiz"],
    progress:"Ta progression",level:"Niveau",learning:"Apprentissage",activities:"Activités",completion:"Pour terminer",shortModules:"6 modules courts",tasks:"2 activités pratiques",passThree:"Réussir 3 quiz",download:"Télécharger les ressources",
    lessonName:"Comment les machines apprennent",module:"Module 1 sur 6",story:"Une histoire de 3 minutes",mangoTitle:"Le mystère des mangues de Rafi",mangoOne:"Rafi veut apprendre à un ordinateur à reconnaître les mangues mûres. Il lui montre beaucoup de mangues jaunes.",mangoTwo:"Puis Rafi lui montre une mangue verte mûre. L’ordinateur dit qu’elle n’est pas mûre. Pourquoi ?",keyIdea:"Les machines apprennent des motifs à partir de nos exemples. Des exemples incomplets produisent des prédictions incomplètes.",coreConcept:"Concept clé",trainingTitle:"Les exemples deviennent des données d’entraînement",trainingText:"Les exemples utilisés pour enseigner une machine sont appelés données d’entraînement. De bonnes données représentent la diversité du monde réel.",activityTime:"Activité de 5 minutes",activityTitle:"Choisir de meilleurs exemples",activityText:"Quelles mangues Rafi devrait-il ajouter pour enseigner plus équitablement ?",startActivity:"Terminer l’activité",activityDone:"Activité terminée",watch:"Regarder et réfléchir",watchTitle:"Observer un modèle apprendre",videoCaption:"2:14 · Comment les exemples façonnent l’IA",captions:"Sous-titres et transcription disponibles",transcript:"Lire la transcription",
    quizReady:"Prêt à te tester ?",quizIntro:"Termine les trois quiz",quizRule:"Il faut obtenir au moins 70 % à chaque quiz. Tu peux réviser et réessayer sans limite.",basic:"Débutant",intermediate:"Intermédiaire",advanced:"Avancé",basicHint:"Retenir les idées clés",intermediateHint:"Appliquer les idées",advancedHint:"Analyser et améliorer",
    projectsTitle:"Petits projets. Vraie réflexion.",projectsBody:"Chaque projet t’aide à observer, tester, améliorer et créer quelque chose d’utile.",learnDoing:"Apprendre en faisant",saveProject:"Enregistrer",saved:"Enregistré",projectFilters:["Tous les projets","Sans appareil","Sur téléphone","Ordinateur"],
    accountTitle:"Mon compte",accountBody:"Suis tes cours, quiz, projets, activités et ressources téléchargées.",learningSpace:"Ton espace d’apprentissage",tabs:["Aperçu","Mes cours","Mes projets","Activités","Téléchargements","Avis"],helloName:"Bonjour, Samira !",creator:"Créatrice IA · Classes 6–8",continue:"Continuer à apprendre",inProgress:"Cours en cours",completedActivities:"Activités terminées",savedProjects:"Projets enregistrés",open:"Ouvrir",empty:"Rien n’est encore enregistré ici.",downloadAgain:"Télécharger à nouveau",
    feedbackTitle:"Partage ton avis",listening:"Nous t’écoutons",feedbackBody:"Dis à HerWILL ce qui t’a aidé, ce qui était confus ou ce que tu aimerais apprendre.",name:"Ton nom",email:"Ton e-mail",feedbackType:"Type d’avis",message:"Ton message",emailFeedback:"Envoyer à HerWILL",emailNote:"Ton application e-mail s’ouvrira pour vérifier le message avant envoi.",
    quizThink:"Réfléchis avant de choisir",check:"Valider le quiz",review:"Revoir la leçon",score:"Ton score",passed:"Réussi",retry:"Réessayer",next:"Suivant",nextModule:"Module suivant",mustPass:"Obtiens au moins 70 % pour continuer.",selected:"sélectionné. Ta liste de cours est prête.",savedToast:"Enregistré dans Mon compte.",downloadToast:"Ressource enregistrée dans Téléchargements.",progressSaved:"Progression enregistrée automatiquement."
  },
  ar: {
    navHome:"الرئيسية",navCourses:"الدورات",navProjects:"المشاريع",navAccount:"حسابي",start:"ابدأ التعلّم",
    heroEyebrow:"العقل الفضولي يستطيع تغيير العالم",heroTitle:"أفكار كبيرة، بطريقة <span>بسيطة.</span>",heroBody:"تعلّم الذكاء الاصطناعي والتقنيات الناشئة من خلال قصص وأنشطة ومشاريع هادفة.",explore:"استكشف المشاريع",
    trust:["تعلّم مجانًا","4 لغات","يعمل على كل الأجهزة"],hello:"مرحبًا أيها العقل الفضولي!",ready:"هل أنت مستعد لاكتشاف كيف يتعلم الذكاء الاصطناعي؟",shortIdeas:"أفكار في 3 دقائق",meaningful:"مشاريع هادفة",
    how:"طريقة التعلّم",oneIdea:"فكرة واحدة كل مرة",oneIdeaBody:"تتبع كل دورة نفس الإيقاع البسيط لتعرف دائمًا الخطوة التالية.",steps:[["اقرأ قصة قصيرة","تعرّف على الفكرة من خلال قصة مرئية واضحة."],["جرّب نشاطًا","طبّق الفكرة في تحدٍ عملي من 5 إلى 10 دقائق."],["اختبر فهمك","اجتز الاختبارات الأساسي والمتوسط والمتقدم."],["أنشئ مشروعًا","ادمج عدة أفكار لصنع شيء مفيد."]],
    path:"مناسب لمستواك",gradePrompt:"اختر مسار تعلّمك",gradeBody:"أخبرنا بصفك الدراسي وسنعرض مستوى التحدي المناسب مع حرية المراجعة أو التقدم.",seeCourses:"عرض دوراتي",featured:"دورات مختارة",questionStart:"ابدأ بسؤال",questionBody:"ثم استكشفه من خلال القصص والتجارب والاختبارات والمشاريع.",viewCourse:"عرض الدورة",
    coursesTitle:"رحلتك لتعلّم الذكاء الاصطناعي",coursesBody:"دروس مرئية قصيرة وأنشطة وثلاثة اختبارات تساعدك على فهم كل فكرة.",curriculum:"المنهج",showFor:"عرض المواد للصف",filters:["كل موضوعات الذكاء الاصطناعي","الأساسيات","الإنشاء بالذكاء الاصطناعي","الذكاء الاصطناعي المسؤول"],
    bigQuestion:"السؤال الكبير",bigQuestionText:"كيف تتعلم الآلة التعرف على شيء لم تره من قبل؟",core:"المفاهيم الأساسية",concepts:["تتعلم الآلات من الأمثلة","تصبح الأمثلة بيانات تدريب","تكشف الاختبارات الأخطاء","تحسن البيانات الأفضل النتائج"],outcomes:"في النهاية ستتمكن من...",outcomeItems:["شرح كيف تتعلم الآلة من الأمثلة","إنشاء مجموعة بيانات بسيطة وتسميتها","اختبار التوقعات وتحديد الأخطاء","اقتراح طريقة مسؤولة لتحسين النموذج"],journey:"رحلة الدورة",journeyItems:["تحدي المانجو","فهم بيانات التدريب","نشاط: اختيار أمثلة أفضل","مشاهدة نموذج واختباره","نشاط: تحسين النموذج","اجتياز الاختبارات الثلاثة"],
    progress:"تقدمك",level:"المستوى",learning:"التعلّم",activities:"الأنشطة",completion:"الإكمال",shortModules:"6 وحدات قصيرة",tasks:"نشاطان عمليان",passThree:"اجتياز 3 اختبارات",download:"تنزيل المواد",
    lessonName:"كيف تتعلم الآلات",module:"الوحدة 1 من 6",story:"قصة في 3 دقائق",mangoTitle:"لغز مانجو رافي",mangoOne:"يريد رافي تعليم الحاسوب التعرف على المانجو الناضجة. يعرض عليه الكثير من المانجو الصفراء فيتعلم التعرف عليها.",mangoTwo:"ثم يعرض رافي مانجو خضراء ناضجة، لكن الحاسوب يقول إنها غير ناضجة. لماذا أخطأ؟",keyIdea:"تتعلم الآلات الأنماط من الأمثلة التي نقدمها. إذا كانت الأمثلة ناقصة فقد تكون التوقعات ناقصة أيضًا.",coreConcept:"المفهوم الأساسي",trainingTitle:"تصبح الأمثلة بيانات تدريب",trainingText:"تسمى مجموعة الأمثلة المستخدمة لتعليم الآلة بيانات التدريب. تمثل البيانات الجيدة تنوع العالم الحقيقي.",activityTime:"نشاط 5 دقائق",activityTitle:"اختر أمثلة مانجو أفضل",activityText:"أي أمثلة جديدة يجب أن يضيفها رافي ليصبح التعلم أكثر عدلًا؟",startActivity:"إكمال النشاط",activityDone:"اكتمل النشاط",watch:"شاهد وفكّر",watchTitle:"شاهد نموذجًا يتعلم",videoCaption:"2:14 · كيف تشكل الأمثلة الذكاء الاصطناعي",captions:"الترجمة والنص متاحان",transcript:"قراءة النص",
    quizReady:"هل أنت مستعد للاختبار؟",quizIntro:"أكمل الاختبارات الثلاثة",quizRule:"يجب الحصول على 70% أو أكثر في كل اختبار. يمكنك المراجعة والمحاولة دون حدود.",basic:"أساسي",intermediate:"متوسط",advanced:"متقدم",basicHint:"تذكر الأفكار الأساسية",intermediateHint:"طبق الأفكار في موقف",advancedHint:"حلل وحسّن",
    projectsTitle:"مشاريع صغيرة. تفكير حقيقي.",projectsBody:"يساعدك كل مشروع على الملاحظة والاختبار والتحسين وصنع شيء مفيد.",learnDoing:"تعلّم بالممارسة",saveProject:"حفظ المشروع",saved:"محفوظ",projectFilters:["كل المشاريع","بدون جهاز","على الهاتف","حاسوب"],
    accountTitle:"حسابي",accountBody:"تابع دوراتك واختباراتك ومشاريعك وأنشطتك والمواد المنزلة.",learningSpace:"مساحة تعلّمك",tabs:["نظرة عامة","دوراتي","مشاريعي","الأنشطة","التنزيلات","الملاحظات"],helloName:"مرحبًا سميرة!",creator:"منشئة ذكاء اصطناعي · الصفوف 6–8",continue:"متابعة التعلّم",inProgress:"دورات قيد التقدم",completedActivities:"أنشطة مكتملة",savedProjects:"مشاريع محفوظة",open:"فتح",empty:"لم يتم حفظ شيء هنا بعد.",downloadAgain:"تنزيل مرة أخرى",
    feedbackTitle:"شاركنا رأيك",listening:"نحن نستمع",feedbackBody:"أخبر HerWILL بما ساعدك أو ما كان غير واضح أو ما تريد تعلمه لاحقًا.",name:"اسمك",email:"بريدك الإلكتروني",feedbackType:"نوع الملاحظات",message:"رسالتك",emailFeedback:"إرسال إلى HerWILL",emailNote:"سيفتح تطبيق البريد لمراجعة الرسالة قبل الإرسال.",
    quizThink:"فكّر قبل الاختيار",check:"إرسال الاختبار",review:"مراجعة الدرس",score:"نتيجتك",passed:"ناجح",retry:"حاول مرة أخرى",next:"التالي",nextModule:"الوحدة التالية",mustPass:"احصل على 70% أو أكثر للمتابعة.",selected:"تم اختياره. قائمة دوراتك جاهزة.",savedToast:"تم الحفظ في حسابي.",downloadToast:"تم حفظ المادة في التنزيلات.",progressSaved:"تم حفظ التقدم تلقائيًا."
  }
};

const grades = ["Grades 1–3","Grades 4–5","Grades 6–8","Grades 9–10","Grades 11–12"];
const content = {
  en: {
    topics:[["✨","What is AI?","Starter","1–3","18 min","4 modules","Meet smart machines and discover where AI appears in everyday life."],["🧩","Patterns & Predictions","Starter","1–3","24 min","5 modules","Find patterns and test how good examples lead to better guesses."],["🗂","How Machines Learn","Core","4–5","35 min","6 modules","Explore data, labels, training, testing, and why machines make mistakes."],["💬","Talking to AI","Core","6–8","32 min","6 modules","Learn a simple prompt formula and check whether AI answers are trustworthy."],["👁","Computer Vision","Builder","6–8","42 min","7 modules","Discover how computers recognize images and build a simple classifier."],["⚖","Fair & Responsible AI","Builder","9–12","45 min","8 modules","Investigate bias, privacy, safety, and ways to make AI work better for everyone."]],
    projects:[["♻","Waste Sorting Lab","Grades 1–3","No device needed","Create sorting rules, test tricky objects, record errors, and improve your system."],["☂","Weather Decision Helper","Grades 1–3","Phone or paper","Build and test a recommendation system that helps someone prepare for weather."],["🍱","Fair Lunch Recommender","Grades 1–3","No device needed","Recommend safe lunches for different needs, find who was excluded, and fix the rules."],["🖼","Train an Image Classifier","Grades 4–8","Computer","Collect examples, train a small model, and discover why predictions fail."],["🔎","AI Answer Detective","Grades 6–10","Phone or computer","Check an AI answer against trusted sources and create an accuracy report."],["🌊","Flood Information Tool","Grades 9–12","Computer","Design a clear tool that shares verified emergency information."]]
  },
  bn: {
    topics:[["✨","AI কী?","শুরু","১–৩","১৮ মিনিট","৪টি মডিউল","স্মার্ট মেশিনের সঙ্গে পরিচিত হও এবং দৈনন্দিন জীবনে AI খুঁজে দেখো।"],["🧩","ধরন ও পূর্বানুমান","শুরু","১–৩","২৪ মিনিট","৫টি মডিউল","ধরন খুঁজে দেখো এবং ভালো উদাহরণ কীভাবে ভালো অনুমান তৈরি করে তা পরীক্ষা করো।"],["🗂","মেশিন কীভাবে শেখে","মূল","৪–৫","৩৫ মিনিট","৬টি মডিউল","ডেটা, লেবেল, ট্রেনিং, পরীক্ষা ও মেশিনের ভুল সম্পর্কে শেখো।"],["💬","AI-এর সঙ্গে কথা বলা","মূল","৬–৮","৩২ মিনিট","৬টি মডিউল","সহজ প্রম্পট সূত্র শেখো এবং AI-এর উত্তর বিশ্বাসযোগ্য কি না যাচাই করো।"],["👁","কম্পিউটার ভিশন","বিল্ডার","৬–৮","৪২ মিনিট","৭টি মডিউল","কম্পিউটার কীভাবে ছবি চেনে তা জানো এবং সহজ ক্লাসিফায়ার তৈরি করো।"],["⚖","ন্যায্য ও দায়িত্বশীল AI","বিল্ডার","৯–১২","৪৫ মিনিট","৮টি মডিউল","পক্ষপাত, গোপনীয়তা, নিরাপত্তা ও সবার জন্য ভালো AI নিয়ে অনুসন্ধান করো।"]],
    projects:[["♻","বর্জ্য বাছাই ল্যাব","শ্রেণি ১–৩","ডিভাইস লাগবে না","বাছাইয়ের নিয়ম তৈরি করো, কঠিন বস্তু পরীক্ষা করো, ভুল লিখে রাখো এবং নিয়ম উন্নত করো।"],["☂","আবহাওয়া সিদ্ধান্ত সহায়ক","শ্রেণি ১–৩","ফোন বা কাগজ","আবহাওয়ার প্রস্তুতির জন্য একটি পরামর্শ ব্যবস্থা তৈরি ও পরীক্ষা করো।"],["🍱","ন্যায্য দুপুরের খাবার পরামর্শক","শ্রেণি ১–৩","ডিভাইস লাগবে না","বিভিন্ন প্রয়োজনের নিরাপদ খাবার বেছে নাও, বাদ পড়া মানুষ খুঁজে নিয়ম ঠিক করো।"],["🖼","ইমেজ ক্লাসিফায়ার শেখাও","শ্রেণি ৪–৮","কম্পিউটার","উদাহরণ সংগ্রহ, মডেল ট্রেনিং ও ভুল পূর্বানুমান অনুসন্ধান করো।"],["🔎","AI উত্তর গোয়েন্দা","শ্রেণি ৬–১০","ফোন বা কম্পিউটার","বিশ্বস্ত উৎস দিয়ে AI উত্তর যাচাই করে নির্ভুলতার রিপোর্ট বানাও।"],["🌊","বন্যা তথ্য টুল","শ্রেণি ৯–১২","কম্পিউটার","যাচাই করা জরুরি তথ্য জানানোর পরিষ্কার টুল ডিজাইন করো।"]]
  },
  fr: {
    topics:[["✨","Qu’est-ce que l’IA ?","Débutant","1–3","18 min","4 modules","Découvre les machines intelligentes et l’IA dans la vie quotidienne."],["🧩","Motifs et prédictions","Débutant","1–3","24 min","5 modules","Trouve des motifs et teste comment de bons exemples améliorent les prédictions."],["🗂","Comment les machines apprennent","Essentiel","4–5","35 min","6 modules","Explore les données, étiquettes, entraînements, tests et erreurs."],["💬","Parler à l’IA","Essentiel","6–8","32 min","6 modules","Apprends une formule de prompt et vérifie la fiabilité des réponses."],["👁","Vision par ordinateur","Créateur","6–8","42 min","7 modules","Découvre comment les ordinateurs reconnaissent les images."],["⚖","IA juste et responsable","Créateur","9–12","45 min","8 modules","Explore les biais, la confidentialité, la sécurité et une meilleure IA pour tous."]],
    projects:[["♻","Laboratoire de tri","Classes 1–3","Sans appareil","Crée des règles de tri, teste-les et améliore ton système."],["☂","Assistant météo","Classes 1–3","Téléphone ou papier","Crée un système de recommandation pour se préparer à la météo."],["🍱","Recommandations de repas équitables","Classes 1–3","Sans appareil","Recommande des repas sûrs et corrige les règles qui excluent quelqu’un."],["🖼","Entraîner un classificateur d’images","Classes 4–8","Ordinateur","Collecte des exemples, entraîne un modèle et étudie ses erreurs."],["🔎","Détective des réponses IA","Classes 6–10","Téléphone ou ordinateur","Vérifie une réponse IA avec des sources fiables."],["🌊","Outil d’information sur les inondations","Classes 9–12","Ordinateur","Conçois un outil clair pour partager des informations vérifiées."]]
  },
  ar: {
    topics:[["✨","ما الذكاء الاصطناعي؟","مبتدئ","1–3","18 دقيقة","4 وحدات","تعرّف على الآلات الذكية واكتشف الذكاء الاصطناعي في حياتك اليومية."],["🧩","الأنماط والتوقعات","مبتدئ","1–3","24 دقيقة","5 وحدات","اكتشف الأنماط واختبر كيف تحسن الأمثلة الجيدة التوقعات."],["🗂","كيف تتعلم الآلات","أساسي","4–5","35 دقيقة","6 وحدات","استكشف البيانات والتسميات والتدريب والاختبار والأخطاء."],["💬","التحدث مع الذكاء الاصطناعي","أساسي","6–8","32 دقيقة","6 وحدات","تعلم صيغة بسيطة للأوامر وتحقق من موثوقية الإجابات."],["👁","الرؤية الحاسوبية","منشئ","6–8","42 دقيقة","7 وحدات","اكتشف كيف تتعرف الحواسيب على الصور."],["⚖","ذكاء اصطناعي عادل ومسؤول","منشئ","9–12","45 دقيقة","8 وحدات","استكشف التحيز والخصوصية والسلامة وطرق تحسين الذكاء الاصطناعي للجميع."]],
    projects:[["♻","مختبر فرز النفايات","الصفوف 1–3","بدون جهاز","أنشئ قواعد للفرز واختبرها وحسّن نظامك."],["☂","مساعد قرارات الطقس","الصفوف 1–3","هاتف أو ورق","أنشئ نظام توصيات يساعد على الاستعداد للطقس."],["🍱","مقترح غداء عادل","الصفوف 1–3","بدون جهاز","اقترح وجبات آمنة وأصلح القواعد التي تستبعد أحدًا."],["🖼","تدريب مصنف صور","الصفوف 4–8","حاسوب","اجمع أمثلة ودرب نموذجًا واكتشف أسباب أخطائه."],["🔎","محقق إجابات الذكاء الاصطناعي","الصفوف 6–10","هاتف أو حاسوب","تحقق من إجابة باستخدام مصادر موثوقة."],["🌊","أداة معلومات الفيضانات","الصفوف 9–12","حاسوب","صمم أداة واضحة لمشاركة معلومات طوارئ موثوقة."]]
  }
};

const quizBanks = {
 en: { basic:[
    ["What do we call examples used to teach a machine?",["Training data","A robot","The internet"],0],
    ["Why did the model fail on the green mango?",["It never saw enough green mangoes","Green mangoes do not exist","The computer was tired"],0],
    ["What can improve a model?",["Better and more diverse examples","Fewer tests","Ignoring mistakes"],0]
  ],
  intermediate:[
    ["Which training set would help most?",["Mangoes with different colors and lighting","Only perfect yellow mangoes","One mango photo"],0],
    ["What should happen after training?",["Test the model with new examples","Delete the data","Assume it is perfect"],0],
    ["A model fails mostly at night. What data is missing?",["Images taken in low light","More yellow labels","Fewer examples"],0]
  ],
  advanced:[
    ["The model still fails on green mangoes. What is the best next step?",["Collect and test more diverse examples","Only show more yellow mangoes","Ignore mistakes"],0],
    ["Why should training and testing examples differ?",["To measure performance on unseen examples","To make files smaller","To avoid labels"],0],
    ["Which approach is most responsible?",["Record limitations and keep testing","Promise perfect accuracy","Hide failed predictions"],0]
  ]},
 bn: {basic:[
    ["মেশিনকে শেখানোর উদাহরণগুলোকে কী বলা হয়?",["ট্রেনিং ডেটা","রোবট","ইন্টারনেট"],0],
    ["সবুজ আম দেখে মডেলটি কেন ব্যর্থ হয়েছিল?",["এটি যথেষ্ট সবুজ আম দেখেনি","সবুজ আম নেই","কম্পিউটার ক্লান্ত ছিল"],0],
    ["কী একটি মডেলকে উন্নত করতে পারে?",["ভালো ও বৈচিত্র্যময় উদাহরণ","কম পরীক্ষা","ভুল উপেক্ষা করা"],0]
  ],intermediate:[
    ["কোন ট্রেনিং সেটটি সবচেয়ে সাহায্য করবে?",["বিভিন্ন রং ও আলোতে আম","শুধু নিখুঁত হলুদ আম","একটি আমের ছবি"],0],
    ["ট্রেনিংয়ের পর কী করা উচিত?",["নতুন উদাহরণ দিয়ে মডেল পরীক্ষা","ডেটা মুছে ফেলা","মডেল নিখুঁত ধরে নেওয়া"],0],
    ["রাতে মডেল বেশি ব্যর্থ হয়। কোন ডেটা কম আছে?",["কম আলোতে তোলা ছবি","আরও হলুদ লেবেল","কম উদাহরণ"],0]
  ],advanced:[
    ["মডেলটি এখনো সবুজ আমে ব্যর্থ হয়। সেরা পরবর্তী পদক্ষেপ কী?",["আরও বৈচিত্র্যময় উদাহরণ সংগ্রহ ও পরীক্ষা","শুধু হলুদ আম দেখানো","ভুল উপেক্ষা করা"],0],
    ["ট্রেনিং ও টেস্ট উদাহরণ আলাদা হওয়া উচিত কেন?",["না দেখা উদাহরণে ফল মাপতে","ফাইল ছোট করতে","লেবেল এড়াতে"],0],
    ["কোন পদ্ধতিটি সবচেয়ে দায়িত্বশীল?",["সীমাবদ্ধতা লিখে পরীক্ষা চালিয়ে যাওয়া","নিখুঁত ফলের প্রতিশ্রুতি","ব্যর্থ পূর্বানুমান লুকানো"],0]
  ]},
 fr: {basic:[
    ["Comment appelle-t-on les exemples utilisés pour enseigner une machine ?",["Données d’entraînement","Un robot","Internet"],0],
    ["Pourquoi le modèle échoue-t-il avec la mangue verte ?",["Il n’a pas vu assez de mangues vertes","Les mangues vertes n’existent pas","L’ordinateur est fatigué"],0],
    ["Qu’est-ce qui peut améliorer un modèle ?",["Des exemples meilleurs et variés","Moins de tests","Ignorer les erreurs"],0]
  ],intermediate:[
    ["Quel jeu d’entraînement aiderait le plus ?",["Des mangues de couleurs et lumières variées","Seulement des mangues jaunes parfaites","Une seule photo"],0],
    ["Que faut-il faire après l’entraînement ?",["Tester avec de nouveaux exemples","Supprimer les données","Supposer que le modèle est parfait"],0],
    ["Le modèle échoue surtout la nuit. Quelles données manquent ?",["Des images en faible lumière","Plus d’étiquettes jaunes","Moins d’exemples"],0]
  ],advanced:[
    ["Le modèle échoue encore sur les mangues vertes. Quelle est la meilleure étape suivante ?",["Collecter et tester des exemples plus variés","Montrer seulement des mangues jaunes","Ignorer les erreurs"],0],
    ["Pourquoi séparer les exemples d’entraînement et de test ?",["Mesurer les résultats sur des exemples nouveaux","Réduire les fichiers","Éviter les étiquettes"],0],
    ["Quelle approche est la plus responsable ?",["Documenter les limites et continuer les tests","Promettre une précision parfaite","Cacher les erreurs"],0]
  ]},
 ar: {basic:[
    ["ماذا نسمي الأمثلة المستخدمة لتعليم الآلة؟",["بيانات التدريب","روبوت","الإنترنت"],0],
    ["لماذا فشل النموذج مع المانجو الخضراء؟",["لم ير ما يكفي من المانجو الخضراء","المانجو الخضراء غير موجودة","الحاسوب متعب"],0],
    ["ما الذي يمكن أن يحسن النموذج؟",["أمثلة أفضل وأكثر تنوعًا","اختبارات أقل","تجاهل الأخطاء"],0]
  ],intermediate:[
    ["أي مجموعة تدريب ستساعد أكثر؟",["مانجو بألوان وإضاءة مختلفة","مانجو صفراء مثالية فقط","صورة مانجو واحدة"],0],
    ["ماذا يجب أن يحدث بعد التدريب؟",["اختبار النموذج بأمثلة جديدة","حذف البيانات","افتراض أنه مثالي"],0],
    ["يفشل النموذج غالبًا في الليل. ما البيانات الناقصة؟",["صور في إضاءة منخفضة","تسميات صفراء أكثر","أمثلة أقل"],0]
  ],advanced:[
    ["ما زال النموذج يفشل مع المانجو الخضراء. ما أفضل خطوة تالية؟",["جمع واختبار أمثلة أكثر تنوعًا","عرض مانجو صفراء فقط","تجاهل الأخطاء"],0],
    ["لماذا يجب أن تختلف أمثلة التدريب والاختبار؟",["لقياس الأداء على أمثلة جديدة","لتصغير الملفات","لتجنب التسميات"],0],
    ["ما النهج الأكثر مسؤولية؟",["توثيق القيود والاستمرار في الاختبار","الوعد بدقة مثالية","إخفاء التوقعات الفاشلة"],0]
  ]}
};

const state = JSON.parse(localStorage.getItem("herwillState") || '{"progress":18,"activity":false,"quizzes":{},"projects":[],"downloads":[],"accountTab":0}');
function saveState() { localStorage.setItem("herwillState", JSON.stringify(state)); }
function c() { return copy[language.value] || copy.en; }
function data() { return content[language.value] || content.en; }
function quizBank() { return quizBanks[language.value] || quizBanks.en; }
function showToast(message) { toast.textContent=message; toast.classList.add("show"); setTimeout(()=>toast.classList.remove("show"),2400); }
function translateChrome() {
  document.querySelectorAll("[data-i18n]").forEach(el=>el.textContent=c()[el.dataset.i18n]);
  const footer = {
    en:["Building pathways for women and youth worldwide to learn AI, data science, and future-ready skills.","Explore","My learning","Stay connected","Questions or feedback? We would love to hear from you."],
    bn:["বিশ্বজুড়ে নারী ও তরুণদের AI, ডেটা সায়েন্স ও ভবিষ্যতের দক্ষতা শেখার পথ তৈরি করছি।","ঘুরে দেখো","আমার শেখা","সংযুক্ত থাকো","প্রশ্ন বা মতামত আছে? আমরা শুনতে চাই।"],
    fr:["Créer des parcours pour permettre aux femmes et aux jeunes d’apprendre l’IA, la science des données et les compétences d’avenir.","Explorer","Mon apprentissage","Restons connectés","Une question ou un avis ? Nous aimerions vous entendre."],
    ar:["نبني مسارات للنساء والشباب حول العالم لتعلّم الذكاء الاصطناعي وعلوم البيانات ومهارات المستقبل.","استكشف","تعلّمي","ابقَ على تواصل","هل لديك سؤال أو ملاحظة؟ يسعدنا سماعك."]
  }[language.value] || [];
  ["footer-description","footer-explore-title","footer-learning","footer-connect-title","footer-connect-body"].forEach((id,i)=>document.querySelector(`#${id}`).textContent=footer[i]);
}
function progressValue() {
  const passed=Object.values(state.quizzes).filter(x=>x>=70).length;
  return Math.min(100,18+(state.activity?22:0)+(passed*20));
}
function topicCards(items=data().topics) {
  return items.map((x,i)=>`<article class="topic-card"><div class="topic-top"><div class="topic-icon">${x[0]}</div><span class="tag">${x[2]}</span></div><h3>${x[1]}</h3><p>${x[6]}</p><div class="topic-meta"><span>${x[3]}</span><span>${x[4]}</span><span>${x[5]}</span></div><a class="topic-link" href="#course/${i}"><span>${c().viewCourse}</span><span>→</span></a></article>`).join("");
}
function home() {
  const x=c();
  return `<section class="hero"><div class="hero-copy"><span class="eyebrow">${x.heroEyebrow}</span><h1>${x.heroTitle}</h1><p>${x.heroBody}</p><div class="hero-actions"><a class="button button-navy" href="#courses">${x.start} →</a><a class="button button-light" href="#projects">${x.explore}</a></div><div class="trust-row">${x.trust.map(v=>`<span>${v}</span>`).join("")}</div></div><div class="hero-art" aria-label="${x.meaningful}"><div class="orbit"></div><div class="art-card art-main"><div class="bot-face"><div class="bot-smile"></div></div><h3>${x.hello}</h3><p>${x.ready}</p></div><div class="art-card art-mini-one"><span class="art-icon">💡</span><strong>${x.shortIdeas}</strong></div><div class="art-card art-mini-two"><span class="art-icon">🛠</span><strong>${x.meaningful}</strong></div></div></section>
  <section class="section"><div class="section-heading center"><span class="eyebrow">${x.how}</span><h2>${x.oneIdea}</h2><p>${x.oneIdeaBody}</p></div><div class="steps-grid">${x.steps.map((v,i)=>`<article class="step-card"><div class="step-number">0${i+1}</div><h3>${v[0]}</h3><p>${v[1]}</p></article>`).join("")}</div></section>
  <section class="section section-soft"><div class="path-banner"><div><span class="eyebrow" style="color:#fff">${x.path}</span><h2>${x.gradePrompt}</h2><p>${x.gradeBody}</p><div class="grade-pills">${grades.map(g=>`<button class="grade-pill ${g===(localStorage.getItem("grade")||grades[2])?"active":""}" onclick="chooseGrade('${g}')">${g}</button>`).join("")}</div></div><a class="button button-pink" href="#courses">${x.seeCourses} →</a></div></section>
  <section class="section"><div class="section-heading"><span class="eyebrow">${x.featured}</span><h2>${x.questionStart}</h2><p>${x.questionBody}</p></div><div class="topic-grid">${topicCards(data().topics.slice(0,3))}</div></section>`;
}
function courses() {
  const x=c();
  return `<section class="page-hero"><div class="page-hero-row"><div><span class="eyebrow">${x.curriculum}</span><h1>${x.coursesTitle}</h1><p>${x.coursesBody}</p></div><div class="grade-panel"><label>${x.showFor}</label><select onchange="chooseGrade(this.value)">${grades.map(g=>`<option ${g===(localStorage.getItem("grade")||grades[2])?"selected":""}>${g}</option>`).join("")}</select></div></div></section><section class="section"><div class="filter-row">${x.filters.map((v,i)=>`<button class="filter-button ${i===0?"active":""}" onclick="filterTopics(this)">${v}</button>`).join("")}</div><div class="topic-grid">${topicCards()}</div></section>`;
}
function course(id=2) {
  const x=c(), item=data().topics[id]||data().topics[2], p=progressValue();
  return `<section class="page-hero compact"><span class="eyebrow">${item[2]} · ${item[3]}</span><h1>${item[1]}</h1><p>${item[6]}</p></section><section class="section section-soft"><div class="course-overview"><article class="overview-main"><h2>${x.bigQuestion}</h2><p>${x.bigQuestionText}</p><h2>${x.core}</h2><div class="concept-list">${x.concepts.map(v=>`<div class="concept-item">${v}</div>`).join("")}</div><h2>${x.outcomes}</h2><ul class="outcome-list">${x.outcomeItems.map(v=>`<li>${v}</li>`).join("")}</ul><h2>${x.journey}</h2>${x.journeyItems.map((v,i)=>`<div class="course-row"><div class="course-row-header"><span>0${i+1} · ${v}</span><span>${i<4?"3 min":i===4?"8 min":"3 quizzes"}</span></div></div>`).join("")}</article><aside class="course-side"><div class="progress-label"><span>${x.progress}</span><span>${p}%</span></div><div class="progress-track"><div class="progress-fill" style="width:${p}%"></div></div><div style="margin-top:20px"><div class="course-stat"><span>${x.level}</span><strong>${item[3]}</strong></div><div class="course-stat"><span>${x.learning}</span><strong>${x.shortModules}</strong></div><div class="course-stat"><span>${x.activities}</span><strong>${x.tasks}</strong></div><div class="course-stat"><span>${x.completion}</span><strong>${x.passThree}</strong></div></div><a class="button button-navy" href="#lesson">${x.start} →</a><button class="button button-light" onclick="downloadMaterial()">${x.download}</button></aside></div></section>`;
}
function lesson() {
  const x=c(), p=progressValue();
  return `<div class="lesson-topbar"><div class="progress-label"><span>${x.lessonName} · ${x.module}</span><span id="lesson-percent">${p}%</span></div><div class="progress-track"><div class="progress-fill" id="lesson-progress" style="width:${p}%"></div></div></div><div class="lesson-layout"><aside class="lesson-nav">${x.journeyItems.map((v,i)=>`<a class="${i===0?"active":""}" href="${i===5?"#quiz/basic":"#lesson"}">0${i+1} · ${v}</a>`).join("")}</aside><article class="lesson-shell">
  <div class="story-card"><span class="eyebrow">${x.story}</span><h2>${x.mangoTitle}</h2><p>${x.mangoOne}</p><div class="story-scene"><div class="mango-grid">${Array(5).fill('<span class="mango"></span>').join("")}<span class="mango green"></span></div></div><p>${x.mangoTwo}</p><div class="key-idea">${x.keyIdea}</div><div class="quiz-actions"><a class="button button-navy" href="#lesson-part/activity">${x.next} →</a></div></div>
  <div class="story-card" id="activity"><span class="eyebrow">${x.coreConcept}</span><h2>${x.trainingTitle}</h2><p>${x.trainingText}</p><div class="activity-box"><span class="eyebrow" style="color:#fff">${x.activityTime}</span><h2 style="color:#fff">${x.activityTitle}</h2><p>${x.activityText}</p><button class="button button-pink" onclick="completeActivity()">${state.activity?x.activityDone:x.startActivity}</button></div><div class="quiz-actions"><a class="button button-navy" href="#lesson-part/video">${x.next} →</a></div></div>
  <div class="story-card"><span class="eyebrow">${x.watch}</span><h2>${x.watchTitle}</h2><div class="video-box"><div><div class="play-button">▶</div><strong>${x.videoCaption}</strong><p style="color:rgba(255,255,255,.72);margin:5px">${x.captions}</p></div></div><button class="button button-light" onclick="showToast('${x.captions}')">${x.transcript}</button><div class="quiz-actions"><a class="button button-navy" href="#quiz/basic">${x.next} →</a></div></div>
  <div class="story-card"><span class="eyebrow">${x.quizReady}</span><h2>${x.quizIntro}</h2><p>${x.quizRule}</p><div class="quiz-choices">${["basic","intermediate","advanced"].map((v,i)=>`<a class="quiz-choice" href="#quiz/${v}"><strong>${i+1} · ${x[v]}</strong><span>${x[v+"Hint"]} ${state.quizzes[v]>=70?"✓":""}</span></a>`).join("")}</div></div></article></div>`;
}
function projectPage() {
  const x=c();
  return `<section class="page-hero"><span class="eyebrow">${x.learnDoing}</span><h1>${x.projectsTitle}</h1><p>${x.projectsBody}</p></section><section class="section"><div class="filter-row">${x.projectFilters.map((v,i)=>`<button class="filter-button ${i===0?"active":""}" onclick="filterTopics(this)">${v}</button>`).join("")}</div><div class="project-grid">${data().projects.map((p,i)=>`<article class="project-card"><div class="project-visual">${p[0]}</div><span class="tag">${p[2]}</span><h3>${p[1]}</h3><p>${p[4]}</p><div class="topic-meta"><span>${p[3]}</span><span>20–40 min</span></div><button class="button button-light" onclick="saveProject(${i})">${state.projects.includes(i)?x.saved:x.saveProject}</button></article>`).join("")}</div></section>`;
}
function accountOverview() {
  const x=c(),p=progressValue();
  return `<div class="profile-row"><div class="avatar">SA</div><div><h2 style="margin:0;color:var(--navy)">${x.helloName}</h2><p style="margin:3px 0;color:var(--muted)">${x.creator}</p></div></div><div class="stats-grid"><div class="stat-card"><strong>3</strong><span>${x.inProgress}</span></div><div class="stat-card"><strong>${state.activity?1:0}</strong><span>${x.completedActivities}</span></div><div class="stat-card"><strong>${state.projects.length}</strong><span>${x.savedProjects}</span></div></div><h2 style="margin-top:32px;color:var(--navy)">${x.continue}</h2><div class="course-row"><div class="course-row-header"><span>${x.lessonName}</span><span>${p}%</span></div><div class="progress-track"><div class="progress-fill" style="width:${p}%"></div></div><div class="quiz-actions"><a class="button button-small button-navy" href="#lesson">${x.open}</a></div></div>`;
}
function listPanel(type) {
  const x=c();
  if(type===1) return `<h2>${x.tabs[1]}</h2><div class="account-list">${data().topics.slice(0,3).map((v,i)=>`<div class="account-list-item"><div><h3>${v[1]}</h3><p>${i===2?progressValue():i===0?100:24}% · ${v[5]}</p></div><a class="button button-small button-light" href="#course/${i}">${x.open}</a></div>`).join("")}</div>`;
  if(type===2) return `<h2>${x.tabs[2]}</h2>${state.projects.length?`<div class="account-list">${state.projects.map(i=>`<div class="account-list-item"><div><h3>${data().projects[i][1]}</h3><p>${data().projects[i][3]}</p></div><a class="button button-small button-light" href="#projects">${x.open}</a></div>`).join("")}</div>`:`<div class="account-empty">${x.empty}</div>`}`;
  if(type===3) return `<h2>${x.tabs[3]}</h2><div class="account-list"><div class="account-list-item"><div><h3>${x.activityTitle}</h3><p>${state.activity?x.activityDone:x.empty}</p></div><a class="button button-small button-light" href="#lesson">${x.open}</a></div></div>`;
  if(type===4) return `<h2>${x.tabs[4]}</h2>${state.downloads.length?`<div class="account-list">${state.downloads.map(v=>`<div class="account-list-item"><div><h3>${x.lessonName}</h3><p>${v}</p></div><button class="button button-small button-light" onclick="downloadMaterial()">${x.downloadAgain}</button></div>`).join("")}</div>`:`<div class="account-empty">${x.empty}</div>`}`;
  return feedback();
}
function feedback() {
  const x=c();
  return `<span class="eyebrow">${x.listening}</span><h2>${x.feedbackTitle}</h2><p>${x.feedbackBody}</p><form class="form-grid" onsubmit="sendFeedback(event)"><div class="field"><label>${x.name}</label><input id="feedback-name" required></div><div class="field"><label>${x.email}</label><input id="feedback-email" type="email" required></div><div class="field full"><label>${x.feedbackType}</label><select id="feedback-type"><option>Course feedback</option><option>Website issue</option><option>New topic idea</option></select></div><div class="field full"><label>${x.message}</label><textarea id="feedback-message" required></textarea></div><div class="field full"><button class="button button-navy">${x.emailFeedback} →</button><small>${x.emailNote}</small></div></form>`;
}
function account() {
  const x=c(), body=state.accountTab===0?accountOverview():listPanel(state.accountTab);
  return `<section class="page-hero compact"><span class="eyebrow">${x.learningSpace}</span><h1>${x.accountTitle}</h1><p>${x.accountBody}</p></section><section class="section section-soft"><div class="account-layout"><aside class="account-sidebar">${x.tabs.map((v,i)=>`<button class="${state.accountTab===i?"active":""}" onclick="accountTab(${i})">${v}</button>`).join("")}</aside><div class="account-card" id="account-content">${body}</div></div></section>`;
}
function quiz(level="basic") {
  const x=c(), qs=quizBank()[level], current=state.quizzes[level];
  return `<section class="section section-soft"><div class="quiz-shell"><div class="quiz-progress"><div class="progress-label"><span>${x[level]} · 3 MCQs</span><span>${current||0}%</span></div><div class="progress-track"><div class="progress-fill" style="width:${current||0}%"></div></div></div><article class="question-card"><span class="eyebrow">${x.quizThink}</span><form onsubmit="submitQuiz(event,'${level}')">${qs.map((q,qi)=>`<div class="quiz-question"><h2>${qi+1}. ${q[0]}</h2><div class="answer-list">${q[1].map((a,ai)=>`<label class="answer"><input required type="radio" name="q${qi}" value="${ai}"><span>${a}</span></label>`).join("")}</div></div>`).join("")}<button class="button button-navy">${x.check} →</button><a class="button button-light" href="#lesson">${x.review}</a></form>${current!==undefined?quizResult(level,current):""}</article></div></section>`;
}
function quizResult(level,score) {
  const x=c(), passed=score>=70, next=level==="basic"?"intermediate":level==="intermediate"?"advanced":"lesson";
  return `<div class="quiz-result ${passed?"pass":""}"><h3>${x.score}: ${score}% ${passed?"· "+x.passed:""}</h3><p>${passed?x.progressSaved:x.mustPass}</p><div class="quiz-actions">${passed?`<a class="button button-navy" href="#${next==="lesson"?"lesson":`quiz/${next}`}">${next==="lesson"?x.nextModule:x.next} →</a>`:`<a class="button button-navy" href="#quiz/${level}">${x.retry}</a>`}<a class="button button-light" href="#lesson">${x.review}</a></div></div>`;
}
function render() {
  const route=location.hash.slice(1)||"home";
  document.documentElement.lang=language.value; document.documentElement.dir=language.value==="ar"?"rtl":"ltr"; translateChrome();
  document.querySelectorAll("[data-nav]").forEach(a=>a.classList.toggle("active",route.startsWith(a.dataset.nav)));
  if(route==="home") app.innerHTML=home(); else if(route==="courses") app.innerHTML=courses(); else if(route.startsWith("course/")) app.innerHTML=course(Number(route.split("/")[1])); else if(route.startsWith("lesson")) app.innerHTML=lesson(); else if(route==="projects") app.innerHTML=projectPage(); else if(route==="account") app.innerHTML=account(); else if(route.startsWith("quiz/")) app.innerHTML=quiz(route.split("/")[1]); else app.innerHTML=home();
  app.focus({preventScroll:true}); window.scrollTo({top:0,behavior:"instant"});
}
window.chooseGrade=g=>{localStorage.setItem("grade",g);showToast(`${g} ${c().selected}`);render();};
window.filterTopics=el=>{el.parentElement.querySelectorAll("button").forEach(b=>b.classList.remove("active"));el.classList.add("active");};
window.completeActivity=()=>{state.activity=true;state.progress=progressValue();saveState();render();showToast(c().progressSaved);};
window.saveProject=i=>{if(!state.projects.includes(i))state.projects.push(i);saveState();render();showToast(c().savedToast);};
window.downloadMaterial=()=>{if(!state.downloads.length)state.downloads.push(new Date().toLocaleDateString());saveState();showToast(c().downloadToast);};
window.accountTab=i=>{state.accountTab=i;saveState();render();};
window.submitQuiz=(e,level)=>{e.preventDefault();const fd=new FormData(e.target);let correct=0;quizBank()[level].forEach((q,i)=>{if(Number(fd.get(`q${i}`))===q[2])correct++;});state.quizzes[level]=Math.round(correct/3*100);state.progress=progressValue();saveState();render();};
window.sendFeedback=e=>{e.preventDefault();const subject=encodeURIComponent(`[HerWILL Sprout] ${document.querySelector("#feedback-type").value}`);const body=encodeURIComponent(`Name: ${document.querySelector("#feedback-name").value}\nEmail: ${document.querySelector("#feedback-email").value}\n\n${document.querySelector("#feedback-message").value}`);location.href=`mailto:leadership@herwill.org?subject=${subject}&body=${body}`;};
language.value=localStorage.getItem("language")||"en";
language.addEventListener("change",()=>{localStorage.setItem("language",language.value);render();});
window.addEventListener("hashchange",render);
render();


document.addEventListener("DOMContentLoaded",()=>{
const toggle=document.getElementById("chatbot-toggle");
const panel=document.getElementById("chatbot-panel");
const msgs=document.getElementById("chatbot-messages");
const send=document.getElementById("chatbot-send");
const input=document.getElementById("chatbot-input");
if(!toggle)return;

const i18nTutor={
en:{greet:"Hi there! I am Lumi, your personal AI Tutor at HerWILL Sprout 🌱 I am here to help you learn, grow, and guide you through everything here and beyond. So don't be shy and ask away!"},
bn:{greet:"হ্যালো! আমি লুমি, HerWILL Sprout-এর তোমার ব্যক্তিগত AI Tutor 🌱 আমি তোমাকে শিখতে, এগিয়ে যেতে এবং এখানে থাকা সবকিছু বুঝতে সাহায্য করব। তাই লজ্জা পেও না, যা জানতে চাও নির্দ্বিধায় জিজ্ঞাসা করো!"},
fr:{greet:"Bonjour ! Je suis Lumi, votre tuteur IA personnel chez HerWILL Sprout 🌱 Je suis là pour vous aider à apprendre, progresser et vous guider à travers tout ce qui se trouve ici et au-delà. Alors n'hésitez pas à poser vos questions !"},
ar:{greet:"مرحباً! أنا لومي، معلمك الشخصي للذكاء الاصطناعي في HerWILL Sprout 🌱 أنا هنا لمساعدتك على التعلّم والتطور وإرشادك خلال كل ما ستجده هنا وأكثر. لذلك لا تتردد في طرح أي سؤال!"}
};

function lang(){return document.getElementById('language')?.value || 'en';}

function add(text,cls){
const d=document.createElement('div');d.className=cls;d.textContent=text;msgs.appendChild(d);msgs.scrollTop=msgs.scrollHeight;
}

toggle.onclick=()=>{
panel.style.display=panel.style.display==='block'?'none':'block';
if(panel.style.display==='block' && !msgs.dataset.greeted){
add(i18nTutor[lang()].greet,'bot-msg');
msgs.dataset.greeted='1';
}
};

async function answer(q){

const l = lang();

const quizPattern =
/a\)|b\)|c\)|d\)|which of the following|quiz|mcq|correct answer/i;

if(quizPattern.test(q)){
    return l==='bn'
      ? 'আমি সরাসরি কুইজের উত্তর দিতে পারি না, তবে ধারণাটি ব্যাখ্যা করতে পারি।'
      : l==='fr'
      ? 'Je ne peux pas donner directement les réponses du quiz.'
      : l==='ar'
      ? 'لا أستطيع إعطاء إجابات الاختبارات مباشرة.'
      : "I can't provide direct quiz answers, but I can explain the concept.";
}

try {

const response = await fetch(
`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AQ.Ab8RN6IqzFkhwEGHaR26Vhf9CP0p_D4YziW2dpp4aMTZoYn8Ug`,
{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
    contents:[
      {
        parts:[
          {
            text:`
You are Lumi, the AI Tutor for HerWILL Sprout.

Rules:
- Explain AI concepts.
- Help with lessons and projects.
- Give examples.
- Respond in ${
l==="bn" ? "Bangla" :
l==="fr" ? "French" :
l==="ar" ? "Arabic" :
"English"
}.
- Never provide direct quiz answers.
- If the topic is unrelated to education or HerWILL, provide a brief generic response.

Student question:
${q}
`
          }
        ]
      }
    ]
  })
}
);

const data = await response.json();

return data?.candidates?.[0]?.content?.parts?.[0]?.text ||
       i18nTutor[l].fallback;

} catch(err){
  console.error(err);
  return i18nTutor[l].fallback;
}

}

send.onclick = async ()=>{

const q = input.value.trim();

if(!q) return;

add(q,'user-msg');

input.value='';

add('Lumi is thinking...','bot-msg');

const reply = await answer(q);

msgs.lastChild.textContent = reply;

}});
