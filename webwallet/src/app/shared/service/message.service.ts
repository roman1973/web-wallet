import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subject} from 'rxjs/Subject';
import {MessageI, MessageServiceI} from '../model/message.model';

export class MessageService implements  MessageServiceI {
  public messsageStream = new BehaviorSubject<any>({});
  // public showStream = new BehaviorSubject<boolean>(false);


  showMessage(message: MessageI) {
    message.afterClose = new Subject();
    this.messsageStream.next(message);
     return{afterClose: message.afterClose};
  }
}
