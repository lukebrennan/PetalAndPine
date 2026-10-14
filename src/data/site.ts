import type { ImageMetadata } from 'astro';
import softImage from '../assets/soft.png';
import brightImage from '../assets/bright.png';
import wildImage from '../assets/wild.png';

export const site = {
  name: 'Petal & Pine',
  description: 'A Chester-inspired flower-shop preview. Explore garden-style bouquets, occasion ideas, and thoughtful flower care with Petal & Pine.',
  eyebrow: 'Garden-inspired flowers · Chester',
  headline: { firstLine: 'Flowers for the', secondLine: 'moments that', emphasis: 'matter.' },
  introduction: 'The big days. The little thank-yous. The just-because moments. A little garden-inspired beauty, wrapped up with feeling.',
  story: 'We believe flowers should feel as thoughtful as the gesture behind them. Soft petals, beautiful textures, and a touch of the unexpected — inspired by the garden, made for your everyday.',
};

export const shop = {
  isDemo: true,
  town: 'Chester',
  address: ['12 Petal Lane', 'Chester, Cheshire'],
  email: 'hello@petalandpine.example',
  phone: '01632 960214',
  instagram: '',
  hours: [
    { days: 'Tuesday–Friday', time: '9:00am–5:30pm' },
    { days: 'Saturday', time: '9:00am–4:30pm' },
    { days: 'Sunday–Monday', time: 'Closed' },
  ],
  delivery: 'Example local delivery around Chester from £5, or collection from the shop by arrangement.',
  demoNote: 'Preview website: the Chester address, contact details, hours, services, and prices are fictional examples. No orders or payments are taken here.',
};

export const navigation = [
  { label: 'Our flowers', slug: 'flowers' },
  { label: 'Occasions', slug: 'occasions' },
  { label: 'Our story', slug: 'our-story' },
  { label: 'Flower care', slug: 'flower-care' },
  { label: 'Say hello', slug: 'contact' },
];

export interface Collection {
  slug: string;
  name: string;
  description: string;
  story: string;
  palette: string;
  image: ImageMetadata;
  alt: string;
  price: number;
  colours: { name: string; hex: string }[];
  feeling: string;
  moments: string[];
  stems: string;
  note: string;
}

export const collections: Collection[] = [
  {
    slug: 'soft-romantic', name: 'Soft & romantic', palette: 'rose', image: softImage,
    description: 'Blush tones, creamy petals, and a gentler way to say something lovely.',
    story: 'Quietly beautiful rather than perfectly formal. This palette brings together soft, rounded flowers and light greenery for a bouquet that feels warm, personal, and a little dreamy.',
    alt: 'Blush and cream garden-style flowers with eucalyptus, wrapped in ivory paper.',
    price: 35,
    colours: [{ name: 'Blush', hex: '#d3a4a1' }, { name: 'Ivory', hex: '#efe5cc' }, { name: 'Mauve', hex: '#ae8c99' }, { name: 'Eucalyptus', hex: '#809481' }],
    feeling: 'Tender, gentle, and thoughtfully understated.',
    moments: ['An anniversary', 'A heartfelt thank-you', 'A new beginning'],
    stems: 'Think garden roses, ranunculus, delicate seasonal flowers, and eucalyptus. Individual stems change with the season.',
    note: 'Pair with a handwritten message and let the softer colours do the rest.',
  },
  {
    slug: 'bright-joyful', name: 'Bright & joyful', palette: 'peach', image: brightImage,
    description: 'A little sunshine in flower form. Playful colour for happy moments.',
    story: 'For the person who makes a room feel brighter. Peach, coral, and buttery yellow bring a cheerful rhythm to this garden-inspired palette, balanced by fresh green foliage.',
    alt: 'A colourful bouquet of coral, peach, and butter-yellow flowers in cream wrapping.',
    price: 30,
    colours: [{ name: 'Coral', hex: '#ca7965' }, { name: 'Peach', hex: '#e1b08b' }, { name: 'Butter yellow', hex: '#e6cd85' }, { name: 'Fresh green', hex: '#788c65' }],
    feeling: 'Sunny, expressive, and full of good energy.',
    moments: ['A birthday', 'A congratulations', 'A just-because surprise'],
    stems: 'Colourful dahlias, tulips, garden roses, and seasonal accents are the inspiration here. The mix is a mood, not a fixed stem list.',
    note: 'If you are choosing for a favourite colour, include it in your flower brief.',
  },
  {
    slug: 'wild-natural', name: 'Wild & natural', palette: 'sage', image: wildImage,
    description: 'Garden greens, gentle textures, and a beautifully just-picked feeling.',
    story: 'A little breathing room, a little movement, and plenty of texture. Airy white flowers and layered greenery make a fresh, relaxed palette that lets each stem have its own moment.',
    alt: 'Airy white flowers and textured greenery arranged in a moss-green ceramic vase.',
    price: 32,
    colours: [{ name: 'Cloud white', hex: '#f1ebd9' }, { name: 'Sage', hex: '#a7b59a' }, { name: 'Olive', hex: '#7d8b5e' }, { name: 'Forest', hex: '#3f5d48' }],
    feeling: 'Relaxed, organic, and gently gathered.',
    moments: ['A thoughtful gesture', 'Flowers for home', 'A natural celebration'],
    stems: 'White seasonal flowers, fine branching stems, textured foliage, and eucalyptus suggest the look. Vases in the imagery are styling inspiration.',
    note: 'Lovely for someone who enjoys quieter colour and an informal garden style.',
  },
];

