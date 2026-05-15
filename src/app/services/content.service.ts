import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ContentService {
  async getIndex(type: 'news' | 'projects') {
    try {
      const res = await fetch(`/assets/content/${type}/index.json`);
      if (!res.ok) return [];
      return await res.json();
    } catch (e) {
      console.error('Error loading index', e);
      return [];
    }
  }

  async getFile(type: 'news' | 'projects', filename: string) {
    try {
      const res = await fetch(`/assets/content/${type}/${filename}`);
      if (!res.ok) return '';
      return await res.text();
    } catch (e) {
      console.error('Error loading file', e);
      return '';
    }
  }
}
