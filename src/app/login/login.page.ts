import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { UserService } from '../user.service';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {

  username: string;
  password: string;
  user_name: '';
  toast: any;

  constructor(public api: ApiService, public user: UserService, public toastCtrl: ToastController, public navCtrl: NavController) { }

  login() {
    let dados = {
      "username": this.username,
      "password": this.password
    }
    this.api.loginApp(dados).then((result: any) => {
      this.user.setUsername(result.username);
      this.navCtrl.navigateRoot('/tabs/post');
      this.toast = this.toastCtrl.create({
        message: 'Login efetuado com sucesso. ' + 'Nome de Usuário:' + result.username,
        duration: 2000
      }).then((toastData) => {
        toastData.present();
      });
    }).catch(() => {
      this.user.setUsername('');
      this.toast = this.toastCtrl.create({
        message: 'Erro, Usuário ou senha não existem. Verifique usuario: ' + this.username + 'e senha ' + this.password,
        duration: 2000
      }).then((toastData) => {
        toastData.present();
      });
    }
    );
  }
}
