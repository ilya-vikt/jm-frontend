// In the layout enum lists all available layouts
export enum Layouts {
  default = 'default'
}

// LayoutFileMap as a dictionary of Layouts and component files
export const LayoutFileMap: Record<Layouts, string> = {
  default: 'DefaultLayout'
} as const
