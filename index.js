const express = require('express')  // common js
require('dotenv').config()
// import express from "express"   //  module js

const app = express()

const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})    // -->>>> get request

app.get('/twitter', (req, res) => {
    res.send('Twitter Welcome You')
})

app.get('/login', (req, res) => {
    res.send("<h1>Please login </h1>")
})
app.get('/youtube', (req, res) => {
    res.send("<h1>Youtube </h1>")
})


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})