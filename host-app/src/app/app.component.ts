import { DOCUMENT } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, Inject, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "host-app";

  constructor(
    private http: HttpClient,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    // this.http
    //   .get("http://localhost:4300/main.js", {
    //     responseType: "text",
    //   })
    //   .subscribe((main) => {
    //     console.log(main);
    //     const script = this.document.createElement("script");
    //     script.type = "module";
    //     if (script) {
    //       script.innerHTML = main;
    //       // script.style.display = "block";
    //       this.document.body.appendChild(script);
    //     }
    //   });
    // this.http
    //   .get("http://localhost:4300/polyfills.js", {
    //     responseType: "text",
    //   })
    //   .subscribe((main) => {
    //     console.log(main);
    //     const script = this.document.createElement("script");
    //     script.setAttribute("type", "module");
    //     if (script) {
    //       script.innerHTML = JSON.parse(main);
    //       script.style.display = "block";
    //       this.document.body.appendChild(script);
    //     }
    //   });
    // this.http
    //   .get("http://localhost:4300/runtime.js", {
    //     responseType: "text",
    //   })
    //   .subscribe((main) => {
    //     console.log(main);
    //     const script = this.document.createElement("script");
    //     script.setAttribute("type", "module");
    //     if (script) {
    //       script.innerHTML = JSON.parse(main);
    //       script.style.display = "block";
    //       this.document.body.appendChild(script);
    //     }
    //   });
    // this.http
    //   .get("http://localhost:4300/styles.css", {
    //     responseType: "text",
    //   })
    //   .subscribe((main) => {
    //     console.log(main);
    //     const link = this.document.getElementById("style");
    //     if (link) {
    //       link.innerHTML = JSON.parse(main);
    //     }
    //   });
  }
}
