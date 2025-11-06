export type Item = {
  id: string;
  name: string;
  aliases?: string[];
  source?: string;
  rarity?: string;
  costText?: string;     // e.g., 1.2B
  cost?: number;         // in dollars
  incomeText?: string;   // e.g., 7.5M / s
  incomePerSecond?: number; // numeric per second
  dropRateText?: string; // e.g., 0.25%
  dropRate?: number;     // numeric fraction, e.g., 0.0025
  lastVerified?: string;
};

// helpers
const M = 1_000_000;
const B = 1_000_000_000;

function m(v: number) { return v * M; }
function b(v: number) { return v * B; }

// ROI seconds; undefined if missing
export function roiSeconds(it: Item): number | undefined {
  if (!it.cost || !it.incomePerSecond || it.incomePerSecond <= 0) return undefined;
  return it.cost / it.incomePerSecond;
}

export function roiHuman(seconds?: number): string {
  if (!seconds || !Number.isFinite(seconds)) return 'N/A';
  if (seconds < 60) return `${seconds.toFixed(0)} s`;
  const m = Math.floor(seconds / 60);
  if (m < 60) return `${m} min`;
  const h = Math.floor(m / 60);
  const remM = m % 60;
  if (h < 48) return `${h} h ${remM} m`;
  const d = Math.floor(h / 24);
  const remH = h % 24;
  return `${d} d ${remH} h`;
}

const today = new Date().toISOString().slice(0, 10);

