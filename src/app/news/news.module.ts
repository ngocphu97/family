import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { services } from './services';
import { containers } from './containers';

import { components } from './components';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule
  ],
  declarations: [
   ...containers,
   ...components
  ],
  providers: [
    ...services
  ]
})
export class NewsModule { }
