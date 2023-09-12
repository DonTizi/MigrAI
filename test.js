const { PrismaClient } = require('@prisma/client');
const { readFile } = require('fs/promises');
const { join } = require('path');

const prisma = new PrismaClient();

async function insertText() {
    try {
        // Load the text content from the .txt file
        const pdfTextPath = join(__dirname, 'public', '2023.txt');
        const pdfTextContent = await readFile(pdfTextPath, 'utf-8');

        // Check if content is already in the database
        const existingEntry = await prisma.textEmbedding.findFirst();

        if (!existingEntry) {
            // Insert the text content into the database
            await prisma.textEmbedding.create({
                data: {
                    content: pdfTextContent,
                    embedding: null, // As we haven't generated embeddings yet
                }
            });
            console.log("Text inserted successfully!");
        } else {
            console.log("Text is already present in the database.");
        }
    } catch (error) {
        console.error("Error inserting text:", error);
    } finally {
        await prisma.$disconnect();
    }
}

insertText();
