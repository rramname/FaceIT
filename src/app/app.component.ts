import { Component, ElementRef, ViewChild } from '@angular/core';
import { ApicallerService } from 'src/app/apicaller.service';
import { HttpClient } from '@angular/common/http';
import { FaceDataModel } from './faceData.model';

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
    this.error=false;
    this.allFaces=[];
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      if (this.validateFile(file)) {
        let reader = new FileReader();
        reader.onload = (event: any) => {
          this.localUrl = event.target.result;

          this.appService.detectFaces(file).subscribe(
            (faces:Array<any>) => {
              this.totalFaces=faces.length;
              if(this.totalFaces==0){
                this.error=true;
                this.errorMsg="We could not detect faces in this picture. Please chhose another picture."
              }
              else
              {
              for (let i=0;i<faces.length;i++){
              let faceInfo = faces[i];
                this.pointFace(faceInfo);
              }
              document.getElementById("imgDiv").style.display="block";
            }
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
    let faceData:FaceDataModel=new FaceDataModel();
    let oleft=document.getElementById("imageContainer").offsetLeft;
    let otop=document.getElementById("imageContainer").offsetTop;
    faceData.faceId=face.faceId;
    faceData.faceLeft=oleft+face.faceRectangle.left;
    faceData.faceTop=otop+face.faceRectangle.top;
    faceData.faceWidth=face.faceRectangle.width;
    faceData.faceHeight=face.faceRectangle.height;
    this.allFaces.push(faceData);
    
    // document.getElementById("face").style.left = oleft+face.faceRectangle.left + "px";
    // document.getElementById("face").style.top = otop+face.faceRectangle.top + "px";
    // document.getElementById("face").style.width = face.faceRectangle.width + "px";
    // document.getElementById("face").style.height = face.faceRectangle.height + "px";

    
    
  }
  private showFaces(){
    this.faceData.array.forEach(element => {
      document.getElementById(element.faceId).style.display="block";
    });
   
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
  title = 'Face-it NOW';
  faceData: any;
  error: any;
  errorMsg: string = "";
  localUrl: string = "";
  totalFaces:number=0;
  allFaces:Array<FaceDataModel>=[];
}
