import AbstractCalendarEvent from "./AbstractEvent";

export default class Anniversary extends AbstractCalendarEvent {
    public date: string;
    public longId: string;

    public constructor(id: number, props: { [field: string]: string }) {
        super("" + id, props);

        if (typeof props["date"] === "undefined")
            throw new TypeError('[Anniversary] One or more fields are missing in "props".');

        this.date = props["date"];
        this.longId = "anniversary-" + id;
    }
}
