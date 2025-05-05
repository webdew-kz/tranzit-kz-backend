/** @format */

// src/modules/currency/types/rss-parsed.interface.ts

export interface ParsedXML {
    rss: {
        channel: Array<{
            item: Array<{
                title: string[];
                description: string[];
                quant?: string[];
            }>;
        }>;
    };
}

export interface Rate {
    title: string;
    rate: string;
}
