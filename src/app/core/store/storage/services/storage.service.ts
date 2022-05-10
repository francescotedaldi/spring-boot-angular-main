import {Injectable} from '@angular/core';
import {Storage} from '../model/storage.model';

@Injectable({providedIn: 'root'})
export class StorageService {
  private readonly storageURL: string = 'jgaming_storage_data';
  private readonly defaultStorage: Storage = {
    id: 'VERSION_0',
    user: null
  };

  public saveStorage(storage: Storage): void {
    localStorage.setItem(this.storageURL, JSON.stringify(storage));
  }

  public getStorage(): Storage {
    const storage = localStorage.getItem(this.storageURL);
    return storage ? JSON.parse(storage) : this.defaultStorage;
  }

}
