import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/* 
Función utilitaria para combinar clases de Tailwind de forma segura.
Usa `clsx` para construir las clases condicionales y `twMerge` para 
eliminar conflictos (por ejemplo, "px-2 px-4" se convertirá en "px-4")
*/
export const cn = (...inputs) => {
    return twMerge(clsx(inputs))
}