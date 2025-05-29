import { Summoner } from "types/summoner.type";

export function sort(arr: Summoner[], sortBy: string, direction: string | boolean) {
    const key = sortBy as keyof Summoner ?? 'adjustedLP';
    direction = direction ? direction : 'asc';
    arr.sort((a, b) => {
        if (!a && !b) return 0;
        if (!a) return 1;
        if (!b) return -1;

        const valA = a[key];
        const valB = b[key];

        if (valA === undefined && valB === undefined) return 0;
        if (valA === undefined) return 1;
        if (valB === undefined) return -1;

        if (direction == 'asc') {
            return valA > valB ? 1 :
                valA < valB ? -1 : 0;
        }
        return valA > valB ? -1 :
            valA < valB ? 1 : 0;
    });
    return arr;
}