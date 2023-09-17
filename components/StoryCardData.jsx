class StoryCardData {
    constructor(href, teampic, profilepic, name, date, title, brief_content, heading, body_content) {
        this.href = href;  // keep this unique
        this.teampic = teampic;
        this.profilepic = profilepic;
        this.name = name;
        this.date = date;
        this.title = title;
        this.brief_content = brief_content;
        this.body_content = body_content;
    }
}

export default StoryCardData;