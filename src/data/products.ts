import vesselImage from '../assets/vessel.jpg';
import journelImage from '../assets/journel.jpg';
import diffuserImage from '../assets/diffuser.jpg';
import braceletteImage from '../assets/Bracelette.jpg';
import walletImage from '../assets/wallet.jpg';
import watchImage from '../assets/watch.jpg';
import travelCaseImage from '../assets/TravelCase.jpg';
import bagImage from '../assets/bag.jpg';
import scentPenImage from '../assets/scentPen.jpg';

export interface Product {
    id: number;
    name: string;
    tagline: string;
    price: number;
    priceDisplay: string;
    materials: string[];
    description: string;
    features: string[];
    image: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: '"The Diplomat" Decision Journal & Pen Set',
        tagline: 'Every option, weighed — on paper, not just in your head.',
        price: 1499,
        priceDisplay: '₹1,499',
        materials: ['Full-grain leather cover', 'Pre-formatted pros/cons pages', 'Brass corner hardware', 'Rollerball or fountain pen'],
        description:
            'Libras are famous for weighing every option before choosing. This leather-bound journal comes pre-formatted with dedicated pros/cons columns on every page, paired with a fountain or rollerball pen — turning that signature personality trait into a genuinely useful daily object rather than a purely decorative one. It solves a real behavioral quirk instead of just symbolizing it.',
        features: [
            'Every page pre-ruled with pros/cons decision columns',
            'Full-grain leather cover ages beautifully with daily use',
            'Matching fountain or rollerball pen included in a dedicated cover loop',
            'Lay-flat binding for effortless writing at a desk or on the go',
        ],
        image: journelImage,
    },
    {
        id: 2,
        name: 'The Meridian Reed Diffuser & Candle Duo',
        tagline: 'Balanced ambience, from sunrise stillness to sunset calm.',
        price: 1899,
        priceDisplay: '₹1,899',
        materials: ['Amber glass vessel', 'Natural soy wax', 'Rattan reed sticks', 'Brushed brass lid'],
        description:
            'A dual-format ritual object for the Libra home: a slow-burning soy candle paired with a rattan reed diffuser in the same amber vessel, so your space always carries a calibrated, botanical scent — whether lit for focus in the morning or glowing for unwinding at night.',
        features: [
            'Soy candle and reed diffuser share one refillable amber vessel',
            'Custom sandalwood-and-bergamot blend tuned for balance and calm',
            'Brushed brass lid doubles as a coaster when the candle is lit',
            'Clean-burn cotton wick with a 45-hour burn time',
        ],
        image: diffuserImage,
    },
    {
        id: 3,
        name: 'The Daybreak / Nightcap Convertible Vessel',
        tagline: 'Coffee at sunrise, cocktails at sunset — Libra\'s daily equilibrium.',
        price: 1999,
        priceDisplay: '₹1,999',
        materials: ['Double-wall stainless steel', 'Cork-insulated coffee lid', 'Magnetic cocktail shaker cap'],
        description:
            'Libra lives for the social swing between a calm morning and a lively night. This convertible vessel is a double-walled stainless tumbler by day — keeping your flat white or espresso hot — and locks into a precision cocktail shaker by night, ready for an espresso martini or a quick evening mix.',
        features: [
            'Cork-insulated lid keeps coffee hot for up to 4 hours',
            'Magnetic shaker cap snaps on in seconds for evening cocktails',
            'Built-in strainer mesh for smooth pours, hot or shaken',
            'Mirror-polished steel body resists condensation and fingerprints',
        ],
        image: vesselImage,
    },
    {
        id: 4,
        name: 'The Equilibria Opal Collection',
        tagline: 'Balance. Beauty. You.',
        price: 9999,
        priceDisplay: '₹9,999',
        materials: ['Natural opal stone', 'Gold, silver or black finish', 'Optional custom engraving'],
        description:
            'A signature piece designed around individuality, balance, and timeless expression. The Equilibria Opal Collection transforms the natural beauty of opal into jewellery made uniquely yours — choose from a custom bracelet, ring, or pendant, each crafted to reflect your personal style while carrying the quiet elegance and harmony inspired by Libra. Every opal reveals its own play of colour, making no two pieces exactly alike.',
        features: [
            'Choose your opal and colour character',
            'Select a gold, silver, or black finish',
            'Personalise with an engraving or meaningful symbol',
            'Available as a bracelet, ring, or pendant',
            'Designed in distinctive styles for men and women',
        ],
        image: braceletteImage,
    },
    {
        id: 5,
        name: 'The Equilibrium Card Holder',
        tagline: 'Designed in symmetry. Built for balance.',
        price: 2599,
        priceDisplay: '₹2,599',
        materials: ['Black leather', 'Brushed stainless steel', 'Magnetic closure'],
        description:
            'A slim, magnetic card holder made from black leather and brushed stainless steel. It opens symmetrically from the center, with equal card compartments on both sides — useful, premium, gender-neutral, and effortless to give as a gift.',
        features: [
            'Holds 8–10 cards with smart, effortless-access storage',
            'Magnetic closure snaps shut securely every time',
            'Ultra-slim profile fits anywhere, feels like nothing',
            'Integrated RFID blocking keeps your data protected',
            'Available in Black & Brass, Gunmetal, or Silver, with premium gift packaging',
        ],
        image: walletImage,
    },
    {
        id: 6,
        name: 'The Equilibria Meridian Watch',
        tagline: 'Time in perfect balance. Designed for clarity.',
        price: 9999,
        priceDisplay: '₹9,999',
        materials: ['Stainless steel case', 'Sapphire crystal', 'Opal balance-weight detail', 'Interchangeable leather straps'],
        description:
            'A minimalist watch with a perfectly symmetrical dial, a floating balance-bar detail, and interchangeable straps. A subtle opal inlay sits at the center, echoing the natural equilibrium a watch represents between time, work, and life.',
        features: [
            'Japanese quartz movement for everyday precision',
            'Signature balance weight detail moves with you and always returns to center',
            'Scratch-resistant sapphire crystal, crystal clear',
            '5ATM water resistant, built for everyday moments',
            'Interchangeable straps across four styles, with premium packaging',
        ],
        image: watchImage,
    },
    {
        id: 7,
        name: 'The Diplomat Travel Case',
        tagline: 'A compact travel organiser for your essentials.',
        price: 2999,
        priceDisplay: '₹2,999',
        materials: ['Matte black leather', 'Warm brass hardware', 'Deep emerald suede interior'],
        description:
            'A compact leather travel organiser with separate, balanced compartments for a watch, rings, cufflinks, cards, and small essentials. Matte black leather and warm brass hardware pair with a deep emerald interior accent, designed for balance and made for wherever life takes you.',
        features: [
            'Compact and portable — fits perfectly in a bag without compromising space',
            'Smart compartments thoughtfully designed for watch, rings, cufflinks, and cards',
            'Secure, soft interior protects everything it carries',
            'Premium brass hardware and signature emerald suede finish',
            'Travel-ready design built for milestone gifts',
        ],
        image: travelCaseImage,
    },
    {
        id: 8,
        name: 'The Equilibria "Twofold" Bag',
        tagline: 'Dual by design. One, yet complete.',
        price: 3499,
        priceDisplay: '₹3,499',
        materials: ['Structured premium leather', 'Magnetic balance closure', 'Gold-tone hardware'],
        description:
            'A structured luxury crossbody bag that transforms into a clutch by removing its strap. The interior is divided into two equal, magnetic compartments — one for essentials and one for personal items — changing form without ever looking like a convertible product.',
        features: [
            'Duality: two equal compartments, one perfect balance',
            'Adaptability: switches from crossbody to clutch in a second',
            'Smart magnetic closure keeps everything secure',
            'Minimal luxury design with clean lines and premium materials',
            'Available in Obsidian Black, Emerald Green, and Sand Beige',
        ],
        image: bagImage,
    },
    {
        id: 9,
        name: 'The Equinox Scent Pendant',
        tagline: 'Two essences. One you.',
        price: 9499,
        priceDisplay: '₹9,499',
        materials: ['Stainless steel with PVD gold chain', 'Dual premium-glass scent chambers', 'Magnetic lock'],
        description:
            'Inspired by Libra\'s duality, the Equinox Scent Pendant holds two complementary fragrances in dual sealed chambers. Rotate the central ring fully to one side for Scent 1, the other for Scent 2, or rest it at center to blend both in perfect harmony.',
        features: [
            'Dual chamber technology with infinite blend possibilities',
            'Rotate to choose one scent or blend both at the center',
            'Compatible with premium perfume oils and fragrance blends',
            'Leak-proof, secure, travel-friendly design',
            'Personalise with engraving, presented in a signature gift box',
        ],
        image: scentPenImage,
    },
];
