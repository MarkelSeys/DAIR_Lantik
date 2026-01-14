import XLSX from 'xlsx';

declare global {
  interface Window {
    XLSX: typeof XLSX;
  }
}

window.XLSX = XLSX;