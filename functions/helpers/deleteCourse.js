const { table } = require('./airtable');
const formattedReturn = require('./formattedReturn');
module.exports = async (event) => {
    // TODO: delete course
    const {id} = JSON.parse(event.body)
    const deletedRecord = await table.destroy(id)
    return formattedReturn(200, deletedRecord)
};
