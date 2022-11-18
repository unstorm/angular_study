import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { setSampleTrue } from 'src/app/store/ui-state/ui-state.action';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent implements OnInit {

  constructor(
    private store: Store,
    public formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.store.dispatch(setSampleTrue())
  }
  
  loginForm = this.formBuilder.group({
    accessId: '',
    password: ''
  })

  joinForm = this.formBuilder.group({
    joinId: '',
    name: '',
    pwd: '',
    confirmPwd: '',
    address: '',
    tel: '',
    cellPhone: ''
  })  

  onLogin(): void {
    console.log('onLogin');
    let accessId = this.loginForm.value.accessId;
    let password = this.loginForm.value.password;

    console.log(accessId);
    console.log(password);

    if (accessId === 'hojinsun' && password === '1234') {
      alert('로그인 되었습니다.');
    } else {
      alert('ID 또는 Password가 다릅니다!');
    }
  }

  onJoin(): void {
    let joinId = this.joinForm.value.joinId;
    let name = this.joinForm.value.name;
    let pwd = this.joinForm.value.pwd;
    let confirmPwd = this.joinForm.value.confirmPwd;
    let address = this.joinForm.value.address;
    let tel = this.joinForm.value.tel;
    let cellPhone = this.joinForm.value.cellPhone;

    console.log(joinId)
    console.log(name)
    console.log(pwd)
    console.log(confirmPwd)
    console.log(address)
    console.log(tel)
    console.log(cellPhone)
  }

  numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
