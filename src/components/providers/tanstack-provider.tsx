"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react';

interface TanstackProviderProps {
    children: React.ReactNode;
}

export const TanstackProvider = ( {children}: TanstackProviderProps) => {
    const [useQuery] = useState(() => new QueryClient());
    return <QueryClientProvider client={useQuery}>{children}</QueryClientProvider>;
}