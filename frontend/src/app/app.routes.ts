import { Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CestaComponent } from './cesta/cesta.component';
import { ContatoComponent } from './contato/contato.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { EsqueciComponent } from './esqueci/esqueci.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { VitrineComponent } from './vitrine/vitrine.component';
export const routes: Routes = [
    {path:"cesta", component: CestaComponent},
    {path:"esqueci", component: EsqueciComponent},
    {path:"pesquisa", component:PesquisaComponent},
    {path:"detalhe", component: DetalheComponent},
    {path:"cadastro", component:CadastroComponent},
    {path:"vitrine", component:VitrineComponent},
    {path:"", component:VitrineComponent},
    {path:"login", component:LoginComponent},
    {path:"contato", component:ContatoComponent},
    {path:"logout", component:LogoutComponent}
];
