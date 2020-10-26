import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(public storage: Storage) {}

  public async getAll() {
    let users = await this.storage.get('users');
    users = JSON.parse(users);
    return users;
  }

  public async getUser(id: number) {
    let users = await this.getAll();
    return users.find((user, index) => {
      return index === id ? user : null;
    });
  }

  public async save(user, id: number) {
    if (id || id === 0) {
      await this.update(user, id);
      return;
    }
    let users = await this.getAll();
    if (!users) users = [];
    users.push(user);
    this.storage.set('users', JSON.stringify(users));
  }

  public async update(user, id: number) {
    let users = await this.getAll();
    users = users.map((data, index) => {
      return index === id ? user : data;
    });
    this.storage.set('users', JSON.stringify(users));
  }

  public async remove(id: number) {
    let users = await this.getAll();
    users.splice(id, 1);
    await this.storage.set('users', JSON.stringify(users));
  }
}
