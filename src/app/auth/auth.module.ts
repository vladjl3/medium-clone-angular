import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BackendErrorMessagesModule } from '@app/shared/components/backend-error-messages/backend-error-messages.module';
import { PersistenceService } from '@app/shared/services/persistence.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import * as fromAuthReducer from './store/auth.reducer';
import { RegisterEffect } from './store/effects/register.effects';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    BackendErrorMessagesModule,
    StoreModule.forFeature(
      fromAuthReducer.featureName,
      fromAuthReducer.reducer
    ),
    EffectsModule.forFeature([RegisterEffect]),
  ],
  providers: [AuthService, PersistenceService],
})
export class AuthModule {}
