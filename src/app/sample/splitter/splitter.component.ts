import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-splitter',
  templateUrl: './splitter.component.html',
  styleUrls: ['./splitter.component.scss']
})
export class SplitterComponent {
  private isDragging = false;
  private initialX = 0;
  private initialY = 0;
  private offsetX = 0;
  private offsetY = 0;

  onDragStart(event: MouseEvent) {
    this.isDragging = true;
    this.initialX = event.clientX;
    this.initialY = event.clientY;
    this.offsetX = event.clientX;
    this.offsetY = event.clientY;
    const draggableElement = document.querySelector('.draggable') as HTMLElement;
    draggableElement.style.cursor = 'grabbing';
  }

  onDragMove(event: MouseEvent) {
    if (!this.isDragging) return;
    const draggableElement = document.querySelector('.draggable') as HTMLElement;
    const dx = event.clientX - this.offsetX;
    const dy = event.clientY - this.offsetY;
    this.offsetX = event.clientX;
    this.offsetY = event.clientY;
    const newLeft = draggableElement.offsetLeft + dx;
    const newTop = draggableElement.offsetTop + dy;
    draggableElement.style.left = `${newLeft}px`;
    //draggableElement.style.top = `${newTop}px`;
  }

  onDragEnd(event: MouseEvent) {
    this.isDragging = false;
    const draggableElement = document.querySelector('.draggable') as HTMLElement;
    draggableElement.style.cursor = 'grab';
  }

  constructor() {
    document.addEventListener('mousemove', this.onDragMove.bind(this));
    document.addEventListener('mouseup', this.onDragEnd.bind(this));
  }
}
