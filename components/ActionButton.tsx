import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import type { EventName } from '@lit-labs/react';
import { ActionButton as SpActionButton } from '@spectrum-web-components/action-button';

import '@spectrum-web-components/action-button/sp-action-button.js';

export const ActionButton = createComponent({
    displayName: 'ActionButton',
    elementClass: SpActionButton,
    react: React,
    tagName: 'sp-action-button',
    events: {
        longpress: 'longpress' as EventName<CustomEvent>, // Synthesizes a "longpress" interaction that signifies a `pointerdown` event that is >=300ms or a keyboard event wher code is `Space` or code is `ArrowDown` while `altKey===true`.
        change: 'change' as EventName<Event>, // Announces a change in the `selected` property of an action button
    },
});

export type ActionButtonType = EventTarget & SpActionButton;
