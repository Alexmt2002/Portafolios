import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Header } from './component/header/header';

export const routes: Routes = [
    {path: '', component: Header} //Por si quiere agregar más rutas después 
];
