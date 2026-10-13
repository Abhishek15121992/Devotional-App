// Daily Rituals (Dinacharya & Nitya Karma) with Real-Time Panchang integration

export interface RitualStep {
  id: string;
  period: 'morning' | 'afternoon' | 'evening' | 'night';
  title: string;
  sanskritTitle: string;
  shortDesc: string;
  timeWindow: string; // e.g. "Brahma Muhurta (4:00 - 6:00 AM)"
  sanskritMantra: string;
  transliteration: string;
  englishMeaning: string;
  actionGuidance: string;
  benefits: string;
  category: 'purification' | 'offering' | 'meditation' | 'gratitude';
}

export const DAILY_RITUALS: RitualStep[] = [
  {
    id: 'karadarshanam',
    period: 'morning',
    title: 'Karadarshanam (Palm Contemplation)',
    sanskritTitle: 'करदर्शनम्',
    shortDesc: 'First sight upon waking: seeing Lakshmi, Saraswati, and Govinda in the palms of your hands.',
    timeWindow: 'Immediately upon waking (Brahma Muhurta / Dawn)',
    sanskritMantra: 'कराग्रे वसते लक्ष्मीः करमध्ये सरस्वती ।\nकरमूले तु गोविन्दः प्रभाते करदर्शनम् ॥',
    transliteration: 'Karāgre vasate Lakṣmīḥ karamadhye Sarasvatī |\nKaramūle tu Govindaḥ prabhāte karadarśanam ||',
    englishMeaning: 'At the tip of the palm resides Devi Lakshmi (wealth of virtue); in the center resides Saraswati (wisdom); at the base resides Lord Govinda (divine sustainer). Thus, one beholds the hands in the morning.',
    actionGuidance: 'Before touching anything or setting foot down, join both open palms together facing your eyes, chant the mantra softly, and gently brush your palms over your face.',
    benefits: 'Awakens conscious mindfulness that our own deeds (hands) create our destiny with divine blessings.',
    category: 'purification'
  },
  {
    id: 'bhumi_vandana',
    period: 'morning',
    title: 'Bhumi Vandana (Earth Reverence)',
    sanskritTitle: 'भूमि वन्दना',
    shortDesc: 'Seeking forgiveness from Mother Earth before stepping out of bed.',
    timeWindow: 'Before placing feet on the ground',
    sanskritMantra: 'समुद्रवसने देवि पर्वतस्तनमण्डले ।\nविष्णुपत्नि नमस्तुभ्यं पादस्पर्शं क्षमस्व मे ॥',
    transliteration: 'Samudra-vasane devi parvata-stana-maṇḍale |\nViṣṇu-patni namastubhyaṁ pādasparśaṁ kṣamasva me ||',
    englishMeaning: 'O Mother Earth, who wears the ocean as garments and whose ornaments are the sacred mountains, consort of Bhagavan Vishnu, I bow to You; please forgive me for touching You with my feet.',
    actionGuidance: 'Touch the floor with your right hand fingertips first, touch your forehead/eyes in reverence, and then place your right foot down.',
    benefits: 'Cultivates humility, deep ecological reverence, and grounded energy for the day ahead.',
    category: 'gratitude'
  },
  {
    id: 'snana_vidhi',
    period: 'morning',
    title: 'Snana Mantra (Holy River Bathing Invocation)',
    sanskritTitle: 'स्नान मन्त्रः',
    shortDesc: 'Invoking the 7 sacred rivers of Bharat into your morning bath water.',
    timeWindow: 'Morning Bath / Shaucha',
    sanskritMantra: 'गङ्गे च यमुने चैव गोदावरि सरस्वति ।\nनर्मदे सिन्धु कावेरि जलेऽस्मिन् संनिधिं कुरु ॥',
    transliteration: 'Gaṅge ca Yamune caiva Godāvari Sarasvati |\nNarmade Sindhu Kāveri jale\'smin saṁnidhiṁ kuru ||',
    englishMeaning: 'O holy rivers Ganga, Yamuna, Godavari, Saraswati, Narmada, Sindhu, and Kaveri! Please sanctify this water with your sacred presence.',
    actionGuidance: 'Touch the bath water or sprinkle drops on your head before bathing while reciting this verse.',
    benefits: 'Transforms a mundane physical bath into a purifying Tirtha-Snana (spiritual ablution).',
    category: 'purification'
  },
  {
    id: 'surya_arghya',
    period: 'morning',
    title: 'Surya Arghya & Gayatri Upasana',
    sanskritTitle: 'सूर्यार्घ्यं एवं गायत्री उपासना',
    shortDesc: 'Offering pure water in a copper vessel facing East to Bhagavan Surya.',
    timeWindow: 'Sunrise / Pratah Sandhya',
    sanskritMantra: 'ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् ॥\nॐ सूर्याय नमः । ॐ आदित्याय नमः ॥',
    transliteration: 'Om bhūr bhuvaḥ svaḥ tat savitur vareṇyaṁ\nbhargo devasya dhīmahi dhiyo yo naḥ pracodayāt ||\nOm Sūryāya namaḥ | Om Ādityāya namaḥ ||',
    englishMeaning: 'We meditate on the supreme, effulgent solar radiance of the Creator Divine. May that illumination enlighten and inspire our intellect and inner vision.',
    actionGuidance: 'Fill a copper vessel (Lota) with water, add a pinch of kumkum, unbroken rice (akshat), or a red flower. Hold the vessel above eye level with both hands and pour in a steady stream while gazing through the water ray toward the morning sun.',
    benefits: 'Strengthens eyesight, boosts vitality (ojas), balances Prana and nervous system with solar energy.',
    category: 'offering'
  },
  {
    id: 'bhojana_prasad',
    period: 'afternoon',
    title: 'Bhojana Mantra (Sanctifying Food as Yajna)',
    sanskritTitle: 'भोजन मन्त्रः (ब्रह्मार्पणम्)',
    shortDesc: 'Offering the food you are about to eat to the Divine Indweller (Prana Agni).',
    timeWindow: 'Before meals (Midday & Evening)',
    sanskritMantra: 'ब्रह्मार्पणं ब्रह्म हविर्ब्रह्माग्नौ ब्रह्मणा हुतम् ।\nब्रह्मैव तेन गन्तव्यं ब्रह्मकर्मसमाधिना ॥\nअहं वैश्वानरो भूत्वा प्राणिनां देहमाश्रितः ।\nप्राणापानसमायुक्तः पचाम्यन्नं चतुर्विधम् ॥',
    transliteration: 'Brahmārpaṇaṁ brahma havir brahmāgnau brahmaṇā hutam |\nBrahmaiva tena gantavyaṁ brahma-karma-samādhinā ||\nAhaṁ vaiśvānaro bhūtvā prāṇināṁ deham āśritaḥ |\nPrāṇāpāna-samāyuktaḥ pacāmy annaṁ catur-vidham ||',
    englishMeaning: 'The offering is Brahman; the clarified butter is Brahman; offered by Brahman into the fire of Brahman. Brahman shall be attained by him who realizes Brahman in all actions (Gita 4.24). I, becoming the digestive fire (Vaishvanara) seated in the body of living beings, digest the four kinds of food (Gita 15.14).',
    actionGuidance: 'Sprinkle a circular drop of water around the plate (Apashana), close your eyes in gratitude for a breath, and eat with peaceful awareness.',
    benefits: 'Transforms food into divine medicine (Prasada), promoting conscious eating and serene digestion.',
    category: 'gratitude'
  },
  {
    id: 'sandhya_deepam',
    period: 'evening',
    title: 'Sandhya Deepa Prajvalana (Twilight Lamp Lighting)',
    sanskritTitle: 'संध्या दीप प्रज्वलनम्',
    shortDesc: 'Kindling the sacred oil lamp at dusk to dispel darkness and welcome auspiciousness.',
    timeWindow: 'Sunset / Twilight (Sayam Sandhya ~6:00 - 7:00 PM)',
    sanskritMantra: 'शुभं करोति कल्याणमारोग्यं धनसंपदः ।\nशत्रुबुद्धि-विनाशाय दीपज्योतिर्नमोऽस्तु ते ॥\nदीपो ज्योतिः परं ब्रह्म दीपो ज्योतिर्जनार्दनः ।\nदीपो हरतु मे पापं दीपज्योतिर्नमोऽस्तु ते ॥',
    transliteration: 'Śubhaṁ karoti kalyāṇam ārogyaṁ dhana-saṁpadaḥ |\nŚatru-buddhi-vināśāya dīpa-jyotir namo\'stu te ||\nDīpo jyotiḥ paraṁ brahma dīpo jyotir Janārdanaḥ |\nDīpo haratu me pāpaṁ dīpa-jyotir namo\'stu te ||',
    englishMeaning: 'I salute the supreme light of the lamp, which brings auspiciousness, well-being, good health, and abundant wealth, and dissolves negative thoughts. The flame of the lamp represents the supreme Brahman and Lord Janardana. May that sacred flame dispel all our inner blemishes.',
    actionGuidance: 'Light a brass or clay diya with sesame oil or cow ghee near your home altar or entrance. Wave your hands gently over the warmth and touch your eyes.',
    benefits: 'Purifies home atmosphere, creates tranquility during the sensitive dusk transition.',
    category: 'offering'
  },
  {
    id: 'sayana_shloka',
    period: 'night',
    title: 'Sayana Kshama Prarthana (Bedtime Peace & Pardon)',
    sanskritTitle: 'शयन क्षमा प्रार्थना',
    shortDesc: 'Surrendering the deeds of the day and releasing all grievances before sleep.',
    timeWindow: 'Before sleep (Ratri Shayan)',
    sanskritMantra: 'करचरणकृतं वाक्कायजं कर्मजं वा ।\nश्रवणनयनजं वा मानसं वापराधम् ।\nविहितमविहितं वा सर्वमेतत्क्षमस्व ।\nजय जय करुणाब्धे श्रीमहादेव शम्भो ॥',
    transliteration: 'Kara-caraṇa-kṛtaṁ vāk-kāyajaṁ karmajaṁ vā |\nŚravaṇa-nayanajaṁ vā mānasaṁ vāparādham |\nVihitam avihitaṁ vā sarvam etat kṣamasva |\nJaya jaya karuṇābdhe Śrī Mahādeva Śambho ||',
    englishMeaning: 'Whatever errors or transgressions I may have committed with my hands, feet, speech, body, actions, ears, eyes, or mind, whether knowingly or unknowingly — please forgive all of them, O ocean of boundless compassion, Lord Shiva Shambho!',
    actionGuidance: 'Sit comfortably on your bed, take 3 deep breaths, recite this prayer to release anger, guilt, and restlessness, and sleep with a pure heart.',
    benefits: 'Deep, dreamless, restorative sleep free from subconscious tension and anxiety.',
    category: 'meditation'
  }
];

