"use client";

import React from "react";
import { Code2, Server, Database, Terminal, Square, LayoutTemplate, Palette, Braces, FileType, Globe } from "lucide-react";

const icons: Record<string, React.ReactNode> = {
    nextjs: <Globe className="h-full w-full" />,
    react: (
        <svg viewBox="-11.5 -10.232 23 20.463" fill="none" stroke="currentColor" strokeWidth="1">
            <circle cx="0" cy="0" r="2.05" fill="currentColor" stroke="none" />
            <g stroke="currentColor">
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
        </svg>
    ),
    express: <Terminal className="h-full w-full" />,
    nodejs: <Server className="h-full w-full" />,
    mongodb: <Database className="h-full w-full" />,
    typescript: <FileType className="h-full w-full" />,
    javascript: <Braces className="h-full w-full" />,
    tailwind: <Square className="h-full w-full" />,
    nestjs: (
        <svg viewBox="0 0 128 128" fill="currentColor">
            <path d="M121.7 34L64 0.7c-3.1-1.8-6.9-1.8-10 0L2.3 30.6c-1.4.8-2.3 2.3-2.3 3.9v62c0 1.6.9 3.1 2.3 3.9l51.7 29.9c1.6.9 3.3 1.4 5.1 1.4 1.7 0 3.5-.5 5.1-1.4l57.7-33.3c1.4-.8 2.3-2.3 2.3-3.9V37.9c-.2-1.6-1.1-3.1-2.5-3.9zM113.8 91L64 119.7 14.2 91V39.4l49.8-28.7L113.8 39.4V91z" />
            <path d="M64 26.5L34.2 43.7v34.4L64 95.3l29.8-17.2V43.7L64 26.5zm19.9 47.7L64 85.7 44.1 74.2v-23l19.9-11.5 19.9 11.5v23z" />
        </svg>
    ),
    html5: <Code2 className="h-full w-full" />,
    css3: <Palette className="h-full w-full" />,
    bootstrap: (
        <svg viewBox="0 0 128 128" fill="currentColor">
            <path d="M22 1c-11.6 0-21 9.4-21 21v84c0 11.6 9.4 21 21 21h84c11.6 0 21-9.4 21-21v-84c0-11.6-9.4-21-21-21h-84zm18.3 29.5h33.8c7.3 0 13.1 1.7 17.5 5.1 4.4 3.4 6.6 8.3 6.6 14.7 0 4.1-1.1 7.6-3.3 10.5s-5.4 5-9.6 6.3v.4c5.4 1.1 9.5 3.3 12.3 6.6s4.2 7.7 4.2 13.2c0 7.3-2.5 13-7.5 17.1s-11.9 6.2-20.7 6.2h-33.3v-80.1zm14 12.3v22.4h17.9c4.2 0 7.4-.9 9.6-2.7s3.3-4.5 3.3-8.1-1.1-6.1-3.3-7.9-5.4-2.7-9.6-2.7h-17.9zm0 33v22.4h20.7c4.6 0 8.1-1.1 10.5-3.3s3.6-5.4 3.6-9.6c0-4.1-1.2-7.3-3.6-9.6s-5.9-3.4-10.5-3.4h-20.7z" />
        </svg>
    ),
    mysql: <Database className="h-full w-full" />,
    vercel: (
        <svg viewBox="0 0 128 128" fill="currentColor">
            <path d="M64 0l64 128H0z" />
        </svg>
    ),
    netlify: (
        <svg viewBox="0 0 128 128" fill="currentColor">
            <path d="M121 64L64 7l-57 57 57 57 57-57zm-57 43.1L20.9 64 64 20.9 107.1 64 64 107.1z" />
            <path d="M64 34.2L34.2 64 64 93.8 93.8 64 64 34.2zm0 46.5L47.5 64 64 47.5 80.5 64 64 80.5z" />
        </svg>
    ),
    reactnative: (
        <svg viewBox="-11.5 -10.232 23 20.463" fill="none" stroke="currentColor" strokeWidth="1">
            <circle cx="0" cy="0" r="2.05" fill="currentColor" stroke="none" />
            <g stroke="currentColor">
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
        </svg>
    ),
};

export function SkillIcon({ id, className }: { id: string; className?: string }) {
    const icon = icons[id.toLowerCase()];

    if (!icon) return null;

    return (
        <div className={className}>
            {icon}
        </div>
    );
}
