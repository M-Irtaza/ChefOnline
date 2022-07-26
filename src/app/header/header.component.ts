import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  dropdown: boolean = false;
    @Output() linkSelect = new EventEmitter<string>();
     onSelect(link: string) {
        this.linkSelect.emit(link)
     }
}
 