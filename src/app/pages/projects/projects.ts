import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
})
export class Projects implements OnInit {
  items: any[] = [];
  content = '';
  title = '';

  constructor(private cs: ContentService, private route: ActivatedRoute, private router: Router) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const md = await this.cs.getFile('projects', id + '.md');
      this.content = md;
      this.title = id.replace(/[-_]/g, ' ');
    } else {
      this.items = await this.cs.getIndex('projects');
    }
  }

  open(item: any) {
    this.router.navigate(['/proyectos', item.file.replace(/\.md$/i, '')]);
  }
}
