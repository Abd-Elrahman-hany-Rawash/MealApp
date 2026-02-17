/**
 * Modern Food App Design System
 * Color palette: Vibrant, appetizing, fresh
 */
export const Colors = {
  // Primary - Vibrant Orange (appetizing, energetic)
  primary: '#FF6B35',
  primaryLight: '#FF8C5A',
  primaryDark: '#E85D2C',
  
  // Secondary - Deep Purple (sophistication)
  secondary: '#6C3FB0',
  secondaryLight: '#8B5FD4',
  secondaryDark: '#542F8C',
  
  // Accent colors
  accent: '#FFB627', // Warm amber for highlights
  accentGreen: '#52B788', // Fresh green for healthy badges
  accentRed: '#EF476F', // Coral red for favorites
  
  // Surfaces
  background: '#FFF8F3', // Light warm background
  surface: '#FFFFFF', // Pure white cards
  surfaceSecondary: '#F8F9FA', // Light gray alternative
  
  // Text
  text: '#2B2D42', // Dark charcoal
  textSecondary: '#6C757D', // Medium gray
  textMuted: '#ADB5BD', // Light gray
  textOnPrimary: '#FFFFFF', // White on colored backgrounds
  textOnDark: '#F8F9FA', // Light text on dark backgrounds
  
  // Borders & Dividers
  border: '#E9ECEF',
  borderLight: '#F1F3F5',
  divider: '#DEE2E6',
  
  // Status & Utility
  success: '#52B788',
  warning: '#FFB627',
  error: '#EF476F',
  info: '#4CC9F0',
  
  // Overlays
  overlay: 'rgba(0, 0, 0, 0.4)',
  overlayLight: 'rgba(0, 0, 0, 0.15)',
  shimmer: 'rgba(255, 255, 255, 0.3)',
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

export const BorderRadius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  full: 9999,
};

export const Typography = {
  h1: {
    fontSize: 32,
    fontWeight: '800',
    color: Colors.text,
    letterSpacing: -0.5,
  },
  h2: {
    fontSize: 26,
    fontWeight: '700',
    color: Colors.text,
    letterSpacing: -0.3,
  },
  h3: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.text,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.text,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textSecondary,
  },
  body: {
    fontSize: 15,
    color: Colors.textSecondary,
    lineHeight: 22,
  },
  bodyLarge: {
    fontSize: 16,
    color: Colors.textSecondary,
    lineHeight: 24,
  },
  caption: {
    fontSize: 13,
    fontWeight: '500',
    color: Colors.textMuted,
  },
  badge: {
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
};

export const Shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 6,
  },
  xl: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 24,
    elevation: 8,
  },
};
