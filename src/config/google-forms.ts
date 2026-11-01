/**
 * Google Forms Integration Configuration for Brownsberg
 * 
 * To connect your Google Form:
 * 1. Create a Google Form with fields: Name, Email, Phone, Service, Message.
 * 2. Click "Get pre-filled link", fill placeholder values, and click "Get link".
 * 3. Inspect the link to extract:
 *    - The Form ID from the URL (replace /viewform with /formResponse)
 *    - The entry IDs (e.g., entry.123456789) for each input.
 * 4. Paste your form URL and entry IDs below, and set `isConfigured: true`.
 */

export interface GoogleFormsConfig {
  /** Set to true when you have inserted your real Google Form URL and entry IDs */
  isConfigured: boolean;
  /**
   * The Google Form submission endpoint.
   * Format: https://docs.google.com/forms/d/e/{FORM_ID}/formResponse
   */
  formEndpoint: string;
  /** Entry field IDs matching each form input in Google Forms */
  entryIds: {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
  };
}

export const GOOGLE_FORMS_CONFIG: GoogleFormsConfig = {
  // Set to true once you paste your real Google Form URL and entry IDs
  isConfigured: false,

  // Replace with your Google Form URL:
  // e.g. "https://docs.google.com/forms/d/e/1FAIpQLSc.../formResponse"
  formEndpoint: "",

  // Replace with your specific entry IDs from the prefilled link:
  entryIds: {
    name: "entry.1000001",
    email: "entry.1000002",
    phone: "entry.1000003",
    service: "entry.1000004",
    message: "entry.1000005",
  },
};

export const SERVICE_OPTIONS = [
  "Telling Stories with AI",
  "Ads with AI",
  "Learning with AI",
  "Instructional Design & Learning Strategy",
  "Content Digitization",
  "Training Courses",
  "Custom Enterprise AI Content & Training",
] as const;

export type ServiceOption = (typeof SERVICE_OPTIONS)[number];

