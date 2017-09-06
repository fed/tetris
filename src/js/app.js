'use strict';

requirejs.config({
  baseUrl: 'src/js',
  paths: {
    jquery: '../../node_modules/jquery/dist/jquery.min',
  }
});

requirejs(['jquery', 'game'], function ($, game) {
  game.init();
});
