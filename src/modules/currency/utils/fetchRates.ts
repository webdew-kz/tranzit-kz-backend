/**
 * eslint-disable @typescript-eslint/no-unsafe-assignment
 *
 * @format
 */

/** @format */

// src/lib/fetchRates.ts

import { parseStringPromise } from "xml2js";
import { ParsedXML, Rate } from "../types/currency.interface";

/**
 * Парсит RSS и возвращает нормализованные курсы валют
 */
export async function fetchRates(): Promise<Rate[]> {
    const res = await fetch("https://nationalbank.kz/rss/rates_all.xml");

    if (!res.ok) {
        throw new Error("Failed to fetch currency rates");
    }

    const xml = await res.text();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const rawParsed = await parseStringPromise(xml);
    const parsed = rawParsed as unknown as ParsedXML;

    const items = parsed.rss.channel[0].item;

    return items.map((item) => {
        const code = item.title[0].split(" ")[0].trim();
        const description = parseFloat(item.description[0].replace(",", "."));
        const quant = parseInt(item.quant?.[0] ?? "1", 10);
        const pricePerUnit = description / quant;

        return {
            title: code,
            rate: pricePerUnit.toFixed(2), // или .toString() если нужна точность как есть
        };
    });
}
