const { table } = require('./airtable');
const formattedReturn = require('./formattedReturn');
module.exports = async (event) => {
    // TODO: update course
    const {id, ...fields} = JSON.parse(event.body);
    const updatedCourse = await table.update([{id, fields}])
    return formattedReturn(200, updatedCourse)
};
