import * as pdfjsLib from 'pdfjs-dist';


pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@2.16.105/build/pdf.worker.min.js`;


export default pdfjsLib;