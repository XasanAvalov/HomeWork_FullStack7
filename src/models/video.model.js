class Video {
    constructor(id, description, url, created_at, user_id){
        this.id = id;
        this.description = description;
        this.url = url;
        this.created_at = created_at;
        this.user_id = user_id;
    }
}

module.exports = Video;