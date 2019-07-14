import { Injectable } from "@angular/core";

@Injectable()
export class LoadingService {

    private optOuts: Array<string>;
    private requestCounter: number;
    public showLoading: boolean;

    constructor() {
        this.optOuts = new Array<string>();
        this.requestCounter = 0;
    }

    optOut(url: string) {
        this.optOuts.push(url);
    }

    removeOptOut(url: string) {
        var index = this.optOuts.indexOf(url, 0);
        if (index > -1) {
            this.optOuts.splice(index, 1);
        }
    }

    clearoptOuts() {
        this.optOuts.length = 0;
    }

    public begin(url: string) {
        if (this.shouldOptOut(url)) {
            return;
        }
        this.requestCounter++;
        //console.log("Loading Service: Started " + this.requestCounter + "Requests Pending");
        setTimeout(() => {
            if (this.requestCounter > 0 && !this.showLoading) {
                //console.log("Loading Service: Started Setting ShowLoading True");
                this.showLoading = true;
            }
        }, 500);
    }

    public end(url: string) {
        if (this.shouldOptOut(url)) {
            return;
        }
        this.requestCounter--;
        //console.log("Loading Service: Ended " + this.requestCounter + " Requests Pending");
        if (this.requestCounter <= 0 && this.showLoading) {
            //console.log("Loading Service: Ending Setting ShowLoading False");
            this.showLoading = false;
        }
    }

    public isClear(){
        return this.requestCounter == 0;
    }

    private shouldOptOut(url: string) {
        let shouldOptOut: boolean = false;
        this.optOuts.forEach((val) => {
            if (url.indexOf(val) >= 0) {
                shouldOptOut = true;
            }
        });
        return shouldOptOut;
    }
}