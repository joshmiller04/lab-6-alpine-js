function randomNameGenerator() {
    return {
        name: "Click the button to get a name",
        names: [
            "Josh", "Jimmy", "Tom", "David", "Bob",
            "Frank", "Tim", "sara", "Lindsay", "Jack"
        ],
        generateRandomName() {
            this.name = this.names[Math.floor(Math.random() * this.names.length)];
        }
    };
}
