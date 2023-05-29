
function login(req, res){
    const result = loginModel.getUsernameAnaPassword(req.body.name, req.body.password)
    if (result) {
        req.session.username = req.body.username
        res.end('welcome')
    }
    else
        res.end('sorry')    
}


function isLoggedIn(req, res, next) {
    if (req.session.username != null){
        return next()
    } else{
        res.redirect('/')
        
    }
}    


export {
 login,
 isLoggedIn
}
