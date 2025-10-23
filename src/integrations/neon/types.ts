// Database types for Neon/PostgreSQL
export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  event_type: string;
  event_date: string | null;
  guest_count: string | null;
  budget: string | null;
  message: string | null;
  created_at: string;
}

export interface ContactSubmissionInsert {
  name: string;
  email: string;
  phone?: string | null;
  event_type: string;
  event_date?: string | null;
  guest_count?: string | null;
  budget?: string | null;
  message?: string | null;
}

export interface ContactSubmissionUpdate {
  name?: string;
  email?: string;
  phone?: string | null;
  event_type?: string;
  event_date?: string | null;
  guest_count?: string | null;
  budget?: string | null;
  message?: string | null;
}

// Database schema type
export interface Database {
  public: {
    Tables: {
      contact_submissions: {
        Row: ContactSubmission;
        Insert: ContactSubmissionInsert;
        Update: ContactSubmissionUpdate;
      };
    };
  };
}

// Utility types for easier usage
export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row'];
export type TablesInsert<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Insert'];
export type TablesUpdate<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Update'];
