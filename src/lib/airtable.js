import Airtable from 'airtable';

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_KEY);

const table = base("projects");

const getMinifiedRecord = (record) => {

    const tools = record.fields.tools.split(',');
    return {
      libs: tools,
      ...record.fields,
    };
  };
  
  const getMinifiedRecords = (records) => {
    return records.map((record) => getMinifiedRecord(record));
  };

export const findProjects = async () => {
    const projectsRecords = await table
        .select()
        .firstPage();

    return getMinifiedRecords(projectsRecords);
};

export const findProjectById = async (id) => {
  const project = await table.select({
    filterByFormula: `id="${id}"`
  }).firstPage();
  return getMinifiedRecords(project);
};