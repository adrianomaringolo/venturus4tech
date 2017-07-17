import { ChatListComponent } from './chat-list/chat-list.component';

import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: '', component: ChatListComponent },
    { path: '**', redirectTo: '' } 
]

export const routing = RouterModule.forRoot(appRoutes);