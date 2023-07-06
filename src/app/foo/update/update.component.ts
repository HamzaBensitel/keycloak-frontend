import { Foo } from './../../models/foo';
import { ActivatedRoute, Router } from '@angular/router';
import { FooService } from './../../services/foo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  foo: Foo;
  constructor(
    private fooService: FooService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.fooService.detail(id).subscribe(
      data => {
        this.foo = data;
      },
      err => console.log(err)
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    if (this.foo){
    this.fooService.update(id, this.foo).subscribe(
      data => {
        console.log(data);
        this.Revenir();
      },
      err => console.log(err)
    );
  }
}

Revenir(): void {
    this.router.navigate(['/liste']);
  }

}