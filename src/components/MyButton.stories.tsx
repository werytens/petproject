import MyButton from "./MyButton";

import type {Meta, StoryObj} from '@storybook/react';


const meta: Meta<typeof MyButton> = {
    component: MyButton,
};

export default meta;
type Story = StoryObj<typeof MyButton>;

export const Primary: Story = {
    args: {
        children: String(process.env.REACT_APP_SECRET_CODE),
        type: 'main',
        rounded: false
    },
};

export const Secondary: Story = {
    args: {
        children: String(process.env.REACT_APP_SECRET_CODE),
        type: 'second',
        rounded: true
    }
}