import { Request, Response } from 'express';
import { fetchGraphQL } from '../utils/functions';

export const getCharacters = async (req: Request , res: Response) => {
    try {
        const dataResponse = await fetchGraphQL(`
            query {
                characters(page: ${req.params.page || 1}, filter: { species:"Human"}) {
                info {
                    count
                }
                results {
                    name
                    image
                    id
                }
                }
            }
        `);
        res.status(200).json(dataResponse);
    } catch (error){
        res.status(500).json(error);
    }
};