export function slugify(s: any): string {
  const v = (s ?? '').toString();
  return v.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

// Known drop rates (fraction)
const dropRates: Record<string, number> = {
  '67': 0.0025,
  'Guerriro Digitale': 0.0075,
  'La Grande Combinasion': 0.01,
  'Los Spyderinis': 0.03,
  'Blackhole Goat': 0.05,
  'Crabbo': 0.10,
  'Limonetta': 0.10,
  'Alessio': 0.20,
  'Los Bombinitos': 0.30,
  'Carloo': 0.30,
};

function dr(name: string): {dropRate?: number, dropRateText?: string} {
  if (dropRates[name] !== undefined) {
    const p = dropRates[name];
    return { dropRate: p, dropRateText: `${(p*100).toFixed(p*100 < 1 ? 2 : 0)}%` };
  }
  return {};
}

function item(partial: Omit<Item, 'id' | 'lastVerified' | 'dropRate' | 'dropRateText'> & { id?: string }): Item {
  const n = partial.name;
  const id = (partial.id || n)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  const rate = dr(n);
  return {
    id,
    name: n,
    aliases: partial.aliases,
    source: partial.source,
    rarity: partial.rarity,
    costText: partial.costText,
    cost: partial.cost,
    incomeText: partial.incomeText,
    incomePerSecond: partial.incomePerSecond,
    dropRate: rate.dropRate,
    dropRateText: rate.dropRateText,
    lastVerified: today,
  };
}

export const items: Item[] = [
  item({ name: 'Las Sis', costText: '25M', cost: m(25), incomeText: '17.5M / s', incomePerSecond: m(17.5) }),
  item({ name: 'La Vacca Staturno Saturnita', aliases: ['La Vacca Saturno Saturnita'], costText: '50M', cost: m(50), incomeText: '250k / s', incomePerSecond: 250_000 }),
  item({ name: 'Blackhole Goat', costText: '75M', cost: m(75), incomeText: '400k / s', incomePerSecond: 400_000, source: 'Admin Lucky Blocks', rarity: 'Secret' }),
  item({ name: 'Bisonte Giuppitere', costText: '75M', cost: m(75), incomeText: '300k / s', incomePerSecond: 300_000 }),
  item({ name: 'Chachechi', costText: '85M', cost: m(85), incomeText: '400k / s', incomePerSecond: 400_000 }),
  item({ name: 'Trenostruzzo Turbo 4000', costText: '100M', cost: m(100), incomeText: '310k / s', incomePerSecond: 310_000 }),
  item({ name: 'Los Matteos', costText: '100M', cost: m(100), incomeText: '300k / s', incomePerSecond: 300_000 }),
  item({ name: 'Chimpanzini Spiderini', aliases: ['Chimpanzini_spiderini'], costText: '100M', cost: m(100), incomeText: '325k / s', incomePerSecond: 325_000 }),
  item({ name: 'Karkerkar Kurkur', costText: '100M', cost: m(100), incomeText: '300k / s', incomePerSecond: 300_000 }),
  item({ name: 'Sammyni Spyderini', costText: '100M', cost: m(100), incomeText: '350k / s', incomePerSecond: 350_000 }),
  item({ name: 'Guerriro Digitale', costText: '120M', cost: m(120), incomeText: '550k / s', incomePerSecond: 550_000, source: 'Admin Lucky Blocks', rarity: 'Secret' }),
  item({ name: 'Extinct Tralalero', costText: '125M', cost: m(125), incomeText: '450k / s', incomePerSecond: 450_000 }),
  item({ name: 'Fragola La La La', costText: '125M', cost: m(125), incomeText: '450k / s', incomePerSecond: 450_000 }),
  item({ name: 'Extinct Matteo', costText: '140M', cost: m(140), incomeText: '625k / s', incomePerSecond: 625_000 }),
  item({ name: 'Dul Dul Dul', costText: '150M', cost: m(150), incomeText: '375k / s', incomePerSecond: 375_000 }),
  item({ name: 'Los Tralaleritos', aliases: ['Los Tralaleirtos'], costText: '150M', cost: m(150), incomeText: '500k / s', incomePerSecond: 500_000 }),
  item({ name: 'Las Tralaleritas', costText: '150M', cost: m(150), incomeText: '650k / s', incomePerSecond: 650_000 }),
  item({ name: 'La Karkerkar Combinasion', costText: '160M', cost: m(160), incomeText: '750k / s', incomePerSecond: 750_000 }),
  item({ name: 'Las Vaquitas Saturnitas', costText: '160M', cost: m(160), incomeText: '750k / s', incomePerSecond: 750_000 }),
  item({ name: 'Job Job Job Sahur', costText: '175M', cost: m(175), incomeText: '700k / s', incomePerSecond: 700_000 }),
  item({ name: 'Graipuss Medussi', costText: '250M', cost: m(250), incomeText: '1M / s', incomePerSecond: m(1) }),
  item({ name: 'Los Spyderinis', costText: '250M', cost: m(250), incomeText: '450k / s', incomePerSecond: 450_000, source: 'Admin Lucky Blocks', rarity: 'Secret' }),
  item({ name: 'Nooo My Hotspot', costText: '500M', cost: m(500), incomeText: '1.5M / s', incomePerSecond: m(1.5) }),
  item({ name: 'Tortuginni Dragonfruitini', aliases: ['Torrtuginni Dragonfrutini'], costText: '500M', cost: m(500), incomeText: '350k / s', incomePerSecond: 350_000 }),
  item({ name: 'Pot Hotspot', costText: '500M', cost: m(500), incomeText: '2.5M / s', incomePerSecond: m(2.5) }),
  item({ name: 'La Sahur Combinasion', costText: '550M', cost: m(550), incomeText: '2M / s', incomePerSecond: m(2) }),
  item({ name: 'Quesadilla Crocodila', costText: '700M', cost: m(700), incomeText: '3M / s', incomePerSecond: m(3) }),
  item({ name: 'La Grande Combinasion', costText: '1B', cost: b(1), incomeText: '10M / s', incomePerSecond: m(10), source: 'Admin Lucky Blocks', rarity: 'Secret' }),
  item({ name: 'Nuclearo Dinossauro', costText: '2.5B', cost: b(2.5), incomeText: '15M / s', incomePerSecond: m(15) }),
  item({ name: 'La Extinct Grande', costText: '3.2B', cost: b(3.2), incomeText: '23.5M / s', incomePerSecond: m(23.5) }),
  item({ name: 'Garama and Madundung', costText: '10B', cost: b(10), incomeText: '50M / s', incomePerSecond: m(50) }),
  item({ name: 'Chicleteira Bicicleteira', costText: '750M', cost: m(750), incomeText: '3.5M / s', incomePerSecond: m(3.5) }),
  item({ name: 'Secret Lucky Block', costText: '750M', cost: m(750) }),
  item({ name: 'Spaghetti Tualetti', costText: '750M', cost: m(750), incomeText: '60M / s', incomePerSecond: m(60) }),
  item({ name: 'Agarrini la Palini', costText: '80M', cost: m(80), incomeText: '425k / s', incomePerSecond: 425_000 }),
  item({ name: 'Los Noo My Hotspotsitos', costText: '1B', cost: b(1), incomeText: '5M / s', incomePerSecond: m(5) }),
  item({ name: '67', aliases: ['67 Brainrot'], costText: '1.2B', cost: b(1.2), incomeText: '7.5M / s', incomePerSecond: m(7.5), source: 'Admin Lucky Blocks', rarity: 'Secret' }),
  item({ name: 'Los Chicleteiras', costText: '1.2B', cost: b(1.2), incomeText: '7M / s', incomePerSecond: m(7) }),
  item({ name: 'Los Combinasionas', costText: '2B', cost: b(2), incomeText: '15M / s', incomePerSecond: m(15) }),
  item({ name: 'Los Bros', costText: '2.6B', cost: b(2.6), incomeText: '24M / s', incomePerSecond: m(24) }),
  item({ name: 'Celularcini Viciosini', costText: '2.7B', cost: b(2.7), incomeText: '22.5M / s', incomePerSecond: m(22.5) }),
  item({ name: 'Los Hotspotsitos', costText: '3B', cost: b(3), incomeText: '20M / s', incomePerSecond: m(20) }),
  item({ name: 'Tralaledon', costText: '3B', cost: b(3), incomeText: '27.5M / s', incomePerSecond: m(27.5) }),
  item({ name: 'Esok Sekolah', costText: '3.5B', cost: b(3.5), incomeText: '30M / s', incomePerSecond: m(30) }),
  item({ name: 'Ketupat Kepat', costText: '5B', cost: b(5), incomeText: '35M / s', incomePerSecond: m(35) }),
  item({ name: 'La Supreme Combinasion', costText: '7B', cost: b(7), incomeText: '40M / s', incomePerSecond: m(40) }),
  item({ name: 'Ketchuru and Musturu', costText: '7.5B', cost: b(7.5), incomeText: '42.5M / s', incomePerSecond: m(42.5) }),
  item({ name: 'Dragon Cannelloni', costText: '125B', cost: b(125), incomeText: '100M / s', incomePerSecond: m(100) }),
  item({ name: 'Strawberry Elephant', costText: '500B', cost: b(500), incomeText: '250M / s', incomePerSecond: m(250) }),
];

export function findBySlug(slug: string): Item | undefined {
  const t = slugify(slug);
  return items.find(i => slugify(i.id) === t || slugify(i.name) === t || (i.aliases || []).some(a => slugify(a) === t));
}




