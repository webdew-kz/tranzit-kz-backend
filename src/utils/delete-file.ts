/** @format */

import { promises as fs } from "fs";

export async function deleteFile(filePath: string) {
    try {
        await fs.unlink(filePath);
        console.log(`Файл ${filePath} успешно удален.`);
    } catch (error) {
        console.error(`Ошибка при удалении файла ${filePath}:`, error);
    }
}
