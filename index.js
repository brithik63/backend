const express = require('express')  // common js
require('dotenv').config()
// import express from "express"   //  module js

const app = express()

const port = 4000

const githubData = {
    "login": "brithik63",
    "id": 79968406,
    "node_id": "MDQ6VXNlcjc5OTY4NDA2",
    "avatar_url": "https://avatars.githubusercontent.com/u/79968406?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/brithik63",
    "html_url": "https://github.com/brithik63",
    "followers_url": "https://api.github.com/users/brithik63/followers",
    "following_url": "https://api.github.com/users/brithik63/following{/other_user}",
    "gists_url": "https://api.github.com/users/brithik63/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/brithik63/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/brithik63/subscriptions",
    "organizations_url": "https://api.github.com/users/brithik63/orgs",
    "repos_url": "https://api.github.com/users/brithik63/repos",
    "events_url": "https://api.github.com/users/brithik63/events{/privacy}",
    "received_events_url": "https://api.github.com/users/brithik63/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 4,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2021-03-03T08:32:01Z",
    "updated_at": "2024-02-22T06:07:51Z"
}

app.get('/github', (req, res) => {
    res.json(githubData)
})

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