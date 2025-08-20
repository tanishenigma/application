import type { Meta, StoryObj } from "@storybook/react";
import Input from "../components/InputField";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    value: { control: "text" },
    onChange: { action: "changed" }, // Storybook action to simulate typing
    placeholder: { control: "text" },
    helperText: { control: "text" },
    error: { control: "text" }, // Changed from 'error' to 'error'
    disabled: { control: "boolean" },
    invalid: { control: "boolean" },
    variant: { control: "select", options: ["filled", "outlined", "ghost"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Username",
    placeholder: "Type your username",
    value: "",
    invalid: false,
    error: "", // Changed from 'error' to 'error'
    helperText: "Username must be more than 3 characters",
    size: "md",
    variant: "outlined",
  },
};

export const Email: Story = {
  args: {
    label: "Email",
    placeholder: "Type your email",
    value: "",
    invalid: false,
    error: "", // Changed from 'error' to 'error'
    helperText: "Email must be valid",
    size: "sm",
    variant: "ghost",
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    value: "",
    invalid: false,
    error: "", // Changed from 'error' to 'error'
    helperText: "Password must be more than 6 characters",
    size: "sm",
    variant: "ghost",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    placeholder: "Type your email",
    value: "invalid-email",
    invalid: true,
    error: "Please enter a valid email address",
    size: "sm",
    variant: "ghost",
  },
};

export const Disabled: Story = {
  args: {
    label: "Username",
    placeholder: "Type your username",
    value: "",
    disabled: true,
    helperText: "This field is disabled",
    size: "sm",
    variant: "ghost",
  },
};

export const LargeOutlined: Story = {
  args: {
    label: "Large Input",
    placeholder: "This is a large outlined input",
    value: "",
    size: "lg",
    variant: "outlined",
    helperText: "This is a large input with outlined variant",
  },
};
