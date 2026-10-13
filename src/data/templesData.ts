// Comprehensive Temple Locator & Darshan Guide

export interface Temple {
  id: string;
  name: string;
  sanskritName: string;
  deity: string;
  primaryDeityCategory: 'Shiva' | 'Vishnu' | 'Devi' | 'Ganesha' | 'Hanuman' | 'Murugan' | 'Universal';
  tradition: string;
  city: string;
  state: string;
  country: string;
  lat: number;
  lng: number;
  darshanTimings: {
    morning: string;
    evening: string;
    specialAartis: { name: string; time: string }[];
  };
  dressCode: string;
  description: string;
  significance: string;
  recommendedOffering: string;
  websiteUrl?: string;
  featuredImg?: string;
}

export const TEMPLES_DIRECTORY: Temple[] = [
  {
    id: 'kashi-vishwanath',
    name: 'Kashi Vishwanath Mandir',
    sanskritName: 'काशी विश्वनाथ मन्दिरम्',
    deity: 'Lord Shiva (Vishveshwara / Jyotirlinga)',
    primaryDeityCategory: 'Shiva',
    tradition: 'Shaivism (12 Jyotirlingas)',
    city: 'Varanasi',
    state: 'Uttar Pradesh',
    country: 'India',
    lat: 25.3109,
    lng: 83.0107,
    darshanTimings: {
      morning: '04:00 AM – 11:15 AM',
      evening: '12:20 PM – 11:00 PM',
      specialAartis: [
        { name: 'Mangala Aarti', time: '03:00 AM – 04:00 AM' },
        { name: 'Bhog Aarti', time: '11:15 AM – 12:20 PM' },
        { name: 'Sandhya Aarti', time: '07:00 PM – 08:15 PM' },
        { name: 'Shayan Aarti', time: '10:30 PM – 11:00 PM' }
      ]
    },
    dressCode: 'Traditional Indian attire (Dhoti-Kurta for men, Saree/Salwar for women) mandatory for Sparsha Darshan (Sanctum touch).',
    description: 'The golden-spire Jyotirlinga on the banks of the sacred Ganga, revered for millennia as the spiritual heart of Bharat where Lord Shiva whispers the Taraka mantra.',
    significance: 'One of the twelve supreme Jyotirlingas; pilgrimage here is traditionally believed to confer liberation (Moksha).',
    recommendedOffering: 'Ganga Jal, Bilva leaves, raw milk, white flowers, and Vibhuti.',
    websiteUrl: 'https://shrikashivishwanath.org'
  },
  {
    id: 'tirumala-venkateswara',
    name: 'Tirumala Venkateswara Temple',
    sanskritName: 'तिरुमल श्री वेङ्कटेश्वर स्वामी मन्दिरम्',
    deity: 'Lord Venkateswara (Balaji / Srinivasa)',
    primaryDeityCategory: 'Vishnu',
    tradition: 'Vaishnavism (Vaikhanasa Agama)',
    city: 'Tirupati',
    state: 'Andhra Pradesh',
    country: 'India',
    lat: 13.6833,
    lng: 79.3472,
    darshanTimings: {
      morning: '03:00 AM – 12:00 PM',
      evening: '01:00 PM – 11:30 PM',
      specialAartis: [
        { name: 'Suprabhatam', time: '03:00 AM – 03:30 AM' },
        { name: 'Thomala Seva', time: '03:45 AM – 04:30 AM' },
        { name: 'Archana', time: '04:30 AM – 05:30 AM' },
        { name: 'Ekantha Seva', time: '11:00 PM – 11:30 PM' }
      ]
    },
    dressCode: 'Strict Vedic dress: Dhoti with Uttariyam for men (shirts removed in sanctum), Sarees or Half-sarees/Salwar with dupatta for women.',
    description: 'Situated on the Venkatadri hill of the Seshachalam range, Tirumala is the Kaliyuga abode of Lord Vishnu where lakhs of pilgrims surrender pride and worldly wealth.',
    significance: 'Most visited pilgrimage shrine in the world; famous for Tirupati Laddu Prasadam and hair offering (Kalyanakatta).',
    recommendedOffering: 'Tulasi garlands, yellow silk vastram, and Laddu prasadam.',
    websiteUrl: 'https://tirupatibalaji.ap.gov.in'
  },
  {
    id: 'ayodhya-ram-mandir',
    name: 'Shri Ram Janmabhoomi Mandir',
    sanskritName: 'श्री राम जन्मभूमि मन्दिरम्',
    deity: 'Ram Lalla Virajman (Lord Rama in infant form)',
    primaryDeityCategory: 'Vishnu',
    tradition: 'Ramanandi Sampradaya (Nagara Architectural Style)',
    city: 'Ayodhya',
    state: 'Uttar Pradesh',
    country: 'India',
    lat: 26.7956,
    lng: 82.1943,
    darshanTimings: {
      morning: '06:30 AM – 12:00 PM',
      evening: '02:00 PM – 09:30 PM',
      specialAartis: [
        { name: 'Shringar / Jagaran Aarti', time: '06:30 AM' },
        { name: 'Bhog Aarti', time: '12:00 PM' },
        { name: 'Sandhya Aarti', time: '07:30 PM' },
        { name: 'Shayan Aarti', time: '10:00 PM' }
      ]
    },
    dressCode: 'Modest traditional or smart Indian wear. Electronic gadgets & leather items not permitted inside the inner security zone.',
    description: 'The historic and magnificent Nagara-style stone temple constructed at the exact birthplace of Maryada Purushottam Shri Rama on the banks of holy Sarayu river.',
    significance: 'The epic spiritual revitalization of Ayodhya; carved out of pink Bansi Paharpur sandstone with zero iron or steel.',
    recommendedOffering: 'Peda, Tulasi leaves, fresh yellow marigold garlands, and chandan.',
    websiteUrl: 'https://srjbtkshetra.org'
  },
  {
    id: 'meenakshi-amman',
    name: 'Meenakshi Sundareswarar Temple',
    sanskritName: 'श्री मीनाक्षी सुन्दरेश्वर मन्दिरम्',
    deity: 'Goddess Meenakshi (Parvati) & Lord Sundareswarar (Shiva)',
    primaryDeityCategory: 'Devi',
    tradition: 'Shaiva Siddhanta (Dravidian Architecture)',
    city: 'Madurai',
    state: 'Tamil Nadu',
    country: 'India',
    lat: 9.9195,
    lng: 78.1193,
    darshanTimings: {
      morning: '05:00 AM – 12:30 PM',
      evening: '04:00 PM – 10:00 PM',
      specialAartis: [
        { name: 'Thiruvanandal Pooja', time: '05:00 AM' },
        { name: 'Kala Santhi Pooja', time: '06:30 AM' },
        { name: 'Sayaratchai Pooja', time: '07:30 PM' },
        { name: 'Palliyarai Pooja (Night procession)', time: '09:45 PM' }
      ]
    },
    dressCode: 'Men: Dhoti, pyjama with kurta (no shorts or lungis). Women: Saree, churidar with dupatta (no sleeveless or western casuals).',
    description: 'Iconic temple city with 14 towering gopurams encrusted with thousands of colorful mythological figures, surrounding the Thousand Pillar Hall.',
    significance: 'Revered as one of the Shakti Peethas; notable for the nightly divine procession carrying Shiva’s padukas to Devi Meenakshi’s bedchamber.',
    recommendedOffering: 'Fragrant Madurai Malli (Jasmine) flowers, green saree, turmeric, and kumkum.',
    websiteUrl: 'https://maduraimeenakshi.org'
  },
  {
    id: 'somnath-jyotirlinga',
    name: 'Shri Somnath Jyotirlinga',
    sanskritName: 'श्री सोमनाथ ज्योतिर्लिङ्ग मन्दिरम्',
    deity: 'Lord Somnath (Shiva)',
    primaryDeityCategory: 'Shiva',
    tradition: 'Shaivism (Prathama Jyotirlinga)',
    city: 'Prabhas Patan (Veraval)',
    state: 'Gujarat',
    country: 'India',
    lat: 20.8880,
    lng: 70.4012,
    darshanTimings: {
      morning: '06:00 AM – 12:00 PM',
      evening: '01:00 PM – 10:00 PM',
      specialAartis: [
        { name: 'Pratah Aarti', time: '07:00 AM' },
        { name: 'Madhyahna Aarti', time: '12:00 PM' },
        { name: 'Sayam Aarti', time: '07:00 PM' },
        { name: 'Sound & Light Show', time: '08:00 PM' }
      ]
    },
    dressCode: 'Traditional Indian clothing. Leather belts, bags, cameras, and mobiles must be deposited in cloakrooms.',
    description: 'The immortal first of the 12 Jyotirlingas, situated at the confluence of three rivers on the shores of the Arabian Sea with the ancient arrow pillar (Baan Stambh).',
    significance: 'Resurrected multiple times across history as a symbol of eternal Sanatana faith overcoming destruction.',
    recommendedOffering: 'Panchamrit, Bilva Patra, Chandan, and holy water.',
    websiteUrl: 'https://somnath.org'
  },
  {
    id: 'puri-jagannath',
    name: 'Shri Jagannath Temple',
    sanskritName: 'श्री जगन्नाथ मन्दिरम् (श्रीक्षेत्र)',
    deity: 'Lord Jagannath, Balabhadra & Devi Subhadra',
    primaryDeityCategory: 'Vishnu',
    tradition: 'Vaishnavism (Char Dham)',
    city: 'Puri',
    state: 'Odisha',
    country: 'India',
    lat: 19.8048,
    lng: 85.8179,
    darshanTimings: {
      morning: '05:30 AM – 01:00 PM',
      evening: '04:00 PM – 11:00 PM',
      specialAartis: [
        { name: 'Mangala Alati', time: '05:30 AM – 06:00 AM' },
        { name: 'Besha Darshan', time: '08:00 AM' },
        { name: 'Madhyahna Dhupa', time: '12:30 PM – 01:30 PM' },
        { name: 'Sandhya Alati', time: '07:00 PM' },
        { name: 'Badasinghar Alati', time: '11:00 PM' }
      ]
    },
    dressCode: 'Indian traditional clothing (Dhoti, Kurta, Saree). Only practicing Hindus permitted inside the Anand Bazar & sanctum per ancient tradition.',
    description: 'Revered Char Dham coastal sanctuary famed for the world-famous Ratha Yatra and the sacred Mahaprasad cooked in earthern pots stacked atop each other.',
    significance: 'The wooden deities (Daru Brahma) are refreshed every 12-19 years in the mystical Nabakalebara ceremony.',
    recommendedOffering: 'Khai, Ukhuda, Chhapan Bhog, red flags (Patitapabana Bana).',
    websiteUrl: 'https://jagannath.nic.in'
  },
  {
    id: 'siddhivinayak-mumbai',
    name: 'Shri Siddhivinayak Ganapati Mandir',
    sanskritName: 'श्री सिद्धिविनायक गणपति मन्दिरम्',
    deity: 'Lord Ganesha (Siddhivinayak - Right-trunked)',
    primaryDeityCategory: 'Ganesha',
    tradition: 'Ganapatya Sampradaya',
    city: 'Mumbai',
    state: 'Maharashtra',
    country: 'India',
    lat: 19.0168,
    lng: 72.8304,
    darshanTimings: {
      morning: '05:30 AM – 12:15 PM',
      evening: '01:30 PM – 09:50 PM (Open 3:15 AM on Tuesdays)',
      specialAartis: [
        { name: 'Kakad Aarti', time: '05:30 AM – 06:00 AM' },
        { name: 'Shree Darshan', time: '06:00 AM – 12:15 PM' },
        { name: 'Naivedya', time: '12:15 PM – 12:30 PM' },
        { name: 'Sandhya Aarti', time: '07:30 PM – 08:00 PM' },
        { name: 'Shejarati (Last Aarti)', time: '09:50 PM' }
      ]
    },
    dressCode: 'Decent, respectful clothing. Sleeveless tops and short dresses are discouraged.',
    description: 'One of the most revered Ganesha shrines in India, where the deity\'s trunk turns to the right (Navasacha Ganapati - granter of earnest wishes).',
    significance: 'Golden dome sanctum frequented by millions seeking auspicious beginnings in work, arts, and enterprise.',
    recommendedOffering: 'Durva grass blades (21 sprigs), Modak, red hibiscus flower (Jaswand), and coconut.',
    websiteUrl: 'https://siddhivinayak.org'
  },
  {
    id: 'akshardham-delhi',
    name: 'Swaminarayan Akshardham',
    sanskritName: 'स्वामिनारायण अक्षरधाम',
    deity: 'Bhagwan Swaminarayan & Sanatana Deities',
    primaryDeityCategory: 'Universal',
    tradition: 'BAPS Swaminarayan Sanstha',
    city: 'New Delhi',
    state: 'Delhi',
    country: 'India',
    lat: 28.6127,
    lng: 77.2773,
    darshanTimings: {
      morning: '10:00 AM – 01:00 PM',
      evening: '01:00 PM – 08:00 PM (Closed Mondays)',
      specialAartis: [
        { name: 'Morning Mangala Aarti', time: '10:00 AM' },
        { name: 'Evening Sandhya Aarti', time: '06:00 PM' },
        { name: 'Sahaj Anand Water Show', time: '07:30 PM' }
      ]
    },
    dressCode: 'Shoulders, chest, and knees must be covered. Free sarongs provided on deposit if clothing does not comply.',
    description: 'An architectural marvel of pink sandstone and Italian Carrara marble celebrating 10,000 years of Indian culture, timeless spirituality, and architectural mastery.',
    significance: 'Houses 234 ornate carved pillars, 9 domes, and 20,000 murtis of India\'s rishis, sadhus, and avatars.',
    recommendedOffering: 'Flowers, Abhishek on the sacred murti of Nilkanth Varni, and silent prayer.',
    websiteUrl: 'https://akshardham.com'
  },
  {
    id: 'venkateswara-new-jersey',
    name: 'BAPS Swaminarayan Akshardham (Robbinsville)',
    sanskritName: 'अक्षरधाम मन्दिरम् (न्यू जर्सी)',
    deity: 'Bhagwan Swaminarayan, Radha-Krishna, Sita-Ram, Shiva-Parvati',
    primaryDeityCategory: 'Universal',
    tradition: 'Hindu Diaspora / Vedic Stone Architecture',
    city: 'Robbinsville',
    state: 'New Jersey',
    country: 'United States',
    lat: 40.2238,
    lng: -74.5292,
    darshanTimings: {
      morning: '09:00 AM – 01:00 PM',
      evening: '01:00 PM – 07:30 PM',
      specialAartis: [
        { name: 'Morning Aarti', time: '09:30 AM' },
        { name: 'Rajbhog Aarti', time: '11:15 AM' },
        { name: 'Sandhya Aarti', time: '07:00 PM' }
      ]
    },
    dressCode: 'Modest attire covering shoulders and knees. Shoes removed upon entering the Welcome Center and Mandir.',
    description: 'The largest stone Hindu mandir in the Western Hemisphere, hand-carved in India by thousands of artisans and assembled with zero modern structural steel.',
    significance: 'Spiritual beacon for millions of diaspora Hindus across the Americas.',
    recommendedOffering: 'Fresh flowers, voluntary service (Seva), and Abhishek water.',
    websiteUrl: 'https://usa.akshardham.org'
  },
  {
    id: 'neasden-temple-london',
    name: 'BAPS Shri Swaminarayan Mandir (Neasden)',
    sanskritName: 'श्री स्वामिनारायण मन्दिरम् (नीसडन)',
    deity: 'Bhagwan Swaminarayan, Ghanshyam Maharaj, Hanuman, Ganesh',
    primaryDeityCategory: 'Universal',
    tradition: 'Hindu Diaspora / Shikharbaddha Mandir',
    city: 'London',
    state: 'Greater London',
    country: 'United Kingdom',
    lat: 51.5476,
    lng: -0.2612,
    darshanTimings: {
      morning: '09:00 AM – 12:15 PM',
      evening: '04:00 PM – 06:00 PM',
      specialAartis: [
        { name: 'Shanghar Aarti', time: '09:00 AM' },
        { name: 'Rajbhog Aarti', time: '11:45 AM' },
        { name: 'Sandhya Aarti', time: '07:00 PM' }
      ]
    },
    dressCode: 'Smart, modest clothing. Tops must cover shoulders and shorts/skirts must fall well below the knees.',
    description: 'Europe\'s first traditional Hindu stone temple, sculpted using Bulgarian limestone and Carrara marble, celebrated worldwide for community harmony.',
    significance: 'Historic cultural landmark for British and European Hindus.',
    recommendedOffering: 'Vegetarian offerings, pure flowers, and community seva.',
    websiteUrl: 'https://londonmandir.baps.org'
  },
  {
    id: 'shiva-vishnu-livermore',
    name: 'Shiva-Vishnu Temple (Livermore)',
    sanskritName: 'शिव-विष्णु मन्दिरम् (लिवरमौर, कैलिफोर्निया)',
    deity: 'Lord Shiva & Lord Venkateswara',
    primaryDeityCategory: 'Universal',
    tradition: 'Hindu Community Center of South Bay & Silicon Valley',
    city: 'Livermore',
    state: 'California',
    country: 'United States',
    lat: 37.7479,
    lng: -121.7589,
    darshanTimings: {
      morning: '09:00 AM – 12:30 PM',
      evening: '05:30 PM – 08:30 PM (Weekend 9 AM - 8:30 PM)',
      specialAartis: [
        { name: 'Suprabhatam', time: '09:00 AM' },
        { name: 'Shiva Abhishekam', time: '10:00 AM' },
        { name: 'Evening Deeparadhana', time: '07:30 PM' }
      ]
    },
    dressCode: 'Modest temple wear. Traditional Indian clothing preferred during festivals.',
    description: 'One of the largest Hindu temples in California, bringing together both Shaivite and Vaishnavite lineages under one harmonious sanctum.',
    significance: 'Central hub for Vedic chanting, Carnatic/Hindustani classical music, and cultural education in Silicon Valley.',
    recommendedOffering: 'Fruits, Panchamrit ingredients, and coconuts.',
    websiteUrl: 'https://livermoretemple.org'
  }
];

