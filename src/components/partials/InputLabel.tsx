import React from "react";

export default function InputLabel({
    value,
    children,
    ...props
}: React.LabelHTMLAttributes<HTMLLabelElement> & {
    value?: string;
    children?: React.ReactNode;
}) {
    return (
        <label className="block font-medium text-sm text-gray-700 dark:text-gray-300" {...props}>
            {value && <span>{value}</span>}
            {!value && <span>{children}</span>}
        </label>
    );
}
