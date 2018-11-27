const handleHome = (req, res, db) => {
    return db.select().table('users').then(data => {
        console.log(data);
    })
    .catch(err => res.status(400).json('Unable to get entries'));
}

module.exports = {
    handleHome: handleHome
}