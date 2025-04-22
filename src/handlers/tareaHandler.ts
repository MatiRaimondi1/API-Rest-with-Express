import { Tarea } from '../models/tarea';

export class TareaHandler {
    private tareas: Tarea[] = [];
    private nextId: number = 1;

    public getAll(): Tarea[] {
        return this.tareas;
    }

    public create(nombre: string, descripcion: string): Tarea {
        const tarea = new Tarea(this.nextId++, nombre, descripcion);
        this.tareas.push(tarea);
        return tarea;
    }

    public update(id: number, nombre?: string, descripcion?: string): Tarea | null {
        const tarea = this.tareas.find(t => t.getId() === id);
        if (!tarea) return null;

        tarea.setNombre(nombre ?? tarea.getNombre());
        tarea.setDescripcion(descripcion ?? tarea.getDescripcion());
        return tarea;
    }

    public delete(id: number): boolean {
        const index = this.tareas.findIndex(t => t.getId() === id);
        if (index === -1) return false;
        this.tareas.splice(index, 1);
        return true;
    }
}