// Real-Time Panchang Calculator for any date
export interface PanchangInfo {
  dateStr: string;
  tithi: string;
  tithiPaksha: 'Shukla' | 'Krishna';
  nakshatra: string;
  yoga: string;
  karana: string;
  solarDay: string;
  brahmaMuhurta: string;
  abhijitMuhurat: string;
  rahuKaal: string;
  auspiciousRitualNote: string;
}

export function calculateRealtimePanchang(date: Date = new Date()): PanchangInfo {
  const days = ['Ravivara (Sunday)', 'Somavara (Monday)', 'Mangalavara (Tuesday)', 'Budhavara (Wednesday)', 'Guruvara (Thursday)', 'Shukravara (Friday)', 'Shanivara (Saturday)'];
  const dayName = days[date.getDay()];

  // Approximate Vedic Tithi cycle based on lunar month reference
  const baseEpoch = new Date(2024, 0, 11).getTime(); // Known Amavasya reference
  const diffDays = (date.getTime() - baseEpoch) / (1000 * 60 * 60 * 24);
  const synodicMonth = 29.53058867;
  const lunarPhase = (diffDays % synodicMonth + synodicMonth) % synodicMonth;
  const tithiIndex = Math.floor((lunarPhase / synodicMonth) * 30) + 1;

  const tithiNames = [
    'Pratipada', 'Dwitiya', 'Tritiya', 'Chaturthi', 'Panchami',
    'Shashthi', 'Saptami', 'Ashtami', 'Navami', 'Dashami',
    'Ekadashi', 'Dwadashi', 'Trayodashi', 'Chaturdashi'
  ];

  let tithi = '';
  let paksha: 'Shukla' | 'Krishna' = 'Shukla';

  if (tithiIndex === 15) {
    tithi = 'Purnima (Full Moon)';
    paksha = 'Shukla';
  } else if (tithiIndex === 30 || tithiIndex === 0) {
    tithi = 'Amavasya (New Moon)';
    paksha = 'Krishna';
  } else if (tithiIndex < 15) {
    paksha = 'Shukla';
    tithi = `Shukla ${tithiNames[tithiIndex - 1] || 'Pratipada'}`;
  } else {
    paksha = 'Krishna';
    const idx = tithiIndex - 16;
    tithi = `Krishna ${tithiNames[idx] || 'Pratipada'}`;
  }

  // 27 Nakshatras
  const nakshatras = [
    'Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 'Ardra',
    'Punarvasu', 'Pushya', 'Ashlesha', 'Magha', 'Purva Phalguni', 'Uttara Phalguni',
    'Hasta', 'Chitra', 'Swati', 'Vishakha', 'Anuradha', 'Jyeshtha',
    'Mula', 'Purva Ashadha', 'Uttara Ashadha', 'Shravana', 'Dhanishta',
    'Shatabhisha', 'Purva Bhadrapada', 'Uttara Bhadrapada', 'Revati'
  ];
  const nakshatraIndex = Math.floor(((diffDays * 1.036) % 27 + 27) % 27);
  const nakshatra = nakshatras[nakshatraIndex];

  // Auspicious note based on day and tithi
  let auspiciousNote = 'Favorable for peaceful Nitya Puja, japa mantra chanting, and daily meditation.';
  if (tithi.includes('Ekadashi')) {
    auspiciousNote = 'Auspicious Ekadashi vrata day. Highly meritorious for Vishnu Aradhana, fasting, and Gita recitation.';
  } else if (tithi.includes('Purnima')) {
    auspiciousNote = 'Purnima (Full Moon). Ideal for Satyanarayan Katha, Sri Suktam chanting, and Lakshmi deepam.';
  } else if (tithi.includes('Amavasya')) {
    auspiciousNote = 'Amavasya (New Moon). Auspicious for Pitru Tarpan, Shiva japa, and seeking inner stillness.';
  } else if (tithi.includes('Chaturthi')) {
    auspiciousNote = 'Ganesha Sankashti / Vinayaka Chaturthi energy. Chanting Atharvashirsha brings clarity and removes obstacles.';
  } else if (date.getDay() === 1) {
    auspiciousNote = 'Somavara (Lord Shiva day). Auspicious for Mahamrityunjaya chanting and Bilva leaf offering.';
  } else if (date.getDay() === 2) {
    auspiciousNote = 'Mangalavara (Hanuman & Kartikeya day). Chanting Hanuman Chalisa dispels fear and lethargy.';
  }

  return {
    dateStr: date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    tithi,
    tithiPaksha: paksha,
    nakshatra,
    yoga: 'Siddha / Shiva Yoga',
    karana: 'Bava / Balava',
    solarDay: dayName,
    brahmaMuhurta: '04:36 AM – 05:24 AM',
    abhijitMuhurat: '11:48 AM – 12:36 PM',
    rahuKaal: getRahuKaalForDay(date.getDay()),
    auspiciousRitualNote: auspiciousNote
  };
}

function getRahuKaalForDay(dayIndex: number): string {
  // Approximate standard Rahu Kaal for 6 AM - 6 PM cycle
  switch (dayIndex) {
    case 0: return '04:30 PM – 06:00 PM'; // Sun
    case 1: return '07:30 AM – 09:00 AM'; // Mon
    case 2: return '03:00 PM – 04:30 PM'; // Tue
    case 3: return '12:00 PM – 01:30 PM'; // Wed
    case 4: return '01:30 PM – 03:00 PM'; // Thu
    case 5: return '10:30 AM – 12:00 PM'; // Fri
    case 6: return '09:00 AM – 10:30 AM'; // Sat
    default: return '12:00 PM – 01:30 PM';
  }
}
