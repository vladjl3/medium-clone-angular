import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BackendErrorMessagesModule } from '@app/shared/components/backend-error-messages/backend-error-messages.module';
import { PersistenceService } from '@app/shared/services/persistence.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import * as AuthReducer from './store/auth.reducer';
import { FetchCurrentUserEffect } from './store/effects/fetch-current-user.effects';
import { LoginEffect } from './store/effects/login.effects';
import { RegisterEffect } from './store/effects/register.effects';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    BackendErrorMessagesModule,
    StoreModule.forFeature(AuthReducer.featureName, AuthReducer.reducer),
    EffectsModule.forFeature([
      RegisterEffect,
      LoginEffect,
      FetchCurrentUserEffect,
    ]),
  ],
  providers: [AuthService, PersistenceService],
})
export class AuthModule {}
