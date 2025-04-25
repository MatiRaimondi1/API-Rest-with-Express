import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Tarea {
    
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public nombre!: string;

    @Column()
    public descripcion!: string;

    constructor(nombre?: string, descripcion?: string) {
        if (nombre) this.nombre = nombre;
        if (descripcion) this.descripcion = descripcion;
    } 

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getDescripcion(): string {
        return this.descripcion;
    }

    public setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }
}