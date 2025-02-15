const Movie = require('./models/Movie');

const resolvers = {
    Query: {
        movies: async () => {
            return await Movie.find()
        },
        movie: async (_, { id }) => {
            return await Movie.findById(id)
        }
    },
    Mutation: {
        addMovie: async (_, { name, director_name, production_house, release_date, rating }) => {
            try {
                const newMovie = new Movie({
                    name,
                    director_name,
                    production_house,
                    release_date,
                    rating
                });
                const movie = await newMovie.save();
                return movie;
            } catch (error) {
                console.error(" movie didn't save:", error);
                throw new Error("couldnt save movie ");
            }
        },
        updateMovie: async (_, { id, name, director_name, production_house, release_date, rating }) => {
            const movie = await Movie.findById(id);
            if (!movie) return null;

            if (name) movie.name = name;
            if (director_name) movie.director_name = director_name;
            if (production_house) movie.production_house = production_house;
            if (release_date) movie.release_date = release_date;
            if (rating) movie.rating = rating;

            return await movie.save();
        },
        deleteMovie: async (_, { id }) => {
            const movie = await Movie.findById(id);
            if (!movie) return null;

            await movie.remove();
            return movie; 
        }
    }
}

    module.exports = resolvers