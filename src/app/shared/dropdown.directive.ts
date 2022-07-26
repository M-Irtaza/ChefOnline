import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit{

  @HostBinding('class.open')isOpen;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit() {
    this.isOpen = false;
  }

  constructor(private elementRef: ElementRef) { }

}
