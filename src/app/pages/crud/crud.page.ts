import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from '../../services/crud.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.page.html',
  styleUrls: ['./crud.page.scss'],
})
export class CrudPage implements OnInit {
  public form: FormGroup;
  public id: number;
  public users: Array<any> = [];
  public isEdit: boolean = false;
  public isRemove: boolean = false;
  public type: number = 1;
  constructor(
    public formBuilder: FormBuilder,
    public alertController: AlertController,
    public crudService: CrudService
  ) {
    this.form = formBuilder.group({
      firstName: [''],
      lastName: [''],
    });
  }

  async ngOnInit() {
    await this.getUsers();
  }

  public async getUsers() {
    this.users = await this.crudService.getAll();
  }

  public async cancelForm() {
    document.querySelector('form').reset();
    this.isEdit = false;
  }

  public async submitForm() {
    await this.crudService.save(this.form.value, this.id);
    document.querySelector('form').reset();
    await this.getUsers();
    this.isEdit = false;
    this.isRemove = false;
  }

  public async update(id: number) {
    this.isRemove = true;
    this.id = id;
    this.isEdit = true;
    const user = await this.crudService.getUser(id);
    this.form.patchValue(user);
  }

  public async remove(id: number) {
    await this.crudService.remove(id);
    await this.getUsers();
  }

  public async removeAlert(id: number) {
    const user = await this.crudService.getUser(id);
    const alert = await this.alertController.create({
      header: 'Excluir',
      message: `Deseja realmente excluir o usuário <strong>"${user.firstName} ${user.lastName}"</strong>?`,
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            alert.dismiss();
          },
        },
        {
          text: 'Excluir',
          handler: () => {
            this.remove(id);
          },
        },
      ],
    });
    await alert.present();
  }

  public changeFace(event) {
    this.type = event.detail.value;
  }
}
