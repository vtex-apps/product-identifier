declare module 'vtex.css-handles' {
    import React from 'react';
    export const useCssHandles = (cssHandles: any) => {
        const handles: any = [];
        cssHandles.forEach((handle: any) => {
            handles[handle] = handle
        })

        return handles
    }
}