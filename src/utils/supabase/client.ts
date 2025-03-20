import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iwgakkqeqlzmvgflifop.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3Z2Fra3FlcWx6bXZnZmxpZm9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0NDc1NzEsImV4cCI6MjA1ODAyMzU3MX0.C06r7yPCcKrvUboTVUbXnOGMViBVqCEQxWsIqJI3qUQ';

export const supabase = createClient(supabaseUrl, supabaseKey);
