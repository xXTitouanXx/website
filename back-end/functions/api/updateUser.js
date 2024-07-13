const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({origin: true});

/**
 *Update user identification
 * @param body {String, Object}
 * @return{string} message succes | error
 * @forPlay https://us-central1-webstite-7c584.cloudfunctions.net/updateUser
 */

exports.updateUser = functions.https.onRequest((request, response) => {
    const uid = request.body.uid;
    const data = request.body.data;

    return cors(request, response, async () => {
        try {
            const userRecord = await admin.auth().updateUser(uid, data);
            response.send(userRecord.toJSON());
        } catch (error) {
            response.status(500).send(error);
        }
    });
});