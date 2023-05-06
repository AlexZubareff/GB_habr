module.exports = {
    secret: "secretcode",
    port: process.env.PORT || 7777,
    production: ((process.env.NODE_ENV === "production") ? true : false)
}