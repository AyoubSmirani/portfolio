import { Component } from '@angular/core';
import '../../assets/smtp.js'; //file path may change → 
declare let Email: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  model: any = {};

  constructor(){}

  ngOnInit() {
   
     }

     onClick():void {
      Email.send({
        Host : 'smtp.elasticemail.com',
        Username : 'ayoubsmirani9@gmail.com',
        Password : '399AE8425C05F26B56FC1DF10F60A4DB442B',
        To : 'ayoubsmirani9@gmail.com',
        From : ` khalil.smirani.7@gmail.com`,
        Subject : this.model.subject,
        Body : `
        <i>This is sent as a feedback from my resume page.</i> <br/> <b>Name: </b>${this.model.name} <br /> <b>Email: </b>${this.model.email}<br /> <b>Subject: </b>${this.model.subject}<br /> <b>Message:</b> <br /> ${this.model.message} <br><br> <b>~End of Message.~</b> `
        }).then( (message:any) => {console.log(message); alert(message); } );
     }
     
}
