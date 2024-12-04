import React, { useEffect, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import 'pdfjs-dist/build/pdf.worker.entry';
import pdfjsLib from '../../pdfConfig';

const PdfTextExtractor = ({ pdfUrl }) => {
    const [textContent, setTextContent] = useState('');

    useEffect(() => {
        const extractTextFromPdf = async () => {
            try {
                // Load the PDF document
                const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
                const totalPages = pdf.numPages;
                let fullText = '';

                for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
                    const page = await pdf.getPage(pageNum);
                    const textContent = await page.getTextContent();
                    const pageText = textContent.items.map(item => item.str).join(' ');
                    fullText += pageText + '\n';
                }

                setTextContent(fullText);
            } catch (error) {
                console.error('Error extracting text from PDF:', error);
            }
        };

        extractTextFromPdf();
    }, [pdfUrl]);

    return (
        <div>
            <h2>Extracted Text</h2>
            <pre>{textContent}</pre>
        </div>
    );
};


export default PdfTextExtractor;
