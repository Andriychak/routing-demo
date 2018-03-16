import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>
      Department List
    </h3>
    <ul class="items">
      <li *ngFor="let department of departments" (click)="onSelect(department)" [class.selected]="isSelected(department)">
        <span class="badge">{{department.id}}</span> {{department.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  private selectedId;
  private departments = [
    { "id": 1, "name": "Angular" },
    { "id": 2, "name": "Node" },
    { "id": 3, "name": "MongoDB" },
    { "id": 4, "name": "Ruby" },
    { "id": 5, "name": "Bootstrap" }
  ];

  constructor(private router: Router, private rout: ActivatedRoute) { }

  ngOnInit() {
    this.rout.paramMap.subscribe((params: ParamMap) => this.selectedId = params.get('id'));
  }

  onSelect(department) {
    this.router.navigate([department.id], {relativeTo: this.rout});
  }

  isSelected(department) {
    return department.id == this.selectedId;
  }

}