export const sizes = [
  { value: 'little', label: 'Little gesture', extra: 0, description: 'A small, thoughtful bunch.' },
  { value: 'classic', label: 'Classic bouquet', extra: 15, description: 'A fuller everyday gift.' },
  { value: 'generous', label: 'Something generous', extra: 30, description: 'More flowers, more of the feeling.' },
];

export const occasions = [
  { value: 'birthday', title: 'Birthday little joys', label: 'Birthday', description: 'Make their day feel a little brighter. Choose a colour they love, or a cheerful mix that feels like them.', idea: 'Think peach, coral, and a warm splash of yellow.', collection: 'bright-joyful', message: 'A little colour for your day. Happy birthday — here’s to a lovely year ahead.' },
  { value: 'thank-you', title: 'A thoughtful thank-you', label: 'Thank you', description: 'For the helping hands, kind words, and people who show up. A gentle bouquet can say a lot without saying too much.', idea: 'Blush and ivory feel especially warm and personal.', collection: 'soft-romantic', message: 'For all the little things that meant so much. Thank you.' },
  { value: 'just-because', title: 'Just because', label: 'Just because', description: 'No milestone needed. Flowers on an ordinary day can be the nicest kind of surprise.', idea: 'A loose, natural bunch is beautifully easy-going.', collection: 'wild-natural', message: 'No special reason. Just a little something to make you smile.' },
  { value: 'celebration', title: 'New chapters', label: 'Celebration', description: 'A new home, a happy announcement, a well-earned congratulations. Mark the moment with something full of possibility.', idea: 'Joyful colour makes a lovely way to say “well done”.', collection: 'bright-joyful', message: 'Here’s to your next chapter. Wishing you so many good things.' },
  { value: 'wedding', title: 'Weddings & gatherings', label: 'Wedding or gathering', description: 'Let flowers carry a little of the feeling through the day: soft table arrangements, a favourite palette, and details that belong together.', idea: 'Start with your setting, season, and colour story.', collection: 'soft-romantic', message: 'For a beautiful day and all the lovely days to follow.' },
];

export interface FAQ { question: string; answer: string }

export const flowerFAQs: FAQ[] = [
  { question: 'Will every bouquet look exactly like the photograph?', answer: 'The images show colour and style inspiration. Seasonal flowers, individual stems, and vase styling can vary. A flower brief is a useful way to explain the feeling you want.' },
  { question: 'How do I choose the right size?', answer: 'A little gesture suits a small surprise or thank-you. A classic bouquet feels fuller, while a generous bunch makes more of a statement. The prices on this preview are examples, not live quotes.' },
  { question: 'Can I ask for a particular colour?', answer: 'Absolutely include your colour preferences in your brief. Mention favourite shades, colours to avoid, and whether you prefer soft, bright, or more natural flowers.' },
  { question: 'What should I include with a flower enquiry?', answer: 'The occasion, preferred date, colour palette, approximate budget, and whether you have collection or delivery in mind. A few words about the recipient help too.' },
];

export const careFAQs: FAQ[] = [
  { question: 'How long should cut flowers last?', answer: 'Vase life depends on the flowers, their freshness, and the room. Different stems in a mixed bouquet fade at different times. Remove tired stems and refresh the water to enjoy the rest of the arrangement.' },
  { question: 'Should I use flower food?', answer: 'If you have flower food, use it according to the packet directions. Avoid guessing at household mixtures. Clean water, a clean vase, and a cool position are the best starting point.' },
  { question: 'Why are my tulips bending or getting taller?', answer: 'Tulips can continue to grow and bend towards the light after they are cut. A supportive vase and a cooler position help; a little movement is part of their character.' },
  { question: 'Where is the best place for my bouquet?', answer: 'Choose a cool place away from direct sun, radiators, and ripening fruit. Keep the water topped up, and move flowers away from strong heat or draughts.' },
];

export const contactFAQs: FAQ[] = [
  { question: 'Can I place an order through this website?', answer: 'This is a preview site with example shop details and prices. It does not take orders, bookings, or payments. You can explore the collections and copy a flower brief while the real shop information is being prepared.' },
  { question: 'Does the brief send an email?', answer: 'Creating or copying a brief does not send anything. It gives you a ready-to-use message to share when genuine contact details are available.' },
  { question: 'What about collection and local delivery?', answer: 'The Chester shop profile includes example collection and delivery information. Real availability, areas, fees, and timing will need confirming before ordering opens.' },
];
