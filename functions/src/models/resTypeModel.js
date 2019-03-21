module.exports = function() {
    this.getList = () => {
        return new Promise((resolve, reject) => {
            resolve([
                { "Name": "Chair" },
                { "Name": "Room" },
                { "Name": "Datashow" }
            ]);
        })
    }

    return this;
}