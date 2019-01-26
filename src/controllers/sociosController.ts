import { Request, Response } from 'express';


import pool from '../database';

class SociosController {

    public async list(req: Request, res: Response): Promise<void> {
        const socios = await pool.query('SELECT * FROM socios');
        res.json(socios);
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO socios set ?', [req.body]);
        res.json({ message: 'Socio Agregado' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE socios set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "Socio Actualizado" });
    }

    /*
    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM games WHERE id = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The game doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO games set ?', [req.body]);
        res.json({ message: 'Game Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE games set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "The game was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM games WHERE id = ?', [id]);
        res.json({ message: "The game was deleted" });
    }
    */
}

const sociosController = new SociosController;
export default sociosController;