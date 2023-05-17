import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public visble:boolean = false;
  @Input()
  public characterList: Character[] = [{
    name: 'Trunk',
    power:10
  }]

  @Output()
  onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  onGetIndex(id?: string): void{
    if(!id) return;
    this.onDeleteCharacter.emit(id);
  }
}
