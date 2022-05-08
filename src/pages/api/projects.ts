import type {NextApiRequest, NextApiResponse } from 'next';
import { findProjects } from '../../../lib/airtable.js';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const projects = await findProjects();
        if(projects.length !== 0) {
            res.json(projects);
        } else {
            res.status(404).json({
                message: 'No Projects Found!!'
            });
        }
    } catch (err) {
        res.status(500).json({
            message: 'Something went wrong!!',
        });
        console.log(err);
    }
}