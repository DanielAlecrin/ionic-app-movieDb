import { MoovieProvider } from './../../providers/moovie/moovie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [MoovieProvider]
})
export class FeedPage {

  public objeto_feed = {
    titulo: 'Daniel Lucas',
    data: 'November 5, 1955',
    descricao: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa.',
    qtdLikes: 12,
    qtdComments: 4,
    timeComments: '11h ago'

  };

  public lista_filmes = new Array<any>();

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private moovie: MoovieProvider) {
  }

  ionViewDidLoad() {
    this.moovie.getLatestMovies().subscribe(
      data => {
        const response = (data as any);
        const obj_retorno = JSON.parse(response._body);
        this.lista_filmes = obj_retorno.results;
        console.log(obj_retorno);

      }, error => { console.log(error)}
    );

  }

}
