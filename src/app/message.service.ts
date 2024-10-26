import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  _message = "Hello world"

  constructor() { }

  getmessage(){
    return this._message;
  }

}
