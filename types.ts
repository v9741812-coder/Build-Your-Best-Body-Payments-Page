
export interface CurriculumModule {
  id: number;
  title: string;
  description: string;
  learningResource: string;
  studyMaterial: string;
  iconName: string;
}

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}