// Helper: Calculate geodesic distance in Kilometers
export function calculateDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Radius of the Earth in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}

// Helper: Determine dynamic darshan state based on current time
export function getTempleCurrentStatus(temple: Temple, now: Date = new Date()): {
  isOpen: boolean;
  statusLabel: string;
  nextAarti?: string;
} {
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const timeNum = hours + minutes / 60;

  // Most temples open roughly 5/6 AM - 12/1 PM and 4 PM - 9/10 PM
  const isMorningSlot = timeNum >= 5.0 && timeNum <= 12.5;
  const isEveningSlot = timeNum >= 16.0 && timeNum <= 21.5;

  if (isMorningSlot) {
    return {
      isOpen: true,
      statusLabel: 'Open for Darshan (Pratah/Morning Seva)',
      nextAarti: temple.darshanTimings.specialAartis[1]?.name || 'Madhyahna Bhog'
    };
  } else if (timeNum > 12.5 && timeNum < 16.0) {
    return {
      isOpen: false,
      statusLabel: 'Afternoon Recess (Pata Bandh / Bhog Closure)',
      nextAarti: `Reopens at 4:00 PM (${temple.darshanTimings.specialAartis[2]?.name || 'Sandhya Aarti'})`
    };
  } else if (isEveningSlot) {
    return {
      isOpen: true,
      statusLabel: 'Open for Darshan (Sandhya/Evening Deeparadhana)',
      nextAarti: temple.darshanTimings.specialAartis[2]?.name || 'Sandhya Aarti'
    };
  } else {
    return {
      isOpen: false,
      statusLabel: 'Night Shayan (Sanctum Closed until Morning)',
      nextAarti: `Reopens at dawn (${temple.darshanTimings.specialAartis[0]?.name || 'Mangala Aarti'})`
    };
  }
}
