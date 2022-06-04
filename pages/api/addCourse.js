import { IncomingForm } from 'formidable';
import { promises as fs } from 'fs';
const mv = require('mv');
const util = require('util');
const writeFile = util.promisify(fs.writeFile);


export const config = {
    api: {
       bodyParser: false,
    }
};
 
export default async (req, res) => {

    const d = new Date();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const completeDate = `${d.getDate()} ${months[d.getMonth()]}, ${d.getFullYear()}`;
    const coursesJSON = [];
    const fileName = `./public/uploads/metadata.json`;

    const uploadFiles = (fields, files) => {
        const reqData = JSON.parse(fields.requiredData);

        const parentItem = {
            id: Date.now() + Math.random(),
            title: reqData.title,
            totalDownloads: 0,
            createdOn: completeDate,
            updatedOn: '--',
            subCourses: []
        };

        for (let item in files) {
            for (let i = 0; i < files[item].length; i++) {
                const oldPath = files[item][i].filepath;
                const newPath = `./public/uploads/${reqData.subTitle[item.slice(5)]}/${files[item][i].originalFilename}`;

                mv(oldPath, newPath, {mkdirp: true}, function(err) {
                });
            }

            parentItem.subCourses.push({
                id: Date.now() + Math.random(),
                title: reqData.subTitle[item.slice(5)],
                totalDownloads: 0,
                createdOn: completeDate,
                updatedOn: '--'
            });
        }

        coursesJSON.push(parentItem);
        writeFile(fileName, JSON.stringify(coursesJSON), { overwrite: true }, 'utf8');
    }

    await new Promise((resolve, reject) => {
        const form = new IncomingForm({
            multiples: true
        });
       
        form.parse(req, (err, fields, files) => {
            if (err) {
                res.status(200).send({
                    'status': 'failed',
                    'message': 'Not able to upload. Try after a while!'
                });
                return reject(err);
            }
            //console.log(20, fields, files)

            Promise.resolve(uploadFiles(fields, files));

            res.status(200).send({
                'status': 'success',
                'message': 'successfully uploaded'
            });
        });
    })
}