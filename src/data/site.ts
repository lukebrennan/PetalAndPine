import type { ImageMetadata } from 'astro';
import softImage from '../assets/soft.png';
import brightImage from '../assets/bright.png';
import wildImage from '../assets/wild.png';

export const site = {
  name: 'Petal & Pine',
  tagline: 'Florist in Chester',
  description: 'Petal & Pine is an independent florist in Chester making loose, garden-style bouquets in three palettes, from £30. Plan a bouquet online and send us the brief.',
  introduction: 'Loose, garden-style bouquets made up by hand in three palettes, from £30. Tell us who they are for and we will put something together.',
  story: 'We started Petal & Pine because we wanted bouquets that look like they were picked from a garden rather than ordered from a catalogue. Everything is made up by hand on the day, with whatever is good that week.',
};

export const shop = {
  isDemo: true,
  town: 'Chester',
  address: ['12 Petal Lane', 'Chester CH1'],
  email: 'hello@petalandpine.example',
  phone: '01632 960214',
  instagram: '',
  hours: [
    { days: 'Tuesday to Friday', time: '9am – 5.30pm' },
    { days: 'Saturday', time: '9am – 4.30pm' },
    { days: 'Sunday and Monday', time: 'Closed' },
  ],
  delivery: 'Delivery within Chester from £5. Collection from the shop is free.',
  demoNote: 'This is a demonstration website. The address, phone number, email, opening hours and prices are placeholders, and nothing on this site takes an order or payment.',
};

export const navigation = [
  { label: 'Bouquets', slug: 'flowers' },
  { label: 'Occasions', slug: 'occasions' },
  { label: 'About', slug: 'our-story' },
  { label: 'Flower care', slug: 'flower-care' },
  { label: 'Contact', slug: 'contact' },
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
    slug: 'soft-romantic', name: 'Blush & cream', palette: 'rose', image: softImage,
    description: 'Pale pinks, cream and mauve with grey-green eucalyptus.',
    story: 'The gentlest of the three. Garden roses and ranunculus in pale pink and cream, with astrantia, waxflower and eucalyptus to loosen it up. It reads as soft rather than formal.',
    alt: 'A hand-tied bouquet of blush and cream garden roses, ranunculus and eucalyptus in ivory paper.',
    price: 35,
    colours: [{ name: 'Blush', hex: '#d3a4a1' }, { name: 'Cream', hex: '#efe5cc' }, { name: 'Mauve', hex: '#ae8c99' }, { name: 'Eucalyptus', hex: '#809481' }],
    feeling: 'Quiet, warm and a bit romantic.',
    moments: ['Anniversaries', 'Thank-yous', 'New babies', 'Weddings'],
    stems: 'Typically garden roses, ranunculus, astrantia, waxflower, lisianthus and eucalyptus. Stems change with the season.',
    note: 'Works well with a handwritten card. If there is a shade you want more of, say so in the brief.',
  },
  {
    slug: 'bright-joyful', name: 'Peach & coral', palette: 'peach', image: brightImage,
    description: 'Coral dahlias, peach tulips and butter-yellow roses.',
    story: 'The cheerful one. Coral and peach dahlias, tulips and garden roses, with yellow for warmth and plenty of green. It is the bouquet most people choose for a birthday.',
    alt: 'A bouquet of coral dahlias, peach tulips and yellow garden roses wrapped in cream paper.',
    price: 30,
    colours: [{ name: 'Coral', hex: '#ca7965' }, { name: 'Peach', hex: '#e1b08b' }, { name: 'Butter', hex: '#e6cd85' }, { name: 'Leaf', hex: '#788c65' }],
    feeling: 'Warm, bright and easy to like.',
    moments: ['Birthdays', 'Congratulations', 'Get-well-soon', 'Just because'],
    stems: 'Typically dahlias, tulips, garden roses, stocks and ammi, with seasonal foliage. Dahlias run from late summer into autumn; in spring we lean on tulips and ranunculus.',
    note: 'If they have a favourite colour, tell us and we will build around it.',
  },
  {
    slug: 'wild-natural', name: 'White & green', palette: 'sage', image: wildImage,
    description: 'White cosmos, cream roses and lots of loose greenery.',
    story: 'The loosest of the three. White cosmos, cream roses and ammi with a lot of foliage and air between the stems, so it looks freshly picked rather than arranged. Good in a jug on a kitchen table.',
    alt: 'White cosmos, cream roses and loose greenery in a mossy green ceramic vase.',
    price: 32,
    colours: [{ name: 'White', hex: '#f1ebd9' }, { name: 'Sage', hex: '#a7b59a' }, { name: 'Olive', hex: '#7d8b5e' }, { name: 'Forest', hex: '#3f5d48' }],
    feeling: 'Natural, calm and unfussy.',
    moments: ['Sympathy', 'New homes', 'Flowers for the house', 'Weddings'],
    stems: 'Typically cosmos, garden roses, ammi, nigella, scabious and mixed foliage. The vase in the photograph is not included.',
    note: 'A good choice when you are not sure what they like. Nobody dislikes white and green.',
  },
];

