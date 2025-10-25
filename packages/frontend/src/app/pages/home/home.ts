import { HttpClient } from "@angular/common/http";
import { Component, inject, OnInit } from "@angular/core";

@Component({
  selector: 'app-home',
  template: `{{hello}}`
})
export class HomePage implements OnInit {
  private httpClient = inject(HttpClient);

  hello!: string;

  ngOnInit(): void {
    // @ts-ignore
    this.httpClient.get("http://localhost:8080/api").subscribe((res: {message: string}) => {
      this.hello = res.message;
    })
  }
}
