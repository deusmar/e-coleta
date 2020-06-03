import knex from '../database/connection';
import { Request, Response } from 'express';

class ItemController {
    async index(request: Request, response: Response) {
    const items = await knex('items').select('*');

    const serializeItems = items.map(item => {
        return {
            name: item.title,
            image_url: `http://localhost:3333/uploads/${item.image}`
        }
    })

    return response.json(serializeItems);
} 
}

export default ItemController;