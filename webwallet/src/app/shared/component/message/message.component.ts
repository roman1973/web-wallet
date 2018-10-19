import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {MessageService} from '../../service/message.service';
import {fadeStateTrigger} from '../../animation/fade.animation';
// import {MessageI, MessageServiceI} from '../../model/message.model';

@Component({
  selector: 'wma-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  animations: [fadeStateTrigger]

})
export class MessageComponent implements OnDestroy {
 text: string;
 type: string;

  constructor(private messageService: MessageService) {}

     messageSubscriber = this.messageService.messsageStream.subscribe(message => {
      if(message.text) {
       this.text = message.text;
       this.type = message.type;
       window.setTimeout(() => {
         this.text = '';
         message.afterClose.next(true)
         message.afterClose.complete();
       }, 4000);
      }
    });

    ngOnDestroy() {
       this.messageSubscriber.unsubscribe();
    }
}
