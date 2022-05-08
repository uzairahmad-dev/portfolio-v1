import type {NextApiRequest, NextApiResponse } from 'next';

import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const pdfPath = path.join(process.cwd(), `/data/Resume.pdf`);
    const data = fs.readFileSync(pdfPath);
    res.setHeader('Content-Type', 'application/pdf');
    res.status(200).send(data);
  } catch (e) {
    res.status(500).json({
      message: 'Something went wrong!!!'
    })
  }
}
