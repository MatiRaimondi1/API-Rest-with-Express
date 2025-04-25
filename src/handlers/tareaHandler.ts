import { AppDataSource } from '../database';
import { Tarea } from '../models/tarea';
import { Repository } from 'typeorm';

export class TareaHandler {
    private repo: Repository<Tarea>;

    constructor() {
        this.repo = AppDataSource.getRepository(Tarea);
    }

    public async getAll(): Promise<Tarea[]> {
        return this.repo.find();
    }

    public async create(nombre: string, descripcion: string): Promise<Tarea> {
        const tarea = this.repo.create({nombre, descripcion});
        return this.repo.save(tarea);
    }

    public async update(id: number, nombre?: string, descripcion?: string): Promise<Tarea | null> {
        const tarea = await this.repo.findOneBy({id});
        if (!tarea) return null;

        tarea.setNombre(nombre ?? tarea.getNombre());
        tarea.setDescripcion(descripcion ?? tarea.getDescripcion());
        return this.repo.save(tarea);
    }

    public async delete(id: number): Promise<boolean> {
        const result = await this.repo.delete(id);
        return result.affected !== 0
    }
}