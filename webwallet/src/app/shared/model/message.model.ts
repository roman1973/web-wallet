import {Subject} from 'rxjs/Subject';


export interface MessageServiceI {
  showMessage: (message: MessageI) => Object;
}

export interface MessageI {
  type?: string;
  text?: string;
  afterClose?: Subject<any>;
}