export const sizes = [
  { value: 'little', label: 'Posy', extra: 0, description: 'A small hand-tied bunch. Fits a jug or a jam jar.' },
  { value: 'classic', label: 'Bouquet', extra: 15, description: 'Our standard size. Fills a normal vase.' },
  { value: 'generous', label: 'Large bouquet', extra: 30, description: 'Roughly twice the posy. For when it needs to make an entrance.' },
];

export const occasions = [
  { value: 'birthday', title: 'Birthdays', label: 'Birthday', description: 'Go with a colour they like, or with Peach & coral if you are not sure. We can write the card for you.', idea: 'Most people pick Peach & coral.', collection: 'bright-joyful', message: 'Happy birthday. Here’s to a good year.' },
  { value: 'thank-you', title: 'Thank-yous', label: 'Thank you', description: 'For the neighbour who took the parcels in, the teacher, the person who helped you move. A posy does the job without making a fuss of it.', idea: 'Blush & cream, usually as a posy.', collection: 'soft-romantic', message: 'Thank you. It meant a lot.' },
  { value: 'just-because', title: 'No reason at all', label: 'Just because', description: 'Flowers on an ordinary Tuesday land better than flowers on a birthday. A loose white and green bunch is the easiest one to give.', idea: 'White & green, any size.', collection: 'wild-natural', message: 'No reason. Just thought of you.' },
  { value: 'celebration', title: 'New homes and good news', label: 'Celebration', description: 'A new house, a new job, an exam passed. Something bright and bigger than usual.', idea: 'Peach & coral, as a large bouquet.', collection: 'bright-joyful', message: 'Congratulations. Really pleased for you.' },
  { value: 'sympathy', title: 'Sympathy', label: 'Sympathy', description: 'Something calm and natural, nothing loud. White & green in a jug that can be kept is what we usually suggest.', idea: 'White & green, with a short card.', collection: 'wild-natural', message: 'Thinking of you all.' },
  { value: 'wedding', title: 'Weddings and gatherings', label: 'Wedding or event', description: 'Bouquets, buttonholes and table jugs in whichever palette suits the day. Send us the date, the venue and the colours and we will come back with a quote.', idea: 'Start with the date and the venue.', collection: 'soft-romantic', message: 'With love on your wedding day.' },
];

export interface FAQ { question: string; answer: string }

export const flowerFAQs: FAQ[] = [
  { question: 'Will my bouquet look exactly like the photo?', answer: 'No. The photos show the palette and the style. The actual stems depend on what is good that week, so two Blush & cream bouquets a month apart will not be identical. The colours and the feel will be the same.' },
  { question: 'Which size should I get?', answer: 'A posy is a small bunch for a jug or a windowsill. The bouquet is the size most people buy for a gift. The large bouquet is for when you want it to be noticed from across the room.' },
  { question: 'Can I ask for particular colours or flowers?', answer: 'Yes. Put it in the brief. Tell us anything to avoid too, such as lilies for a house with cats, or strong scent.' },
  { question: 'What do you need from me?', answer: 'The occasion, the date, which palette and size, and whether you want to collect or have it delivered. A line about who it is for helps us get it right.' },
];

export const careFAQs: FAQ[] = [
  { question: 'How long will they last?', answer: 'Usually five to seven days for a mixed bouquet, longer for some stems and shorter for others. Change the water every couple of days and take out anything that has gone over; the rest will keep going.' },
  { question: 'Should I use the flower food?', answer: 'Yes, if there is a sachet in the wrap, follow the instructions on it. Do not improvise with sugar or bleach. Clean water in a clean vase matters more than anything else.' },
  { question: 'Why are my tulips drooping and getting taller?', answer: 'Tulips keep growing after they are cut and bend towards the light. It is normal. A tall vase helps, and so does keeping them somewhere cool.' },
  { question: 'Where should I put them?', answer: 'Somewhere cool, out of direct sun and away from radiators and the fruit bowl. Ripening fruit gives off ethylene, which makes flowers go over faster.' },
];

export const contactFAQs: FAQ[] = [
  { question: 'Can I order on this website?', answer: 'Not yet. Build a brief here, copy it, and send it to us by email or message. We will confirm the price and the date before anything is made.' },
  { question: 'How far do you deliver?', answer: 'Within Chester and the villages just outside it. Tell us the postcode in the brief and we will confirm.' },
  { question: 'How much notice do you need?', answer: 'A day for a bouquet is fine; same-day is sometimes possible if you ask in the morning. For weddings and events, a few weeks.' },
];
