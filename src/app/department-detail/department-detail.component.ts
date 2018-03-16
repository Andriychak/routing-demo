import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You selected department with id = {{departmentId}}</h3>
    
    <a (click)="goPrevious()">Previous</a>
    <a (click)="goNext()">Next</a>
    
    <div>
      <button (click)="gotoDepartments()">Back</button>
    </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  private departmentId;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //this.departmentId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params: ParamMap) => this.departmentId = parseInt(params.get('id')));
  }

  goPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(['../', previousId], {relativeTo: this.route});
  }

  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['../', nextId], {relativeTo: this.route});
  }

  gotoDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['../', { id: selectedId }], {relativeTo: this.route});
  }
}
