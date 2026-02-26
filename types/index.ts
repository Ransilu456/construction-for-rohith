export interface HouseDesign {
    slug: string;
    title: string;
    bedrooms: number;
    bathrooms: number;
    floors: number;
    area: string;
    style: string;
    priceRange: string;
    images: string[];
    description: string;
    features: string[];
    category: 'single-story' | 'two-story' | 'three-story' | 'villas';
    location: string;
    architect: string;
    timeline: string;
}


export interface Testimonial {
    name: string;
    location: string;
    msg: string;
    type: string;
    stars?: number;
}
