module.exports = function (colectionName, domainKey) {
    const admin = require("firebase-admin");
    const db = admin.firestore();
    const Joi = require('joi');

    this.getList = () => {
        return new Promise((resolve, reject) => {
            try {
                var filter = domainKey ? db.collection(colectionName).where("domain", "==", domainKey) :
                    db.collection(colectionName)
                filter.get().then(querySnapShot => {
                    var data = [];
                    querySnapShot.forEach(x => data.push({
                        id: domainKey ? (x.ref.id).replace(`${domainKey}#`, '') : x.ref.id,
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
                const filterId = domainKey ? `${domainKey}#${id}` : id;
                db.collection(colectionName).doc(filterId).get().then(doc => {
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
            model.domain = domainKey;
            if ((validationResponse = Joi.validate(model, insertSchema)).error) {
                reject(validationResponse)
            } else {
                const filterId = domainKey ? `${domainKey}#${id}` : id;
                const docRef = db.collection(colectionName).doc(filterId);

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
            model.domain = domainKey;
            if ((validationResponse = Joi.validate(model, updateSchema)).error) {
                reject(validationResponse)
            } else {
                const filterId = domainKey ? `${domainKey}#${id}` : id;
                var docRef = db.collection(colectionName).doc(filterId);
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
                const filterId = domainKey ? `${domainKey}#${id}` : id;
                var docRef = db.collection(colectionName).doc(filterId);
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