import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-create',
  templateUrl: 'create.page.html',
  styleUrls: ['create.page.scss']
})
export class CreatePage {

  firstname: string;
  lastname: string;
  username: string;
  password: number;
  toast: any;

  constructor(public api: ApiService, public toastCtrl: ToastController) { }


  createUser() {
    let data = {
      "first_name": this.firstname, "last_name": this.lastname, "username": this.username,
      "password": this.password
    };
    this.api.postAccount(data).then((result) => {
      this.toast = this.toastCtrl.create({
        message: 'Usuário criado com sucesso.',
        duration: 2000
      }).then((toastData) => {
        toastData.present();
      });
    }).catch((err) => {
      this.toast = this.toastCtrl.create({
        message: 'Erro ao tentar criar um novo usuario.' + err,
        duration: 2000
      }).then((toastData) => {
        toastData.present();
      });
    }
    );
  }
}


