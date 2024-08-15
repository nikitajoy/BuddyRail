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



exports.addApplication = async (isAuthorized, isMic, games, languages, dateCreated, message, buddyMicrophone) =>
    knex("user_applications").insert({is_authorized: isAuthorized, is_mic: isMic, games: games, languages: languages, date_created: dateCreated, message: message, is_buddy_mic: buddyMicrophone})

exports.getApplications = async (isAuthorized, languages, games, isMic, buddyMicrophone, currentPage, maxApplications) => 
    knex("user_applications").select()
    .where((filter) => {
        filter.where('is_authorized', isAuthorized)
        if(languages && languages.length > 0) {
            filter.whereRaw(`languages && ARRAY[${languages}]::integer[]`)
        }
        if(games && games.length > 0) {
            filter.whereRaw(`games && ARRAY[${games}]::integer[]`)
        }
        if(isMic === 'true') {
            filter.whereIn('is_buddy_mic', ['Has microphone', 'Both'])
        } else {
            filter.whereIn('is_buddy_mic', ['No microphone', 'Both'])
        }
        if (buddyMicrophone === 'Has microphone') {
            filter.where('is_mic', true);
        } 
        if(buddyMicrophone === 'Both'){
            filter.whereIn('is_mic', [true,false]);
        }
        if(buddyMicrophone === 'No microphone') {
            filter.where('is_mic', false);
        }
      })
      .orderBy('id_application', 'desc').offset((currentPage - 1) * maxApplications).limit(Number(maxApplications))

exports.countApplications = async (isAuthorized, languages, games, isMic, buddyMicrophone, currentPage, maxApplications) => 
    knex("user_applications").select()
    .where((filter) => {
        filter.where('is_authorized', isAuthorized)
        if(languages && languages.length > 0) {
            filter.whereRaw(`languages && ARRAY[${languages}]::integer[]`)
        }
        if(games && games.length > 0) {
            filter.whereRaw(`games && ARRAY[${games}]::integer[]`)
        }
        if(isMic === 'true') {
            filter.whereIn('is_buddy_mic', ['Has microphone', 'Both'])
        } else {
            filter.whereIn('is_buddy_mic', ['No microphone', 'Both'])
        }
        if (buddyMicrophone === 'Has microphone') {
            filter.where('is_mic', true);
        } 
        if(buddyMicrophone === 'Both'){
            filter.whereIn('is_mic', [true,false]);
        }
        if(buddyMicrophone === 'No microphone') {
            filter.where('is_mic', false);
        }
        })
    .count('id_application', 'totalPages')
    .groupBy('id_application')


exports.getGames = async () => knex("games").select().orderBy('order');
exports.getLanguages = async () => knex("languages").select();


exports.addUser = async (id_discord,avatar, username) =>
    knex("users").insert({id_discord,avatar, username})

exports.getUser = async (idUser) =>
    knex("users").select().where('id_discord', idUser)

exports.updateUser = async (id_discord,avatar, username) =>
    knex("users").update({avatar, username}).where('id_discord', id_discord)
