class User {
    constructor(id, email, fullName, password, url){
        this.id = id;
        this.email = email;
        this.fullName = fullName,
        this.password = password,
        this.image = url;
    }
}

module.exports = User;
// .getDate()%>.<%=video.created_at.getMonth() + 1%>.<%=video.created_at.getFullYear()