import 'styled-components'

import { theme } from 'styles/Theme.styles';

type Theme = typeof theme

declare module 'styled-components' {
    export interface DefaultTheme extends Theme { }
}
