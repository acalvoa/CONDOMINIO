import { join } from 'path';

import { SeedConfig } from './seed.config';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();
    // this.APP_TITLE = 'Put name of your app here';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      {src: 'socket.io-client/socket.io.js', inject: 'libs'},
      {src: 'sails.io.js/sails.io.js', inject: 'libs'},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      ...this.APP_ASSETS,
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      
    ];

    /* Add to or override NPM module configurations: */
    // this.mergeObject(this.PLUGIN_CONFIGS['browser-sync'], { ghostMode: false });
    this.SYSTEM_CONFIG_DEV.paths['angular2-sails'] = `${this.APP_BASE}node_modules/angular2-sails/dist/index`;
    this.SYSTEM_CONFIG_DEV.paths['angular2-datatable'] = `${this.APP_BASE}node_modules/angular2-datatable/datatable`;

    this.SYSTEM_BUILDER_CONFIG.packages['angular2-sails'] = {
        main: 'index.js',
        defaultExtension : 'js'
    }
    this.SYSTEM_BUILDER_CONFIG.packages['angular2-datatable'] = {
        main: 'datatable.js',
        defaultExtension : 'js'
    }

    //  this.SYSTEM_CONFIG_DEV.paths = {
    //   'angular2-sails': `${this.APP_BASE}node_modules/angular2-sails/dist/index`,
    //   // 'angular2-datatable': `${this.APP_BASE}node_modules/angular2-datatable/datatable`
    // }

    // this.SYSTEM_BUILDER_CONFIG.packages = {
    //   'angular2-sails': {
    //     main: 'index.js',
    //     defaultExtension : 'js'
    //   },
    //   // 'angular2-datatable': {
    //   //   main: 'datatable.js',
    //   //   defaultExtension : 'js'
    //   // }
    // } 


  }

}
