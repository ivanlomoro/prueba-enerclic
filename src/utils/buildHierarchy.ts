import { Dispositivo } from '@prisma/client';

type DispositivoConHijos = Dispositivo & { hijos?: DispositivoConHijos[] };

function buildHierarchy(dispositivos: Dispositivo[]): DispositivoConHijos[] {
    const dispositivosConHijos: DispositivoConHijos[] = dispositivos.map(dispositivo => ({
        ...dispositivo,
        hijos: [],
    }));

    const map: Record<number, DispositivoConHijos> = {};
    dispositivosConHijos.forEach(dispositivo => map[dispositivo.id] = dispositivo);

    const roots: DispositivoConHijos[] = [];
    dispositivosConHijos.forEach(dispositivo => {
        if (dispositivo.padreId && map[dispositivo.padreId]) {
            map[dispositivo.padreId].hijos?.push(dispositivo);
        } else {
            roots.push(dispositivo);
        }
    });

    return roots;
}

export default buildHierarchy
