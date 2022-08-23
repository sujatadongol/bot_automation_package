/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'list',
      name: 'componentType',
      message: 'What type of component do you need?',
      choices: ['elements', 'layouts', 'views'],
      default: 'views'
    },
    {
      type: 'confirm',
      name: 'wantStyledComponent',
      message: 'Do you want to use Styled components ?',
      default: true,
    },
    {
      when: response => {
        return response.wantStyledComponent
      },
      type: 'input',
      name: 'baseElement',
      message: 'Please enter your base element for styled component.',
      default: 'div',
    },
    {
      type: 'confirm',
      name: 'memo',
      default: false,
      message: 'Do you want to wrap your component in React.memo?',
    },
    {
      type: 'confirm',
      name: 'wantMessages',
      default: true,
      message: 'Do you want i18n messages (i.e. will this component use text)?',
    },
    {
      type: 'confirm',
      name: 'wantLoadable',
      default: false,
      message: 'Do you want to load the component asynchronously?',
    },
  ],
  actions: data => {
    // Generate index.js and index.test.js
    const actions = [];

    switch (data.componentType) {
      case 'elements': {
        actions.push({
          type: 'add',
          path: '../../app/components/elements/{{properCase name}}/index.js',
          templateFile: './component/index.js.hbs',
          abortOnFail: true,
        });

        // If the user wants  styled components
        if (data.wantStyledComponent) {
          actions.push({
            type: 'add',
            path: '../../app/components/elements/{{properCase name}}/style.js',
            templateFile: './component/style.js.hbs',
            abortOnFail: true,
          });
        }
        // If the user wants i18n messages
        if (data.wantMessages) {
          actions.push({
            type: 'add',
            path: '../../app/components/elements/{{properCase name}}/messages.js',
            templateFile: './component/messages.js.hbs',
            abortOnFail: true,
          });
        }

        // If the user wants Loadable.js to load the component asynchronously
        if (data.wantLoadable) {
          actions.push({
            type: 'add',
            path: '../../app/components/elements/{{properCase name}}/Loadable.js',
            templateFile: './component/loadable.js.hbs',
            abortOnFail: true,
          });
        }

        break;
      }
      case 'layouts': {
        actions.push({
          type: 'add',
          path: '../../app/components/layouts/{{properCase name}}/index.js',
          templateFile: './component/index.js.hbs',
          abortOnFail: true,
        });

        // If the user wants  styled components
        if (data.wantStyledComponent) {
          actions.push({
            type: 'add',
            path: '../../app/components/layouts/{{properCase name}}/style.js',
            templateFile: './component/style.js.hbs',
            abortOnFail: true,
          });
        }
        // If the user wants i18n messages
        if (data.wantMessages) {
          actions.push({
            type: 'add',
            path: '../../app/components/layouts/{{properCase name}}/messages.js',
            templateFile: './component/messages.js.hbs',
            abortOnFail: true,
          });
        }

        // If the user wants Loadable.js to load the component asynchronously
        if (data.wantLoadable) {
          actions.push({
            type: 'add',
            path: '../../app/components/layouts/{{properCase name}}/Loadable.js',
            templateFile: './component/loadable.js.hbs',
            abortOnFail: true,
          });
        }
        break;
      }
      case 'views': {
        actions.push({
          type: 'add',
          path: '../../app/components/views/{{properCase name}}/index.js',
          templateFile: './component/index.js.hbs',
          abortOnFail: true,
        });

        // If the user wants  styled components
        if (data.wantStyledComponent) {
          actions.push({
            type: 'add',
            path: '../../app/components/views/{{properCase name}}/style.js',
            templateFile: './component/style.js.hbs',
            abortOnFail: true,
          });
        }
        // If the user wants i18n messages
        if (data.wantMessages) {
          actions.push({
            type: 'add',
            path: '../../app/components/views/{{properCase name}}/messages.js',
            templateFile: './component/messages.js.hbs',
            abortOnFail: true,
          });
        }

        // If the user wants Loadable.js to load the component asynchronously
        if (data.wantLoadable) {
          actions.push({
            type: 'add',
            path: '../../app/components/views/{{properCase name}}/Loadable.js',
            templateFile: './component/loadable.js.hbs',
            abortOnFail: true,
          });
        }
        break;
      }
      default:
        break;
    }



    actions.push({
      type: 'prettify',
      path: `/components/${data.componentType}`,
    });

    return actions;
  },
};
