import { Injectable } from '@angular/core';

interface iModal {
  id: string;
  visable: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: iModal[] = [];
  constructor() {}

  isModalOpen(id: string) : boolean {   
    return Boolean(this.modals.find((m) => m.id === id)?.visable);
  }

  toggleModal(id: string) {
    const modal = this.modals.find((m) => m.id === id);

    if(modal) {
      modal.visable = !modal.visable;
    }
  }

  register(id: string) {
    this.modals.push({
      id,
      visable: false,
    });
  }

  unRegister(id: string) {
    this.modals = this.modals.filter((m) => m.id !== id)
  }
}
