export class Photo {
    private data: string;

    constructor(data: string) {
        this.data = data;
    }

    public getData(): string {
        return this.data;
    }
}