import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'list-user', component: ListUserComponent},
  { path: 'add-user', component: AddUserComponent },
  { path: 'edit-user', component:EditUserComponent},
  {path: '', component: ListUserComponent}
];

export const routing = RouterModule.forRoot(routes);