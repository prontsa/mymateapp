
export enum WidgetSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  WIDE = 'wide'
}

export enum ClockFont {
  SANS = 'sans',
  MONO = 'mono',
  SERIF = 'serif'
}

export interface WidgetStyle {
  backgroundColor: string;
  textColor: string;
  font: ClockFont;
  borderWidth: number;
  backgroundImage?: string; // Base64 or URL
  imageOpacity?: number;
}

export interface Widget {
  id: string;
  label: string;
  locationName: string;
  timezone: string;
  size: WidgetSize;
  style: WidgetStyle;
  isFavorite: boolean;
}

export interface Friend {
  id: string;
  name: string;
  locationName: string;
  timezone: string;
  avatar: string;
}

export interface TimeInfo {
  time: string;
  date: string;
  period: string;
  dayProgress: number; // 0 to 1
}
