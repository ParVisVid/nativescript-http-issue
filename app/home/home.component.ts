import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    providers: [ HttpClient ]
})
export class HomeComponent implements OnInit {

    private serverUrl = "https://jsonplaceholder.typicode.com/posts";

    constructor(private http: HttpClient) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {

        console.log("home init");

        const url = this.serverUrl;

        const headers = this.createRequestHeader();

        this.http.get(url, { headers: headers })
            .subscribe(
                result => {

                console.log("Success:", result);

            }, error => {

                console.log("Error:", error);

            });

    }

    private createRequestHeader() {
        // set headers here e.g.
        let headers = new HttpHeaders({
            "AuthKey": "my-key",
            "AuthToken": "my-token",
            "Content-Type": "application/json",
        });

        return headers;
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
