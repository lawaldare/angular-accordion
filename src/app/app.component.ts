import { AfterViewInit, Component, QueryList, ViewChildren } from '@angular/core';
import faqs from '../assets/database/faqs.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'accordion';

  faQuestions = faqs;

  @ViewChildren('accordionItemHeader') accordionItems: QueryList<HTMLDivElement> | undefined


  ngAfterViewInit() {
    if (this.accordionItems) {
      this.accordionItems['_results'].forEach((accordionItemHeader: any) => {
        accordionItemHeader['nativeElement'].addEventListener('click', () => {

          const currentlyActiveAccordionItemHeader: any = document.querySelector(".accordion__item__header.active");

          if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader['nativeElement']) {
            currentlyActiveAccordionItemHeader.classList.toggle("active");
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
          }

          accordionItemHeader['nativeElement'].classList.toggle('active');
          const accordionItemBody = accordionItemHeader['nativeElement'].nextElementSibling;
          if (accordionItemHeader['nativeElement'].classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
          } else {
            accordionItemBody.style.maxHeight = '0';
          }
        })
      })
    }
  }
}
