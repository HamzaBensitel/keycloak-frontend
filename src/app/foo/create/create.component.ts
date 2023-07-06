import { Foo } from './../../models/foo';
import { FooService } from './../../services/foo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  foo: Foo;
  fooName: string;

  constructor(
    private fooService: FooService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    this.foo = new Foo(null, this.fooName);
    this.fooService.create(this.foo).subscribe(
      data => {
        console.log(data);
        this.Revenir();
      },
      err => console.log(err)
    );
  }

  Revenir(): void {
    this.router.navigate(['/liste']);
  }


}
