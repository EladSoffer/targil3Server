const UserPass = require('../models/UserPass');
const Check = require('../models/UserPassName')

const key = "secret"


function login(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    // Check credentials
    Check.findOne({ username }, (err, user) => {
        if (err) {
            // Handle any error that occurred during the query
            res.status(500).send('An error occurred');
            return;
        }

        if (user && user.password === password) {
            // User with the provided username and password found - Generate JWT
            const data = { username: user.username };
            const token = jwt.sign(data, key);
            res.status(200).json({ token });
        } else {
            // User with the provided username and/or password not found
            res.status(404).send('Invalid username and/or password');
        }
    });
}


const isLoggedIn = (req, res, next) => {
    // If the request has an authorization header
    if (req.headers.authorization) {
        // Extract the token from that header
        const token = req.headers.authorization.split(" ")[1];
        try {
            // Verify the token is valid
            const data = jwt.verify(token, key);
            console.log('The logged in user is: ' + data.username);
            // Token validation was successful. Continue to the actual function (index)
            return next()
        } catch (err) {
            return res.status(401).send("Invalid Token");
        }
    }
    else
        return res.status(403).send('Token required');
}


export {
    login,
    isLoggedIn
}
