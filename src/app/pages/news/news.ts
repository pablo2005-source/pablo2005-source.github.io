import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './news.html',
  styleUrls: ['./news.css'],
})
export class News implements OnInit {
  items: any[] = [];
  content = '';
  title = '';

  constructor(private cs: ContentService, private route: ActivatedRoute, private router: Router) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const md = await this.cs.getFile('news', id + '.md');
      this.content = md;
      this.title = id.replace(/[-_]/g, ' ');
    } else {
      this.items = await this.cs.getIndex('news');
    }
  }

  open(item: any) {
    this.router.navigate(['/noticias', item.file.replace(/\.md$/i, '')]);
  }
}
