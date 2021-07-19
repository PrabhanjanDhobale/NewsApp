import { Component, OnChanges } from '@angular/core';
import {NewappserviceService} from './services/newappservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  headline = [];
  title = 'newsapp';

  category = ["business","entertainment","general","health","science","sports","technology"];
  country = [["United Arab Emirates","ae"],["Argentina","ar"],["Austria","at"],["Australia","au"],["Belgium","be"],["Bulgaria","bg"],["Brazil","br"],["Canada","ca"],["Switzerland","ch"],["People’s Republic of China","cn"],["Colombia","co"],["Cuba","cu"],["Czech Republic","cz"],["Germany","de"],["Egypt","eg"],["France","fr"],["United Kingdom","gb"],["Greece","gr"],["Hong Kong","hk"],["Hungary","hu"],["Indonesia","id"],["Ireland","ie"],["Israel","il"],["India","in"],["Italy","it"],["Japan","jp"],["Korea","kr"],["Lithuania","lt"],["Latvia","lv"],["Morocco","ma"],["Macedonia","mx"],["Malaysia","my"],["Nigeria","ng"],["Netherlands","nl"],["Norway","no"],["New Zealand","nz"],["Philippines","ph"],["Poland","pl"],["Portugal","pt"],["Romania","ro"],["Serbia","rs"],["Russian Federation","ru"],["Saudi Arabia","sa"],["Sweden","se"],["Singapore","sg"],["Slovenia","si"],["Slovakia","sk"],["Thailand","th"],["Turkey","tr"],["Taiwan","tw"],["Ukraine","ua"],["United States","us"],["Venezuela","ve"],["South Africa","za"]];

  constructor(public news: NewappserviceService) {
    this.news.defaultnews().subscribe((data) => {
      // console.log(data.articles);
      this.headline = data.articles;
    });
  }

  getChange(data1: any, data2: any){
    this.headline.length = 0;

    if(data1.value != "category" && data2.value != "country") {
      this.news.getnews(data1.value, data2.value).subscribe((el) => {
        // console.log(el.articles);
        this.headline = el.articles;
      });
    }

    if(data1.value != "category" && data2.value == "country"){
      this.news.getCategorynews(data1.value).subscribe((el) => {
        console.log(el.articles);
        this.headline = el.articles;
      });
    }

    if(data2.value != "country" && data1.value === "category"){
      console.log(data2.value);
      this.news.getCountryNews(data2.value).subscribe((el) => {
        console.log(el.articles);
        this.headline = el.articles;
      });
    }

  }

}
