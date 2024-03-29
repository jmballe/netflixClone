import axios from 'axios';

export const API = {
    baseUrl: 'https://api.themoviedb.org/3',
    apiKey: '?api_key=96e69c404cd0460e36c3a4dacacdd719',
    entity: {
        topRatedMovies: '/movie/top_rated',
        topRatedTv: '/tv/top_rated',
        popularMovies: '/movie/popular',
        popularTv: '/tv/popular',
    },
    language: {
        es: '&language=es-ES',
        en: '&language=en-US',
    },
    pagination: '&page=',
    imageUrl: 'https://image.tmdb.org/t/p',
    imageQuality: {
        posterSmall: '/w200',
        posterMedium: '/w300',
        posterLarge: '/w500',
        backdropSmall: '/w300',
        backdropMedium: '/w780',
        backdropLarge: '/w1280',
    },
}

export const apiEntityOptions = {
    topRatedMovies: "topRatedMovies",
    topRatedTv: "topRatedTv",
    popularMovies: "popularMovies",
    popularTv: "popularTv",
    // movieById: "movieById",
    // tvById: "tvById",
};

export const apiImageOptions = {
    posterSmall: "posterSmall",
    posterMedium: "posterMedium",
    posterLarge: "posterLarge",
    backdropSmall: "backdropSmall",
    backdropMedium: "backdropMedium",
    backdropLarge: "backdropLarge",
}

export const createUrl = {
    api: (entity, lang = 'es', page = 1) => {
        const url = `${API.baseUrl}${API.entity[entity]}${API.apiKey}${API.language[lang]}${API.pagination}${page}`;
        return url;
    },
    image: (path, quality) => {
        const url = `${API.imageUrl}${API.imageQuality[quality]}${path}`;
        return url;
    }
}

export const apiBuilder = {
    tryGet: async (entity, lang = 'en', page = 1) => {
        const url = createUrl.api(entity, lang, page);
        try {
            const res = await axios(url);
            return res.data.results;
        } catch (error) {
            return [];
        }
    },
    tryGetImage: async (path, quality = 'posterLarge') => {
        const url = createUrl.image(path, quality);
        try {
            const res = await axios(url);
            return res.data;
        } catch (error) {
            return [];
        }
    }
}