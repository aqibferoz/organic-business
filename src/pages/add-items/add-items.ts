import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { ApiProvider } from '../../providers/api/api';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HelperProvider } from '../../providers/helper/helper';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-add-items',
  templateUrl: 'add-items.html',
})
export class AddItemsPage {
  
  itemsData={
    title:'',
    description:'',
    price: null
  }

  ref : AngularFireStorageReference;
  task: AngularFireUploadTask;
  imageUrl: string;
  createdCode = null;
  sourcex: any;
  base64Image: string;
  uploadImageId: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private afStorage: AngularFireStorage, private api: ApiProvider, private camera: Camera,
    private helper: HelperProvider, private auth: AuthProvider) {
  }

  ionViewDidLoad() {
    
  }

  uploadPhoto() {
    
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    let task = this.ref.putString(this.base64Image, 'data_url');
    task.snapshotChanges()
    .pipe(finalize(() => {
      this.ref.getDownloadURL().subscribe(url => {
        this.imageUrl = url;
      });
    })).subscribe();

  }

  takePhoto(source){
   
    if (source === 'camera') {
      this.sourcex = this.camera.PictureSourceType.CAMERA;
    } else if (source === 'library') {
      this.sourcex = this.camera.PictureSourceType.PHOTOLIBRARY;
    }
    const options: CameraOptions = {
      sourceType: this.sourcex,
      quality: 30,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.uploadPhoto();
    }, (err) => {
      console.log(err);
    });

  }

  addItem() {
    let item = {
      title: this.itemsData.title,
      description: this.itemsData.description,
      image: this.imageUrl,
      price: this.itemsData.price,
      uid: this.auth.getToken()
    }

    if (item) {
      this.api.addItem(item).then(
        () => {
          this.navCtrl.pop();
        }
      )  
    }
    
  }

  choosePicture() {
    let myfunc = () => {
      this.takePhoto('library');
    };
    let myfunc1 = () => {
      this.takePhoto('camera');
    };
    this.helper.presentActionSheet('Choose an option.', 'Gallery', 'Camera', myfunc, myfunc1);
  }


  
}
