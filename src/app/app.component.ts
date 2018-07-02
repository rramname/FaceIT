import { Component, ElementRef, ViewChild } from '@angular/core';
import { ApicallerService } from 'src/app/apicaller.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('fileInput') inputEl: ElementRef;
  @ViewChild('img') img: ElementRef;
  constructor(private appService: ApicallerService, private httpClient: HttpClient) {

  }
  ngOnInit() {

  }
  fileChange(event: any) {

    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      if (this.validateFile(file)) {
        let reader = new FileReader();
        reader.onload = (event: any) => {
          this.localUrl = event.target.result;

          this.appService.detectFaces(file).subscribe(
            (face) => {
              this.faceData = face;
              console.log(this.faceData);
              this.pointFace(face);
            },
            error => { this.error = error; this.errorMsg = "error occured" }
          )
        }
        reader.readAsDataURL(event.target.files[0]);
      }
    }
    else{

    }
  }
  private pointFace(face) {
    document.getElementById("face").style.left = face[0].faceRectangle.left + "px";
    document.getElementById("face").style.top = face[0].faceRectangle.top + "px";
    document.getElementById("face").style.width = face[0].faceRectangle.width + "px";
    document.getElementById("face").style.height = face[0].faceRectangle.height + "px";
  }
  private validateFile(file:any):boolean{
    if(file.type!=="image/png")
    {
      
      this.error=true;
      this.errorMsg="File format not supported."
      
      return false;
    }
      else
      return true;
  }
  title = 'Face-it';
  faceData: any;
  error: any;
  errorMsg: string = "";
  localUrl: string = "";
}
