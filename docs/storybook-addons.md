# Installing Storybook addons

This step-by-step guide is written with `storybook-addon-xd-designs` and `storybook-addon-designs` in mind, but a similar approach should work for other addons as well. See the docs for your addon and adjust accordingly, and don't be afraid to ask for help if something seems confusing!

## Part 1. Install the needed packages
As written in the [storybook-addon-xd-designs readme](https://github.com/morgs32/storybook-addon-xd-designs) and the  [storybook-addon-designs readme](https://github.com/pocka/storybook-addon-designs), you should first install some packages from npm!

1. ### Go to the project directory
    This could be a bit confusing: the addon's GitHub repository isn't something we need, because the package is in npm for us to install. The readme in that repository is something we're probably interested in, but we don't want to clone this repository or anything like that, just follow the directions in it and use it in our own project.

    Navigate to your own **Storybook project directory** in Terminal (e.g. the one we cloned from git in the first workshop). You might be here already if you were running `npm start` previously.

2. ### Install the packages
    Run the following commands, one by one:

   1. For `storybook-addon-xd-designs`:
      ```
      npm install --save-dev storybook-addon-xd-designs
      npm install --save-dev @storybook/addons
      npm install --save-dev @storybook/components
      npm install --save-dev @storybook/theming
      ```

   2. For `storybook-addon-designs`:
      ```
      npm install --save-dev storybook-addon-designs
      npm install --save-dev @storybook/addons
      ```
    Now you've installed the needed dependencies from npm to your project—you can see their names as added rows in your `package.json` file. The first one is the addon itself, and the other ones are the its own dependencies according to the readme.

    After installing the new packages, you might need to kill and restart the `npm start` process if you had it running.

## Part 2. Register the addon
To use an addon with Storybook, you have to register it first.

1. ### Open your Storybook configuration file
    In your project root directory, there should be a directory named `.storybook` and inside it, a file named `main.js`. Open this file in your code editor. It should look something like this:

    **`.storybook/main.js`**
    ``` js
    module.exports = {
      "stories": [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
      ],
      "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/preset-create-react-app"
      ]
    }
    ```

    This file tells our Storybook where to find our stories and which addons are in use.

2. ### Add the addon to the configuration
    Add `"storybook-addon-xd-designs"` or `"storybook-addon-designs"` (or whichever addon you want to use) to the addons array of the `module.exports` object.

   1. For `storybook-addon-xd-designs`:

      **`.storybook/main.js`**
      ``` js
      module.exports = {
        "stories": [
          "../src/**/*.stories.mdx",
          "../src/**/*.stories.@(js|jsx|ts|tsx)"
        ],
        "addons": [
          "@storybook/addon-links",
          "@storybook/addon-essentials",
          "@storybook/preset-create-react-app",
          "storybook-addon-xd-designs"
        ]
      }
      ```

   2. For `storybook-addon-designs`:

      **`.storybook/main.js`**
      ``` js
      module.exports = {
        "stories": [
          "../src/**/*.stories.mdx",
          "../src/**/*.stories.@(js|jsx|ts|tsx)"
        ],
        "addons": [
          "@storybook/addon-links",
          "@storybook/addon-essentials",
          "@storybook/preset-create-react-app",
          "storybook-addon-designs"
        ]
      }
      ```

Now our Storybook knows we want to use this new addon!

## Part 3. Adding the spec to a story
As this addon links a specific artboard from Adobe XD to a story, we need to add that ardboard's URL for the story itself to see it in our Storybook.

1. ### Open a story file
    Open the story you want to add the spec to. In this example we are editing the `src/stories/Button.stories.tsx` file. The first rows of the file should look as such:

    **`src/stories/Button.stories.tsx`**
    ```js
    import React from "react";
    import { Story, Meta } from "@storybook/react/types-6-0";

    // ...
    // ...
    // whole lot of other stuff below
    // ...
    ```

2. ### Import the decorator
    Now we're going to import the **decorator** to the story. In Storybook world, a decorator is something that our story is wrapped into–it is going to give our story some new functionalities.

   1. For `storybook-addon-xd-designs`, we can add an import for the `withXD` decorator this way:

      **`src/stories/Button.stories.tsx`**
      ```js
      import React from "react";
      import { Story, Meta } from "@storybook/react/types-6-0";
      import { withXD } from "storybook-addon-xd-designs";

      // ...
      // ...
      // whole lot of other stuff below
      // ...
      ```

      That row is now going to tell our Button that we want to use `withXD` from a package named `storybook-addon-xd-designs`.

   2. For `storybook-addon-designs`, add an import for the `withDesign` decorator like this:

      **`src/stories/Button.stories.tsx`**
      ```js
      import React from "react";
      import { Story, Meta } from "@storybook/react/types-6-0";
      import { withDesign } from 'storybook-addon-designs'

      // ...
      // ...
      // whole lot of other stuff below
      // ...
      ```

      That row is now going to tell our Button that we want to use `withDesign` from a package named `storybook-addon-designs`.

3. ### Add the decorator to your export
    Find the default export from the file. It looks something like this:

    **`src/stories/Button.stories.tsx`**
    ```js
    // ...
    // all kinds of stuff
    // ...

    export default {
      title: "Example/Button",
      component: Button,
      argTypes: {
        backgroundColor: { control: "color" },
      },
    } as Meta;

    // ...
    // all kinds of other stuff
    // ...
    ```

   1. For `storybook-addon-xd-designs`, add your decorator in that object this way:

      **`src/stories/Button.stories.tsx`**
      ```js
      // ...
      // all kinds of stuff
      // ...

      export default {
        title: "Example/Button",
        component: Button,
        argTypes: {
          backgroundColor: { control: "color" },
        },
        decorators: [withXD],
      } as Meta;

      // ...
      // all kinds of other stuff
      // ...
      ```

   2. For `storybook-addon-designs`, add your decorator in that object this way:

      **`src/stories/Button.stories.tsx`**
      ```js
      // ...
      // all kinds of stuff
      // ...

      export default {
        title: "Example/Button",
        component: Button,
        argTypes: {
          backgroundColor: { control: "color" },
        },
        decorators: [withDesign],
      } as Meta;

      // ...
      // all kinds of other stuff
      // ...
      ```

4. ### Get your spec artboard URL
    Then to the actual spec! First we need the artboard URL: [here are the step-by-step instructions for getting the URL from XD](https://xd.adobe.com/view/7377f55a-1dfe-469a-64a2-8a8f8d907c01-0546/?fullscreen). If you're using Figma, just get the desired artboard URL by selecting it and clicking the Share-button.
5. ### Linking the spec to the story
    The `Button.stories.tsx` actually has four different stories: **Primary**, **Secondary**, **Small** and **Large**. These all might have their own specs and you can add all those separately, but let's add one first for the **Primary** one.

    In the file, find where the `Primary.args` is. These `args` are the props we want to pass to pass to our `Button` component in this story.

    **`src/stories/Button.stories.tsx`**
    ```js
    // ...
    // all kinds of stuff
    // ...

    export const Primary = Template.bind({});
    Primary.args = {
      primary: true,
      label: "Button",
    };

    // ...
    // all kinds of other stuff
    // ...
    ```

    We want to add the design spec as `parameters` to our story.

   1. With `storybook-addon-xd-designs`, we're going to add these after the `args` like this:

      **`src/stories/Button.stories.tsx`**
      ```js
      // ...
      // all kinds of stuff
      // ...

      export const Primary = Template.bind({});
      Primary.args = {
        primary: true,
        label: "Button",
      };
      Primary.parameters = {
        design: {
          artboardUrl:
            'https://xd.adobe.com/view/THIS-IS-THE-URL-YOU-JUST-COPIED-FROM-XD',
        },
      };

      // ...
      // all kinds of other stuff
      // ...
      ```

   2. With `storybook-addon-designs`, we're going to add these after the `args` like this:

      **`src/stories/Button.stories.tsx`**
      ```js
      // ...
      // all kinds of stuff
      // ...

      export const Primary = Template.bind({});
      Primary.args = {
        primary: true,
        label: "Button",
      };
      Primary.parameters = {
        design: {
          type: 'figma',
          url:
            'https://www.figma.com/file/THIS-IS-THE-URL-YOU-JUST-COPIED-FROM-FIGMA',
        },
      };

      // ...
      // all kinds of other stuff
      // ...
      ```

    Remember to change the URL to the actual one!

If you check your Storybook in the broser, your **Primary** story should have a new tab called XD Design or Design!

## 4. More specs to more stories?

You need to do part 1 and 2 only once in a project. To add more specs to more stories, just repeat part 3 as many times you wish with all the different files and stories inside them.
