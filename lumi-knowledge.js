const lumiKnowledge = [

{
keywords:["hi","hello","hey","good morning","good afternoon","good evening"],
responses:{
en:"Hello! 🌱 I am Lumi. What would you like to learn today?",
bn:"হ্যালো! 🌱 আমি লুমি। আজ তুমি কী শিখতে চাও?",
fr:"Bonjour ! 🌱 Je suis Lumi. Que souhaites-tu apprendre aujourd’hui ?",
ar:"مرحباً! 🌱 أنا لومي. ماذا تريد أن تتعلم اليوم؟"
}
},

{
keywords:["how are you","how are u"],
responses:{
en:"I'm doing great! 🌱 Ready to help you learn.",
bn:"আমি ভালো আছি! 🌱 তোমাকে শেখাতে প্রস্তুত।",
fr:"Je vais très bien ! 🌱 Prêt à apprendre avec toi.",
ar:"أنا بخير! 🌱 ومستعد لمساعدتك على التعلّم."
}
},

{
keywords:["thank you","thanks","thank"],
responses:{
en:"You're welcome! 😊",
bn:"স্বাগতম! 😊",
fr:"Avec plaisir ! 😊",
ar:"على الرحب والسعة! 😊"
}
},

{
keywords:["who are you","your name","introduce yourself"],
responses:{
en:"I am Lumi, your AI Tutor at HerWILL Sprout. I help students learn AI concepts, projects and technology.",
bn:"আমি লুমি, HerWILL Sprout-এর AI Tutor।",
fr:"Je suis Lumi, votre tuteur IA chez HerWILL Sprout.",
ar:"أنا لومي، معلمك للذكاء الاصطناعي في HerWILL Sprout."
}
},

{
keywords:["what is ai","define ai","artificial intelligence"],
responses:{
en:"Artificial Intelligence (AI) enables computers to learn, reason and make decisions from data.",
bn:"কৃত্রিম বুদ্ধিমত্তা (AI) কম্পিউটারকে তথ্য থেকে শিখতে ও সিদ্ধান্ত নিতে সাহায্য করে।",
fr:"L’intelligence artificielle permet aux ordinateurs d’apprendre et de prendre des décisions.",
ar:"يساعد الذكاء الاصطناعي الحواسيب على التعلم واتخاذ القرارات."
}
},

{
keywords:["machine learning","ml"],
responses:{
en:"Machine Learning is a branch of AI where computers learn patterns from examples instead of following fixed instructions.",
bn:"মেশিন লার্নিং হলো AI-এর একটি শাখা যেখানে কম্পিউটার উদাহরণ থেকে শেখে।",
fr:"L’apprentissage automatique est une branche de l’IA basée sur l’apprentissage à partir d’exemples.",
ar:"التعلم الآلي هو فرع من الذكاء الاصطناعي يتعلم من الأمثلة."
}
},

{
keywords:["deep learning"],
responses:{
en:"Deep Learning uses layers of artificial neural networks to solve complex problems such as image and speech recognition.",
bn:"ডিপ লার্নিং জটিল সমস্যা সমাধানে বহুস্তর বিশিষ্ট নিউরাল নেটওয়ার্ক ব্যবহার করে।",
fr:"Le Deep Learning utilise des réseaux neuronaux pour résoudre des problèmes complexes.",
ar:"يستخدم التعلم العميق الشبكات العصبية لحل المشكلات المعقدة."
}
},

{
keywords:["computer vision"],
responses:{
en:"Computer Vision helps computers understand and analyze images and videos.",
bn:"কম্পিউটার ভিশন কম্পিউটারকে ছবি ও ভিডিও বুঝতে সাহায্য করে।",
fr:"La vision par ordinateur aide les ordinateurs à comprendre les images et vidéos.",
ar:"تساعد الرؤية الحاسوبية الحواسيب على فهم الصور ومقاطع الفيديو."
}
},

{
keywords:["nlp","natural language processing"],
responses:{
en:"Natural Language Processing allows computers to understand and generate human language.",
bn:"ন্যাচারাল ল্যাঙ্গুয়েজ প্রসেসিং কম্পিউটারকে মানুষের ভাষা বুঝতে সাহায্য করে।",
fr:"Le traitement du langage naturel permet aux ordinateurs de comprendre le langage humain.",
ar:"تمكن معالجة اللغة الطبيعية الحواسيب من فهم اللغة البشرية."
}
},

{
keywords:["bias","fairness","responsible ai","ai ethics"],
responses:{
en:"Responsible AI focuses on fairness, privacy, transparency and safety.",
bn:"দায়িত্বশীল AI ন্যায্যতা, গোপনীয়তা ও নিরাপত্তার ওপর গুরুত্ব দেয়।",
fr:"L’IA responsable met l’accent sur l’équité, la confidentialité et la sécurité.",
ar:"يركز الذكاء الاصطناعي المسؤول على العدالة والخصوصية والسلامة."
}
},

{
keywords:["project","recommend project","suggest project"],
responses:{
en:"Try AI Answer Detective, Image Classification or Responsible AI projects depending on your grade level.",
bn:"তোমার শ্রেণি অনুযায়ী AI Answer Detective বা Image Classification প্রজেক্ট চেষ্টা করতে পারো।",
fr:"Essayez AI Answer Detective ou Image Classification selon votre niveau.",
ar:"يمكنك تجربة مشاريع AI Answer Detective أو Image Classification حسب مستواك."
}
}

];

const lumiFallback = {
en:"I am designed to help with HerWILL Sprout lessons, projects and AI learning. Please ask me something related to AI, technology or your course.",
bn:"আমি HerWILL Sprout-এর পাঠ, প্রজেক্ট ও AI শেখার বিষয়ে সাহায্য করার জন্য তৈরি।",
fr:"Je suis conçu pour aider avec les cours, projets et concepts d’IA de HerWILL Sprout.",
ar:"تم تصميمي للمساعدة في دروس ومشاريع HerWILL Sprout ومفاهيم الذكاء الاصطناعي."
};
