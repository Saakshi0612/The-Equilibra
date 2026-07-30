import vesselImage from '../assets/vessel.jpg';
import cufflinkImage from '../assets/cufflink.jpg';
import journelImage from '../assets/journel.jpg';
import dualBalanceImage from '../assets/dualBalance.jpg';
import diffuserImage from '../assets/diffuser.jpg';
import sculptureImage from '../assets/sculpture.jpg';
import braceletteImage from '../assets/Bracelette.jpg';

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
        name: 'The Modular Convertible Cufflinks',
        tagline: 'One cufflink, two identities.',
        price: 2000,
        priceDisplay: '₹2,000',
        materials: ['Brushed titanium', 'Neodymium magnetic lock', 'Silver titanium face', 'Obsidian / malachite face'],
        description:
            'Sleek, high-performance cufflinks featuring a magnetic, interchangeable face system that lets you swap styles without unbuttoning or changing your shirt cuffs. Precision-engineered from lightweight, scratch-resistant brushed titanium with an integrated neodymium magnetic lock for smooth, one-second swaps.',
        features: [
            'Day Face: minimalist brushed silver titanium for office & business settings',
            'Evening Face: polished obsidian or natural green malachite for black-tie events',
            'Low-profile fixed back slides through double cuffs and stays centered all day',
            'Tarnish-proof, sweat-resistant and hypoallergenic build',
        ],
        image: cufflinkImage,
    },
    {
        id: 2,
        name: '"The Diplomat" Decision Journal & Pen Set',
        tagline: 'Every option, weighed — on paper, not just in your head.',
        price: 4499,
        priceDisplay: '₹4,499',
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
        id: 3,
        name: '"The Equilibrium" Balancing Valet Tray',
        tagline: 'The scales of justice, made functional.',
        price: 7999,
        priceDisplay: '₹7,999',
        materials: ['Brass or walnut tiered trays', 'Marble counterweight base', 'Felt-lined compartments'],
        description:
            'A two-tiered valet tray literally shaped like the scales of justice — one side holds a watch, cufflinks and rings, the other holds keys or a phone. Cast in brass or walnut atop a marble counterweight base, this is the literal symbol of Libra made functional: a striking centerpiece for any entryway or dresser.',
        features: [
            'Two balanced tiers echo the scales-of-justice silhouette',
            'Marble base counterweights the tray for genuine physical balance',
            'Felt-lined compartments protect watches, rings and cufflinks from scratches',
            'Available in brass or walnut to match any decor',
        ],
        image: dualBalanceImage,
    },
    {
        id: 4,
        name: 'The "Libra" Perpetual Balance Kinetic Desk Sculpture',
        tagline: 'Executive high-end deskware / kinetic art.',
        price: 9499,
        priceDisplay: '₹8,500 – ₹10,000',
        materials: ['Machined brass outer disc', 'Hidden dense counterweight', 'Low-friction rounded pivot base', 'Solid brass focal sphere'],
        description:
            'A self-righting kinetic sculpture, engineered like a weighted roly-poly but designed as a premium desk collectible rather than a toy. Its center of gravity sits below the pivot point, so whenever you push, tilt or knock it over, gravity naturally pulls the heavy lower section back underneath center — returning the piece to perfect balance every time.',
        features: [
            'Brass outer disc forms the visible sculptural body',
            'A dense hidden counterweight inside the lowest section drives the self-righting motion',
            'Rounded low-friction base lets the sculpture tilt, rock and rotate smoothly',
            'Central brass sphere serves as a focal point and subtle stabilizing mass',
            'Rocks, spins or wobbles when disturbed, then settles back to its balanced resting position',
        ],
        image: sculptureImage,
    },
    {
        id: 5,
        name: 'The Meridian Reed Diffuser & Candle Duo',
        tagline: 'Balanced ambience, from sunrise stillness to sunset calm.',
        price: 5000,
        priceDisplay: '₹5,000',
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
        id: 6,
        name: 'The Daybreak / Nightcap Convertible Vessel',
        tagline: 'Coffee at sunrise, cocktails at sunset — Libra\'s daily equilibrium.',
        price: 3499,
        priceDisplay: '₹3,499',
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
        id: 7,
        name: 'The Equilibria Opal Collection',
        tagline: 'Balance. Beauty. You.',
        price: 11999,
        priceDisplay: '₹11,999',
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
];
