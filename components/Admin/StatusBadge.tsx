import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface StatusBadgeProps {
    status: 'new' | 'seen' | 'responded' | 'archived';
    className?: string;
}

const statusConfig = {
    new: {
        label: 'New Inquiry',
        styles: 'bg-accent/10 text-accent border-accent/20'
    },
    seen: {
        label: 'Reading',
        styles: 'bg-primary/10 text-primary border-primary/20'
    },
    responded: {
        label: 'Responded',
        styles: 'bg-secondary text-primary border-border'
    },
    archived: {
        label: 'Archived',
        styles: 'bg-gray-100 text-gray-500 border-gray-200'
    }
};

export default function StatusBadge({ status, className }: StatusBadgeProps) {
    const config = statusConfig[status] || statusConfig.new;

    return (
        <span className={cn(
            "inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border",
            config.styles,
            className
        )}>
            {config.label}
        </span>
    );
}
