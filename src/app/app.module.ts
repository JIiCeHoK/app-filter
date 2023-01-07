import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular'
import { HttpLink } from 'apollo-angular/http'
import { InMemoryCache } from '@apollo/client/core'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { FilterComponent } from './components/filter/filter.component';
import { StoreModule } from '@ngrx/store';
import { shipReducer } from './store/reducers/ship.reducer';
import { ShipEntityComponent } from './components/ship-entity/ship-entity.component';
import { EffectsModule } from '@ngrx/effects';
import { ShipEffects } from './store/effects/ship.effect';
import { PaginationComponent } from './components/pagination/pagination.component';
import { configReducer } from './store/reducers/config.reducer';

@NgModule({
    declarations: [
        AppComponent,
        TestComponent,
        ListComponent,
        ListItemComponent,
        SvgIconComponent,
        FilterComponent,
        ShipEntityComponent,
        PaginationComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ApolloModule,
        HttpClientModule,
        StoreModule.forRoot({ ships: shipReducer, config: configReducer }, {}),
        EffectsModule.forRoot([ShipEffects])
    ],
    providers: [{
        provide: APOLLO_OPTIONS,
        useFactory(httpLink: HttpLink) {
            return {
                cache: new InMemoryCache(),
                link: httpLink.create({
                    uri: 'https://api.spacex.land/graphql/'
                })
            }
        },
        deps: [HttpLink]
    }],
    bootstrap: [AppComponent],
    exports: [
        SvgIconComponent
    ]
})
export class AppModule { }
