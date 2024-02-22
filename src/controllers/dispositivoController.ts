import { Response, Request } from "express";
import prismaClient from "../database/client";
import buildHierarchy from "../utils/buildHierarchy";


export const insertDispositivos = async (req: Request, res: Response) => {
    const dispositivosData = [
        { id: 1, nombre: 'Adriano', padreId: null, tipo: 0, numserie: 1 },
        { id: 2, nombre: 'Jose', padreId: 1, tipo: 4, numserie: 2 },
        { id: 3, nombre: 'Miguel', padreId: 1, tipo: 2, numserie: 3 },
        { id: 4, nombre: 'Alfredo', padreId: 2, tipo: 3, numserie: 4 },
        { id: 5, nombre: 'Mariano', padreId: 3, tipo: 1, numserie: 5 },
        { id: 6, nombre: 'Abenza', padreId: 2, tipo: 1, numserie: 6 },
        { id: 7, nombre: 'Pedro', padreId: 3, tipo: 1, numserie: 7 },
        { id: 8, nombre: 'Sanchez', padreId: 2, tipo: 2, numserie: 8 }
    ];

    try {
        for (const dispositivo of dispositivosData) {
            await prismaClient.dispositivo.create({
                data: dispositivo,
            });
        }
        res.status(201).json({ message: "Dispositivos insertados correctamente." });
    } catch (error) {
        console.error("Error al insertar dispositivos: ", error);
        res.status(500).json({ error: "Error al insertar dispositivos." });
    }
};


export const getData = async (req: Request, res: Response) => {
    try {
        const dispositivos = await prismaClient.dispositivo.findMany();
        const dispositivosJerarquicos = buildHierarchy(dispositivos);
        res.json(dispositivosJerarquicos);
    } catch (error) {
        console.error("Error al obtener dispositivos: ", error);
        res.status(500).json({ error: "Error al obtener dispositivos." });
    }
};