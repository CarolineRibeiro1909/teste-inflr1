import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ToastController } from '@ionic/angular';
import { UserService } from '../user.service';


@Component({
  selector: 'app-post',
  templateUrl: 'post.page.html',
  styleUrls: ['post.page.scss']
})
export class PostPage {

  articles: any[] = [];
  title: string;
  shortcontent: string;
  content: string;
  username: string;
  toast: any;



  constructor(public api: ApiService, public toastCtrl: ToastController, public user: UserService) { }

  ionViewDidEnter() {
    this.getArticles();
    this.getUser();

  }

  getUser() {
    this.username = this.user.getUsername();
  }


  getArticles() {
    this.api.getArticles()
      .then((result: any[]) => {
        this.articles = result;
      });
  }

  save() {
    const data = { "title": this.title, "short_content": this.shortcontent, "content": this.content };
    this.api.postFeed(data).then((result) => {
      this.toast = this.toastCtrl.create({
        message: 'Post criado com sucesso.',
        duration: 2000
      }).then((toastData) => {
        toastData.present();
      });
    }).catch((err) => {
      this.toast = this.toastCtrl.create({
        message: 'Erro ao tentar criar novo post.' + err,
        duration: 2000
      }).then((toastData) => {
        toastData.present();
      });
    }
    );
  }
}
