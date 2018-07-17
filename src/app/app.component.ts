import { Component, ElementRef, ViewChild, Renderer } from '@angular/core';
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
  constructor(private appService: ApicallerService, private httpClient: HttpClient, private renderer: Renderer) {

  }
  ngOnInit() {

  }
  fileChange(event: any) {
    this.error = false;
    this.allFaces = [];
    this.allFeatures = [];
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      if (this.validateFile(file)) {
        this.getFeatures(file);
       let reader = new FileReader();
        reader.onload = (event: any) => {
          var filePath: string = event.target.result;
          var image = new Image();

          image.src = event.target.result;

          image.onload = (event2: any) => {
            this.resizeImageAndDetect(image);
            
          }

        }
        reader.readAsDataURL(event.target.files[0]);
      }
    }
    else {

    }
  }
  private pointFace(face) {
    let faceData: FaceDataModel = new FaceDataModel();
    let oleft = document.getElementById("imageContainer").offsetLeft;
    let otop = document.getElementById("imageContainer").offsetTop;
    faceData.faceId = face.faceId;
    faceData.faceLeft = oleft + face.faceRectangle.left;
    faceData.faceTop = otop + face.faceRectangle.top;
    faceData.faceWidth = face.faceRectangle.width;
    faceData.faceHeight = face.faceRectangle.height;


    let tagDiv: FaceDataModel = new FaceDataModel();
    tagDiv.faceId = face.faceId;
    tagDiv.faceLeft = oleft + face.faceRectangle.left;
    tagDiv.faceTop = otop + face.faceRectangle.top;
    tagDiv.faceWidth = face.faceRectangle.width;
    tagDiv.faceHeight = face.faceRectangle.height;

    tagDiv.faceTop = tagDiv.faceTop + 20;
    this.allFaces.push(faceData);
    this.allTags.push(tagDiv);

    
  }
  private showFaces() {
    this.faceData.array.forEach(element => {
      document.getElementById(element.faceId).style.display = "block";
    });

  }
  private validateFile(file: any): boolean {
    if (file.type !== "image/png") {
      this.error = true;
      this.errorMsg = "File format not supported."
      return false;
    }
    else
      return true;
  }

  private resizeImageAndDetect(image) {
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    if (image.width > 500)
      canvas.width = 500;
    else
      canvas.width = image.width;
    if (image.height > 500)
      canvas.height = 500
    else
      canvas.height = image.height;
    context.drawImage(image,
      0,
      0,
      image.width,
      image.height,
      0,
      0,
      canvas.width,
      canvas.height
    );
    var img = new Image();
    img.src = canvas.toDataURL();
    this.localUrl = canvas.toDataURL();
    canvas.toBlob((blb => { this.detectFace(blb) }))


   

  }



  private detectFace(blob: Blob) {

    this.appService.detectFaces(blob).subscribe(
      (faces: Array<any>) => {
        this.totalFaces = faces.length;
        if (this.totalFaces == 0) {
          this.error = true;
          this.errorMsg = "We could not detect faces in this picture. Please choose another picture."
        }
        else {
          for (let i = 0; i < faces.length; i++) {
            let faceInfo = faces[i];
            this.pointFace(faceInfo);
          }
          document.getElementById("imgDiv").style.display = "block";
        }
      },
      error => { this.error = error; this.errorMsg = "error occured" }
    )
  }

  private getFeatures(file) {

    this.appService.detectFaces(file).subscribe(
      (faces: Array<any>) => {
        this.totalFaces = faces.length;
        if (this.totalFaces == 0) {
          this.error = true;
          this.errorMsg = "We could not detect faces in this picture. Please choose another picture."
        }
        else {

          for (let i = 0; i < faces.length; i++) {
            let faceInfo = faces[i];
            let faceFeatureData: FaceDataModel = new FaceDataModel();
            faceFeatureData.faceAttributes = faceInfo.faceAttributes;
            this.allFeatures.push(faceFeatureData);
          }
          document.getElementById("imgDiv").style.display = "block";
        }
      },
      error => { this.error = error; this.errorMsg = "error occured" }
    )
  }

  private tagFace() {

  }

  title = 'Face-it NOW';
  faceData: any;
  error: any;
  errorMsg: string = "";
  localUrl: string = "";
  totalFaces: number = 0;
  allFaces: Array<FaceDataModel> = [];
  allTags: Array<FaceDataModel> = [];
  allFeatures: Array<FaceDataModel> = [];
faceUrl:String="";
}
