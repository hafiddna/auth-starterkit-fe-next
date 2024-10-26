import React from "react";

export default function InputError({
    message,
    ...props
}: React.HTMLAttributes<HTMLDivElement> & {
    message: string;
}) {
    return message && <div {...props} className="text-sm text-red-600 dark:text-red-400">{message}</div>;
}
