module.exports.signUpErrors = (err) => {
    let errors = { name:"", email: "", password:""}

    if (err.message.includes("name"))
    errors.name = "Nom incorrect"

    if(err.message.includes("email"))
    errors.email = "Email incorrect"

    if(err.message.includes("password"))
    errors.password = "mot de passe incorrect"

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("name"))
        errors.name= "ce nom est déjà pris"

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
        errors.email= "ce mail est déjà pris"

    return errors
}

module.exports.signInErrors = (err) => {
    let errors = {email:"", password:""}

    if(err.message.includes("email"))
        errors.email= "Email inconnu"

    if(err.message.incldues("password"))
        errors.password = "Mot de passe inconnu"
}

module.exports.uploadErrors = (err) => {
    let errors = {format:"", maxSize:""}

    if (err.message.includes("invalid file"))
    errors.format = "format d'image non valide"

    if (err.message.includes("max size"))
    errors.maxSize = "taille maximale de fichier dépassés"

    return errors
}
