import { createTheme, defaultTheme, Theme } from '@spark-ui/theme-utils'

export const darkTheme: Theme = createTheme({
  colors: {
    // Primary
    primary: '#F07B42',
    onPrimary: '#14191F',
    primaryContainer: '#5C250A',
    onPrimaryContainer: '#FBDFD1',
    primaryHovered: '#EC5A13',
    primaryDisabled: '#6F7378',
    primaryFocused: '#F07B42',
    primaryContainerHovered: '#2F1305',
    primaryContainerDisabled: '#6F7378',
    primaryContainerFocused: '#5C250A',
    // Secondary
    secondary: '#F0F5FA',
    onSecondary: '#14191F',
    secondaryContainer: '#2B3640',
    onSecondaryContainer: '#DAE6F1',
    secondaryHovered: '#DAE6F1',
    secondaryDisabled: '#6F7378',
    secondaryFocused: '#F0F5FA',
    secondaryContainerHovered: '#14191F',
    secondaryContainerDisabled: '#6F7378',
    secondaryContainerFocused: '#2B3640',
    // Primary Variant
    primaryVariant: '#F7BEA1',
    onPrimaryVariant: '#14191F',
    primaryVariantHovered: '#F49D71',
    primaryVariantDisabled: '#6F7378',
    primaryVariantFocused: '#F7BEA1',
    // Secondary Variant
    secondaryVariant: '#BBCDDD',
    onSecondaryVariant: '#141B1F',
    secondaryVariantHovered: '#A3B4C2',
    secondaryVariantDisabled: '#6F7378',
    secondaryVariantFocused: '#BBCDDD',
    // Success
    success: '#71AD73',
    onSuccess: '#14191F',
    successContainer: '#1F3D20',
    onSuccessContainer: '#DCEADC',
    successHovered: '#4E9850',
    successDisabled: '#6F7378',
    successFocused: '#71AD73',
    successContainerHovered: '#101E10',
    successContainerDisabled: '#6F7378',
    successContainerFocused: '#1F3D20',
    // Alert
    alert: '#FFCC66',
    onAlert: '#F0F5FA',
    alertContainer: '#664400',
    onAlertContainer: '#FFEECC',
    alertHovered: '#FFBB33',
    alertDisabled: '#6F7378',
    alertFocused: '#FFCC66',
    alertContainerHovered: '#332200',
    alertContainerDisabled: '#6F7378',
    alertContainerFocused: '#664400',
    // Error
    error: '#E05D52',
    onError: '#14191F',
    errorContainer: '#57150F',
    onErrorContainer: '#F7D7D4',
    errorHovered: '#D93426',
    errorDisabled: '#6F7378',
    errorFocused: '#E05D52',
    errorContainerHovered: '#2B0B08',
    errorContainerDisabled: '#6F7378',
    errorContainerFocused: '#57150F',
    // Info
    info: '#429FF0',
    onInfo: '#14191F',
    infoContainer: '#08365D',
    onInfoContainer: '#CFE6FB',
    infoHovered: '#1388EC',
    infoDisabled: '#6F7378',
    infoFocused: '#429FF0',
    infoContainerHovered: '#06233D',
    infoContainerDisabled: '#6F7378',
    infoContainerFocused: '#08365D',
    // Neutral
    neutral: '#7F95A9',
    onNeutral: '#14191F',
    neutralContainer: '#2B3640',
    onNeutralContainer: '#DAE6F1',
    neutralHovered: '#627C93',
    neutralDisabled: '#6F7378',
    neutralFocused: '#7F95A9',
    neutralContainerHovered: '#14191F',
    neutralContainerDisabled: '#6F7378',
    neutralContainerFocused: '#2B3640',
    // Background
    background: '#14191F',
    onBackground: '#F7FAFD',
    backgroundHovered: '#14191F',
    backgroundDisabled: '#6F7378',
    backgroundFocused: '#14191F',
    // Surface
    surface: '#14191F',
    onSurface: '#F7FAFD',
    surfaceHovered: '#14191F',
    surfaceDisabled: '#6F7378',
    surfaceFocused: '#14191F',
    // Surface Inverse
    surfaceInverse: '#F0F5FA',
    onSurfaceInverse: '#14191F',
    surfaceInverseHovered: '#DAE6F1',
    surfaceInverseDisabled: '#6F7378',
    surfaceInverseFocused: '#F0F5FA',
    // Outline
    outline: '#3D4D5C',
    // Overlay
    overlay: '#2B3640',
  },
})

const themes = {
  default: defaultTheme,
  dark: darkTheme,
}

// TODO: this interface should be imported from @spark-ui/theme-utils
interface SparkConfig {
  tailwindThemeConfigFilePath: string
  CSSTokens: {
    themes: Record<string, Theme>
    filePath: string
  }
}

export default {
  tailwindThemeConfigFilePath: './tailwind.theme.cjs',
  CSSTokens: {
    themes,
    filePath: './src/tailwind.css',
  },
} satisfies SparkConfig
