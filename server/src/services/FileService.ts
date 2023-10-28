// server/src/services/FileService.ts

import fs from 'fs';
import path from 'path';

class FileService {
  public readFileContent(filePath: string): string {
    try {
      const absolutePath = path.resolve(filePath);
      const content = fs.readFileSync(absolutePath, 'utf8');
      return content;
    } catch (err) {
      console.error(`Error reading the file: ${err}`);
      return '';
    }
  }
}

export default FileService;
