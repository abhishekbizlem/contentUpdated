import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { ExpandMenuDirective } from './directives/expand-menu.directive';
import { CustomerTilesComponent } from './customer-tiles/customer-tiles.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FmpTeroCardComponent } from './fmp-tero-card/fmp-tero-card.component';
import { ExpandInnerMenuDirective } from './directives/inner-menu-direcrtive';
import { SplitComponent } from './splitter/component/split.component';
import { SplitAreaDirective } from './splitter/directive/splitArea.directive';
import { VerticalSplitPaneComponent } from './split-pane/vertical-split-pane.component';
import { VerticalSplitSeparatorComponent } from './split-pane/vertical-split-pane-separator.component';
import { SplitPaneComponent } from './split-pane/split-pane.component';
const sharedModules: any[] = [
  CommonModule,
  FormsModule,
  MaterialModule,
  ReactiveFormsModule,
];

@NgModule({
  imports: [sharedModules, RouterModule, NgxChartsModule],
  providers: [],
  declarations: [
    HeaderComponent,
    LeftPanelComponent,
    ExpandMenuDirective,
    CustomerTilesComponent,
    FmpTeroCardComponent,
    ExpandInnerMenuDirective,
    SplitComponent,
    SplitAreaDirective,

    VerticalSplitPaneComponent,
    VerticalSplitSeparatorComponent,
    SplitPaneComponent

  ],
  exports: [
    sharedModules,
    NgxChartsModule,
    RouterModule,
    HeaderComponent,
    LeftPanelComponent,
    ExpandMenuDirective,
    CustomerTilesComponent,
    FmpTeroCardComponent,
    ExpandInnerMenuDirective,
    SplitComponent,
    SplitAreaDirective,



    VerticalSplitPaneComponent,
    VerticalSplitSeparatorComponent,
    SplitPaneComponent
  ],
})
export class SharedModule {}
