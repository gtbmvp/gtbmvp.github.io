import React from 'react';
import '../src/index.css';
import type { Preview } from '@storybook/react';

import { ThemeProvider } from '../src/app/ThemeProvider';
import { LocalizationInitiator } from '../src/app/Localization/LocalizationInitiator';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    globalTypes: {
        darkMode: {},
    },
    decorators: [
        (Story) => (
            <>
                <LocalizationInitiator />
                <ThemeProvider>
                    <Story />
                </ThemeProvider>
            </>
        ),
    ],
};

export default preview;
