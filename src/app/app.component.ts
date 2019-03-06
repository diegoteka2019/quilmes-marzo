import { Component, ViewChild,  AfterViewInit, ElementRef} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  title = 'boot4';
  @ViewChild('sidebar') sidebar: ElementRef;
  public ActiveSideItem:string;
  public ActualDate:Date = new Date();
  
  

  private selectItem(domItem:HTMLInputElement){
    domItem.classList.add('active')
    this.ActiveSideItem = domItem.id
    console.log(this.ActiveSideItem)
  }

 private hideMenu() {
  
  if (this.sidebar.nativeElement.classList.contains("hideCmp")) {
    this.sidebar.nativeElement.classList.remove('hideCmp');   
  }
  else{ 
  this.sidebar.nativeElement.classList.add('hideCmp');
 }
}




 

}
