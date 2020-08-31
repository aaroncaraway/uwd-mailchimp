## MAILCHIMP PARTY


1. mkdir duh
2. touch app.js signup.html success.html failure.html
3. npm init
4. npm i express request body-parser nodemon
5. update package json to include `"start":"nodemon app.js"`
6. add require statements to app.js
7. copy a signup form from bootstrap
8. include the cdn
9. include their additional css (as a file in `public/css/style.css`)
10. don't forget to add this line to app.js `app.use(express.static("public"))`

---

1. Get mailchimp API key
2. Get mailchimp list id
3. Figure out what mailchimp expects us to send them...
4. OH! It's an array of objects!! Each object representing a subscripber!!
5. So it will look like....?

```javascript
data = {
    members: [
        {
            email_address: email
        }
    ]
}
```