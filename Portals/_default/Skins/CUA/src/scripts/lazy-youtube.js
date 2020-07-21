import { Module } from './app';
import LazyYouTube from './components/LazyYouTube';

const app = new Module(LazyYouTube);
app.init();
