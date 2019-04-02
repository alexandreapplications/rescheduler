module.exports = function (colectionName) {
    const admin = require("firebase-admin");
    const db = admin.firestore();
    const Joi = require('joi');

    this.getList = () => {
        return new Promise((resolve, reject) => {
            try {
                db.collection(colectionName).get().then(querySnapShot => {
                    var data = [];
                    querySnapShot.forEach(x => data.push({
                        id: x.ref.id,
                        value: x.data()
                    }));
                    resolve(data);
                    return data;
                }).catch(error => {
                    console.error(error);
                    reject(error);
                });
            } catch (error) {
                reject(error);
            }
        })
    }


    this.getSingle = (id) => {
        return new Promise((resolve, reject) => {
            try {
                db.collection(colectionName).doc(id).get().then(doc => {
                    if (doc.exists) {
                        resolve(doc.data());
                        return doc.data();
                    } else {
                        return resolve(404);
                    }
                }).catch(error => {
                    reject(error);
                })
            } catch (error) {
                reject(error);
            }
        })
    }

    this.insert = (id, model, insertSchema) => {
        return new Promise((resolve, reject) => {
            if ((validationResponse = Joi.validate(model, insertSchema)).error) {
                reject(validationResponse)
            } else {
                const docRef = db.collection(colectionName).doc(id);

                try {
                    docRef.set(model);
                    resolve(true);
                } catch (error) {
                    reject(error);
                }
            }
        })
    }

    this.update = (id, model, updateSchema) => {
        return new Promise((resolve, reject) => {
            if ((validationResponse = Joi.validate(model, updateSchema)).error) {
                reject(validationResponse)
            } else {
                var docRef = db.collection(colectionName).doc(id);
                docRef.get().then(doc => {
                    if (doc.exists) {
                        var record = doc.data();
                        record.name = model.name;
                        try {
                            docRef.set(record);
                            resolve(true);
                        } catch (error) {
                            reject(error);
                        }
                    } else {
                        return false;
                    }
                    return true;
                }).catch(error => {
                    reject(error);
                });
            }
        })
    }

    this.delete = (id) => {
        return new Promise((resolve, reject) => {
            try {
                var docRef = db.collection(colectionName).doc(id);
                docRef
                    .delete()
                    .then(result => {
                        resolve(true);
                        return true;
                    })
                    .catch(error => {
                        reject(error);
                    });
            } catch (error) {
                reject(error);
            }
        });
    }

    return this;
}