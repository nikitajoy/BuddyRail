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



exports.addApplication = async (isAuthorized, prefferedAge, isMic, games, languages, dateCreated) =>
    knex("public.user_applications").insert({is_authorized: isAuthorized, preffered_age: prefferedAge, is_mic: isMic, games: games, languages: languages, date_created: dateCreated})

exports.getApplications = async () =>
    knex("public.user_applications").select()
