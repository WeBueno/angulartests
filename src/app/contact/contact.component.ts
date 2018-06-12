import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contacts = [];

  constructor() { }

  ngOnInit() {
    this.contacts = [
      {
          name: "Eduardo",
          email: "edu@gmail.com",
          description: "very beautiful"
      },
      {
          name: "Beca",
          email: "beca@gmail.com",
          description: "very pretty"
      },
    ];

  }

}
