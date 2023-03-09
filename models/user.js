class User {
    constructor(d) {
        if (d == null) {
            this._firstname = null
            this._lastname = null
            this._email = null
            this._age = null
        } else {
            this._firstname = d.firstname
            this._lastname = d.lastname
            this._email = d.email
            this._age = d.age
        }
    }
    get firstname() {
        return this._firstname
    }
    get lastname() {
        return this._lastname
    }
    get email() {
        return this._email
    }
    get age() {
        return this._age
    }
}

module.exports = User