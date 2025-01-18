export interface simpleBlogCard {
    title: string;
    smallDescription: string;
    currentSlug: string;
    titleImage: any; // Adjust the type of titleImage if possible
    publishedAt: Date; // Assuming publishedAt is a Date
}
  
export interface fullBlog {
    currentSlug: string;
    title: string;
    content: any; // Adjust the type of content if possible
    titleImage: any; // Adjust the type of titleImage if possible
    publishedAt: Date; // Assuming publishedAt is a Date
}
