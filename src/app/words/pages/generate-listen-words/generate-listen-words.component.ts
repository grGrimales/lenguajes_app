import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-listen-words',
  templateUrl: './generate-listen-words.component.html',
  styleUrls: ['./generate-listen-words.component.css']
})
export class GenerateListenWordsComponent implements OnInit {

  repetitions: number;
  category: string[];
  categories: string[] = ['Categoría 1', 'Categoría 2', 'Categoría 3'];
  listen: boolean;


  listSegmento: any[] | any = ["option1", "option2"]
  selectedItems: any = [];
  showDropdown: boolean = false;
  filteredItems: string[] = [];
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const listenInformation = {
      repetitions: this.repetitions,
      category: this.category,
      listen: this.listen
    };
    localStorage.setItem('generateListenInformation', JSON.stringify(listenInformation));
  }



  @HostListener('document:click', ['$event'])
  onDocumentClick(event: any) {
    if (!event.target.closest('.search-bar')) {
      this.closeDropdown();
    }
  }

  filterItems(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredItems = this.listSegmento.filter(item => item.toLowerCase().includes(searchTerm));
    this.showDropdown = true;
  }

  selectItem(item: string) {



    if (!this.isSelected(item)) {
      this.selectedItems.push(item);
    } else {
      this.selectedItems = this.selectedItems.filter(selectedItem => selectedItem !== item);
    }


  }

  isSelected(item: string): boolean {
    return this.selectedItems.indexOf(item) !== -1;
  }

  toggleDropdown(event: any) {
    this.showDropdown = !this.showDropdown;
    if (!this.showDropdown) {
      event.stopPropagation();
    }
  }

  closeDropdown() {
    this.showDropdown = false;
  }

  onTabPressed(event: KeyboardEvent) {
    if (event.key === "Tab") {
      this.closeDropdown()
    }
  }

}
