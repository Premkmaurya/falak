export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Custom Furniture' | 'Space Planning' | 'Turnkey Projects' | 'Renovation';
  year: string;
  location: string;
  area: string;
  image: string;
  description: string;
  details: string[];
}

export const portfolioProjects: Project[] = [
  {
    id: 'kaizen-house',
    title: 'KAIZEN HOUSE',
    category: 'Residential',
    year: '2025',
    location: 'Kyoto, Japan',
    area: '420 m²',
    image: '/frames/watermark_removed_0d8bc9a5-3c22-4ce5-97ce-a9d9171353c4_010.png',
    description: 'A study in quiet luxury and Japanese-Nordic fusion. Overlooking the dense forests of Kyoto, this residence utilizes textured concrete, sandblasted cedar, and sliding shoji screens to achieve absolute spatial fluidness.',
    details: [
      'Complete architectural spatial restructuring',
      'Custom floor-to-ceiling brushed oak joinery',
      'Textured micro-cement bathroom modules',
      'Integrated shadow-gap ambient lighting tracks'
    ]
  },
  {
    id: 'monolith-penthouse',
    title: 'MONOLITH PENTHOUSE',
    category: 'Residential',
    year: '2026',
    location: 'Zurich, Switzerland',
    area: '310 m²',
    image: '/frames/watermark_removed_0d8bc9a5-3c22-4ce5-97ce-a9d9171353c4_020.png',
    description: 'An editorial vertical sanctuary floating high above the Zurich lake. Designed with a strict monochrome palette, it relies on large monolithic marble installations and dark acoustic wall panels to swallow the noise of the city.',
    details: [
      'Belgian limestone monolith fireplace integration',
      'Acoustic felt wall paneling with ash ribs',
      'Concealed frameless pivot entrance doors',
      'Bespoke titanium-finished kitchen island'
    ]
  },
  {
    id: 'aperture-gallery',
    title: 'THE APERTURE STUDIO',
    category: 'Commercial',
    year: '2025',
    location: 'Milano, Italy',
    area: '780 m²',
    image: '/frames/watermark_removed_0d8bc9a5-3c22-4ce5-97ce-a9d9171353c4_015.png',
    description: 'A premium, high-contrast photographic studio and art gallery space in Milan. Created with massive double-height concrete arches, the space acts as a raw, neutral frame for contemporary art exhibits.',
    details: [
      'Structural raw concrete cleaning and sealing',
      'Dimmable gallery-grade track lights (CRI 98)',
      'Asymmetric steel mezzanine construction',
      'Floating micro-top polished concrete floor'
    ]
  },
  {
    id: 'monolith-table',
    title: 'THE SERENE LOZENGE TABLE',
    category: 'Custom Furniture',
    year: '2026',
    location: 'Bespoke Production',
    area: '3.2m Length',
    image: '/frames/watermark_removed_0d8bc9a5-3c22-4ce5-97ce-a9d9171353c4_026.png',
    description: 'A custom dining table crafted strictly around the 9999px pill border radius of the design system. Hand-sculpted from solid open-pore European oak, it stands on two massive cylinder pill bases.',
    details: [
      'Solid open-pore black-lacquered European Oak',
      'Cylindrical base modules with steel reinforcement',
      'Flush-mounted bronze structural dowels',
      'Eco-certified low-sheen matte oil finish'
    ]
  },
  {
    id: 'residence-pavilion',
    title: 'THE STILL PAVILION',
    category: 'Renovation',
    year: '2025',
    location: 'Oslo, Norway',
    area: '560 m²',
    image: '/frames/watermark_removed_0d8bc9a5-3c22-4ce5-97ce-a9d9171353c4_030.png',
    description: 'A careful mid-century modern renovation project in Oslo. The layout was opened completely to let natural Norwegian light flood into deep corridors of raw limestone and patinated metal framing.',
    details: [
      'Restoration of original Douglas Fir timber ceilings',
      'Floor-to-ceiling structural steel glazed dividers',
      'Bespoke hand-applied plaster wall finishes',
      'Imported Portuguese travertine slab flooring'
    ]
  },
  {
    id: 'omega-office',
    title: 'OMEGA EXECUTIVE OFFICES',
    category: 'Commercial',
    year: '2026',
    location: 'London, United Kingdom',
    area: '1,100 m²',
    image: '/frames/watermark_removed_0d8bc9a5-3c22-4ce5-97ce-a9d9171353c4_035.png',
    description: 'A workspace reimagined as an intellectual, low-stimulus premium lounge. Emphasizes dark ash veneers, custom-molded badges, and luxurious acoustical engineering for ultimate executive tranquility.',
    details: [
      'State-of-the-art noise dampening sub-ceilings',
      'Semi-private glass meeting capsules',
      'Custom workspace desks with leather inlays',
      'Ergonomic architectural layout analysis'
    ]
  }
];
