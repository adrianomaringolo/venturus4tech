import { AboutComponent } from './about/about.component';
import { ChatComponent } from './chat/chat.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: '', component: ChatComponent },
    { path: 'chat', component: ChatComponent },
    { path: 'sobre', component: AboutComponent },
    { path: '**', redirectTo: '' } 
]

export const routing = RouterModule.forRoot(appRoutes); // é necessário exportar dessa maneira para que as rotas sejam visíveis na aplicação