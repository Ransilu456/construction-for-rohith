import { MetadataRoute } from 'next';
import { designsData } from "@/data/designs";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://modernhouse.lk'; 

    const staticPages = [
        '',
        '/about',
        '/services',
        '/designs',
        '/gallery',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    const designPages = designsData.map((design) => ({
        url: `${baseUrl}/designs/${design.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...staticPages, ...designPages];
}
