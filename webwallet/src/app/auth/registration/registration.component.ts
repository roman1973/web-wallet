import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ControlLg} from '../../shared/control/control.lg';
import {fadeStateTrigger} from '../../shared/animation/fade.animation';
import {UserService} from '../../shared/service/user.service';
import {Router} from '@angular/router';
import {MessageComponent} from '../../shared/component/message/message.component';
import {MessageService} from '../../shared/service/message.service';

@Component({
  selector: 'wma-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  animations: [fadeStateTrigger]

})
export class RegistrationComponent implements OnInit {
  form: FormGroup;
  myControl: ControlLg;

  constructor(private userService: UserService,
              private router: Router,
              private messageService: MessageService) {
  }

  ngOnInit() {
    // this.message = new Message('danger', '');
    this.myControl = new ControlLg();
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8), this.myControl.checkOnNumb]),
      'name': new FormControl('roman', [Validators.required]),
      'agree': new FormControl(null, [Validators.requiredTrue])
    });
  }

  onSubmit() {
    this.userService.registration(this.form.value.email, this.form.value.password)
      .subscribe(
        (data: any) => {
          if (data.success) {

            this.messageService.showMessage({
              type: 'success',
              text: `${data.msg} for user  "${this.form.value.name}"`
            })
              .afterClose
              .subscribe((v: boolean) => {
                if (v) {
                  this.router.navigate(['/login'], {
                    queryParams: {
                      nowCanLogin: true
                    }
                  });
                }
              });
          }
        },
        (err) => this.messageService.showMessage({
          type: 'warn',
          text: `${err.message}`
        }));
  }
}
