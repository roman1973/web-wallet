import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ControlLg} from '../../shared/control/control.lg';
import {MyErrorStateMatcher} from '../../shared/control/MyErrorStateMatcher.control';
import {UserService} from '../../shared/service/user.service';
import {fadeStateTrigger} from '../../shared/animation/fade.animation';
import {AuthService} from '../../shared/service/auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {MessageComponent} from '../../shared/component/message/message.component';
import {MessageService} from '../../shared/service/message.service';


@Component({
  selector: 'wma-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fadeStateTrigger]
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  myControl: ControlLg;
  matcher: MyErrorStateMatcher;

  constructor(private userService: UserService,
              private authservice: AuthService,
              private route: ActivatedRoute,
              private messageService: MessageService,
              private router: Router) {
  }

  ngOnInit() {
    this.matcher = new MyErrorStateMatcher();
    this.myControl = new ControlLg();
    this.route.queryParams.subscribe((params: Params) => {
      if (params['nowCanLogin']) {
        this.messageService.showMessage({
          text: 'Теперь вы можете зайти в систему',
          type: 'success'
        });
      } else if (params['accessDenied']) {
        this.messageService.showMessage({
          text: 'Для работы с системой вам необходимо залогинится',
          type: 'warning'
        });
      }
    });

    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8), this.myControl.checkOnNumb])
    });
  }

  onSubmit() {
    const formData = this.form.value;
    this.userService.login2(formData.email, formData.password)
      .subscribe((user: any) => {
          this.authservice.login(user.id, user.name, user.pass);
          this.messageService.showMessage({
            type: 'success',
            text: `Login  "${user.name}"  success`
          })
            .afterClose
            .subscribe((v: boolean) => {
              if (v) {
                this.router.navigate(['/system', 'valrate']);
              }
            });
        },
        (err) => this.messageService.showMessage({
          type: 'warn',
          text: 'Uncorrect client data'
        })
      );
  }

}
