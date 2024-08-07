const knex = require("knex")({
    client: "pg",
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
    },
});



exports.addApplication = async (isAuthorized, isMic, games, languages, dateCreated, minAge, maxAge) =>
    knex("user_applications").insert({is_authorized: isAuthorized, is_mic: isMic, games: games, languages: languages, date_created: dateCreated, min_age: minAge, max_age: maxAge})

exports.getApplications = async (isAuthorized, languages, games, isMic, userAge) => 
    knex("user_applications").select()
    .where((filter) => {
        filter.where('is_authorized', isAuthorized)
        if(userAge) {
            filter.andWhere('min_age', '<=', userAge)
            filter.andWhere('max_age', '>=', userAge)
        }
        filter.andWhere('is_mic', isMic)
        if(languages.length > 0) {
            filter.whereRaw(`languages && ARRAY[${languages}]::integer[]`)
        }
        if(games.length > 0) {
            filter.whereRaw(`games && ARRAY[${games}]::integer[]`)
        }
      });


exports.getGames = async () => knex("games").select().orderBy('order');
exports.getLanguages = async () => knex("languages").select();