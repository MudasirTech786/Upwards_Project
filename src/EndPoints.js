// export const baseUrl = "http://localhost:1337";
export const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getAllNewsAPI = `${baseUrl}/api/news-collections?populate=*`;
export const getNewsByIdAPI = `${baseUrl}/api/news-collections/:id?populate=*`;
