
import { Artwork } from '../types';

export const artworks: Artwork[] = [
  {
    id: '1',
    title: 'The Whispering Void',
    artist: 'Elena Vossen',
    location: 'Berlin, Germany',
    media: [
      { type: 'image', url: 'https://picsum.photos/id/1015/800/1200' },
      { type: 'image', url: 'https://picsum.photos/id/1016/800/1200' },
      { type: 'image', url: 'https://picsum.photos/id/1018/800/1200' }
    ],
    date: '2023-11-14',
    description: 'A haunting exploration of empty spaces and the silence that fills them. Vossen uses a monochromatic palette to evoke a sense of deep isolation and serene beauty.'
  },
  {
    id: '2',
    title: 'Chromatic Fugue',
    artist: 'Marcus Chen',
    location: 'Tokyo, Japan',
    media: [
      { type: 'image', url: 'https://picsum.photos/id/1040/800/800' },
      { type: 'video', url: '/' }
    ],
    date: '2024-02-28',
    description: 'An explosion of color and form, this digital masterpiece challenges the viewer to find order in chaos. The vibrant hues dance across the screen in a rhythmic composition.'
  },
  {
    id: '3',
    title: 'Urban Solitude',
    artist: 'Sarah Jenkins',
    location: 'New York, USA',
    media: [
      { type: 'image', url: 'https://picsum.photos/id/103/800/600' },
      { type: 'image', url: 'https://picsum.photos/id/104/800/600' }
    ],
    date: '2022-09-05',
    description: 'Capturing the quiet moments in a bustling city, Jenkins highlights the individual experience amidst the crowd. The play of light and shadow creates a poignant narrative.'
  },
  {
    id: '4',
    title: 'Neon Dreams',
    artist: 'Kaito',
    location: 'Seoul, South Korea',
    media: [
      { type: 'image', url: 'https://picsum.photos/id/1048/800/1000' }
    ],
    date: '2025-01-15',
    description: 'A vision of a future bathed in neon light, where technology and humanity intersect. The sharp contrasts and vivid colors reflect the energy of a high-tech society.'
  },
  {
    id: '5',
    title: 'Nature\'s Algorithm',
    artist: 'Dr. A. Silva',
    location: 'Sao Paulo, Brazil',
    media: [
        { type: 'image', url: 'https://picsum.photos/id/106/800/800' },
        { type: 'image', url: 'https://picsum.photos/id/110/800/800' },
        { type: 'image', url: 'https://picsum.photos/id/116/800/800' }
    ],
    date: '2023-06-21',
    description: 'Using algorithms to mimic natural growth patterns, Dr. Silva creates organic forms that are both familiar and alien. A study of mathematical beauty in nature.'
  },
  {
    id: '6',
    title: 'Forgotten Structures',
    artist: 'L. Architect',
    location: 'London, UK',
    media: [
        { type: 'image', url: 'https://picsum.photos/id/124/800/1200' }
    ],
    date: '2021-12-10',
    description: 'The raw beauty of concrete and steel is exposed in this series. Focusing on abandoned infrastructure, the artist finds dignity in decay.'
  },
  {
    id: '7',
    title: 'Oceanic Memory',
    artist: 'Marina B.',
    location: 'Reykjavik, Iceland',
    media: [
        { type: 'video', url: '/video/weibo.mp4' },
         { type: 'image', url: 'https://picsum.photos/id/190/800/600' }
    ],
    date: '2024-03-30',
    description: 'Fluid dynamics and light interaction create a mesmerizing seascape. The piece ebbs and flows, evoking the timeless rhythm of the ocean.'
  },
  {
    id: '8',
    title: 'Mountain of Glass',
    artist: 'O. Range',
    location: 'Denver, USA',
    media: [
        { type: 'image', url: '/img/monalisa.jpg' }
    ],
    date: '2022-08-18',
    description: 'Sharp angles and refractive surfaces redefine the landscape genre. The mountain is deconstructed into a crystalline structure of light and geometry.'
  },
  {
    id: '9',
    title: 'Morning Haze',
    artist: 'D. Light',
    location: 'Paris, France',
    media: [
        { type: 'image', url: 'https://picsum.photos/id/220/800/1000' },
        { type: 'image', url: 'https://picsum.photos/id/221/800/1000' }
    ],
    date: '2023-04-02',
    description: 'Soft focus and gentle gradients capture the fleeting moment of sunrise. The artwork invites the viewer to pause and breathe in the tranquil atmosphere.'
  },
  {
    id: '10',
    title: 'Digital Horizon',
    artist: 'Pixel Master',
    location: 'San Francisco, USA',
    media: [
        { type: 'image', url: 'https://picsum.photos/id/250/800/600' }
    ],
    date: '2024-05-12',
    description: 'A digital painting that explores the boundary between the physical and virtual worlds. The horizon line blurs, suggesting infinite possibilities.'
  },
  {
    id: '11',
    title: 'Rust and Bone',
    artist: 'Sarah K.',
    location: 'Detroit, USA',
    media: [
        { type: 'image', url: 'https://picsum.photos/id/305/800/800' }
    ],
    date: '2020-11-01',
    description: 'A gritty look at industrial decay and the resilience of life. The textures of rust and bone are juxtaposed to create a powerful visual metaphor.'
  },
  {
    id: '12',
    title: 'Silent Forest',
    artist: 'Green Leaf',
    location: 'Vancouver, Canada',
    media: [
        { type: 'image', url: 'https://picsum.photos/id/319/800/1200' }
    ],
    date: '2021-07-20',
    description: 'Deep in the ancient woods, silence reigns supreme. This photograph captures the dappled light filtering through the canopy, illuminating the mossy floor.'
  }
];
