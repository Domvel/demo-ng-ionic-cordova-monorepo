import { NgModule } from '@angular/core';
import { SharedLibComponent } from './components/hello-world/shared-lib.component';

@NgModule({
  declarations: [SharedLibComponent],
  imports: [],
  exports: [SharedLibComponent]
})
export class SharedLibModule {}
