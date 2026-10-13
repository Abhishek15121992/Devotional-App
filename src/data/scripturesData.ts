// Scriptural Teachings & Real-Time Wisdom (Bhagavad Gita, Upanishads & Vedic Suktas)

export interface Shloka {
  id: string;
  source: 'Bhagavad Gita' | 'Upanishads' | 'Vedas' | 'Ramayana' | 'Puranas';
  chapterOrKanda: string;
  verseNumber: string;
  title: string;
  sanskrit: string;
  transliteration: string;
  wordMeaning: { word: string; meaning: string }[];
  translation: string;
  commentary: string;
  practicalApplication: string; // "How to live this today"
  audioChantText: string;
  theme: 'Karma' | 'Bhakti' | 'Jnana' | 'Courage' | 'Peace' | 'Meditation';
}

export const SCRIPTURAL_TEACHINGS: Shloka[] = [
  {
    id: 'gita-2-47',
    source: 'Bhagavad Gita',
    chapterOrKanda: 'Chapter 2 (Sankhya Yoga)',
    verseNumber: 'Verse 47',
    title: 'The Law of Selfless Action (Karmanyevadhikaraste)',
    sanskrit: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥',
    transliteration: 'Karmany evādhikāras te mā phaleṣu kadācana |\nMā karma-phala-hetur bhūr mā te saṅgo\'stv akarmaṇi ||',
    wordMeaning: [
      { word: 'Karmaṇi', meaning: 'In your prescribed duty/action' },
      { word: 'eva', meaning: 'only' },
      { word: 'adhikāraḥ', meaning: 'right / jurisdiction' },
      { word: 'te', meaning: 'your' },
      { word: 'mā', meaning: 'never' },
      { word: 'phaleṣu', meaning: 'in the fruits / outcomes' },
      { word: 'kadācana', meaning: 'at any time' },
      { word: 'mā karma-phala-hetuḥ bhūḥ', meaning: 'do not let the expectation of reward be your motive' },
      { word: 'mā te saṅgaḥ astu akarmaṇi', meaning: 'nor let there be attachment to inaction / laziness' }
    ],
    translation: 'You have a right to perform your prescribed duty, but never to the fruits of your actions. Let not the expectation of results be your motivation, nor let your mind attach itself to inaction.',
    commentary: 'This is the crown jewel of Karma Yoga taught by Bhagavan Krishna. Anxiety occurs not because we work, but because our mind constantly obsesses over future outcomes that are conditioned by hundreds of external factors. When action is dedicated wholeheartedly with excellence, work itself becomes meditation.',
    practicalApplication: 'When starting any task today (at office, family, study), give 100% focused devotion to the effort, and release the paralyzing fear of failure or craving for praise.',
    audioChantText: 'Karmany evadhikaraste ma phaleshu kadachana, ma karmaphalaheturbhur ma te sango stvakarmani',
    theme: 'Karma'
  },
  {
    id: 'gita-9-26',
    source: 'Bhagavad Gita',
    chapterOrKanda: 'Chapter 9 (Raja Vidya Raja Guhya Yoga)',
    verseNumber: 'Verse 26',
    title: 'The Divine Simplicity of Bhakti (Patram Pushpam)',
    sanskrit: 'पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति ।\nतदहं भक्त्युपहृतमश्नामि प्रयतात्मनः ॥',
    transliteration: 'Patraṁ puṣpaṁ phalaṁ toyaṁ yo me bhaktyā prayacchati |\nTad ahaṁ bhakty-upahṛtam aśnāmi prayatātmanaḥ ||',
    wordMeaning: [
      { word: 'Patram', meaning: 'A simple green leaf' },
      { word: 'Puṣpam', meaning: 'A humble flower' },
      { word: 'Phalam', meaning: 'A single fruit' },
      { word: 'Toyam', meaning: 'A spoonful of pure water' },
      { word: 'Bhaktyā', meaning: 'With genuine love and devotion' },
      { word: 'Prayacchati', meaning: 'Offers to Me' },
      { word: 'Aśnāmi', meaning: 'I lovingly accept and partake' },
      { word: 'Prayatātmanaḥ', meaning: 'From the pure-hearted seeker' }
    ],
    translation: 'Whoever offers to Me with genuine devotion even a humble leaf, a flower, a fruit, or simple water—that offering, made with a pure and loving heart, I accept with immense joy.',
    commentary: 'God asks for neither vast wealth nor elaborate pomp. The outer article offered is secondary; what touches the Divine consciousness is the tender fragrance of selfless love (Bhavana). An arrogant king offering heaps of gold receives nothing, while Shabari offering berries or Vidura offering spinach is embraced.',
    practicalApplication: 'Never feel your home puja or daily havan is inadequate because you lack fancy materials. A heart overflowing with gratitude is the highest offering.',
    audioChantText: 'Patram pushpam phalam toyam yo me bhaktya prayacchati, tadaham bhaktyupahritam ashnami prayatatmanah',
    theme: 'Bhakti'
  },
  {
    id: 'gita-18-66',
    source: 'Bhagavad Gita',
    chapterOrKanda: 'Chapter 18 (Moksha Sanyasa Yoga)',
    verseNumber: 'Verse 66',
    title: 'The Ultimate Promise of Surrender (Charama Shloka)',
    sanskrit: 'सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज ।\nअहं त्वा सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः ॥',
    transliteration: 'Sarva-dharmān parityajya mām ekaṁ śaraṇaṁ vraja |\nAhaṁ tvā sarva-pāpebhyo mokṣayiṣyāmi mā śucaḥ ||',
    wordMeaning: [
      { word: 'Sarva-dharmān', meaning: 'All duties, rituals, and mental identities' },
      { word: 'Parityajya', meaning: 'Relinquishing dependence upon' },
      { word: 'Mām ekam', meaning: 'Unto Me alone (the Supreme Self)' },
      { word: 'Śaraṇam', meaning: 'Surrender / refuge' },
      { word: 'Vraja', meaning: 'Take / come' },
      { word: 'Mokṣayiṣyāmi', meaning: 'I shall liberate you' },
      { word: 'Mā śucaḥ', meaning: 'Do not grieve / fear not' },
      { word: 'Sarva-pāpebhyaḥ', meaning: 'From all karmic reactions and anxieties' }
    ],
    translation: 'Abandon all notions of relative righteousness and surrender exclusively unto Me alone. I will liberate you from all sins and sorrows; do not grieve!',
    commentary: 'Known as the Charama Shloka (final crest) of the Bhagavad Gita. After delivering all paths (Dhyana, Jnana, Karma), Krishna assures Arjuna that total surrender of ego (Sharanagati / Prapatti) guarantees divine shelter. When the drop merges into the ocean, all storms cease.',
    practicalApplication: 'When life overwhelms you with impossible choices or heavy baggage, pause, take a deep breath, and mentally say: "O Lord, I place this entire burden into Your loving hands. Guide my steps." Fear vanishes.',
    audioChantText: 'Sarvadharman parityajya mamekam sharanam vraja, aham tva sarvapapebhyo mokshayishyami ma shuchah',
    theme: 'Courage'
  },
  {
    id: 'isha-upanishad-1',
    source: 'Upanishads',
    chapterOrKanda: 'Isha Upanishad',
    verseNumber: 'Mantra 1',
    title: 'The Cosmic Inhabitation (Ishavasyam Idam Sarvam)',
    sanskrit: 'ॐ ईशा वास्यमिदं सर्वं यत्किञ्च जगत्यां जगत् ।\nतेन त्यक्तेन भुञ्जीथा मा गृधः कस्यस्विद्धनम् ॥',
    transliteration: 'Om īśā vāsyam idaṁ sarvaṁ yat kiñca jagatyāṁ jagat |\nTena tyaktena bhuñjīthā mā gṛdhaḥ kasya svid dhanam ||',
    wordMeaning: [
      { word: 'Īśā', meaning: 'By the Lord / Supreme Consciousness' },
      { word: 'Vāsyam', meaning: 'Enveloped / inhabited / clothed' },
      { word: 'Idam sarvam', meaning: 'All of this universe' },
      { word: 'Yat kiñca', meaning: 'Whatever moves or changes' },
      { word: 'Tena tyaktena', meaning: 'Through detachment / renunciation of possessiveness' },
      { word: 'Bhuñjīthā', meaning: 'Enjoy and sustain yourself' },
      { word: 'Mā gṛdhaḥ', meaning: 'Do not covet / do not be greedy' },
      { word: 'Kasya svid dhanam', meaning: 'For whose is this wealth indeed?' }
    ],
    translation: 'All this, whatever moves in this changing world, is pervaded and enveloped by the Divine. Therefore, find your joy through renunciation and detachment. Covet not the wealth of anyone!',
    commentary: 'Mahatma Gandhi remarked that if all Indian scriptures were destroyed and only this single verse of the Isha Upanishad survived, Hinduism would still remain immortal. It is the cornerstone of Vedantic ecology: see God in every particle of creation, and enjoy the world as a grateful guest rather than an exploiting master.',
    practicalApplication: 'Practice conscious stewardship. When using resources (water, food, energy), remember they belong to the Divine Mother and are shared with all creatures.',
    audioChantText: 'Om isha vasyam idam sarvam yat kincha jagatyam jagat, tena tyaktena bhunjitha ma gridhah kasyasvid dhanam',
    theme: 'Jnana'
  },
  {
    id: 'katha-upanishad-1-3-14',
    source: 'Upanishads',
    chapterOrKanda: 'Katha Upanishad',
    verseNumber: '1.3.14',
    title: 'The Call to Awakening (Uttishthata Jagrata)',
    sanskrit: 'उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत ।\nक्षुरस्य धारा निशिता दुरत्यया दुर्गं पथस्तत्कवयो वदन्ति ॥',
    transliteration: 'Uttiṣṭhata jāgrata prāpya varān nibodhata |\nKṣurasya dhārā niśitā duratyayā durgaṁ pathas tat kavayo vadanti ||',
    wordMeaning: [
      { word: 'Uttiṣṭhata', meaning: 'Arise!' },
      { word: 'Jāgrata', meaning: 'Awake from spiritual slumber!' },
      { word: 'Prāpya varān', meaning: 'Approaching the wise and noble teachers' },
      { word: 'Nibodhata', meaning: 'Realize the supreme Truth' },
      { word: 'Kṣurasya dhārā', meaning: 'The sharp edge of a razor' },
      { word: 'Niśitā', meaning: 'Razor-sharp' },
      { word: 'Duratyayā', meaning: 'Difficult to traverse' },
      { word: 'Durgam pathaḥ', meaning: 'An arduous path' }
    ],
    translation: 'Arise! Awake! Seek out the illumined teachers and realize that Supreme Truth! The seers declare that path to be arduous and razor-sharp, difficult to traverse.',
    commentary: 'The battle cry of spiritual evolution made famous across the globe by Swami Vivekananda. Spiritual life is not for the faint-hearted or passive; it requires keen intellectual discernment (Viveka) and relentless moral courage.',
    practicalApplication: 'Do not sleepwalk through your precious human life trapped in mindless scrolling or transient desires. Take one positive step today toward self-mastery and truth.',
    audioChantText: 'Uttishthata jagrata prapya varan nibodhata, kshurasya dhara nishita duratyaya durgam pathas tat kavayo vadanti',
    theme: 'Courage'
  },
  {
    id: 'gayatri-rigveda',
    source: 'Vedas',
    chapterOrKanda: 'Rigveda',
    verseNumber: 'Mandala 3, Sukta 62, Verse 10',
    title: 'Vedic Gayatri Mantra (Solar Enlightenment)',
    sanskrit: 'ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
    transliteration: 'Om bhūr bhuvaḥ svaḥ tat savitur vareṇyaṁ bhargo devasya dhīmahi |\nDhiyo yo naḥ pracodayāt ||',
    wordMeaning: [
      { word: 'Om', meaning: 'The primordial sound of the Cosmos' },
      { word: 'Bhūr Bhuvaḥ Svaḥ', meaning: 'Physical plane, Mental atmosphere, and Spiritual realm' },
      { word: 'Tat', meaning: 'That Supreme' },
      { word: 'Savitur', meaning: 'Of the radiant Solar Creator' },
      { word: 'Vareṇyam', meaning: 'Most adorable and worthy of contemplation' },
      { word: 'Bhargaḥ', meaning: 'Effulgence that destroys darkness' },
      { word: 'Devasya', meaning: 'Of the Divine Being' },
      { word: 'Dhīmahi', meaning: 'We meditate upon' },
      { word: 'Dhiyaḥ', meaning: 'Intellect and spiritual vision' },
      { word: 'Yo naḥ pracodayāt', meaning: 'May He stimulate and illuminate' }
    ],
    translation: 'We meditate on the adorable, radiant glory of the Divine Sun (Savita), who creates and animates the cosmos. May He inspire and illuminate our intellect and faculties toward truth.',
    commentary: 'Considered the Mother of all Vedas (Veda-Mata), whispered into the ear during Upanayana and recited daily across millennia by millions at sunrise and sunset. It asks for collective enlightenment ("Nah" - "our", not just "mine").',
    practicalApplication: 'Chant 11 or 24 times with eyes gently closed facing the morning sunlight. Feel golden light washing through your brain cells, bringing pristine mental clarity.',
    audioChantText: 'Om bhur bhuvah svah tat savitur varenyam bhargo devasya dhimahi dhiyo yo nah prachodayat',
    theme: 'Meditation'
  }
];
