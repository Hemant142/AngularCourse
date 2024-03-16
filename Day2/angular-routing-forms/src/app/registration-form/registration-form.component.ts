import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  user: { username: string, email: string, password: string } = {
    username: '',
    email: '',
    password: ''
  };
  confirmPassword = '';
  userList: { username: string, email: string, password: string }[] = [];
  editingIndex: number = -1;

  ngOnInit() {
    const storedUserList = localStorage.getItem('userList');
    if (storedUserList) {
      this.userList = JSON.parse(storedUserList);
    }
  }

  onSubmit() {
    this.userList.push({ ...this.user });
    localStorage.setItem('userList', JSON.stringify(this.userList));
    this.user = { username: '', email: '', password: '' };
  }

  editUser(index: number) {
    this.user = { ...this.userList[index] };
    this.editingIndex = index;
  }

  deleteUser(index: number) {
    this.userList.splice(index, 1);
    localStorage.setItem('userList', JSON.stringify(this.userList));
  }
}
