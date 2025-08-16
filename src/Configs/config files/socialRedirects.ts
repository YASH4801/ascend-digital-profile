export interface SocialRedirectConfig {
    name: string;
    pathURL: string;
    alt: string;
}

export const socialRedirects: Record<string, Omit<SocialRedirectConfig, 'name'>> = {
    GitHub: {
        pathURL: "https://github.com/YASH4801",
        alt: "Visit my GitHub profile",
    },
    LinkedIn: {
        pathURL: "https://www.linkedin.com/in/yash4801/",
        alt: "Visit my LinkedIn profile",
    },
    Twitter: {
        pathURL: "https://x.com/yash_naran55770",
        alt: "Visit my Twitter profile",
    },
    Instagram: {
        pathURL: "https://www.instagram.com/thenameisyashn/#",
        alt: "Visit my Instagram profile",
    },
    Facebook: {
        pathURL: "https://facebook.com/your-username", //for future reference
        alt: "Visit my Facebook profile",
    },
};
