// Comprehensive Havan (Homa / Yajna) Guide
// Dual Modes:
// 1. Laghu Havan (Quick & Simple - 10 to 15 mins for busy mornings / beginners)
// 2. Vistrit Sampurna Vedic Havan (Full classical Shastra textbook procedure - 45 to 60 mins)

export interface HavanStep {
  stepNumber: number;
  title: string;
  sanskritTitle: string;
  durationEst: string;
  samagriNeeded: string[];
  shortDesc: string;
  sanskritMantra: string;
  transliteration: string;
  englishMeaning: string;
  actionInstruction: string;
  mudraOrGesture?: string;
  ahutiTargetCount?: number; // e.g., 1, 3, 5, 11, 21, 108
  audioSnippetText?: string;
  tips: string;
}

export interface HavanMode {
  id: 'quick' | 'detailed';
  name: string;
  sanskritName: string;
  timeRange: string;
  idealFor: string;
  description: string;
  samagriList: { item: string; required: boolean; alternate?: string }[];
  steps: HavanStep[];
}

export const HAVAN_MODES: Record<'quick' | 'detailed', HavanMode> = {
  quick: {
    id: 'quick',
    name: 'Laghu Havan (Quick & Simple)',
    sanskritName: 'लघु हवन विधानम्',
    timeRange: '10 – 15 Minutes',
    idealFor: 'Daily morning practice, busy householders, students, or beginners with limited time.',
    description: 'An authentic yet streamlined Vedic Havan focusing on the most essential core mantras: purification, lighting the Agni, offering core Mahavyahriti oblations, Gayatri, Maha Mrityunjaya, and a joyful Purnahuti.',
    samagriList: [
      { item: 'Copper or Brass Havan Kund (or small unglazed clay diya/bowl)', required: true, alternate: 'Clean brass deepam or flat terracotta saucer' },
      { item: 'Pure Cow Desi Ghee (Clarified Butter)', required: true },
      { item: 'A few dry mango wood sticks (Samidha) or dried cow dung cakes', required: true, alternate: 'Camphor cubes or dry coconut pieces' },
      { item: 'A small cup of Havan Samagri or dry fruits (raisins, almonds, clove)', required: true, alternate: 'Black sesame seeds (Til) mixed with rice and ghee' },
      { item: 'Camphor (Karpura) & Matchbox', required: true },
      { item: 'A small spoon (Sruva or teaspoon) & clean water bowl', required: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Shuddhi & Achamanam (Purification)',
        sanskritTitle: 'शुद्धि एवं आचमनम्',
        durationEst: '1 min',
        samagriNeeded: ['Water bowl', 'Spoon'],
        shortDesc: 'Sip water three times to purify body, speech, and mind before approaching the sacred fire.',
        sanskritMantra: 'ॐ केशवाय नमः । ॐ नारायणाय नमः । ॐ माधवाय नमः ॥\nॐ हृषीकेशाय नमः (हस्तं प्रक्षाल्य) ।',
        transliteration: 'Om Keśavāya namaḥ | Om Nārāyaṇāya namaḥ | Om Mādhavāya namaḥ ||\nOm Hṛṣīkeśāya namaḥ (hastaṁ prakṣālya) |',
        englishMeaning: 'Salutations to the Supreme Lord in three aspects (Creation, Sustenance, Dissolution). I wash my hands and center my consciousness.',
        actionInstruction: 'Take a spoonful of water in your right palm, sip it once with each of the first three mantras. With the fourth mantra, wash both hands with a little water.',
        mudraOrGesture: 'Gokarna Mudra (cup right palm like a cow\'s ear).',
        ahutiTargetCount: 0,
        tips: 'Take only enough water to moisten the throat; do not gulp.'
      },
      {
        stepNumber: 2,
        title: 'Laghu Sankalpa (Intention Declaration)',
        sanskritTitle: 'लघु सङ्कल्पः',
        durationEst: '1 min',
        samagriNeeded: ['Unbroken rice (Akshat) or flower petal', 'Spoon of water'],
        shortDesc: 'State your sincere inner resolve and offer it to the Divine.',
        sanskritMantra: 'ॐ तत्सत् । अद्य मम सकल-दुरित-क्षयार्थं, आत्म-शुद्ध्यर्थं, विश्व-कल्याणार्थं च, यथा-शक्ति हवनाख्यं कर्म करिष्ये ॥',
        transliteration: 'Om Tat Sat | Adya mama sakala-durita-kṣayārthaṁ, ātma-śuddhy-arthaṁ, viśva-kalyāṇārthaṁ ca, yathā-śakti havanākhyaṁ karma kariṣye ||',
        englishMeaning: 'Om That Supreme Reality! Today, for the removal of all impediments, the purification of my soul, and for the welfare of all beings, according to my humble capacity, I perform this sacred Havan.',
        actionInstruction: 'Hold a drop of water, a flower petal or unbroken rice in your right hand. Close your eyes, feel the sincere dedication in your heart, and gently let it drop in front of the kund.',
        ahutiTargetCount: 0,
        tips: 'Keep your intention selfless and loving; sincerity is the true fire of Yajna.'
      },
      {
        stepNumber: 3,
        title: 'Agni Prajvalana (Kindling the Sacred Fire)',
        sanskritTitle: 'अग्नि प्रज्वलनम्',
        durationEst: '2 mins',
        samagriNeeded: ['Camphor', 'Dry wood sticks', 'Matches'],
        shortDesc: 'Invoking Bhagavan Agni as the pure messenger who carries your prayers to the cosmos.',
        sanskritMantra: 'ॐ भूर्भुवः स्वः द्यौरिव भूम्ना पृथिवीव वरिम्णा ।\nतस्यास्ते पृथिवि देवयजनि पृष्ठेऽग्निमन्नादमन्नाद्यायादधे ॥\nॐ अग्नये नमः । सुप्रतिष्ठितो भव ॥',
        transliteration: 'Om bhūr bhuvaḥ svaḥ dyaur iva bhūmnā pṛthivīva varimṇā |\nTasyās te pṛthivi devayajani pṛṣṭhe\'gnim annādam annādyāyā dadhe ||\nOm Agnaye namaḥ | Supratiṣṭhito bhava ||',
        englishMeaning: 'Om! Like heaven in expanse and earth in majesty, on this altar of Mother Earth, I kindle the sacred Fire. Salutations to Lord Agni, may You be beautifully and auspiciously established here.',
        actionInstruction: 'Place a small piece of camphor atop dry wood sticks in the center of the Kund. Light the camphor with a match. Fan gently until the wood catches fire steadily with smoke-free flames.',
        ahutiTargetCount: 0,
        tips: 'Never blow directly with your mouth upon the sacred fire. Fan softly with your hand or a clean paper/leaf.'
      },
      {
        stepNumber: 4,
        title: 'Mahavyahriti Ahutis (Offerings to the Cosmic Planes)',
        sanskritTitle: 'महाव्याहृति आहुतयः',
        durationEst: '2 mins',
        samagriNeeded: ['Pure Cow Ghee', 'Spoon'],
        shortDesc: 'Offer 4 foundational oblations of pure ghee to the Physical, Subtle, and Celestial cosmic realms.',
        sanskritMantra: '१. ॐ भूः स्वाहा । इदमग्नये इदं न मम ॥\n२. ॐ भुवः स्वाहा । इदं वायवे इदं न मम ॥\n३. ॐ स्वः स्वाहा । इदं सूर्याय इदं न मम ॥\n४. ॐ भूर्भुवः स्वः स्वाहा । इदं प्रजापतये इदं न मम ॥',
        transliteration: '1. Om Bhūḥ svāhā | Idam Agnaye idaṁ na mama ||\n2. Om Bhuvaḥ svāhā | Idaṁ Vāyave idaṁ na mama ||\n3. Om Svaḥ svāhā | Idaṁ Sūryāya idaṁ na mama ||\n4. Om Bhūr Bhuvaḥ Svaḥ svāhā | Idaṁ Prajāpataye idaṁ na mama ||',
        englishMeaning: '1. To the Earth & Agni, Swaha! This is for Agni, not for my ego.\n2. To the Atmosphere & Vayu, Swaha! This is for Vayu, not for my ego.\n3. To the Heavens & Surya, Swaha! This is for Surya, not for my ego.\n4. To the All-Pervading Creator Prajapati, Swaha! This belongs to God, not me.',
        actionInstruction: 'Take a small spoonful of ghee with your right hand. At each word "Swaha", offer it gently into the flame without letting the spoon touch the fire. With "Idam na mama", consciously let go of self-centered pride.',
        mudraOrGesture: 'Mrigi Mudra (hold spoon with thumb, middle, and ring fingers).',
        ahutiTargetCount: 4,
        tips: '"Idam na mama" (This is not mine) is the philosophical core of Sanatana Dharma.'
      },
      {
        stepNumber: 5,
        title: 'Gayatri Mantra Ahutis (Illumination of Intellect)',
        sanskritTitle: 'गायत्री मन्त्र आहुतयः',
        durationEst: '3 mins',
        samagriNeeded: ['Havan Samagri or Ghee'],
        shortDesc: 'Offer 3, 5, or 11 oblations reciting the mother of all Vedic mantras for mental clarity.',
        sanskritMantra: 'ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् स्वाहा ॥\nइदं सवित्रे इदं न मम ॥',
        transliteration: 'Om bhūr bhuvaḥ svaḥ tat savitur vareṇyaṁ bhargo devasya dhīmahi |\nDhiyo yo naḥ pracodayāt svāhā ||\nIdaṁ Savitre idaṁ na mama ||',
        englishMeaning: 'We meditate upon that supreme divine effulgence of the Solar Creator. May that illumination direct our intellect towards truth. Swaha! This belongs to Savita, not me.',
        actionInstruction: 'With each chant, take a pinch of samagri or a drop of ghee using thumb and middle two fingers, and offer into the bright center of the flame precisely upon saying "Swaha".',
        mudraOrGesture: 'Offer with right palm facing upward, moving toward the fire respectfully.',
        ahutiTargetCount: 5,
        tips: 'You can do 3, 5, 11, or 21 ahutis depending on time available.'
      },
      {
        stepNumber: 6,
        title: 'Maha Mrityunjaya Ahutis (Healing & Longevity)',
        sanskritTitle: 'महामृत्युञ्जय मन्त्र आहुतयः',
        durationEst: '3 mins',
        samagriNeeded: ['Havan Samagri or Ghee'],
        shortDesc: 'Offer oblations invoking Lord Shiva for health, inner strength, and liberation from fear.',
        sanskritMantra: 'ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् ।\nउर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात् स्वाहा ॥\nइदं त्र्यम्बकाय इदं न मम ॥',
        transliteration: 'Om tryambakaṁ yajāmahe sugandhiṁ puṣṭi-vardhanam |\nUrvārukam iva bandhanān mṛtyor mukṣīya māmṛtāt svāhā ||\nIdaṁ Tryambakāya idaṁ na mama ||',
        englishMeaning: 'We worship the fragrant, Three-Eyed Lord Shiva who nourishes all beings. Even as a ripe cucumber effortlessly separates from its binding vine, may He liberate us from death and attachment, leading to immortality. Swaha!',
        actionInstruction: 'Offer samagri/ghee with steady focus at the word "Swaha". Feel all physical and psychological toxins dissolving into the holy flames.',
        ahutiTargetCount: 5,
        tips: 'Visualize vibrant health and fearlessness enveloping your loved ones and all sentient beings.'
      },
      {
        stepNumber: 7,
        title: 'Laghu Purnahuti (The Grand Final Offering)',
        sanskritTitle: 'लघु पूर्णाहुति',
        durationEst: '2 mins',
        samagriNeeded: ['Dry coconut piece or whole clove/dry fruit', 'Remaining Ghee'],
        shortDesc: 'The crowning offering signifying the completion of the sacrifice and total self-surrender.',
        sanskritMantra: 'ॐ पूर्णमदः पूर्णमिदं पूर्णात्पूर्णमुदच्यते ।\nपूर्णस्य पूर्णमादाय पूर्णमेवावशिष्यते ॥\nॐ मूर्धानं दिवो अरतिं पृथिव्या वैश्वानरमृत आजातमग्निम् ।\nकविं सम्राजमतिथिं जनानामासन्ना पात्रं जनयन्त देवाः स्वाहा ॥\nॐ पूर्णमस्तु ॥',
        transliteration: 'Om pūrṇam adaḥ pūrṇam idaṁ pūrṇāt pūrṇam udacyate |\nPūrṇasya pūrṇam ādāya pūrṇam evāvaśiṣyate ||\nOm mūrdhānaṁ divo aratiṁ pṛthivyā vaiśvānaram ṛta ājātam agnim |\nKaviṁ samrājam atithiṁ janānām āsannā pātraṁ janayanta devāḥ svāhā ||\nOm pūrṇam astu ||',
        englishMeaning: 'That Supreme is Complete Whole; This Manifest Cosmos is Complete Whole. From Wholeness emerges Wholeness. Taking Wholeness from Wholeness, Wholeness alone remains. Swaha! May our offering be complete and auspicious.',
        actionInstruction: 'Stand up if possible (or sit erect), take the piece of dry coconut smeared with ghee or a clove/dry fruit in both hands, raise it to your forehead, and offer it into the glowing fire at the final "Swaha". Pour the remaining ghee in a continuous stream (Vasordhara).',
        mudraOrGesture: 'Anjali Mudra (palms joined together in reverence).',
        ahutiTargetCount: 1,
        tips: 'Bow deeply to the flame and witness the radiant flame consuming the offering.'
      },
      {
        stepNumber: 8,
        title: 'Bhasma Dharana & Shanti Path (Sacred Ash & Peace)',
        sanskritTitle: 'भस्म धारण एवं शान्ति पाठः',
        durationEst: '2 mins',
        samagriNeeded: ['Cool ashes from the kund border (touch lightly)'],
        shortDesc: 'Apply the sanctified ash to forehead and chant universal peace.',
        sanskritMantra: 'ॐ त्र्यायुषं जमदग्नेः कश्यपस्य त्र्यायुषम् ।\nयद्देवेषु त्र्यायुषं तन्नो अस्तु त्र्यायुषम् ॥\nॐ द्यौः शान्तिरन्तरिक्षं शान्तिः पृथिवी शान्तिरापः शान्तिरोषधयः शान्तिः ।\nवनस्पतयः शान्तिर्विश्वेदेवाः शान्तिर्ब्रह्म शान्तिः सर्वं शान्तिः शान्तिरेव शान्तिः सा मा शान्तिरेधि ॥\nॐ शान्तिः शान्तिः शान्तिः ॥',
        transliteration: 'Om tryāyuṣaṁ jamadagneḥ kaśyapasya tryāyuṣam |\nYad deveṣu tryāyuṣaṁ tan no astu tryāyuṣam ||\nOm dyauḥ śāntir antarikṣaṁ śāntiḥ pṛthivī śāntir āpaḥ śāntir oṣadhayaḥ śāntiḥ |\nVanaspatayaḥ śāntir viśvedevāḥ śāntir brahma śāntiḥ sarvaṁ śāntiḥ śāntir eva śāntiḥ sā mā śāntir edhi ||\nOm śāntiḥ śāntiḥ śāntiḥ ||',
        englishMeaning: 'May we attain longevity, vitality, and purity. May peace reign in the heavens, in the sky, upon the earth, in the waters, herbs, trees, and cosmic beings. May Brahman be peace, may peace be everywhere. Om Peace, Peace, Peace!',
        actionInstruction: 'Touch the warm aura of the fire with your hands, then apply a tiny smudge of cooled sacred ash (Bhasma) between your eyebrows (Ajna chakra) and throat. Recite the Shanti mantra with eyes closed.',
        ahutiTargetCount: 0,
        tips: 'Remain seated in silence for 1-2 minutes absorbing the energized, sattvic atmosphere.'
      }
    ]
  },
  detailed: {
    id: 'detailed',
    name: 'Vistrit Sampurna Vedic Havan (Textbook Classical)',
    sanskritName: 'विस्तृत सम्पूर्ण वैदिक हवन विधानम् (शास्त्रोक्त)',
    timeRange: '45 – 60 Minutes',
    idealFor: 'Special occasions, festivals, new moon/full moon, Griha Pravesh, birthdays, or deep traditional practice.',
    description: 'The complete classical Shastra / Grihya Sutra textbook procedure with all 16 traditional stages: Achamanam, Pavithra dharana, Pranayama, Bhuta Shuddhi, Maha Sankalpa with full Panchang, Agni Sthapana & Janana, Dikpalaka & Brahma Varana, Ajya Samskara, Navagraha Ahutis, Pradhana Suktam, Svishtakrit, and Maha Purnahuti with Vasordhara.',
    samagriList: [
      { item: 'Copper Havan Kund (stepped 3-tier square)', required: true },
      { item: 'Clean sand (for kund bed) & Bricks/tile if on indoor floor', required: true },
      { item: 'Dry mango, palash, or peepal wood samidha', required: true },
      { item: 'Pure Desi Cow Ghee (minimum 250g - 500g)', required: true },
      { item: 'Classical Havan Samagri (Guggul, Jatamansi, Kapoor Kachri, Chandan powder, etc.)', required: true },
      { item: 'Black Sesame Seeds (Kala Til) & Barley (Jau)', required: true },
      { item: 'Unbroken raw rice (Akshat) & Roli/Kumkum/Turmeric', required: true },
      { item: 'Dry Copra (whole dry coconut) & Kalawa/Moli (sacred red thread)', required: true },
      { item: 'Kusha Grass blades (Darbha) & Kusha Ring (Pavitri)', required: true },
      { item: 'Copper Panchapatra with Achamani spoon', required: true },
      { item: 'Wooden Sruk & Sruva spoons (or brass puja spoons)', required: true },
      { item: 'Fresh flowers, betel leaves (Paan), betel nuts (Supari), and cloves', required: true },
      { item: 'Navadhanya (Nine grains for Navagraha) or Navagraha samidha', required: false, alternate: 'Havan samagri mixed with cloves' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Pavitra Dharana & Achamanam',
        sanskritTitle: 'पवित्र धारण एवं आचमनम्',
        durationEst: '2 mins',
        samagriNeeded: ['Kusha grass ring', 'Panchapatra with water', 'Spoon'],
        shortDesc: 'Wear the sacred Kusha grass ring on the right ring finger and perform purification through Achamana.',
        sanskritMantra: 'ॐ अपवित्रः पवित्रो वा सर्वावस्थां गतोऽपि वा ।\nयः स्मरेत्पुण्डरीकाक्षं स बाह्याभ्यन्तरः शुचिः ॥\nॐ केशवाय नमः (स्वाहा) । ॐ नारायणाय नमः (स्वाहा) । ॐ माधवाय नमः (स्वाहा) ॥',
        transliteration: 'Om apavitraḥ pavitro vā sarvāvasthāṁ gato\'pi vā |\nYaḥ smaret puṇḍarīkākṣaṁ sa bāhyābhyantaraḥ śuciḥ ||\nOm Keśavāya namaḥ (svāhā) | Om Nārāyaṇāya namaḥ (svāhā) | Om Mādhavāya namaḥ (svāhā) ||',
        englishMeaning: 'Whether pure or impure, in whatever state one may be, he who remembers the Lotus-Eyed Lord Pundarikaksha becomes purified both outwardly and inwardly. Salutations to Kesava, Narayana, and Madhava.',
        actionInstruction: 'Slip the Pavitri (Kusha ring) onto your right hand ring finger (Anamika). Take water in the palm and sip three times.',
        mudraOrGesture: 'Gokarna Mudra for sipping water.',
        ahutiTargetCount: 0,
        tips: 'Kusha grass neutralizes electromagnetic disturbances and grounds physical energy.'
      },
      {
        stepNumber: 2,
        title: 'Pranayama & Shikha Bandhana',
        sanskritTitle: 'प्राणायाम एवं शिखा बन्धनम्',
        durationEst: '3 mins',
        samagriNeeded: ['None'],
        shortDesc: 'Perform three rounds of Vedic Pranayama to balance Ida and Pingala nadis and awaken Sushumna.',
        sanskritMantra: 'ॐ प्रणवस्य परब्रह्म ऋषिः परमात्मा देवता दैवी गायत्री छन्दः प्राणायामे विनियोगः ॥\nॐ भूः ॐ भुवः ॐ स्वः ॐ महः ॐ जनः ॐ तपः ॐ सत्यम् ।\nॐ तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् ।\nॐ आपो ज्योती रसोऽमृतं ब्रह्म भूर्भुवः स्वरोम् ॥',
        transliteration: 'Om praṇavasya parabrahma ṛṣiḥ paramātmā devatā daivī gāyatrī chandaḥ prāṇāyāme viniyogaḥ ||\nOm bhūḥ om bhuvaḥ om svaḥ om mahaḥ om janaḥ om tapaḥ om satyam |\nOm tat savitur vareṇyaṁ bhargo devasya dhīmahi dhiyo yo naḥ pracodayāt |\nOm āpo jyotī raso\'mṛtaṁ brahma bhūr bhuvaḥ svar om ||',
        englishMeaning: 'Inhaling through left nostril, retaining with consciousness of the seven cosmic spheres (Bhur to Satyam), and exhaling through right nostril while contemplating the Light of Immortality.',
        actionInstruction: 'Close right nostril with thumb, inhale for 4 counts while silently reciting the mantra; hold breath for 4 counts, exhale through right nostril for 8 counts. Repeat 3 cycles.',
        mudraOrGesture: 'Vishnu Mudra / Nasagra Mudra.',
        ahutiTargetCount: 0,
        tips: 'Keep spine erect and relaxed. Breath should be silent and continuous.'
      },
      {
        stepNumber: 3,
        title: 'Asana Shuddhi & Bhuta Shuddhi',
        sanskritTitle: 'आसन शुद्धि एवं भूत शुद्धि',
        durationEst: '2 mins',
        samagriNeeded: ['Water spoon', 'Asana (wool or kusha mat)'],
        shortDesc: 'Consecrate your seating mat and purify the five cosmic elements (Earth, Water, Fire, Air, Space) within your body.',
        sanskritMantra: 'ॐ पृथ्वि त्वया धृता लोका देवि त्वं विष्णुना धृता ।\nत्वं च धारय मां देवि पवित्रं कुरु चासनम् ॥',
        transliteration: 'Om pṛthvi tvayā dhṛtā lokā devi tvaṁ viṣṇunā dhṛtā |\nTvaṁ ca dhāraya māṁ devi pavitraṁ kuru cāsanam ||',
        englishMeaning: 'O Mother Earth! You support all realms, and You are sustained by Bhagavan Vishnu. Please hold me firmly, O Goddess, and sanctify this seat of worship.',
        actionInstruction: 'Sprinkle a drop of water beneath the corner of your seating mat with the achamani spoon, touch the ground, and bow.',
        ahutiTargetCount: 0,
        tips: 'Sitting facing East (Prachi) or North (Udichi) is prescribed for auspicious Yajna rites.'
      },
      {
        stepNumber: 4,
        title: 'Maha Sankalpa (Detailed Scriptural Vow)',
        sanskritTitle: 'महा सङ्कल्पः (शास्त्रोक्त विधानम्)',
        durationEst: '4 mins',
        samagriNeeded: ['Copper spoon', 'Water', 'Akshat (rice)', 'Flowers', 'Betel nut (supari)', 'Coin'],
        shortDesc: 'Declare the ancient coordinates in cosmic time and space according to Vedic cosmology.',
        sanskritMantra: 'ॐ विष्णुर्विष्णुर्विष्णुः श्रीमद्भगवतो महापुरुषस्य विष्णोराज्ञया प्रवर्तमानस्य अद्य ब्रह्मणो द्वितीयपरार्धे श्रीश्वेतवाराहकल्पे वैवस्वतमन्वन्तरे अष्टाविंशतितमे युगे कलियुगे कलिप्रथमचरणे जम्बूद्वीपे भारतवर्षे भरतखण्डे आर्यावर्तैकदेशे... मम कायिक-वाचिक-मानसिक-सकल-पाप-क्षयार्थं, धर्म-अर्थ-काम-मोक्ष-फल-सिद्धये, समस्त-दुरितोपशान्तये, श्रीपरमेश्वर-प्रीत्यर्थं हवनाख्यं कर्म अहं करिष्ये ॥',
        transliteration: 'Om Viṣṇur Viṣṇur Viṣṇuḥ Śrīmad Bhagavato Mahāpuruṣasya Viṣṇor ājñayā pravartamānasya adya Brahmaṇo dvitīya-parārdhe Śrī-Śveta-Vārāha-kalpe Vaivasvata-manvantare aṣṭāviṁśatitame yuge Kaliyuge kali-prathama-caraṇe Jambūdvīpe Bhāratavarṣe... mama kāyika-vācika-mānasika-sakala-pāpa-kṣayārthaṁ, dharma-artha-kāma-mokṣa-phala-siddhaye, havanākhyaṁ karma ahaṁ kariṣye ||',
        englishMeaning: 'Under the cosmic order of Lord Vishnu, in the second half of Brahma\'s lifespan, in the Shveta Varaha Kalpa, Vaivasvata Manvantara, 28th Kaliyuga cycle, in Bharatavarsha... for the dissolution of faults of body, speech, and mind, and for the attainment of Dharma, Artha, Kama, and Moksha, I perform this sacred Havan.',
        actionInstruction: 'Hold water, unbroken rice, flowers, a betel nut, and a coin in your right palm. Recite the full Sankalpa, inserting your Gotra and name, then gently release the offerings onto a copper plate.',
        ahutiTargetCount: 0,
        tips: 'This grounds your individual identity into cosmic timelessness.'
      },
      {
        stepNumber: 5,
        title: 'Ganapati Dhyana & Kalasha Puja',
        sanskritTitle: 'गणपति ध्यान एवं कलश पूजा',
        durationEst: '3 mins',
        samagriNeeded: ['Kalasha filled with water', 'Mango leaves', 'Coconut', 'Kumkum', 'Flowers'],
        shortDesc: 'Invoke Lord Ganesha to remove obstacles and invoke the 7 holy rivers and deities into the Kalasha water.',
        sanskritMantra: 'ॐ वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥\nकलशस्य मुखे विष्णुः कण्ठे रुद्रः समाश्रितः ।\nमूले त्वस्य स्थितो ब्रह्मा मध्ये मातृगणाः स्मृताः ॥',
        transliteration: 'Om vakratuṇḍa mahākāya sūryakoṭi samaprabha |\nNirvighnaṁ kuru me deva sarva-kāryeṣu sarvadā ||\nKalaśasya mukhe Viṣṇuḥ kaṇṭhe Rudraḥ samāśritaḥ |\nMūle tv asya sthito Brahmā madhye mātṛ-gaṇāḥ smṛtāḥ ||',
        englishMeaning: 'O Lord Ganesha of curved trunk and immense cosmic form, radiant like millions of suns, remove all obstacles from my endeavors always. At the rim of the Kalasha rests Vishnu, at the neck Rudra, at the base Brahma, and in the center the divine Mother goddesses.',
        actionInstruction: 'Apply tilak with kumkum to the Kalasha, place flowers, and sprinkle a few drops of water on all ritual articles with a kusha blade.',
        ahutiTargetCount: 0,
        tips: 'The Kalasha represents the entire cosmos contained in a golden womb (Hiranyagarbha).'
      },
      {
        stepNumber: 6,
        title: 'Agni Sthapana & Agni Janana (Kindling & Consecration)',
        sanskritTitle: 'अग्नि स्थापन एवं अग्निजननम्',
        durationEst: '4 mins',
        samagriNeeded: ['Copper kund', 'Kusha grass', 'Camphor', 'Samidha sticks', 'Matches'],
        shortDesc: 'Mark the sacred lines with Kusha grass, remove the unpurified Kravyada fire, and establish Havya-vahana Agni.',
        sanskritMantra: 'ॐ क्रव्यादमग्निं प्रहिणोमि दूरं यमराज्यं गच्छतु रिप्रवाहः ।\nइहैवायमितरो जातवेदा देवेभ्यो हव्यं वहतु प्रजानन् ॥\nॐ अग्नये नमः । सुप्रतिष्ठितो वरदो भव ॥',
        transliteration: 'Om kravyādam agniṁ prahiṇomi dūraṁ yamarājyaṁ gacchatu ripravāhaḥ |\nIhaivāyam itaro jātavedā devebhyo havyaṁ vahatu prajānan ||\nOm Agnaye namaḥ | Supratiṣṭhito varado bhava ||',
        englishMeaning: 'I send away the impure, flesh-consuming fire far to the realm of Yama. Here let the divine, all-knowing Agni (Jataveda) be established to carry our sacred oblations to the Devas.',
        actionInstruction: 'Light a small camphor on a spoon; discard a tiny flame sparks to the South-West (Nairritya) to cast away inauspicious fire. Then place the pure glowing camphor into the Kund atop dry wood sticks. Chant the welcome prayer.',
        ahutiTargetCount: 0,
        tips: 'Watch the flame transform into a gentle, golden, smokeless upward tongue.'
      },
      {
        stepNumber: 7,
        title: 'Brahma Varana & Paristarana (Sanctuary Bounds)',
        sanskritTitle: 'ब्रह्मा वरण एवं परिस्तरणम्',
        durationEst: '3 mins',
        samagriNeeded: ['Kusha grass blades (16 or 24 stalks)'],
        shortDesc: 'Invite Lord Brahma to oversee the Yajna and lay Kusha grass along the four borders of the Kund.',
        sanskritMantra: 'ॐ अस्मिन कर्मणि ब्रह्मा त्वं भव ।\nॐ भूर्भुवः स्वः परिस्तृणामि । प्राच्यां दक्षिणायां प्रतीच्यामुदीच्यां च ॥',
        transliteration: 'Om asmin karmaṇi Brahmā tvaṁ bhava |\nOm bhūr bhuvaḥ svaḥ paristṛṇāmi | Prācyāṁ dakṣiṇāyāṁ pratīcyām udīcyāṁ ca ||',
        englishMeaning: 'Be You our guiding Brahma in this sacred rite. I lay the protective Darbha grass to the East, South, West, and North to protect the ritual perimeter from negative vibrations.',
        actionInstruction: 'Place blades of Kusha grass pointing East on the South border, blades pointing North on the East border, and around the Kund clockwise.',
        ahutiTargetCount: 0,
        tips: 'This forms a consecrated spiritual mandala enclosing the fire.'
      },
      {
        stepNumber: 8,
        title: 'Ajya Samskara (Ghee Purification Rite)',
        sanskritTitle: 'आज्य संस्कार (घृत शुद्धि)',
        durationEst: '3 mins',
        samagriNeeded: ['Vessel of melted ghee', 'Two blades of Kusha (Pavitra)', 'Camphor'],
        shortDesc: 'Purify the cow\'s ghee with fire and kusha blades, filtering out impurities.',
        sanskritMantra: 'ॐ सवितुस्त्वा प्रसव उत्पुनाम्यच्छिद्रेण पवित्रेण सूर्यस्य रश्मिभिः स्वाहा ॥',
        transliteration: 'Om savitus tvā prasava utpunāmy acchidreṇa pavitreṇa sūryasya raśmibhiḥ svāhā ||',
        englishMeaning: 'By the impulse of the Divine Savita, I purify you with this unbroken filter of holy grass and with the golden rays of the Sun.',
        actionInstruction: 'Wave a flaming camphor blade around the ghee pot (Paryagnikarana), move the two linked blades of Kusha through the ghee from West to East, and sprinkle a drop of water.',
        ahutiTargetCount: 0,
        tips: 'Pure ghee represents the intellect (Buddhi) refined and clarified of mental dirt.'
      },
      {
        stepNumber: 9,
        title: 'Aghara & Ajyabhaga Ahutis (The Foundation Oblations)',
        sanskritTitle: 'आघाराज्यभाग आहुतयः',
        durationEst: '3 mins',
        samagriNeeded: ['Ghee', 'Sruva spoon'],
        shortDesc: 'Draw two unbroken streams of ghee from North-West to South-East and South-West to North-East for Prajapati and Indra.',
        sanskritMantra: '१. ॐ प्रजापतये स्वाहा । इदं प्रजापतये इदं न मम ॥ (वायव्यतः आग्नेयान्तम्)\n२. ॐ इन्द्राय स्वाहा । इदमिन्द्राय इदं न मम ॥ (नैर्ऋत्यतः ईशानान्तम्)\n३. ॐ अग्नये स्वाहा । इदमग्नये इदं न मम ॥\n४. ॐ सोमाय स्वाहा । इदं सोमाय इदं न मम ॥',
        transliteration: '1. Om Prajāpataye svāhā | Idaṁ Prajāpataye idaṁ na mama ||\n2. Om Indrāya svāhā | Idam Indrāya idaṁ na mama ||\n3. Om Agnaye svāhā | Idam Agnaye idaṁ na mama ||\n4. Om Somāya svāhā | Idaṁ Somāya idaṁ na mama ||',
        englishMeaning: '1. To the Lord of All Creation Prajapati, Swaha!\n2. To the cosmic governor Indra, Swaha!\n3. To Agni the carrier, Swaha!\n4. To Soma the nectar of bliss, Swaha!',
        actionInstruction: 'Pour a continuous line of ghee across the embers with the Sruva spoon for each cardinal direction.',
        ahutiTargetCount: 4,
        tips: 'This stabilizes the energy fields inside the Havan Kund.'
      },
      {
        stepNumber: 10,
        title: 'Navagraha Ahutis (Planetary Harmonic Offerings)',
        sanskritTitle: 'नवग्रह आहुतयः',
        durationEst: '6 mins',
        samagriNeeded: ['Havan Samagri mixed with black sesame (Til)', 'Ghee'],
        shortDesc: 'Offer oblations to the 9 cosmic planetary deities to align your horoscope, home, and psyche.',
        sanskritMantra: '१. ॐ सूर्याय स्वाहा ।\n२. ॐ चन्द्राय स्वाहा ।\n३. ॐ भौमाय स्वाहा ।\n४. ॐ बुधाय स्वाहा ।\n५. ॐ बृहस्पतये स्वाहा ।\n६. ॐ शुक्राय स्वाहा ।\n७. ॐ शनैश्चराय स्वाहा ।\n८. ॐ राहवे स्वाहा ।\n९. ॐ केतवे स्वाहा ॥',
        transliteration: '1. Om Sūryāya svāhā |\n2. Om Candrāya svāhā |\n3. Om Bhaumāya svāhā |\n4. Om Budhāya svāhā |\n5. Om Bṛhaspataye svāhā |\n6. Om Śukrāya svāhā |\n7. Om Śanaiścarāya svāhā |\n8. Om Rāhave svāhā |\n9. Om Ketave svāhā ||',
        englishMeaning: 'Offerings to: 1. Sun (Soul), 2. Moon (Mind), 3. Mars (Courage), 4. Mercury (Intellect), 5. Jupiter (Wisdom), 6. Venus (Harmony), 7. Saturn (Discipline & Karma), 8. Rahu (Transformation), 9. Ketu (Moksha & Spiritual Awakening).',
        actionInstruction: 'Offer samagri and ghee for each planet. Follow each with "Idam [Graha Name] na mama".',
        ahutiTargetCount: 9,
        tips: 'Dissolves malefic planetary influences (Graha Dosha) and promotes inner balance.'
      },
      {
        stepNumber: 11,
        title: 'Pradhana Ahutis (Main Yajna Suktam Oblations)',
        sanskritTitle: 'प्रधान आहुतयः (गायत्री एवं महामृत्युञ्जय)',
        durationEst: '10 mins',
        samagriNeeded: ['Havan Samagri', 'Cow Ghee', 'Dry fruits'],
        shortDesc: 'The high spiritual crest of the Yajna. Chant 21, 51, or 108 Gayatri & Mahamrityunjaya mantras.',
        sanskritMantra: 'ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् स्वाहा ॥\nॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात् स्वाहा ॥\nॐ नमो भगवते वासुदेवाय स्वाहा ॥',
        transliteration: 'Om bhūr bhuvaḥ svaḥ tat savitur vareṇyaṁ bhargo devasya dhīmahi dhiyo yo naḥ pracodayāt svāhā ||\nOm tryambakaṁ yajāmahe sugandhiṁ puṣṭivardhanam urvārukam iva bandhanān mṛtyor mukṣīya māmṛtāt svāhā ||\nOm namo bhagavate vāsudevāya svāhā ||',
        englishMeaning: 'The divine solar mantra awakening the inner sun of awareness, coupled with the great death-conquering mantra of Lord Shiva and devotion to Bhagavan Narayana.',
        actionInstruction: 'Use our integrated Ahuti Counter below! Keep a rhythmic chant. Offer with thumb, middle, and ring fingers together.',
        mudraOrGesture: 'Hamsa Mudra / Mrigi Mudra.',
        ahutiTargetCount: 21,
        tips: 'You can select 11, 21, 51, or 108 counter cycles. Feel each grain of samagri burning away karmic residue.'
      },
      {
        stepNumber: 12,
        title: 'Svishtakrit Ahuti (Ritual Rectification)',
        sanskritTitle: 'स्विष्टकृत् आहुति',
        durationEst: '2 mins',
        samagriNeeded: ['Ghee', 'Spoonful of sweet/kheer or samagri'],
        shortDesc: 'Offering to Agni Svishtakrit to forgive any flaws, omissions, or mispronunciations in the chanting.',
        sanskritMantra: 'ॐ अग्नये स्विष्टकृते स्वाहा । इदमग्नये स्विष्टकृते इदं न मम ॥',
        transliteration: 'Om Agnaye sviṣṭakṛte svāhā | Idam Agnaye sviṣṭakṛte idaṁ na mama ||',
        englishMeaning: 'To Agni the Divine Rectifier who perfects whatever was defective, omitted, or done in excess, Swaha! This is for Agni Svishtakrit, not for me.',
        actionInstruction: 'Take the sweet oblation or ghee and offer it into the North-East (Ishanya) corner of the fire.',
        ahutiTargetCount: 1,
        tips: 'Provides tremendous peace of mind knowing the Divine compensates for human limitation.'
      },
      {
        stepNumber: 13,
        title: 'Maha Purnahuti & Vasordhara (The Supreme Culmination)',
        sanskritTitle: 'महा पूर्णाहुति एवं वसोर्धारा',
        durationEst: '5 mins',
        samagriNeeded: ['Dry whole Coconut filled with ghee and clove', 'Red cloth / Kalawa', 'Sruk spoon of ghee'],
        shortDesc: 'All participants stand. The coconut is offered and an unbroken stream of ghee (Vasordhara) is poured into the roaring flames.',
        sanskritMantra: 'ॐ पूर्णमदः पूर्णमिदं पूर्णात्पूर्णमुदच्यते । पूर्णस्य पूर्णमादाय पूर्णमेवावशिष्यते ॥\nॐ वसोः पवित्रमसि शतधारं वसोः पवित्रमसि सहस्रधारम् ।\nमयि मयि तेजो मयि वर्चो मयि बलं मयि यशः स्वाहा ॥',
        transliteration: 'Om pūrṇam adaḥ pūrṇam idaṁ pūrṇāt pūrṇam udacyate | Pūrṇasya pūrṇam ādāya pūrṇam evāvaśiṣyate ||\nOm vasoḥ pavitram asi śatadhāraṁ vasoḥ pavitram asi sahasradhāram |\nMayi mayi tejo mayi varco mayi balaṁ mayi yaśaḥ svāhā ||',
        englishMeaning: 'From Infinite Completeness emerges Infinite Completeness. The stream of divine wealth flows with hundredfold and thousandfold torrents. May divine radiance, vitality, spiritual strength, and noble renown blossom within me. Swaha!',
        actionInstruction: 'Stand up with the wrapped coconut in both hands. Offer it at the center of the kund with "Swaha". Then immediately hold the long wooden ladle and pour the remaining warm ghee in an unbroken, steady stream (Vasordhara) across the fire while the mantra resounds.',
        mudraOrGesture: 'Holding ladle with both hands held high.',
        ahutiTargetCount: 1,
        tips: 'The unbroken stream represents the uninterrupted flow of divine consciousness and prosperity.'
      },
      {
        stepNumber: 14,
        title: 'Bhasma Dharana (Consecrated Ash Application)',
        sanskritTitle: 'भस्म धारण विधानम्',
        durationEst: '2 mins',
        samagriNeeded: ['Chilled ash from the rim of the kund'],
        shortDesc: 'Sacred mark of non-attachment and mortality applied to key energy centers.',
        sanskritMantra: 'ॐ त्र्यायुषं जमदग्नेः कश्यपस्य त्र्यायुषम् ।\nयद्देवेषु त्र्यायुषं तन्नो अस्तु त्र्यायुषम् ॥\nॐ मेधावी भूयासं, तेजस्वी भूयासं, वर्चस्वी भूयासं ॥',
        transliteration: 'Om tryāyuṣaṁ jamadagneḥ kaśyapasya tryāyuṣam |\nYad deveṣu tryāyuṣaṁ tan no astu tryāyuṣam ||\nOm medhāvī bhūyāsaṁ, tejasvī bhūyāsaṁ, varcasvī bhūyāsaṁ ||',
        englishMeaning: 'May I be endowed with great memory and wisdom (Medha), radiant spiritual energy (Tejas), and moral luster (Varcas).',
        actionInstruction: 'Take a pinch of cold gray bhasma with the right ring finger. Apply to forehead (Ajna), throat (Vishuddha), chest (Anahata), and right shoulder.',
        ahutiTargetCount: 0,
        tips: 'Reminds us that the physical body returns to dust, while the Atman remains eternal.'
      },
      {
        stepNumber: 15,
        title: 'Pradakshina & Sashtanga Namaskara',
        sanskritTitle: 'प्रदक्षिणा एवं साष्टाङ्ग नमस्कारः',
        durationEst: '3 mins',
        samagriNeeded: ['Flowers in hand'],
        shortDesc: 'Circumambulate the consecrated altar clockwise three times and bow with all eight limbs.',
        sanskritMantra: 'यानि कानि च पापानि जन्मान्तरकृतानि च ।\nतानि तानि प्रणश्यन्ति प्रदक्षिणपदे पदे ॥\nॐ नमोऽस्त्वनन्ताय सहस्रमूर्तये सहस्रपादाक्षिकशिरोरुबाहवे ।\nसहस्रनाम्ने पुरुषाय शाश्वते सहस्रकोटीयुगधारिणे नमः ॥',
        transliteration: 'Yāni kāni ca pāpāni janmāntara-kṛtāni ca |\nTāni tāni praṇaśyanti pradakṣiṇa-pade pade ||\nOm namo\'stv anantāya sahasra-mūrtaye sahasra-pādākṣi-śiroru-bāhave |\nSahasra-nāmne puruṣāya śāśvate sahasra-koṭī-yuga-dhāriṇe namaḥ ||',
        englishMeaning: 'Whatever sins or negative impressions may have been accumulated across past lifetimes are burned away with every step of this sacred circumambulation. I bow to the Infinite Divine who manifests in thousand forms, eyes, and limbs.',
        actionInstruction: 'Walk clockwise around the Havan Kund three times keeping your right shoulder toward the fire. Then prostrate flat on the floor facing the altar in humble surrender.',
        ahutiTargetCount: 0,
        tips: 'Feel total peace and ego surrender.'
      },
      {
        stepNumber: 16,
        title: 'Kshama Prarthana & Vedic Shanti Path',
        sanskritTitle: 'क्षमा प्रार्थना एवं विश्व शान्ति पाठः',
        durationEst: '3 mins',
        samagriNeeded: ['None'],
        shortDesc: 'Universal prayer for cosmic peace, ecological balance, and forgiveness of any shortcomings.',
        sanskritMantra: 'आवाहनं न जानामि न जानामि विसर्जनम् ।\nपूजाकर्म न जानामि क्षमस्व परमेश्वर ॥\nमन्त्रहीनं क्रियाहीनं भक्तिहीनं सुरेश्वर ।\nयत्पूजितं मया देव परिपूर्णं तदस्तु मे ॥\nॐ द्यौः शान्तिरन्तरिक्षं शान्तिः पृथिवी शान्तिरापः शान्तिरोषधयः शान्तिः ।\nवनस्पतयः शान्तिर्विश्वेदेवाः शान्तिर्ब्रह्म शान्तिः सर्वं शान्तिः शान्तिरेव शान्तिः सा मा शान्तिरेधि ॥\nॐ शान्तिः शान्तिः शान्तिः ॥',
        transliteration: 'Āvāhanaṁ na jānāmi na jānāmi visarjanam |\nPūjā-karma na jānāmi kṣamasva Parameśvara ||\nMantra-hīnaṁ kriyā-hīnaṁ bhakti-hīnaṁ Sureśvara |\nYat pūjitaṁ mayā deva paripūrṇaṁ tad astu me ||\nOm dyauḥ śāntir antarikṣaṁ śāntiḥ pṛthivī śāntir āpaḥ śāntir oṣadhayaḥ śāntiḥ...\nOm śāntiḥ śāntiḥ śāntiḥ ||',
        englishMeaning: 'I know not how to properly invoke, nor how to bid farewell; I know not the complete ritual art. Forgive me, O Supreme Lord! Whatever was lacking in mantra, ritual procedure, or devotion, by Your grace may it become complete. Om Peace, Peace, Peace!',
        actionInstruction: 'Bow your head with palms joined at the chest. Distribute dry fruits or prasad to family members.',
        ahutiTargetCount: 0,
        tips: 'Congratulations on completing the Vedic Yajna! Keep the sacred ash safely.'
      }
    ]
  }
};
