export default class Activity {
    id : Number;
    content: String;
    done : boolean;


    public constructor(id, content, done) {
        this.id = id;
        this.content = content;
        this.done = done;
    }
}